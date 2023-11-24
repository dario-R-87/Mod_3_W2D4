const destination = [
  {
    url_img: "dest_7.jpg",
    name: "first dest",
    price: "159 $",
  },
  {
    url_img: "dest_8.jpg",
    name: "second dest",
    price: "259 $",
  },
  {
    url_img: "dest_9.jpg",
    name: "third dest",
    price: "359 $",
  },
  {
    url_img: "dest_10.jpg",
    name: "fourth dest",
    price: "459 $",
  },
];

const summ_dest = [
  {
    url_img: "dest_1.jpg",
    name: "first dest",
    price: "59 $",
  },
  {
    url_img: "dest_2.jpg",
    name: "second dest",
    price: "344 $",
  },
  {
    url_img: "dest_3.jpg",
    name: "third dest",
    price: "634 $",
  },
  {
    url_img: "dest_4.jpg",
    name: "fourth dest",
    price: "888 $",
  },
  {
    url_img: "dest_5.jpg",
    name: "5-th dest",
    price: "344 $",
  },
  {
    url_img: "dest_6.jpg",
    name: "6-th dest",
    price: "865 $",
  },
];

const day = {
  url_img: "day.jpg",
  name: "Paradise",
  price: "1588 $",
  description:
    "Cortina d’Ampezzo è la località di montagna più famosa del Veneto, merito di film, grandi eventi sportivi e di uno dei comprensori sciistici più importanti d’Europa. Molti sono i vip che la scelgono come località di villeggiatura e molti sono quelli che vengono qui sperando di incontrare qualche celebrità del cinema o dello sci, ma questa cittadina mondana e un po’ snob piace anche a chi non ha alcun interesse per aperitivi après ski e club alla moda. Incastonata tra alcune delle cime più maestose e affascinanti di tutto l’arco alpino, Cortina è un gioiello che fa innamorare chiunque ami la montagna. Non a caso viene chiamata la Regina delle Dolomiti, un titolo meritatissimo. Tra i luoghi simbolo delle Dolomiti Ampezzane vanno sicuramente citate le Tofane, tre vette maestose che superano i 3000 metri di altezza, il Passo Giau, teatro di epiche sfide ciclistiche, il massiccio del Sorapiss e la Croda da Lago. - https://www.veneto.info/cosa-vedere-veneto/vacanze-in-montagna-veneto/",
  date: "18 gennaio 24 - 1 febbraio 24",
};

const week_off = document.querySelector("#week__off");

for (let i = 0; i < destination.length; i++) {
  week_off.innerHTML += `
  <div class="col-6 col-md-4 col-lg-3">
 <div class="card mt-4 ">
    <div class="ratio ratio-16x9"><img src='./assets/${destination[i].url_img}' class="card-img-top mt-2" alt="album image" /></div>
    <div class="card-body">
     <h5 class="card-title">${destination[i].name}</h5>
    </div>
    <ul class="list-group list-group-flush">
     <li class="list-group-item">${destination[i].price}</li>
    </ul>
  </div>
</div>
`;
}

const welc_summ = document.querySelector("#welk__summ");

for (let i = 0; i < summ_dest.length; i++) {
  welk__summ.innerHTML += `
  <div class="col-6 col-md-4 col-lg-2">
 <div class="card mt-4 shadow">
    <div class="ratio ratio-16x9"><img src='./assets/${summ_dest[i].url_img}' class="card-img-top mt-2" alt="album image" /></div>
    <div class="card-body">
     <h5 class="text-truncate card-title">${summ_dest[i].name}</h5>
    </div>
    <ul class="list-group list-group-flush">
     <li class="list-group-item">${summ_dest[i].price}</li>
    </ul>
  </div>
</div>
`;
}

const day_off = document.querySelector("#day__off");

day_off.innerHTML += `
<div class="card mb-3"">
  <div class="row align-items-center g-0">
    <div class="col-xl-8">
      <img src="./assets/${day.url_img}" class="w-100 img-fluid rounded-start" alt="...">
    </div>
    <div class="col-xl-4">
      <div class="card-body">
        <h5 class="card-title">${day.name}</h5>
        <p class="card-text">${day.description}</p>
        <p class="card-text">${day.date}</p>
        <p class="card-text"><small class="text-body-secondary">${day.price}</small></p>
      </div>
    </div>
  </div>
</div>
`;
