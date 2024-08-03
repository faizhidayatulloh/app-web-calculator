function showLocation (){
    navigator.geolocation.getCurrentPosition(cari);
}
function cari(position) {
    let x = document.getElementById('faiz');
    let lintang = position.coords.latitude;
    let bujur = position.coords.longitude;
    x.innerHTML = `garis lintang : ${lintang}<br/>
    garis bujur : ${bujur}`
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lintang}&lon=${bujur}&format=json`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
    const address = data.display_name;
    document.getElementById('alin').innerHTML = `alamat : ${address}`
  })
  .catch(error => console.error('Error:', error));

}
document.getElementById('btn').addEventListener('click',showLocation)