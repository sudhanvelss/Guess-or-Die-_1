const Keyboard_div = document.querySelector(".Keyboard")
const merchant_body = document.querySelector(".merchant-box img")
const Guess_text = document.querySelector(".Guess-text b")
const word_display = document.querySelector(".word-display")
let current_word, correctLetters = "", wrong_Guess_Count = 0;
const max_guesses = 6;
var RandomWords = [
    {
        Word: "umbrella",
        Hint: "It opens up to shield you from rain or sun."
    },
    {
        Word: "bicycle",
        Hint: "It has two wheels and you pedal to move forward."
    },
    {
        Word: "mirror",
        Hint: "It reflects your image, but it's not a person."
    },
    {
        Word: "key",
        Hint: "It unlocks doors but isn't made of wood or metal."
    },
    {
        Word: "book",
        Hint: "It's full of pages, stories, and knowledge."
    },
    {
        Word: "clock",
        Hint: "It tells time with hands that go 'round and 'round."
    },
    {
        Word: "camera",
        Hint: "It captures images with the click of a button."
    },
    {
        Word: "shoes",
        Hint: "You wear them on your feet to walk with ease."
    },
    {
        Word: "glasses",
        Hint: "They help you see clearly, perched on your nose."
    },
    {
        Word: "guitar",
        Hint: "Strings and frets, it makes music when strummed."
    },
    {
        Word: "basket",
        Hint: "It holds your things and has a handle on top."
    },
    {
        Word: "television",
        Hint: "It displays shows and news with moving images."
    },
    {
        Word: "pen",
        Hint: "It writes in ink, not with a pencil's lead."
    },
    {
        Word: "wallet",
        Hint: "It holds your money, cards, and ID."
    },
    {
        Word: "broom",
        Hint: "With bristles and a handle, it sweeps things away."
    },
    {
        Word: "microwave",
        Hint: "It heats your food with waves of energy."
    },
    {
        Word: "computer",
        Hint: "It processes data, with a keyboard and screen."
    },
    {
        Word: "hammer",
        Hint: "It pounds nails, strong and keen."
    },
    {
        Word: "globe",
        Hint: "It's a small Earth that you can hold and spin."
    },
    {
        Word: "puzzle",
        Hint: "Pieces fit together to create a picture or scene."
    }
];

console.log("ch", correctLetters )

var Random_words = () => {
    // to select the random words in the given list we making this function.
    let { word, hint } =  RandomWords[Math.floor(Math.random() * RandomWords.length)];
    localStorage.setItem('word', word)
    current_word = word;
    console.log( word);
    document.querySelector(".hint-text b").innerHTML = hint;
    word_display.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join(""); 

}
const initGame = (button, letterclicked) => {
    if(current_word.includes(letterclicked)){
        [...current_word].forEach((letter, index) =>{
            if(letter === letterclicked){
                correctLetters += letter;
                word_display.querySelectorAll("li")[index].innerHTML = letter;
            }
        })
    } else{
        wrong_Guess_Count++;
        merchant_body.src = `./../images/hangman-${wrong_Guess_Count}.svg`;
    }
    if (correctLetters.length === current_word.length){
    
        location.reload();
    }else if (correctLetters !== current_word && wrong_Guess_Count >= max_guesses){
        window.location.href = "gameover.html"
    }

    button.disabled = true;
    Guess_text.innerHTML = `${wrong_Guess_Count} / ${max_guesses}`; 
}

// just creating shortcut for keyboard in html to js. 
for(let i = 97; i <= 122; i++){
    const button = document.createElement("button")
    button.innerHTML = String.fromCharCode(i);
    Keyboard_div.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

Random_words(); 

