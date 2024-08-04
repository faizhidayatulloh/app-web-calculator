function showLocation (){
    navigator.geolocation.watchPosition(cari);
}
function cari(position) {
    let x = document.getElementById('faiz');
    let lintang = position.coords.latitude;
    let bujur = position.coords.longitude;
    let akurasi = position.coords.accuracy;
    x.innerHTML = `garis lintang : ${lintang}<br/>
    garis bujur : ${bujur}<br/>akurasi : ${akurasi}`
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lintang}&lon=${bujur}&format=json`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
    const address = data.display_name;
    document.getElementById('alin').innerHTML = `<b>Posisi anda berada di </b>: ${address}<br/><br/>Untuk melihat codenya 
    seperti apa, hubungi kami di : <b>faizulurrosyad433@gmail.com</b>`
  })
  .catch(error => console.error('Error:', error));

}
document.getElementById('btn').addEventListener('click',showLocation)