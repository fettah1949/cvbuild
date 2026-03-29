import React from 'react';
import { CVData, Language } from '@/types';
import { Mail, Phone, MapPin, Globe, Award } from 'lucide-react';
import { normalizeColor, addAlpha } from '@/utils/colorUtils';
import { getLabels } from '@/utils/translations';

interface TemplateProps {
  data: CVData;
}

export default function CVTemplate2({ data }: TemplateProps) {
  const safeColor = React.useMemo(() => normalizeColor(data.themeColor), [data.themeColor]);
  const safeColorWithAlpha30 = React.useMemo(() => addAlpha(data.themeColor, 0.3), [data.themeColor]);
  const safeColorWithAlpha40 = React.useMemo(() => addAlpha(data.themeColor, 0.4), [data.themeColor]);
  const labels = getLabels(data.language);

  const skills = data.skills?.map(skill => typeof skill === 'string' ? skill : (skill as { name?: string }).name || '').filter(Boolean) || [];
  return (
    <div className="bg-white min-h-[1056px] w-[816px] shadow-lg mx-auto p-12" id="cv-preview">
      <style>{`
        #cv-preview {
          --theme-color: ${safeColor};
          --theme-color-alpha30: ${safeColorWithAlpha30};
          --theme-color-alpha40: ${safeColorWithAlpha40};
        }
      `}</style>
      
      {/* Header */}
      <header className="text-center mb-10">
        {data.photo && (
          <div className="mb-6">
            <img 
              src={data.photo} 
              alt="Profile" 
              className="w-32 h-32 object-cover rounded-full mx-auto border-4 shadow-lg"
              style={{ borderColor: 'var(--theme-color)' }}
            />
          </div>
        )}
        <h1 className="text-5xl font-serif mb-3 tracking-tight" style={{ color: '#111827' }}>
          {data.fullName || 'Your Name'}
        </h1>
        {data.experience[0]?.position && (
          <p className="text-xl font-medium mb-5 uppercase tracking-widest" style={{ color: safeColor }}>
            {data.experience[0]?.position}
          </p>
        )}
        <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-2 text-sm py-3 border-t border-b" style={{ color: '#4b5563', borderColor: `${safeColor}66` }}>
          {data.email && (
            <span className="flex items-center gap-1.5">
              <Mail size={14} style={{ color: 'var(--theme-color)' }} /> {data.email}
            </span>
          )}
          {data.phone && (
            <span className="flex items-center gap-1.5">
              <Phone size={14} style={{ color: 'var(--theme-color)' }} /> {data.phone}
            </span>
          )}
          {data.address && (
            <span className="flex items-center gap-1.5">
              <MapPin size={14} style={{ color: 'var(--theme-color)' }} /> {data.address}
            </span>
          )}
        </div>
      </header>

      <div className="space-y-8">
        
        {/* Summary */}
        {data.summary && (
          <section>
            <h2 className="text-lg font-bold tracking-widest uppercase mb-3 pb-1 flex items-center gap-4" style={{ color: '#111827' }}>
              <span className="flex-1 h-px" style={{ backgroundColor: '#e5e7eb' }}></span>
              {labels.profile}
              <span className="flex-1 h-px" style={{ backgroundColor: '#e5e7eb' }}></span>
            </h2>
            <p className="leading-relaxed text-sm whitespace-pre-line text-justify" style={{ color: '#374151' }}>
              {data.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <section>
            <h2 className="text-lg font-bold tracking-widest uppercase mb-5 pb-1 flex items-center gap-4" style={{ color: '#111827' }}>
              <span className="flex-1 h-px" style={{ backgroundColor: '#e5e7eb' }}></span>
              {labels.experience}
              <span className="flex-1 h-px" style={{ backgroundColor: '#e5e7eb' }}></span>
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp) => (
                <div key={exp.id} className="flex gap-4">
                  <div className="w-16 pt-1">
                    <div className="font-bold text-lg" style={{ color: safeColor }}>
                      {exp.endDate?.split('-')[0] || 'Now'}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg" style={{ color: '#111827' }}>{exp.position}</h3>
                    <p className="italic text-sm mb-2" style={{ color: '#374151' }}>{exp.company}</p>
                    <p className="text-sm whitespace-pre-line leading-relaxed" style={{ color: '#4b5563' }}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section>
            <h2 className="text-lg font-bold tracking-widest uppercase mb-5 pb-1 flex items-center gap-4" style={{ color: '#111827' }}>
              <span className="flex-1 h-px" style={{ backgroundColor: '#e5e7eb' }}></span>
              {labels.education}
              <span className="flex-1 h-px" style={{ backgroundColor: '#e5e7eb' }}></span>
            </h2>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="font-bold" style={{ color: '#111827' }}>{edu.degree}</h3>
                  <p className="text-sm" style={{ color: '#374151' }}>{edu.institution}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section>
            <h2 className="text-lg font-bold tracking-widest uppercase mb-5 pb-1 flex items-center gap-4" style={{ color: '#111827' }}>
              <span className="flex-1 h-px" style={{ backgroundColor: '#e5e7eb' }}></span>
              {labels.skills}
              <span className="flex-1 h-px" style={{ backgroundColor: '#e5e7eb' }}></span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="text-sm font-medium" style={{ color: '#1f2937' }}>{skill}</span>
              ))}
            </div>
          </section>
        )}

        {/* Languages */}
        {data.languages && data.languages.length > 0 && (
          <section>
            <h2 className="text-lg font-bold tracking-widest uppercase mb-5 pb-1 flex items-center gap-4" style={{ color: '#111827' }}>
              <span className="flex-1 h-px" style={{ backgroundColor: '#e5e7eb' }}></span>
              <span className="flex items-center gap-2">
                <Globe size={18} style={{ color: safeColor }} /> {labels.languages}
              </span>
              <span className="flex-1 h-px" style={{ backgroundColor: '#e5e7eb' }}></span>
            </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {data.languages.map((lang: Language, index: number) => (
                <div key={lang.id || index} className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: '#1f2937' }}>{lang.name}</span>
                  <span className="text-sm font-medium" style={{ color: safeColor }}>{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Awards */}
        {data.awards && data.awards.length > 0 && (
          <section>
            <h2 className="text-lg font-bold tracking-widest uppercase mb-5 pb-1 flex items-center gap-4" style={{ color: '#111827' }}>
              <span className="flex-1 h-px" style={{ backgroundColor: '#e5e7eb' }}></span>
              <span className="flex items-center gap-2">
                <Award size={18} style={{ color: safeColor }} /> {labels.awards}
              </span>
              <span className="flex-1 h-px" style={{ backgroundColor: '#e5e7eb' }}></span>
            </h2>
            <div className="space-y-3">
              {data.awards.map((award, index) => (
                <div key={award.id || index} className="p-3 rounded-lg border-l-2" style={{ borderColor: safeColor, backgroundColor: '#f9fafb' }}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-sm" style={{ color: '#111827' }}>{award.title}</h3>
                    <span className="text-xs italic whitespace-nowrap" style={{ color: '#6b7280' }}>{award.date}</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: '#374151' }}>
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
