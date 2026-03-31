import Link from 'next/link';
import { Shield, Eye, Cookie, Trash2, Lock, Mail } from 'lucide-react';

export const metadata = {
  title: 'Politique de Confidentialité - CV Builder Pro',
  description: 'Découvrez comment CV Builder Prot protège vos données personnelles. Transparence totale sur la collecte, l\'utilisation et la protection de vos informations.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-10">
            <h1 className="text-4xl font-bold text-white mb-4">Politique de Confidentialité</h1>
            <p className="text-blue-100 text-lg">Dernière mise à jour : Mars 2026</p>
          </div>

          <div className="px-8 py-10 space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-blue-600" size={28} />
                <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                CV Builder Pro (le "Service") s&apos;engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre site web.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                En utilisant CV Builder Pro, vous acceptez les pratiques décrites dans cette politique.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-blue-600" size={28} />
                <h2 className="text-2xl font-bold text-gray-900">1. Collecte des Données</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">1.1 Données que nous collectons</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Informations de CV :</strong> Nom, adresse email, téléphone, adresse, expériences professionnelles, formation, compétences, projets, certifications, langues, centres d&apos;intérêt et distinctions</li>
                  <li><strong>Données techniques :</strong> Adresse IP, type de navigateur, système d&apos;exploitation, pages visitées, temps passé sur le site</li>
                  <li><strong>Données de cookies :</strong> Préférences utilisateur, données de session</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">1.2 Comment nous collectons vos données</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Formulaire direct :</strong> Lorsque vous remplissez le formulaire de création de CV</li>
                  <li><strong>Stockage local :</strong> Vos données sont sauvegardées automatiquement dans votre navigateur (localStorage)</li>
                  <li><strong>Cookies et technologies similaires :</strong> Pour améliorer votre expérience</li>
                  <li><strong>Google AdSense :</strong> Cookies publicitaires tiers (voir section 3)</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="text-blue-600" size={28} />
                <h2 className="text-2xl font-bold text-gray-900">2. Utilisation des Données</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">2.1 Finalités principales</h3>
                  <ul className="text-blue-800 space-y-1">
                    <li>• Créer et personnaliser votre CV professionnel</li>
                    <li>• Sauvegarder vos données localement pour éviter la perte</li>
                    <li>• Générer et télécharger votre CV au format PDF</li>
                    <li>• Améliorer l&apos;expérience utilisateur du site</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">2.2 Ce que nous ne faisons PAS</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Nous ne vendons pas vos données personnelles</li>
                    <li>Nous ne partageons pas vos données avec des tiers (sauf pour les services techniques obligatoires)</li>
                    <li>Nous n&apos;envoyons pas de courriers indésirables (spam)</li>
                    <li>Nous ne stockons pas vos données sur nos serveurs (tout reste dans votre navigateur)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="text-blue-600" size={28} />
                <h2 className="text-2xl font-bold text-gray-900">3. Cookies et Google AdSense</h2>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
                <h3 className="font-semibold text-yellow-900 mb-3">3.1 Google AdSense</h3>
                <p className="text-yellow-800 leading-relaxed">
                  CV Builder Pro utilise Google AdSense pour afficher des publicités. Google peut utiliser des cookies pour diffuser des annonces en fonction de vos visites précédentes sur ce site et d&apos;autres sites web.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">3.2 Gestion des cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vous pouvez refuser l&apos;utilisation des cookies en modifiant les paramètres de votre navigateur. Notez que cela peut affecter les fonctionnalités du site.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Google DoubleClick DART Cookie :</strong> Utilisé par Google pour diffuser des annonces pertinentes</li>
                  <li><strong>Google Analytics :</strong> Non utilisé actuellement (toutes les données restent locales)</li>
                  <li><strong>Cookies fonctionnels :</strong> Pour sauvegarder vos préférences</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Trash2 className="text-blue-600" size={28} />
                <h2 className="text-2xl font-bold text-gray-900">4. Vos Droits (GDPR)</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                En vertu du Règlement Général sur la Protection des Données (GDPR), vous disposez des droits suivants :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🔍 Droit d&apos;accès</h4>
                  <p className="text-sm text-gray-600">Demander une copie de vos données personnelles</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✏️ Droit de rectification</h4>
                  <p className="text-sm text-gray-600">Corriger vos données inexactes</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🗑️ Droit à l&apos;effacement</h4>
                  <p className="text-sm text-gray-600">Supprimer vos données (vider localStorage)</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🚫 Droit d&apos;opposition</h4>
                  <p className="text-sm text-gray-600">S&apos;opposer au traitement de vos données</p>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Comment supprimer vos données ?</h3>
                <p className="text-blue-800 leading-relaxed">
                  Vos données sont stockées localement dans votre navigateur. Pour les supprimer :
                </p>
                <ol className="list-decimal list-inside text-blue-800 space-y-2 mt-3">
                  <li>Ouvrez les outils de développement de votre navigateur (F12)</li>
                  <li>Allez dans l&apos;onglet "Application" ou "Stockage"</li>
                  <li>Trouvez "Local Storage"</li>
                  <li>Supprimez les entrées de cvbuild-red.vercel.app</li>
                  <li>Ou utilisez le bouton "Reset Form" dans l&apos;application</li>
                </ol>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-blue-600" size={28} />
                <h2 className="text-2xl font-bold text-gray-900">5. Sécurité des Données</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-green-900 mb-2">✅ Mesures de sécurité</h3>
                  <ul className="text-green-800 space-y-1">
                    <li>• Stockage exclusivement local (pas de serveur)</li>
                    <li>• Pas de collecte de données personnelles sensibles</li>
                    <li>• Pas de création de compte ou inscription requise</li>
                    <li>• Connexion HTTPS sécurisée</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">⚠️ Limitations</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Bien que nous prenions des mesures pour protéger vos données, aucun stockage n&apos;est totalement sécurisé. Nous vous recommandons de :
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
                    <li>Ne pas partager d&apos;informations sensibles (numéro de carte bancaire, mot de passe)</li>
                    <li>Utiliser une connexion internet sécurisée</li>
                    <li>Effacer vos données après avoir téléchargé votre CV</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-blue-600" size={28} />
                <h2 className="text-2xl font-bold text-gray-900">6. Contact</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, n&apos;hésitez pas à nous contacter :
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Email :</strong> contact@cvbuild-red.vercel.app
                  </p>
                  <p className="text-gray-700">
                    <strong>Site web :</strong> <Link href="/" className="text-blue-600 hover:text-blue-800">https://cvbuild-red.vercel.app</Link>
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Nous répondrons à votre demande dans les plus brefs délais, conformément aux réglementations en vigueur.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modifications de cette Politique</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette page pour rester informé.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                En cas de modifications importantes, nous informerons les utilisateurs par une notification visible sur le site.
              </p>
            </section>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500 text-center">
                CV Builder Pro - Créateur de CV Professionnel Gratuit
                <br />
                <Link href="/terms" className="text-blue-600 hover:text-blue-800">Conditions d&apos;Utilisation</Link>
                {' | '}
                <Link href="/" className="text-blue-600 hover:text-blue-800">Retour à l&apos;accueil</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}