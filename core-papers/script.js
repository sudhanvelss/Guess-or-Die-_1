const Keyboard_div = document.querySelector(".Keyboard");
const merchant_body = document.querySelector(".merchant-box img");
const Guess_text = document.querySelector(".Guess-text b");
const word_display = document.querySelector(".word-display");
let current_word, correctLetters = "", wrong_Guess_Count = 0;
const max_guesses = 6;
var RandomWords = [
    {
        word: "quicksilver",
        Hint: "I'm the liquid metal, used in thermometers of old."
    },
    {
        word: "xylophone",
        Hint: "I'm a musical instrument, with wooden keys in a row."
    },
    {
        word: "silhouette",
        Hint: "I'm a shadowy outline, often used in art and design."
    },
    {
        word: "cryptography",
        Hint: "I'm the science of secret codes and encrypted signs."
    },
    {
        word: "phosphorescent",
        Hint: "I glow in the dark, emitting light with persistence."
    },
    {
        word: "paradoxical",
        Hint: "I'm contradictory, confusing, and somewhat magical."
    },
    {
        word: "holographic",
        Hint: "I produce 3D images, with a laser's graphic."
    },
    {
        word: "serendipity",
        Hint: "I'm a fortunate discovery, a happy find indeed."
    },
    {
        word: "mnemonic",
        Hint: "I'm a memory aid, helping you to recollect."
    },
    {
        word: "synchronicity",
        Hint: "I'm meaningful coincidences, in perfect harmony."
    },
    {
        word: "metamorphosis",
        Hint: "I'm a transformation, like a caterpillar's process."
    },
    {
        word: "perpendicular",
        Hint: "I'm at right angles, creating a cross section."
    }
];

console.log("ch", correctLetters)

var Random_words = () => {
    let { word, Hint } =  RandomWords[Math.floor(Math.random() * RandomWords.length)];
    localStorage.setItem('word', word);
    current_word = word;
    console.log(word);
    correctLetters = ""; 
    wrong_Guess_Count = 0;
    document.querySelector(".hint-text b").innerHTML = Hint;
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
        window.location.reload();
    }else if (correctLetters !== current_word && wrong_Guess_Count >= max_guesses){
        window.location.href = "gameover.html"
    }

    button.disabled = true;
    Guess_text.innerHTML = `${wrong_Guess_Count} / ${max_guesses}`; 
}

for(let i = 97; i <= 122; i++){
    const button = document.createElement("button")
    button.innerHTML = String.fromCharCode(i);
    Keyboard_div.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

Random_words(); 