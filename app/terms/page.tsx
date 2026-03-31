import Link from 'next/link';
import { FileText, AlertTriangle, CheckCircle, XCircle, Users, Globe, Scale } from 'lucide-react';

export const metadata = {
  title: 'Conditions d\'Utilisation - CV Builder Pro',
  description: 'Conditions d\'utilisation de CV Builder Pro. Créateur de CV professionnel gratuit - 5 modèles modernes, export PDF, multilingue.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 px-8 py-10">
            <h1 className="text-4xl font-bold text-white mb-4">Conditions d&apos;Utilisation</h1>
            <p className="text-indigo-100 text-lg">CV Builder Pro - Dernière mise à jour : Mars 2026</p>
          </div>

          <div className="px-8 py-10 space-y-10">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-indigo-600" size={28} />
                <h2 className="text-2xl font-bold text-gray-900">1. Acceptation des Conditions</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                En accédant et en utilisant CV Builder Pro (&quot;le Service&quot;), vous acceptez d&apos;être lié par ces Conditions d&apos;Utilisation. Si vous n&apos;êtes pas d&apos;accord avec ces conditions, veuillez ne pas utiliser ce service.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Ces conditions constituent un accord légal entre vous et CV Builder Pro concernant votre utilisation du site web.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-indigo-600" size={28} />
                <h2 className="text-2xl font-bold text-gray-900">2. Description du Service</h2>
              </div>
              
              <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-indigo-900 mb-3">2.1 Fonctionnalités principales</h3>
                <ul className="list-disc list-inside text-indigo-800 space-y-2">
                  <li>Créateur de CV professionnel en ligne</li>
                  <li>5 modèles de CV modernes et personnalisables</li>
                  <li>Export PDF haute qualité</li>
                  <li>Support multilingue (Français, Anglais, Espagnol, Allemand)</li>
                  <li>Sauvegarde automatique des données (localStorage)</li>
                  <li>Personnalisation des couleurs et du thème</li>
                  <li>Optimisé pour les systèmes ATS (Applicant Tracking Systems)</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">2.2 Gratuit et sans inscription</h3>
                <p className="text-gray-700 leading-relaxed">
                  CV Builder Pro est un service gratuit qui ne nécessite aucune inscription ni création de compte. Toutes les données sont stockées localement dans votre navigateur et ne sont jamais transmises à nos serveurs.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-indigo-600" size={28} />
                <h2 className="text-2xl font-bold text-gray-900">3. Utilisation Autorisée</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-green-900 mb-2">✅ Utilisation permise</h3>
                  <ul className="text-green-800 space-y-1">
                    <li>• Créer des CV personnels et professionnels</li>
                    <li>• Personnaliser les modèles selon vos besoins</li>
                    <li>• Télécharger et utiliser vos CV pour des recherches d&apos;emploi</li>
                    <li>• Partager vos CV avec des recruteurs ou des employeurs</li>
                    <li>• Utiliser le service à des fins personnelles et commerciales</li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-red-900 mb-2">❌ Utilisation interdite</h3>
                  <ul className="text-red-800 space-y-1">
                    <li>• Créer des CV avec de fausses informations</li>
                    <li>• Utiliser le service pour des activités illégales</li>
                    <li>• Tenter de compromettre la sécurité du site</li>
                    <li>• Reproduire ou distribuer le code source</li>
                    <li>• Utiliser le service pour violer les droits d&apos;autrui</li>
                    <li>• Automatiser la création de CV (scraping, bots)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-indigo-600" size={28} />
                <h2 className="text-2xl font-bold text-gray-900">4. Propriété Intellectuelle</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">4.1 Droits de CV Builder Pro</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Le Service, y compris mais sans s&apos;y limiter : le design, les modèles de CV, le code source, les graphiques, les logos, et le contenu, est protégé par les droits d&apos;auteur et autres lois sur la propriété intellectuelle.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Les modèles de CV sont protégés par des droits d&apos;auteur</li>
                    <li>Le code source est la propriété de CV Builder Pro</li>
                    <li>Les marques et logos sont des marques déposées</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-900 mb-3">4.2 Vos droits sur les CV créés</h3>
                  <p className="text-blue-800 leading-relaxed">
                    Une fois votre CV créé et téléchargé, vous êtes propriétaire du contenu que vous avez fourni. CV Builder Pro ne revendique aucun droit sur les informations personnelles que vous saisissez.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="text-indigo-600" size={28} />
                <h2 className="text-2xl font-bold text-gray-900">5. Responsabilités et Limitations</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-yellow-900 mb-2">⚠️ Clause de non-responsabilité</h3>
                  <p className="text-yellow-800 leading-relaxed">
                    CV Builder Pro est fourni &quot;tel quel&quot; et &quot;tel que disponible&quot;. Nous ne garantissons pas que le service sera toujours disponible, exempt d&apos;erreurs ou que les CV générés répondront aux exigences spécifiques d&apos;un employeur ou d&apos;un système ATS.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">5.1 Limitation de responsabilité</h3>
                  <p className="text-gray-700 leading-relaxed">
                    En aucun cas, CV Builder Pro ne sera responsable de :
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
                    <li>Toute perte de données ou de revenus</li>
                    <li>Tout dommage résultant de l&apos;utilisation du service</li>
                    <li>Toute décision d&apos;embauche basée sur un CV généré</li>
                    <li>Tout contenu inexact ou incomplet dans les CV</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">5.2 Exactitude des informations</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Vous êtes responsable de l&apos;exactitude des informations fournies dans votre CV. CV Builder Pro ne vérifie pas et ne peut pas vérifier l&apos;exactitude des données saisies par les utilisateurs.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-indigo-600" size={28} />
                <h2 className="text-2xl font-bold text-gray-900">6. Liens Externes et Publicités</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">6.1 Google AdSense</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Le Service affiche des publicités fournies par Google AdSense. Nous n&apos;exerçons aucun contrôle sur le contenu de ces publicités et ne sommes pas responsables de leur exactitude ou de leur légalité.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">6.2 Liens vers des sites tiers</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Le Service peut contenir des liens vers des sites web de tiers. Ces liens sont fournis uniquement pour votre commodité. CV Builder Pro n&apos;a aucun contrôle sur le contenu de ces sites et n&apos;assume aucune responsabilité pour ces sites.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="text-indigo-600" size={28} />
                <h2 className="text-2xl font-bold text-gray-900">7. Résiliation</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                CV Builder Pro se réserve le droit de suspendre ou de résilier votre accès au Service à tout moment, sans préavis, pour toute violation des présentes conditions ou pour toute autre raison jugée nécessaire.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                La résiliation n&apos;affecte pas vos droits concernant les CV déjà téléchargés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modifications des Conditions</h2>
              <p className="text-gray-700 leading-relaxed">
                CV Builder Pro se réserve le droit de modifier ces Conditions d&apos;Utilisation à tout moment. Les modifications entrent en vigueur dès leur publication sur cette page. Votre utilisation continue du Service après la publication des modifications constitue votre acceptation de ces modifications.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Droit Applicable</h2>
              <p className="text-gray-700 leading-relaxed">
                Ces Conditions d&apos;Utilisation sont régies par les lois de l&apos;Union Européenne. En cas de litige, les tribunaux de l&apos;UE seront seuls compétents.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Si vous êtes un consommateur situé en France, la loi française s&apos;applique et vous bénéficiez des dispositions impératives du droit de la consommation français.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pour toute question concernant ces Conditions d&apos;Utilisation, vous pouvez nous contacter :
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Email :</strong> contact@cvbuild-red.vercel.app
                  </p>
                  <p className="text-gray-700">
                    <strong>Site web :</strong> <Link href="/" className="text-indigo-600 hover:text-indigo-800">https://cvbuild-red.vercel.app</Link>
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500 text-center">
                CV Builder Pro - Créateur de CV Professionnel Gratuit
                <br />
                <Link href="/privacy" className="text-indigo-600 hover:text-indigo-800">Politique de Confidentialité</Link>
                {' | '}
                <Link href="/" className="text-indigo-600 hover:text-indigo-800">Retour à l&apos;accueil</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}