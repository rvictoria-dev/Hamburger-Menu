import {useState} from "react";
import HamburgerClassic from "./components/HamburgerClassic";
import HamburgerStagger from "./components/HamburgerStagger";
import HamburgerCircle from "./components/HamburgerCircle";
import "./styles/App.css";

export default function App() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <div className="page">
      <h1 className="title">Hamburger Menu</h1>
      <p className="subtitle">Click each icon to see the animation</p>

      <div className="grid">

        <div className="demo">
          <HamburgerClassic open={open1} onClick={() => setOpen1(!open1)} />
          <span className="label">Classic</span>
          <code className="tag">rotate(45deg)</code>
        </div>

        <div className="demo">
          <HamburgerStagger open={open2} onClick={() => setOpen2(!open2)} />
          <span className="label">Stagger</span>
          <code className="tag">width + delay</code>
        </div>

        <div className="demo">
          <HamburgerCircle open={open3} onClick={() => setOpen3(!open3)} />
          <span className="label">Circle</span>
          <code className="tag">border-radius: 50%</code>
        </div>

      </div>
    </div>
  );
}