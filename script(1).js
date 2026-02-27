// ============================================================
//  ANCIENT GREEK PREPOSITIONS DATA
// ============================================================
const PREPOSITIONS = [
  {
    greek: "ἀμφί",
    roman: "amphí",
    cases: ["genitive", "dative", "accusative"],
    meaning: "around, on both sides of; about, concerning",
    details: {
      genitive: "about, concerning (lit. topic)",
      dative: "around, at (position with body)",
      accusative: "around, about (motion)"
    },
    example: "ἀμφὶ τοῦ πολέμου — concerning the war",
    shortMeaning: "around, about, concerning"
  },
  {
    greek: "ἀνά",
    roman: "aná",
    cases: ["dative", "accusative"],
    meaning: "up, upon; throughout, along; at the rate of",
    details: {
      dative: "upon (rare, poetic)",
      accusative: "up along, throughout (motion or distribution)"
    },
    example: "ἀνὰ τὸν ποταμόν — up the river",
    shortMeaning: "up, throughout"
  },
  {
    greek: "ἀντί",
    roman: "antí",
    cases: ["genitive"],
    meaning: "instead of, in exchange for, in place of; opposite to",
    details: {
      genitive: "instead of, against, in return for"
    },
    example: "ἀντ' ἐκείνου — instead of him",
    shortMeaning: "instead of, in exchange for"
  },
  {
    greek: "ἀπό",
    roman: "apó",
    cases: ["genitive"],
    meaning: "from, away from; as a result of, by means of",
    details: {
      genitive: "away from (separation, origin, cause)"
    },
    example: "ἀπὸ τῆς πόλεως — away from the city",
    shortMeaning: "from, away from"
  },
  {
    greek: "διά",
    roman: "diá",
    cases: ["genitive", "accusative"],
    meaning: "through; on account of, by reason of",
    details: {
      genitive: "through (motion through space or time)",
      accusative: "because of, on account of (cause)"
    },
    example: "διὰ τῆς χώρας — through the country",
    shortMeaning: "through; because of"
  },
  {
    greek: "εἰς",
    roman: "eis",
    cases: ["accusative"],
    meaning: "into, to, towards; for the purpose of; up to",
    details: {
      accusative: "motion toward or into a place; purpose"
    },
    example: "εἰς τὴν πόλιν — into the city",
    shortMeaning: "into, towards"
  },
  {
    greek: "ἐκ / ἐξ",
    roman: "ek / ex",
    cases: ["genitive"],
    meaning: "out of, from within; of, from (origin); since (time)",
    details: {
      genitive: "out from within (interior separation); origin or cause"
    },
    example: "ἐκ τῆς οἰκίας — out of the house",
    shortMeaning: "out of, from within"
  },
  {
    greek: "ἐν",
    roman: "en",
    cases: ["dative"],
    meaning: "in, within, among; by means of; in the time of",
    details: {
      dative: "location inside; among a group; instrument (poetic)"
    },
    example: "ἐν τῇ ἀγορᾷ — in the agora",
    shortMeaning: "in, within, among"
  },
  {
    greek: "ἐπί",
    roman: "epí",
    cases: ["genitive", "dative", "accusative"],
    meaning: "upon, on, at; against, towards; in addition to",
    details: {
      genitive: "upon (contact with surface); in the time of; in the charge of",
      dative: "upon (rest); at; in addition to",
      accusative: "upon (motion); against; for the purpose of; to the extent of"
    },
    example: "ἐπὶ τῆς γῆς — upon the earth",
    shortMeaning: "upon, on, against"
  },
  {
    greek: "κατά",
    roman: "katá",
    cases: ["genitive", "accusative"],
    meaning: "down from; against; according to; throughout",
    details: {
      genitive: "down from; against (hostile)",
      accusative: "down along; throughout; according to, in accordance with"
    },
    example: "κατὰ τὸν νόμον — according to the law",
    shortMeaning: "down, according to, against"
  },
  {
    greek: "μετά",
    roman: "metá",
    cases: ["genitive", "accusative"],
    meaning: "with (in company); after (in sequence)",
    details: {
      genitive: "with, together with (accompaniment)",
      accusative: "after, next after (time or place)"
    },
    example: "μετὰ τῶν φίλων — with friends",
    shortMeaning: "with; after"
  },
  {
    greek: "παρά",
    roman: "pará",
    cases: ["genitive", "dative", "accusative"],
    meaning: "from (a person); beside, at; along, past; contrary to",
    details: {
      genitive: "from the side of (a person); from",
      dative: "beside, at the side of; in the opinion of",
      accusative: "along, past; contrary to; in comparison with"
    },
    example: "παρὰ τοῦ βασιλέως — from the king",
    shortMeaning: "from (a person); beside; contrary to"
  },
  {
    greek: "περί",
    roman: "perí",
    cases: ["genitive", "dative", "accusative"],
    meaning: "around; about, concerning; for (on behalf of)",
    details: {
      genitive: "about, concerning; for (in defense of)",
      dative: "around (poetic, position)",
      accusative: "around (motion); about, approximately"
    },
    example: "περὶ τῆς εἰρήνης — concerning peace",
    shortMeaning: "around, about, concerning"
  },
  {
    greek: "πρό",
    roman: "pró",
    cases: ["genitive"],
    meaning: "before (place or time); in front of; in defense of",
    details: {
      genitive: "before in place; before in time; in preference to"
    },
    example: "πρὸ τῆς μάχης — before the battle",
    shortMeaning: "before, in front of, in defense of"
  },
  {
    greek: "πρός",
    roman: "prós",
    cases: ["genitive", "dative", "accusative"],
    meaning: "from (source); near, at; toward, against; in addition",
    details: {
      genitive: "from the side of; in the name of",
      dative: "near, at, beside; in addition to",
      accusative: "toward (motion); against (hostile); in relation to; for the purpose of"
    },
    example: "πρὸς τὴν θάλασσαν — toward the sea",
    shortMeaning: "toward, near, against"
  },
  {
    greek: "σύν",
    roman: "sýn",
    cases: ["dative"],
    meaning: "with, together with; along with; with the help of",
    details: {
      dative: "with, together with (accompaniment, means)"
    },
    example: "σὺν τῷ στρατηγῷ — together with the general",
    shortMeaning: "with, together with"
  },
  {
    greek: "ὑπέρ",
    roman: "hypér",
    cases: ["genitive", "accusative"],
    meaning: "over, above; on behalf of; beyond, more than",
    details: {
      genitive: "on behalf of, in defense of; concerning",
      accusative: "over, above (position or motion); beyond (excess)"
    },
    example: "ὑπὲρ τῆς πατρίδος — on behalf of the fatherland",
    shortMeaning: "over, above; on behalf of"
  },
  {
    greek: "ὑπό",
    roman: "hypó",
    cases: ["genitive", "dative", "accusative"],
    meaning: "by (agent); under; gradually; at the hands of",
    details: {
      genitive: "by (agent in passive constructions); from under",
      dative: "under (position); under the power of",
      accusative: "under (motion to); at the time of; gradually"
    },
    example: "ὑπὸ τοῦ στρατηγοῦ — by the general",
    shortMeaning: "under; by (agent)"
  },
  {
    greek: "ἄχρι / μέχρι",
    roman: "áchri / méchri",
    cases: ["genitive"],
    meaning: "as far as, up to (place or time); until",
    details: {
      genitive: "as far as, up to (spatial or temporal limit)"
    },
    example: "μέχρι τῆς θαλάσσης — as far as the sea",
    shortMeaning: "as far as, until"
  },
  {
    greek: "πλήν",
    roman: "plḗn",
    cases: ["genitive"],
    meaning: "except, apart from; more than",
    details: {
      genitive: "except, apart from; besides"
    },
    example: "πλὴν τούτων — except these",
    shortMeaning: "except, apart from"
  },
  {
    greek: "ἕνεκα",
    roman: "héneka",
    cases: ["genitive"],
    meaning: "for the sake of, on account of, because of",
    details: {
      genitive: "for the sake of (purpose or cause)"
    },
    example: "τούτου ἕνεκα — for this reason",
    shortMeaning: "for the sake of"
  },
  {
    greek: "ἄνευ",
    roman: "áneu",
    cases: ["genitive"],
    meaning: "without, apart from",
    details: {
      genitive: "without the presence or aid of"
    },
    example: "ἄνευ τῶν ὅπλων — without arms",
    shortMeaning: "without"
  },
  {
    greek: "ἐναντίον",
    roman: "enantíon",
    cases: ["genitive"],
    meaning: "opposite to, before; in the presence of; contrary to",
    details: {
      genitive: "opposite, in the face of; in the judgment of"
    },
    example: "ἐναντίον πάντων — in the presence of all",
    shortMeaning: "opposite to, contrary to"
  },
  {
    greek: "εἶτα / ἔπειτα",
    roman: "eîta / épeita",
    cases: [],
    meaning: "then, next, thereafter (adverb often used prepositionally)",
    details: {},
    example: "ἔπειτα δὲ εἶπεν — and then he spoke",
    shortMeaning: "then, next, thereafter"
  }
];

