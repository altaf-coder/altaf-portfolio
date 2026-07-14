"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
}

interface Node {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  hue: number;
}

export function Hero3DBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const frame = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0,
      H = 0,
      dpr = 1,
      t = 0;
    let stars: Star[] = [];
    let nodes: Node[] = [];

    const mobile = () => W < 768;
    const DEPTH = 1200;

    const init = () => {
      const starCount = mobile() ? 200 : 400;
      stars = Array.from({ length: starCount }, () => ({
        x: (Math.random() - 0.5) * W * 2,
        y: (Math.random() - 0.5) * H * 2,
        z: Math.random() * DEPTH,
        size: Math.random() * 1.5 + 0.3,
      }));

      const nodeCount = mobile() ? 60 : 100;
      nodes = Array.from({ length: nodeCount }, () => ({
        x: (Math.random() - 0.5) * W,
        y: (Math.random() - 0.5) * H,
        z: Math.random() * DEPTH * 0.8 + 200,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.5,
        hue: Math.random() > 0.4 ? 265 + Math.random() * 30 : 190 + Math.random() * 20,
      }));
    };

    const resize = () => {
      dpr = Math.min(devicePixelRatio, 2);
      W = innerWidth;
      H = innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
    };

    const onMove = (e: MouseEvent) => {
      mouse.current.tx = (e.clientX / W - 0.5) * 2;
      mouse.current.ty = (e.clientY / H - 0.5) * 2;
    };

    const project = (x: number, y: number, z: number, rotX: number, rotY: number) => {
      const cy = Math.cos(rotY),
        sy = Math.sin(rotY);
      let rx = x * cy - z * sy;
      let rz = x * sy + z * cy;
      const cx = Math.cos(rotX),
        sx = Math.sin(rotX);
      const ry = y * cx - rz * sx;
      const fz = y * sx + rz * cx + DEPTH * 0.5;
      const fov = 800;
      const scale = fov / (fov + fz);
      return {
        sx: W / 2 + rx * scale,
        sy: H / 2 + ry * scale,
        scale,
        alpha: Math.min(1, Math.max(0.08, fz / DEPTH)),
        fz,
      };
    };

    const drawNebula = () => {
      const pulse = Math.sin(t * 0.008) * 0.5 + 0.5;
      const blobs = [
        { x: W * 0.3, y: H * 0.25, r: W * 0.45, c: `rgba(124,58,237,${0.12 + pulse * 0.06})` },
        { x: W * 0.75, y: H * 0.65, r: W * 0.35, c: `rgba(56,189,248,${0.08 + pulse * 0.04})` },
        { x: W * 0.5, y: H * 0.5, r: W * 0.25, c: `rgba(168,85,247,${0.06 + pulse * 0.03})` },
      ];
      for (const b of blobs) {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, b.c);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }
    };

    const drawWireframeSphere = (rotX: number, rotY: number, radius: number, cx: number, cy: number, cz: number) => {
      const latSteps = 12;
      const lonSteps = 18;

      for (let lat = 0; lat <= latSteps; lat++) {
        const phi = (lat / latSteps) * Math.PI;
        const points: ReturnType<typeof project>[] = [];
        for (let lon = 0; lon <= lonSteps; lon++) {
          const theta = (lon / lonSteps) * Math.PI * 2 + t * 0.002;
          const x = cx + radius * Math.sin(phi) * Math.cos(theta);
          const y = cy + radius * Math.cos(phi);
          const z = cz + radius * Math.sin(phi) * Math.sin(theta);
          points.push(project(x, y, z, rotX, rotY));
        }
        for (let i = 0; i < points.length - 1; i++) {
          const a = points[i],
            b = points[i + 1];
          const alpha = Math.min(a.alpha, b.alpha) * 0.25;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(167,139,250,${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(a.sx, a.sy);
          ctx.lineTo(b.sx, b.sy);
          ctx.stroke();
        }
      }

      for (let lon = 0; lon < lonSteps; lon++) {
        const theta = (lon / lonSteps) * Math.PI * 2 + t * 0.002;
        const points: ReturnType<typeof project>[] = [];
        for (let lat = 0; lat <= latSteps; lat++) {
          const phi = (lat / latSteps) * Math.PI;
          const x = cx + radius * Math.sin(phi) * Math.cos(theta);
          const y = cy + radius * Math.cos(phi);
          const z = cz + radius * Math.sin(phi) * Math.sin(theta);
          points.push(project(x, y, z, rotX, rotY));
        }
        for (let i = 0; i < points.length - 1; i++) {
          const a = points[i],
            b = points[i + 1];
          const alpha = Math.min(a.alpha, b.alpha) * 0.2;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(56,189,248,${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(a.sx, a.sy);
          ctx.lineTo(b.sx, b.sy);
          ctx.stroke();
        }
      }
    };

    const draw = () => {
      t++;
      ctx.clearRect(0, 0, W, H);

      mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.05;
      mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.05;

      const rotY = mouse.current.x * 0.3 + t * 0.0004;
      const rotX = mouse.current.y * 0.18 + Math.sin(t * 0.004) * 0.08;

      drawNebula();

      // Starfield
      for (const s of stars) {
        s.z -= 0.8;
        if (s.z <= 0) {
          s.z = DEPTH;
          s.x = (Math.random() - 0.5) * W * 2;
          s.y = (Math.random() - 0.5) * H * 2;
        }
        const p = project(s.x, s.y, s.z, rotX * 0.3, rotY * 0.3);
        const brightness = (1 - s.z / DEPTH) * 0.8;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${brightness * p.alpha})`;
        ctx.arc(p.sx, p.sy, s.size * p.scale, 0, Math.PI * 2);
        ctx.fill();
      }

      // Wireframe sphere — offset to right
      const sphereX = mobile() ? W * 0.15 : W * 0.22;
      drawWireframeSphere(rotX, rotY, mobile() ? 140 : 200, sphereX, -30, DEPTH * 0.45);

      // Second smaller sphere
      drawWireframeSphere(
        rotX * 1.2,
        rotY * 0.8,
        mobile() ? 70 : 100,
        -sphereX * 0.6,
        60,
        DEPTH * 0.55
      );

      // Update nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.z += n.vz;
        const bound = Math.max(W, H) * 0.55;
        if (Math.abs(n.x) > bound) n.vx *= -1;
        if (Math.abs(n.y) > bound) n.vy *= -1;
        if (n.z < 100 || n.z > DEPTH * 0.9) n.vz *= -1;
      }

      const projected = nodes
        .map((n) => ({ n, ...project(n.x, n.y, n.z, rotX, rotY) }))
        .sort((a, b) => a.fz - b.fz);

      const maxDist = mobile() ? 120 : 160;

      // Connections
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i],
            b = projected[j];
          const dx = a.sx - b.sx,
            dy = a.sy - b.sy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * Math.min(a.alpha, b.alpha) * 0.55;
            const grad = ctx.createLinearGradient(a.sx, a.sy, b.sx, b.sy);
            grad.addColorStop(0, `hsla(${a.n.hue},85%,70%,${alpha})`);
            grad.addColorStop(1, `hsla(${b.n.hue},85%,70%,${alpha * 0.4})`);
            ctx.beginPath();
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.stroke();
          }
        }
      }

      // Node glow
      for (const { sx, sy, scale, alpha, n } of projected) {
        const r = 2.5 * scale;
        const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, r * 5);
        glow.addColorStop(0, `hsla(${n.hue},90%,80%,${alpha * 0.8})`);
        glow.addColorStop(0.5, `hsla(${n.hue},80%,60%,${alpha * 0.15})`);
        glow.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.fillStyle = glow;
        ctx.arc(sx, sy, r * 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = `hsla(${n.hue},50%,95%,${alpha})`;
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Mouse glow follow
      const mx = (mouse.current.tx * 0.5 + 0.5) * W;
      const my = (mouse.current.ty * 0.5 + 0.5) * H;
      const mouseGlow = ctx.createRadialGradient(mx, my, 0, mx, my, 250);
      mouseGlow.addColorStop(0, "rgba(139,92,246,0.08)");
      mouseGlow.addColorStop(0.5, "rgba(56,189,248,0.03)");
      mouseGlow.addColorStop(1, "transparent");
      ctx.fillStyle = mouseGlow;
      ctx.fillRect(0, 0, W, H);

      frame.current = requestAnimationFrame(draw);
    };

    resize();
    addEventListener("resize", resize);
    addEventListener("mousemove", onMove);
    frame.current = requestAnimationFrame(draw);

    return () => {
      removeEventListener("resize", resize);
      removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden
    />
  );
}
