import React from 'react';
import { CVData, Language, Experience, Education } from '@/types';
import { Mail, Phone, MapPin, Globe, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import { getLabels } from '@/utils/translations';

interface TemplateProps {
  data: CVData;
}

export default function CVTemplate3({ data }: TemplateProps) {
  const safeColor = data.themeColor || '#3b82f6';
  const labels = getLabels(data.language);

  const skills = data.skills?.map((skill: string | { name?: string }) => typeof skill === 'string' ? skill : skill.name || '').filter(Boolean) || [];

  return (
    <div className="bg-white min-h-[1056px] w-[816px] shadow-lg mx-auto flex font-sans" id="cv-preview">

      {/* Left Sidebar - Accent */}
      <div className="w-1/3 text-white flex flex-col" style={{ backgroundColor: '#1f2937' }}>
        
        {/* Photo Section */}
        {data.photo && (
          <div className="p-6 flex justify-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 shadow-xl" style={{ borderColor: safeColor }}>
              <img 
                src={data.photo} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Name & Title */}
        <div className="text-center px-6 pb-6">
          <h1 className="text-3xl font-bold mb-2 leading-tight">{data.fullName || 'YOUR NAME'}</h1>
          <p className="text-lg font-medium" style={{ color: safeColor }}>
            {data.experience[0]?.position || 'PROFESSIONAL TITLE'}
          </p>
        </div>

        {/* Contact Information */}
        <div className="px-6 py-6 space-y-4 border-t" style={{ borderColor: '#374151' }}>
          <h2 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2" style={{ color: safeColor }}>
            <Mail size={16} /> {labels.contact}
          </h2>
          {data.email && (
            <div className="flex items-center gap-3 text-sm">
              <Mail size={14} className="flex-shrink-0" />
              <span className="break-all">{data.email}</span>
            </div>
          )}
          {data.phone && (
            <div className="flex items-center gap-3 text-sm">
              <Phone size={14} className="flex-shrink-0" />
              <span>{data.phone}</span>
            </div>
          )}
          {data.address && (
            <div className="flex items-center gap-3 text-sm">
              <MapPin size={14} className="flex-shrink-0" />
              <span>{data.address}</span>
            </div>
          )}
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="px-6 py-6 border-t flex-1" style={{ borderColor: '#374151' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2" style={{ color: safeColor }}>
              <Code size={16} /> {labels.skills}
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill: string, index: number) => (
                <span 
                  key={index} 
                  className="text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{ 
                    backgroundColor: safeColor + '20',
                    color: safeColor,
                    border: `1px solid ${safeColor}40`
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Languages / Additional Info */}
        {data.languages && data.languages.length > 0 && (
          <div className="px-6 py-6 border-t" style={{ borderColor: '#374151' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2" style={{ color: safeColor }}>
              <Globe size={16} /> {labels.languages}
            </h2>
            <div className="space-y-2 text-sm">
              {data.languages.map((lang: Language, index: number) => (
                <div key={lang.id || index} className="flex justify-between">
                  <span>{lang.name}</span>
                  <span style={{ color: safeColor }}>{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Content */}
      <div className="w-2/3 bg-white p-10 flex flex-col">
        
        {/* Professional Summary */}
        {data.summary && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold uppercase tracking-wider mb-4 pb-2 flex items-center gap-3" style={{ color: safeColor, borderBottom: `2px solid ${safeColor}30` }}>
              <Award size={24} /> {labels.profile}
            </h2>
            <p className="leading-relaxed text-sm" style={{ color: '#374151' }}>{data.summary}</p>
          </section>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold uppercase tracking-wider mb-5 pb-2 flex items-center gap-3" style={{ color: safeColor, borderBottom: `2px solid ${safeColor}30` }}>
              <Briefcase size={24} /> {labels.experience}
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp: Experience, index: number) => (
                <div key={exp.id} className="relative pl-6">
                  {index !== data.experience.length - 1 && (
                    <div
                      className="absolute left-0 top-2 bottom-[-24px] w-0.5" 
                      style={{ backgroundColor: `${safeColor}30` }}
                    ></div>
                  )}
                  <div 
                    className="absolute left-0 top-2 w-3 h-3 rounded-full border-2 border-white"
                    style={{ backgroundColor: safeColor }}
                  ></div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-lg" style={{ color: '#111827' }}>{exp.position}</h3>
                    <span className="text-xs font-bold px-2 py-1 rounded whitespace-nowrap" style={{ backgroundColor: `${safeColor}26`, color: safeColor }}>
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <p className="font-semibold text-sm mb-2" style={{ color: '#4b5563' }}>{exp.company}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold uppercase tracking-wider mb-5 pb-2 flex items-center gap-3" style={{ color: safeColor, borderBottom: `2px solid ${safeColor}30` }}>
              <GraduationCap size={24} /> {labels.education}
            </h2>
            <div className="space-y-5">
              {data.education.map((edu: Education) => (
                <div key={edu.id} className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1" style={{ color: '#111827' }}>{edu.degree}</h3>
                    <p className="text-sm mb-1" style={{ color: '#4b5563' }}>{edu.institution}</p>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded whitespace-nowrap" style={{ backgroundColor: `${safeColor}26`, color: safeColor }}>
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications / Awards */}
        {data.awards && data.awards.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wider mb-4 pb-2 flex items-center gap-3" style={{ color: safeColor, borderBottom: `2px solid ${safeColor}30` }}>
              <Award size={24} /> {labels.awards}
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {data.awards.map((award, index) => (
                <div key={award.id || index} className="text-center p-3 rounded-lg" style={{ backgroundColor: `${safeColor}1a`, border: `1px solid ${safeColor}33` }}>
                  <p className="font-bold text-sm leading-tight" style={{ color: '#111827' }}>{award.title}</p>
                  <p className="text-xs mt-1" style={{ color: '#4b5563' }}>{award.date}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
