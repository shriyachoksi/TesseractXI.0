import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export default function DraggableCardDemo() {
  const pool = [
    "https://tesseract-x.vercel.app/static/media/EDM1.cb1da4703fa0e6612dfa.jpg",
    "https://tesseract-x.vercel.app/static/media/EDM10.764d0087452939e88f38.jpg",
    "https://tesseract-x.vercel.app/static/media/EDM14.79b333bd0e1e803c8541.jpg",
    "https://tesseract-x.vercel.app/static/media/EDM13.87efaa64ab2a690f9f5c.jpg",
    "https://tesseract-x.vercel.app/static/media/EDM21.f718c5b10c27937b13d8.jpg",
    "https://tesseract-x.vercel.app/static/media/EDM20.984b4bd2b29c17d12859.jpg",
    "https://tesseract-x.vercel.app/static/media/EDM24.02611bb18552e6f07854.jpg",
    "https://tesseract-x.vercel.app/static/media/EDM27.53b297e61f226bed5dd3.jpg",
    "https://tesseract-x.vercel.app/static/media/EDM29.9d2ffe2e985f8ed14219.jpg",
    "https://tesseract-x.vercel.app/static/media/EDM38.852c1fe708191809e578.jpg",
    "https://tesseract-x.vercel.app/static/media/EDM4.c7aba748a6335e1635ff.jpg",
    "https://tesseract-x.vercel.app/static/media/EDM62.785dfb0c481084ee8ff1.jpg",
    "https://tesseract-x.vercel.app/static/media/EDM90.9f4c583b357d2e32a3c2.jpg",
    "https://tesseract-x.vercel.app/static/media/11Ceremony.38d4cfaf4889c185492c.JPG",
    "https://tesseract-x.vercel.app/static/media/13Ceremony.338f10976676b0e7dcb5.JPG",
    "https://tesseract-x.vercel.app/static/media/27Ceremony.de8cb356d476e2e3abf8.JPG",
    "https://tesseract-x.vercel.app/static/media/35Ceremony.6bd2fee845d6459b0687.JPG",
    "https://tesseract-x.vercel.app/static/media/16ClubActivity.c197337aefc3ce00cf30.JPG",
    "https://tesseract-x.vercel.app/static/media/36ClubActivity.1ba38bf8427fa425534e.JPG",
    "https://tesseract-x.vercel.app/static/media/4ClubActivity.2ee1ea5402f9dfd71bcd.JPG",
    "https://tesseract-x.vercel.app/static/media/40ClubActivity.d84837fa8c53e5cfc44f.JPG",
    "https://tesseract-x.vercel.app/static/media/53ClubActivity.3ed21ca4d8d75d994880.JPG",
  ];

  const items = React.useMemo(
    () => Array.from({ length: 46 }, (_, i) => ({
      title: `Gallery Shot ${i + 1}`,
      image: pool[i % pool.length],
    })),
    [],
  );

  const placements = React.useMemo(() => {
    const sizes = [
      { w: 280, h: 360 },
      { w: 230, h: 310 },
      { w: 190, h: 250 },
    ];

    return items.map((_, i) => {
      const size = sizes[i % sizes.length];
      const sizeJitter = 1 + (Math.random() * 0.25 - 0.125); // ±12.5%
      return {
        top: 5 + Math.random() * 90,   // 5% - 95%
        left: 5 + Math.random() * 90,  // 5% - 95%
        rotate: -12 + Math.random() * 24,
        z: Math.floor(Math.random() * 12),
        w: size.w * sizeJitter,
        h: size.h * sizeJitter,
      };
    });
  }, [items]);

  return (
    <DraggableCardContainer className="relative flex min-h-[130vh] w-full items-center justify-center overflow-clip">
      {items.map((item, i) => (
        <DraggableCardBody
          key={`${item.title}-${i}`}
          className="absolute"
          style={{ top: `${placements[i].top}%`, left: `${placements[i].left}%`, rotate: `${placements[i].rotate}deg`, zIndex: 10 + placements[i].z, width: placements[i].w, height: placements[i].h }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-full w-full object-cover shadow-lg"
          />
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
