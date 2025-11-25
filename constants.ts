import { Product, Testimonial, ContactConfig } from './types';

export const CONTACT_INFO: ContactConfig = {
  whatsapp: "6282297800321",
  location: "Bandung, Jawa Barat, ID",
  email: "markaz.hunter@ops.com"
};

export const PRODUCTS: Product[] = [
  {
    id: "p-001",
    name: "COBRA P-60 TACTICAL",
    category: "ASSAULT SERIES",
    price: 6500000,
    image: "https://picsum.photos/id/200/800/600",
    specs: ["Chamber Monolite", "Laras Baja Seamless OD14", "Popor Lipat Tactical", "Manometer Depan"],
    description: "Unit andalan untuk hunting medium-large game. Desain compact dengan power besar. Akurasi grouping rapat di 40 meter.",
    status: "READY"
  },
  {
    id: "p-002",
    name: "PHANTOM GHOST X",
    category: "SNIPER SERIES",
    price: 8200000,
    image: "https://picsum.photos/id/203/800/600",
    specs: ["Tabung Bocap 500cc", "Regulator Output Stabil", "Cancel Kokang Kiri", "Trigger Match Grade"],
    description: "Spesialis long range. Stabil untuk tembakan jarak jauh. Konsumsi angin irit dengan regulator Taiwan.",
    status: "READY"
  },
  {
    id: "p-003",
    name: "VIPER STRIKE V2",
    category: "COMPACT",
    price: 4500000,
    image: "https://picsum.photos/id/204/800/600",
    specs: ["Magazine 14 Rotary", "Side Lever Smooth", "Safety Trigger", "Laras Pilihan 60cm"],
    description: "Ringan dan mematikan. Cocok untuk blusukan hutan. Durabilitas tinggi tahan banting.",
    status: "SOLD"
  },
  {
    id: "p-004",
    name: "PREDATOR BLACK OPS",
    category: "SPECIAL EDITION",
    price: 9500000,
    image: "https://picsum.photos/id/206/800/600",
    specs: ["Full CNC Body", "Laras LW German (Original)", "Sandblast Anodize", "Hard Case Included"],
    description: "Edisi terbatas untuk kolektor dan hunter serius. Material terbaik di kelasnya. Zero kompromi.",
    status: "PRE-ORDER"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Bpk. Haryanto",
    location: "Kalimantan Timur",
    text: "Barang mendarat aman. Packing kayu solid. Test akurasi nitik koin di 35 meter. Mantap Markaz Hunter.",
    rating: 5,
    date: "2023-10-15"
  },
  {
    id: "t-2",
    name: "Mas Doni",
    location: "Lampung",
    text: "Respon admin cepat. Konsultasi enak. Unit sesuai deskripsi, power ngeri.",
    rating: 5,
    date: "2023-11-02"
  },
  {
    id: "t-3",
    name: "Om Tio",
    location: "Jawa Tengah",
    text: "Service memuaskan. Ada kendala dikit langsung dipandu video call sampe beres. Recommended seller.",
    rating: 4,
    date: "2023-12-10"
  }
];