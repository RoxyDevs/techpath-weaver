
import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <div
      className={cn(
        'relative w-24 h-24 rounded-full shadow-2xl flex items-center justify-center',
        'ring-4 ring-white ring-offset-4 ring-offset-background',
        className
      )}
    >
      <Image
        src="/images/LogoThechPathWeaver.png"
        alt="TechPath Weaver Logo"
        width={96}
        height={96}
        className="rounded-full"
        priority // Cargar el logo rápidamente
      />
    </div>
  );
}
