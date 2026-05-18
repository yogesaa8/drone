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
    <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="absolute inset-0 hud-grid opacity-35" />
      <div className="absolute inset-0 scanlines opacity-20" />

      <div className="relative z-10 w-full max-w-4xl">
        {/* SLIDER */}
        <div
          className="corner-frame overflow-hidden border border-border bg-charcoal/90 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.8)] backdrop-blur"
          ref={emblaRef}
        >
          {/* CONTAINER */}
          <div className="flex h-[260px] flex-col sm:h-[340px] lg:h-[420px]">
            {slides.map((item, index) => (
              <div
                key={index}
                className="relative flex min-h-full flex-[0_0_100%] items-center justify-center overflow-hidden bg-background"
              >
                <div className="absolute inset-0 bg-linear-to-br from-tactical/10 via-transparent to-amber-hud/10" />
                <div className="absolute inset-x-8 top-8 h-px bg-linear-to-r from-transparent via-tactical/50 to-transparent" />
                <div className="absolute inset-x-8 bottom-8 h-px bg-linear-to-r from-transparent via-tactical/30 to-transparent" />
                <h1 className="relative font-display text-6xl font-bold text-foreground sm:text-7xl lg:text-8xl">
                  {item}
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* CONTROLS */}
        <div className="mt-5 flex flex-col items-stretch gap-4 sm:mt-7 sm:flex-row sm:items-center sm:justify-between">
          {/* LEFT BUTTONS */}
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <button
              onClick={scrollPrev}
              className="flex h-11 w-11 items-center justify-center border border-border bg-charcoal text-lg text-foreground transition hover:border-tactical hover:text-tactical sm:h-12 sm:w-12"
            >
              <FaArrowUp />
            </button>
            <button
              onClick={scrollNext}
              className="flex h-11 w-11 items-center justify-center border border-border bg-charcoal text-lg text-foreground transition hover:border-tactical hover:text-tactical sm:h-12 sm:w-12"
            >
              <FaArrowDown />
            </button>
          </div>

          {/* START / STOP BUTTON */}
          <button
            onClick={toggleAutoplay}
            className="flex items-center justify-center gap-2 border border-tactical bg-tactical px-8 py-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition hover:bg-transparent hover:text-tactical sm:px-10"
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
          <div className="h-1 w-full overflow-hidden bg-border sm:w-28">
            <div
              key={selectedIndex}
              className={`h-full bg-tactical ${
                playing ? "animate-progress" : "w-0"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
