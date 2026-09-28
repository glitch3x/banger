document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copy-btn');
    const caText = document.getElementById('ca-text').innerText;

    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(caText);
            const originalText = copyBtn.innerText;
            copyBtn.innerText = 'Copied!';
            copyBtn.style.background = '#65a30d';
            copyBtn.style.color = 'white';
            
            setTimeout(() => {
                copyBtn.innerText = originalText;
                copyBtn.style.background = 'var(--neon-green)';
                copyBtn.style.color = 'var(--text-main)';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    });

    // Add subtle reveal animations on scroll
    const sections = document.querySelectorAll('.section, .hero-image');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
});
