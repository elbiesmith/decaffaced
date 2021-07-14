let testWord = '';
function getWord() {
    let word = document.getElementById("inputWord").value;
    testWord = word;
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

    displayResults(testWord, word, revWord);
}

function flipWord(word) {
    let newWord = '';
    for (let i = word.length - 1; i >= 0; i--){
        newWord += word[i];
    }
    return newWord;
}

function displayResults(testWord, word, flipped) {
    let result = document.getElementById('reversedWord');
    let resultH = document.getElementById('resultH');
    let resultBox = document.getElementById('resultBox');
    result.innerHTML = '';

    result.innerHTML += `<u>${word}</u> and the word reversed is <u>${flipped}</u>`;

    if (word === flipped) {
        resultH.innerHTML = `<h4>${testWord}</h4><h3 class="text-success">Palindrome!</h3>`;
        resultBox.classList.remove('visually-hidden');
    } else {
        resultH.innerHTML = `<h4>${testWord}</h4><h3 class="text-danger">Not a Palindrome</h3>`;
        resultBox.classList.remove('visually-hidden');
    }
}