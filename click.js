
const trigger=function (event) {
    event.preventDefault();
const option= document.querySelector('.preference').value; //accessing input tag with class
if (option.trim()==="Tea"){
    document.querySelector('.container-title').textContent=" Tea" // accesing title tag and changing the value using contenttext
    document.querySelector('.container-description').textContent=
    "Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China and East Asia"
     // accessing description and changing value
}

else if (option.trim()==="Coffee"){
    document.querySelector('.container-title').textContent=" Coffee" // accesing title tag and changing the value using contenttext
    document.querySelector('.container-description').textContent=
    "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. From the coffee fruit, the seeds are separated to produce a stable, raw product: unroasted green coffee"
     // accessing description and changing value
}else{
    document.querySelector('.container-title').textContent="" // accesing title tag and changing the value using contenttext
    document.querySelector('.container-description').textContent="" // accessing description and changing value
}
}
document.querySelector('.preference-button').addEventListener('click',trigger) // step1