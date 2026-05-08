export const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid with proper opacity */}
      <div className="absolute inset-0 hud-grid animate-grid-move opacity-100" />
      
      {/* Softer gradient — pura cover nahi karega */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, var(--color-background) 0%, transparent 5%, transparent 95%, var(--color-background) 100%)"
        }}
      />
    </div>
  );
};