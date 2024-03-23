document.addEventListener('DOMContentLoaded', function() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                getWeather(position.coords.latitude, position.coords.longitude);
            },
            (error) => {
                console.log(error);
                getTemp("Paris"); // Utilisez une ville par défaut ou gérez l'erreur différemment
            }
        );
    } else {
        console.log("La géolocalisation n'est pas disponible");
        getTemp("Paris"); // Ou gérez autrement si la géolocalisation n'est pas disponible
    }
});

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e0c21f2aadbf7849019f19152cc31604&units=metric`)
        .then((response) => response.json())
        .then((data) => {
            updateUI(data);
        })
        .catch((error) => console.log(error));
}

function getTemp(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e0c21f2aadbf7849019f19152cc31604&units=metric`)
        .then(response => response.json())
        .then(data => {
            updateUI(data);
        })
        .catch(error => console.log(error));
}

function updateUI(data) {
    let temp = data.main.temp;
    let ville = data.name;
    ville = ville.replace('Arrondissement de', '');
    document.querySelector('.temp').textContent = temp.toFixed(1); // Ajoutez toFixed(1) pour limiter à un chiffre après la virgule
    document.querySelector('.ville').textContent = ville;

    if (temp > 15) {
        document.body.style.background = "linear-gradient(to right, rgb(248, 155, 55), rgb(243, 122, 110))";
    } else {
        document.body.style.background = "linear-gradient(to right, rgb(255, 255, 255), rgb(55, 139, 203))"; // Remettre à la couleur de fond par défaut ou spécifier une nouvelle couleur
    }
}

const changerVille = document.querySelector('.btn'); // Assurez-vous que le sélecteur correspond au bouton dans votre HTML

changerVille.addEventListener('click', () => {
    let ville = prompt('Quelle ville souhaitez-vous voir ?');
    getTemp(ville);
});