// ============================================================
//  NAVIGATION
// ============================================================
const navBtns = document.querySelectorAll('.nav-btn');
const views   = document.querySelectorAll('.view');

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    navBtns.forEach(b => b.classList.remove('active'));
    views.forEach(v  => v.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('view-' + btn.dataset.view).classList.add('active');
    if (btn.dataset.view === 'quiz') initQuiz();
  });
});

// ============================================================
//  HELPER: build case tags HTML
// ============================================================
function caseTags(cases) {
  const map = { genitive: 'gen', dative: 'dat', accusative: 'acc' };
  return cases.map(c => `<span class="case-tag tag-${map[c] || 'gen'}">${c}</span>`).join('');
}

// ============================================================
//  LIST VIEW
// ============================================================
function buildList(data) {
  const grid = document.getElementById('prep-grid');
  grid.innerHTML = '';
  if (data.length === 0) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;font-style:italic;color:var(--ink-light);padding:2rem;">No prepositions match your search.</p>';
    return;
  }
  data.forEach(p => {
    const card = document.createElement('div');
    card.className = 'prep-card';
    card.innerHTML = `
      <span class="greek-word">${p.greek}</span>
      <span class="romanization">${p.roman}</span>
      <div class="meaning">${p.meaning}</div>
      <div class="cases-tags">${caseTags(p.cases)}</div>
      <div class="example"><span>e.g. </span>${p.example}</div>
    `;
    grid.appendChild(card);
  });
}

