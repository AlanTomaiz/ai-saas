import Image from 'next/image';

export function Loader() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-4">
      <div className="relative h-10 w-10 animate-spin">
        <Image fill alt="Logo" src="/logo.png" />
      </div>
      <p className="text-sm text-muted-foreground">Genius is thinking...</p>
    </div>
  );
}
