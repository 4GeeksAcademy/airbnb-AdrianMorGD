export type Stay = {
  id: number;
  title: string;
  place: string;
  dates: string;
  price: string;
  rating: string;
  image: string;
  tag: string;
};

export const stays: Stay[] = [
  { id: 1, title: "Casa Onda", place: "San Sebastián, Spain", dates: "May 18–23", price: "$186", rating: "4.92", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85", tag: "Guest favorite" },
  { id: 2, title: "The Olive House", place: "Naxos, Greece", dates: "Jun 2–7", price: "$214", rating: "4.88", image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=900&q=85", tag: "Rare find" },
  { id: 3, title: "Hillside Cabin", place: "Sintra, Portugal", dates: "May 25–30", price: "$142", rating: "4.96", image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=85", tag: "Guest favorite" },
  { id: 4, title: "Laurel Loft", place: "Marrakech, Morocco", dates: "Jun 9–14", price: "$98", rating: "4.81", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85", tag: "New" },
  { id: 5, title: "Coastal Studio", place: "Ericeira, Portugal", dates: "Jun 12–17", price: "$173", rating: "4.9", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85", tag: "Surf nearby" },
  { id: 6, title: "Maison Marais", place: "Paris, France", dates: "Jul 4–9", price: "$249", rating: "4.87", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85", tag: "Top rated" },
];

export const filters = ["All homes", "Rooms", "Tiny homes", "Countryside", "Design", "Beach"];
