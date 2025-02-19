let textBox = document.querySelector('#text');
let seen = new Set();

async function getJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Pun?type=single');
        const data = await response.json();
        const joke = data.joke;

        if (seen.has(joke)) {
            getJoke();
        } else {
            seen.add(joke);
            textBox.innerHTML = joke;
            textBox.classList.add("show");
        }
    } catch (error) {
        textBox.innerHTML = "Hiba történt a vicc lekérésekor.";
        console.error("Hiba:", error);
    }
}

window.addEventListener('load', getJoke);
