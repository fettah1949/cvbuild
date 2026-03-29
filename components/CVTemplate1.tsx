import React from 'react';
import { CVData, Language } from '@/types';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, User, Globe, Award } from 'lucide-react';
import { normalizeColor, addAlpha } from '@/utils/colorUtils';
import { getLabels } from '@/utils/translations';

interface TemplateProps {
  data: CVData;
}

export default function CVTemplate1({ data }: TemplateProps) {
  const safeColor = React.useMemo(() => normalizeColor(data.themeColor), [data.themeColor]);
  const safeColorWithAlpha = React.useMemo(() => addAlpha(data.themeColor, 0.9), [data.themeColor]);
  const labels = getLabels(data.language);

  const skills = data.skills?.map(skill => typeof skill === 'string' ? skill : (skill as { name?: string }).name || '').filter(Boolean) || [];
  return (
    <div className="bg-white min-h-[1056px] w-[816px] shadow-lg mx-auto flex flex-col font-sans" id="cv-preview">
      <style>{`
        #cv-preview {
          --theme-color: ${safeColor};
          --theme-color-alpha: ${safeColorWithAlpha};
        }
      `}</style>
      
      {/* Header section (Top) */}
      <header className="p-10 text-white flex items-center justify-between gap-8" style={{ backgroundColor: 'var(--theme-color)', minHeight: '180px' }}>
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold uppercase tracking-widest mb-2">{data.fullName || 'YOUR NAME'}</h1>
          <p className="text-2xl font-light tracking-wide opacity-90">{data.experience[0]?.position || 'Professional Title'}</p>
        </div>
        {data.photo && (
          <div className="shrink-0">
            <img 
              src={data.photo} 
              alt="Profile" 
              className="w-28 h-28 object-cover rounded-lg border-4 border-white/30 shadow-lg"
            />
          </div>
        )}
      </header>

      {/* Main Body */}
      <div className="flex flex-1">
        
        {/* Left Sidebar */}
        <div className="w-1/3 p-8 flex flex-col gap-8 text-white" style={{ backgroundColor: 'var(--theme-color-alpha)' }}>
          
          {/* Contact */}
          <section>
            <h2 className="text-lg font-bold border-b-2 border-white/30 pb-2 mb-4 uppercase tracking-wider flex items-center gap-2">
              {labels.contact}
            </h2>
            <div className="space-y-3 text-sm opacity-95">
              {data.email && (
                <div className="flex items-center gap-3">
                  <Mail size={16} /> 
                  <span className="break-all">{data.email}</span>
                </div>
              )}
              {data.phone && (
                <div className="flex items-center gap-3">
                  <Phone size={16} /> 
                  <span>{data.phone}</span>
                </div>
              )}
              {data.address && (
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0" /> 
                  <span>{data.address}</span>
                </div>
              )}
            </div>
          </section>

          {/* Education */}
          {data.education.length > 0 && (
            <section>
              <h2 className="text-lg font-bold border-b-2 border-white/30 pb-2 mb-4 uppercase tracking-wider flex items-center gap-2">
                <GraduationCap size={20} /> {labels.education}
              </h2>
              <div className="space-y-5">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-bold text-base leading-tight mb-1">{edu.degree}</h3>
                    <p className="text-sm opacity-90 leading-tight">{edu.institution}</p>
                    <p className="text-xs opacity-75 mt-1 font-medium">{edu.startDate} - {edu.endDate}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-lg font-bold border-b-2 border-white/30 pb-2 mb-4 uppercase tracking-wider flex items-center gap-2">
                {labels.skills}
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-white/20 text-sm rounded-md font-medium backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {data.languages && data.languages.length > 0 && (
            <section>
              <h2 className="text-lg font-bold border-b-2 border-white/30 pb-2 mb-4 uppercase tracking-wider flex items-center gap-2">
                <Globe size={20} /> {labels.languages}
              </h2>
              <div className="space-y-2 text-sm">
                {data.languages.map((lang: Language, index: number) => (
                  <div key={lang.id || index} className="flex justify-between">
                    <span>{lang.name}</span>
                    <span className="opacity-90">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Content */}
        <div className="w-2/3 p-8 bg-white space-y-8">
          
          {/* Summary */}
          {data.summary && (
            <section>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider flex items-center gap-2" style={{ color: safeColor }}>
                <User size={24} /> {labels.profile}
              </h2>
              <p className="leading-relaxed text-sm text-justify whitespace-pre-line" style={{ color: '#374151' }}>
                {data.summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {data.experience.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--theme-color)' }}>
                <Briefcase size={24} /> {labels.experience}
              </h2>
              <div className="space-y-6">
                {data.experience.map((exp, index) => (
                  <div key={exp.id} className="relative pl-6 mb-4">
                    {index !== data.experience.length - 1 && (
                      <div
                        className="absolute left-0 top-2 bottom-[-24px] w-0.5"
                        style={{ backgroundColor: `${safeColor}33` }}
                      ></div>
                    )}
                    <div
                      className="absolute left-0 top-2 w-3 h-3 rounded-full border-2 border-white"
                      style={{ backgroundColor: safeColor }}
                    ></div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-lg leading-tight" style={{ color: '#111827' }}>{exp.position}</h3>
                      <span className="text-xs font-bold px-3 py-1 whitespace-nowrap ml-4 rounded-full border" style={{ backgroundColor: '#f3f4f6', color: '#4b5563', borderColor: '#e5e7eb' }}>
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <p className="font-semibold mb-2 text-md" style={{ color: '#4b5563' }}>{exp.company}</p>
                    <p className="text-sm whitespace-pre-line leading-relaxed" style={{ color: '#374151' }}>
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Awards */}
          {data.awards && data.awards.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--theme-color)' }}>
                <Award size={24} /> {labels.awards}
              </h2>
              <div className="space-y-4">
                {data.awards.map((award, index) => (
                  <div key={award.id || index} className="p-4 rounded-lg border-l-4" style={{ borderColor: safeColor, backgroundColor: '#f9fafb' }}>
                    <h3 className="font-bold text-base leading-tight mb-1" style={{ color: '#111827' }}>{award.title}</h3>
                    <p className="text-xs italic mb-2" style={{ color: '#6b7280' }}>{award.date}</p>
                    <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#374151' }}>
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
