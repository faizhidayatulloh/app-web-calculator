let kata;
kata = window.prompt('Hai, siapa nama kamu?    \nKetika nama anda :');
if ( kata == ""|| kata == null ) {
    kata = 'tolong ketik nama anda, dan tekan ok !'
    document.getElementById('faiz').innerHTML = kata;
} else {
    document.getElementById('faiz').innerHTML =`halo ${kata}, bagaimana kabar anda hari ini? kapan menikah? kapan punya anak?
    kapan masuk surga ?`
}