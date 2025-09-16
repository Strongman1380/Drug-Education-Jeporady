# Drug Education Jeopardy

An educational web-based Jeopardy game focused on drug education, substance abuse prevention, and recovery awareness. This interactive game helps players learn important facts about drugs, alcohol, addiction, treatment, and recovery in an engaging format.

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
1. Download all files to a local directory
2. Open `index.html` in a web browser
3. No server setup required - runs entirely in the browser

### Web Hosting
1. Upload all files to a web server
2. Ensure all files are in the same directory
3. Access via the hosted URL

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Android Chrome
- **Requirements**: JavaScript enabled, internet connection for external resources

## Customization

### Adding Questions
Edit `gameData.js` to modify or add questions:
```javascript
{
    points: 400,
    question: "Your question text here",
    answer: "What is the correct answer?",
    dailyDouble: false  // Set to true for Daily Double questions
}
```

### Styling Changes
- Modify CSS custom properties in the `<style>` section of `index.html`
- Tailwind classes can be adjusted throughout the HTML
- Color scheme defined in `tailwind.config`

### Adding Categories
1. Add new category to the `categories` array in `gameData.js`
2. Add corresponding questions array with 5 questions
3. Adjust grid layout if needed (currently supports 6 categories)

## Educational Goals

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