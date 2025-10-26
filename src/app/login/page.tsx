'use client';

import { useState, useEffect } from 'react';
import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  GithubAuthProvider, 
  onAuthStateChanged,
  browserPopupRedirectResolver 
} from 'firebase/auth';
import { auth } from '@/firebase/config';
import { useRouter } from 'next/navigation';
import { Loader2, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('Usuario ya autenticado:', user.email);
        router.push('/profile');
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleSignIn = async (provider: 'google' | 'github') => {
    if (loading) return;

    setLoading(provider);
    setError(null);
    
    try {
      let authProvider;
      if (provider === 'google') {
        authProvider = new GoogleAuthProvider();
        // Agregar scopes adicionales si es necesario
        authProvider.addScope('email');
        authProvider.addScope('profile');
      } else {
        authProvider = new GithubAuthProvider();
        authProvider.addScope('user:email');
      }

      console.log('Iniciando autenticación con:', provider);
      
      const result = await signInWithPopup(
        auth, 
        authProvider,
        browserPopupRedirectResolver
      );
      
      console.log('Autenticación exitosa:', result.user.email);
      
      // Pequeño delay para asegurar que todo se procese
      setTimeout(() => {
        router.push('/profile');
      }, 500);
      
    } catch (error: any) {
      console.error('Error completo durante el login:', error);
      
      // Manejo específico de errores
      switch (error.code) {
        case 'auth/cancelled-popup-request':
          setError('Solicitud de login cancelada. Por favor, intenta de nuevo.');
          break;
        case 'auth/popup-closed-by-user':
          setError('Ventana cerrada. Por favor, completa el proceso de login.');
          break;
        case 'auth/unauthorized-domain':
          setError('Error de configuración: Dominio no autorizado. Contacta al administrador.');
          break;
        case 'auth/popup-blocked':
          setError('El popup fue bloqueado. Por favor, permite popups para este sitio.');
          break;
        case 'auth/network-request-failed':
          setError('Error de red. Verifica tu conexión a internet.');
          break;
        default:
          setError(`Error: ${error.message || 'Error desconocido durante el login'}`);
      }
    } finally {
      setLoading(null);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="flex flex-col items-center">
          <Loader2 className="h-8 w-8 animate-spin text-purple-600 mb-4" />
          <p className="text-gray-600">Verificando autenticación...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 px-4">
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
        {/* Header */}
        <div className="text-center">
            <div style={{position: 'relative', width: '100%', height: 0, paddingTop: '100.0000%',
            paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden',
            borderRadius: '9999px', willChange: 'transform'}}>
            <iframe loading="lazy" style={{position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0}}
                src="https://www.canva.com/design/DAG25ykPjUM/rlWyVMEebE8yaPghn54-mw/view?embed" allowFullScreen="allowfullscreen" allow="fullscreen">
            </iframe>
            </div>
          <h2 className="text-3xl font-bold text-gray-900">
            TechPath Weaver
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Conectando profesionales en tecnología alrededor del mundo
          </p>
        </div>

        {/* Mensaje de Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {/* Tips para el usuario */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">
            💡 Tips para un login exitoso:
          </h3>
          <ul className="text-xs text-blue-700 space-y-1">
            <li>• Asegúrate de permitir ventanas emergentes (popups)</li>
            <li>• No cierres la ventana de login hasta completar el proceso</li>
            <li>• Verifica tu conexión a internet</li>
          </ul>
        </div>

        {/* Login Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => handleSignIn('google')}
            disabled={!!loading}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading === 'google' ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            )}
            {loading === 'google' ? 'Iniciando sesión...' : 'Continuar con Google'}
          </button>

          <button
            onClick={() => handleSignIn('github')}
            disabled={!!loading}
            className="w-full flex items-center justify-center gap-3 bg-gray-900 border border-gray-900 rounded-lg px-4 py-3 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading === 'github' ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            )}
            {loading === 'github' ? 'Iniciando sesión...' : 'Continuar con GitHub'}
          </button>
        </div>

        {/* Footer */}
        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            ¿Problemas para iniciar sesión?{' '}
            <button 
              onClick={() => window.location.reload()}
              className="text-purple-600 hover:text-purple-500 font-medium underline"
            >
              Recargar página
            </button>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            <a href="/about" className="text-purple-600 hover:text-purple-500 font-medium underline">
              Sobre la creadora
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
