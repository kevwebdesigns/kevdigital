const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.3 x 7.5
pres.author = "World Religions";
pres.title = "Introduction to the Study of the World's Religions";

// ---- palette ----
const NAVY = "1E2761";
const NAVY_DK = "141A44";
const TERRA = "BF5637";
const GOLD = "C69A3E";
const TEAL = "1C7293";
const PLUM = "6B4A9E";
const INK = "20242E";
const MUTED = "5B6274";
const CARD = "F0F2F8";
const WHITE = "FFFFFF";

const H = "Cambria";
const B = "Calibri";

const STUDENT = "[Your First and Last Name]";
const PARTNER = "[Partner's First and Last Name — if applicable]";

// ---- helpers ----
function shadow() {
  return { type: "outer", angle: 90, blur: 10, offset: 2, color: "9AA1B5", opacity: 0.3 };
}

function card(slide, x, y, w, h, fill) {
  slide.addShape(pres.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.06,
    fill: { color: fill || CARD },
    line: { color: fill || CARD, width: 0 },
    shadow: shadow(),
  });
}

// the repeated motif: a filled circle holding a numeral or letter
function badge(slide, x, y, label, fill, size) {
  const d = size || 0.62;
  slide.addShape(pres.ShapeType.ellipse, {
    x, y, w: d, h: d,
    fill: { color: fill || TERRA },
    line: { color: fill || TERRA, width: 0 },
  });
  slide.addText(label, {
    x, y, w: d, h: d,
    align: "center", valign: "middle",
    fontFace: H, fontSize: d > 0.7 ? 20 : 16, bold: true, color: WHITE, margin: 0,
  });
}

function titleSlide(slide, text, sub) {
  slide.addText(text, {
    x: 0.7, y: 0.4, w: 12.0, h: 0.72,
    fontFace: H, fontSize: 28, bold: true, color: NAVY, margin: 0, valign: "middle",
  });
  if (sub) {
    slide.addText(sub, {
      x: 0.7, y: 1.14, w: 12.0, h: 0.34,
      fontFace: B, fontSize: 13.5, italic: true, color: MUTED, margin: 0, valign: "middle",
    });
  }
}

function footer(slide, text) {
  slide.addText(text, {
    x: 0.7, y: 6.92, w: 11.9, h: 0.3,
    fontFace: B, fontSize: 10, color: MUTED, margin: 0,
  });
}

function darkBg(slide) {
  slide.background = { color: NAVY };
}

// ============================================================
// 1 — TITLE
// ============================================================
{
  const s = pres.addSlide();
  darkBg(s);
  s.addShape(pres.ShapeType.ellipse, {
    x: 10.2, y: -1.5, w: 5.2, h: 5.2,
    fill: { color: NAVY_DK }, line: { color: NAVY_DK, width: 0 },
  });
  s.addShape(pres.ShapeType.ellipse, {
    x: -1.4, y: 4.6, w: 4.2, h: 4.2,
    fill: { color: NAVY_DK }, line: { color: NAVY_DK, width: 0 },
  });

  badge(s, 0.9, 0.95, "1", TERRA, 0.8);

  s.addText("Introduction to the Study\nof the World's Religions", {
    x: 0.9, y: 2.0, w: 9.6, h: 1.9,
    fontFace: H, fontSize: 44, bold: true, color: WHITE, lineSpacingMultiple: 1.05, margin: 0,
  });
  s.addText("Exploring the Religions of Our World  ·  Chapter 1: Beginning the Journey", {
    x: 0.9, y: 4.0, w: 9.6, h: 0.4,
    fontFace: B, fontSize: 15, italic: true, color: "C7CDE4", margin: 0,
  });

  s.addText(
    [
      { text: STUDENT, options: { fontSize: 20, bold: true, color: WHITE, breakLine: true } },
      { text: PARTNER, options: { fontSize: 13, color: "AFB7D4", italic: true } },
    ],
    { x: 0.9, y: 5.1, w: 9.6, h: 1.0, fontFace: B, margin: 0 }
  );
  s.addText("World Religions  ·  Due Thursday, August 20", {
    x: 0.9, y: 6.25, w: 9.6, h: 0.35,
    fontFace: B, fontSize: 12, color: GOLD, margin: 0,
  });

  s.addNotes(
    "Title slide. Assignment: Introduction to the Study of the World's Religions. " +
    "Replace the bracketed placeholder with your first and last name (and your partner's name if you worked with one). " +
    "All content in Part 2 comes from Chapter 1, 'Beginning the Journey,' of Exploring the Religions of Our World (Ave Maria Press, 3rd ed.)."
  );
}

