const translations = {
    pt: {
        title: "Guardião da Floresta",
        startDesc: "Responda 10 perguntas cruciais sobre nosso ecossistema, ganhe R$ 1.000 por acerto e teste se você é um verdadeiro protetor da natureza!",
        startBtn: "Iniciar Desafio",
        hudQuestion: "Pergunta",
        hudReward: "Acumulado",
        nextBtn: "Próxima Pergunta",
        hangmanTitle: "Desafio Extra: Forca (Rodada {r}/3)",
        hangmanDesc: "Descubra a palavra relacionada ao meio ambiente para avançar!",
        hangmanWin: "Parabéns! Você salvou a palavra!",
        hangmanLoss: "Fim de jogo! A palavra era {w}.",
        hangmanNext: "Próximo Desafio",
        hangmanFinal: "Ir para o Desafio de Memória",
        memoryTitle: "Desafio de Memória",
        memoryDesc: "Encontre os 18 pares para ganhar R$ 1.000 por acerto!",
        memoryNext: "Ver Resultado Final",
        resultTitle: "Desafio Concluído!",
        restartBtn: "Jogar Novamente",
        gameOverTitle: "Fim de Jogo!",
        messages: [
            "Precisa aprender mais sobre o ambiente. A natureza clama por ajuda, e o primeiro passo é o conhecimento. Não desista!",
            "Você sabe o básico sobre a mãe natureza! Bom trabalho, mas ainda há espaço para crescer e proteger nossas florestas.",
            "Você é quase uma árvore! Seu conhecimento ambiental é excelente. Continue espalhando essa semente!"
        ],
        questions: [
            { q: "Qual é a principal causa das queimadas nas florestas brasileiras?", options: ["Raios durante tempestades", "Ação humana, acidental ou criminosa", "Atrito entre folhas secas", "Aquecimento natural do solo"], correct: 1 },
            { q: "Qual atitude em rodovias pode iniciar um incêndio florestal?", options: ["Faróis altos ligados", "Jogar restos de frutas", "Arremessar bitucas de cigarro acesas", "Usar a buzina"], correct: 2 },
            { q: "Em que época do ano o risco de queimadas é maior no Brasil?", options: ["Períodos de seca (outono/inverno)", "Na primavera", "No verão", "O ano todo"], correct: 0 },
            { q: "O que acontece com os animais durante uma grande queimada?", options: ["Se adaptam e comem cinzas", "Perdem habitat, alimento e muitos morrem", "Migram e voltam no dia seguinte", "Apenas animais maiores sofrem"], correct: 1 },
            { q: "Número correto para ligar em caso de incêndio em mata:", options: ["190", "192", "193 (Bombeiros)", "104"], correct: 2 },
            { q: "Além de destruir a fauna/flora, qual outro problema as queimadas geram?", options: ["Aumento da água nos rios", "Diminuição da temperatura", "Fumaça tóxica e doenças respiratórias", "Excesso de oxigênio"], correct: 2 },
            { q: "O que é o material combustível conhecido como 'serrapilheira'?", options: ["Gasolina clandestina", "Folhas secas e restos vegetais no solo", "Árvore inflamável", "Ferramentas de corte"], correct: 1 },
            { q: "Relação entre as queimadas e as mudanças climáticas:", options: ["As queimadas resfriam a atmosfera", "Destroem a camada de ozônio", "Liberam CO2, intensificando o efeito estufa", "Não existe relação"], correct: 2 },
            { q: "Como a queima do pasto afeta o solo a longo prazo?", options: ["Perde nutrientes e fica empobrecido", "Torna o solo mais fértil", "Não afeta a química", "Torna o solo mais úmido"], correct: 0 },
            { q: "O fogo pode causar 'hidrofobia' no solo. O que significa?", options: ["Atrai água de lençóis profundos", "Raízes têm medo da água", "Cria camada repelente que impede absorção", "Purifica a água mais rápido"], correct: 2 }
        ],
        hangman: [
            ["FOGO", "MATA", "AGUA"], // Fácil
            ["FLORESTA", "CARBONO", "ARVORES", "FOLHAS"], // Médio
            ["AMAZONIA", "INCENDIO", "BIODIVERSIDADE"] // Difícil
        ]
    },
    en: {
        title: "Forest Guardian",
        startDesc: "Answer 10 crucial questions about our ecosystem, earn $1,000 per correct answer, and test if you are a true protector of nature!",
        startBtn: "Start Challenge",
        hudQuestion: "Question",
        hudReward: "Accumulated",
        nextBtn: "Next Question",
        hangmanTitle: "Extra Challenge: Hangman (Round {r}/3)",
        hangmanDesc: "Find the environmental word to proceed!",
        hangmanWin: "Congratulations! You saved the word!",
        hangmanLoss: "Game Over! The word was {w}.",
        hangmanNext: "Next Challenge",
        hangmanFinal: "Go to Memory Challenge",
        memoryTitle: "Memory Challenge",
        memoryDesc: "Find 18 pairs to earn $1,000 per match!",
        memoryNext: "See Final Result",
        resultTitle: "Challenge Completed!",
        restartBtn: "Play Again",
        gameOverTitle: "Game Over!",
        messages: [
            "You need to learn more about the environment. Nature cries for help, and knowledge is the first step. Don't give up!",
            "You know the basics about Mother Nature! Good job, but there's still room to grow and protect our forests.",
            "You're almost a tree! Your environmental knowledge is excellent. Keep spreading this seed!"
        ],
        questions: [
            { q: "What is the main cause of forest fires in Brazil?", options: ["Lightning during storms", "Human action, accidental or criminal", "Friction between dry leaves", "Natural soil heating"], correct: 1 },
            { q: "Which highway behavior can start a devastating forest fire?", options: ["High beams on", "Throwing fruit remains", "Throwing lit cigarette butts", "Using the horn"], correct: 2 },
            { q: "When is the fire risk significantly higher in Brazil?", options: ["Dry periods (fall/winter)", "In spring", "In summer", "The same all year"], correct: 0 },
            { q: "What happens to wildlife during a large wildfire?", options: ["They adapt and eat ashes", "They lose habitat, food, and many die", "They migrate and return the next day", "Only larger animals suffer"], correct: 1 },
            { q: "Correct number to call for a forest fire in Brazil?", options: ["190", "192", "193 (Firefighters)", "104"], correct: 2 },
            { q: "Besides destroying fauna/flora, what other problem do fires cause?", options: ["Increased river water", "Lower global temperature", "Toxic smoke and respiratory diseases", "Excess oxygen"], correct: 2 },
            { q: "What is the combustible material known as 'litter' (serrapilheira)?", options: ["Illegal gasoline", "Dry leaves and plant remains on soil", "Inflammable tree type", "Logging tools"], correct: 1 },
            { q: "Link between fires and global climate change:", options: ["Fires cool the atmosphere", "They destroy the ozone layer", "They release CO2, intensifying greenhouse effect", "No proven link"], correct: 2 },
            { q: "How does pasture burning affect the soil long-term?", options: ["Loses nutrients and becomes eroded", "Makes soil infinitely more fertile", "Doesn't affect chemistry", "Makes soil wetter"], correct: 0 },
            { q: "Fires can cause 'hydrophobia' in soil. What does it mean?", options: ["Attracts deep groundwater", "Roots develop fear of water", "Creates repellent layer that prevents absorption", "Purifies water faster"], correct: 2 }
        ],
        hangman: [
            ["FIRE", "TREE", "WOOD"], // Easy
            ["FOREST", "OXYGEN", "PLANET", "NATURE"], // Medium
            ["AMAZON", "ECOSYSTEM", "BIODIVERSITY"] // Hard
        ]
    }
};

