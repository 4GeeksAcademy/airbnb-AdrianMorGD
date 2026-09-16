import type { Stay } from "@/components/types/stays";
import { StayCard } from "@/components/stay-card";

type HomeViewProps = {
  stays: Stay[];
  liked: number[];
  onToggleLike: (id: number) => void;
};

export const HomeView = ({ stays, liked, onToggleLike }: HomeViewProps) => <section className="mx-auto max-w-[1440px] px-5 pb-28 pt-8 lg:px-10 lg:pb-12 lg:pt-12"><div className="mb-7 flex items-end justify-between gap-4"><div><p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-[#e2735c]">Curated for your next escape</p><h1 className="font-serif text-4xl tracking-[-0.04em] text-[#25312f] sm:text-5xl">Find a place to slow down</h1></div><button className="hidden items-center gap-2 rounded-full border border-[#d9dad3] bg-white px-4 py-2.5 text-sm font-semibold md:flex">≡ Filters</button></div><div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{stays.map((stay) => <StayCard key={stay.id} stay={stay} variant="home" liked={liked.includes(stay.id)} onToggleLike={() => onToggleLike(stay.id)} />)}</div></section>;
