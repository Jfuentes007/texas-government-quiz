const submitBtn = document.getElementById("submit");

    {
        question: "What does the term bicameral mean?",
        a: "Having a legislative assembly composed of two chambers or houses.",
        b: "Having a legislature that meets every two years.",
        c: "Having a legislature composed of one chamber.",
        d: "Having a legislature that meets daily.",
        correct: "a"
    },
    {
        question: "What does the term biennial mean?",
        a: "Occurring every two months.",
        b: "Occurring every year.",
        c: "Occurring every two years.",
        d: "Occurring twice a year.",
        correct: "c"
    },
    {
        question: "What is the length of a regular session of the Texas legislature?",
        a: "90 days",
        b: "140 days",
        c: "200 days",
        d: "365 days",
        correct: "b"
    },
    {
        question: "What is a local bill?",
        a: "A bill affecting the entire state.",
        b: "A bill affecting only units of local government.",
        c: "A bill granting exemptions to state law.",
        d: "A bill passed by Congress.",
        correct: "b"
    },
    {
        question: "What is a general bill?",
        a: "A bill affecting only corporations.",
        b: "A bill that applies to all people and/or property in the state.",
        c: "A bill that changes the state constitution.",
        d: "A bill proposing federal laws.",
        correct: "b"
    },
    {
        question: "What does per diem mean?",
        a: "Yearly salary for public officials.",
        b: "Daily payment to a public official engaged in state business.",
        c: "Hourly wages for state employees.",
        d: "Monthly stipend for officials.",
        correct: "b"
    },
    {
        question: "Who can call a special session of the Texas legislature?",
        a: "The Lieutenant Governor.",
        b: "The Speaker of the House.",
        c: "The Governor.",
        d: "The President.",
        correct: "c"
    },
    {
        question: "What is the role of the Lieutenant Governor in Texas?",
        a: "Chief legal advisor to the state.",
        b: "Presiding officer of the Senate.",
        c: "Head of the House of Representatives.",
        d: "State's chief tax collector.",
        correct: "b"
    },
    {
        question: "What is the primary role of the Texas Attorney General?",
        a: "Administering elections.",
        b: "Managing public lands.",
        c: "Serving as the state's chief civil lawyer.",
        d: "Presiding over the Senate.",
        correct: "c"
    },
    {
        question: "What is the Texas Supreme Court responsible for?",
        a: "Criminal appellate cases.",
        b: "Civil appellate cases.",
        c: "Both civil and criminal cases.",
        d: "Creating state laws.",
        correct: "b"
    },
    {
        question: "How many members are in the Texas House of Representatives?",
        a: "150",
        b: "200",
        c: "300",
        d: "31",
        correct: "a"
    },
    {
        question: "How many members are in the Texas Senate?",
        a: "100",
        b: "50",
        c: "31",
        d: "75",
        correct: "c"
    },
    {
        question: "What is a filibuster?",
        a: "A committee process.",
        b: "A tactic used to prevent action on legislation.",
        c: "A type of resolution.",
        d: "A type of local bill.",
        correct: "b"
    },
    {
        question: "What does a conference committee do?",
        a: "Passes bills into law.",
        b: "Investigates legal disputes.",
        c: "Reconciles differences between the House and Senate versions of a bill.",
        d: "Vetoes legislation.",
        correct: "c"
    },
    {
        question: "What is redistricting?",
        a: "Removing elected officials from office.",
        b: "Drawing new boundaries for legislative districts.",
        c: "Amending the Texas Constitution.",
        d: "Electing state representatives.",
        correct: "b"
    },
    {
        question: "What does the Sunset Advisory Commission do?",
        a: "Approves state budget allocations.",
        b: "Appoints justices to the Texas Supreme Court.",
        c: "Reviews state agencies every 12 years to recommend continuation or elimination.",
        d: "Oversees municipal court cases.",
        correct: "c"
    },
    {
        question: "What is a line-item veto?",
        a: "Vetoing the entire bill.",
        b: "Vetoing specific provisions of an appropriations bill.",
        c: "Delaying the implementation of a law.",
        d: "Allowing the legislature to override a veto.",
        correct: "b"
    },
    {
        question: "What is a biennial budget?",
        a: "A budget for two years.",
        b: "A budget revised every month.",
        c: "A budget that applies to federal programs.",
        d: "A temporary state budget.",
        correct: "a"
    },
    {
        question: "What is the Texas Railroad Commission responsible for?",
        a: "Overseeing transportation safety.",
        b: "Regulating oil and gas industries.",
        c: "Managing Texas highways.",
        d: "Administering public schools.",
        correct: "b"
    },
    {
        question: "What is the primary duty of the Land Commissioner?",
        a: "Managing state-owned lands.",
        b: "Administering elections.",
        c: "Overseeing the state budget.",
        d: "Presiding over the Senate.",
        correct: "a"
    },
    {
        question: "What is a special bill?",
        a: "A bill affecting all people in the state.",
        b: "A bill granting specific exemptions from state law.",
        c: "A bill about constitutional amendments.",
        d: "A bill passed in Congress.",
        correct: "b"
    },
    {
        question: "What is judicial impeachment?",
        a: "Dismissing a bill in committee.",
        b: "Removing a judge for misconduct.",
        c: "Assigning new judges to a case.",
        d: "Expanding judicial authority.",
        correct: "b"
    },
    {
        question: "What is a misdemeanor?",
        a: "A minor criminal offense.",
        b: "A serious criminal offense.",
        c: "A civil dispute.",
        d: "A legal settlement.",
        correct: "a"
    },
    {
        question: "What is a capital case?",
        a: "A civil trial.",
        b: "A criminal case with the death penalty as a possible punishment.",
        c: "A court hearing involving state taxes.",
        d: "A federal case.",
        correct: "b"
    },
    {
        question: "What is beyond a reasonable doubt?",
        a: "A standard of proof in civil cases.",
        b: "The legal standard in criminal cases.",
        c: "A plea bargain agreement.",
        d: "A judicial campaign fairness act.",
        correct: "b"
    },
    {
        question: "What is the merit selection system for judges?",
        a: "Judges are appointed based on party affiliation.",
        b: "Judges are selected based on qualifications by a commission.",
        c: "Judges are elected by voters.",
        d: "Judges are appointed by legislators.",
        correct: "b"
    },
    {
        question: "What is the Judicial Campaign Fairness Act?",
        a: "An act eliminating judicial elections.",
        b: "A law that limits judicial campaign contributions.",
        c: "A law giving judges more power to rule on cases.",
        d: "A process for retaining judges in office.",
        correct: "b"
    },
    {
        question: "What does en banc mean?",
        a: "An appellate hearing with all judges participating.",
        b: "A legislative process for passing a bill.",
        c: "A type of municipal court case.",
        d: "A judicial ruling on constitutional amendments.",
        correct: "a"
    },
    {
        question: "What does the Texas Education Agency (TEA) do?",
        a: "Administers the Veterans Land Program.",
        b: "Sets education policies and standards.",
        c: "Oversees public safety laws.",
        d: "Regulates oil and gas industries.",
        correct: "b"
    }
];


// Load the quiz
loadQuiz();
