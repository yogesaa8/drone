import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { IoIosPause, IoIosPlay } from "react-icons/io";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

import emb1 from "../assets/mission/emble/emb1.webp";
import emb2 from "../assets/mission/emble/emb2.webp";
import emb3 from "../assets/mission/emble/emb3.webp";
import emb4 from "../assets/mission/emble/emb4.webp";
import emb5 from "../assets/mission/emble/emb5.webp";
import emb6 from "../assets/mission/emble/emb6.webp";

// apne actual video file name/extension ke according path change kar lena
import embVid from "../assets/mission/emble/embVid.mp4";

const slides = [
  {
    type: "image",
    src: emb1,
    title: "Mission Image 01",
  },
  {
    type: "image",
    src: emb2,
    title: "Mission Image 02",
  },
  {
    type: "image",
    src: emb3,
    title: "Mission Image 03",
  },
  {
    type: "image",
    src: emb4,
    title: "Mission Image 04",
  },
  {
    type: "image",
    src: emb5,
    title: "Mission Image 05",
  },
  {
    type: "image",
    src: emb6,
    title: "Mission Image 06",
  },
  {
    type: "video",
    src: embVid,
    title: "Mission Video 07",
  },
];

export default function VerticalSlider() {
  const autoplay = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      playOnInit: false,
    })
  );

  const videoRefs = useRef([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      axis: "y",
      loop: true,
      align: "start",
    },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === selectedIndex) {
        video.play().catch(() => { });
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [selectedIndex]);

  const scrollPrev = () => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  };

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
    <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="absolute inset-0 hud-grid opacity-35" />
      <div className="absolute inset-0 scanlines opacity-20" />

      <div className="relative z-10 w-full max-w-4xl">
        <div
          ref={emblaRef}
          className="corner-frame overflow-hidden border border-border bg-charcoal/90 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.8)] backdrop-blur"
        >
          <div className="flex h-[260px] flex-col sm:h-[340px] lg:h-[420px]">
            {slides.map((slide, index) => (
              <div
                key={`${slide.title}-${index}`}
                className="group relative min-h-0 flex-[0_0_100%] overflow-hidden bg-background"
              >
                {slide.type === "video" ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={slide.src}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={slide.src}
                    alt={slide.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                <div className="absolute inset-0 bg-linear-to-br from-background/35 via-transparent to-background/40" />
                <div className="absolute inset-0 bg-linear-to-t from-background/55 via-transparent to-transparent" />

                <div className="absolute inset-x-8 top-8 h-px bg-linear-to-r from-transparent via-tactical/50 to-transparent" />
                <div className="absolute inset-x-8 bottom-8 h-px bg-linear-to-r from-transparent via-tactical/30 to-transparent" />

                <div className="relative z-10 flex h-full items-end justify-between p-5 sm:p-7 lg:p-8">
                  <div className="label-mono text-tactical text-[10px]">
                    {slide.type === "video" ? "VIDEO" : "SLIDE"}{" "}
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="h-2 w-2 bg-tactical" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col items-stretch gap-4 sm:mt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center border border-border bg-charcoal text-lg text-foreground transition hover:border-tactical hover:text-tactical sm:h-12 sm:w-12"
            >
              <FaArrowUp />
            </button>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center border border-border bg-charcoal text-lg text-foreground transition hover:border-tactical hover:text-tactical sm:h-12 sm:w-12"
            >
              <FaArrowDown />
            </button>
          </div>

          <button
            type="button"
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

          <div className="h-1 w-full overflow-hidden bg-border sm:w-28">
            <div
              key={`${selectedIndex}-${playing}`}
              className={`h-full bg-tactical ${playing ? "animate-progress" : "w-0"
                }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}