import { useState } from "react";
import type { Stay } from "@/components/types/stays";
import { Icon } from "@/components/icon";
import { StayCard } from "@/components/stay-card";

type CatalogViewProps = { stays: Stay[]; liked: number[]; onBack: () => void; onToggleLike: (id: number) => void };

export const CatalogView = ({ stays, liked, onBack, onToggleLike }: CatalogViewProps) => {
  const [sortOrder, setSortOrder] = useState<"recommended" | "price-low" | "rating">("recommended");
  const sortedStays = [...stays].sort((first, second) => sortOrder === "price-low" ? Number(first.price.replace(/\D/g, "")) - Number(second.price.replace(/\D/g, "")) : sortOrder === "rating" ? Number(second.rating) - Number(first.rating) : first.id - second.id);

  return <section className="mx-auto max-w-[1440px] px-5 pb-28 pt-8 lg:px-10 lg:pb-12 lg:pt-12"><div className="mb-7 flex items-center justify-between"><div><button onClick={onBack} className="mb-5 flex items-center gap-2 text-sm font-semibold text-[#687470]"><Icon>←</Icon> Back to explore</button><h1 className="font-serif text-4xl tracking-[-0.04em]">Stays in your search</h1><p className="mt-2 text-sm text-[#687470]">Over 200 places that match your preferences</p></div><label className="hidden items-center gap-2 text-sm font-semibold md:flex">Sort<select value={sortOrder} onChange={(event) => setSortOrder(event.target.value as typeof sortOrder)} className="rounded-full border border-[#d9dad3] bg-white px-4 py-2.5 outline-none"><option value="recommended">Recommended</option><option value="price-low">Price: low to high</option><option value="rating">Top rated</option></select></label></div><div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]"><div className="grid grid-cols-1 gap-8 md:grid-cols-2">{sortedStays.map((stay) => <StayCard key={stay.id} stay={stay} variant="catalog" liked={liked.includes(stay.id)} onToggleLike={() => onToggleLike(stay.id)} />)}</div><aside className="hidden min-h-[520px] items-center justify-center rounded-3xl bg-[#dfe1dc] text-sm font-semibold text-[#687470] lg:flex">Map here</aside></div></section>;
};