// ============================================================
// 2 — PART 1 DIVIDER
// ============================================================
{
  const s = pres.addSlide();
  darkBg(s);
  s.addShape(pres.ShapeType.ellipse, {
    x: 9.9, y: 3.4, w: 5.6, h: 5.6,
    fill: { color: NAVY_DK }, line: { color: NAVY_DK, width: 0 },
  });
  s.addText("PART ONE", {
    x: 1.0, y: 2.25, w: 8.6, h: 0.4,
    fontFace: B, fontSize: 15, bold: true, color: GOLD, charSpacing: 4, margin: 0,
  });
  s.addText("Similarities with Christianity", {
    x: 1.0, y: 2.75, w: 9.2, h: 1.0,
    fontFace: H, fontSize: 40, bold: true, color: WHITE, margin: 0,
  });
  s.addText(
    "One particular similarity between Christianity and each of four religious traditions — " +
    "drawn from central beliefs and practices, sacred scripture, sacred time, and sacred places.",
    { x: 1.0, y: 3.95, w: 8.4, h: 0.9, fontFace: B, fontSize: 15, color: "C7CDE4", margin: 0 }
  );
  s.addNotes(
    "Part 1 asks for ONE particular similarity per pair. Each of the next four slides names the similarity, " +
    "explains it, and gives concrete evidence on both sides of the pair."
  );
}

// ============================================================
// 3-6 — PAIRINGS
// ============================================================
const pairings = [
  {
    num: "1",
    a: "CHRISTIANITY",
    b: "JUDAISM",
    accent: TEAL,
    headline: "They share the same sacred scriptures and sacred history.",
    body:
      "Christianity grew directly out of Judaism, so the two traditions hold the same set of sacred stories as their own. " +
      "The Hebrew scriptures that Jews call the Tanakh are the same books Christians read as the Old Testament, and both " +
      "worship the one God who acted in that history.",
    evidence: [
      "Chapter 1 notes that the story of the Jewish people includes creation stories plus the sacred history of the patriarchs and prophets — the very history Christians claim as their own.",
      "Both are monotheistic: the Sh'ma is Judaism's one formal doctrine, and the Apostles' Creed opens with belief in one God, the Father almighty.",
      "Both set aside a weekly day for communal worship — Saturday for Jews, Sunday for Christians.",
    ],
  },
  {
    num: "2",
    a: "CHRISTIANITY",
    b: "ISLAM",
    accent: TERRA,
    headline: "Both keep an annual season of fasting for spiritual renewal.",
    body:
      "Chapter 1 lists Lent and Ramadan side by side as annual times of fasting for spiritual renewal and growth. " +
      "In both traditions the fast is a sacred time: believers give up food and comforts for a set season in order to " +
      "pray more, repent, give to the poor, and return to God with a renewed heart.",
    evidence: [
      "Christians fast and give alms through the forty days of Lent; Muslims fast from dawn to sunset for the month of Ramadan.",
      "Both are monotheistic traditions that trace their faith back to Abraham, and both hold a sacred scripture believed to come from God — the Bible and the Qur'an.",
      "Both honor Jesus, though differently: Christians profess him as Son of God and Savior, Muslims revere him as one of God's prophets.",
    ],
  },
  {
    num: "3",
    a: "CHRISTIANITY",
    b: "HINDUISM",
    accent: GOLD,
    headline: "Both treat rivers in nature as sacred places for pilgrimage.",
    body:
      "Chapter 1 pairs these two traditions directly: \"The Jordan River for Christians and the Ganges River for Hindus come to mind\" " +
      "as places in nature that a religious tradition calls sacred. In both traditions believers travel to the water and use it " +
      "in ritual washing tied to purification and new life.",
    evidence: [
      "Christians revere the Jordan River as the place of Jesus' baptism; Hindu devotees bathe in the Ganges at pilgrimage sites such as the Kumbh Mela Festival to wash away sin.",
      "Both make pilgrimage a communal practice, and both build sacred spaces — churches for Christians, temples for Hindus.",
      "Both preserve their sacred stories in written sacred scripture: the Holy Bible, and the Upanishads and Bhagavad Gita.",
    ],
  },
  {
    num: "4",
    a: "CHRISTIANITY",
    b: "BUDDHISM",
    accent: PLUM,
    headline: "Both state their central beliefs in a clearly formulated doctrine.",
    body:
      "Chapter 1 observes that \"Buddhism and Christianity have well-formulated doctrines.\" Where many traditions " +
      "communicate belief mainly through behavior, these two put their core truths into a fixed, teachable statement " +
      "that every adherent can learn and repeat.",
    evidence: [
      "The Apostles' Creed is the formal statement of Christian beliefs; the Four Noble Truths and the Noble Eightfold Path are clearly delineated Buddhist doctrines.",
      "Both traditions grew from the life and teaching of a founding figure — Jesus of Nazareth and the Buddha.",
      "Both mark that founder with a festival in sacred time: Christmas and Easter for Christians, Bodhi Day for Buddhists.",
    ],
  },
];

