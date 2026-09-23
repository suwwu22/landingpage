document.addEventListener("DOMContentLoaded", () => {
  // Hanya aktifkan tilt di desktop dengan kursor pointer (bukan touch device)
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isTouchDevice || prefersReducedMotion) return;

  const cards = document.querySelectorAll('[data-antigravity="card"]');

  cards.forEach((card) => {
    let isHovering = false;
    let rafId = null;

    card.addEventListener("mouseenter", () => {
      isHovering = true;
      card.style.transition = "transform 0.15s ease-out";
    });

    card.addEventListener("mousemove", (e) => {
      if (!isHovering) return;
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Tilt halus agar tetap mempertahankan karakter layout
        const rotateX = (-y / rect.height) * 8;
        const rotateY = (x / rect.width) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-5px)`;
      });
    });

    card.addEventListener("mouseleave", () => {
      isHovering = false;
      if (rafId) cancelAnimationFrame(rafId);
      card.style.transition = "transform 0.3s ease";
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    });
  });
});