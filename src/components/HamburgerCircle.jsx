// Lines inside a circle that changes color on open
export default function HamburgerCircle({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      className="btn btn-circle"
      style={{
        background: open ? "rgba(200,245,100,0.1)" : "rgba(255,255,255,0.06)",
        borderColor: open ? "rgba(200,245,100,0.3)" : "rgba(255,255,255,0.1)",
      }}
    >
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="line line-sm"
          style={{
            background: open ? "#c8f564" : "#f0ede8",
            transform: open
              ? i === 0 ? "translateY(6.5px) rotate(45deg)"
              : i === 2 ? "translateY(-6.5px) rotate(-45deg)"
              : "scaleX(0)"
              : "none",
            opacity: i === 1 && open ? 0 : 1,
          }}
        />
      ))}
    </button>
  );
}