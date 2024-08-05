//menulis di layar
function tulis(value) {
    document.getElementById('layar').value+=value;
}
//bersihkan layar
function bersihkan() {
    document.getElementById('layar').value ="";
}
//hapus satu layur
function koreksi () {
    let obj = document.getElementById('layar').value;
    let satu = obj.replace(/\s/g,"");
    let dua = satu.split("");
    dua.pop();
    let hasil = dua.toString();
    let x = /,/g
    let hasil2 = hasil.replace(x,"");
    document.getElementById('layar').value = hasil2;
}
function hitung() {
    let obj = document.getElementById('layar').value;
    try {
        let hasil = eval(obj);
        document.getElementById('layar').value = hasil;
    } catch (e) {
        document.getElementById('layar').value = "error"
    }
}