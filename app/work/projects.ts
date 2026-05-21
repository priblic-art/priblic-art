export type Project = {
  slug: string;
  title: string;
  titleKr?: string;
  year: string;
  type: string;
  venue: string;
  org?: string;
  location: string;
  images: string[];
  description: string;
};

export const projects: Project[] = [
  {
    slug: "too-slow-to-follow",
    title: "Too Slow to Follow, Too Weak to Neglect",
    titleKr: "따라오기엔 너무 느리고, 잊기엔 너무 약한",
    year: "Aug–Sep 2025",
    type: "Solo Exhibition",
    venue: "WWW Space 2",
    location: "Seoul",
    images: [
      "/works/IMG_3149-24279.JPG",
      "/works/IMG_3150-24256.JPG",
      "/works/IMG_3151-24257.JPG",
      "/works/IMG_3152-24258.JPG",
    ],
    description:
      "A solo exhibition built around a simple question: what does it mean to move at a pace the world cannot follow — and what does it mean to refuse to forget those it overlooks? Large-scale fabric works spread across the floor invite visitors to crouch, kneel, and read traces of lives that resist speed. A slow manifesto for those who do not fit.",
  },
  {
    slug: "designing-the-strange",
    title: "Designing the Strange",
    titleKr: "낯섦을 설계하다",
    year: "Oct 18, 2025",
    type: "Participatory Street Installation",
    venue: "Dongdaemun Festival: Party, Not Art",
    org: "Dongdaemun Cultural Foundation",
    location: "Jangan-dong, Seoul",
    images: [
      "/works/IMG_4829-24170.JPG",
      "/works/IMG_4789-24175.JPG",
      "/works/IMGL0997-24237.JPG",
    ],
    description:
      "A modular circular furniture system placed in the middle of a closed-off street during the \"Party, Not Art\" festival. Strangers were invited to sit, pause, and collectively define what is strange — in their body, their neighborhood, their daily life. Hundreds of handwritten cards accumulated in real time, forming a collective street manifesto.",
  },
  {
    slug: "bookstore-log",
    title: "Bookstore Log Exhibition (책방일지展)",
    year: "Oct–Nov 2025",
    type: "Curated Exhibition",
    venue: "Corner Room, 2nd Unknown Book Festival",
    location: "Incheon",
    images: [
      "/works/IMG_0828-24291.JPG",
      "/works/IMG_0833-24292.JPG",
      "/works/IMG_1187-24293.JPG",
      "/works/IMG_1188-24290.JPG",
    ],
    description:
      "A special curated exhibition for the 2nd Unknown Book Festival. Over one month, eight artists spent time in Baedari's independent bookstores — listening, observing, exchanging stories. The exhibition gathered these encounters into a single corner room: logs of conversations, sketches, and the bookstores' own voices, presented as an ongoing collective diary.",
  },
  {
    slug: "ever-after",
    title: "Ever After: Tomb of King Muryeong",
    titleKr: "그 후로도 오래오래: 무령왕릉",
    year: "2021",
    type: "Installation",
    venue: "A-Bunker",
    org: "ARKO Young Artist Grant",
    location: "Seoul",
    images: ["/works/EA_10-21943.jpg"],
    description:
      "Commissioned through ARKO's Young Artist Grant, this installation translated the 1,500-year-old Tomb of King Muryeong into a participatory encounter. The tomb's artifacts — jewels, swords, guardian beasts — were re-imagined as prompts: what would you place in your own tomb? What does that choice reveal about the life you are living now? Visitors left written traces that became part of the work.",
  },
  {
    slug: "iumsae",
    title: "Iumsae (The Seam)",
    titleKr: "이음새",
    year: "Sep 2022",
    type: "Opening Exhibition",
    venue: "Sabujak-Sabujak Ium Creative Workshop",
    org: "Village Workshop Development Grant, Ministry of Interior and Safety",
    location: "Yangpyeong, Gyeonggi-do",
    images: [
      "/works/_DSC4139 (5)-21903.jpg",
      "/works/_DSC4031 (3)-21904.jpg",
      "/works/_DSC4141-21906.jpg",
      "/works/_DSC4144 (2)-21905.jpg",
      "/works/_DSC4033-2 (3)-21920.jpg",
    ],
    description:
      "The opening exhibition of a newly built village creative workshop in Yangpyeong, made possible through a Ministry of Interior and Safety regeneration grant. \"Iumsae\" — the seam between things — mapped the invisible connections between village residents through large colorful line drawings and intimate portrait photographs. The seam is not a gap: it is the place where two things hold each other together.",
  },
  {
    slug: "story-aolda",
    title: "Story, Aolda",
    year: "Nov–Dec 2022",
    type: "Opening Exhibition",
    venue: "Small Museum Aolda",
    org: "ARKO Small Museum Grant, Yangpyeong Cultural Foundation",
    location: "Yangpyeong",
    images: [
      "/works/_PB39002-21764.jpg",
      "/works/_PB38937-21765.jpg",
      "/works/_PB38999-21766.jpg",
      "/works/_PB38995-21770.jpg",
      "/works/_PB36447-21889.jpg",
      "/works/_PB36457-21890.jpg",
    ],
    description:
      "The opening exhibition of Small Museum Aolda, commissioned through ARKO's Small Museum Grant. The work gathered the hidden stories of the land surrounding Yangpyeong — coal, rock, water, sky — and layered them into a single room. Large fabric maps hung from above. Objects and handwritten cards covered the tables below. The museum as a place of listening.",
  },
  {
    slug: "cantitled",
    title: "Can'titled",
    year: "2018",
    type: "Installation",
    venue: "Oxo Tower Wharf",
    org: "Royal College of Art MA Degree Show",
    location: "London",
    images: ["/works/Installation Display-21441.jpg"],
    description:
      "A graduation work at the Royal College of Art in which the title of the work was left deliberately incomplete — and visitors were invited to complete it. The act of naming became the work itself. By finishing the title, each viewer became its author. Shown at Oxo Tower Wharf as part of the RCA MA degree show.",
  },
  {
    slug: "self-portrait",
    title: "Self-Portrait",
    titleKr: "자화상",
    year: "2014–2016",
    type: "Performance & Photography",
    venue: "Various",
    location: "London",
    images: [
      "/works/Selfportrait_01-20718.jpg",
      "/works/Selfportrait_02-20719.jpg",
      "/works/Selfportrait_03-20723.jpg",
      "/works/Selfportrait_04-20721.jpg",
      "/works/Selfportrait_05-20722.jpg",
      "/works/Selfportrait_06-20720.jpg",
    ],
    description:
      "A long-term performance and photography series in which Bee Chee Chang staged precise self-portraits across public, semi-public, and private spaces in London. By placing the body in unexpected contexts — on the street, at a desk, in a gallery, in a shop window — the work asked: who do we become when we are watched? And who do we become when we watch ourselves? The series marked the beginning of a practice built on the belief that self-expression is never only private.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
