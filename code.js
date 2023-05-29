genera_tabla();

function genera_tabla() {
    fetch('http://localhost:5149/ListarCategorias')

    .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.response.length)
            var tbodyUser = document.getElementById('tbodyUser');
            //tbodyUser.innerHTML = '';

            for (let index = 0; index < data.response.length; index++) {

                console.log(data.response[0].id_Categoria);
                //alert(data.message[index].nombre);
                const row = document.createElement("tr");
                // row.setAttribute("id", data.message[index].id);
                // row.setAttribute("onclick", "Editar('" + data.message[index].id + "','" + data.message[index].nombre + "','" + data.message[index].apellido + "','" + data.message[index].mensaje + "' );");


                const cell = document.createElement("td");
                const cellText = document.createTextNode(data.response[index].id_Categoria);
                cell.appendChild(cellText);
                row.appendChild(cell);

                const cell1 = document.createElement("td");
                const cellText1 = document.createTextNode(data.response[index].nombre);
                cell1.appendChild(cellText1);
                row.appendChild(cell1);

                const cell2 = document.createElement("td");
                const cellText2 = document.createTextNode(data.response[index].descripcion);
                cell2.appendChild(cellText2);
                row.appendChild(cell2);

                const cell3 = document.createElement("td");
                const cellText3 = document.createTextNode(data.response[index].estado);
                cell3.appendChild(cellText3);
                row.appendChild(cell3);

                tbodyUser.appendChild(row);
            }


        });
}