console.log("location file loaded")

function getLocation(){
  if (navigator.gelocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }else{
    x.innerHTML="Geolocation is not supoorted by this browser"
  }
}

function showPosition(position){
  // x.innerHTML="latitude:"+position.coords.latitude+"<br>Longitude:"+position.coords.longitude;
  console.log(position)
}

getLocation();