// Variables
const form = document.querySelector('#form')
const listTweets = document.querySelector('#list-tweets')
let tweets = []

//Events Listeners
eventListeners()
function eventListeners(){
    form.addEventListener('submit', addTweet)
}

//Functions
function addTweet(e){
    e.preventDefault()
}