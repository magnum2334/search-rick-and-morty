
const tbody = document.querySelector('#tbl-productos tbody');

let mostrar_datos = async () => {
    
    const button = document.getElementById("mybutton")
    const num = document.getElementById("numb").value
    let productos = await listar_productos(num);
    button.remove()
    for (let i = 0; i < productos.length; i++) {
        let live = () =>{
            if(productos[i].status === "Alive") {
               return `<strong>🟢 ${productos[i].status}</strong>`
            }else if(productos[i].status === "Dead"){
                return `💀<strong>${productos[i].status}</strong>`
            }else{
                return `<strong> ⚫ ${productos[i].status}</strong>`
            }
        }
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = productos[i].id;
        fila.insertCell().innerHTML = `
        <div class="d-flex space align-items-center justify-content-around">
            <img class="img" src="${productos[i].image}">
            <strong>${productos[i].name}</strong>
        </div>`
        fila.insertCell().innerHTML =  live()
        fila.insertCell().innerHTML = productos[i].species;

    }
};

