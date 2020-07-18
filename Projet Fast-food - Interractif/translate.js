const language = {
    fr: {
        slogan: 'Les Fans de BOB\'S choisissent leur chemin',
        combine: 'Combinez avec:<br/><span class="sugcolor">le BOB\'S MAX OVALTIME</span>',
        titre: 'BOB\'S BURGER',
        reservation: 'RESERVEZ VOTRE GRAN PICAHNA',
        reduction: '<span class="pourcentage"> 50%</span><br /> de remise<br /> sur le<br /> <span id="gran">GRAN</span><br/> PICANHA',
        sousSlogan: 'les fans de BOB\'S<br />dégustent toujours leurs sandwitchs <br /> avec des promos exclusives',
        langue:'<img src="images/english.png">',
        dark:'<img src="images/lune.png">'
    },
    en: {
        slogan: 'BOB\'S fans chose their way',
        combine: 'Combine with:<br/><span class="sugcolor">BOB\'S MAX OVALTIME</span>',
        titre: 'BOB\'S Burgers',
        reservation: 'RESERVE YOUR GRAN PICANHA',
        reduction: '<span class="pourcentage"> 50%</span><br />DISCOUNT<br /> on<br /> <span id="gran">GRAN</span><br/> PICANHA',
        sousSlogan: 'BOB\'S FANS<br /> always savour their sandwitches <br />with exclusives sales',
        langue:'<img src="images/french.png">',
        dark:'<img src="images/lune.png">'
    }
}

let currentlanguage = "fr";

let list = document.querySelectorAll("[data-translate]");


for (var item of list) {
    let attribut = item.getAttribute("data-translate");
    let trad = language[currentlanguage][attribut];
    item.innerHTML = trad;
}

const btn = document.querySelector('#langue')

btn.addEventListener('click',langues)

function langues() {
    if (currentlanguage=='en') {
      currentlanguage='fr';
      for (var item of list) {
        let attribut = item.getAttribute("data-translate");
        let trad = language[currentlanguage][attribut];
        item.innerHTML = trad;
    }

    } else {
      currentlanguage='en';
      for (var item of list) {
        let attribut = item.getAttribute("data-translate");
        let trad = language[currentlanguage][attribut];
        item.innerHTML = trad;
    }
    }
  }