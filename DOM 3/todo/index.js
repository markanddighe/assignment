let form = document.querySelector("form")

let tbody = document.querySelector("tbody")

form.addEventListener("submit", addDeatils)

let array =  JSON.parse(localStorage.getItem("Details")) || []

showDetails(array)

function addDeatils(event) {

    event.preventDefault()

    let task = document.getElementById("task").value

    let priority = document.getElementById("priority").value


    let data = {
        task, priority
    }

    array.push(data)

    localStorage.setItem("Details", JSON.stringify(array))

    showDetails(array)

}


function showDetails() {

    tbody.innerHTML = null

    let showMap = array.map((el) => {


        let row = document.createElement("tr")

        let col1 = document.createElement("td")

        col1.innerText = el.task

        let col2 = document.createElement("td")

        col2.innerText = el.priority

        let col3 = document.createElement("td")

        col3.innerText = "Delete"

        col3.style.backgroundColor = "red"

        tbody.append(row)

        row.append(col1, col2, col3)
    })
}