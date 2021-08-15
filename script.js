const funnyButton = document.getElementById("funny_button");
const jokeLocation = document.getElementById("funny_result");

funnyButton.addEventListener("click", funnyFunction);

async function fetchJoke() {
  console.log("Fetching joke");
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
  return jokeData;
}

async function funnyFunction() {
  console.log("Click");
  try {
    const funnyData = await fetchJoke();
    funnyJoke = funnyData.joke;
    jokeLocation.innerHTML = funnyJoke;
  } catch {
    console.log("funnyFunction: Error!");
  }
}
