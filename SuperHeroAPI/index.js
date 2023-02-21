
const superHero_Token = '10158674807952587'
const base_URL = `https://superheroapi.com/api.php/${superHero_Token}`
let button = document.getElementById("random-hero")
const heroImgDiv = document.getElementById("heroImg")
const searchBtn = document.getElementById("searchHero")
const search = document.getElementById("search")

// let body = document.querySelector("body").innerHTML

const getSuperhero = (id) => {
    // let rand_id = id[randomNum]
    fetch(`${base_URL}/${id}`)
    .then(response => response.json()) // fetch returns a response(promise)in a json obj
    .then(json => {
        const superHero = json
        showHeroStats(superHero)
        
          })
}



const showHeroStats = (char) => {
    const name = `<h1>${char.name}</h1>` 

    const img = `<img src ="${char.image.url}"width=480 height=600/>`

        const stats = Object.keys(char.powerstats).map(stat => {
        console.log(stat)
       return `<h4>${stat.toUpperCase()}: ${char.powerstats[stat].toUpperCase()}</h4>`
    }).join('')
   
    heroImgDiv.innerHTML = `${name}${img}${stats}`
    
   }
   

const getSearchSuperhero = (name) => {   //re factored function now re-usable (can be used in other functions)
    fetch(`${base_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        
        const hero = json.results[0]
        showHeroStats(hero)
        
    })
}



function randomHero() {
    const rand_hero = Math.floor(Math.random() * 732)
     return rand_hero
}

button.addEventListener("click",function(){
    getSuperhero(randomHero())
    

})

searchBtn.addEventListener("click", function(){
    getSearchSuperhero(search.value)
})

