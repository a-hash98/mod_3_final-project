url = 'https://raw.githubusercontent.com/words/an-array-of-english-words/master/words.json'
let words = []

function getWords(){
    fetch(url)
    .then(resp => resp.json())
    .then(data => words = data.filter(w => w.length >= 4))
}


function init(){
    getWords()
}

init()


