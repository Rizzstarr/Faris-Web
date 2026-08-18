function ubahTeks() {
    document.getElementById("teks").textContent = "Teks sudah berubah!";
}

function darkMode() {
    document.body.classList.toggle("light");

    const button = document.getElementById("modeButton");

    if (document.body.classList.contains("light")) {
        button.textContent = "🌙 Dark Mode";
    } else {
        button.textContent = "☀️ Light Mode";
    }
}