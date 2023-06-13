// Variables
const content = document.querySelector('.container')
const form = document.querySelector('#form')
const listTweets = document.querySelector('#list-tweets')
let tweets = []

//Events Listeners
eventListeners()
function eventListeners(){
    //OnSubmit
    form.addEventListener('submit', addTweet)

    //Onload
    document.addEventListener('DOMContentLoaded', ()=>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || []
        createList()
    })
}

//Functions
function addTweet(e){
    e.preventDefault()
   let tweet = document.querySelector('#tweet')

   if(tweet.value == '') {
    showErrorMsg('The tweet field cannot be empty')
    return;
   }

   const tweetObj = {
    id: Date.now(),
    tweet: tweet.value
   }

   tweets = [...tweets, tweetObj]
   form.reset()
   createList()

}

//Show error
function showErrorMsg(msg) {
    const errorMsg = document.createElement('p')
    errorMsg.textContent = msg
    errorMsg.classList.add('error')

    content.appendChild(errorMsg)

    setTimeout(()=> {
     errorMsg.remove()
    }, 10000)
}

//Create the list of tweets
function createList() {
    clearHTML()
    if(tweets.length > 0){
        tweets.forEach(tweet => {
            //Create the HTML

            //Create Button
            const btnDelete = document.createElement('a')
            btnDelete.classList.add('delete-tweet')
            btnDelete.innerText = 'X'
            btnDelete.onclick= ()=> {
                deleteTweet(tweet.id)
            }

            //Create List
            const li = document.createElement('li')
            li.innerText = tweet.tweet
            li.appendChild(btnDelete)
            listTweets.appendChild(li)

        })
    }

    syncStorage()
}

//Clean the list
function clearHTML() {
    while(listTweets.firstChild) {
        listTweets.removeChild(listTweets.firstChild)
    }
}

//Sync Storage
function syncStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

//Delete tweet
function deleteTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id)
    createList()
}