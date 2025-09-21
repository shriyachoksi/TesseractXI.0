export type GalleryImage = { id: number; title: string; description: string; type: "image"; src: string };

export const baseGalleryImages: Record<"past" | "present" | "future", GalleryImage[]> = {
  past: [
    { id: 1, title: "First Computers", description: "Early Computing History", type: "image", src: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg" },
    { id: 2, title: "Vintage Technology", description: "Classic Computing Era", type: "image", src: "https://images.pexels.com/photos/163125/board-electronics-computer-data-processing-163125.jpeg" },
    { id: 3, title: "Analog Era", description: "Pre-Digital Technology", type: "image", src: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" },
    { id: 4, title: "Early Networks", description: "Birth of Connectivity", type: "image", src: "https://images.unsplash.com/photo-1601791074012-d4e0ee30d9a7?auto=format&fit=crop&q=80&w=2070" },
    { id: 5, title: "Mathematical Origins", description: "Foundations of Computing", type: "image", src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2070" },
    { id: 6, title: "Pioneering Innovations", description: "Breakthrough Moments", type: "image", src: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80&w=2069" },
    { id: 7, title: "Retro Gaming", description: "Early Video Game Era", type: "image", src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070" },
    { id: 8, title: "First Mobile Phones", description: "Mobile Communication History", type: "image", src: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&q=80&w=2070" },
    { id: 9, title: "Mechanical Computing", description: "Early Calculation Devices", type: "image", src: "https://images.unsplash.com/photo-1519666336592-e225a99dcd2f?auto=format&fit=crop&q=80&w=2070" },
    { id: 10, title: "Vacuum Tubes", description: "Early Electronic Era", type: "image", src: "https://images.unsplash.com/photo-1516280906200-bf8c959f3e76?auto=format&fit=crop&q=80&w=2070" }
  ],
  present: [
    { id: 11, title: "Modern Computing", description: "Current Technology", type: "image", src: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg" },
    { id: 12, title: "AI Development", description: "Machine Learning Era", type: "image", src: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg" },
    { id: 13, title: "Cloud Computing", description: "Connected World", type: "image", src: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg" },
    { id: 14, title: "Data Centers", description: "Modern Infrastructure", type: "image", src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2091" },
    { id: 15, title: "Smart Devices", description: "IoT Revolution", type: "image", src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=2078" },
    { id: 16, title: "Digital Workspace", description: "Modern Collaboration", type: "image", src: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=2070" },
    { id: 17, title: "Blockchain", description: "Decentralized Technology", type: "image", src: "https://images.unsplash.com/photo-1644658722893-2f1a17c0b39b?auto=format&fit=crop&q=80&w=2070" },
    { id: 18, title: "Cybersecurity", description: "Digital Protection", type: "image", src: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=2070" },
    { id: 19, title: "5G Networks", description: "Modern Connectivity", type: "image", src: "https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?auto=format&fit=crop&q=80&w=2070" },
    { id: 20, title: "Green Computing", description: "Sustainable Technology", type: "image", src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070" }
  ],
  future: [
    { id: 21, title: "Future Computing", description: "Next-Gen Technology", type: "image", src: "https://images.pexels.com/photos/8728285/pexels-photo-8728285.jpeg" },
    { id: 22, title: "Quantum Computing", description: "Future of Processing", type: "image", src: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg" },
    { id: 23, title: "Virtual Reality", description: "Immersive Technology", type: "image", src: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg" },
    { id: 24, title: "Robotics & AI", description: "Autonomous Systems", type: "image", src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070" },
    { id: 25, title: "Space Tech", description: "Next Frontier", type: "image", src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" },
    { id: 26, title: "Bio-Computing", description: "Merging Biology & Tech", type: "image", src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2070" },
    { id: 27, title: "Brain-Computer Interface", description: "Neural Technology", type: "image", src: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=2070" },
    { id: 28, title: "Holographic Displays", description: "3D Visualization", type: "image", src: "https://images.unsplash.com/photo-1506729623306-b5a934d88b53?auto=format&fit=crop&q=80&w=2070" },
    { id: 29, title: "Flying Cars", description: "Future Transportation", type: "image", src: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&q=80&w=2070" },
    { id: 30, title: "Smart Cities", description: "Future Urban Living", type: "image", src: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&q=80&w=2070" }
  ]
};

export const generateDummyImages = (categoryKey: string, startId: number, count: number): GalleryImage[] => {
  const items: GalleryImage[] = [];
  for (let i = 0; i < count; i++) {
    const id = startId + i;
    const seed = `${categoryKey}-${id}`;
    const width = 1200;
    const height = 700 + ((id % 6) * 80);
    items.push({
      id,
      title: `${categoryKey.toUpperCase()} Concept ${i + 1}`,
      description: `Exploration ${i + 1} in the ${categoryKey} series`,
      type: "image",
      src: `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`,
    });
  }
  return items;
};

export const getGalleryImagesByCategory = () => ({
  past: [...baseGalleryImages.past, ...generateDummyImages("past", 1001, 60)],
  present: [...baseGalleryImages.present, ...generateDummyImages("present", 2001, 60)],
  future: [...baseGalleryImages.future, ...generateDummyImages("future", 3001, 60)],
});

export const getAllImages45 = (): GalleryImage[] => {
  const cats = getGalleryImagesByCategory();
  const per = 15;
  return (["past", "present", "future"] as const).flatMap((c) => cats[c].slice(0, per));
};
