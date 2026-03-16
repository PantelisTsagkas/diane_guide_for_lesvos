interface HeaderProps {
  title: string;
  subtitle?: string;
  emoji?: string;
}

export default function Header({ title, subtitle, emoji }: HeaderProps) {
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
