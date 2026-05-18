import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { IoIosPause, IoIosPlay } from "react-icons/io";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const slides = [1, 2, 3, 4, 5];

export default function VerticalSlider() {
  // AUTOPLAY PLUGIN
  const autoplay = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      playOnInit: false, // IMPORTANT
    }),
  );

  // EMBLA SETUP
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      axis: "y",
      loop: true,
    },
    [autoplay.current],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  // UPDATE ACTIVE DOT
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // PREV BUTTON
  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  // NEXT BUTTON
  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  // START / STOP
  const toggleAutoplay = () => {
    if (!playing) {
      autoplay.current.play();
      setPlaying(true);
    } else {
      autoplay.current.stop();
      setPlaying(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="w-full max-w-3xl">
        {/* SLIDER */}
        <div className="overflow-hidden border border-white/10" ref={emblaRef}>
          {/* CONTAINER */}
          <div className="flex h-[340px] flex-col">
            {slides.map((item, index) => (
              <div
                key={index}
                className="flex min-h-full flex-[0_0_100%] items-center justify-center bg-black"
              >
                <h1 className="text-7xl font-bold text-white">{item}</h1>
              </div>
            ))}
          </div>
        </div>

        {/* CONTROLS */}
        <div className="mt-7 flex items-center justify-between">
          {/* LEFT BUTTONS */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black text-xl text-white transition hover:border-white/20"
            >
              <FaArrowUp />
            </button>
            <button
              onClick={scrollNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black text-xl text-white transition hover:border-white/20"
            >
              <FaArrowDown />
            </button>
          </div>

          {/* START / STOP BUTTON */}
          <button
            onClick={toggleAutoplay}
            className="rounded-full border border-white/10 bg-black px-10 py-3 text-white transition hover:border-white/20 flex items-center gap-2"
          >
            {playing ? (
              <>
                <IoIosPause />
                Stop
              </>
            ) : (
              <>
                <IoIosPlay />
                Start
              </>
            )}
          </button>

          {/* SINGLE PROGRESS BAR */}
          <div className="w-28 overflow-hidden rounded-full bg-white/10">
            <div
              key={selectedIndex}
              className={`h-1 rounded-full bg-white ${
                playing ? "animate-progress" : "w-0"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
