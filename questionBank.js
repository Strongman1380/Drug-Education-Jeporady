// Comprehensive Question Bank with Difficulty Ratings
// Each question has a difficulty rating: 1 (Easy), 2 (Medium), 3 (Hard), 4 (Very Hard), 5 (Expert)

const questionBank = {
    "Alcohol Facts": [
        // EASY (200 points)
        { difficulty: 1, question: "This is the legal drinking age in the United States.", answer: "What is 21?" },
        { difficulty: 1, question: "This percentage represents how many children live with at least one parent with substance use disorder.", answer: "What is 12.3% (or 1 in 8)?" },
        { difficulty: 1, question: "This organ processes about 90% of consumed alcohol.", answer: "What is the liver?" },
        { difficulty: 1, question: "This is the recommended number of drinks per week for moderate drinking.", answer: "What is up to 7 for women and 14 for men?" },
        { difficulty: 1, question: "This term describes someone who assists another person in maintaining destructive behavior.", answer: "What is an enabler?" },
        
        // MEDIUM (400 points)
        { difficulty: 2, question: "This blood alcohol concentration is considered legally intoxicated in most states.", answer: "What is 0.08%?" },
        { difficulty: 2, question: "This percentage of children under 18 are exposed to alcohol abuse within their families.", answer: "What is approximately 8.3 million children?" },
        { difficulty: 2, question: "Children of alcoholic parents show this multiple increase in rates of mood disorders by young adulthood.", answer: "What is nearly double (2x)?" },
        { difficulty: 2, question: "This federal agency oversees substance abuse prevention and treatment services.", answer: "What is SAMHSA (Substance Abuse and Mental Health Services Administration)?" },
        { difficulty: 2, question: "This is approximately how long it takes the body to process one standard drink.", answer: "What is one hour?" },
        
        // HARD (600-800 points)
        { difficulty: 3, question: "This term describes drinking 5 or more drinks in a row for men, or 4 or more for women.", answer: "What is binge drinking?" },
        { difficulty: 3, question: "Children of alcoholic parents face this fold-increase in risk of developing alcoholism themselves.", answer: "What is 2-9 times higher?" },
        { difficulty: 3, question: "This condition affects children exposed to alcohol prenatally, causing lifelong cognitive impairments.", answer: "What is Fetal Alcohol Spectrum Disorder (FASD)?" },
        { difficulty: 3, question: "Sons of alcoholic fathers are at this fold-risk compared to male offspring of non-alcoholic fathers.", answer: "What is four-fold (4x) risk?" },
        
        // VERY HARD (1000-1200 points)
        { difficulty: 4, question: "This metabolite is formed when cocaine and alcohol are combined, increasing cardiotoxicity.", answer: "What is cocaethylene?" },
        { difficulty: 4, question: "Adult children of addicts frequently struggle with these psychological patterns including self-judgment and people-pleasing.", answer: "What are maladaptive coping behaviors (or ACOA characteristics)?" },
        { difficulty: 4, question: "This percentage increase in hospitalization time is seen in children of substance-abusing parents.", answer: "What is 29% longer average stays?" },
        
        // EXPERT (1600-2000 points)
        { difficulty: 5, question: "Children of substance-abusing parents are this percentage more likely to require hospitalization.", answer: "What is 24% more likely?" },
        { difficulty: 5, question: "This term describes when children assume adult responsibilities prematurely in addicted households.", answer: "What is parentification (or role reversal)?" }
    ],
    
    "Drug Types & Classifications": [
        // EASY
        { difficulty: 1, question: "This class of drugs includes marijuana, cocaine, and heroin.", answer: "What are illegal drugs?" },
        { difficulty: 1, question: "These drugs slow down the central nervous system and include alcohol.", answer: "What are depressants?" },
        { difficulty: 1, question: "These drugs speed up the central nervous system and include cocaine.", answer: "What are stimulants?" },
        { difficulty: 1, question: "This agency enforces drug laws in the United States.", answer: "What is the DEA (Drug Enforcement Administration)?" },
        { difficulty: 1, question: "This synthetic opioid is 50 to 100 times stronger than morphine.", answer: "What is fentanyl?" },
        
        // MEDIUM
        { difficulty: 2, question: "These drugs alter perception and include LSD and psilocybin mushrooms.", answer: "What are hallucinogens?" },
        { difficulty: 2, question: "This class includes prescription medications like OxyContin and Vicodin that are often misused.", answer: "What are opioids?" },
        { difficulty: 2, question: "This number represents how many children were affected by methamphetamine lab incidents in 2004.", answer: "What is over 2,800 children?" },
        { difficulty: 2, question: "These synthetic drugs are now the primary drivers of fatal drug poisonings in the United States.", answer: "What are fentanyl and methamphetamine?" },
        { difficulty: 2, question: "This term describes substances designed to mimic controlled drugs while circumventing laws.", answer: "What are New Psychoactive Substances (NPS)?" },
        
        // HARD
        { difficulty: 3, question: "This percentage of children removed from home-based meth labs test positive for toxic chemicals.", answer: "What is 55%?" },
        { difficulty: 3, question: "This number of children lost a parent to drug overdose between 2011 and 2021.", answer: "What is more than 321,000 children?" },
        { difficulty: 3, question: "This estimated number of children have a parent with opioid use disorder.", answer: "What is 2.2 million children and adolescents?" },
        { difficulty: 3, question: "This Schedule classification indicates marijuana's federal legal status despite state legalization.", answer: "What is Schedule I?" },
        
        // VERY HARD
        { difficulty: 4, question: "The global drug problem affected this many people using drugs worldwide in 2022.", answer: "What is 292 million people?" },
        { difficulty: 4, question: "This represents the percentage increase in worldwide drug use over the preceding decade.", answer: "What is 20%?" },
        { difficulty: 4, question: "This primary mechanism involves opioids binding to these receptors in the brain.", answer: "What are mu-opioid receptors (MORs)?" },
        { difficulty: 4, question: "This neurotransmitter is primarily affected by stimulants, increasing activity in reward pathways.", answer: "What is dopamine (and norepinephrine)?" },
        
        // EXPERT
        { difficulty: 5, question: "This federal law classifies drugs into different categories based on abuse potential.", answer: "What is the Controlled Substances Act?" },
        { difficulty: 5, question: "This percentage of cocaine overdose deaths also involve fentanyl contamination.", answer: "What is 70%?" }
    ],
    
    "Health Effects & Consequences": [
        // EASY
        { difficulty: 1, question: "This vital organ can be permanently damaged by excessive alcohol consumption.", answer: "What is the liver?" },
        { difficulty: 1, question: "This mental health condition is commonly associated with substance abuse.", answer: "What is depression?" },
        { difficulty: 1, question: "This potentially fatal condition occurs when someone takes too much of a substance.", answer: "What is an overdose?" },
        { difficulty: 1, question: "This life-saving medication can reverse an opioid overdose.", answer: "What is naloxone (or Narcan)?" },
        { difficulty: 1, question: "This is the primary cause of death in opioid overdoses.", answer: "What is respiratory depression?" },
        
        // MEDIUM
        { difficulty: 2, question: "This cardiovascular condition can result from long-term stimulant abuse.", answer: "What is heart disease or heart attack?" },
        { difficulty: 2, question: "This brain condition involves physical dependence and compulsive drug seeking.", answer: "What is addiction?" },
        { difficulty: 2, question: "Children exposed to parental addiction experience this multiple of adverse childhood experiences.", answer: "What are multiple ACEs (Adverse Childhood Experiences)?" },
        { difficulty: 2, question: "This percentage of overdose deaths involve multiple substances, not just one drug.", answer: "What is 50%?" },
        { difficulty: 2, question: "Mixing opioids with this class of medications causes the highest risk of fatal overdose.", answer: "What are benzodiazepines (or benzos)?" },
        
        // HARD
        { difficulty: 3, question: "Children who experience abuse have this fold higher likelihood of developing substance use disorders.", answer: "What is 4.3-fold higher?" },
        { difficulty: 3, question: "This organ system is damaged by methamphetamine, causing the heart to age this many years faster.", answer: "What is 10 years faster?" },
        { difficulty: 3, question: "Prenatal opioid exposure is associated with these developmental delays evident from 6 months.", answer: "What are motor development delays?" },
        { difficulty: 3, question: "This percentage of high school seniors in California engaged in mixing multiple drugs in the past year.", answer: "What is 29%?" },
        { difficulty: 3, question: "Alcohol is involved in this percentage of all drug overdose emergency room visits.", answer: "What is 22%?" },
        
        // VERY HARD
        { difficulty: 4, question: "This condition from repeated hypoxia during non-fatal overdoses causes permanent damage.", answer: "What is brain damage (or cognitive impairment)?" },
        { difficulty: 4, question: "This percentage of 12th graders use illicit drugs according to recent surveys.", answer: "What is 6.5%?" },
        { difficulty: 4, question: "Prenatal cocaine exposure produces these deficits persisting through early adolescence.", answer: "What are language deficits (and executive function problems)?" },
        { difficulty: 4, question: "This effect occurs when stimulants mask the deadly respiratory depression of opioids.", answer: "What is delayed or unexpected overdose (when stimulant wears off)?" },
        
        // EXPERT
        { difficulty: 5, question: "This ratio represents learning disabilities and speech difficulties in children with prenatal opioid exposure.", answer: "What is 1 in 7 (compared to 1 in 10 unexposed)?" },
        { difficulty: 5, question: "This white matter deterioration from heroin use impairs these three cognitive abilities.", answer: "What are decision-making, behavior regulation, and stress responses?" }
    ],
    
    "Prevention & Protective Factors": [
        // EASY
        { difficulty: 1, question: "This simple two-letter word is the most effective way to avoid substance abuse.", answer: "What is 'No'?" },
        { difficulty: 1, question: "These people in your life can provide support and positive influence to help avoid drugs.", answer: "Who are family and friends?" },
        { difficulty: 1, question: "These healthy activities can serve as alternatives to drug use.", answer: "What are sports, hobbies, or exercise?" },
        { difficulty: 1, question: "This type of education helps people understand the risks of substance abuse.", answer: "What is drug education or prevention programs?" },
        { difficulty: 1, question: "This foundational belief provides essential motivation for change in recovery.", answer: "What is hope?" },
        
        // MEDIUM
        { difficulty: 2, question: "This coping skill helps manage stress without turning to substances.", answer: "What are healthy coping mechanisms (meditation, exercise, talking to someone)?" },
        { difficulty: 2, question: "Having strong connections with this group is the #1 protective factor against drug use.", answer: "What is family?" },
        { difficulty: 2, question: "Participating in these after-school activities reduces drug use risk by this percentage.", answer: "What is 50%?" },
        { difficulty: 2, question: "Having this type of trusted adult who isn't a parent to talk to protects youth.", answer: "What is a mentor?" },
        { difficulty: 2, question: "This SAMHSA dimension of recovery involves a stable and safe place to live.", answer: "What is Home?" },
        
        // HARD
        { difficulty: 3, question: "Teens with untreated mental illness are this multiple more likely to develop substance use disorders.", answer: "What is twice as likely (2x)?" },
        { difficulty: 3, question: "These four major dimensions are essential for a life in recovery according to SAMHSA.", answer: "What are Health, Home, Purpose, and Community?" },
        { difficulty: 3, question: "This term describes skills for handling stress and emotions without drugs.", answer: "What are coping skills?" },
        { difficulty: 3, question: "This percentage of people aged 12 or older reported misusing prescription pain relievers in 2021.", answer: "What is 3.1% (or 8.7 million individuals)?" },
        
        // VERY HARD
        { difficulty: 4, question: "These are SAMHSA's four dimensions that define a life in recovery.", answer: "What are Health, Home, Purpose, and Community?" },
        { difficulty: 4, question: "This model describes stages individuals pass through when changing behavior including precontemplation.", answer: "What is the Transtheoretical Model of Change?" },
        { difficulty: 4, question: "This unofficial sixth stage in the change model is viewed as part of the non-linear recovery process.", answer: "What is Relapse?" },
        
        // EXPERT
        { difficulty: 5, question: "These are three of SAMHSA's 10 guiding principles of recovery including person-driven and holistic.", answer: "What are Hope, Person-Driven, Many Pathways, Holistic, Peer Support, etc.?" },
        { difficulty: 5, question: "This minimum treatment duration is necessary for significant improvement according to NIDA.", answer: "What is at least three months?" }
    ],
    
    "Treatment & Recovery": [
        // EASY
        { difficulty: 1, question: "This is the first step in overcoming addiction.", answer: "What is admitting you have a problem?" },
        { difficulty: 1, question: "This process helps the body eliminate drugs and manage withdrawal symptoms.", answer: "What is detoxification or detox?" },
        { difficulty: 1, question: "This type of therapy involves talking with a counselor about addiction issues.", answer: "What is counseling or psychotherapy?" },
        { difficulty: 1, question: "These peer support groups use a 12-step program to help with recovery.", answer: "What are Alcoholics Anonymous (AA) or Narcotics Anonymous (NA)?" },
        { difficulty: 1, question: "This hotline number provides 24/7 crisis support for substance abuse.", answer: "What is 988 or 1-800-662-4357 (SAMHSA)?" },
        
        // MEDIUM
        { difficulty: 2, question: "This type of treatment allows patients to live at home while receiving care.", answer: "What is outpatient treatment?" },
        { difficulty: 2, question: "This evidence-based therapy helps identify thoughts and triggers leading to drug use.", answer: "What is Cognitive Behavioral Therapy (or CBT)?" },
        { difficulty: 2, question: "This type of support from people with lived experience has the highest satisfaction rates.", answer: "What is peer support?" },
        { difficulty: 2, question: "This government insurance for low-income families covers addiction treatment.", answer: "What is Medicaid?" },
        { difficulty: 2, question: "This philosophy prioritizes reducing negative consequences without requiring immediate abstinence.", answer: "What is harm reduction?" },
        
        // HARD
        { difficulty: 3, question: "Depression symptoms in teens drop from this percentage to 16% after successful treatment.", answer: "What is 49%?" },
        { difficulty: 3, question: "This online tool at FindTreatment.gov helps locate treatment facilities near you.", answer: "What is SAMHSA's treatment locator?" },
        { difficulty: 3, question: "This model provides clear goal of total sobriety and is foundational to 12-Step programs.", answer: "What is the abstinence-based model?" },
        { difficulty: 3, question: "NIDA established this many principles for effective addiction treatment programs.", answer: "What are several foundational principles (individualized, readily available, holistic, etc.)?" },
        
        // VERY HARD
        { difficulty: 4, question: "This combination of medication and therapy is most effective for many patients according to NIDA.", answer: "What is integrated medication and behavioral therapy?" },
        { difficulty: 4, question: "These common harm reduction strategies include naloxone and these programs preventing disease spread.", answer: "What are syringe service programs?" },
        { difficulty: 4, question: "This type of site allows medically supervised substance use to prevent fatal overdoses.", answer: "What are supervised consumption sites?" },
        
        // EXPERT
        { difficulty: 5, question: "Recovery is defined by SAMHSA as this process involving four major dimensions.", answer: "What is 'a process of change through which individuals improve health and wellness, live self-directed lives, and reach full potential'?" },
        { difficulty: 5, question: "Research shows harm reduction strategies have this effect on crime and drug use rates.", answer: "What is no increase (they do not increase crime or drug use)?" }
    ],
    
    "Legal Consequences & Social Impact": [
        // EASY
        { difficulty: 1, question: "This crime involves driving while under the influence of alcohol or drugs.", answer: "What is DUI or DWI?" },
        { difficulty: 1, question: "This legal consequence can result from drug possession and affects employment opportunities.", answer: "What is a criminal record or felony conviction?" },
        { difficulty: 1, question: "This national organization founded in 1935 uses a 12-step program to help alcoholics.", answer: "What is Alcoholics Anonymous (AA)?" },
        { difficulty: 1, question: "Living with addicted parents exposes children to these traumatic experiences.", answer: "What are Adverse Childhood Experiences (ACEs)?" },
        
        // MEDIUM
        { difficulty: 2, question: "Possession of any amount of fentanyl is this level of crime in most states.", answer: "What is a felony?" },
        { difficulty: 2, question: "A drug conviction makes you ineligible for this type of financial aid for college.", answer: "What is federal student aid (or FAFSA)?" },
        { difficulty: 2, question: "This immediate consequence can result from drugs in a group home placement.", answer: "What is removal/discharge (or placement change)?" },
        { difficulty: 2, question: "Children in addiction-affected households develop this maladaptive behavior assuming adult roles.", answer: "What is role reversal (or parentification)?" },
        
        // HARD
        { difficulty: 3, question: "Selling drugs within this distance of a school doubles criminal penalties.", answer: "What is 1,000 feet?" },
        { difficulty: 3, question: "A DUI conviction typically results in license suspension for this time period for teens.", answer: "What is one year?" },
        { difficulty: 3, question: "Children of addicted parents demonstrate these rates of school problems.", answer: "What are higher rates of absenteeism, truancy, and suspension?" },
        { difficulty: 3, question: "This behavioral pattern involves children becoming chronic people-pleasers losing their identity.", answer: "What is approval-seeking?" },
        
        // VERY HARD
        { difficulty: 4, question: "These long-term adult outcomes affect children of addicts including self-judgment and guilt.", answer: "What are maladaptive coping patterns (harsh self-judgment, depression, anxiety, people-pleasing)?" },
        { difficulty: 4, question: "Children taught to maintain family secrets develop these social difficulties.", answer: "What are trust issues and social isolation?" },
        
        // EXPERT
        { difficulty: 5, question: "This combination known as speedballing involves mixing these two drug classes.", answer: "What is cocaine and heroin (stimulant and opioid)?" },
        { difficulty: 5, question: "Adult children of addicts frequently struggle with this fear regarding their own parenting abilities.", answer: "What is fear of inadequate parenting (or repeating the cycle)?" }
    ],
    
    "Brain Science & Addiction": [
        // EASY
        { difficulty: 1, question: "This neurotransmitter in the brain is primarily affected by addictive substances.", answer: "What is dopamine?" },
        { difficulty: 1, question: "This part of the brain is responsible for pleasure and reward.", answer: "What is the reward pathway (or mesolimbic system)?" },
        { difficulty: 1, question: "This condition occurs when the body adapts to a drug requiring more to achieve the same effect.", answer: "What is tolerance?" },
        { difficulty: 1, question: "This happens when stopping drug use causes uncomfortable physical symptoms.", answer: "What is withdrawal?" },
        
        // MEDIUM
        { difficulty: 2, question: "Chronic stress from addiction affects brain regions responsible for these three functions.", answer: "What are executive function, emotional regulation, and impulse control?" },
        { difficulty: 2, question: "Cocaine works by blocking the reuptake of dopamine through this mechanism.", answer: "What is blocking the dopamine transporter?" },
        { difficulty: 2, question: "This adaptation occurs in brain pathways involving glutamate and stress hormones with chronic use.", answer: "What are neuroadaptations?" },
        { difficulty: 2, question: "This brain region affected by cocaine use impairs decision-making and self-insight.", answer: "What is the orbitofrontal cortex?" },
        
        // HARD
        { difficulty: 3, question: "Opioids work by binding to these specific receptors particularly in areas controlling pain and emotions.", answer: "What are mu-opioid receptors?" },
        { difficulty: 3, question: "This neurobiological vulnerability from chronic stress creates lasting susceptibility to mental health problems.", answer: "What are changes in brain development (particularly executive function regions)?" },
        { difficulty: 3, question: "Repeated hypoxia from overdoses causes this type of permanent neurological damage.", answer: "What is brain damage (white matter deterioration, cognitive impairment)?" },
        
        // VERY HARD
        { difficulty: 4, question: "Stimulants increase levels of these two primary neurotransmitters in the brain.", answer: "What are dopamine and norepinephrine?" },
        { difficulty: 4, question: "This cocaine-related phenomenon involves sensitization to these adverse effects while tolerance develops.", answer: "What is sensitization to anxiety and convulsions?" },
        { difficulty: 4, question: "Long-term opioid use is associated with these structural brain changes.", answer: "What is reduced gray matter?" },
        
        // EXPERT
        { difficulty: 5, question: "This pathway in the brain where dopamine accumulates is called this and drives cocaine's euphoric effects.", answer: "What is the mesolimbic reward pathway?" },
        { difficulty: 5, question: "Neuroadaptations in these brain pathways involving glutamate impair this cognitive function.", answer: "What is decision-making and behavioral control (orbitofrontal cortex)?" }
    ],
    
    "Myths & Facts": [
        // EASY
        { difficulty: 1, question: "TRUE OR FALSE: Addiction is a choice, not a disease.", answer: "What is FALSE? (Addiction is a chronic brain disease)" },
        { difficulty: 1, question: "TRUE OR FALSE: You can tell if drugs are laced with fentanyl by looking at them.", answer: "What is FALSE? (You cannot detect fentanyl without test strips)" },
        { difficulty: 1, question: "TRUE OR FALSE: Prescription pills from friends are safer than street drugs.", answer: "What is FALSE? (Many prescription pills are counterfeit)" },
        { difficulty: 1, question: "TRUE OR FALSE: Most teens are using drugs regularly.", answer: "What is FALSE? (Only 6.5% of 12th graders use illicit drugs)" },
        
        // MEDIUM
        { difficulty: 2, question: "TRUE OR FALSE: Using drugs once or twice won't hurt you.", answer: "What is FALSE? (One use can be fatal with fentanyl)" },
        { difficulty: 2, question: "TRUE OR FALSE: Addiction is a chronic brain disease, not a character flaw.", answer: "What is TRUE?" },
        { difficulty: 2, question: "TRUE OR FALSE: Naloxone only works on heroin overdoses, not fentanyl.", answer: "What is FALSE? (Naloxone works on all opioids, though fentanyl may require more doses)" },
        { difficulty: 2, question: "TRUE OR FALSE: Relapse means treatment failed.", answer: "What is FALSE? (Relapse is a common part of recovery that signals need to adjust the plan)" },
        
        // HARD
        { difficulty: 3, question: "TRUE OR FALSE: Genetic factors play no role in addiction risk.", answer: "What is FALSE? (Biological children of alcoholic parents have 2-9 fold increased risk even when adopted)" },
        { difficulty: 3, question: "TRUE OR FALSE: Harm reduction strategies increase crime and drug use in communities.", answer: "What is FALSE? (They do not increase crime or drug use)" },
        { difficulty: 3, question: "TRUE OR FALSE: Medication-Assisted Treatment (MAT) is just replacing one drug with another.", answer: "What is FALSE? (MAT is evidence-based treatment that manages cravings and withdrawal safely)" },
        
        // VERY HARD
        { difficulty: 4, question: "TRUE OR FALSE: Environmental factors are more important than genetics in substance use risk.", answer: "What is BOTH? (Both genetic and environmental factors are equally crucial)" },
        { difficulty: 4, question: "TRUE OR FALSE: Abstinence-based and harm reduction models are mutually exclusive.", answer: "What is FALSE? (They can be integrated as different points on a continuum of care)" },
        
        // EXPERT
        { difficulty: 5, question: "TRUE OR FALSE: Parental attitudes toward drugs may be as important as actual parental use.", answer: "What is TRUE? (Adolescents who perceive parental permissiveness are more likely to use substances)" }
    ],
    
    "Statistics & Research": [
        // EASY
        { difficulty: 1, question: "This percentage of children (1 in this number) live with at least one parent with substance use disorder.", answer: "What is 1 in 8 (or 12.3%)?" },
        { difficulty: 1, question: "This many people worldwide were using drugs in 2022 according to UNODC.", answer: "What is 292 million people?" },
        
        // MEDIUM
        { difficulty: 2, question: "This percentage increase in worldwide drug use occurred over the preceding decade.", answer: "What is 20%?" },
        { difficulty: 2, question: "This many children were affected by methamphetamine lab incidents in 2004.", answer: "What is over 2,800 children?" },
        { difficulty: 2, question: "This many children lost a parent to drug overdose between 2011 and 2021.", answer: "What is more than 321,000 children?" },
        { difficulty: 2, question: "This estimated number of children have a parent with opioid use disorder.", answer: "What is 2.2 million children and adolescents?" },
        
        // HARD
        { difficulty: 3, question: "Children of substance-abusing parents are this percentage more likely to require hospitalization.", answer: "What is 24% more likely?" },
        { difficulty: 3, question: "These children have this percentage longer average hospital stays.", answer: "What is 29% longer?" },
        { difficulty: 3, question: "This percentage of children removed from meth labs test positive for toxic chemicals.", answer: "What is 55%?" },
        { difficulty: 3, question: "This percentage of cocaine overdose deaths involve fentanyl contamination.", answer: "What is 70%?" },
        
        // VERY HARD
        { difficulty: 4, question: "This percentage of all overdose deaths involve multiple substances.", answer: "What is 50%?" },
        { difficulty: 4, question: "Alcohol is involved in this percentage of drug overdose emergency room visits.", answer: "What is 22%?" },
        { difficulty: 4, question: "This percentage of California high school seniors mixed multiple drugs in the past year.", answer: "What is 29%?" },
        
        // EXPERT
        { difficulty: 5, question: "Recent studies indicate this percentage or number of children may have parents with substance use disorder.", answer: "What is 25% or nearly 19 million children?" },
        { difficulty: 5, question: "Children who experience abuse have this fold higher likelihood of developing substance use disorders.", answer: "What is 4.3-fold higher?" }
    ]
};

