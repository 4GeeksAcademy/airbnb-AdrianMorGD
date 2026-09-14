type AppNavigationProps = { activeNav: string; onChange: (label: string) => void };

export const AppNavigation = ({ activeNav, onChange }: AppNavigationProps) => {
  return <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-[#e5e5df] bg-[#f8f7f4]/95 px-4 py-3 backdrop-blur-md md:static md:mx-auto md:max-w-[1440px] md:border-0 md:bg-transparent md:px-10 md:py-5" aria-label="App navigation"><div className="mx-auto flex max-w-sm items-center justify-around md:max-w-none md:justify-end md:gap-8">{[["Explore", "⌂"], ["Favorites", "♡"], ["Profile", "◉"]].map(([label, icon]) => <button key={label} onClick={() => onChange(label)} className={`flex flex-col items-center gap-1 text-xs font-semibold md:flex-row md:gap-2 ${activeNav === label ? "text-[#e2735c]" : "text-[#71807b]"}`}><span className="text-xl leading-none">{icon}</span>{label}</button>)}</div></nav>;
};
