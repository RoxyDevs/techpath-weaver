
'use client';

import { useState, useEffect } from 'react';
import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  GithubAuthProvider, 
  browserPopupRedirectResolver 
} from 'firebase/auth';
import { useAuth, useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Loader2, AlertCircle } from 'lucide-react';
import { Logo } from '@/components/icons/logo';

export default function LoginPage() {
  const [loadingProvider, setLoadingProvider] = useState<'google' | 'github' | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Si la carga ha terminado y hay un usuario, redirige al perfil
    if (!isUserLoading && user) {
      router.push('/');
    }
  }, [user, isUserLoading, router]);

  const handleSignIn = async (provider: 'google' | 'github') => {
    // Prevenir múltiples clics si ya se está cargando
    if (loadingProvider) return;

    setLoadingProvider(provider);
    setError(null);
    
    try {
      const authProvider = provider === 'google' 
        ? new GoogleAuthProvider() 
        : new GithubAuthProvider();

      if (provider === 'google') {
        authProvider.addScope('email');
        authProvider.addScope('profile');
      } else {
        authProvider.addScope('user:email');
      }
      
      await signInWithPopup(auth, authProvider, browserPopupRedirectResolver);

    } catch (error: any) {
      // Ignorar los errores de cancelación por parte del usuario, que son normales.
      if (error.code === 'auth/cancelled-popup-request' || error.code === 'auth/popup-closed-by-user') {
        setLoadingProvider(null);
        return;
      }
      
      console.error('Error de autenticación:', error.code, error.message);
      
      let errorMessage = 'Ocurrió un error inesperado. Por favor, intenta de nuevo más tarde.';
      switch (error.code) {
        case 'auth/popup-blocked':
          errorMessage = 'El popup de inicio de sesión fue bloqueado por tu navegador. Por favor, habilita las ventanas emergentes para este sitio.';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Error de red. Verifica tu conexión a internet e inténtalo de nuevo.';
          break;
        case 'auth/unauthorized-domain':
            errorMessage = 'Este dominio no está autorizado para la autenticación. Por favor, revisa la configuración de Firebase.';
            break;
        case 'auth/account-exists-with-different-credential':
          errorMessage = 'Ya existe una cuenta con este correo electrónico, pero con un método de inicio de sesión diferente. Intenta iniciar sesión con el proveedor original.';
          break;
      }

      setError(errorMessage);
    } finally {
        setLoadingProvider(null);
    }
  };

  // Muestra un loader mientras se verifica el estado del usuario o si ya hay un usuario
  if (isUserLoading || user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 px-4">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <Logo className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground font-headline">
              TechPath Weaver
            </h1>
            <p className="mt-2 text-lg text-muted-foreground font-body">
              Tejiendo tu futuro en tecnología
            </p>
        </div>

        <div className="bg-card p-8 rounded-2xl shadow-2xl transition-shadow hover:shadow-3xl border border-border">
          <div className="space-y-4">
            {error && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                <p className="text-destructive text-sm font-medium">{error}</p>
              </div>
            )}

            <button
              onClick={() => handleSignIn('google')}
              disabled={!!loadingProvider}
              className="w-full flex items-center justify-center gap-3 bg-background border border-border rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-60 transition-all shadow-lg hover:shadow-xl"
            >
              {loadingProvider === 'google' ? <Loader2 className="h-5 w-5 animate-spin" /> : <svg className="h-5 w-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>}
              <span>{loadingProvider === 'google' ? 'Iniciando...' : 'Continuar con Google'}</span>
            </button>

            <button
              onClick={() => handleSignIn('github')}
              disabled={!!loadingProvider}
              className="w-full flex items-center justify-center gap-3 bg-foreground border border-transparent rounded-lg px-4 py-3 text-sm font-medium text-background hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-60 transition-all shadow-lg hover:shadow-xl"
            >
              {loadingProvider === 'github' ? <Loader2 className="h-5 w-5 animate-spin" /> : <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>}
              <span>{loadingProvider === 'github' ? 'Iniciando...' : 'Continuar con GitHub'}</span>
            </button>
          </div>
          <div className="text-center pt-4 border-t border-border mt-6">
            <a href="/about" className="text-sm text-primary hover:text-primary/80 font-medium underline">
                Sobre la creadora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
