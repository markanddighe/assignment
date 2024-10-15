let form = document.querySelector("form")

let tbody = document.querySelector("tbody")


form.addEventListener("submit", showData)

let array = []

function showData(event) {

    event.preventDefault()

    // console.log("hello");

    let name = document.getElementById("name").value

    let emId = document.getElementById("employeeID").value

    let depart = document.getElementById("department").value

    let exp = document.getElementById("exp").value

    let email = document.getElementById("email").value

    let mobile = document.getElementById("mbl").value

    // console.log(name);

    let data = {
        name, emId, depart, exp, email, mobile
    }

    array.push(data)

    getDetails()

}



function getDetails() {

    tbody.innerHTML = null

    let arrayMapData = array.map((el) => {

        let row = document.createElement("tr")

        let col1 = document.createElement("td")
        col1.innerText = el.name

        let col2 = document.createElement("td")
        col2.innerText = el.emId

        let col3 = document.createElement("td")
        col3.innerText = el.depart

        let col4 = document.createElement("td")
        col4.innerText = el.exp

        let col5 = document.createElement("td")
        col5.innerText = el.email

        let col6 = document.createElement("td")
        col6.innerText = el.mobile

        let col7 = document.createElement("td")

        if (el.exp > 5) {
            col7.innerText = "Senior"
        }
        else if (el.exp >= 2 && el.exp <= 5) {
            col7.innerText = "Junior"
        }

        else if (el.exp <= 1) {
            col7.innerText = "Fresher"

        }

        let col8 = document.createElement("td")

        col8.innerText = "Delete"

        col8.style.backgroundColor = "red"


        tbody.append(row)

        row.append(col1, col2, col3, col4, col5, col6, col7, col8)





    })

}