let lang = 'pt';
let currentQuestion = 0;
let score = 0;
let rewardFromMatch = 0;
let answered = false;
let currentHangmanRound = 0;
const totalHangmanRounds = 3;
let selectedWord = "";
let guessedLetters = [];
let mistakes = 0;
const maxMistakes = 6;

// Jogo da Memória
let memoryCards = [];
let flippedCards = [];
let matchedPairs = 0;
const totalPairs = 9; // 9 icons, 2 of each = 9 pairs
const memoryIcons = ["🐒", "🦜", "🌳", "🔥", "🍌", "🌿", "🐛", "🌞", "🍄"];

// Configurar Background Premium
const bgElement = document.getElementById('background');
bgElement.style.backgroundImage = "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')";

function changeLanguage() {
    lang = document.getElementById('lang-select').value;
    updateUIStexts();
}

function updateUIStexts() {
    const t = translations[lang];
    document.querySelector('h1').innerText = t.title;
    document.getElementById('start-description').innerText = t.startDesc;
    document.getElementById('start-btn').innerText = t.startBtn;
}

const bgMusic = document.getElementById('bg-music');
let musicPlaying = false;

function toggleMusic() {
    if (musicPlaying) {
        bgMusic.pause();
        document.getElementById('music-icon').innerText = "🔇";
    } else {
        bgMusic.play();
        document.getElementById('music-icon').innerText = "🎵";
    }
    musicPlaying = !musicPlaying;
}

