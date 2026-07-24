import { useEffect, useRef } from "react";

export const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const canUseGlow =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canUseGlow) return;

    const glow = glowRef.current;
    let frameId = null;
    let pointerX = -100;
    let pointerY = -100;

    const moveGlow = () => {
      glow.style.left = `${pointerX - 2}px`;
      glow.style.top = `${pointerY - 2}px`;
      frameId = null;
    };

    const handlePointerMove = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (!frameId) {
        frameId = requestAnimationFrame(moveGlow);
      }
    };

    const handlePointerLeave = () => {
      glow.classList.add("cursor-glow-hidden");
    };

    const handlePointerEnter = () => {
      glow.classList.remove("cursor-glow-hidden");
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.documentElement.addEventListener(
      "pointerleave",
      handlePointerLeave,
    );
    document.documentElement.addEventListener(
      "pointerenter",
      handlePointerEnter,
    );

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );
      document.documentElement.removeEventListener(
        "pointerenter",
        handlePointerEnter,
      );

      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
};
