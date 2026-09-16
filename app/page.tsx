"use client";

import { useEffect, useState } from "react";
import { AppNavigation } from "@/components/app-navigation";
import { CatalogView } from "@/components/catalog-view";
import { HomeView } from "@/components/home-view";
import { SiteHeader } from "@/components/site-header";
import { stays } from "@/components/types/stays";

const Home = () => {
  const [activeNav, setActiveNav] = useState("Explore");
  const [activeFilter, setActiveFilter] = useState("All homes");
  const [view, setView] = useState<"home" | "catalog">("home");
  const [liked, setLiked] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 650);
    return () => window.clearTimeout(loadingTimer);
  }, []);

  const toggleLike = (id: number) => {
    setLiked((current) => current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id]);
  };

  const visibleStays = stays.filter((stay) => {
    const query = searchQuery.trim().toLowerCase();
    return !query || `${stay.title} ${stay.place}`.toLowerCase().includes(query);
  });

  return <main className="min-h-screen bg-[#f8f7f4] text-[#25312f]">
    <SiteHeader
      view={view}
      onSearch={(query) => { setSearchQuery(query); setView("catalog"); }}
      activeFilter={activeFilter}
      onFilterChange={setActiveFilter}
    />
    {isLoading ? <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-5 pb-28 pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-10" aria-live="polite"><p className="col-span-full text-center text-sm text-[#687470]">Loading stays...</p>{[1, 2, 3, 4].map((item) => <div key={item} className="aspect-[1.08] animate-pulse rounded-2xl bg-[#e7e7df]" />)}</section> : view === "catalog" ? (
      <CatalogView
        stays={visibleStays}
        liked={liked}
        onBack={() => setView("home")}
        onToggleLike={toggleLike}
      />
    ) : (
      <HomeView
        stays={visibleStays}
        liked={liked}
        onToggleLike={toggleLike}
      />
    )}
    <AppNavigation activeNav={activeNav} onChange={setActiveNav} />
  </main>;
};

export default Home;