pairings.forEach((p) => {
  const s = pres.addSlide();
  s.background = { color: WHITE };

  // left panel: the pair
  s.addShape(pres.ShapeType.roundRect, {
    x: 0.6, y: 0.6, w: 3.85, h: 5.95, rectRadius: 0.05,
    fill: { color: NAVY }, line: { color: NAVY, width: 0 }, shadow: shadow(),
  });
  badge(s, 1.05, 1.05, p.num, p.accent, 0.72);
  s.addText(
    [
      { text: p.a, options: { fontSize: 22, bold: true, color: WHITE, breakLine: true } },
      { text: "and", options: { fontSize: 15, italic: true, color: GOLD, breakLine: true } },
      { text: p.b, options: { fontSize: 22, bold: true, color: WHITE } },
    ],
    { x: 1.05, y: 2.15, w: 3.0, h: 2.1, fontFace: H, margin: 0, lineSpacingMultiple: 1.25 }
  );
  s.addText("One particular similarity", {
    x: 1.05, y: 5.55, w: 3.0, h: 0.35,
    fontFace: B, fontSize: 11, color: "AFB7D4", charSpacing: 1.5, margin: 0,
  });

  // right: the similarity
  s.addText(p.headline, {
    x: 4.85, y: 0.72, w: 7.85, h: 1.05,
    fontFace: H, fontSize: 24, bold: true, color: p.accent === GOLD ? "9A7420" : p.accent,
    margin: 0, valign: "top", lineSpacingMultiple: 1.0,
  });
  s.addText(p.body, {
    x: 4.85, y: 1.92, w: 7.85, h: 1.5,
    fontFace: B, fontSize: 14.5, color: INK, margin: 0, lineSpacingMultiple: 1.12, valign: "top",
  });

  card(s, 4.85, 3.55, 7.85, 3.0, CARD);
  s.addText("EVIDENCE FROM THE TEXTBOOK AND THE TRADITIONS", {
    x: 5.15, y: 3.75, w: 7.3, h: 0.3,
    fontFace: B, fontSize: 10.5, bold: true, color: MUTED, charSpacing: 1, margin: 0,
  });
  s.addText(
    p.evidence.map((t, i) => ({
      text: t,
      options: { bullet: true, breakLine: i !== p.evidence.length - 1 },
    })),
    {
      x: 5.15, y: 4.08, w: 7.3, h: 2.3,
      fontFace: B, fontSize: 12.5, color: INK, margin: 0,
      paraSpaceAfter: 7, lineSpacingMultiple: 1.06, valign: "top",
    }
  );

  s.addNotes(
    `Part 1, pair ${p.num}: ${p.a} and ${p.b}. The similarity: ${p.headline} ` +
    "Say the similarity in one sentence, then give one or two pieces of evidence from the list."
  );
});

// ============================================================
// 7 — PART 2 DIVIDER
// ============================================================
{
  const s = pres.addSlide();
  darkBg(s);
  s.addShape(pres.ShapeType.ellipse, {
    x: -2.0, y: -2.2, w: 6.0, h: 6.0,
    fill: { color: NAVY_DK }, line: { color: NAVY_DK, width: 0 },
  });
  s.addText("PART TWO", {
    x: 1.0, y: 2.25, w: 8.6, h: 0.4,
    fontFace: B, fontSize: 15, bold: true, color: GOLD, charSpacing: 4, margin: 0,
  });
  s.addText("Information about the Study\nof World Religions", {
    x: 1.0, y: 2.75, w: 9.6, h: 1.5,
    fontFace: H, fontSize: 38, bold: true, color: WHITE, margin: 0, lineSpacingMultiple: 1.05,
  });
  s.addText(
    "All information in this section comes from Chapter 1, \"Beginning the Journey,\" of " +
    "Exploring the Religions of Our World (Ave Maria Press, Third Edition).",
    { x: 1.0, y: 4.45, w: 8.4, h: 0.8, fontFace: B, fontSize: 15, italic: true, color: "C7CDE4", margin: 0 }
  );
  s.addNotes("Part 2 covers four vocabulary terms, three reasons to study world religions, the case for interreligious dialogue, and the four common elements of religious traditions.");
}

