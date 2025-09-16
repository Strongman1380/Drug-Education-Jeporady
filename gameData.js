// Drug Education Jeopardy Game Data
const gameData = {
    round1: {
        categories: [
            "Alcohol Facts",
            "Drug Types",
            "Health Effects",
            "Prevention",
            "Treatment",
            "Legal Issues"
        ],
        questions: {
            "Alcohol Facts": [
                {
                    points: 200,
                    question: "This is the legal drinking age in the United States.",
                    answer: "What is 21?",
                    dailyDouble: false
                },
                {
                    points: 400,
                    question: "This blood alcohol concentration is considered legally intoxicated in most states.",
                    answer: "What is 0.08%?",
                    dailyDouble: false
                },
                {
                    points: 600,
                    question: "This organ processes about 90% of consumed alcohol.",
                    answer: "What is the liver?",
                    dailyDouble: true
                },
                {
                    points: 800,
                    question: "This term describes drinking 5 or more drinks in a row for men, or 4 or more for women.",
                    answer: "What is binge drinking?",
                    dailyDouble: false
                },
                {
                    points: 1000,
                    question: "This is approximately how long it takes the body to process one standard drink.",
                    answer: "What is one hour?",
                    dailyDouble: false
                }
            ],
            "Drug Types": [
                {
                    points: 200,
                    question: "This class of drugs includes marijuana, cocaine, and heroin.",
                    answer: "What are illegal drugs?",
                    dailyDouble: false
                },
                {
                    points: 400,
                    question: "These drugs slow down the central nervous system and include alcohol and benzodiazepines.",
                    answer: "What are depressants?",
                    dailyDouble: false
                },
                {
                    points: 600,
                    question: "These drugs speed up the central nervous system and include cocaine and methamphetamine.",
                    answer: "What are stimulants?",
                    dailyDouble: false
                },
                {
                    points: 800,
                    question: "These drugs alter perception and include LSD and psilocybin mushrooms.",
                    answer: "What are hallucinogens?",
                    dailyDouble: false
                },
                {
                    points: 1000,
                    question: "This class includes prescription medications like OxyContin and Vicodin that are often misused.",
                    answer: "What are opioids?",
                    dailyDouble: false
                }
            ],
            "Health Effects": [
                {
                    points: 200,
                    question: "This vital organ can be permanently damaged by excessive alcohol consumption.",
                    answer: "What is the liver?",
                    dailyDouble: false
                },
                {
                    points: 400,
                    question: "This mental health condition is commonly associated with substance abuse.",
                    answer: "What is depression?",
                    dailyDouble: false
                },
                {
                    points: 600,
                    question: "This cardiovascular condition can result from long-term stimulant abuse.",
                    answer: "What is heart disease or heart attack?",
                    dailyDouble: false
                },
                {
                    points: 800,
                    question: "This brain condition involves physical dependence and compulsive drug seeking.",
                    answer: "What is addiction?",
                    dailyDouble: false
                },
                {
                    points: 1000,
                    question: "This potentially fatal condition occurs when someone takes too much of a substance.",
                    answer: "What is an overdose?",
                    dailyDouble: true
                }
            ],
            "Prevention": [
                {
                    points: 200,
                    question: "This simple two-letter word is the most effective way to avoid substance abuse.",
                    answer: "What is 'No'?",
                    dailyDouble: false
                },
                {
                    points: 400,
                    question: "These people in your life can provide support and positive influence to help avoid drugs.",
                    answer: "Who are family and friends?",
                    dailyDouble: false
                },
                {
                    points: 600,
                    question: "These healthy activities can serve as alternatives to drug use.",
                    answer: "What are sports, hobbies, or exercise?",
                    dailyDouble: false
                },
                {
                    points: 800,
                    question: "This type of education helps people understand the risks of substance abuse.",
                    answer: "What is drug education or prevention programs?",
                    dailyDouble: false
                },
                {
                    points: 1000,
                    question: "This coping skill helps manage stress without turning to substances.",
                    answer: "What are healthy coping mechanisms (meditation, exercise, talking to someone)?",
                    dailyDouble: false
                }
            ],
            "Treatment": [
                {
                    points: 200,
                    question: "This is the first step in overcoming addiction.",
                    answer: "What is admitting you have a problem?",
                    dailyDouble: false
                },
                {
                    points: 400,
                    question: "This process helps the body eliminate drugs and manage withdrawal symptoms.",
                    answer: "What is detoxification or detox?",
                    dailyDouble: false
                },
                {
                    points: 600,
                    question: "This type of therapy involves talking with a counselor about addiction issues.",
                    answer: "What is counseling or psychotherapy?",
                    dailyDouble: false
                },
                {
                    points: 800,
                    question: "These peer support groups use a 12-step program to help with recovery.",
                    answer: "What are Alcoholics Anonymous (AA) or Narcotics Anonymous (NA)?",
                    dailyDouble: false
                },
                {
                    points: 1000,
                    question: "This type of treatment allows patients to live at home while receiving care.",
                    answer: "What is outpatient treatment?",
                    dailyDouble: false
                }
            ],
            "Legal Issues": [
                {
                    points: 200,
                    question: "This government agency enforces drug laws in the United States.",
                    answer: "What is the DEA (Drug Enforcement Administration)?",
                    dailyDouble: false
                },
                {
                    points: 400,
                    question: "This crime involves driving while under the influence of alcohol or drugs.",
                    answer: "What is DUI or DWI?",
                    dailyDouble: false
                },
                {
                    points: 600,
                    question: "This federal law classifies drugs into different categories based on their potential for abuse.",
                    answer: "What is the Controlled Substances Act?",
                    dailyDouble: false
                },
                {
                    points: 800,
                    question: "This Schedule I drug is still illegal at the federal level despite state legalization efforts.",
                    answer: "What is marijuana?",
                    dailyDouble: false
                },
                {
                    points: 1000,
                    question: "This legal consequence can result from drug possession and affects employment opportunities.",
                    answer: "What is a criminal record or felony conviction?",
                    dailyDouble: false
                }
            ]
        }
    },
    round2: {
        categories: [
            "Deadly Mixes",
            "Myth Busters",
            "Body Count",
            "Getting Help",
            "Legal Troubles",
            "Protective Powers"
        ],
        questions: {
            "Deadly Mixes": [
                {
                    points: 400,
                    question: "This percentage of all overdose deaths involve multiple substances, not just one drug.",
                    answer: "What is 50%?",
                    dailyDouble: false
                },
                {
                    points: 800,
                    question: "Mixing opioids with this class of 'downer' medications like Xanax causes the highest risk of fatal overdose.",
                    answer: "What are benzodiazepines (or benzos)?",
                    dailyDouble: false
                },
                {
                    points: 1200,
                    question: "Stimulants can mask this deadly effect of opioids, causing overdose when the upper wears off.",
                    answer: "What is respiratory depression (or stopped breathing)?",
                    dailyDouble: true
                },
                {
                    points: 1600,
                    question: "This percentage of California high school seniors engaged in mixing multiple drugs in the past year.",
                    answer: "What is 29%?",
                    dailyDouble: false
                },
                {
                    points: 2000,
                    question: "Alcohol is involved in this percentage of all drug overdose emergency room visits.",
                    answer: "What is 22%?",
                    dailyDouble: false
                }
            ],
            "Myth Busters": [
                {
                    points: 400,
                    question: "TRUE OR FALSE: You can tell if drugs are laced with fentanyl by looking at, tasting, or smelling them.",
                    answer: "What is FALSE? (You cannot detect fentanyl without test strips)",
                    dailyDouble: false
                },
                {
                    points: 800,
                    question: "TRUE OR FALSE: Prescription pills from friends are safer than street drugs.",
                    answer: "What is FALSE? (Many prescription pills are counterfeit)",
                    dailyDouble: false
                },
                {
                    points: 1200,
                    question: "TRUE OR FALSE: Addiction is a chronic brain disease, not a character flaw or choice.",
                    answer: "What is TRUE?",
                    dailyDouble: false
                },
                {
                    points: 1600,
                    question: "TRUE OR FALSE: Most teens are using drugs regularly.",
                    answer: "What is FALSE? (Only 6.5% of 12th graders use illicit drugs)",
                    dailyDouble: false
                },
                {
                    points: 2000,
                    question: "TRUE OR FALSE: Using drugs once or twice won't hurt you.",
                    answer: "What is FALSE? (One use can be fatal with fentanyl)",
                    dailyDouble: false
                }
            ],
            "Body Count": [
                {
                    points: 400,
                    question: "Meth use causes this organ, your body's pump, to age 10 years faster than normal.",
                    answer: "What is the heart?",
                    dailyDouble: false
                },
                {
                    points: 800,
                    question: "Cocaine is called 'the perfect heart attack drug' because it damages this body system.",
                    answer: "What is the cardiovascular system?",
                    dailyDouble: false
                },
                {
                    points: 1200,
                    question: "Inhaling smoke from any drug damages these organs that help you breathe.",
                    answer: "What are the lungs?",
                    dailyDouble: false
                },
                {
                    points: 1600,
                    question: "Chronic drug use damages this organ that filters toxins, leading to cirrhosis and failure.",
                    answer: "What is the liver?",
                    dailyDouble: false
                },
                {
                    points: 2000,
                    question: "This percentage of cocaine overdose deaths also involve fentanyl contamination.",
                    answer: "What is 70%?",
                    dailyDouble: true
                }
            ],
            "Getting Help": [
                {
                    points: 400,
                    question: "Most insurance plans, including this government insurance for low-income families, cover addiction treatment.",
                    answer: "What is Medicaid?",
                    dailyDouble: false
                },
                {
                    points: 800,
                    question: "This evidence-based therapy helps identify thoughts and triggers that lead to drug use.",
                    answer: "What is Cognitive Behavioral Therapy (or CBT)?",
                    dailyDouble: false
                },
                {
                    points: 1200,
                    question: "This type of support from people with lived experience of recovery has the highest satisfaction rates.",
                    answer: "What is peer support?",
                    dailyDouble: false
                },
                {
                    points: 1600,
                    question: "Depression symptoms in teens drop from 49% to this percentage after successful treatment.",
                    answer: "What is 16%?",
                    dailyDouble: false
                },
                {
                    points: 2000,
                    question: "This online tool at FindTreatment.gov helps locate treatment facilities near you.",
                    answer: "What is SAMHSA's treatment locator?",
                    dailyDouble: false
                }
            ],
            "Legal Troubles": [
                {
                    points: 400,
                    question: "Possession of any amount of fentanyl is this level of crime in most states.",
                    answer: "What is a felony?",
                    dailyDouble: false
                },
                {
                    points: 800,
                    question: "A drug conviction makes you ineligible for this type of financial aid for college.",
                    answer: "What is federal student aid (or FAFSA)?",
                    dailyDouble: false
                },
                {
                    points: 1200,
                    question: "Selling drugs within 1,000 feet of this location doubles the criminal penalties.",
                    answer: "What is a school (or school zone)?",
                    dailyDouble: false
                },
                {
                    points: 1600,
                    question: "A DUI conviction typically results in license suspension for this minimum time period for teens.",
                    answer: "What is one year?",
                    dailyDouble: false
                },
                {
                    points: 2000,
                    question: "Being caught with drugs in a group home can result in this immediate consequence.",
                    answer: "What is removal/discharge (or placement change)?",
                    dailyDouble: false
                }
            ],
            "Protective Powers": [
                {
                    points: 400,
                    question: "Having strong connections with this group is the #1 protective factor against drug use.",
                    answer: "What is family?",
                    dailyDouble: false
                },
                {
                    points: 800,
                    question: "Participating in these after-school activities reduces drug use risk by 50%.",
                    answer: "What are sports or extracurriculars?",
                    dailyDouble: false
                },
                {
                    points: 1200,
                    question: "Having a trusted adult who isn't a parent to talk to is called this.",
                    answer: "What is a mentor?",
                    dailyDouble: false
                },
                {
                    points: 1600,
                    question: "Teens with untreated this are twice as likely to develop substance use disorders.",
                    answer: "What is depression (or mental illness)?",
                    dailyDouble: true
                },
                {
                    points: 2000,
                    question: "Learning these skills for handling stress and emotions without drugs is called this.",
                    answer: "What are coping skills?",
                    dailyDouble: false
                }
            ]
        }
    },
    finalJeopardy: {
        category: "Recovery and Hope",
        question: "This national organization, founded in 1935, has helped millions of people recover from alcoholism using a 12-step program and the principle that alcoholics can help other alcoholics achieve sobriety.",
        answer: "What is Alcoholics Anonymous (AA)?"
    }
};