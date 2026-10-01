import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'default' | 'narrow' | 'wide';
  spacing?: 'default' | 'tight' | 'loose';
  id?: string;
}

export function Section({
  children,
  className,
  containerSize = 'default',
  spacing = 'default',
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        spacing === 'default' && 'py-20 md:py-28 lg:py-36',
        spacing === 'tight' && 'py-12 md:py-16 lg:py-20',
        spacing === 'loose' && 'py-28 md:py-36 lg:py-48',
        className
      )}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
