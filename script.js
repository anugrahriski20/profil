// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Website Portfolio berhasil dimuat!");

    // Contoh fungsi untuk menambahkan kelas 'active' pada link navigasi yang sedang dikunjungi
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        // Ambil nama file dari href (misal: "index.html")
        const linkPath = link.getAttribute('href').split("/").pop();

        if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
            link.classList.add('active');
        }
    });
});