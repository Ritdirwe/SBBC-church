export function NavigationBar({ navItems }) {
  return (
    <div className="sticky top-0 z-30 bg-white/90 dark:bg-[#121212]/90 backdrop-blur border-b border-[#E9E9E9] dark:border-[#333]">
      <div className="max-w-6xl mx-auto px-6 overflow-x-auto">
        <div className="flex gap-4 md:gap-6 py-3">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="whitespace-nowrap text-sm md:text-[15px] text-[#2B2B2B] dark:text-[#E0E0E0] hover:text-black dark:hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
