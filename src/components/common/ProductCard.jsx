import { FiMaximize2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const cleanText = (value = "") => {
  return String(value)
    .replace(/droping/gi, "Dropping")
    .replace(/surveilance/gi, "Surveillance")
    .replace(/antijam/gi, "Anti-Jam");
};

const ProductCard = ({ item, type, onClick, onZoom }) => {
  const actionTo = type === "drone" ? `/drone/${item.id}` : "/contact";
  const canZoom = Boolean(onZoom);

  const specs = Array.isArray(item.specs) ? item.specs.slice(0, 4) : [];

  return (
    <article
      className="group bg-charcoal flex flex-col h-full cursor-pointer relative border border-border min-w-0 overflow-hidden"
      onClick={onClick}
    >
      <div className="relative aspect-4/3 overflow-hidden bg-background shrink-0">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 via-transparent to-transparent" />

        {(item.serial || item.price) && (
          <div className="absolute top-3 right-3 label-mono text-[10px] text-tactical bg-background/70 px-2 py-1">
            {item.serial || item.price}
          </div>
        )}

        {canZoom && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onZoom(item);
            }}
            aria-label={`Open ${item.name} image fullscreen`}
            title="Click to zoom"
            className="absolute bottom-3 right-3 z-20 grid h-9 w-9 place-items-center border border-border bg-background/85 text-foreground transition-colors hover:border-tactical hover:text-tactical"
          >
            <FiMaximize2 size={16} />
          </button>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1 min-w-0">
        <div
          className="label-mono text-tactical text-[10px] uppercase leading-[1.8] tracking-[0.28em] h-19.5 overflow-hidden wrap-break-word"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
          }}
        >
          {cleanText(item.use || item.category || type)}
        </div>

        <h3
          className="font-display text-xl font-bold leading-tight h-14 overflow-hidden wrap-break-word"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {cleanText(item.name)}
        </h3>

        <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-5 min-h-33">
          {specs.map(([k, v]) => (
            <div key={k} className="border-l border-tactical/40 pl-2 min-w-0">
              <div className="label-mono text-[9px] uppercase leading-relaxed wrap-break-word">
                {cleanText(k)}
              </div>

              <div className="text-sm font-semibold mt-1 leading-snug wrap-break-word">
                {cleanText(v)}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-8">
          <Link
            to={actionTo}
            onClick={(event) => event.stopPropagation()}
            className="w-full btn-ghost justify-between py-3!"
          >
            <span>
              {type === "drone" ? "View Details" : "Request Configuration"}
            </span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;