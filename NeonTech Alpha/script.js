const cursor = document.getElementById('cursor');
    const buttons = document.querySelectorAll('button, a, .cursor-pointer');

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { 
            x: e.clientX, 
            y: e.clientY, 
            duration: 0.1, 
            ease: "power2.out" 
        });
    });

    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 3, mixBlendMode: 'difference', duration: 0.3 });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, mixBlendMode: 'difference', duration: 0.3 });
        });
    });

    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section > h2').forEach(el => {
        el.classList.add('transition', 'duration-1000', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });


const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);