
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="text-center mb-10">
              <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-purple-200 ring-offset-4 shadow-lg">
                <AvatarImage src="/images/roxana-rolon.jpg" alt="Roxana Rolón" />
                <AvatarFallback>RR</AvatarFallback>
              </Avatar>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 font-headline">
                Roxana Rolón
              </h1>
              <p className="mt-2 text-xl text-purple-600 font-semibold font-body">
                Fundadora de TechPath Weaver
              </p>
            </div>

            <div className="space-y-8 text-lg text-gray-700 font-body">
              <p className="leading-relaxed">
                ¡Hola! Soy Roxana, y estoy increíblemente feliz de que estés aquí. Como desarrolladora de software y apasionada por la tecnología, creé TechPath Weaver con una misión clara: cerrar la brecha de género en nuestra industria y empoderar a más mujeres para que alcancen su máximo potencial.
              </p>
              <blockquote className="border-l-4 border-purple-200 pl-6 py-2 italic text-gray-600">
                "Mi visión es un mundo donde cada mujer en tecnología tenga acceso a las herramientas, la guía y la comunidad que necesita para construir una carrera exitosa y satisfactoria."
              </blockquote>
              <p className="leading-relaxed">
                TechPath Weaver nació de mi propia experiencia navegando el mundo de la tecnología. A menudo me encontraba deseando tener una guía, alguien que me mostrara las posibilidades y me ayudara a trazar un camino. Por eso, decidí construir la solución que me hubiera encantado tener.
              </p>
              <p className="leading-relaxed">
                Esta plataforma es más que solo una herramienta; es una comunidad. Es un espacio para aprender, crecer y conectar con otras mujeres que comparten tus mismas aspiraciones. Con la ayuda de la inteligencia artificial, podemos ofrecerte una guía personalizada y relevante, ayudándote a descubrir el camino perfecto para ti.
              </p>
              <p className="leading-relaxed font-semibold text-gray-800">
                Gracias por ser parte de este viaje. Juntas, estamos tejiendo el futuro de la tecnología.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