function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';

    // Iniciar Música (Requisito de Interação do Navegador)
    if (!musicPlaying) {
        bgMusic.play().then(() => {
            musicPlaying = true;
            document.getElementById('music-icon').innerText = "🎵";
        }).catch(e => console.log("Erro ao tocar música: ", e));
    }

    showQuestion();
}

function showQuestion() {
    answered = false;
    const t = translations[lang];
    const qData = t.questions[currentQuestion];

    document.getElementById('question-count').innerText = `${t.hudQuestion}: ${currentQuestion + 1}/10`;
    document.getElementById('reward-value').innerText = `R$ ${(score * 1000) + rewardFromMatch}`;
    document.getElementById('question-text').innerText = qData.q;

    const optionsGrid = document.getElementById('options-grid');
    optionsGrid.innerHTML = '';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('next-btn').innerText = t.nextBtn;

    qData.options.forEach((opt, index) => {
        const button = document.createElement('div');
        button.className = 'option';
        button.innerText = opt;
        button.onclick = () => selectOption(index, button);
        optionsGrid.appendChild(button);
    });

    const container = document.querySelector('.container');
    container.style.animation = 'none';
    container.offsetHeight;
    container.style.animation = 'fadeIn 0.5s ease-out';
}

function selectOption(index, element) {
    if (answered) return;
    answered = true;
    const t = translations[lang];
    const correct = t.questions[currentQuestion].correct;

    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');

    if (index === correct) {
        element.classList.add('correct');
        score++;
        document.getElementById('reward-value').innerText = `R$ ${(score * 1000) + rewardFromMatch}`;
    } else {
        element.classList.add('wrong');
        document.querySelectorAll('.option')[correct].classList.add('correct');
    }

    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < translations[lang].questions.length) {
        showQuestion();
    } else {
        currentHangmanRound = 0;
        startHangman();
    }
}

// --- JOGO DA FORCA ---
function startHangman() {
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('hangman-screen').style.display = 'block';

    const t = translations[lang];
    const wordList = t.hangman[currentHangmanRound];
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    guessedLetters = [];
    mistakes = 0;

    document.querySelector('#hangman-screen h1').innerText = t.hangmanTitle.replace('{r}', currentHangmanRound + 1);
    document.querySelector('#hangman-screen p').innerText = t.hangmanDesc;

    updateHangmanDisplay();
    createKeyboard();

    document.querySelectorAll('.hangman-part').forEach(part => part.style.display = 'none');
    document.getElementById('hangman-msg').innerText = "";
    document.getElementById('hangman-next-btn').style.display = 'none';
}

function updateHangmanDisplay() {
    const display = selectedWord.split('').map(letter =>
        guessedLetters.includes(letter) ? letter : "_"
    ).join(' ');

    document.getElementById('word-display').innerText = display;

    if (!display.includes("_")) {
        endHangman(true);
    }
}

function createKeyboard() {
    const keyboard = document.getElementById('keyboard');
    keyboard.innerHTML = '';
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    letters.split('').forEach(letter => {
        const key = document.createElement('div');
        key.className = 'key';
        key.innerText = letter;
        key.onclick = () => handleGuess(letter, key);
        keyboard.appendChild(key);
    });
}

function handleGuess(letter, element) {
    if (guessedLetters.includes(letter) || mistakes >= maxMistakes) return;

    guessedLetters.push(letter);
    element.classList.add('disabled');

    if (selectedWord.includes(letter)) {
        element.classList.add('correct-key');
        updateHangmanDisplay();
    } else {
        element.classList.add('wrong-key');
        document.getElementById(`part-${mistakes}`).style.display = 'block';
        mistakes++;
        if (mistakes >= maxMistakes) {
            endHangman(false);
        }
    }
}

