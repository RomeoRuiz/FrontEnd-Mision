console.log("Hola expolorers")

const fetchPokemon = () => {
    const pokeNombre = document.getElementById("pokeName");
    let pokeInput = pokeNombre.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200"){
            console.log(res);
            pokeImage("./noFound.png");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeFondo = data.sprites.other.dream_world.front_default;
            let pokeID = data.id;
            let pokeTipo = data.types[0].type.name;
            let pokePeso = data.weight / 10 + " kg";
            let pokeAltura = data.height / 10 + " m";
            let mov1 = data.abilities[0].ability.name
            let mov2 = data.abilities[1].ability.name
            let hp = data.stats[0].base_stat;
            let pokeAtaque = data.stats[1].base_stat;
            let pokeDefensa = data.stats[2].base_stat;
            let pokeAtaqueEspecial = data.stats[3].base_stat;
            let pokeDefensaEspecial = data.stats[4].base_stat;
            let pokeVelocidad = data.stats[5].base_stat;
            
            pokeImage(pokeImg,pokeFondo);
            pokeGen(pokeID,pokeInput);
            pokeDatos1(pokeTipo,pokePeso,pokeAltura,mov1,mov2);
            pokeDatos2(hp,pokeAtaque,pokeDefensa,pokeAtaqueEspecial,pokeDefensaEspecial,pokeVelocidad)
        }
    });
}

const pokeImage = (url,pokeFondo) => {
    const pokeFoto = document.getElementById("pokeImg");
    pokeFoto.src = url;
    const pokeFon = document.getElementById("pokeFondo");
    pokeFon.background = pokeFondo;
}
const pokeGen = (pokeID,pokeName) => {
    const pokeNumero = document.getElementById("pokeNume");
    const pokeNames = document.getElementById("pokeNom");
    pokeNumero.innerText = pokeID;
    pokeNames.innerText = pokeName;
}
const pokeDatos1 = (pokeTipo,pokePeso,pokeAltura,mov1,mov2) =>{
    const tipoPoke = document.getElementById("pokemonTipo");
    tipoPoke.innerText = "Tipo: " + pokeTipo;
    const pesoPoke = document.getElementById("pokemonPeso");
    pesoPoke.innerText = "Peso: " + pokePeso;
    const alturaPoke = document.getElementById("pokemonAltura");
    alturaPoke.innerText = "Altura: " + pokeAltura;
    const mov1Poke = document.getElementById("pokemonMov1");
    mov1Poke.innerText = "Mov 1: " + mov1;
    const mov2Poke = document.getElementById("pokemonMov2");
    mov2Poke.innerText = "Mov 2: " + mov2;
}
const pokeDatos2 = (hp,pokeAtaque,pokeDefensa,pokeAtaqueEspecial,pokeDefensaEspecial,pokeVelocidad) =>{
    const hpPoke = document.getElementById("pokemonHP");
    hpPoke.innerText = "HP: " + hp;
    const ataquePoke = document.getElementById("pokemonAtaque");
    ataquePoke.innerText = "Ataque: " + pokeAtaque;
    const defensaPoke = document.getElementById("pokemonDefensa");
    defensaPoke.innerText = "Defensa: " + pokeDefensa;
    const ataqueEspecialPoke = document.getElementById("pokemonAtaqueEspecial");
    ataqueEspecialPoke.innerText = "Ataque Especial: " + pokeAtaqueEspecial;
    const defensaEspecialPoke = document.getElementById("pokemonDefensaEspecial");
    defensaEspecialPoke.innerText = "Defensa Especial: " + pokeDefensaEspecial;
    const velocidadPoke = document.getElementById("pokemonVelocidad");
    velocidadPoke.innerText = "Velocidad: " + pokeVelocidad;
}