var res=fetch("https://restcountries.com/v3.1/all");
  res.then((data)=>data.json())
  .then((data1)=>foo(data1));

var div_container=document.createElement("div");
div_container.setAttribute("class","container");
var div_row=document.createElement("div");
div_row.setAttribute("class","row");

var h1_tag=document.createElement("h1");
h1_tag.setAttribute("id","title");
h1_tag.setAttribute("class","text-center")

//
function foo(arr){
      
  for(var i=0; i<arr.length;i++){
    console.log(arr[i]);
    var div=document.createElement("div");
    div.setAttribute("class","col-lg-4 col-sm-12");

  div.innerHTML=`<div class="card text-white bg-dark mb-4" style="max-width: 18rem;">
    <div class="card-header">${arr[i].name.common}</div>
  <div class="card-body">
    <img class="card-img" src="${arr[i].flags.svg}" alt="Card image cap"/>
    <h6 class="card-title">Capital : ${arr[i].capital}</h6>
    <h6 class="card-title">Region : ${arr[i].region}</h6>
    <h6 class="card-title">Latlong : ${arr[i].latlng}</h6>
    <h6 class="card-title">Country Code : ${arr[i].cca3}</h6>
    <button type="button" class="btn btn-primary">Click for Weather</button>
     </div>
</div>`;
  document.body.append(div);
  div_row.appendChild(div);
  div_container.appendChild(div_row);
}
document.body.append(div_container);
}
