import { useRef } from "react";

const useRipple = () => {
  const buttonRef = useRef(null);

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
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${rippleX}px`;
    ripple.style.top = `${rippleY}px`;

    ripple.style.backgroundColor = color;

    ripple.className = "absolute rounded-full transform scale-0 animate-ripple";

    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  };

  return { createRipple, buttonRef };
};

export default useRipple;
