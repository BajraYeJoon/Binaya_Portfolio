"use client";
import { useEffect, useRef } from "react";
import useWindow from "./hooks/useWindow";

export default function Scene() {
  const { dimension } = useWindow();
  const canvas = useRef<any>(null);
  const prevPosition = useRef<any>(null);

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  useEffect(() => {
    dimension.width > 0 && init();
  }, [dimension]);

  function init() {
    const context = canvas?.current.getContext("2d");
    context.fillStyle = "black";
    context.fillRect(0, 0, dimension.width, dimension.height);
    context.globalCompositeOperation = "destination-out";
  }

  function mouseMove(e: any) {
    const { clientX, clientY, movementX, movementY } = e;
    draw(clientX, clientY, 50);

    const nbOfCircles = Math.max(Math.abs(movementX), Math.abs(movementY)) / 10;

    if (prevPosition.current != null) {
      const { x, y } = prevPosition.current;

      for (let i = 0; i < nbOfCircles; i++) {
        const targetX = lerp(x, clientX, (1 / nbOfCircles) * i);

        const targetY = lerp(y, clientY, (1 / nbOfCircles) * i);

        draw(targetX, targetY, 50);
      }
    }

    prevPosition.current = {
      x: clientX,

      y: clientY,
    };
  }

  function draw(x, y, radius) {
    const context = canvas?.current.getContext("2d");
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
  }

  return (
    <div className="relative w-full h-full">
      {dimension.width == 0 && (
        <div className="h-full w-full relative  bg-black"></div>
      )}
      <canvas
        onMouseMove={mouseMove}
        ref={canvas}
        height={dimension.height}
        width={dimension.width}
      ></canvas>
    </div>
  );
}
