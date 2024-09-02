// Define an array to hold all 50 questions
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correct: 0,
  },
  { question: "What is 2 + 2?", options: ["4", "3", "5", "6"], correct: 0 },
  {
    question: "What color do you get by mixing red and white?",
    options: ["Pink", "Orange", "Purple", "Green"],
    correct: 0,
  },
  {
    question: "What planet is known as the Red Planet?",
    options: ["Mars", "Earth", "Jupiter", "Saturn"],
    correct: 0,
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
    correct: 0,
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
    correct: 0,
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    correct: 0,
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Da Vinci", "Van Gogh", "Picasso", "Monet"],
    correct: 0,
  },
  {
    question: "What is the speed of light?",
    options: ["299,792 km/s", "150,000 km/s", "30,000 km/s", "1,000 km/s"],
    correct: 0,
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Neptune", "Earth"],
    correct: 0,
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Diamond", "Gold", "Iron", "Platinum"],
    correct: 0,
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "Nauru", "San Marino"],
    correct: 0,
  },
  {
    question: "Who was the first man to walk on the moon?",
    options: [
      "Neil Armstrong",
      "Buzz Aldrin",
      "Yuri Gagarin",
      "Michael Collins",
    ],
    correct: 0,
  },
  {
    question: "What gas do plants use for photosynthesis?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    correct: 0,
  },
  {
    question: "Which element has the chemical symbol 'Au'?",
    options: ["Gold", "Silver", "Iron", "Lead"],
    correct: 0,
  },
  {
    question: "What is the longest river in the world?",
    options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    correct: 0,
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1912", "1905", "1898", "1923"],
    correct: 0,
  },
  {
    question: "Which planet is closest to the sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    correct: 0,
  },
  {
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Gobi", "Kalahari", "Antarctic"],
    correct: 0,
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Avocado", "Tomato", "Pepper", "Onion"],
    correct: 0,
  },
  {
    question: "Who is known as the 'Father of Computers'?",
    options: ["Charles Babbage", "Alan Turing", "Ada Lovelace", "Steve Jobs"],
    correct: 0,
  },
  {
    question: "What is the smallest unit of life?",
    options: ["Cell", "Molecule", "Atom", "Organism"],
    correct: 0,
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["Japan", "China", "Thailand", "South Korea"],
    correct: 0,
  },
  {
    question: "What is the main language spoken in Brazil?",
    options: ["Portuguese", "Spanish", "French", "English"],
    correct: 0,
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "J.D. Salinger", "Ernest Hemingway"],
    correct: 0,
  },
  {
    question: "What is the largest animal on Earth?",
    options: ["Blue Whale", "Elephant", "Giraffe", "Shark"],
    correct: 0,
  },
  {
    question: "What is the capital city of Australia?",
    options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
    correct: 0,
  },
  {
    question: "Which vitamin is known as the sunshine vitamin?",
    options: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin B12"],
    correct: 0,
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Won", "Ringgit", "Peso"],
    correct: 0,
  },
  {
    question: "What is the hardest part of the human body?",
    options: ["Tooth enamel", "Bone", "Nail", "Skin"],
    correct: 0,
  },
  {
    question: "Who discovered penicillin?",
    options: [
      "Alexander Fleming",
      "Marie Curie",
      "Louis Pasteur",
      "Joseph Lister",
    ],
    correct: 0,
  },
  {
    question: "What is the capital of Canada?",
    options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
    correct: 0,
  },
  {
    question: "In which city would you find the Colosseum?",
    options: ["Rome", "Athens", "Paris", "London"],
    correct: 0,
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    correct: 0,
  },
  {
    question: "Which is the largest island in the world?",
    options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
    correct: 0,
  },
  {
    question: "What is the freezing point of water in Celsius?",
    options: ["0°C", "32°C", "100°C", "10°C"],
    correct: 0,
  },
  {
    question: "What planet is known as the 'Evening Star'?",
    options: ["Venus", "Mercury", "Mars", "Jupiter"],
    correct: 0,
  },
  {
    question: "What is the most spoken language in the world?",
    options: ["Mandarin", "English", "Spanish", "Hindi"],
    correct: 0,
  },
  {
    question: "Which instrument has 88 keys?",
    options: ["Piano", "Guitar", "Violin", "Drum"],
    correct: 0,
  },
  {
    question: "Who painted 'The Starry Night'?",
    options: [
      "Vincent van Gogh",
      "Claude Monet",
      "Pablo Picasso",
      "Salvador Dalí",
    ],
    correct: 0,
  },
  {
    question: "What is the chemical symbol for iron?",
    options: ["Fe", "Ir", "I", "In"],
    correct: 0,
  },
  {
    question: "Which planet is known as the 'Morning Star'?",
    options: ["Venus", "Saturn", "Neptune", "Uranus"],
    correct: 0,
  },
  {
    question: "What is the capital of Italy?",
    options: ["Rome", "Florence", "Milan", "Venice"],
    correct: 0,
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Blue Whale", "African Elephant", "Giraffe", "Polar Bear"],
    correct: 0,
  },
  {
    question: "Which country is known for the Eiffel Tower?",
    options: ["France", "Italy", "Germany", "Spain"],
    correct: 0,
  },
  {
    question: "What is the chemical symbol for sodium?",
    options: ["Na", "N", "NaCl", "K"],
    correct: 0,
  },
  {
    question:
      "Which bird is known for its colorful plumage and ability to mimic human speech?",
    options: ["Parrot", "Sparrow", "Eagle", "Crow"],
    correct: 0,
  },
  {
    question: "Who is the author of 'The Great Gatsby'?",
    options: [
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "George Orwell",
      "Mark Twain",
    ],
    correct: 0,
  },
  {
    question:
      "What is the name of the process by which plants make their own food?",
    options: ["Photosynthesis", "Respiration", "Fermentation", "Digestion"],
    correct: 0,
  },
  {
    question: "What is the largest city by population in the world?",
    options: ["Tokyo", "New York", "Shanghai", "London"],
    correct: 0,
  },
  {
    question: "Which ocean is the smallest?",
    options: [
      "Arctic Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
    ],
    correct: 0,
  },
  {
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    correct: 0,
  },
  {
    question: "What is the boiling point of water in Fahrenheit?",
    options: ["212°F", "100°F", "0°F", "32°F"],
    correct: 0,
  },
  {
    question: "What is the main ingredient in a traditional Italian pizza?",
    options: ["Tomato", "Cheese", "Pepperoni", "Olive Oil"],
    correct: 0,
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Galileo Galilei",
      "Niels Bohr",
    ],
    correct: 0,
  },
  {
    question: "What is the capital of the United States?",
    options: ["Washington, D.C.", "New York City", "Los Angeles", "Chicago"],
    correct: 0,
  },
  {
    question: "Who is known as the 'Father of the Nation' in India?",
    options: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Subhas Chandra Bose",
      "Bhagat Singh",
    ],
    correct: 0,
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Skin", "Liver", "Heart", "Lungs"],
    correct: 0,
  },
  {
    question: "Which planet is known as the 'Ringed Planet'?",
    options: ["Saturn", "Uranus", "Neptune", "Jupiter"],
    correct: 0,
  },
  {
    question: "What is the name of the galaxy that contains our solar system?",
    options: ["Milky Way", "Andromeda", "Triangulum", "Messier 87"],
    correct: 0,
  },
  {
    question: "What is the main source of energy for the Earth's climate?",
    options: ["Sun", "Wind", "Water", "Geothermal"],
    correct: 0,
  },
  {
    question: "Which of the following is a primary color?",
    options: ["Red", "Green", "Purple", "Orange"],
    correct: 0,
  },
  {
    question: "What is the chemical symbol for helium?",
    options: ["He", "H", "Hg", "Hf"],
    correct: 0,
  },
  // Add more questions up to 50 as needed
];

