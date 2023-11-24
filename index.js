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
 }
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
 }
];

const week_off = document.querySelector("#week__off");

for(let i=0; i<destination.length; i++){
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
//welk__summ

const welc_summ = document.querySelector("#welk__summ");

for(let i=0; i<summ_dest.length; i++){
 welk__summ.innerHTML += `
  <div class="col-6 col-md-4 col-lg-2">
 <div class="card mt-4 ">
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