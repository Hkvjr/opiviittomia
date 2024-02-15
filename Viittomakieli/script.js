var clickedViittoma = { // Alustetaan clickedViittoma
    omena: false,
    paaryna: false,
    mandariini: false,
    viinirypale: false
};

var clickedViittomaCount = 0; // Alustetaan laskuri

document.querySelectorAll('.fruit img').forEach(function(imgElement) {
    imgElement.addEventListener('click', function(event) {
        var fruitName = event.currentTarget.id; // Hedelmän nimi
        
        if (!clickedViittoma[fruitName]) { // Jos viittomakuvaa ei ole vielä näytetty
            event.preventDefault(); // Estetään linkin oletustoiminta

            // Vaihdetaan kuva viittomakuvaan
            event.currentTarget.src = 'img/' + fruitName + '_viittoma.png';
            clickedViittoma[fruitName] = true; // Merkitään, että viittomakuva on näytetty
            clickedViittomaCount++; // Lisätään yksi klikkaus laskuriin

            updateCounterText(clickedViittomaCount); // Päivitetään laskurin teksti
        } else {
            // Jos viittomakuva on jo näytetty, ohjataan linkkiin
            window.location.href = event.currentTarget.parentElement.href;
        }
    });
});

function updateCounterText(count) {
    // Etsitään laskurille tarkoitettu elementti
    var counterElement = document.getElementById('viittomaCounter');
    // Päivitetään elementin teksti laskurin arvolla
    counterElement.textContent = "Olet tänään oppinut uusia viittomia: " + count;
}
