
let listar_productos = async(numb) => {
    let productos;
    const character = ( !numb || numb === " ") ? numb = "Morty Smith" : numb
    await axios({
            method: 'get',
            url: `https://rickandmortyapi.com/api/character/?name=${character}`,
            responseType: 'json'
        }).then(function(res) {
            productos = res.data;
            let boolean = true;
        })
        .catch(function(err) {
            console.log(err);
            let boolean = false
        });

    return productos.results, boolean;
};