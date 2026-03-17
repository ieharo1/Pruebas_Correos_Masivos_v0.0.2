// Main JavaScript para C# Desde Cero

document.addEventListener('DOMContentLoaded', function() {
    console.log('💻 C# Desde Cero - Sitio cargado correctamente');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#tema')) {
                showTopicContent(targetId);
                return;
            }
            const target = document.querySelector(targetId);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    function showTopicContent(topicId) {
        const content = document.getElementById(topicId);
        if (content) {
            document.querySelectorAll('.content-detail').forEach(el => el.style.display = 'none');
            content.style.display = 'block';
            setTimeout(() => content.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        }
    }

    document.querySelectorAll('.content-detail').forEach(el => el.style.display = 'none');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.module, .resource-card, .code-block, .topic-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.pageYOffset > 100) {
            header.style.background = 'rgba(65, 38, 171, 0.98)';
            header.style.boxShadow = '0 4px 30px rgba(81, 43, 212, 0.3)';
        } else {
            header.style.background = 'var(--secondary-color)';
            header.style.boxShadow = 'none';
        }
    });

    document.querySelectorAll('.code-block, .content-body pre').forEach(block => {
        const btn = document.createElement('button');
        btn.textContent = '📋 Copiar';
        btn.style.cssText = 'position:absolute;top:10px;right:10px;background:var(--accent-color);border:none;padding:5px 10px;border-radius:5px;cursor:pointer;font-size:0.8rem;z-index:10;';
        if (getComputedStyle(block).position === 'static') block.style.position = 'relative';
        block.appendChild(btn);
        btn.addEventListener('click', () => {
            const text = (block.querySelector('code') || block).textContent;
            navigator.clipboard.writeText(text);
            btn.textContent = '✅ Copiado!';
            setTimeout(() => btn.textContent = '📋 Copiar', 2000);
        });
    });

    console.log('%c💻 ¡Bienvenido a C# Desde Cero!', 'font-size: 20px; color: #512BD4; font-weight: bold;');
});
