// Lines with different widths that equalize and rotate into an X
const widths = ["100%", "70%", "45%"];

export default function HamburgerStagger({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      className="btn btn-left"
    >
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="line"
          style={{
            width: open ? "24px" : widths[i],
            background: open ? "#c8f564" : "#f0ede8",
            transitionDelay: `${i * 0.05}s`,
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