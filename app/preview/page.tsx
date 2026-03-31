"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CVTemplate1 from '@/components/CVTemplate1';
import CVTemplate2 from '@/components/CVTemplate2';
import CVTemplate3 from '@/components/CVTemplate3';
import CVTemplate4 from '@/components/CVTemplate4';
import CVTemplate5 from '@/components/CVTemplate5';
import AdSense from '@/components/AdSense';
import AdSenseRelaxed from '@/components/AdSenseRelaxed';
import { CVData, initialCVData } from '@/types';
import { ArrowLeft, Download } from 'lucide-react';

export default function PreviewPage() {
  const [cvData, setCvData] = useState<CVData>(initialCVData);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('cvData');
    if (savedData) {
      try {
        setCvData(JSON.parse(savedData));
      } catch (e) {
        console.error("Failed to parse saved CV data", e);
      }
    }
    setIsLoaded(true);
  }, []);

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      const element = document.getElementById('cv-preview');
      if (!element) return;

      const opt = {
        margin: 0,
        filename: `${cvData.fullName ? cvData.fullName.replace(/\s+/g, '_') : 'My'}_CV.pdf`,
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: {
          scale: 3,
          useCORS: true,
          letterRendering: true,
          logging: false,
          allowTaint: true
        },
        jsPDF: { unit: 'mm' as const, format: 'a4', orientation: 'portrait' as const }
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('An error occurred while generating the PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  if (!isLoaded) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <Link href="/builder" className="text-gray-600 hover:text-gray-900 flex items-center transition-colors font-medium">
          <ArrowLeft size={20} className="mr-2" /> Back to Builder
        </Link>
        <button 
          onClick={handleDownloadPDF}
          disabled={isDownloading}
          className={`flex items-center px-6 py-2.5 bg-green-600 text-white font-semibold rounded-lg shadow-sm transition-all ${
            isDownloading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-green-700 hover:shadow-md'
          }`}
        >
          <Download size={18} className="mr-2" /> 
          {isDownloading ? 'Generating PDF...' : 'Download PDF'}
        </button>
      </header>

      <AdSense />

      {/* CV Preview Area */}
      <main className="flex-1 overflow-y-auto py-10">
        <div className="flex justify-center">
          <div className="shadow-2xl ring-1 ring-gray-900/5">
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
      
      <AdSenseRelaxed />
    </div>
  );
}
