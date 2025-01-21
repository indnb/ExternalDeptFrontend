import React, { useRef, useState } from "react";
const arr = [
  {
    title: "Крейзі новини відділу",
  },
  {
    title: "Крейзі новини відділу",
  },
  {
    title: "Крейзі новини відділу",
  },
];
export const NewsSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="max-[650px]:h-[334px] w-full max-w-[650px] mx-auto overflow-hidden flex flex-col items-center relative">
      <h1 className="max-[650px]:w-[398px] text-black text-[32px]">News</h1>
      <div
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hidden w-full whitespace-nowrap"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
          scrollbarWidth: "none",
        }}
      >
        {arr.map((item, index) => (
          <div
            key={index}
            className="min-w-[299px] h-[223px] bg-blue-500 text-white flex items-center justify-center text-2xl rounded-lg snap-center"
          ></div>
        ))}
      </div>
    </section>
  );
};
