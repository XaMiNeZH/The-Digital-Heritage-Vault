"use client";

import { useEffect, useRef } from "react";

const palette = ["#c8860a", "#a84422", "#3d6030", "#e8d4b0", "#6b3f1e"];

export function WeavingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let animationFrame = 0;
    let frame = 0;
    let wovenRows = 0;
    let direction = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const columns = 24;
      const rows = 18;
      const cellWidth = width / columns;
      const cellHeight = height / rows;
      const shuttleX = direction > 0 ? (frame % (columns * 8)) / 8 : width - (frame % (columns * 8)) / 8;

      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(8, 7, 5, 0.4)";
      context.fillRect(0, 0, width, height);

      context.strokeStyle = "rgba(232, 160, 32, 0.32)";
      context.lineWidth = 1;
      for (let column = 0; column <= columns; column += 1) {
        const x = column * cellWidth;
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }

      for (let row = 0; row < wovenRows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          context.fillStyle = `${palette[(row + column) % palette.length]}26`;
          context.fillRect(column * cellWidth, row * cellHeight, cellWidth, cellHeight);
        }
      }

      context.strokeStyle = palette[(wovenRows + 1) % palette.length];
      context.lineWidth = 1.5;
      context.beginPath();
      context.moveTo(0, Math.min(wovenRows, rows - 1) * cellHeight + cellHeight / 2);
      context.lineTo(shuttleX, Math.min(wovenRows, rows - 1) * cellHeight + cellHeight / 2);
      context.stroke();

      context.fillStyle = "rgba(232, 160, 32, 0.85)";
      context.shadowBlur = 18;
      context.shadowColor = "rgba(232, 160, 32, 0.8)";
      context.beginPath();
      context.arc(shuttleX, Math.min(wovenRows, rows - 1) * cellHeight + cellHeight / 2, 4, 0, Math.PI * 2);
      context.fill();
      context.shadowBlur = 0;

      if (frame % 40 === 0) {
        wovenRows += 1;
        if (wovenRows >= rows + 2) {
          wovenRows = 0;
          direction *= -1;
        }
      }

      frame += 1;
      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="h-full w-full rounded-[28px] border border-amber/15 bg-black/20"
    />
  );
}
