import Image from "next/image";

interface HeaderProps {
  title: string;
  subtitle?: string;
  emoji?: string;
  backgroundImage?: string;
  imageAlt?: string;
}

export default function Header({
  title,
  subtitle,
  emoji,
  backgroundImage,
  imageAlt,
}: HeaderProps) {
  if (backgroundImage) {
    return (
      <header className="relative min-h-[180px] flex items-end overflow-hidden">
        <Image
          src={backgroundImage}
          alt={imageAlt || title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />
        <div className="relative z-10 w-full px-4 pb-5 pt-14">
          <div className="mx-auto max-w-lg">
            {emoji && (
              <span className="text-2xl block mb-1.5 drop-shadow-md">
                {emoji}
              </span>
            )}
            <h1 className="text-2xl font-bold leading-tight text-white drop-shadow-md">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-1.5 text-sm text-white/80 drop-shadow-sm">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-deep-blue px-4 pt-12 pb-6 text-white">
      <div className="mx-auto max-w-lg">
        {emoji && <span className="text-3xl block mb-2">{emoji}</span>}
        <h1 className="text-2xl font-bold leading-tight">{title}</h1>
        {subtitle && (
          <p className="mt-1.5 text-sm text-sky-blue-light opacity-90">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
