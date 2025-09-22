export type GalleryImage = { id: number; title: string; description: string; type: "image"; src: string };

// Build from local originals under public/gallery/photos
const localFilenames = [
  "1.jpeg",
  "2.JPG",
  "3.JPG",
  "4.JPG",
  "5.JPG",
  "6.JPG",
  "7.JPG",
  "8.JPG",
  "9.JPG",
  "10.JPG",
  "11.JPG",
  "12.JPG",
  "14.JPG",
  "13.JPG",
  "15.JPG",
  "16.JPG",
  "17.JPG",
  "18.JPG",
  "19.JPG",
  "20.JPG",
  "21.JPG",
  "22.JPG",
  "23.JPG",
  "24.JPG",
  "25.JPG",
  "26.JPG",
] as const;

const stripExtension = (name: string) => name.replace(/\.[^.]+$/, "");
const humanize = (name: string) => stripExtension(name).replace(/[_-]+/g, " ");

// Single unified list of originals
export const baseImages: GalleryImage[] = localFilenames.map((name, idx) => ({
  id: idx + 1,
  title: humanize(name),
  description: "",
  type: "image",
  src: `/gallery/photos/${encodeURIComponent(name)}`,
}));

export const getAllImages = (): GalleryImage[] => {
  // Only original images; no dummy/filler
  return baseImages;
};

export const getAllImages45 = (): GalleryImage[] => {
  return getAllImages().slice(0, 45);
};

export const findImageById = (id: number): GalleryImage | undefined => {
  return getAllImages().find((img) => img.id === id);
};