// ============================================================
// 8 — DEFINITIONS: religion, ecumenism
// ============================================================
const defSlides = [
  {
    heading: "Key Terms Defined by the Textbook",
    sub: "Part 2, Question 1 — as explained in Chapter 1",
    items: [
      {
        badge: "A",
        term: "Religion",
        color: TERRA,
        lead: "The textbook calls a definition of religion \"elusive.\"",
        lines: [
          "The word comes from the Latin religare, meaning \"to bind.\" Under the name of religion, a person or community \"bound\" itself to something worthy of reverence and respect, and certain obligations came with those strong ties to an entity over and beyond them.",
          "Most scriptures, including the Bible, never use the word. Until modern times religion was not separated from the rest of life — birth and death, work and play, relationships, and nature were all wrapped up in it.",
          "Religion is not just \"worshipping God,\" \"living a moral life,\" or \"one's belief system.\" It is not any one of those things, because the spectrum of religious expression is vast.",
        ],
      },
      {
        badge: "B",
        term: "Ecumenism",
        color: TEAL,
        lead: "Textbook definition, word for word:",
        lines: [
          "\"The movement, inspired and led by the Holy Spirit, that seeks the union of all Christian faiths and eventually the unity of all peoples throughout the world.\"",
          "In practice: Pope John XXIII called Protestants \"separated brethren\" rather than \"heretics,\" and Pope Paul VI met Ecumenical Patriarch Athenagoras I to regret the mutual excommunication of 1054.",
          "The Second Vatican Council's Unitatis Redintegratio is the Decree on Ecumenism, addressing the Catholic Church's relationship with other Christians.",
        ],
      },
    ],
  },
  {
    heading: "Key Terms Defined by the Textbook",
    sub: "Part 2, Question 1 — continued",
    items: [
      {
        badge: "C",
        term: "Evangelization",
        color: GOLD,
        lead: "Textbook definition, word for word:",
        lines: [
          "\"From the Greek root word translated into English as 'Gospel'; the 'sharing of the Good News.'\"",
          "All baptized Catholics are called to share the Gospel of Jesus Christ with the world (see CCC, 849). Evangelization was traditionally understood as desiring to convert others to Catholic Christianity.",
          "Today, in a world of great religious diversity, Catholics evangelize in dialogue by witnessing — giving testimony of their own faith to another — without trying to get people to change their religious allegiance.",
        ],
      },
      {
        badge: "D",
        term: "Myths",
        color: NAVY,
        lead: "Textbook definition, word for word:",
        lines: [
          "\"Traditional or ancient stories that help explain a people's creation, customs, and/or ideals.\"",
          "Creation stories are the sacred stories most commonly called myths. The textbook is careful here: they are not true stories but truth stories that aim to convey sacred truths.",
          "Myths sit alongside sacred history and empirical history — history verifiable from other sources — in the story a religious community tells about itself.",
        ],
      },
    ],
  },
];

defSlides.forEach((d, di) => {
  const s = pres.addSlide();
  s.background = { color: WHITE };
  titleSlide(s, d.heading, d.sub);

  d.items.forEach((it, i) => {
    const x = 0.6 + i * 6.15;
    card(s, x, 1.75, 5.95, 4.8, CARD);
    badge(s, x + 0.35, 2.05, it.badge, it.color, 0.62);
    s.addText(it.term, {
      x: x + 1.1, y: 2.05, w: 4.5, h: 0.62,
      fontFace: H, fontSize: 25, bold: true, color: NAVY, margin: 0, valign: "middle",
    });
    s.addText(it.lead, {
      x: x + 0.35, y: 2.82, w: 5.25, h: 0.32,
      fontFace: B, fontSize: 12, italic: true, bold: true, color: it.color === GOLD ? "9A7420" : it.color, margin: 0,
    });
    s.addText(
      it.lines.map((t, k) => ({
        text: t,
        options: { bullet: true, breakLine: k !== it.lines.length - 1 },
      })),
      {
        x: x + 0.35, y: 3.2, w: 5.25, h: 3.1,
        fontFace: B, fontSize: 12, color: INK, margin: 0,
        paraSpaceAfter: 8, lineSpacingMultiple: 1.06, valign: "top",
      }
    );
  });

  footer(s, "Source: Exploring the Religions of Our World, 3rd ed., Ch. 1 — \"Beginning the Journey\"");
  s.addNotes(
    di === 0
      ? "Religion: stress that the textbook says the term is elusive, then give the Latin root religare, 'to bind.' Ecumenism and evangelization are quoted from the textbook's own glossary boxes."
      : "Evangelization: note the shift — traditionally aimed at conversion, today carried out by witnessing in dialogue. Myths: the key phrase is 'not true stories but truth stories.'"
  );
});

