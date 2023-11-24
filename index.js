const destination = [
 {
  url_img: "dest_1.jpg",
  name: "first dest",
  price: "159 $",
 },
 {
  url_img: "dest_2.jpg",
  name: "second dest",
  price: "259 $",
 },
 {
  url_img: "dest_3.jpg",
  name: "third dest",
  price: "359 $",
 },
 {
  url_img: "dest_4.jpg",
  name: "fourth dest",
  price: "459 $",
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