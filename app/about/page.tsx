import Image from "next/image";

const awards = [
  { year: "2022", title: "Village Workshop Development Grant", org: "Ministry of the Interior and Safety", detail: "Regeneration Project: 'Sabujak Sabujak Ium Workshop', Yangpyeong" },
  { year: "2017", title: "Steward Fellowship Award", org: "British Council", detail: "British Pavilion at the Venice Biennale" },
  { year: "2016", title: "Jim Rowland Award", org: "Goldsmiths, University of London" },
  { year: "2013", title: "Silver Prize", org: "MMCA Korea", detail: "MMCA Seoul Opening Promotional Video Competition" },
  { year: "2012", title: "Netizen Choice Award", org: "1st 29-Second Film Festival, Seoul" },
];

const education = [
  { year: "2016–2018", degree: "MA Contemporary Art Practice: Public Sphere", school: "Royal College of Art (RCA)", location: "London, UK" },
  { year: "2013–2016", degree: "BA Media and Communications", school: "Goldsmiths, University of London", location: "London, UK" },
  { year: "2012–2013", degree: "Foundation Diploma in Art & Design (Moving Image)", school: "Cambridge School of Visual & Performing Arts (CSVPA)", location: "Cambridge, UK" },
  { year: "2007–2010", degree: "BA Theology", school: "Catholic University of Korea", location: "Seoul, South Korea" },
];

export default function AboutPage() {
  return (
    <main className="px-8 pt-32 pb-24 max-w-3xl">
      <div className="mb-16 flex flex-col md:flex-row md:items-end gap-10">
        <div className="relative w-48 h-60 shrink-0 overflow-hidden">
          <Image
            src="/works/Selfportrait_01-20718.jpg"
            alt="Bee Chee Chang"
            fill
            className="object-cover object-top grayscale"
          />
        </div>
        <div>
          <p className="text-xs text-stone-600 tracking-[0.3em] uppercase mb-4">소개</p>
          <h1 className="font-kr text-4xl md:text-5xl mb-2">장비치</h1>
          <p className="text-stone-500 text-sm tracking-wider">Bee Chee Chang</p>
        </div>
      </div>

      <section className="border-t border-stone-900 pt-12 mb-16 space-y-5 text-stone-300 leading-relaxed text-lg">
        <p>
          공공예술가 장비치는 퍼포먼스와 참여예술을 통해
          개인의 자기표현이 공공을 어떻게 만드는지 탐구합니다.
        </p>
        <p>
          priblic — private와 public의 합성어 — 는 개인과 공공이 분리되지 않는다는
          그의 철학을 담고 있습니다. 낯선 사람들이 자신의 내밀한 이야기를 꺼낼 때,
          서로를 향한 마음이 열리는 그 순간이 그가 만들고자 하는 자리입니다.
        </p>
        <p>
          Royal College of Art에서 공공 영역의 현대예술을 공부했으며,
          2017년 베니스 비엔날레 영국관 Steward Fellowship을 수상했습니다.
          서울을 기반으로 지역 커뮤니티, 기관, 브랜드와 협업하며
          개인의 자기발견이 공동체를 만드는 자리를 지속적으로 만들고 있습니다.
        </p>
      </section>

      <section className="border-t border-stone-900 pt-12 mb-16">
        <p className="text-xs text-stone-600 tracking-[0.3em] uppercase mb-8">수상 및 펠로우십</p>
        <div className="space-y-px">
          {awards.map((a, i) => (
            <div key={i} className="flex gap-8 py-4 border-b border-stone-900/50">
              <span className="text-xs text-stone-600 tabular-nums shrink-0 w-10 pt-0.5">{a.year}</span>
              <div>
                <p className="text-sm mb-0.5">{a.title}</p>
                <p className="text-xs text-stone-500">{[a.org, a.detail].filter(Boolean).join(" · ")}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-stone-900 pt-12">
        <p className="text-xs text-stone-600 tracking-[0.3em] uppercase mb-8">학력</p>
        <div className="space-y-px">
          {education.map((e, i) => (
            <div key={i} className="flex gap-8 py-4 border-b border-stone-900/50">
              <span className="text-xs text-stone-600 tabular-nums shrink-0 w-20 pt-0.5">{e.year}</span>
              <div>
                <p className="text-sm mb-0.5">{e.degree}</p>
                <p className="text-xs text-stone-500">{e.school} · {e.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
