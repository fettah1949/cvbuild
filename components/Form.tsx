import React from 'react';
import { CVData, Language } from '@/types';
import { Plus, Trash2 } from 'lucide-react';

interface FormProps {
  data: CVData;
  onChange: (data: CVData) => void;
}

export default function Form({ data, onChange }: FormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({ ...data, photo: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    onChange({ ...data, photo: undefined });
  };

  const handleArrayChange = <T extends 'experience' | 'education'>(
    field: T,
    index: number,
    key: keyof CVData[T][0],
    value: string
  ) => {
    const newArray = [...data[field]];
    newArray[index] = { ...newArray[index], [key]: value };
    onChange({ ...data, [field]: newArray });
  };

  const handleStringArrayChange = (field: 'skills' | 'hobbies', index: number, value: string) => {
    const newArray = [...data[field]];
    newArray[index] = value;
    onChange({ ...data, [field]: newArray });
  };

  const handleLanguageChange = (index: number, key: keyof Language, value: string) => {
    const newArray = [...(data.languages || [])];
    newArray[index] = { ...newArray[index], [key]: value };
    onChange({ ...data, languages: newArray });
  };

  const handleAwardChange = (index: number, key: keyof CVData['awards'][0], value: string) => {
    const newArray = [...data.awards];
    newArray[index] = { ...newArray[index], [key]: value };
    onChange({ ...data, awards: newArray });
  };

  const addItem = <T extends 'experience' | 'education' | 'skills'>(
    field: T,
    item: CVData[T][0]
  ) => {
    onChange({ ...data, [field]: [...data[field], item] });
  };

  const addStringItem = (field: 'skills' | 'hobbies', value: string) => {
    onChange({ ...data, [field]: [...(data[field] || []), value] });
  };

  const addLanguageItem = () => {
    onChange({ 
      ...data, 
      languages: [...(data.languages || []), { id: Date.now().toString(), name: '', proficiency: 'Intermediate' }] 
    });
  };

  const addAwardItem = () => {
    onChange({ ...data, awards: [...(data.awards || []), { id: Date.now().toString(), title: '', date: '', description: '' }] });
  };

  const removeItem = <T extends 'experience' | 'education' | 'skills'>(
    field: T,
    index: number
  ) => {
    const newArray = [...data[field]];
    newArray.splice(index, 1);
    onChange({ ...data, [field]: newArray });
  };

  const removeStringItem = (field: 'skills' | 'hobbies', index: number) => {
    const newArray = [...data[field]];
    newArray.splice(index, 1);
    onChange({ ...data, [field]: newArray });
  };

  const removeLanguageItem = (index: number) => {
    const newArray = [...(data.languages || [])];
    newArray.splice(index, 1);
    onChange({ ...data, languages: newArray });
  };

  const removeAwardItem = (index: number) => {
    const newArray = [...data.awards];
    newArray.splice(index, 1);
    onChange({ ...data, awards: newArray });
  };

  return (
    <div className="space-y-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full overflow-y-auto">
      
      {/* Settings */}
      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Settings</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Template</label>
            <select
              name="template"
              value={data.template}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="modern">Modern</option>
              <option value="simple">Simple</option>
              <option value="elegant">Elegant</option>
              <option value="professional">Professional</option>
              <option value="creative">Creative</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
            <select
              name="language"
              value={data.language}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Theme Color</label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                name="themeColor"
                value={data.themeColor}
                onChange={handleChange}
                className="w-10 h-10 p-1 border border-gray-300 rounded-md cursor-pointer"
              />
              <span className="text-sm text-gray-500">{data.themeColor}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Info */}
      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Personal Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-1 sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" name="fullName" value={data.fullName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
            <input type="text" name="jobTitle" value={data.jobTitle || ''} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Software Engineer" />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Photo</label>
            {data.photo ? (
              <div className="flex items-center space-x-4">
                <img src={data.photo} alt="Profile" className="w-20 h-20 object-cover rounded-lg border border-gray-300" />
                <button
                  onClick={handleRemovePhoto}
                  className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm"
                >
                  Remove Photo
                </button>
              </div>
            ) : (
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" name="email" value={data.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="john@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input type="tel" name="phone" value={data.phone} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="+1 234 567 890" />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input type="text" name="address" value={data.address} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="City, Country" />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
            <textarea name="summary" value={data.summary} onChange={handleChange} rows={3} className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="A brief summary of your professional background..."></textarea>
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Profile</label>
            <textarea name="profile" value={data.profile || ''} onChange={handleChange} rows={3} className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="A detailed professional profile..."></textarea>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section>
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="text-xl font-bold text-gray-800">Experience</h2>
          <button onClick={() => addItem('experience', { id: Date.now().toString(), company: '', position: '', startDate: '', endDate: '', description: '' })} className="flex items-center text-sm text-blue-600 hover:text-blue-800">
            <Plus size={16} className="mr-1" /> Add
          </button>
        </div>
        {data.experience.map((exp, index) => (
          <div key={exp.id} className="mb-4 p-4 border border-gray-200 rounded-md bg-gray-50 relative">
            <button onClick={() => removeItem('experience', index)} className="absolute top-4 right-4 text-red-500 hover:text-red-700">
              <Trash2 size={18} />
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mr-8">
              <div className="col-span-1 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                <input type="text" value={exp.position} onChange={(e) => handleArrayChange('experience', index, 'position', e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Software Engineer" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input type="text" value={exp.company} onChange={(e) => handleArrayChange('experience', index, 'company', e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Tech Corp" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start</label>
                  <input type="text" value={exp.startDate} onChange={(e) => handleArrayChange('experience', index, 'startDate', e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Jan 2020" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End</label>
                  <input type="text" value={exp.endDate} onChange={(e) => handleArrayChange('experience', index, 'endDate', e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Present" />
                </div>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea value={exp.description} onChange={(e) => handleArrayChange('experience', index, 'description', e.target.value)} rows={3} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Key responsibilities and achievements..."></textarea>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Education */}
      <section>
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="text-xl font-bold text-gray-800">Education</h2>
          <button onClick={() => addItem('education', { id: Date.now().toString(), institution: '', degree: '', startDate: '', endDate: '' })} className="flex items-center text-sm text-blue-600 hover:text-blue-800">
            <Plus size={16} className="mr-1" /> Add
          </button>
        </div>
        {data.education.map((edu, index) => (
          <div key={edu.id} className="mb-4 p-4 border border-gray-200 rounded-md bg-gray-50 relative">
            <button onClick={() => removeItem('education', index)} className="absolute top-4 right-4 text-red-500 hover:text-red-700">
              <Trash2 size={18} />
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mr-8">
              <div className="col-span-1 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                <input type="text" value={edu.degree} onChange={(e) => handleArrayChange('education', index, 'degree', e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Bachelor of Science in CS" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                <input type="text" value={edu.institution} onChange={(e) => handleArrayChange('education', index, 'institution', e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" placeholder="University Name" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start</label>
                  <input type="text" value={edu.startDate} onChange={(e) => handleArrayChange('education', index, 'startDate', e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" placeholder="2016" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End</label>
                  <input type="text" value={edu.endDate} onChange={(e) => handleArrayChange('education', index, 'endDate', e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" placeholder="2020" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section>
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="text-xl font-bold text-gray-800">Skills</h2>
          <button onClick={() => addStringItem('skills', '')} className="flex items-center text-sm text-blue-600 hover:text-blue-800">
            <Plus size={16} className="mr-1" /> Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {(data.skills || []).map((skill, index) => (
            <div key={index} className="flex items-center bg-gray-100 rounded-full px-3 py-1 border border-gray-200">
              <input
                type="text"
                value={skill}
                onChange={(e) => handleStringArrayChange('skills', index, e.target.value)}
                className="bg-transparent border-none focus:ring-0 w-24 text-sm"
                placeholder="Skill name"
                autoFocus
              />
              <button onClick={() => removeStringItem('skills', index)} className="ml-2 text-gray-500 hover:text-red-500">
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section>
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="text-xl font-bold text-gray-800">Languages</h2>
          <button onClick={addLanguageItem} className="flex items-center text-sm text-blue-600 hover:text-blue-800">
            <Plus size={16} className="mr-1" /> Add
          </button>
        </div>
        <div className="space-y-3">
          {(data.languages || []).map((lang, index) => (
            <div key={lang.id || index} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3 border border-gray-200">
              <input
                type="text"
                value={lang.name}
                onChange={(e) => handleLanguageChange(index, 'name', e.target.value)}
                className="flex-1 bg-white border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Language"
              />
              <select
                value={lang.proficiency}
                onChange={(e) => handleLanguageChange(index, 'proficiency', e.target.value)}
                className="bg-white border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Native">Native</option>
                <option value="Fluent">Fluent</option>
                <option value="Professional">Professional</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Basic">Basic</option>
              </select>
              <button onClick={() => removeLanguageItem(index)} className="text-gray-500 hover:text-red-500 p-1">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section>
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="text-xl font-bold text-gray-800">Hobbies</h2>
          <button onClick={() => addStringItem('hobbies', '')} className="flex items-center text-sm text-blue-600 hover:text-blue-800">
            <Plus size={16} className="mr-1" /> Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {(data.hobbies || []).map((hobby, index) => (
            <div key={index} className="flex items-center bg-gray-100 rounded-full px-3 py-1 border border-gray-200">
              <input
                type="text"
                value={hobby}
                onChange={(e) => handleStringArrayChange('hobbies', index, e.target.value)}
                className="bg-transparent border-none focus:ring-0 w-24 text-sm"
                placeholder="Hobby"
                autoFocus
              />
              <button onClick={() => removeStringItem('hobbies', index)} className="ml-2 text-gray-500 hover:text-red-500">
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section>
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="text-xl font-bold text-gray-800">Awards</h2>
          <button onClick={addAwardItem} className="flex items-center text-sm text-blue-600 hover:text-blue-800">
            <Plus size={16} className="mr-1" /> Add
          </button>
        </div>
        {(data.awards || []).map((award, index) => (
          <div key={award.id} className="mb-4 p-4 border border-gray-200 rounded-md bg-gray-50 relative">
            <button onClick={() => removeAwardItem(index)} className="absolute top-4 right-4 text-red-500 hover:text-red-700">
              <Trash2 size={18} />
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mr-8">
              <div className="col-span-1 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input type="text" value={award.title} onChange={(e) => handleAwardChange(index, 'title', e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Award Title" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input type="text" value={award.date} onChange={(e) => handleAwardChange(index, 'date', e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Jan 2023" />
              </div>
              <div className="col-span-1 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea value={award.description} onChange={(e) => handleAwardChange(index, 'description', e.target.value)} rows={2} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Award description..."></textarea>
              </div>
            </div>
          </div>
        ))}
      </section>
      
    </div>
  );
}