// ============================================================
// 10 — THREE REASONS
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  titleSlide(
    s,
    "Three Reasons to Study the World's Religions",
    "Part 2, Question 2 — selected from the textbook's list of reasons"
  );

  const reasons = [
    {
      n: "1",
      color: TERRA,
      head: "To understand your own tradition more clearly",
      body:
        "The textbook lists this first: studying other traditions gives you a clearer understanding of your own religious tradition, " +
        "\"which in turn allows more commitment to and thus growth in your own religious tradition.\" " +
        "Chapter 1 promises that we return from the journey with more insight into our own Catholic faith.",
    },
    {
      n: "2",
      color: TEAL,
      head: "To dispel fear and misunderstanding of others",
      body:
        "Studying the world's religions helps \"dispel fears and misunderstandings relating to persons of other religious traditions\" " +
        "and makes us more open to and accepting of people who on the surface seem very different. " +
        "As late as 1960, Catholic leaders still called Protestants \"heretics\" and Jews \"Christ killers.\"",
    },
    {
      n: "3",
      color: GOLD,
      head: "To learn from the world's great sources of wisdom",
      body:
        "The textbook invites us \"to learn from some of the world's great sources of wisdom,\" gaining better insight into human beings " +
        "through their religious activity, into the history of humankind's civilizations — since religion is almost always an " +
        "important factor — and into the cultures around the globe today.",
    },
  ];

  reasons.forEach((r, i) => {
    const x = 0.6 + i * 4.13;
    card(s, x, 1.8, 3.93, 4.55, CARD);
    badge(s, x + 0.32, 2.1, r.n, r.color, 0.72);
    s.addText(r.head, {
      x: x + 0.32, y: 3.0, w: 3.3, h: 1.0,
      fontFace: H, fontSize: 17, bold: true, color: NAVY, margin: 0, valign: "top",
      lineSpacingMultiple: 1.02,
    });
    s.addText(r.body, {
      x: x + 0.32, y: 4.05, w: 3.3, h: 2.15,
      fontFace: B, fontSize: 12, color: INK, margin: 0, lineSpacingMultiple: 1.08, valign: "top",
    });
  });

  s.addText(
    "The textbook adds that until very recently the study of religious traditions was a peculiarly Western discipline — nowadays it is universal.",
    { x: 0.6, y: 6.5, w: 12.1, h: 0.35, fontFace: B, fontSize: 11.5, italic: true, color: MUTED, margin: 0 }
  );
  s.addNotes(
    "Three of the seven reasons the textbook lists. The others: to become more open to people who seem different, to gain insight into human beings, " +
    "to understand the history of civilizations, and to understand today's cultures."
  );
}

// ============================================================
// 11 — WHY DIALOGUE (the duty)
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  titleSlide(
    s,
    "Why Christians Should Engage in Interreligious Dialogue",
    "Part 2, Question 3 — \"Interreligious dialogue is the duty of all Catholics\""
  );

  // left dark panel — the thesis
  s.addShape(pres.ShapeType.roundRect, {
    x: 0.6, y: 1.8, w: 4.5, h: 4.55, rectRadius: 0.05,
    fill: { color: NAVY }, line: { color: NAVY, width: 0 }, shadow: shadow(),
  });
  s.addText("It is part of the mission itself", {
    x: 0.95, y: 2.15, w: 3.8, h: 0.85,
    fontFace: H, fontSize: 21, bold: true, color: WHITE, margin: 0, valign: "top",
  });
  s.addText(
    "All baptized Catholics are called to share the Gospel of Jesus Christ with the world (see CCC, 849). " +
    "That is evangelization — and the Church is very clear that there is no conflict between dialogue and proclamation.\n\n" +
    "In dialogue, Catholics are evangelizing by witnessing to their faith without trying to get people to change " +
    "their religious allegiance. So dialogue is not a detour from the Christian mission; it is one of the ways " +
    "that mission is carried out.",
    { x: 0.95, y: 3.05, w: 3.8, h: 3.1, fontFace: B, fontSize: 13, color: "D8DDEE", margin: 0, lineSpacingMultiple: 1.1, valign: "top" }
  );

  const rows = [
    {
      color: TERRA,
      head: "The Church formally asks for it",
      body:
        "Three Second Vatican Council documents set the expectation: Dignitatis Humanae on religious freedom, " +
        "Unitatis Redintegratio on other Christians, and Nostra Aetate on non-Christian religions. Nostra Aetate states that the Church " +
        "\"rejects nothing that is true and holy in these religions.\"",
    },
    {
      color: TEAL,
      head: "The Holy Spirit is already at work in others",
      body:
        "God, the Father of all, offers salvation to all nations, and the Holy Spirit works outside the visible limits of the Church, " +
        "so people everywhere seek to adore God authentically. Other scriptures encourage people to seek truth and to defend life, " +
        "holiness, justice, peace, and freedom.",
    },
    {
      color: GOLD,
      head: "Both sides are enriched and purified",
      body:
        "Pope John Paul II wrote that dialogue enriches each side, eliminates prejudice, intolerance, and misunderstandings, and " +
        "\"leads to inner purification and conversion which, if pursued with docility to the Holy Spirit, will be spiritually fruitful\" " +
        "(Redemptoris Missio, 56).",
    },
  ];

  rows.forEach((r, i) => {
    const y = 1.8 + i * 1.56;
    card(s, 5.4, y, 7.3, 1.43, CARD);
    badge(s, 5.65, y + 0.3, String(i + 1), r.color, 0.5);
    s.addText(r.head, {
      x: 6.3, y: y + 0.19, w: 6.2, h: 0.35,
      fontFace: H, fontSize: 15.5, bold: true, color: NAVY, margin: 0, valign: "middle",
    });
    s.addText(r.body, {
      x: 6.3, y: y + 0.56, w: 6.2, h: 0.8,
      fontFace: B, fontSize: 11.5, color: INK, margin: 0, lineSpacingMultiple: 1.03, valign: "top",
    });
  });

  s.addNotes(
    "Question 3 asks you to DEMONSTRATE why Christians should engage in interreligious dialogue — so give reasons, not just a definition. " +
    "The strongest single line: interreligious dialogue is the duty of all Catholics because it is part of the Church's mission of evangelization."
  );
}

