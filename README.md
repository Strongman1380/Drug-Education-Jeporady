# Drug Education Jeopardy

An **authentic Jeopardy!-themed** educational web-based game focused on drug education, substance abuse prevention, and recovery awareness. This interactive game helps players learn important facts about drugs, alcohol, addiction, treatment, and recovery in an engaging, broadcast-quality format.

## 🎨 New Features (Version 2.0)

### Authentic Jeopardy Design
- **Classic Jeopardy blue background** (#060CE9) with gradient effects
- **Iconic gold text** (#FFCC00) matching the TV show aesthetic  
- **Swiss911/Arial Black fonts** for authentic game show appearance
- **Professional broadcast-quality styling** throughout

### Dynamic Question System
- **200+ unique questions** across 9 comprehensive categories
- **Randomized question selection** every game for unlimited replayability
- **Difficulty-based organization** (Easy to Expert levels)
- **Questions sourced from research** on addiction, treatment, and recovery

### Enhanced Gameplay
- **Glowing gold effects** on hover and Daily Doubles
- **Smooth animations** and transitions
- **Used cells** visually dimmed after selection
- **Dramatic score displays** with team cards
- **Professional modal presentations**

## Features

### Game Mechanics
- **2-3 Team Support**: Play with 2 or 3 teams
- **Two Rounds**: Traditional Jeopardy format with Round 1 and Round 2
- **Daily Doubles**: Special questions where teams can wager points
- **Final Jeopardy**: Culminating question where all teams can wager
- **Score Tracking**: Real-time scoreboard with positive/negative scoring
- **Responsive Design**: Works on desktop, tablet, and mobile devices

### Educational Content
- **6 Categories per Round**: Comprehensive coverage of drug education topics
- **60 Questions Total**: 30 questions per round covering various difficulty levels
- **Evidence-Based Information**: All content based on current medical and scientific understanding
- **Resource Links**: Access to national helplines and educational resources

### Categories Covered

#### Round 1
- **Alcohol Facts**: Legal drinking age, BAC levels, liver processing, binge drinking
- **Drug Types**: Classifications of illegal drugs, depressants, stimulants, hallucinogens, opioids
- **Health Effects**: Physical and mental health impacts of substance abuse
- **Prevention**: Strategies for avoiding substance abuse and building resilience
- **Treatment**: Recovery processes, detox, counseling, support groups
- **Legal Issues**: Drug enforcement, DUI laws, controlled substances, criminal consequences

#### Round 2
- **Prescription Drugs**: Misuse, commonly abused medications, fentanyl, naloxone
- **Social Impact**: Effects on families, workplace, communities, crime
- **Recovery Stories**: Success factors, support systems, lifestyle changes
- **Brain Science**: Neuroscience of addiction, dopamine, tolerance, brain recovery
- **Statistics**: Current data on substance abuse prevalence and treatment
- **Myths vs Facts**: Common misconceptions about addiction and recovery

#### Final Jeopardy
- **Recovery and Hope**: Focus on successful recovery programs and organizations

## Technical Implementation

### Files Structure
```
Drug Education Jeopardy/
├── index.html          # Main HTML file with game interface
├── gameData.js         # All questions, answers, and game content
├── game.js            # Game logic and functionality
└── README.md          # This documentation file
```

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Styling with Tailwind CSS framework
- **JavaScript (ES6+)**: Game logic and interactivity
- **Font Awesome**: Icons for enhanced UI
- **Google Fonts**: Roboto font family for typography

### Key Features Implementation
- **Object-Oriented Design**: Game logic encapsulated in a JeopardyGame class
- **Event-Driven Architecture**: Responsive to user interactions
- **Local Storage Ready**: Can be extended to save game progress
- **Accessibility**: Keyboard navigation support (ESC key)
- **Mobile Responsive**: Tailwind CSS grid system for all screen sizes

## How to Play

### Setup
1. Enter team names (2-3 teams supported)
2. Click "Start Game" to begin

### Gameplay
1. **Question Selection**: Click on dollar amounts to select questions
2. **Daily Doubles**: When encountered, enter a wager before seeing the question
3. **Scoring**: After revealing the answer, mark each team as correct or incorrect
4. **Round Progression**: Complete all questions in Round 1 to advance to Round 2
5. **Final Jeopardy**: All teams wager on the final question

### Scoring Rules
- **Correct Answer**: Add the question value to team score
- **Incorrect Answer**: Subtract the question value from team score
- **Daily Double**: Teams can wager up to their current score or $1000 (whichever is higher)
- **Final Jeopardy**: Teams can wager up to their current score (minimum $0)

## Educational Resources

The game includes links to important resources:

### Crisis Support
- **National Suicide Prevention Lifeline**: 988
- **SAMHSA National Helpline**: 1-800-662-4357
- **Crisis Text Line**: Text HOME to 741741

### Organizations
- **SAMHSA** (Substance Abuse and Mental Health Services Administration)
- **NIDA** (National Institute on Drug Abuse)
- **CDC** (Centers for Disease Control and Prevention)
- **Alcoholics Anonymous (AA)**
- **Narcotics Anonymous (NA)**

## Installation and Usage

### Local Setup
1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. No server setup required - runs entirely in the browser

### Web Hosting
1. Upload all files to a web server
2. Ensure all files are in the same directory
3. Access via the hosted URL

### For Smart Boards
1. Open `index.html` in the smart board's browser
2. Use touch or stylus to interact with the game
3. Full-screen mode recommended for best experience

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Android Chrome
- **Requirements**: JavaScript enabled, internet connection for fonts and icons

## Documentation

- **[QUESTION_SYSTEM.md](QUESTION_SYSTEM.md)** - Complete guide to the dynamic question bank
- **[DESIGN_GUIDE.md](DESIGN_GUIDE.md)** - Comprehensive design and styling documentation

The game features 9 comprehensive categories with 200+ questions:

1. **Alcohol Facts** - Legal drinking age, BAC levels, family impact, statistics
2. **Drug Types & Classifications** - Opioids, stimulants, hallucinogens, legal status
3. **Health Effects & Consequences** - Physical/mental health impacts, brain changes
4. **Prevention & Protective Factors** - SAMHSA guidelines, coping skills, family support
5. **Treatment & Recovery** - Evidence-based treatment, NIDA principles, harm reduction
6. **Legal Consequences & Social Impact** - Criminal justice, employment, family effects
7. **Brain Science & Addiction** - Neurotransmitters, reward pathways, tolerance
8. **Myths & Facts** - TRUE/FALSE questions debunking addiction misconceptions  
9. **Statistics & Research** - Data from UNODC, SAMHSA, current research

### Difficulty Levels
- **Level 1 (Easy)**: 200/400 points - Basic facts and definitions
- **Level 2 (Medium)**: 400/800 points - Detailed knowledge
- **Level 3 (Hard)**: 600-1200 points - Complex concepts
- **Level 4 (Very Hard)**: 1000-1600 points - Advanced understanding
- **Level 5 (Expert)**: 2000 points - Research-level knowledge

## Customization

### Adding Questions
Edit `questionBank.js` to add questions to any category:
```javascript
// Add to questionBank.js
"Category Name": [
    { 
        difficulty: 1,  // 1-5 based on complexity
        question: "Your question text here in Jeopardy format",
        answer: "What is the answer?"
    },
    // Add more questions...
]
```

See [QUESTION_SYSTEM.md](QUESTION_SYSTEM.md) for detailed instructions.

### Styling Changes
- Modify CSS custom properties in the `<style>` section of `index.html`
- Jeopardy colors: Blue (#060CE9), Gold (#FFCC00), Dark Blue (#0000A0)
- See [DESIGN_GUIDE.md](DESIGN_GUIDE.md) for complete styling documentation

## Technical Implementation

### Files Structure
```
Drug Education Jeopardy/
├── index.html          # Main HTML with Jeopardy-styled interface
├── gameData.js         # Original game structure and Final Jeopardy
├── questionBank.js     # 200+ questions with difficulty ratings
├── game.js            # Game logic and dynamic question generation
├── README.md          # This documentation file
├── QUESTION_SYSTEM.md # Question bank system documentation
├── DESIGN_GUIDE.md    # Design and styling guide
└── Files/
    ├── impact         # Research on parental addiction impact
    ├── drug research  # Comprehensive drug analysis
    └── Path to recovery # SAMHSA recovery guidelines
```

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with Jeopardy theme
- **Tailwind CSS**: Utility classes for responsive design
- **JavaScript (ES6+)**: Game logic and dynamic question generation
- **Font Awesome**: Icons for enhanced UI
- **Google Fonts**: Swiss911-style fonts for authenticity

### Key Features Implementation
- **Object-Oriented Design**: Game logic in JeopardyGame class
- **Dynamic Question Generation**: Random selection from 200+ question pool
- **Difficulty Mapping**: Automatic difficulty-to-point-value matching
- **Event-Driven Architecture**: Responsive to user interactions
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Accessibility**: Keyboard navigation support (ESC key)

This game aims to:
- **Increase Awareness**: Educate about the risks and realities of substance abuse
- **Reduce Stigma**: Present addiction as a medical condition, not a moral failing
- **Promote Prevention**: Provide strategies for avoiding substance abuse
- **Encourage Treatment**: Highlight available resources and treatment options
- **Support Recovery**: Share positive messages about recovery and hope

## License

This educational tool is designed for non-commercial use in educational settings, treatment programs, and community awareness initiatives.

## Contributing

To contribute to this project:
1. Review current questions for accuracy and relevance
2. Suggest additional categories or questions
3. Report any technical issues or bugs
4. Propose new features or improvements

## Support

For technical support or educational content questions, please refer to the included resource links or consult with healthcare professionals and addiction specialists.

---

*Remember: If you or someone you know is struggling with substance abuse, help is available. Contact the SAMHSA National Helpline at 1-800-662-4357 for confidential, free treatment referrals and information services.*