function endHangman(won) {
    const t = translations[lang];
    const msg = document.getElementById('hangman-msg');
    const nextBtn = document.getElementById('hangman-next-btn');

    if (won) {
        msg.innerText = t.hangmanWin;
        msg.style.color = "var(--accent-color)";
    } else {
        msg.innerText = t.hangmanLoss.replace('{w}', selectedWord);
        msg.style.color = "var(--error-color)";
        document.getElementById('word-display').innerText = selectedWord.split('').join(' ');
    }

    document.querySelectorAll('.key').forEach(key => key.classList.add('disabled'));
    nextBtn.style.display = 'block';

    if (currentHangmanRound < totalHangmanRounds - 1) {
        nextBtn.innerText = t.hangmanNext;
        nextBtn.onclick = () => {
            currentHangmanRound++;
            startHangman();
        };
    } else {
        nextBtn.innerText = t.hangmanFinal;
        nextBtn.onclick = startMemoryGame;
    }

    if (!won) {
        // If they lost the hangman, we show the "Game Over" screen after a short delay
        setTimeout(() => showEndScreen(true), 2000);
    }
}

// --- JOGO DA MEMÓRIA ---
function startMemoryGame() {
    document.getElementById('hangman-screen').style.display = 'none';
    document.getElementById('memory-screen').style.display = 'block';

    const t = translations[lang];
    document.getElementById('memory-title').innerText = t.memoryTitle;
    document.getElementById('memory-desc').innerText = t.memoryDesc;
    document.getElementById('memory-next-btn').innerText = t.memoryNext;
    document.getElementById('memory-next-btn').onclick = showEndScreen;
    document.getElementById('memory-next-btn').style.display = 'none';

    matchedPairs = 0;
    flippedCards = [];

    // Criar os 18 pares (36 cartas) usando os 9 ícones (2 de cada ícone)
    memoryCards = [];
    memoryIcons.forEach(icon => {
        memoryCards.push(icon, icon); // Each icon appears twice for a pair
    });
    // Now we have 18 cards (9 pairs). We need 18 pairs, so 36 cards total.
    // Let's duplicate the set of 9 pairs to get 18 pairs (36 cards)
    const initialPairs = [];
    memoryIcons.forEach(icon => {
        initialPairs.push(icon, icon);
    });
    memoryCards = [...initialPairs, ...initialPairs]; // 18 pairs, 36 cards

    // Embaralhar
    memoryCards.sort(() => Math.random() - 0.5);

    const grid = document.getElementById('memory-grid');
    grid.innerHTML = '';

    memoryCards.forEach((icon, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">?</div>
                <div class="card-back">${icon}</div>
            </div>
        `;
        card.onclick = () => flipCard(card, icon);
        grid.appendChild(card);
    });
}

function flipCard(card, icon) {
    if (flippedCards.length < 2 && !card.classList.contains('flipped') && !card.classList.contains('matched')) {
        card.classList.add('flipped');
        flippedCards.push({ card, icon });

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 800);
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.icon === card2.icon) {
        card1.card.classList.add('matched');
        card2.card.classList.add('matched');
        matchedPairs++;
        rewardFromMatch += 1000;
        // Update reward display if it's visible (not in this context, but good practice)
        // document.getElementById('reward-value').innerText = `R$ ${(score * 1000) + rewardFromMatch}`;
    } else {
        card1.card.classList.remove('flipped');
        card2.card.classList.remove('flipped');
    }

    flippedCards = [];

    if (matchedPairs === memoryCards.length / 2) { // All pairs matched
        document.getElementById('memory-next-btn').style.display = 'block';
    }
}

function showEndScreen(isGameOver = false) {
    const t = translations[lang];
    document.getElementById('hangman-screen').style.display = 'none';
    document.getElementById('memory-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';

    const titleElement = document.querySelector('#result-screen h1');
    titleElement.innerText = isGameOver ? t.gameOverTitle : t.resultTitle;

    if (isGameOver) {
        titleElement.style.color = "var(--error-color)";
    } else {
        titleElement.style.color = "var(--text-white)";
    }

    document.querySelector('#result-screen .btn-primary').innerText = t.restartBtn;

    const finalValue = (score * 1000) + rewardFromMatch;
    document.getElementById('final-reward').innerText = `R$ ${finalValue}`;

    let msgIndex = score <= 4 ? 0 : (score <= 7 ? 1 : 2);
    document.getElementById('result-message').innerText = t.messages[msgIndex];
}

function restartGame() {
    currentQuestion = 0;
    score = 0;
    rewardFromMatch = 0;
    currentHangmanRound = 0;
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
}
