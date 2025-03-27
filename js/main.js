const selectElement = document.querySelector("#shop-select");
const tableElement = document.querySelector(".table")
const cardsElement = document.querySelector(".cards")

async function fetchData() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    tableElement.innerHTML = `
        <tr>
            <th>id</th>
            <th>image</th>
            <th>title</th>
            <th>price</th>
            <th>category</th>
        </tr>`
    data.forEach((element) => {
        tableElement.innerHTML += `
        <tr>
            <td>${element.id}</td>
            <td class="table-img"><img src="${element.image}"> </td>
            <td>${element.title}</td>
            <td>${element.price}</td>
            <td>${element.category}</td>
        </tr>
        `;
    });

    selectElement.addEventListener("change", () => {
        let selectedValue = selectElement.value; // `this.value` o'rniga `selectElement.value`
        if (selectedValue == "card") {
            tableElement.innerHTML = ''
            cardsElement.innerHTML = ''
            
            data.forEach((element)=>{
                cardsElement.innerHTML += `
                    <div class="card">
                        <img src="${element.image}">
                        <h3>${element.title}</h3>
                        <div class="card__footer">
                            <p class="card-footer__price">
                                ${element.price}$
                            </p>
                            <p class="card-footer__category">
                                ${element.category}
                            </p>
                        </div>
                    </div>
                `
            })
        }else if(selectedValue == "table"){
            tableElement.innerHTML = `
        <tr>
            <th>id</th>
            <th>image</th>
            <th>title</th>
            <th>price</th>
            <th>category</th>
        </tr>`
    data.forEach((element) => {
        cardsElement.innerHTML = ''
        tableElement.innerHTML += `
        <tr>
            <td>${element.id}</td>
            <td class="table-img"><img src="${element.image}"> </td>
            <td>${element.title}</td>
            <td>${element.price}</td>
            <td>${element.category}</td>
        </tr>
        `;
    });

        }
    });
}

fetchData();
