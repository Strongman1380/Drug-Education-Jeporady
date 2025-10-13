# Drug Education Jeopardy - Design Guide

## 🎨 Authentic Jeopardy Theming

This game now features an authentic **Jeopardy!** visual design based on the iconic game show's aesthetic.

## Color Palette

### Primary Colors
- **Jeopardy Blue**: `#060CE9` - Main blue used throughout
- **Jeopardy Dark**: `#0000A0` - Darker blue for depth and gradients
- **Jeopardy Gold**: `#FFCC00` - Iconic gold for text and highlights

### Accent Colors
- **Black**: `#000000` - Borders and shadows
- **White**: `#FFFFFF` - Primary text on blue backgrounds
- **Green**: `#4ade80` - Correct answer indicators
- **Red**: `#f87171` - Incorrect answer indicators

## Typography

### Fonts
1. **Swiss911 / Arial Black** - Main Jeopardy display font
   - Used for: Game board values, category names, scores
   - Weight: 900 (Black)
   - Features: Wide letter spacing, uppercase

2. **Roboto** - Supporting text
   - Used for: Body text, instructions, descriptions
   - Weights: 400, 500, 700, 900

### Font Usage
```css
.jeopardy-font {
    font-family: 'Swiss911', 'Arial Black', 'Impact', sans-serif;
    font-weight: 900;
    letter-spacing: 0.02em;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
}

.jeopardy-title {
    font-family: 'Swiss911', 'Arial Black', sans-serif;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}
```

## Visual Components

### 1. Setup Screen
- **Background**: White card with blue border
- **Title**: "JEOPARDY!" in blue with gold shadow
- **Subtitle**: Drug Education Edition
- **Button**: Blue background with gold text, transforms on hover

### 2. Game Board

#### Categories
- **Background**: Blue gradient (top to bottom)
- **Text**: Gold, uppercase, bold
- **Border**: Black, 3px
- **Shadow**: Inset white glow, outer black shadow

#### Question Cells
- **Background**: `#060CE9` solid blue
- **Border**: 4px black solid
- **Text**: Gold, 3xl size, Jeopardy font
- **Shadow**: Inset black shadow, outer gold glow
- **Hover Effect**: 
  - Scale up (1.05)
  - Gold border
  - Enhanced gold glow (30px radius)

