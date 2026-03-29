import { Metadata } from 'next';

export function generateAlternateMetadata(baseUrl: string): Metadata {
  return {
    alternates: {
      canonical: baseUrl,
      languages: {
        'en': `${baseUrl}/en`,
        'fr': `${baseUrl}/fr`,
        'es': `${baseUrl}/es`,
        'de': `${baseUrl}/de`,
        'en-us': `${baseUrl}/en`,
        'fr-fr': `${baseUrl}/fr`,
        'es-es': `${baseUrl}/es`,
        'de-de': `${baseUrl}/de`,
      },
    },
  };
}
