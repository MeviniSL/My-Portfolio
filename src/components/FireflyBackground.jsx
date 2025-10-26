import React, { useEffect, useRef } from "react";

const FireflyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const c = canvas.getContext("2d");
    if (!c) return;

    const DPR = window.devicePixelRatio || 1;

    let w = 0;
    let h = 0;
    let rafId;

    const resize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      // set backing store size for crisp rendering on HiDPI screens
      canvas.width = Math.round(vw * DPR);
      canvas.height = Math.round(vh * DPR);
      // keep CSS size equal to viewport
      canvas.style.width = `${vw}px`;
      canvas.style.height = `${vh}px`;
      // reset transform then scale once
      c.setTransform(DPR, 0, 0, DPR, 0, 0);
      w = vw;
      h = vh;
    };

    resize();

    class Firefly {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.s = Math.random() * 2 + 0.6; // avoid zero-size
        this.ang = Math.random() * 2 * Math.PI;
        this.v = (this.s * this.s) / 4;
      }
      move() {
        this.x += this.v * Math.cos(this.ang);
        this.y += this.v * Math.sin(this.ang);
        this.ang += (Math.random() * 20 - 10) * (Math.PI / 180);
      }
      show() {
        c.beginPath();
        c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
        c.fillStyle = "rgba(253,219,163,0.95)";
        c.fill();
      }
    }

    let fireflies = [];

    function draw() {
      // spawn
      if (fireflies.length < 100) {
        for (let j = 0; j < 8; j++) fireflies.push(new Firefly());
      }
      for (let i = fireflies.length - 1; i >= 0; i--) {
        const f = fireflies[i];
        f.move();
        f.show();
        if (f.x < -50 || f.x > w + 50 || f.y < -50 || f.y > h + 50) {
          fireflies.splice(i, 1);
        }
      }
    }

    function loop() {
      // clear using logical size scaled by DPR is handled by canvas API with setTransform
      c.clearRect(0, 0, w, h);
      draw();
      rafId = requestAnimationFrame(loop);
    }

    window.addEventListener("resize", resize);
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      if (rafId) cancelAnimationFrame(rafId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="firefly-canvas"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none", // so canvas doesn't block clicks
        filter: "blur(1px)",
         zIndex: 0, 
       backgroundColor: "#071023", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

export default FireflyBackground;
