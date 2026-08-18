const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.3 x 7.5
pres.title = "Introduction to the Study of the World's Religions";

const NAVY = "1E2761";
const NAVY_DK = "141A44";
const TERRA = "BF5637";
const GOLD = "9A7420";
const GOLDF = "C69A3E";
const TEAL = "1C7293";
const PLUM = "6B4A9E";
const INK = "20242E";
const MUTED = "5B6274";
const CARD = "F0F2F8";
const WHITE = "FFFFFF";

const H = "Cambria";
const B = "Calibri";

const STUDENT = "[Your First and Last Name]";
const PARTNER = "[Partner's First and Last Name, if applicable]";

function shadow() {
  return { type: "outer", angle: 90, blur: 10, offset: 2, color: "9AA1B5", opacity: 0.3 };
}

function card(slide, x, y, w, h) {
  slide.addShape(pres.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.06,
    fill: { color: CARD }, line: { color: CARD, width: 0 }, shadow: shadow(),
  });
}

function badge(slide, x, y, label, fill, size) {
  const d = size || 0.55;
  slide.addShape(pres.ShapeType.ellipse, {
    x, y, w: d, h: d, fill: { color: fill }, line: { color: fill, width: 0 },
  });
  slide.addText(label, {
    x, y, w: d, h: d, align: "center", valign: "middle",
    fontFace: H, fontSize: d > 0.7 ? 20 : 15, bold: true, color: WHITE, margin: 0,
  });
}

function heading(slide, text, sub, size) {
  slide.addText(text, {
    x: 0.7, y: 0.4, w: 12.0, h: 0.72,
    fontFace: H, fontSize: size || 28, bold: true, color: NAVY, margin: 0, valign: "middle",
  });
  slide.addText(sub, {
    x: 0.7, y: 1.14, w: 12.0, h: 0.34,
    fontFace: B, fontSize: 13.5, italic: true, color: MUTED, margin: 0, valign: "middle",
  });
}

// ---------------------------------------------------------------- 1: TITLE
{
  const s = pres.addSlide();
  s.background = { color: NAVY };
  s.addShape(pres.ShapeType.ellipse, {
    x: 10.2, y: -1.5, w: 5.2, h: 5.2, fill: { color: NAVY_DK }, line: { color: NAVY_DK, width: 0 },
  });
  s.addShape(pres.ShapeType.ellipse, {
    x: -1.4, y: 4.6, w: 4.2, h: 4.2, fill: { color: NAVY_DK }, line: { color: NAVY_DK, width: 0 },
  });
  badge(s, 0.9, 1.15, "1", TERRA, 0.8);
  s.addText("Introduction to the Study\nof the World's Religions", {
    x: 0.9, y: 2.25, w: 9.6, h: 1.9,
    fontFace: H, fontSize: 44, bold: true, color: WHITE, lineSpacingMultiple: 1.05, margin: 0,
  });
  s.addText(
    [
      { text: STUDENT, options: { fontSize: 20, bold: true, color: WHITE, breakLine: true } },
      { text: PARTNER, options: { fontSize: 13, color: "AFB7D4", italic: true } },
    ],
    { x: 0.9, y: 4.75, w: 9.6, h: 1.0, fontFace: B, margin: 0 }
  );
}

// ------------------------------------------------- 2 and 3: PART 1 PAIRINGS
const pairs = [
  {
    n: "1", color: TEAL,
    pair: "Christianity & Judaism",
    similarity: "Both hold the same sacred scriptures and sacred history.",
    body:
      "Christianity grew directly out of Judaism, so the two traditions share one set of sacred stories. " +
      "The Hebrew scriptures that Jews call the Tanakh are the same books Christians read as the Old Testament. " +
      "Chapter 1 notes that the story of the Jewish people includes creation stories and the sacred history of the " +
      "patriarchs and prophets, and Christians claim that same history as their own.",
  },
  {
    n: "2", color: TERRA,
    pair: "Christianity & Islam",
    similarity: "Both keep an annual season of fasting for spiritual renewal.",
    body:
      "Chapter 1 lists Lent and Ramadan side by side as annual times of fasting for spiritual renewal and growth. " +
      "Christians fast and give alms through the forty days of Lent, and Muslims fast from dawn to sunset for the " +
      "month of Ramadan. In both traditions the fast is a sacred time set aside for prayer, repentance, and " +
      "returning to God.",
  },
  {
    n: "3", color: GOLDF,
    pair: "Christianity & Hinduism",
    similarity: "Both treat rivers in nature as sacred places.",
    body:
      "Chapter 1 pairs these two traditions directly, naming the Jordan River for Christians and the Ganges River " +
      "for Hindus as places in nature that a religious tradition calls sacred. Christians revere the Jordan as the " +
      "place of Jesus' baptism, and Hindu devotees bathe in the Ganges at pilgrimage sites to wash away sin.",
  },
  {
    n: "4", color: PLUM,
    pair: "Christianity & Buddhism",
    similarity: "Both state their central beliefs in a well formulated doctrine.",
    body:
      "Chapter 1 says that Buddhism and Christianity have well formulated doctrines. The Apostles' Creed is the " +
      "formal statement of Christian beliefs, and the Four Noble Truths and the Noble Eightfold Path are clearly " +
      "delineated Buddhist doctrines. Both traditions put their core truths into a fixed statement that every " +
      "adherent can learn.",
  },
];

