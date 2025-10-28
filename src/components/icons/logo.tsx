
import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn('relative w-24 h-24', className)}>
      <Image
        src="/images/LogoTechPathWeaver.png"
        alt="TechPath Weaver Logo"
        layout="fill"
        objectFit="cover"
        className="rounded-full shadow-2xl"
        priority
      />
    </div>
  );
}
