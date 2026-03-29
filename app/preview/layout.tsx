import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aperçu du CV - Téléchargez votre CV',
  description: 'Aperçu final de votre CV. Téléchargez votre CV en PDF prêt à être envoyé aux recruteurs.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
