'use client';

import Head from 'next/head';

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Roxana Rolón",
    "url": "https://www.linkedin.com/in/roxanarolon/",
    "jobTitle": "Desarrolladora de Software",
    "alumniOf": {
      "@type": "OrganizationRole",
      "organization": {
        "@type": "Organization",
        "name": "TechPath Weaver"
      }
    }
  };

  return (
    <>
      <Head>
        <title>Sobre la Creadora | TechPath Weaver</title>
        <meta 
          name="description" 
          content="Conoce a Roxana Rolón, la creadora de TechPath Weaver, una aplicación web y bot de Telegram diseñados para guiar a mujeres en tecnología."
        />
        <meta property="og:title" content="Sobre la Creadora | TechPath Weaver" />
        <meta property="og:description" content="Conoce a Roxana Rolón, la creadora de TechPath Weaver, una aplicación web y bot de Telegram diseñados para guiar a mujeres en tecnología." />
        <meta property="og:url" content="https://techpath-weaver.vercel.app/about" />
        <meta property="og:type" content="website" />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Sobre la Creadora: Roxana Rolón
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Desarrolladora de Software y creadora de TechPath Weaver
            </p>
          </div>

          <div className="max-w-none text-gray-700">
            <p className="mb-4">
              ¡Hola! Soy Roxana Rolón, la desarrolladora detrás de **TechPath Weaver**. 
              Este proyecto nació de mi pasión por la tecnología y mi deseo de crear 
              herramientas que empoderen a las mujeres en su desarrollo profesional.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-2">La Misión de TechPath Weaver</h2>
            <p className="mb-4">
              **TechPath Weaver** es una aplicación web y un bot de Telegram, ambos impulsados 
              por Inteligencia Artificial y Firebase. La plataforma está diseñada para guiar a 
              las mujeres en el campo de la tecnología, recomendando trayectorias 
              profesionales, cursos y mentorías basadas en datos del mercado laboral actual.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">Funcionalidades Clave</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Recomendaciones de carrera personalizadas según tu perfil e intereses.</li>
              <li>Detección de brechas de habilidades y sugerencias de cursos para cerrarlas.</li>
              <li>Emparejamiento inteligente con mentoras afines.</li>
              <li>Seguimiento de tu progreso y logros.</li>
              <li>Integración con un bot de Telegram para consultas rápidas.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-2">El Objetivo</h2>
            <p className="mb-4">
              Mi objetivo con TechPath Weaver es crear una experiencia inclusiva, moderna 
              y automatizada que potencie el crecimiento profesional de las mujeres en el 
              sector tecnológico, conectando aprendizaje, mentoría y oportunidades reales.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-2">Stack Tecnológico</h2>
            <p className="mb-4">
              Para construir TechPath Weaver, utilicé un stack moderno que incluye:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>**Frontend:** Next.js, TypeScript y Tailwind CSS</li>
              <li>**Backend:** Firebase (Authentication, Firestore, Hosting, Cloud Functions)</li>
              <li>**IA:** Gemini / Genkit (Google AI)</li>
              <li>**Integraciones:** Telegram Bot API</li>
            </ul>

            <div className="text-center mt-12">
              <a 
                href="https://www.linkedin.com/in/roxanarolon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-500 font-medium underline"
              >
                Conecta conmigo en LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
