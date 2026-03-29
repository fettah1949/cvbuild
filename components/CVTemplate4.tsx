"use client";

import React from 'react';
import { CVData, Language } from '@/types';
import { getLabels } from '@/utils/translations';

interface CVTemplate4Props {
  data: CVData;
}

export default function CVTemplate4({ data }: CVTemplate4Props) {
  const safeColor = data.themeColor || '#1e40af';
  const labels = getLabels(data.language);

  const skills = data.skills?.map(skill => typeof skill === 'string' ? skill : (skill as { name?: string }).name || '').filter(Boolean) || [];

  return (
    <div id="cv-preview" className="w-[210mm] h-[297mm] bg-white flex flex-col">
      <div className="flex-1 flex">
        <div className="w-[35%] p-6 flex flex-col border-r-2" style={{ backgroundColor: '#f8fafc', borderColor: '#e5e7eb' }}>
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto rounded-full border-4 flex items-center justify-center overflow-hidden" style={{ borderColor: safeColor }}>
              {data.photo ? (
                <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold" style={{ backgroundColor: '#e5e7eb', color: '#9ca3af' }}>
                  {data.fullName ? data.fullName.charAt(0).toUpperCase() : '?'}
                </div>
              )}
            </div>
          </div>

          <div className="mb-5">
            <h2 className="text-lg font-bold uppercase tracking-wider mb-3 pb-2 border-b-2" style={{ borderColor: safeColor, color: safeColor }}>
              {labels.contact}
            </h2>
            <div className="space-y-2 text-sm" style={{ color: '#374151' }}>
              {data.email && <div className="flex items-start"><span className="mr-2">{data.email}</span></div>}
              {data.phone && <div className="flex items-start"><span className="mr-2">{data.phone}</span></div>}
              {data.address && <div className="flex items-start"><span className="mr-2">{data.address}</span></div>}
            </div>
          </div>

          {skills.length > 0 && (
            <div className="mb-5">
              <h2 className="text-lg font-bold uppercase tracking-wider mb-3 pb-2 border-b-2" style={{ borderColor: safeColor, color: safeColor }}>
                {labels.skills}
              </h2>
              <div className="space-y-2 text-sm">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: safeColor }}></div>
                    <span style={{ color: '#374151' }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.languages && data.languages.length > 0 && (
            <div className="mb-5">
              <h2 className="text-lg font-bold uppercase tracking-wider mb-3 pb-2 border-b-2" style={{ borderColor: safeColor, color: safeColor }}>
                {labels.languages}
              </h2>
              <div className="space-y-2 text-sm" style={{ color: '#374151' }}>
                {data.languages.map((lang: Language, index: number) => (
                  <div key={lang.id || index} className="flex justify-between">
                    <span>{lang.name}</span>
                    <span className="font-medium" style={{ color: safeColor }}>{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.hobbies && data.hobbies.length > 0 && (
            <div className="mb-5">
              <h2 className="text-lg font-bold uppercase tracking-wider mb-3 pb-2 border-b-2" style={{ borderColor: safeColor, color: safeColor }}>
                {labels.hobbies}
              </h2>
              <div className="space-y-2 text-sm" style={{ color: '#374151' }}>
                {data.hobbies.map((hobby, index) => (
                  <div key={index}>{hobby}</div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="w-[65%] p-8 flex flex-col">
          <div className="mb-6 pb-4 border-b-2" style={{ borderColor: safeColor }}>
            <h1 className="text-4xl font-bold mb-2 uppercase tracking-tight" style={{ color: '#111827' }}>
              {data.fullName || 'Votre Nom'}
            </h1>
            <p className="text-xl font-medium" style={{ color: safeColor }}>
              {data.jobTitle || 'Titre du poste'}
            </p>
          </div>

          {data.profile && (
            <div className="mb-6">
              <h2 className="text-xl font-bold uppercase tracking-wider mb-3 pb-2 border-b-2 flex items-center" style={{ borderColor: '#d1d5db' }}>
                <span className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: safeColor }}></span>
                {labels.profile}
              </h2>
              <p className="leading-relaxed text-sm" style={{ color: '#374151' }}>{data.profile}</p>
            </div>
          )}

          {data.experience && data.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold uppercase tracking-wider mb-3 pb-2 border-b-2 flex items-center" style={{ borderColor: '#d1d5db' }}>
                <span className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: safeColor }}></span>
                {labels.experience}
              </h2>
              <div className="space-y-4">
                {data.experience.map((exp, index) => (
                  <div key={index} className="relative pl-4 border-l-2" style={{ borderColor: safeColor }}>
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full border-2 border-white" style={{ backgroundColor: safeColor }}></div>
                    <h3 className="font-bold text-base" style={{ color: '#111827' }}>{exp.position}</h3>
                    <p className="font-medium text-sm mb-1" style={{ color: safeColor }}>{exp.company}</p>
                    <p className="text-xs mb-2 italic" style={{ color: '#6b7280' }}>{exp.startDate} - {exp.endDate}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.education && data.education.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold uppercase tracking-wider mb-3 pb-2 border-b-2 flex items-center" style={{ borderColor: '#d1d5db' }}>
                <span className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: safeColor }}></span>
                {labels.education}
              </h2>
              <div className="space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index} className="relative pl-4 border-l-2" style={{ borderColor: safeColor }}>
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full border-2 border-white" style={{ backgroundColor: safeColor }}></div>
                    <h3 className="font-bold text-base" style={{ color: '#111827' }}>{edu.degree}</h3>
                    <p className="font-medium text-sm mb-1" style={{ color: safeColor }}>{edu.institution}</p>
                    <p className="text-xs italic" style={{ color: '#6b7280' }}>{edu.startDate} - {edu.endDate}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.awards && data.awards.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold uppercase tracking-wider mb-3 pb-2 border-b-2 flex items-center" style={{ borderColor: '#d1d5db' }}>
                <span className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: safeColor }}></span>
                {labels.awards}
              </h2>
              <div className="space-y-3">
                {data.awards.map((award, index) => (
                  <div key={index} className="p-3 rounded-lg border-l-4" style={{ borderColor: safeColor, backgroundColor: '#f8fafc' }}>
                    <h3 className="font-bold text-sm" style={{ color: '#111827' }}>{award.title}</h3>
                    <p className="text-xs italic mb-1" style={{ color: '#4b5563' }}>{award.date}</p>
                    <p className="text-sm" style={{ color: '#374151' }}>{award.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
