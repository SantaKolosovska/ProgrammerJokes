
const outputDiv = document.querySelector(".output");

async function getMoreJokes() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single&amount=8')
        if (!response.ok) {
            throw new Error('Failed to fetch item from the API');
        }
        const data = await response.json();
        const jokes = data.jokes;

        jokes.forEach(function (item) {
            var listItem = document.createElement("li");
            var jokeParagraph = document.createElement("p");

            jokeParagraph.innerText = item.joke;

            listItem.appendChild(jokeParagraph)
            outputDiv.appendChild(listItem);

        });
    } catch (e) {
        console.error(e);
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    getMoreJokes();
});

function regenerate() {
    outputDiv.innerHTML = "";
    getMoreJokes();
}

regenerateBtn.addEventListener('click', regenerate);