// ============================================================
// 12 — DIALOGUE IN PRACTICE
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  titleSlide(
    s,
    "What That Dialogue Actually Looks Like",
    "Part 2, Question 3 — the popes modeled it, and the textbook says any student can do it"
  );

  const items = [
    {
      color: TERRA,
      head: "Four popes broke new ground",
      body:
        "John XXIII invited Protestant, Anglican, Eastern Orthodox, and Jewish observers to Vatican II and had offensive language about " +
        "Jewish people removed from the Good Friday liturgy. Paul VI met Patriarch Athenagoras I. John Paul II was the first pope since " +
        "St. Peter to visit a synagogue and the first to visit a mosque, and he called religious leaders to Assisi to pray for peace. " +
        "Francis signed the Document on Human Fraternity with the grand imam of Al-Azhar in 2019.",
    },
    {
      color: TEAL,
      head: "Dialogue in words, actions, or both",
      body:
        "Youth groups from different traditions caring together for people displaced by disaster is a dialogue. Meeting socially and " +
        "sharing experiences is a dialogue. So is classroom sharing about prayer, about God, about how families celebrate a religious " +
        "festival, or about which symbols matter most in a tradition.",
    },
    {
      color: GOLD,
      head: "You do not have to be an expert",
      body:
        "\"You are not asked to be a specialist in every religious tradition in order to participate in interreligious dialogue. You only " +
        "have to share your faith experiences and listen intently while others share theirs.\" The attitude to bring is empathy — the textbook " +
        "paraphrases a Native American proverb: to walk a mile in the moccasins of another.",
    },
    {
      color: NAVY,
      head: "This class already counts",
      body:
        "Chapter 1 ends the section plainly: \"Of course, participating in this class is a form of dialogue with other religious traditions.\" " +
        "The Church asks us to suspend judgment about a tradition's truth claims and accept the tradition on its own terms, while remaining " +
        "humble, open, and respectful.",
    },
  ];

  items.forEach((it, i) => {
    const x = 0.6 + (i % 2) * 6.15;
    const y = 1.72 + Math.floor(i / 2) * 2.5;
    card(s, x, y, 5.95, 2.35, CARD);
    badge(s, x + 0.3, y + 0.26, String(i + 1), it.color, 0.5);
    s.addText(it.head, {
      x: x + 0.95, y: y + 0.22, w: 4.7, h: 0.58,
      fontFace: H, fontSize: 15, bold: true, color: NAVY, margin: 0, valign: "top",
      lineSpacingMultiple: 1.0,
    });
    s.addText(it.body, {
      x: x + 0.3, y: y + 0.88, w: 5.35, h: 1.35,
      fontFace: B, fontSize: 10.5, color: INK, margin: 0, lineSpacingMultiple: 1.04, valign: "top",
    });
  });

  s.addNotes("Concrete proof for question 3: papal example, everyday forms of dialogue, the low bar for participating, and the fact that this course is itself a dialogue.");
}

