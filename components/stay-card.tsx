import Link from "next/link";
import type { Stay } from "@/components/types/stays";

type StayCardProps = {
  stay: Stay;
  variant: "home" | "catalog";
  liked: boolean;
  onToggleLike: () => void;
};

export const StayCard = ({ stay, variant, liked, onToggleLike }: StayCardProps) => <Link href={`/room/${stay.id}`} className="group block cursor-pointer">
  <div className={`relative overflow-hidden rounded-2xl bg-[#e7e7df] ${variant === "home" ? "aspect-[1.08]" : "aspect-[1.15]"}`}>
    <img src={stay.image} alt={stay.title} className="size-full object-cover transition duration-700 group-hover:scale-105" />
    {variant === "home" && <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.1em] text-[#25312f]">{stay.tag}</span>}
    <button onClick={(event) => { event.preventDefault(); onToggleLike(); }} className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/85 text-lg transition hover:scale-110" aria-label={liked ? `Remove ${stay.title} from favorites` : `Add ${stay.title} to favorites`}>{liked ? "♥" : "♡"}</button>
  </div>
  <div className={`${variant === "home" ? "px-1" : ""} pt-3`}><div className="flex items-start justify-between gap-3"><h2 className="font-semibold">{stay.title}</h2><span className="flex shrink-0 items-center gap-1 text-sm">★ {stay.rating}</span></div><p className="mt-1 text-sm text-[#687470]">{stay.place}</p><p className="mt-1 text-sm text-[#687470]">{stay.dates}</p><p className="mt-2 text-sm"><strong>{stay.price}</strong> night {variant === "home" && <span className="text-[#687470]">· before taxes</span>}</p></div>
</Link>;