// State to track unlocked levels
let unlockedLevels = 1;
let currentLevel = 0; // Track the current level

// Function to generate level buttons dynamically
function generateLevels() {
  const levelsContainer = document.getElementById("levels");
  levelsContainer.innerHTML = ""; // Clear existing buttons
  for (let i = 0; i < questions.length; i++) {
    const levelButton = document.createElement("button");
    levelButton.innerText = "Level " + (i + 1);
    levelButton.classList.add("level-button");
    if (i < unlockedLevels) {
      levelButton.classList.add("unlocked");
      levelButton.onclick = () => startGame(i);
    } else {
      levelButton.disabled = true; // Lock levels that are not unlocked
    }
    levelsContainer.appendChild(levelButton);
  }
}

// Function to start the game for a given level
function startGame(levelIndex) {
  currentLevel = levelIndex; // Set the current level
  // Hide level selection, show game container
  document.getElementById("levelSelectionPage").classList.remove("active");
  document.getElementById("gameContainer").classList.add("active");

  const questionObj = questions[levelIndex];
  document.getElementById("levelInfo").innerText = "Level " + (levelIndex + 1);
  document.getElementById("question").innerText = questionObj.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = ""; // Clear previous options

  questionObj.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.innerText = option;
    optionButton.classList.add("option");
    optionButton.onclick = () => checkAnswer(levelIndex, index);
    optionsContainer.appendChild(optionButton);
  });

  // Hide completion buttons initially
  document.getElementById("message").innerText = "";
}

