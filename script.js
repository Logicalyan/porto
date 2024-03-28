function darkMode() {
    const dark = document.querySelector('html');
    dark.classList.toggle('active');
}

function whatsApp() {
    var nama = document.getElementById("nama").value; 
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var pesan = document.getElementById("pesan").value;

    var whatsappl = "https://wa.me/6285697508837?text="
    + "Nama: " + nama + "%0a"
    + "Email: " + email + "%0a"
    + "No Telp: " + number + "%0a"
    + "Pesan: " + pesan;

    window.open(whatsappl,"_blank").focus();
}