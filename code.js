function buka() {
    let no = 81910288140;
    let pesan = "Halo mas Faiz\nkapan anda menikah lagi?????"
    let pesanUrl = encodeURIComponent(pesan)
    let url = `https://wa.me/${no}?text=${encodeURIComponent(pesan)}`
    window.open(url,'_blank')
}

document.getElementById('wa').addEventListener('click',buka)