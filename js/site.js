function getWord() {
    let word = document.getElementById("inputWord").value;
    
    word = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    if (word.length < 2) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a word with at least 2 letters.'
        })
        return;
    }

    let revWord = flipWord(word);

    displayResults(word, revWord);
}

function flipWord(word) {
    let newWord = '';
    for (let i = word.length - 1; i >= 0; i--){
        newWord += word[i];
    }
    return newWord;
}

function displayResults(word, flipped) {
    let result = document.getElementById('reversedWord');
    let resultH = document.getElementById('resultH');
    result.innerHTML = '';

    result.innerHTML += `<u>${word}</u> and the word reversed is <u>${flipped}</u>`;

    if (word === flipped) {
        resultH.innerHTML = `<h3>${word}</h3><h4 class="text-success">Palindrome!</h4>`;
    } else {
        resultH.innerHTML = `<h3>${word}</h3><h4 class="text-danger">Not a Palindrome</h4>`;
    }
}