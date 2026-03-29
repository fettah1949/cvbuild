export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CV Builder Pro',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
    description: 'Créez un CV professionnel moderne et ATS-friendly en quelques minutes. 5 modèles personnalisables, export PDF instantané, multilingue. Sans inscription requis.',
    featureList: [
      '5 modèles de CV professionnels',
      'Export PDF haute qualité',
      'Support multilingue (FR, EN, ES, DE)',
      'Personnalisation complète',
      'Optimisé ATS',
      'Sauvegarde automatique',
      'Sans inscription',
    ],
    author: {
      '@type': 'Organization',
      name: 'CV Builder Pro',
      url: 'https://cvbuild-red.vercel.app',
    },
    inLanguage: ['fr', 'en', 'es', 'de'],
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
