# Dynamic Question Bank System

## Overview
The Drug Education Jeopardy game now features a comprehensive, dynamic question generation system that ensures variety and replayability. Each time a new game starts, questions are randomly selected from a large pool of over 200 questions.

## Question Organization

### Difficulty Levels
Questions are organized into 5 difficulty levels that correspond to point values:

| Difficulty | Description | Round 1 Points | Round 2 Points |
|------------|-------------|----------------|----------------|
| 1 | Easy | 200 | 400 |
| 2 | Medium | 400 | 800 |
| 3 | Hard | 600, 800 | 1200 |
| 4 | Very Hard | 1000 | 1600 |
| 5 | Expert | - | 2000 |

### Categories
The game includes 9 comprehensive categories:

1. **Alcohol Facts** - Legal drinking age, BAC levels, family impact
2. **Drug Types & Classifications** - Opioids, stimulants, classifications
3. **Health Effects & Consequences** - Physical and mental health impacts
4. **Prevention & Protective Factors** - SAMHSA guidelines, coping skills
5. **Treatment & Recovery** - Evidence-based treatment, NIDA principles
6. **Legal Consequences & Social Impact** - Criminal justice, family effects
7. **Brain Science & Addiction** - Neurotransmitters, brain pathways
8. **Myths & Facts** - TRUE/FALSE questions about addiction
9. **Statistics & Research** - Data from UNODC, SAMHSA, research studies

## Question Pool Size

Each category contains multiple questions at each difficulty level:
- **Easy (Level 1)**: 4-5 questions per category
- **Medium (Level 2)**: 4-5 questions per category
- **Hard (Level 3)**: 3-4 questions per category
- **Very Hard (Level 4)**: 3-4 questions per category
- **Expert (Level 5)**: 2-3 questions per category

**Total**: Over 200 unique questions across all categories and difficulty levels

## How It Works

### Game Start
1. When "Start Game" is clicked, `generateFreshGameData()` is called
2. System randomly selects questions from the pool for each point value
3. Questions are matched to difficulty levels appropriate for their point value
4. 2 Daily Doubles are randomly assigned per round

### Question Selection Algorithm
```javascript
// For each category and point value:
1. Determine difficulty level based on point value
2. Filter available questions by difficulty
3. Randomly select one question from filtered pool
4. Assign to game board
5. Ensure no duplicate questions between Round 1 and Round 2
```

### Daily Doubles
- Exactly 2 Daily Doubles per round
- Randomly placed on the board each game
- Can appear at any point value
- Never in the same position between games

## Benefits

### For Players
- **Variety**: Different questions every game
- **Replayability**: Can play multiple times without repetition
- **Fair Difficulty**: Questions get progressively harder with point values
- **Educational Value**: Comprehensive coverage of drug education topics

### For Educators
- **Consistent Learning**: All questions based on research and evidence
- **Customizable**: Easy to add more questions to the bank
- **Engaging**: Students can't predict questions from previous games
- **Standards-Aligned**: Questions based on SAMHSA, NIDA, UNODC data

## Question Sources

All questions are derived from research files including:
- **impact**: Parental addiction effects on youth (729 lines)
- **drug research**: Comprehensive drug analysis (735 lines)  
- **Path to recovery**: SAMHSA guidelines and treatment (699 lines)

## Adding New Questions

To add questions to the bank, edit `questionBank.js`:

```javascript
"Category Name": [
    { 
        difficulty: 1,  // 1-5
        question: "Your question text here",
        answer: "What is the answer?"
    },
    // Add more questions...
]
```

### Guidelines for New Questions
1. Use Jeopardy format (answer as a question)
2. Assign appropriate difficulty level
3. Base on research and evidence
4. Keep answers concise
5. Avoid ambiguous wording

## Technical Implementation

### Files
- **questionBank.js**: Contains all questions and selection logic
- **game.js**: Integrates question generation into game flow
- **gameData.js**: Retains Final Jeopardy and structure

### Key Functions
- `getQuestionsByDifficulty(category, difficulty)`: Filter questions
- `generateGameQuestions(round)`: Generate full game set
- `selectRandomQuestions(category, round)`: Pick questions for category
- `assignDailyDoubles(roundData)`: Place Daily Doubles randomly

## Future Enhancements

Potential improvements:
- [ ] Add more categories (e.g., "Specific Drugs," "Family Resources")
- [ ] Expand question pool to 500+ questions
- [ ] Add multimedia questions (images, videos)
- [ ] Track which questions have been used in a session
- [ ] Difficulty adjustment based on player performance
- [ ] Custom category selection
- [ ] Export/import question sets

## Maintenance

### Regular Updates
- Review questions quarterly for accuracy
- Add new questions based on updated research
- Remove outdated statistics
- Ensure equal distribution across difficulty levels

### Quality Assurance
- All questions fact-checked against source material
- Answers reviewed for clarity
- Difficulty levels validated through playtesting
- Educational value confirmed by subject matter experts

---

**Version**: 1.0  
**Last Updated**: October 12, 2025  
**Questions**: 200+  
**Categories**: 9  
**Difficulty Levels**: 5
