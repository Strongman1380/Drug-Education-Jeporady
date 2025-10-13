// Drug Education Jeopardy Game Logic
class JeopardyGame {
    constructor() {
        this.teams = [];
        this.currentRound = 1;
        this.usedQuestions = new Set();
        this.currentQuestion = null;
        this.currentWager = 0;
        this.finalWagers = {};
        this.gameState = 'setup'; // setup, playing, final, ended
        this.controllingTeam = 0; // Index of team with board control
        this.timer = null;
        this.timeRemaining = 30;
        this.gameData = null; // Will hold dynamically generated questions
        
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Setup screen events
        document.getElementById('start-game-btn').addEventListener('click', () => this.startGame());
        
        // Question modal events
        document.getElementById('close-question').addEventListener('click', () => this.closeQuestionModal());
        document.getElementById('reveal-answer').addEventListener('click', () => this.revealAnswer());
        document.getElementById('return-to-board').addEventListener('click', () => this.returnToBoard());
        document.getElementById('submit-wager').addEventListener('click', () => this.submitWager());
        document.getElementById('submit-final-wagers').addEventListener('click', () => this.submitFinalWagers());
        
        // Daily Double wager buttons
        document.getElementById('wager-min').addEventListener('click', () => this.setWager(5));
        document.getElementById('wager-max').addEventListener('click', () => this.setWager('max'));
        
        // Round transition events
        document.getElementById('continue-round').addEventListener('click', () => this.continueToNextRound());
        
        // Game over events
        document.getElementById('new-game').addEventListener('click', () => this.newGame());
        document.getElementById('view-resources').addEventListener('click', () => this.showResources());
        document.getElementById('close-resources').addEventListener('click', () => this.hideResources());
        
        // Game control events
        document.getElementById('home-screen-btn').addEventListener('click', () => this.returnToHomeScreen());
        document.getElementById('reset-game-btn').addEventListener('click', () => this.resetGame());
        document.getElementById('finish-game-btn').addEventListener('click', () => this.finishGame());
        
        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeQuestionModal();
                this.hideResources();
            }
        });
    }
    
    startGame() {
        // Get team names
        const team1Name = document.getElementById('team1-name').value.trim() || 'Team Alpha';
        const team2Name = document.getElementById('team2-name').value.trim() || 'Team Beta';
        const team3Name = document.getElementById('team3-name').value.trim();
        
        // Initialize teams
        this.teams = [
            { name: team1Name, score: 0, id: 1 },
            { name: team2Name, score: 0, id: 2 }
        ];
        
        if (team3Name) {
            this.teams.push({ name: team3Name, score: 0, id: 3 });
        }
        
        // Generate fresh questions for this game
        this.generateFreshGameData();
        
        // Hide setup screen and show game screen
        document.getElementById('setup-screen').classList.add('hidden');
        document.getElementById('game-screen').classList.remove('hidden');
        
        this.gameState = 'playing';
        this.controllingTeam = 0; // First team starts
        this.setupGameBoard();
        this.updateScoreboard();
        this.updateBoardControl();
    }
    
    generateFreshGameData() {
        // Generate new questions for both rounds with randomization
        console.log('Generating fresh game data...');
        
        this.gameData = {
            round1: {
                categories: Object.keys(questionBank).slice(0, 6), // Use first 6 categories
                questions: {}
            },
            round2: {
                categories: Object.keys(questionBank).slice(0, 6), // Same categories, different questions
                questions: {}
            },
            finalJeopardy: gameData.finalJeopardy // Keep the original final jeopardy
        };
        
        // Generate Round 1 questions
        this.gameData.round1.categories.forEach(category => {
            this.gameData.round1.questions[category] = this.selectRandomQuestions(category, 1);
        });
        
        // Generate Round 2 questions (different from Round 1)
        this.gameData.round2.categories.forEach(category => {
            this.gameData.round2.questions[category] = this.selectRandomQuestions(category, 2);
        });
        
        console.log('Game data generated:', this.gameData);
    }
    
    selectRandomQuestions(category, round) {
        const pointValues = round === 1 ? [200, 400, 600, 800, 1000] : [400, 800, 1200, 1600, 2000];
        const difficultyMap = {
            200: 1, 400: 2, 600: 3, 800: 3, 1000: 4,
            1200: 3, 1600: 4, 2000: 5
        };
        
        const selectedQuestions = [];
        
        pointValues.forEach(points => {
            const difficulty = difficultyMap[points];
            const availableQuestions = questionBank[category]?.filter(q => q.difficulty === difficulty) || [];
            
            if (availableQuestions.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableQuestions.length);
                const selected = availableQuestions[randomIndex];
                
                selectedQuestions.push({
                    points: points,
                    question: selected.question,
                    answer: selected.answer,
                    dailyDouble: false // Will be assigned later
                });
            } else {
                // Fallback to any question from this category
                const allCategoryQuestions = questionBank[category] || [];
                if (allCategoryQuestions.length > 0) {
                    const randomIndex = Math.floor(Math.random() * allCategoryQuestions.length);
                    const selected = allCategoryQuestions[randomIndex];
                    selectedQuestions.push({
                        points: points,
                        question: selected.question,
                        answer: selected.answer,
                        dailyDouble: false
                    });
                }
            }
        });
        
        return selectedQuestions;
    }
    
    setupGameBoard() {
        const roundData = this.currentRound === 1 ? this.gameData.round1 : this.gameData.round2;
        
        // Update round indicator
        document.getElementById('round-indicator').textContent = `Round ${this.currentRound}`;
        
        // Setup categories
        const categoriesContainer = document.getElementById('categories');
        categoriesContainer.innerHTML = '';
        
        roundData.categories.forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'bg-jeopardy text-white p-4 text-center font-bold text-lg rounded-lg';
            categoryDiv.textContent = category;
            categoriesContainer.appendChild(categoryDiv);
        });
        
        // Setup questions
        const questionsContainer = document.getElementById('questions');
        questionsContainer.innerHTML = '';
        
        const pointValues = this.currentRound === 1 ? [200, 400, 600, 800, 1000] : [400, 800, 1200, 1600, 2000];
        
        for (let row = 0; row < 5; row++) {
            roundData.categories.forEach((category, colIndex) => {
                const questionDiv = document.createElement('div');
                const questionKey = `${this.currentRound}-${colIndex}-${row}`;
                
                questionDiv.className = 'game-cell bg-blue-600 text-white p-6 text-center font-bold text-2xl rounded-lg cursor-pointer hover:bg-blue-700';
                questionDiv.textContent = `$${pointValues[row]}`;
                questionDiv.dataset.category = category;
                questionDiv.dataset.questionIndex = row;
                questionDiv.dataset.questionKey = questionKey;
                
                // Check if this is a daily double
                const questionData = roundData.questions[category][row];
                if (questionData && questionData.dailyDouble) {
                    questionDiv.classList.add('daily-double');
                }
                
                // Check if question is already used
                if (this.usedQuestions.has(questionKey)) {
                    questionDiv.classList.add('used-cell');
                    questionDiv.classList.remove('cursor-pointer', 'hover:bg-blue-700');
                } else {
                    questionDiv.addEventListener('click', () => this.selectQuestion(category, row, questionKey));
                }
                
                questionsContainer.appendChild(questionDiv);
            });
        }
        
        // Randomly assign Daily Doubles for this round if not already assigned
        this.assignDailyDoubles(roundData);
    }
    
    assignDailyDoubles(roundData) {
        // Count existing Daily Doubles
        let ddCount = 0;
        roundData.categories.forEach(category => {
            if (roundData.questions[category]) {
                roundData.questions[category].forEach(q => {
                    if (q.dailyDouble) ddCount++;
                });
            }
        });
        
        // Assign 2 Daily Doubles per round randomly
        while (ddCount < 2) {
            const randomCatIndex = Math.floor(Math.random() * roundData.categories.length);
            const randomQuestionIndex = Math.floor(Math.random() * 5);
            const category = roundData.categories[randomCatIndex];
            
            if (roundData.questions[category] && roundData.questions[category][randomQuestionIndex]) {
                if (!roundData.questions[category][randomQuestionIndex].dailyDouble) {
                    roundData.questions[category][randomQuestionIndex].dailyDouble = true;
                    ddCount++;
                }
            }
        }
    }
    
    selectQuestion(category, questionIndex, questionKey) {
        if (this.usedQuestions.has(questionKey)) return;
        
        const roundData = this.currentRound === 1 ? this.gameData.round1 : this.gameData.round2;
        const questionData = roundData.questions[category][questionIndex];
        
        this.currentQuestion = {
            ...questionData,
            category: category,
            key: questionKey
        };
        
        this.showQuestionModal();
    }
    
    showQuestionModal() {
        const modal = document.getElementById('question-modal');
        const categoryElement = document.getElementById('question-category');
        const pointsElement = document.getElementById('question-points');
        const questionElement = document.getElementById('question-text');
        
        categoryElement.textContent = this.currentQuestion.category;
        pointsElement.textContent = `$${this.currentQuestion.points}`;
        questionElement.textContent = this.currentQuestion.question;
        
        // Reset modal state
        document.getElementById('answer-section').classList.add('hidden');
        document.getElementById('daily-double-section').classList.add('hidden');
        document.getElementById('final-jeopardy-section').classList.add('hidden');
        document.getElementById('scoring-controls').classList.add('hidden');
        document.getElementById('reveal-answer').classList.remove('hidden');
        
        // Handle Daily Double
        if (this.currentQuestion.dailyDouble) {
            this.showDailyDoubleSection();
        }
        
        modal.classList.remove('hidden');
    }
    
    showDailyDoubleSection() {
        const dailyDoubleSection = document.getElementById('daily-double-section');
        const maxWagerElement = document.getElementById('max-wager');
        const wagerInput = document.getElementById('wager-input');
        const controllingTeamDD = document.getElementById('controlling-team-dd');
        
        // Show which team has control
        controllingTeamDD.textContent = this.teams[this.controllingTeam].name;
        
        // Calculate max wager based on Jeopardy rules:
        // Max of current score or highest value on the board
        const controllingTeamScore = this.teams[this.controllingTeam].score;
        const highestBoardValue = this.currentRound === 1 ? 1000 : 2000;
        const maxWager = Math.max(controllingTeamScore, highestBoardValue);
        
        maxWagerElement.textContent = `$${maxWager.toLocaleString()}`;
        wagerInput.max = maxWager;
        wagerInput.min = 5;
        wagerInput.value = Math.min(this.currentQuestion.points, maxWager);
        
        dailyDoubleSection.classList.remove('hidden');
        document.getElementById('reveal-answer').classList.add('hidden');
        
        // Start timer for Daily Double wager
        this.startTimer(30);
    }
    
    submitWager() {
        const wagerInput = document.getElementById('wager-input');
        const wager = parseInt(wagerInput.value) || 0;
        const maxWager = parseInt(wagerInput.max);
        const minWager = 5;
        
        if (wager < minWager || wager > maxWager) {
            alert(`Please enter a wager between $${minWager} and $${maxWager.toLocaleString()}`);
            return;
        }
        
        this.currentWager = wager;
        this.currentQuestion.points = wager; // Override points with wager
        
        // Stop the timer
        this.stopTimer();
        
        document.getElementById('daily-double-section').classList.add('hidden');
        document.getElementById('reveal-answer').classList.remove('hidden');
        
        // Start timer for answering the question
        this.startTimer(30);
    }
    
    revealAnswer() {
        const answerSection = document.getElementById('answer-section');
        const answerText = document.getElementById('answer-text');
        
        // Stop the timer
        this.stopTimer();
        
        answerText.textContent = this.currentQuestion.answer;
        answerSection.classList.remove('hidden');
        
        this.showScoringControls();
        document.getElementById('reveal-answer').classList.add('hidden');
    }
    
    showScoringControls() {
        const scoringControls = document.getElementById('scoring-controls');
        const teamButtons = document.getElementById('team-scoring-buttons');
        
        teamButtons.innerHTML = '';
        
        this.teams.forEach(team => {
            const correctButton = document.createElement('button');
            correctButton.className = 'bg-correct text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 mb-2';
            correctButton.textContent = `${team.name} Correct (+$${this.currentQuestion.points})`;
            correctButton.addEventListener('click', () => this.scoreTeam(team.id, this.currentQuestion.points));
            
            const incorrectButton = document.createElement('button');
            incorrectButton.className = 'bg-incorrect text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600';
            incorrectButton.textContent = `${team.name} Incorrect (-$${this.currentQuestion.points})`;
            incorrectButton.addEventListener('click', () => this.scoreTeam(team.id, -this.currentQuestion.points));
            
            const teamDiv = document.createElement('div');
            teamDiv.className = 'space-y-2';
            teamDiv.appendChild(correctButton);
            teamDiv.appendChild(incorrectButton);
            
            teamButtons.appendChild(teamDiv);
        });
        
        scoringControls.classList.remove('hidden');
    }
    
    scoreTeam(teamId, points) {
        const team = this.teams.find(t => t.id === teamId);
        if (team) {
            team.score += points;
            this.updateScoreboard();
            
            // Team that answered correctly gets board control
            if (points > 0) {
                this.controllingTeam = this.teams.findIndex(t => t.id === teamId);
                this.updateBoardControl();
            }
        }
    }
    
    updateBoardControl() {
        const controllingTeamElement = document.getElementById('controlling-team');
        if (controllingTeamElement && this.teams[this.controllingTeam]) {
            controllingTeamElement.textContent = this.teams[this.controllingTeam].name;
            controllingTeamElement.className = 'font-bold text-lg text-primary animate-pulse';
            
            // Remove animation after 2 seconds
            setTimeout(() => {
                controllingTeamElement.className = 'font-bold text-lg text-primary';
            }, 2000);
        }
    }
    
    startTimer(seconds = 30) {
        this.timeRemaining = seconds;
        const timerDisplay = document.getElementById('timer-display');
        const timerSeconds = document.getElementById('timer-seconds');
        
        timerDisplay.classList.remove('hidden');
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            timerSeconds.textContent = this.timeRemaining;
            
            // Change color as time runs out
            if (this.timeRemaining <= 10) {
                timerDisplay.className = 'text-2xl font-bold text-red-600 animate-pulse';
            } else if (this.timeRemaining <= 20) {
                timerDisplay.className = 'text-2xl font-bold text-yellow-600';
            }
            
            if (this.timeRemaining <= 0) {
                this.stopTimer();
                // Auto-reveal answer when time runs out
                if (!document.getElementById('answer-section').classList.contains('hidden')) {
                    // Answer already revealed, do nothing
                } else {
                    this.revealAnswer();
                }
            }
        }, 1000);
    }
    
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        document.getElementById('timer-display').classList.add('hidden');
    }
    
    setWager(amount) {
        const wagerInput = document.getElementById('wager-input');
        const maxWager = parseInt(document.getElementById('max-wager').textContent.replace(/[,$]/g, ''));
        
        if (amount === 'max') {
            wagerInput.value = maxWager;
        } else {
            wagerInput.value = amount;
        }
    }
    
    updateScoreboard() {
        const teamsContainer = document.getElementById('teams-container');
        teamsContainer.innerHTML = '';
        
        this.teams.forEach(team => {
            const teamDiv = document.createElement('div');
            teamDiv.className = 'text-center bg-gray-100 p-4 rounded-lg min-w-[150px]';
            
            const nameDiv = document.createElement('div');
            nameDiv.className = 'font-bold text-lg text-gray-800';
            nameDiv.textContent = team.name;
            
            const scoreDiv = document.createElement('div');
            scoreDiv.className = `text-2xl font-bold ${team.score >= 0 ? 'text-green-600' : 'text-red-600'}`;
            scoreDiv.textContent = `$${team.score.toLocaleString()}`;
            
            teamDiv.appendChild(nameDiv);
            teamDiv.appendChild(scoreDiv);
            teamsContainer.appendChild(teamDiv);
        });
    }
    
    returnToBoard() {
            // Mark question as used
            if (this.currentQuestion && this.currentQuestion.key) {
                this.usedQuestions.add(this.currentQuestion.key);
            }
            // Close modal
            this.closeQuestionModal();
            // Update board
            setTimeout(() => {
                this.setupGameBoard();
                // Check if round is complete
                this.checkRoundComplete();
            }, 50); // slight delay to ensure DOM updates
    }
    
    closeQuestionModal() {
        document.getElementById('question-modal').classList.add('hidden');
        this.stopTimer();
        this.currentQuestion = null;
        this.currentWager = 0;
    }
    
    checkRoundComplete() {
        const totalQuestions = 30; // 6 categories × 5 questions
        const roundQuestions = Array.from(this.usedQuestions).filter(key => 
            key.startsWith(`${this.currentRound}-`)
        ).length;
        
        if (roundQuestions >= totalQuestions) {
            if (this.currentRound === 1) {
                this.showRoundTransition();
            } else {
                this.showFinalJeopardy();
            }
        }
    }
    
    showRoundTransition() {
        const modal = document.getElementById('round-transition');
        const title = document.getElementById('transition-title');
        
        title.textContent = 'Round 2';
        modal.classList.remove('hidden');
    }
    
    continueToNextRound() {
        this.currentRound = 2;
        document.getElementById('round-transition').classList.add('hidden');
        this.setupGameBoard();
    }
    
    showFinalJeopardy() {
        this.gameState = 'final';
        
        const modal = document.getElementById('question-modal');
        const categoryElement = document.getElementById('question-category');
        const pointsElement = document.getElementById('question-points');
        const questionElement = document.getElementById('question-text');
        const finalSection = document.getElementById('final-jeopardy-section');
        const wagersContainer = document.getElementById('final-wagers');
        
        // Set up Final Jeopardy question from gameData
        categoryElement.textContent = this.gameData.finalJeopardy.category;
        pointsElement.textContent = 'FINAL JEOPARDY';
        questionElement.textContent = this.gameData.finalJeopardy.question;
        
        // Hide other sections
        document.getElementById('answer-section').classList.add('hidden');
        document.getElementById('daily-double-section').classList.add('hidden');
        document.getElementById('scoring-controls').classList.add('hidden');
        document.getElementById('reveal-answer').classList.add('hidden');
        
        // Show Final Jeopardy section
        finalSection.classList.remove('hidden');
        
        // Create wager inputs for each team
        wagersContainer.innerHTML = '';
        this.teams.forEach(team => {
            const maxWager = Math.max(team.score, 0);
            
            const wagerDiv = document.createElement('div');
            wagerDiv.className = 'bg-gray-100 p-4 rounded-lg border';
            
            const teamHeader = document.createElement('div');
            teamHeader.className = 'flex justify-between items-center mb-2';
            
            const teamName = document.createElement('div');
            teamName.className = 'font-bold text-lg';
            teamName.textContent = team.name;
            
            const currentScore = document.createElement('div');
            currentScore.className = 'text-sm text-gray-600';
            currentScore.textContent = `Current: $${team.score.toLocaleString()}`;
            
            teamHeader.appendChild(teamName);
            teamHeader.appendChild(currentScore);
            
            const wagerControls = document.createElement('div');
            wagerControls.className = 'flex items-center gap-2';
            
            const minButton = document.createElement('button');
            minButton.className = 'bg-gray-500 text-white px-2 py-1 rounded text-sm hover:bg-gray-600';
            minButton.textContent = '$0';
            minButton.onclick = () => {
                input.value = 0;
            };
            
            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'flex-1 p-2 border border-gray-300 rounded text-center';
            input.min = '0';
            input.max = maxWager;
            input.value = maxWager;
            input.dataset.teamId = team.id;
            
            const maxButton = document.createElement('button');
            maxButton.className = 'bg-gray-500 text-white px-2 py-1 rounded text-sm hover:bg-gray-600';
            maxButton.textContent = `$${maxWager.toLocaleString()}`;
            maxButton.onclick = () => {
                input.value = maxWager;
            };
            
            wagerControls.appendChild(minButton);
            wagerControls.appendChild(input);
            wagerControls.appendChild(maxButton);
            
            wagerDiv.appendChild(teamHeader);
            wagerDiv.appendChild(wagerControls);
            wagersContainer.appendChild(wagerDiv);
        });
        
        modal.classList.remove('hidden');
    }
    
    submitFinalWagers() {
        const wagerInputs = document.querySelectorAll('#final-wagers input');
        this.finalWagers = {};
        
        let validWagers = true;
        wagerInputs.forEach(input => {
            const teamId = parseInt(input.dataset.teamId);
            const wager = parseInt(input.value) || 0;
            const team = this.teams.find(t => t.id === teamId);
            
            if (wager < 0 || wager > Math.max(team.score, 0)) {
                validWagers = false;
                alert(`Invalid wager for ${team.name}. Must be between $0 and $${Math.max(team.score, 0)}`);
                return;
            }
            
            this.finalWagers[teamId] = wager;
        });
        
        if (validWagers) {
            document.getElementById('final-jeopardy-section').classList.add('hidden');
            document.getElementById('reveal-answer').classList.remove('hidden');
            
            // Override the return to board button for Final Jeopardy
            document.getElementById('return-to-board').textContent = 'Show Final Results';
        }
    }
    
    showFinalResults() {
        // Show Final Jeopardy answer first
        const answerSection = document.getElementById('answer-section');
        const answerText = document.getElementById('answer-text');
        
        answerText.textContent = this.gameData.finalJeopardy.answer;
        answerSection.classList.remove('hidden');
        
        // Show Final Jeopardy scoring
        this.showFinalJeopardyScoring();
    }
    
    showFinalJeopardyScoring() {
        const scoringControls = document.getElementById('scoring-controls');
        const teamButtons = document.getElementById('team-scoring-buttons');
        
        teamButtons.innerHTML = '';
        
        this.teams.forEach(team => {
            const wager = this.finalWagers[team.id] || 0;
            
            const correctButton = document.createElement('button');
            correctButton.className = 'bg-correct text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 mb-2';
            correctButton.textContent = `${team.name} Correct (+$${wager})`;
            correctButton.addEventListener('click', () => {
                this.scoreTeam(team.id, wager);
                this.checkFinalJeopardyComplete();
            });
            
            const incorrectButton = document.createElement('button');
            incorrectButton.className = 'bg-incorrect text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600';
            incorrectButton.textContent = `${team.name} Incorrect (-$${wager})`;
            incorrectButton.addEventListener('click', () => {
                this.scoreTeam(team.id, -wager);
                this.checkFinalJeopardyComplete();
            });
            
            const teamDiv = document.createElement('div');
            teamDiv.className = 'space-y-2';
            teamDiv.appendChild(correctButton);
            teamDiv.appendChild(incorrectButton);
            
            teamButtons.appendChild(teamDiv);
        });
        
        scoringControls.classList.remove('hidden');
        document.getElementById('reveal-answer').classList.add('hidden');
        
        // Change return to board button
        const returnButton = document.getElementById('return-to-board');
        returnButton.textContent = 'End Game';
        returnButton.onclick = () => this.endGame();
    }
    
    checkFinalJeopardyComplete() {
        // This is called after each team's Final Jeopardy scoring
        // You could add logic here to automatically end the game after all teams are scored
    }
    
    endGame() {
        this.gameState = 'ended';
        this.closeQuestionModal();
        this.showGameOver();
    }
    
    showGameOver() {
        const modal = document.getElementById('game-over');
        const finalScores = document.getElementById('final-scores');
        const winnerAnnouncement = document.getElementById('winner-announcement');
        
        // Sort teams by score
        const sortedTeams = [...this.teams].sort((a, b) => b.score - a.score);
        
        // Add bonus points for placement
        const bonusPoints = [25000, 10000, 5000]; // 1st, 2nd, 3rd place bonuses
        sortedTeams.forEach((team, index) => {
            if (index < bonusPoints.length) {
                team.finalScore = team.score + bonusPoints[index];
                team.bonus = bonusPoints[index];
            } else {
                team.finalScore = team.score;
                team.bonus = 0;
            }
        });
        
        // Re-sort by final score (in case bonus points changed the order)
        sortedTeams.sort((a, b) => b.finalScore - a.finalScore);
        
        // Display final scores with breakdown
        finalScores.innerHTML = '';
        
        // Add title
        const titleDiv = document.createElement('div');
        titleDiv.className = 'text-xl font-bold text-center mb-4 text-jeopardy';
        titleDiv.textContent = 'Final Results';
        finalScores.appendChild(titleDiv);
        
        sortedTeams.forEach((team, index) => {
            const teamDiv = document.createElement('div');
            teamDiv.className = `p-3 mb-2 rounded-lg ${index === 0 ? 'bg-yellow-100 border-2 border-yellow-400' : 
                                                      index === 1 ? 'bg-gray-100 border-2 border-gray-400' : 
                                                      index === 2 ? 'bg-orange-100 border-2 border-orange-400' : 
                                                      'bg-blue-50 border border-blue-200'}`;
            
            const placeDiv = document.createElement('div');
            placeDiv.className = `font-bold text-lg ${index === 0 ? 'text-yellow-600' : 
                                                     index === 1 ? 'text-gray-600' : 
                                                     index === 2 ? 'text-orange-600' : 
                                                     'text-blue-600'}`;
            const placeEmoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏅';
            placeDiv.textContent = `${placeEmoji} ${this.getOrdinal(index + 1)} Place: ${team.name}`;
            
            const scoreBreakdown = document.createElement('div');
            scoreBreakdown.className = 'text-sm text-gray-600 mt-1';
            scoreBreakdown.innerHTML = `
                Game Score: $${team.score.toLocaleString()}<br>
                Placement Bonus: +$${team.bonus.toLocaleString()}<br>
                <strong>Total Score: $${team.finalScore.toLocaleString()}</strong>
            `;
            
            teamDiv.appendChild(placeDiv);
            teamDiv.appendChild(scoreBreakdown);
            finalScores.appendChild(teamDiv);
        });
        
        // Announce winner
        const winner = sortedTeams[0];
        winnerAnnouncement.innerHTML = `
            <div class="text-3xl mb-2">🎉 CHAMPION! 🎉</div>
            <div class="text-xl">${winner.name}</div>
            <div class="text-lg text-gray-600">Final Score: $${winner.finalScore.toLocaleString()}</div>
        `;
        
        modal.classList.remove('hidden');
    }
    
    getOrdinal(num) {
        const suffixes = ["th", "st", "nd", "rd"];
        const v = num % 100;
        return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
    }
    
    returnToHomeScreen() {
        // Always allow return to home screen for demo reliability
        // Reset game state completely
        this.teams = [];
        this.currentRound = 1;
        this.usedQuestions.clear();
        this.currentQuestion = null;
        this.currentWager = 0;
        this.finalWagers = {};
        this.gameState = 'setup';
        this.controllingTeam = 0;
        // Stop any running timer
        this.stopTimer();
        // Close any open modals
        this.closeQuestionModal();
        // Hide game screen and show setup screen
        document.getElementById('game-screen').classList.add('hidden');
        document.getElementById('setup-screen').classList.remove('hidden');
    }

    resetGame() {
        // Always allow reset for demo reliability
        // Reset game state
        this.teams.forEach(team => team.score = 0);
        this.currentRound = 1;
        this.usedQuestions.clear();
        this.currentQuestion = null;
        this.currentWager = 0;
        this.finalWagers = {};
        this.gameState = 'playing';
        this.controllingTeam = 0;
        
        // Generate fresh questions for new game
        this.generateFreshGameData();
        
        // Stop any running timer
        this.stopTimer();
        // Update display
        this.setupGameBoard();
        this.updateScoreboard();
        this.updateBoardControl();
        // Close any open modals
        this.closeQuestionModal();
    }
    
    finishGame() {
        // Always allow finish for demo reliability
        this.gameState = 'ended';
        this.closeQuestionModal();
        this.showGameOver();
    }
    
    newGame() {
        // Reset game state
        this.teams = [];
        this.currentRound = 1;
        this.usedQuestions.clear();
        this.currentQuestion = null;
        this.currentWager = 0;
        this.finalWagers = {};
        this.gameState = 'setup';
        
        // Hide game over modal and show setup screen
        document.getElementById('game-over').classList.add('hidden');
        document.getElementById('game-screen').classList.add('hidden');
        document.getElementById('setup-screen').classList.remove('hidden');
        
        // Reset form values
        document.getElementById('team1-name').value = 'Team Alpha';
        document.getElementById('team2-name').value = 'Team Beta';
        document.getElementById('team3-name').value = '';
    }
    
    showResources() {
        document.getElementById('game-over').classList.add('hidden');
        document.getElementById('resources-modal').classList.remove('hidden');
    }
    
    hideResources() {
        document.getElementById('resources-modal').classList.add('hidden');
        if (this.gameState === 'ended') {
            document.getElementById('game-over').classList.remove('hidden');
        }
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const game = new JeopardyGame();
    
    // Override the return to board function for Final Jeopardy
    const originalReturnToBoard = game.returnToBoard.bind(game);
    document.getElementById('return-to-board').addEventListener('click', () => {
        if (game.gameState === 'final' && game.finalWagers && Object.keys(game.finalWagers).length > 0) {
            if (document.getElementById('answer-section').classList.contains('hidden')) {
                game.showFinalResults();
            } else {
                game.endGame();
            }
        } else {
            originalReturnToBoard();
        }
    });
});