[0, 2].forEach((start) => {
  const s = pres.addSlide();
  s.background = { color: WHITE };
  heading(s, "Part 1: Similarities with Christianity", "One particular similarity for each pair of religions");

  pairs.slice(start, start + 2).forEach((p, i) => {
    const x = 0.6 + i * 6.15;
    card(s, x, 1.75, 5.95, 4.6);
    badge(s, x + 0.35, 2.08, p.n, p.color, 0.55);
    s.addText(p.pair, {
      x: x + 1.05, y: 2.05, w: 4.6, h: 0.6,
      fontFace: H, fontSize: 20, bold: true, color: NAVY, margin: 0, valign: "middle",
    });
    s.addText(p.similarity, {
      x: x + 0.35, y: 2.85, w: 5.25, h: 0.75,
      fontFace: H, fontSize: 16, bold: true, color: p.color === GOLDF ? GOLD : p.color,
      margin: 0, valign: "top", lineSpacingMultiple: 1.0,
    });
    s.addText(p.body, {
      x: x + 0.35, y: 3.75, w: 5.25, h: 2.4,
      fontFace: B, fontSize: 13, color: INK, margin: 0, lineSpacingMultiple: 1.1, valign: "top",
    });
  });
});

// -------------------------------------------------------- 4: DEFINITIONS
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  heading(s, "Part 2: Key Terms Defined", "As explained in Chapter 1 of the textbook");

  const terms = [
    {
      t: "Religion", color: TERRA,
      d: "The word comes from the Latin religare, meaning \"to bind.\" A person or community binds itself to " +
         "something worthy of reverence and respect, and obligations come with those ties. The textbook calls a " +
         "single definition elusive, because the spectrum of religious expression is vast.",
    },
    {
      t: "Ecumenism", color: TEAL,
      d: "\"The movement, inspired and led by the Holy Spirit, that seeks the union of all Christian faiths and " +
         "eventually the unity of all peoples throughout the world.\"",
    },
    {
      t: "Evangelization", color: GOLDF,
      d: "\"From the Greek root word translated into English as 'Gospel'; the 'sharing of the Good News.'\" " +
         "All baptized Catholics are called to share the Gospel of Jesus Christ with the world.",
    },
    {
      t: "Myths", color: PLUM,
      d: "\"Traditional or ancient stories that help explain a people's creation, customs, and/or ideals.\" " +
         "The textbook adds that they are not true stories but truth stories that aim to convey sacred truths.",
    },
  ];

  terms.forEach((it, i) => {
    const x = 0.6 + (i % 2) * 6.15;
    const y = 1.72 + Math.floor(i / 2) * 2.45;
    card(s, x, y, 5.95, 2.3);
    badge(s, x + 0.32, y + 0.26, String.fromCharCode(97 + i), it.color, 0.5);
    s.addText(it.t, {
      x: x + 0.95, y: y + 0.22, w: 4.7, h: 0.58,
      fontFace: H, fontSize: 19, bold: true, color: NAVY, margin: 0, valign: "middle",
    });
    s.addText(it.d, {
      x: x + 0.32, y: y + 0.88, w: 5.35, h: 1.3,
      fontFace: B, fontSize: 11.5, color: INK, margin: 0, lineSpacingMultiple: 1.06, valign: "top",
    });
  });
}

// ------------------------------------------------------------ 5: REASONS
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  heading(s, "Part 2: Three Reasons to Study the World's Religions", "Reasons listed in Chapter 1");

  const reasons = [
    {
      n: "1", color: TERRA,
      head: "To understand your own tradition",
      body: "Studying other traditions gives you a clearer understanding of your own religious tradition, " +
            "\"which in turn allows more commitment to and thus growth in your own religious tradition.\"",
    },
    {
      n: "2", color: TEAL,
      head: "To dispel fear and misunderstanding",
      body: "It helps \"dispel fears and misunderstandings relating to persons of other religious traditions\" " +
            "and makes us more open to and accepting of people who on the surface seem very different.",
    },
    {
      n: "3", color: GOLDF,
      head: "To learn from great sources of wisdom",
      body: "The textbook invites us \"to learn from some of the world's great sources of wisdom,\" and to gain " +
            "better insight into human beings through understanding their religious activities.",
    },
  ];

  reasons.forEach((r, i) => {
    const x = 0.6 + i * 4.13;
    card(s, x, 1.8, 3.93, 4.2);
    badge(s, x + 0.32, 2.15, r.n, r.color, 0.7);
    s.addText(r.head, {
      x: x + 0.32, y: 3.05, w: 3.3, h: 0.95,
      fontFace: H, fontSize: 17, bold: true, color: NAVY, margin: 0, valign: "top", lineSpacingMultiple: 1.02,
    });
    s.addText(r.body, {
      x: x + 0.32, y: 4.05, w: 3.3, h: 1.75,
      fontFace: B, fontSize: 12, color: INK, margin: 0, lineSpacingMultiple: 1.08, valign: "top",
    });
  });
}

