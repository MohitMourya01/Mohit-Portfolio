import React, { useState, useEffect } from "react";
import "./RainbowTail.scss";

function RainbowTail() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    cursor.style.left = `${cursorPosition.x}px`;
    cursor.style.top = `${cursorPosition.y}px`;

    document.body.appendChild(cursor);

    return () => {
      document.body.removeChild(cursor);
    };
  }, [cursorPosition]);

  return (
    <div className="rainbow-mouse-tail" onMouseMove={handleMouseMove}></div>
  );
}

export default RainbowTail;