buildList(PREPOSITIONS);

// Filter
const searchInput = document.getElementById('search-input');
const caseFilter  = document.getElementById('case-filter');

function applyFilter() {
  const q = searchInput.value.toLowerCase();
  const c = caseFilter.value;
  let filtered = PREPOSITIONS;
  if (q) filtered = filtered.filter(p =>
    p.greek.includes(q) || p.roman.toLowerCase().includes(q) ||
    p.meaning.toLowerCase().includes(q)
  );
  if (c === 'multiple') {
    filtered = filtered.filter(p => p.cases.length > 1);
  } else if (c) {
    filtered = filtered.filter(p => p.cases.includes(c));
  }
  buildList(filtered);
}

searchInput.addEventListener('input', applyFilter);
caseFilter.addEventListener('change', applyFilter);

// ============================================================
//  FLASHCARD VIEW
// ============================================================
let cardIndex = 0;
const flashcard = document.getElementById('flashcard');
const cardGreek  = document.getElementById('card-greek');
const cardRoman  = document.getElementById('card-roman');
const cardMeaning    = document.getElementById('card-meaning');
const cardCasesDisp  = document.getElementById('card-cases-display');
const cardExample    = document.getElementById('card-example');
const cardCounter    = document.getElementById('card-counter');
const progressFill   = document.getElementById('progress-fill');

// Shuffle deck
const deck = [...PREPOSITIONS].sort(() => Math.random() - 0.5);

function showCard(i) {
  const p = deck[i];
  flashcard.classList.remove('flipped');
  setTimeout(() => {
    cardGreek.textContent   = p.greek;
    cardRoman.textContent   = p.roman;
    cardMeaning.textContent = p.shortMeaning;
    cardCasesDisp.textContent = p.cases.length
      ? 'Governs: ' + p.cases.join(', ')
      : 'Adverbial use';
    cardExample.textContent = p.example;
    cardCounter.textContent = `${i + 1} / ${deck.length}`;
    progressFill.style.width = `${((i + 1) / deck.length) * 100}%`;
  }, 50);
}

flashcard.addEventListener('click', () => flashcard.classList.toggle('flipped'));
document.getElementById('prev-btn').addEventListener('click', () => {
  cardIndex = (cardIndex - 1 + deck.length) % deck.length;
  showCard(cardIndex);
});
document.getElementById('next-btn').addEventListener('click', () => {
  cardIndex = (cardIndex + 1) % deck.length;
  showCard(cardIndex);
});

showCard(0);