#### Used Cells
- **Background**: Dark blue gradient (#001040 to #000820)
- **Text**: Dark blue-gray (#003366)
- **Effect**: Deep inset shadow, no hover effect

#### Daily Double
- **Animation**: Pulsing gold glow
- **Border**: Gold (#FFCC00)
- **Additional**: Shimmer brightness animation

### 3. Scoreboard

#### Container
- **Background**: Blue gradient vertical
- **Border**: 5px black
- **Shadow**: Large black shadow (30px)

#### Team Cards
- **Background**: Blue gradient diagonal
- **Border**: 3px gold
- **Text**: 
  - Team name: Gold, uppercase
  - Score: White (positive) or Red (negative), 4xl

#### Board Control Indicator
- **Background**: Semi-transparent black
- **Border**: 2px gold
- **Text**: Gold "BOARD CONTROL:", white team name
- **Animation**: Pulse effect when changed

### 4. Question Modal

#### Modal Container
- **Background**: Blue gradient diagonal
- **Border**: 6px gold
- **Shadow**: 50px gold glow
- **Animation**: Scale and fade in

#### Question Display
- **Background**: Solid blue (#060CE9)
- **Border**: 5px gold
- **Text**: White, 3xl, centered
- **Shadow**: Deep inset black, outer gold glow
- **Padding**: 2rem (32px)

#### Answer Display
- **Background**: Blue gradient
- **Border**: 5px green
- **Text**: White, 3xl, centered
- **Shadow**: Deep inset black, outer green glow

#### Daily Double Section
- **Title**: Gold, 4xl, pulsing
- **Background**: Transparent
- **Inputs**: White background, blue text
- **Buttons**: Jeopardy blue/gold theme

### 5. Buttons

#### Jeopardy Buttons (`.btn-jeopardy`)
- **Background**: Blue gradient (top to bottom)
- **Border**: 3px gold
- **Text**: Gold, uppercase, bold
- **Shadow**: Black shadow
- **Hover**:
  - Background: Gold gradient
  - Text: Dark blue
  - Transform: Translate up 2px
  - Shadow: Enhanced gold glow

### 6. Round Indicator
- **Background**: Horizontal gold gradient
  - Transparent → Gold → Gold → Transparent
- **Text**: Dark blue, uppercase, bold
- **Padding**: 12px vertical, 40px horizontal
- **Shadow**: Gold glow (20px radius)

## Special Effects

### Text Shadows
```css
/* Gold Text */
.gold-text {
    color: #FFCC00;
    text-shadow: 
        2px 2px 4px rgba(0, 0, 0, 0.8),
        0 0 10px rgba(255, 204, 0, 0.5);
}

/* White Text on Blue */
.white-text-shadow {
    text-shadow: 
        2px 2px 4px rgba(0, 0, 0, 0.9),
        0 0 10px rgba(0, 0, 0, 0.5);
}
```

### Animations

#### Pulse (Daily Double)
```css
@keyframes pulse {
    0%, 100% { 
        box-shadow: 0 0 15px rgba(255, 204, 0, 0.3);
    }
    50% { 
        box-shadow: 0 0 40px rgba(255, 204, 0, 0.9);
    }
}
```

#### Shimmer (Daily Double)
```css
@keyframes shimmer {
    0% { filter: brightness(1); }
    50% { filter: brightness(1.3); }
    100% { filter: brightness(1); }
}
```

#### Modal Appear
```css
@keyframes modalAppear {
    from { 
        opacity: 0; 
        transform: translateY(-20px) scale(0.9);
    }
    to { 
        opacity: 1; 
        transform: translateY(0) scale(1);
    }
}
```

## Responsive Design

### Desktop (Default)
- 6-column grid for categories and questions
- Large text sizes (3xl-5xl)
- Full spacing and shadows

### Tablet (md breakpoint)
- Maintains 6-column grid
- Slightly reduced spacing
- Full visual effects

### Mobile (sm breakpoint)
- Single column layout
- Reduced text sizes
- Simplified shadows
- Touch-friendly button sizes

## Accessibility Features

1. **High Contrast**: Blue/gold combination provides strong contrast
2. **Text Shadows**: Ensure readability on all backgrounds
3. **Large Text**: Minimum 1rem (16px), display text 3xl+
4. **Focus States**: All interactive elements have visible focus
5. **Keyboard Navigation**: ESC closes modals, tab navigation supported

## Implementation Notes

### CSS Classes to Use

**Layout**:
- `.jeopardy-font` - Main display font
- `.jeopardy-title` - Title styling
- `.gold-text` - Gold colored text with shadow
- `.white-text-shadow` - White text with dramatic shadow

**Components**:
- `.game-cell` - Question value cells
- `.category-cell` - Category headers
- `.used-cell` - Completed questions
- `.daily-double` - Special DD styling
- `.team-score-card` - Team display cards
- `.btn-jeopardy` - Action buttons
- `.question-display` - Question text area
- `.answer-display` - Answer reveal area

**Effects**:
- Hover states automatically apply
- Animations trigger on class changes
- Transitions smooth (0.3s ease)

## Future Enhancements

Potential additions to maintain Jeopardy aesthetic:

- [ ] Sound effects (Jeopardy theme, daily double sound)
- [ ] Animated score updates with counting effect
- [ ] Player podium graphics
- [ ] Final Jeopardy "thinking music" timer
- [ ] Winner celebration animation
- [ ] Applause/buzzer sound effects
- [ ] Historical scoreboard archiving
- [ ] Contestant name plates with lighting effects

## Credits

Design inspired by the authentic **Jeopardy!** game show, adapted for educational purposes in drug education and prevention.

**Color References**:
- Official Jeopardy blue: #060CE9
- Classic game board aesthetic
- Broadcast television quality design

---

**Version**: 2.0  
**Design Updated**: October 12, 2025  
**Theme**: Authentic Jeopardy  
**Style**: Professional Broadcast Quality
