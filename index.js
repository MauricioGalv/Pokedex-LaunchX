//data
const datapokeName = document.querySelector('[data-poke-name]');
const datapokeId = document.querySelector('[data-poke-id]');
const datapokeWeight = document.querySelector('[data-poke-weight]');
const datapokeHeight = document.querySelector('[data-poke-height]');
const pokemonData = document.getElementById("pokemon-data");

const fetchPokemon = () => {
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status !="200") {
            console.log(res);
            pokeImage("confused-psyduck.gif");
            datapokeName.textContent = 'No encontrado';
        }
            return res.json();
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
        //name
        datapokeName.textContent = data.name;
        datapokeId.textContent = `ID ${data.id}`;
        //physique
        datapokeWeight.textContent = `Peso: ${data.weight}`;
        datapokeHeight.textContent = `Altura: ${data.height}`;
        //types
        const dataTypes = data['types'];
        const datapokeTypeOne = document.querySelector('[data-poke-type1]');
        const datapokeTypeTwo = document.querySelector('[data-poke-type2]');

        const dataFirstType = dataTypes[0];
        const dataSecondType = dataTypes[1];
        datapokeTypeOne.textContent = `Tipo: ${dataTypes[0].type.name}`;
        if (dataSecondType) {
            datapokeTypeTwo.classList.remove('hide');
            datapokeTypeTwo.textContent = dataSecondType['type']['name'];
        } else {
            datapokeTypeTwo.classList.add('hide');
            datapokeTypeTwo.textContent = '';
        }
    })
}

//fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;

}


