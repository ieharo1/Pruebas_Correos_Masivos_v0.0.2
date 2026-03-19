document.addEventListener('DOMContentLoaded', function() {
    // Mostrar/Ocultar contenido de temas
    document.querySelectorAll('a[href^="#tema"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Ocultar todos los contenidos
                document.querySelectorAll('.content-detail').forEach(function(el) {
                    el.style.display = 'none';
                });
                
                // Mostrar el contenido seleccionado
                targetElement.style.display = 'block';
                
                // Scroll suave
                setTimeout(function() {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    });
});