// ============================================================
// 13-14 — COMMON ELEMENTS
// ============================================================
const elementSlides = [
  {
    sub: "Part 2, Question 4 (a and b)",
    items: [
      {
        badge: "a",
        color: TERRA,
        term: "Sacred Stories and Sacred Scripture",
        lines: [
          "Most traditions have stories that tell how the world came to be, how humans, plants, and animals were created, why, and where we are going. The creation stories are the ones commonly called myths — truth stories that convey sacred truths.",
          "Certain core events become part of a tradition's sacred history: the birth of Muhammad, the Exodus, the death of Jesus. These are empirical history — verifiable from other sources.",
          "Stories were first passed on orally, then written down into what readers deem sacred scripture: the Upanishads, the Bhagavad Gita, the Holy Bible, the Qur'an. Some traditions call these inspired by God; others call them the exact word of God.",
          "Other sacred stories carry no scriptural authority — the Hadith, the lives of the saints, the stories of the rebbes — but all of them unite, preserve, and perpetuate a community, chiefly through ritual.",
        ],
      },
      {
        badge: "b",
        color: TEAL,
        term: "Beliefs and Practices",
        lines: [
          "Not every tradition has a formal set of beliefs, but each holds certain truths that separate it from the others: the Four Noble Truths and Noble Eightfold Path, the Apostles' Creed, the Sh'ma, the Shahadah.",
          "Believers act out their beliefs vertically and horizontally — the vertical is how adherents relate to the divine, the horizontal is how they relate to other believers and to nonbelievers.",
          "Practices may be personal (prayer, meditation, ritual washing) or communal (sacrifice, pilgrimage, a sacred meal). The more formal the ritual, the more likely it rests on a sacred story — God's command to remember the Exodus produced Passover.",
          "Each tradition has a moral code, written or unwritten, that lays out expected conduct. Some emphasize behavior over belief and others belief over behavior, and for many, behavior determines the next life or eternal life.",
        ],
      },
    ],
  },
  {
    sub: "Part 2, Question 4 (c and d)",
    items: [
      {
        badge: "c",
        color: GOLD,
        term: "Sacred Time",
        lines: [
          "Most traditions consider all time sacred, but they mark particular times when certain actions or attitudes give greater focus to the sacred.",
          "Ritual seems to transport a person or community from ordinary time into sacred time; it also reminds participants that all time is sacred. Sacred time is timeless — it draws the past and the future into the present so adherents can celebrate the now.",
          "Weekly observances are formal: Friday for Muslims, Saturday for Jews, Sunday for Christians. Annual fasts for spiritual renewal include Ramadan, Yom Kippur, and Lent.",
          "Festivals such as Bodhi Day, Guru Gobind Singh's birthday, and Diwali give a sense of belonging and an opportunity for recommitment and renewal. Rites of passage — birth, coming of age, marriage, and death — are sacred times too.",
        ],
      },
      {
        badge: "d",
        color: NAVY,
        term: "Sacred Places and Sacred Spaces",
        lines: [
          "Sacred time can be observed anywhere, but it is often experienced at a sacred place or in a sacred space.",
          "Places where a tradition began or where its founder traveled become sacred: Mecca and Medina for Muslims, and the region of Palestine, which Christians call the Holy Land.",
          "Places in nature are sacred too — the Jordan River for Christians, the Ganges for Hindus, Mount Sinai for Jews, Mount Fuji for practitioners of Shinto, the indigenous religious tradition of Japan.",
          "Shrines, temples, churches, mosques, and synagogues are all sacred spaces, and ordinary places can become temporary sacred spaces: a gym or a large tent can be converted into one.",
        ],
      },
    ],
  },
];

elementSlides.forEach((es, idx) => {
  const s = pres.addSlide();
  s.background = { color: WHITE };
  titleSlide(s, "Common Elements or Patterns of Religious Traditions", es.sub);

  es.items.forEach((it, i) => {
    const x = 0.6 + i * 6.15;
    card(s, x, 1.75, 5.95, 4.8, CARD);
    badge(s, x + 0.35, 2.05, it.badge, it.color, 0.58);
    s.addText(it.term, {
      x: x + 1.05, y: 2.0, w: 4.6, h: 0.68,
      fontFace: H, fontSize: 19, bold: true, color: NAVY, margin: 0, valign: "middle",
      lineSpacingMultiple: 0.95,
    });
    s.addText(
      it.lines.map((t, k) => ({
        text: t,
        options: { bullet: true, breakLine: k !== it.lines.length - 1 },
      })),
      {
        x: x + 0.35, y: 2.82, w: 5.25, h: 3.5,
        fontFace: B, fontSize: 11, color: INK, margin: 0,
        paraSpaceAfter: 7, lineSpacingMultiple: 1.04, valign: "top",
      }
    );
  });

  footer(
    s,
    idx === 0
      ? "The textbook studies \"what a religion is\" rather than \"what is religion\" — these elements overlap."
      : "Other elements in common: sacred symbols and objects, laws such as shari'ah and halakhah, institutional structure, and holy people."
  );
  s.addNotes(
    idx === 0
      ? "Element (a): myths are truth stories, not true stories; sacred history vs. empirical history. Element (b): vertical and horizontal, personal and communal practices, moral code."
      : "Element (c): all time sacred, particular times marked; weekly days, annual fasts, festivals, rites of passage. Element (d): founder's places, nature, buildings, and temporary sacred spaces."
  );
});

