document.addEventListener("DOMContentLoaded", function () {
document.getElementById("loadCats").addEventListener("click",loadCatImages);

    async function loadCatImages() {
        const url = "https://api.thecatapi.com/v1/images/search?api_key=live_3eCYGvis2twkglGrVEceSyaJQhh28uTw6kAe06nIQSmyFBZyqA0td7zL5LYo5SXl?limit=5";

        try {
            const respuesta = await fetch(url);
            const cats = await respuesta.json();
            displayCats(cats);
        }
        catch (error) {
            console.error("Error obteniendo las imagenes de gatos", error);
        }
    }
    function displayCats(cats){
        const gallery = document.getElementById("catGallery");
        gallery.innerHTML="";
        cats.forEach(cat => {
            const imgElement = document.createElement("img");
            imgElement.src=cat.url;
            imgElement.alt="Un lindo pishiko";
            imgElement.style.width="auto";
            imgElement.style.height="200px";
            imgElement.style.margin="10px";
            gallery.appendChild(imgElement);
        });

    }

});