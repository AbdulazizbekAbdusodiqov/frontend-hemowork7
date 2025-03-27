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
            <th>category</th>
            <th>price</th>
        </tr>`
    data.forEach((element) => {
        tableElement.innerHTML += `
        <tr>
            <td>${element.id}</td>
            <td class="table-img"><img src="${element.image}"> </td>
            <td>${element.title}</td>
            <td>${element.category}</td>
            <td>${element.price} $</td>
        </tr>
        `;
    });

    selectElement.addEventListener("change", () => {
        let selectedValue = selectElement.value; // `this.value` o'rniga `selectElement.value`
        if (selectedValue == "card") {
            tableElement.innerHTML = ''
            cardsElement.innerHTML = ''
            cardsElement.classList.remove("version2")

            data.forEach((element) => {
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
        } else if (selectedValue == "table") {
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

        } else {
            tableElement.innerHTML = ''
            cardsElement.innerHTML = ''
            cardsElement.classList.add("version2")
            data.forEach((element) => {
                cardsElement.innerHTML += `
                    <div class="card">
                        <img src="${element.image}">
                        <div class="card__right">
                            <h3>${element.title}</h3>
                            <div class="card-v2__footer">
                                <p class="card-footer__category">
                                    ${element.category}
                                </p>
                                <p class="card-footer__price">
                                    ${element.price}$
                                </p>
                            </div>
                        </div>
                    </div>
                `
            })

        }
    });
}

fetchData();
