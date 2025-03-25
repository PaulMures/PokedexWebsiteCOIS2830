const poke_container = document.getElementById('poke-container');
const searchInput = document.getElementById('search');
const filterSelect = document.getElementById('filter');
const pokemon_count = 150;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};

const main_types = Object.keys(colors);
let allPokemon = [];

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
    updateDisplay(); // Show all Pokémon initially
};

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    allPokemon.push(data);
};

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');

    const poke_types = pokemon.types.map(type => type.type.name);
    const type = main_types.find(type => poke_types.includes(type));
    const color = colors[type];

    pokemonEl.style.backgroundColor = color;

    pokemonEl.innerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `;

    return pokemonEl;
};

const updateDisplay = () => {
    poke_container.innerHTML = "";

    const searchTerm = searchInput.value.toLowerCase();
    const selectedType = filterSelect.value;

    const filteredPokemon = allPokemon.filter(pokemon => {
        const nameMatch = pokemon.name.includes(searchTerm);
        const typeMatch = selectedType === "all" || pokemon.types.some(t => t.type.name === selectedType);
        return nameMatch && typeMatch;
    });

    filteredPokemon.forEach(pokemon => {
        poke_container.appendChild(createPokemonCard(pokemon));
    });
};

//Quiz Variables
var myQuestions = [
	{
		question: "What is pokemon #049?",
		answers: {
			a: 'Victreebel',
			b: 'Venomoth',
			c: 'Voltorb'
		},
		correctAnswer: 'b'
	},
	{
		question: "Which of these is a ground type?",
		answers: {
			a: 'Omanyte',
			b: 'Grimer',
			c: 'Sandshrew'
		},
		correctAnswer: 'c'
	},
	{
		question: "Which of these comes from a fossil?",
		answers: {
			a: 'Kabuto',
			b: 'Kabutops',
			c: 'Golem'
		},
		correctAnswer: 'a'
	},
	{
		question: "What is the 151st Pokemon?",
		answers: {
			a: 'Pikachu',
			b: 'MewTwo',
			c: 'Mew'
		},
		correctAnswer: 'c'
	}
]; //Questions

var quizContainer = document.getElementById('Quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

//Confetti Code
const canvas = document.querySelector('#confetti') //canvas
const jsConfetti = new JSConfetti()

//Quiz function
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){

        //Variables
        var output = [];
        var answers;
    
        //For each question
        for(var i=0; i<questions.length; i++){
            
            answers = [];
    
            //For each letter
            for(letter in questions[i].answers){
    
                //Push answers
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        quizContainer.innerHTML = output.join('');
    }

	function showResults(questions, quizContainer, resultsContainer){
	
        //Collect Answer Containers
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        //Store answers
        var userAnswer = '';
        var numCorrect = 0;
        var faceScore = '';
        
        //For each question
        for(var i=0; i<questions.length; i++){
    
            //Find answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            //If Correct
            if(userAnswer===questions[i].correctAnswer){

                //Counter
                numCorrect++;
                
                //Colour green
                answerContainers[i].style.color = 'lightgreen';
            }
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        //Face reaction
        if (numCorrect < 2){
            faceScore = ' :('
        }
        else if (numCorrect < 4){
            faceScore = ' :)'
        }
        else if (numCorrect == 4){
            faceScore = ' :D'
        }

        //Confetti
        if (numCorrect >= 2){
            jsConfetti.addConfetti({
                confettiRadius: 6,
                confettiNumber: 500,
                confettiColors: ['#0000FF', '#FF0000', '#FFFF00', '#00FF00', '#800080', '#FFC0CB',]
            })
        }
    
        //Show total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + faceScore;
    }

	//Show Questions
	showQuestions(questions, quizContainer);

	//When click, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

// Event Listeners
searchInput.addEventListener("input", updateDisplay);
filterSelect.addEventListener("change", updateDisplay);

fetchPokemons();