// Function to get questions by difficulty level for each round
function getQuestionsByDifficulty(category, difficulty) {
    if (!questionBank[category]) return [];
    return questionBank[category].filter(q => q.difficulty === difficulty);
}

// Function to randomly select questions for a game ensuring variety
function generateGameQuestions(round = 1) {
    const categories = Object.keys(questionBank);
    const gameQuestions = {};
    
    // Determine point values based on round
    const pointValues = round === 1 
        ? [200, 400, 600, 800, 1000] 
        : [400, 800, 1200, 1600, 2000];
    
    // Difficulty mapping: point value to difficulty level
    const difficultyMap = {
        200: 1,   // Easy
        400: 2,   // Medium  
        600: 3,   // Hard
        800: 3,   // Hard
        1000: 4,  // Very Hard
        1200: 3,  // Hard
        1600: 4,  // Very Hard
        2000: 5   // Expert
    };
    
    categories.forEach(category => {
        gameQuestions[category] = [];
        
        pointValues.forEach((points, index) => {
            const difficulty = difficultyMap[points];
            const availableQuestions = getQuestionsByDifficulty(category, difficulty);
            
            if (availableQuestions.length > 0) {
                // Randomly select a question from available options
                const randomIndex = Math.floor(Math.random() * availableQuestions.length);
                const selectedQuestion = availableQuestions[randomIndex];
                
                // Randomly assign some questions as Daily Doubles (1-2 per round)
                const isDailyDouble = Math.random() < 0.05; // 5% chance
                
                gameQuestions[category].push({
                    points: points,
                    question: selectedQuestion.question,
                    answer: selectedQuestion.answer,
                    dailyDouble: isDailyDouble
                });
            } else {
                // Fallback if no questions at that difficulty
                gameQuestions[category].push({
                    points: points,
                    question: `Question for ${points} points in ${category}`,
                    answer: "Answer needed",
                    dailyDouble: false
                });
            }
        });
    });
    
    // Ensure we have exactly 2 Daily Doubles per round
    ensureTwoDailyDoubles(gameQuestions);
    
    return gameQuestions;
}

