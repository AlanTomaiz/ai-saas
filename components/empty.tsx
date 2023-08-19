import Image from 'next/image';

interface Props {
  label: string;
}

export function Empty({ label }: Props) {
  return (
    <div className="flex h-full flex-col items-center justify-center p-20">
      <div className="relative h-72 w-72">
        <Image fill alt="Empty" src="/empty.png" />
      </div>
      <p className="text-center text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
