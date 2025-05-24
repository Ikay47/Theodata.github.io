// assets/js/custom-cursor.js
document.addEventListener('DOMContentLoaded', () => {
    const dot = document.querySelector('.custom-cursor-dot');
    const outline = document.querySelector('.custom-cursor-outline');

    if (!dot || !outline) {
        console.warn('Custom cursor elements not found.');
        return;
    }
    
    // Add class to body to hide default cursor via CSS
    document.body.classList.add('cursor-none');

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    const easing = 0.1; // Lower value = smoother/slower follow for outline

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
    });

    function animateOutline() {
        let dx = mouseX - outlineX;
        let dy = mouseY - outlineY;

        outlineX += dx * easing;
        outlineY += dy * easing;

        outline.style.left = `${outlineX}px`;
        outline.style.top = `${outlineY}px`;

        requestAnimationFrame(animateOutline);
    }
    
    animateOutline();

    const interactiveElements = document.querySelectorAll(
        'a, button, input[type="submit"], input[type="reset"], input[type="button"], .button, [data-aos]'
    );

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            dot.classList.add('hovering-link');
            outline.classList.add('hovering-link');
        });
        el.addEventListener('mouseleave', () => {
            dot.classList.remove('hovering-link');
            outline.classList.remove('hovering-link');
        });
    });

    // Hide cursor when mouse leaves the window
    document.addEventListener('mouseleave', () => {
        if (dot) dot.style.opacity = '0';
        if (outline) outline.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
         if (dot) dot.style.opacity = '0.8'; // Or original opacity
         if (outline) outline.style.opacity = '0.7'; // Or original opacity
    });
});