// Helper function to ensure exactly 2 Daily Doubles per round
function ensureTwoDailyDoubles(gameQuestions) {
    const categories = Object.keys(gameQuestions);
    let dailyDoubleCount = 0;
    
    // Count existing Daily Doubles
    categories.forEach(category => {
        gameQuestions[category].forEach(q => {
            if (q.dailyDouble) dailyDoubleCount++;
        });
    });
    
    // Remove excess Daily Doubles
    while (dailyDoubleCount > 2) {
        const randomCat = categories[Math.floor(Math.random() * categories.length)];
        const ddQuestion = gameQuestions[randomCat].find(q => q.dailyDouble);
        if (ddQuestion) {
            ddQuestion.dailyDouble = false;
            dailyDoubleCount--;
        }
    }
    
    // Add Daily Doubles if needed
    while (dailyDoubleCount < 2) {
        const randomCat = categories[Math.floor(Math.random() * categories.length)];
        const randomQuestionIndex = Math.floor(Math.random() * gameQuestions[randomCat].length);
        if (!gameQuestions[randomCat][randomQuestionIndex].dailyDouble) {
            gameQuestions[randomCat][randomQuestionIndex].dailyDouble = true;
            dailyDoubleCount++;
        }
    }
}

// Export functions for use in game
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        questionBank,
        getQuestionsByDifficulty,
        generateGameQuestions
    };
}