// ----------------------------------------------------------- 6: DIALOGUE
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  heading(s, "Part 2: Why Christians Should Engage in Interreligious Dialogue", "Chapter 1: interreligious dialogue is the duty of all Catholics", 23);

  const rows = [
    {
      color: TERRA,
      head: "It belongs to the Church's mission of evangelization",
      body: "All baptized Catholics are called to share the Gospel of Jesus Christ with the world (CCC, 849), and " +
            "the Church is clear that there is no conflict between dialogue and proclamation. In dialogue, Catholics " +
            "evangelize by witnessing to their faith without trying to get people to change their religious allegiance.",
    },
    {
      color: TEAL,
      head: "The Church formally asks Catholics to do it",
      body: "Nostra Aetate states that the Catholic Church \"rejects nothing that is true and holy in these religions.\" " +
            "God offers salvation to all nations, and the Holy Spirit works outside the visible limits of the Church, " +
            "so people in every part of the world seek to adore God in an authentic way.",
    },
    {
      color: GOLDF,
      head: "Dialogue enriches and purifies both sides",
      body: "Pope John Paul II wrote that dialogue enriches each side, eliminates prejudice, intolerance, and " +
            "misunderstandings, and \"leads to inner purification and conversion which, if pursued with docility to the " +
            "Holy Spirit, will be spiritually fruitful\" (Redemptoris Missio, 56).",
    },
  ];

  rows.forEach((r, i) => {
    const y = 1.75 + i * 1.65;
    card(s, 0.6, y, 12.1, 1.5);
    badge(s, 0.9, y + 0.32, String(i + 1), r.color, 0.5);
    s.addText(r.head, {
      x: 1.55, y: y + 0.2, w: 10.9, h: 0.38,
      fontFace: H, fontSize: 16, bold: true, color: NAVY, margin: 0, valign: "middle",
    });
    s.addText(r.body, {
      x: 1.55, y: y + 0.62, w: 10.9, h: 0.8,
      fontFace: B, fontSize: 12, color: INK, margin: 0, lineSpacingMultiple: 1.05, valign: "top",
    });
  });
}

// ---------------------------------------------------- 7: COMMON ELEMENTS
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  heading(s, "Part 2: Common Elements or Patterns of Religions", "The four patterns explained in Chapter 1");

  const els = [
    {
      t: "Sacred Stories and Sacred Scripture", color: TERRA,
      d: "Traditions tell stories of how the world came to be and where we are going. The creation stories are " +
         "commonly called myths, and core events such as the Exodus become sacred history. Passed on orally at first, " +
         "these stories were written down as sacred scripture such as the Bible, the Qur'an, and the Bhagavad Gita.",
    },
    {
      t: "Beliefs and Practices", color: TEAL,
      d: "Each tradition holds certain truths that separate it from the others, such as the Apostles' Creed or the " +
         "Four Noble Truths. Believers act those beliefs out in practices that may be personal, such as prayer, or " +
         "communal, such as pilgrimage. Every tradition has a moral code, written or unwritten.",
    },
    {
      t: "Sacred Time", color: GOLDF,
      d: "Most traditions consider all time sacred but mark particular times: Friday for Muslims, Saturday for Jews, " +
         "and Sunday for Christians; annual fasts such as Ramadan, Yom Kippur, and Lent; festivals such as Diwali and " +
         "Bodhi Day; and rites of passage such as birth, marriage, and death.",
    },
    {
      t: "Sacred Places and Sacred Spaces", color: PLUM,
      d: "Places where a tradition began or its founder traveled become sacred, such as Mecca for Muslims and the " +
         "Holy Land for Christians. Places in nature can be sacred, such as the Ganges and Mount Sinai. Churches, " +
         "mosques, temples, and synagogues are sacred spaces, and a gym or tent can become a temporary one.",
    },
  ];

  els.forEach((it, i) => {
    const x = 0.6 + (i % 2) * 6.15;
    const y = 1.72 + Math.floor(i / 2) * 2.45;
    card(s, x, y, 5.95, 2.3);
    badge(s, x + 0.32, y + 0.26, String.fromCharCode(97 + i), it.color, 0.5);
    s.addText(it.t, {
      x: x + 0.95, y: y + 0.2, w: 4.7, h: 0.55,
      fontFace: H, fontSize: 16, bold: true, color: NAVY, margin: 0, valign: "middle",
    });
    s.addText(it.d, {
      x: x + 0.32, y: y + 0.85, w: 5.35, h: 1.33,
      fontFace: B, fontSize: 11, color: INK, margin: 0, lineSpacingMultiple: 1.05, valign: "top",
    });
  });
}

pres.writeFile({ fileName: "Intro-to-Study-of-World-Religions.pptx" }).then((f) => console.log("wrote", f));
