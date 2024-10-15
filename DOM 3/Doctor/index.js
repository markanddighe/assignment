let form = document.querySelector("form")

let tbody = document.querySelector("tbody")

form.addEventListener("submit", displayData)



let array = []
console.log(array);



function displayData(event) {

    event.preventDefault()


    let name = document.getElementById("name").value

    let docId = document.getElementById("docID").value

    let selc = document.getElementById("dept").value

    let expc = document.getElementById("exp").value

    let email = document.getElementById("email").value

    let mobile = document.getElementById("mbl").value


    // console.log(name);

    let data = {
        name, docId, selc, expc, email, mobile
    }


    array.push(data)

    getDetails(array)

}



function getDetails() {


    tbody.innerHTML = null         //details repeat show ko rokhne key ley

    let arrayMapData = array.map((el) => {

        // console.log(el);

        // console.log("hello");

        let row = document.createElement("tr")

        let col1 = document.createElement("td")
        let col2 = document.createElement("td")
        let col3 = document.createElement("td")
        let col4 = document.createElement("td")
        let col5 = document.createElement("td")
        let col6 = document.createElement("td")
        let col7 = document.createElement("td")
        let col8 = document.createElement("td")



        col1.innerText = el.name

        col2.innerText = el.docId

        col3.innerText = el.selc

        col4.innerText = el.expc

        // console.log(el.expc);

        if (el.expc > 5) {

            col7.innerText = "senior"
        }

        else if (el.expc >= 2 && el.expc <= 5) {
            col7.innerText = "Junior"

        }

        else if (el.expc <= 1) {
            col7.innerText = "Trainee"
        }


        col5.innerText = el.email

        col6.innerText = el.mobile


        col8.innerText = "Delete"
        col8.style.backgroundColor = "red"


        tbody.append(row)

        row.append(col1, col2, col3, col4, col5, col6, col7, col8)
    })



}


