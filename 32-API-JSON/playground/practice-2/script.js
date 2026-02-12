const fetchBTN = document.querySelector("#fetch-btn");
const imgContainer = document.querySelector("#img-container");

fetchBTN.addEventListener("click", () => {
  const fetchInput = document.querySelector("#fetch-input");
  const fetchInputValue = fetchInput.value.toLowerCase().trim();
  // console.log(fetchInput);
  const url = `https://pokeapi.co/api/v2/pokemon/${fetchInputValue}`;
  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Pokemon not found!");
      return res.json();
    })
    .then((json) => {
      imgContainer.innerText = "";

      const img = document.createElement("img");
        img.src = json.sprites.front_default;  
        img.alt = fetchInputValue;

        imgContainer.appendChild(img);
    })
    .catch((error) => console.log("error", error));

  fetchInput.value = "";
});
