import Link from 'next/link';
import { FileText, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Créateur de CV Professionnel Gratuit - 5 Modèles Modernes',
  description: 'Créez votre CV professionnel en quelques minutes avec CV Builder Pro. 5 modèles modernes, ATS-friendly, export PDF instantané, multilingue (FR, EN, ES, DE). Sans inscription.',
  keywords: ['créateur de CV', 'CV gratuit', 'modèle de CV', 'CV professionnel', 'générateur de CV', 'CV ATS', 'resume builder', 'curriculum vitae'],
  openGraph: {
    title: 'CV Builder Pro - Créateur de CV Professionnel Gratuit',
    description: 'Créez un CV professionnel moderne et ATS-friendly en quelques minutes. 5 modèles personnalisables, export PDF instantané.',
    url: 'https://cvbuilder.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CV Builder Pro - Créateur de CV Professionnel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CV Builder Pro - Créateur de CV Professionnel Gratuit',
    description: 'Créez un CV professionnel moderne et ATS-friendly en quelques minutes.',
  },
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="max-w-3xl w-full text-center space-y-8">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
            <FileText size={64} />
          </div>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">
          Create Your Professional CV
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Build a modern, ATS-friendly resume in minutes. Choose from our templates, customize the design, and download it instantly as a PDF. No sign-up required.
        </p>
        
        <div className="pt-8">
          <Link 
            href="/builder" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-lg group"
          >
            Create CV Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left border-t border-gray-200 pt-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Fill your details</h3>
            <p className="text-gray-600">Enter your experience, education, and skills in our easy-to-use form.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Choose a template</h3>
            <p className="text-gray-600">Select between modern and simple templates to best showcase your profile.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Download PDF</h3>
            <p className="text-gray-600">Get your formatted CV instantly as a PDF file, ready to print or send.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
