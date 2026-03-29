"use client";

import React from 'react';
import { CVData, Language } from '@/types';
import { getLabels } from '@/utils/translations';

interface CVTemplate5Props {
  data: CVData;
}

export default function CVTemplate5({ data }: CVTemplate5Props) {
  const safeColor = data.themeColor || '#6366f1';
  const labels = getLabels(data.language);

  const skills = data.skills?.map(skill => typeof skill === 'string' ? skill : (skill as { name?: string }).name || '').filter(Boolean) || [];

  const getProficiencyLevel = (proficiency: string): number => {
    const levels: Record<string, number> = {
      'Native': 5,
      'Fluent': 4,
      'Professional': 3,
      'Intermediate': 2,
      'Basic': 1
    };
    return levels[proficiency] || 2;
  };

  return (
    <div id="cv-preview" className="w-[210mm] h-[297mm] flex flex-col" style={{ backgroundColor: '#f8fafc' }}>
      <div className="flex-1 flex">
        <div className="w-[30%] p-6 flex flex-col">
          <div className="mb-6">
            <div className="relative inline-block">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 shadow-lg" style={{ borderColor: safeColor }}>
                {data.photo ? (
                  <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold" style={{ backgroundColor: safeColor }}>
                    {data.fullName ? data.fullName.charAt(0).toUpperCase() : '?'}
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: safeColor }}>
                <span className="text-lg">✦</span>
              </div>
            </div>
          </div>

          <div className="mb-5 p-4 rounded-xl bg-white shadow-md">
            <h2 className="text-sm font-bold uppercase tracking-widest mb-3 flex items-center" style={{ color: safeColor }}>
              <span className="mr-2">✉</span> {labels.contact}
            </h2>
            <div className="space-y-2 text-xs" style={{ color: '#4b5563' }}>
              {data.email && <div className="truncate">{data.email}</div>}
              {data.phone && <div>{data.phone}</div>}
              {data.address && <div>{data.address}</div>}
            </div>
          </div>

          {skills.length > 0 && (
            <div className="mb-5 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-sm font-bold uppercase tracking-widest mb-3 flex items-center" style={{ color: safeColor }}>
                <span className="mr-2">⚡</span> {labels.skills}
              </h2>
              <div className="space-y-2">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center text-xs mb-1" style={{ color: '#374151' }}>
                      <span className="w-1.5 h-1.5 rounded-full mr-2 transition-all group-hover:scale-150" style={{ backgroundColor: safeColor }}></span>
                      {skill}
                    </div>
                    <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: '#e5e7eb' }}>
                      <div className="h-full rounded-full transition-all" style={{ width: `${Math.min(100, 60 + (index % 4) * 10)}%`, backgroundColor: safeColor }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.languages && data.languages.length > 0 && (
            <div className="mb-5 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-sm font-bold uppercase tracking-widest mb-3 flex items-center" style={{ color: safeColor }}>
                <span className="mr-2">🌍</span> {labels.languages}
              </h2>
              <div className="space-y-2 text-xs" style={{ color: '#374151' }}>
                {data.languages.map((lang: Language, index: number) => (
                  <div key={lang.id || index} className="flex items-center">
                    <div className="flex-1">{lang.name}</div>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div key={level} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: level <= getProficiencyLevel(lang.proficiency) ? safeColor : '#e5e7eb' }}></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.hobbies && data.hobbies.length > 0 && (
            <div className="mb-5 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-sm font-bold uppercase tracking-widest mb-3 flex items-center" style={{ color: safeColor }}>
                <span className="mr-2">♥</span> {labels.hobbies}
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.hobbies.map((hobby, index) => (
                  <span key={index} className="px-2 py-1 text-xs rounded-full text-white" style={{ backgroundColor: safeColor }}>
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="w-[70%] p-8 flex flex-col">
          <div className="mb-6 relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: safeColor }}></div>
            <div className="pl-4">
              <p className="text-sm font-medium uppercase tracking-wider mb-1" style={{ color: safeColor }}>
                {data.jobTitle || 'Votre Titre'}
              </p>
              <h1 className="text-5xl font-black mb-2 uppercase leading-none tracking-tight" style={{ color: '#111827' }}>
                {data.fullName || 'Votre Nom'}
              </h1>
            </div>
          </div>

          {data.profile && (
            <div className="mb-6 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: safeColor }}></div>
              <div className="pl-4">
                <h2 className="text-lg font-bold uppercase tracking-wider mb-3 pb-2 border-b-2 flex items-center" style={{ borderColor: safeColor, color: safeColor }}>
                  <span className="mr-2">◆</span> {labels.about}
                </h2>
                <p className="leading-relaxed text-sm" style={{ color: '#374151' }}>{data.profile}</p>
              </div>
            </div>
          )}

          {data.experience && data.experience.length > 0 && (
            <div className="mb-6 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: safeColor }}></div>
              <div className="pl-4">
                <h2 className="text-lg font-bold uppercase tracking-wider mb-4 pb-2 border-b-2 flex items-center" style={{ borderColor: safeColor, color: safeColor }}>
                  <span className="mr-2">◆</span> {labels.experience}
                </h2>
                <div className="space-y-5">
                  {data.experience.map((exp, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-6 top-2 w-4 h-4 rounded-full border-4 border-white shadow" style={{ backgroundColor: safeColor }}></div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 ml-4" style={{ borderColor: safeColor }}>
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-base" style={{ color: '#111827' }}>{exp.position}</h3>
                          <span className="text-xs px-2 py-1 rounded-full text-white whitespace-nowrap" style={{ backgroundColor: safeColor }}>
                            {exp.startDate} - {exp.endDate}
                          </span>
                        </div>
                        <p className="font-medium text-sm mb-2" style={{ color: safeColor }}>{exp.company}</p>
                        <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {data.education && data.education.length > 0 && (
            <div className="mb-6 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: safeColor }}></div>
              <div className="pl-4">
                <h2 className="text-lg font-bold uppercase tracking-wider mb-4 pb-2 border-b-2 flex items-center" style={{ borderColor: safeColor, color: safeColor }}>
                  <span className="mr-2">◆</span> {labels.education}
                </h2>
                <div className="space-y-4">
                  {data.education.map((edu, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-6 top-2 w-4 h-4 rounded-full border-4 border-white shadow" style={{ backgroundColor: safeColor }}></div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 ml-4" style={{ borderColor: safeColor }}>
                        <h3 className="font-bold text-base" style={{ color: '#111827' }}>{edu.degree}</h3>
                        <p className="font-medium text-sm mb-1" style={{ color: safeColor }}>{edu.institution}</p>
                        <p className="text-xs italic" style={{ color: '#6b7280' }}>{edu.startDate} - {edu.endDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {data.awards && data.awards.length > 0 && (
            <div className="mb-6 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: safeColor }}></div>
              <div className="pl-4">
                <h2 className="text-lg font-bold uppercase tracking-wider mb-4 pb-2 border-b-2 flex items-center" style={{ borderColor: safeColor, color: safeColor }}>
                  <span className="mr-2">◆</span> {labels.awards}
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {data.awards.map((award, index) => (
                    <div key={index} className="bg-white p-3 rounded-xl shadow-sm border-t-4" style={{ borderColor: safeColor }}>
                      <div className="text-2xl mb-1" style={{ color: safeColor }}>★</div>
                      <h3 className="font-bold text-xs mb-1" style={{ color: '#111827' }}>{award.title}</h3>
                      <p className="text-xs italic mb-1" style={{ color: '#6b7280' }}>{award.date}</p>
                      <p className="text-xs line-clamp-2" style={{ color: '#374151' }}>{award.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
