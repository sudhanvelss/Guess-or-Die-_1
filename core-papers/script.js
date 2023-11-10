const Keyboard_div = document.querySelector(".Keyboard")
const merchant_body = document.querySelector(".merchant-box img")
const Guess_text = document.querySelector(".Guess-text b")
const word_display = document.querySelector(".word-display")
let current_word, correctLetters = "", wrong_Guess_Count = 0;
const max_guesses = 6;
var RandomWords = [
    {
        Word: "quicksilver",
        Hint: "I'm the liquid metal, used in thermometers of old."
    },
    {
        Word: "xylophone",
        Hint: "I'm a musical instrument, with wooden keys in a row."
    },
    {
        Word: "silhouette",
        Hint: "I'm a shadowy outline, often used in art and design."
    },
    {
        Word: "cryptography",
        Hint: "I'm the science of secret codes and encrypted signs."
    },
    {
        Word: "phosphorescent",
        Hint: "I glow in the dark, emitting light with persistence."
    },
    {
        Word: "paradoxical",
        Hint: "I'm contradictory, confusing, and somewhat magical."
    },
    {
        Word: "holographic",
        Hint: "I produce 3D images, with a laser's graphic."
    },
    {
        Word: "serendipity",
        Hint: "I'm a fortunate discovery, a happy find indeed."
    },
    {
        Word: "mnemonic",
        Hint: "I'm a memory aid, helping you to recollect."
    },
    {
        Word: "synchronicity",
        Hint: "I'm meaningful coincidences, in perfect harmony."
    },
    {
        Word: "metamorphosis",
        Hint: "I'm a transformation, like a caterpillar's process."
    },
    {
        Word: "perpendicular",
        Hint: "I'm at right angles, creating a cross section."
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

