let imageList = document.querySelector(".imageList");

let startButton = document.querySelector("#myButtonStart")
startButton.addEventListener("click", getImageFetch)

let nextButton = document.querySelector("#myButtonNext")

function getImageFetch() {
    fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw `${response.status}`;
        })
        .then(data => {
            let imageItem = document.createElement("li");
            imageItem.setAttribute("class", "col-6 mx-auto text-center");

            let image = document.createElement("img");
            image.setAttribute("src", `${data.message}`);
            image.setAttribute("class", "w-75")

            imageItem.appendChild(image);
            imageList.appendChild(imageItem);

            startButton.removeEventListener("click", getImageFetch)
            nextButton.addEventListener("click", getImageFetch)

            window.scrollTo(0, document.body.scrollHeight);
        })
        .catch(error => {
            let errorMessage = document.createElement("p");
            errorMessage.innerText = error;
            imageList.appendChild(errorMessage)
        })
}