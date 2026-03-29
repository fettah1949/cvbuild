import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Éditeur de CV - Personnalisez votre CV',
  description: 'Éditeur de CV professionnel. Ajoutez vos informations, choisissez un modèle et personnalisez votre CV en temps réel.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