// ============================================================
// 15 — CLOSING
// ============================================================
{
  const s = pres.addSlide();
  darkBg(s);
  s.addShape(pres.ShapeType.ellipse, {
    x: 9.6, y: 4.2, w: 5.4, h: 5.4,
    fill: { color: NAVY_DK }, line: { color: NAVY_DK, width: 0 },
  });

  s.addText("Bringing It Together", {
    x: 0.75, y: 0.6, w: 11.8, h: 0.75,
    fontFace: H, fontSize: 32, bold: true, color: WHITE, margin: 0, valign: "middle",
  });
  s.addText("Chapter 1 summary — \"Beginning the Journey\"", {
    x: 0.75, y: 1.3, w: 11.8, h: 0.35,
    fontFace: B, fontSize: 14, italic: true, color: GOLD, margin: 0,
  });

  s.addText(
    [
      { text: "Religious diversity abounds, and a major task for a Catholic is to grow as a Catholic amid that diversity.", options: { bullet: true, breakLine: true } },
      { text: "World religions are worldwide traditions; the world's religions include traditions of great significance that are less widespread.", options: { bullet: true, breakLine: true } },
      { text: "Religion is difficult to define, but its root word means \"to bind.\"", options: { bullet: true, breakLine: true } },
      { text: "Empathy is the attitude to cultivate — walk a mile in the moccasins of another.", options: { bullet: true, breakLine: true } },
      { text: "Interreligious dialogue is the duty of all Catholics, because it belongs to the Church's mission of evangelization.", options: { bullet: true, breakLine: true } },
      { text: "Four common elements describe any tradition: sacred stories and scripture, beliefs and practices, sacred time, and sacred places and spaces.", options: { bullet: true } },
    ],
    {
      x: 0.75, y: 1.95, w: 7.0, h: 4.2,
      fontFace: B, fontSize: 13.5, color: "D8DDEE", margin: 0,
      paraSpaceAfter: 11, lineSpacingMultiple: 1.06, valign: "top",
    }
  );

  s.addShape(pres.ShapeType.roundRect, {
    x: 8.15, y: 1.95, w: 4.4, h: 4.2, rectRadius: 0.06,
    fill: { color: NAVY_DK }, line: { color: NAVY_DK, width: 0 },
  });
  badge(s, 8.5, 2.25, "✦", TERRA, 0.5);
  s.addText("The Peace Prayer", {
    x: 9.15, y: 2.22, w: 3.1, h: 0.35,
    fontFace: H, fontSize: 16, bold: true, color: WHITE, margin: 0, valign: "middle",
  });
  s.addText(
    "Chapter 1 closes with the prayer attributed to St. Francis — one the textbook says adherents of most religious traditions would be comfortable praying:\n\n" +
    "\"Lord, make me an instrument of your peace: where there is hatred, let me sow love; where there is injury, pardon; " +
    "where there is doubt, faith... Lord, grant that I may not so much seek to be consoled as to console; to be understood as to understand.\"",
    { x: 8.5, y: 2.75, w: 3.75, h: 3.15, fontFace: B, fontSize: 11.5, italic: true, color: "C7CDE4", margin: 0, lineSpacingMultiple: 1.08, valign: "top" }
  );

  s.addText("Source: Nancy Clemmons, S.N.J.M., Exploring the Religions of Our World, Third Edition (Notre Dame, IN: Ave Maria Press, 2022), Chapter 1.", {
    x: 0.75, y: 6.55, w: 11.8, h: 0.35,
    fontFace: B, fontSize: 10, color: "8E97B8", margin: 0,
  });

  s.addNotes("Closing slide: the chapter's own summary, plus the Peace Prayer that ends Chapter 1. Cite the textbook as your source.");
}

pres.writeFile({ fileName: "Intro-to-Study-of-World-Religions.pptx" }).then((f) => console.log("wrote", f));