// ============================================================
//  BY CASE VIEW
// ============================================================
function buildCaseGroups() {
  const container = document.getElementById('case-groups');
  const groups = [
    { key: 'genitive',   label: 'Genitive (Γενική)',   desc: 'Expresses possession, separation, and source', cls: 'cg-gen' },
    { key: 'dative',     label: 'Dative (Δοτική)',     desc: 'Expresses location, indirect object, and means', cls: 'cg-dat' },
    { key: 'accusative', label: 'Accusative (Αιτιατική)', desc: 'Expresses motion toward, extent, and direct object', cls: 'cg-acc' },
    { key: 'multiple',   label: 'Multiple Cases',      desc: 'Meaning changes depending on the case governed', cls: 'cg-mult' }
  ];

  groups.forEach(g => {
    let preps;
    if (g.key === 'multiple') {
      preps = PREPOSITIONS.filter(p => p.cases.length > 1);
    } else {
      preps = PREPOSITIONS.filter(p => p.cases.includes(g.key) && p.cases.length === 1);
    }
    if (preps.length === 0) return;

    const div = document.createElement('div');
    div.className = `case-group ${g.cls}`;
    div.innerHTML = `
      <div class="case-group-header">
        ${g.label}
        <span class="case-desc">${g.desc}</span>
      </div>
      <div class="case-group-body">
        ${preps.map(p => `
          <div class="cg-item">
            <span class="greek">${p.greek}</span>
            <span class="roman">${p.roman}</span>
            <span class="meaning-short">${p.shortMeaning}</span>
          </div>
        `).join('')}
      </div>
    `;
    container.appendChild(div);
  });
}

buildCaseGroups();

// ============================================================
//  QUIZ VIEW
// ============================================================
let quizScore = 0;
let quizTotal = 0;
let quizCurrent = null;
let quizAnswered = false;

function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function initQuiz() {
  quizScore = 0;
  quizTotal = 0;
  document.getElementById('quiz-score').textContent = 'Score: 0 / 0';
  document.getElementById('quiz-next').style.display = 'none';
  document.getElementById('quiz-feedback').textContent = '';
  nextQuizQuestion();
}

function nextQuizQuestion() {
  quizAnswered = false;
  document.getElementById('quiz-next').style.display = 'none';
  document.getElementById('quiz-feedback').textContent = '';

  // Pick random preposition as the question
  quizCurrent = PREPOSITIONS[Math.floor(Math.random() * PREPOSITIONS.length)];

  // Build 4 options (1 correct, 3 wrong)
  const others = PREPOSITIONS.filter(p => p.greek !== quizCurrent.greek);
  const wrongOptions = shuffleArray(others).slice(0, 3);
  const allOptions = shuffleArray([quizCurrent, ...wrongOptions]);

  // Render prompt
  document.getElementById('quiz-prompt').innerHTML = `
    <span class="q-greek">${quizCurrent.greek}</span>
    <span class="q-roman">${quizCurrent.roman}</span>
    <span class="q-cases">${quizCurrent.cases.length ? 'Governs: ' + quizCurrent.cases.join(', ') : 'Adverbial'}</span>
  `;

  // Render options
  const optContainer = document.getElementById('quiz-options');
  optContainer.innerHTML = '';
  allOptions.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt-btn';
    btn.textContent = opt.shortMeaning;
    btn.addEventListener('click', () => handleAnswer(btn, opt));
    optContainer.appendChild(btn);
  });
}

function handleAnswer(btn, chosen) {
  if (quizAnswered) return;
  quizAnswered = true;
  quizTotal++;

  const allBtns = document.querySelectorAll('.quiz-opt-btn');
  allBtns.forEach(b => { b.disabled = true; });

  if (chosen.greek === quizCurrent.greek) {
    btn.classList.add('correct');
    quizScore++;
    document.getElementById('quiz-feedback').textContent = '✓ Correct! ' + quizCurrent.meaning;
  } else {
    btn.classList.add('wrong');
    // Highlight the correct one
    allBtns.forEach(b => {
      if (b.textContent === quizCurrent.shortMeaning) b.classList.add('correct');
    });
    document.getElementById('quiz-feedback').textContent =
      `✗ The correct answer was: ${quizCurrent.shortMeaning}`;
  }

  document.getElementById('quiz-score').textContent = `Score: ${quizScore} / ${quizTotal}`;
  document.getElementById('quiz-next').style.display = 'inline-block';
}

document.getElementById('quiz-next').addEventListener('click', nextQuizQuestion);
