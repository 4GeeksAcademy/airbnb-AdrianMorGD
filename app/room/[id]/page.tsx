"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { stays } from "@/components/types/stays";

type IconProps = { children: React.ReactNode };

const Icon = ({ children }: IconProps) => {
  return <span aria-hidden="true" className="text-[19px] leading-none">{children}</span>;
};

const RoomDetailPage = () => {
  const params = useParams<{ id: string }>();
  const stay = stays.find((item) => item.id === Number(params.id)) ?? stays[0];
  const [liked, setLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const detailImages = [stay.image, "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"];

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 650);
    return () => window.clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return <main className="grid min-h-screen place-items-center bg-white text-sm text-[#6b6b6b]" aria-live="polite">Loading room details...</main>;
  }

  return <main className="min-h-screen bg-white text-[#222222]">
    <div className="mx-auto max-w-[1280px] px-5 py-4 md:px-8 lg:py-6">
      <div className="flex items-center justify-between"><Link href="/" className="grid size-10 place-items-center rounded-full border border-[#dddddd] text-xl" aria-label="Volver"><Icon>←</Icon></Link><div className="flex gap-2"><button className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold underline md:flex"><Icon>↗</Icon> Compartir</button><button onClick={() => setLiked(!liked)} className="grid size-10 place-items-center rounded-full border border-[#dddddd] text-xl" aria-label={liked ? "Quitar de favoritos" : "Añadir a favoritos"}>{liked ? "♥" : "♡"}</button></div></div>
      <div className="relative mt-4 grid aspect-[1.55] grid-cols-2 grid-rows-2 gap-2 overflow-hidden rounded-2xl md:mt-5 md:aspect-[2.2] md:grid-cols-4 md:grid-rows-2">{detailImages.map((image, index) => <button key={image} onClick={() => setSelectedImage(index)} className={`overflow-hidden text-left ${index === 0 ? "col-span-2 row-span-2 md:col-span-2" : "hidden md:block"} ${selectedImage === index ? "ring-2 ring-inset ring-white" : ""}`} aria-label={`Ver foto ${index + 1}`}><img src={image} alt={`${stay.title}, foto ${index + 1}`} className="size-full object-cover transition hover:scale-105" /></button>)}<span className="absolute ml-3 mt-3 rounded-md bg-[#333333]/80 px-2 py-1 text-xs font-bold text-white md:hidden">{selectedImage + 1} / 27</span></div>
      <div className="relative z-10 -mt-7 rounded-t-[28px] bg-white px-1 pt-7 md:mt-8 md:rounded-none md:px-0 md:pt-0"><div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-20"><article><h1 className="max-w-3xl text-[28px] font-semibold leading-[1.12] tracking-[-0.035em] sm:text-4xl">Habitación Tranquila a Pasos del Zócalo | Hikuri 3</h1><p className="mt-4 text-center text-[15px] text-[#6b6b6b] md:text-left">Habitación en Tepoztlán, México</p><p className="mt-1 text-center text-[15px] text-[#6b6b6b] md:text-left">1 cama matrimonial · Baño compartido</p><p className="mt-6 text-center text-sm md:text-left">★ 4.75 · <span className="underline">120 evaluaciones</span></p><div className="my-6 border-y border-[#dddddd] py-5"><div className="flex items-center gap-4"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Fernando, anfitrión" className="size-12 rounded-full object-cover" /><div><p className="font-semibold">Anfitrión: Fernando</p><p className="mt-1 text-sm text-[#707070]">8 años de experiencia</p></div></div></div><div className="space-y-6 border-b border-[#dddddd] pb-6"><div className="flex gap-5"><span className="w-7 shrink-0 text-2xl">♧</span><div><h2 className="font-semibold">Diversión al aire libre</h2><p className="mt-1 text-sm leading-5 text-[#707070]">Estas amenidades son ideales para los viajes de verano: Una cocina exterior, un área para cenar al aire libre, un área con asador y una terraza exterior.</p></div></div><div className="flex gap-5"><span className="w-7 shrink-0 text-2xl">⌑</span><div><h2 className="font-semibold">Llegada autónoma</h2><p className="mt-1 text-sm leading-5 text-[#707070]">Completa tu llegada fácilmente utilizando el sistema de cerradura inteligente.</p></div></div><div className="flex gap-5"><span className="w-7 shrink-0 text-2xl">▣</span><div><h2 className="font-semibold">Habitación en residencia</h2><p className="mt-1 text-sm leading-5 text-[#707070]">Una habitación solo para ti en un alojamiento, con acceso a áreas compartidas.</p></div></div></div></article><aside className="hidden lg:block"><div className="sticky top-8 rounded-2xl border border-[#dddddd] p-6 shadow-[0_6px_24px_rgba(0,0,0,.08)]"><p className="text-2xl font-semibold"><span className="underline">$619 MXN</span> en total</p><p className="mt-1 text-sm text-[#6b6b6b]">23–24 de sep</p><div className="mt-5 grid grid-cols-2 gap-2"><button className="rounded-lg border border-[#aaaaaa] p-3 text-left"><span className="block text-[10px] font-bold uppercase">Llegada</span><span className="text-sm">23 sep</span></button><button className="rounded-lg border border-[#aaaaaa] p-3 text-left"><span className="block text-[10px] font-bold uppercase">Salida</span><span className="text-sm">24 sep</span></button></div><button className="mt-4 w-full rounded-full bg-[#e91e57] py-3.5 font-bold text-white">Reservar</button><p className="mt-3 text-center text-xs text-[#6b6b6b]">3 MSI de $206 MXN · Cancelación gratuita</p></div></aside></div></div>
    </div>
    <div className="fixed inset-x-0 bottom-0 z-20 border-t border-[#dddddd] bg-white px-5 py-3 lg:hidden"><div className="mx-auto flex max-w-xl items-center justify-between gap-4"><div><p className="text-base font-semibold"><span className="underline">$619 MXN</span> en total</p><p className="text-xs text-[#6b6b6b]">23–24 de sep · 3 MSI de $206 MXN</p></div><button className="rounded-full bg-[#e91e57] px-8 py-3.5 font-bold text-white">Reservar</button></div></div>
  </main>;
};

export default RoomDetailPage;
