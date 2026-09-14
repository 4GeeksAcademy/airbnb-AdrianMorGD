import { useState } from "react";
import { filters } from "@/components/types/stays";
import { Icon } from "@/components/icon";

type SearchBarProps = {
  view: "home" | "catalog";
  onSearch: (query: string) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
};

export const SearchBar = ({ view, onSearch, activeFilter, onFilterChange }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [guests, setGuests] = useState(0);

  return <div className="mx-auto max-w-[1440px] px-5 pb-4 lg:px-10">
    <div className={`flex w-full items-center rounded-full border border-[#dcded8] bg-white p-1.5 shadow-[0_3px_12px_rgba(36,53,48,0.07)] ${view === "catalog" ? "lg:mx-auto lg:max-w-[980px]" : "md:max-w-[760px]"}`}>
      <label className="flex-1 border-r border-[#e6e6e1] px-4 text-left"><span className="block text-[10px] font-bold uppercase tracking-[.12em] text-[#52635e]">Where</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search destinations" className="w-full bg-transparent text-sm outline-none placeholder:text-[#25312f]" /></label>
      <button className="hidden flex-1 border-r border-[#e6e6e1] px-5 text-left sm:block"><span className="block text-[10px] font-bold uppercase tracking-[.12em] text-[#52635e]">When</span><span className="text-sm">Add dates</span></button>
      <div className="relative hidden flex-1 px-5 text-left sm:block"><span className="block text-[10px] font-bold uppercase tracking-[.12em] text-[#52635e]">Who</span><button onClick={() => setGuests((count) => count >= 8 ? 0 : count + 1)} className="text-sm">{guests ? `${guests} guest${guests === 1 ? "" : "s"}` : "Add guests"}</button></div>
      <button onClick={() => onSearch(query)} className="grid size-11 shrink-0 place-items-center rounded-full bg-[#e2735c] text-white" aria-label="Search"><Icon>⌕</Icon></button>
    </div>
    <div className="scrollbar-hide mt-4 flex gap-2 overflow-x-auto pb-0" role="tablist" aria-label="Stay filters">{filters.map((filter) => <button key={filter} onClick={() => onFilterChange(filter)} className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition ${activeFilter === filter ? "border-[#25312f] bg-[#25312f] text-white" : "border-[#deded7] bg-white text-[#52635e] hover:border-[#25312f]"}`} role="tab" aria-selected={activeFilter === filter}>{filter}</button>)}</div>
  </div>;
};
