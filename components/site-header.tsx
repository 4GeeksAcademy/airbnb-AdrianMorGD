import Link from "next/link";
import { Icon } from "@/components/icon";
import { SearchBar } from "@/components/search-bar";

type SiteHeaderProps = {
  view: "home" | "catalog";
  onSearch: (query: string) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
};

export const SiteHeader = ({ view, onSearch, activeFilter, onFilterChange }: SiteHeaderProps) => {
  return <header className="sticky top-0 z-20 border-b border-[#e5e5df] bg-[#f8f7f4]/95 backdrop-blur-md">
    <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-2 font-semibold tracking-[-0.04em] text-[#1d6b5d]" aria-label="Airbnb home"><span className="text-[27px] font-bold leading-none">⌂</span><span className="text-[19px]">airbnb</span></Link>
      <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Main navigation">{["Stays", "Experiences", "Online experiences"].map((item, index) => <button key={item} className={index === 0 ? "text-[#25312f]" : "text-[#65716e] hover:text-[#25312f]"}>{item}</button>)}</nav>
      <div className="flex items-center gap-3 text-sm"><button className="hidden font-medium sm:block">Airbnb your home</button><button className="grid size-10 place-items-center rounded-full border border-[#deded7] bg-white" aria-label="Choose language"><Icon>◎</Icon></button><button className="flex items-center gap-2 rounded-full border border-[#deded7] bg-white px-3 py-2" aria-label="Open menu"><Icon>☰</Icon><span className="hidden sm:block">Menu</span></button></div>
    </div>
    <SearchBar view={view} onSearch={onSearch} activeFilter={activeFilter} onFilterChange={onFilterChange} />
  </header>;
};
