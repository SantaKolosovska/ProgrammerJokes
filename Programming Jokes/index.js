
async function getJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
        if (!response.ok) {
            throw new Error('Failed to fetch item from the API');
        }

        const data = await response.json();
        const parsedData = {
            text: data.joke,
        };

        return data;
    } catch (e) {
        console.error(e);
    }
}

const cardDiv = document.querySelector(".cardDiv");

async function fillCard(card, data) {
    let jokeData = await getJoke();
    cardDiv.querySelector(".card-text").innerText = jokeData.joke;
}

randomBtn.addEventListener('click', fillCard);

