// Three equal lines that rotate into an X
export default function HamburgerClassic({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      className="btn"
    >
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="line"
          style={{
            transform: open
              ? i === 0 ? "translateY(8px) rotate(45deg)"
              : i === 2 ? "translateY(-8px) rotate(-45deg)"
              : "scaleX(0)"
              : "none",
            opacity: i === 1 && open ? 0 : 1,
          }}
        />
      ))}
    </button>
  );
}