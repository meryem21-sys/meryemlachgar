document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        alert(`Détails du projet ${projectId}: Ce projet est encore en développement!`);
    });
});
