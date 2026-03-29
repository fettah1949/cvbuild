"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Form from '@/components/Form';
import CVTemplate1 from '@/components/CVTemplate1';
import CVTemplate2 from '@/components/CVTemplate2';
import CVTemplate3 from '@/components/CVTemplate3';
import CVTemplate4 from '@/components/CVTemplate4';
import CVTemplate5 from '@/components/CVTemplate5';
import { CVData, initialCVData } from '@/types';
import { ArrowLeft, Eye, RefreshCw } from 'lucide-react';

export default function BuilderPage() {
  const [cvData, setCvData] = useState<CVData>(initialCVData);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('cvData');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        // Delay setState slightly to avoid React sync cascade render warning
        setTimeout(() => {
          setCvData(parsed);
          setIsLoaded(true);
        }, 0);
        return;
      } catch (e) {
        console.error("Failed to parse saved CV data", e);
      }
    }
    
    setTimeout(() => {
      setIsLoaded(true);
    }, 0);
  }, []);

  // Save to localStorage when data changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('cvData', JSON.stringify(cvData));
    }
  }, [cvData, isLoaded]);

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all data? This cannot be undone.')) {
      setCvData(initialCVData);
      localStorage.removeItem('cvData');
    }
  };

  if (!isLoaded) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4 flex flex-col sm:flex-row items-center justify-between sticky top-0 z-10 gap-4 sm:gap-0">
        <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-start">
          <Link href="/" className="text-gray-500 hover:text-gray-900 flex items-center transition-colors">
            <ArrowLeft size={20} className="mr-1" /> <span className="hidden sm:inline">Back</span>
          </Link>
          <h1 className="text-xl font-bold text-gray-800 sm:border-l sm:pl-4 border-gray-300">CV Builder</h1>
        </div>
        <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
          <button 
            onClick={handleReset}
            className="flex items-center px-3 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm font-medium"
          >
            <RefreshCw size={16} className="mr-1 sm:mr-2" /> <span className="hidden sm:inline">Reset</span>
          </button>
          <Link 
            href="/preview"
            className="flex items-center px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors text-sm font-medium shadow-sm"
          >
            <Eye size={16} className="mr-1 sm:mr-2" /> Preview <span className="hidden sm:inline">& Download</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden lg:h-[calc(100vh-73px)]">
        {/* Left Side: Form (Scrollable) */}
        <div className="w-full lg:w-1/2 overflow-y-auto p-4 lg:p-6 bg-gray-50 border-r border-gray-200">
          <Form data={cvData} onChange={setCvData} />
        </div>

        {/* Right Side: Live Preview (Fixed/Scrollable container with scaling) */}
        <div className="w-full lg:w-1/2 bg-gray-200 p-4 lg:p-6 overflow-y-auto flex justify-center h-[50vh] lg:h-auto">
          <div className="origin-top" style={{ transform: 'scale(0.85)', transformOrigin: 'top center' }}>
            {cvData.template === 'modern' ? (
              <CVTemplate1 data={cvData} />
            ) : cvData.template === 'simple' ? (
              <CVTemplate2 data={cvData} />
            ) : cvData.template === 'elegant' ? (
              <CVTemplate3 data={cvData} />
            ) : cvData.template === 'professional' ? (
              <CVTemplate4 data={cvData} />
            ) : (
              <CVTemplate5 data={cvData} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
