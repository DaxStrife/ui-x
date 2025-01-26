import { useRef, useEffect } from "react";

const useRipple = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    return () => {
      if (button) {
        button.removeEventListener("click", createRipple);
      }
    };
  }, [buttonRef]);

  const createRipple = (event) => {
    const button = buttonRef.current;
    if (!button) return;

    const buttonStyles = getComputedStyle(button);
    let color = buttonStyles.color;

    if (color.startsWith("rgb")) {
      color = color.replace(/rgb(a?)\((\d+), (\d+), (\d+)(?:, [\d.]+)?\)/, "rgba($2, $3, $4, 0.5)");
    }

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rippleX = event.clientX - button.getBoundingClientRect().left - radius;
    const rippleY = event.clientY - button.getBoundingClientRect().top - radius;

    const ripple = document.createElement("span");

    Object.assign(ripple.style, {
      position: "absolute",
      borderRadius: "50%",
      transform: "scale(0)",
      width: `${diameter}px`,
      height: `${diameter}px`,
      left: `${rippleX}px`,
      top: `${rippleY}px`,
      backgroundColor: color,
      opacity: 1,
      animation: "ripple 0.3s linear",
      pointerEvents: "none",
    });

    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  };

  return { createRipple, buttonRef };
};

export default useRipple;
