// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const liked = document.getElementsByClassName('like-glyph')
for (let heart of liked) {
  heart.addEventListener("click", handleLike);
}

  function handleLike(event) {
    mimicServerCall()
      .then(() => {
        event.target.classList.toggle('activated-heart')
        if (event.target.innerText === EMPTY_HEART) {
          event.target.innerText = FULL_HEART
        } else {
          event.target.innerText = EMPTY_HEART
        }
      })
      .catch(() => {
        const errMsg = document.getElementById('modal')
        errMsg.className = ""
        setTimeout(() => {errMsg.className = 'hidden'}, 3000)
      })
  }

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}