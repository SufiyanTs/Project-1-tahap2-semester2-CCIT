var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function() {
        /* untuk kelas "active", bagian tombol untuk mengkontrol panel  */
        this.classList.toggle("active");

        /* menyembunyikan atau menampilkan panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}