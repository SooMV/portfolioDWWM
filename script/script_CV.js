
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez l'image par son identifiant
    var downloadButton = document.getElementById('downloadCV');

    // Attachez un gestionnaire d'événements de clic
    downloadButton.addEventListener('click', function() {
        // Chemin vers votre fichier CV PDF
        var filePath = 'cv_download/CV.pdf';
        // Créer un élément <a> temporaire pour déclencher le téléchargement
        var link = document.createElement('a');
        link.href = filePath;
        link.download = 'CV.pdf'; // Nom du fichier téléchargé
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});