// Function to check the selected answer
function checkAnswer(levelIndex, selectedOptionIndex) {
  const correctAnswerIndex = questions[levelIndex].correct;
  const messageElement = document.getElementById("message");

  if (selectedOptionIndex === correctAnswerIndex) {
    messageElement.innerText = "Correct!";
    // Hide options after correct answer
    document
      .getElementById("options")
      .querySelectorAll(".option")
      .forEach((btn) => (btn.style.display = "none"));
    showLevelCompletionButtons(levelIndex);
  } else {
    messageElement.innerText = "Wrong answer. Try again!";
  }
}

// Function to show buttons for navigating after level completion
function showLevelCompletionButtons(currentLevelIndex) {
  const optionsContainer = document.getElementById("options");

  // Add Main Menu button
  const mainMenuButton = document.createElement("button");
  mainMenuButton.innerText = "Main Menu";
  mainMenuButton.onclick = () => {
    document.getElementById("gameContainer").classList.remove("active");
    document.getElementById("landingPage").classList.add("active");
  };
  optionsContainer.appendChild(mainMenuButton);

  // Add Next Level button
  const nextLevelButton = document.createElement("button");
  nextLevelButton.innerText = "Next Level";
  nextLevelButton.onclick = () => {
    // Unlock next level and start it
    unlockedLevels = Math.min(unlockedLevels + 1, questions.length);
    generateLevels(); // Update level list to reflect newly unlocked level
    startGame(currentLevel + 1); // Start the next level
  };
  optionsContainer.appendChild(nextLevelButton);
}

// Function to handle landing page play button click
function startGameFromLanding() {
  document.getElementById("landingPage").classList.remove("active");
  document.getElementById("levelSelectionPage").classList.add("active");
  generateLevels(); // Initialize level buttons
}

// Function to toggle the menu visibility
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Placeholder functions for menu actions
function toggleSound() {
  const soundButton = document.querySelector(".menu button");
  soundButton.innerText =
    soundButton.innerText === "Sound: On" ? "Sound: Off" : "Sound: On";
}

function showAbout() {
  alert("This is a question and answer game with 50 levels.");
}

function shareGame() {
  alert("Share this game with your friends!");
}

// Initial setup
window.onload = () => {
  document.getElementById("landingPage").classList.add("active");
  generateLevels();
};
