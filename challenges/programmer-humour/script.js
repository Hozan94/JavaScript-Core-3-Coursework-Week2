function getHumor() {
    fetch(`https://xkcd.now.sh/?comic=latest`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw `${response.status}`;
        })
        .then((data) => {
            let main = document.querySelector("main");

            let ourSection = document.createElement("section");
            ourSection.setAttribute("class", "ourSection");
            main.appendChild(ourSection);

            let image = document.createElement("img");
            image.setAttribute("class", "jokeImage");
            image.setAttribute("src", `${data.img}`);
            ourSection.appendChild(image);
        })
        .catch((error) => {
            let errorMessage = document.createElement("p");
            errorMessage.innerText = error;

            let main = document.querySelector("main");
            main.appendChild(errorMessage);
        });
}

getHumor();