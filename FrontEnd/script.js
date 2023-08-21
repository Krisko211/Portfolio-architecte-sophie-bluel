const allWorks = new Set()
// transforme unelement en array
// [...allworks]
const allCats = new Set()

const gallery = document.querySelector(".gallery")

async function init(){
    const works = await getDatabaseInfo("works")
    for (const work of works) {
        allWorks.add(work)
    }
    displayWorks()
}
init()

async function getDatabaseInfo(type){
    const response = await fetch(`http://localhost:5678/api/${type}`)
    if (response.ok) {
        return response.json()
    } else {
        console.error(response)
    }
}

function displayWorks(filter = "0"){
    console.log(allWorks)
}
