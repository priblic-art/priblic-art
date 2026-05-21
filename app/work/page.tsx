const works = {
  exhibitions: [
    { year: "2025", title: "Designing the Strange", venue: "Dongdaemun Festival: Party, Not Art", org: "Dongdaemun Cultural Foundation", location: "Seoul" },
    { year: "2025", title: "Too Slow to Follow, Too Weak to Neglect", venue: "WWW SPACE 2", org: "Solo", location: "Seoul" },
    { year: "2024", title: "Baedari Independent: Walking through the Village", venue: "Public Art Grant", org: "Incheon Dong-gu Office", location: "Incheon" },
    { year: "2023–2024", title: "Lee Byeok and Today", venue: "Gwangam Lee Byeok Historic Site Opening Exhibition", org: "Pocheon Cultural Foundation", location: "Pocheon" },
    { year: "2023", title: "Chippy's Adventure", venue: "Haebangchon", org: "Solo", location: "Seoul" },
    { year: "2022", title: "Story, Aolda", venue: "ARKO Small Museum Project", org: "Yangpyeong Cultural Foundation", location: "Yangpyeong" },
    { year: "2022", title: "Tomb of King Muryeong, Connected", venue: "68th Baekje Cultural Festival Official Arts Education Program", org: "", location: "Gongju" },
    { year: "2022", title: "Iumsae (The Seam)", venue: "Village Workshop Project", org: "Ministry of Interior and Safety", location: "Gyeonggi-do" },
    { year: "2022", title: "Mobius of Body and Mind", venue: "SOMA Sports Art Open Call Winner", org: "SOMA Museum of Art", location: "Seoul" },
    { year: "2022", title: "Why We Love Seongsu", venue: "Philostory Curated Exhibition", org: "Hyundai Department Store Mokdong", location: "Seoul" },
    { year: "2021", title: "Ever After: Tomb of King Muryeong", venue: "ARKO Young Artist Grant Exhibition", org: "A-Bunker", location: "Seoul" },
    { year: "2020", title: "Unfold and Connect", venue: "SFAC Experimental Art Project", org: "Seoul Foundation for Arts and Culture", location: "Maronier Park, Seoul" },
  ],
  publicWorkshops: [
    { year: "Sep 2025", title: "Public House", org: "Gyeonggi Cultural Foundation & Gyeonggi Sangsang Campus", role: "Co-planned & Facilitated" },
    { year: "Jul 2025", title: "The Unknown Island: Treasure Hunt in Sangsang Campus", org: "Gyeonggi Sangsang Campus", role: "Planned & Facilitated" },
    { year: "Jun–Nov 2024", title: "Ping-Pong Art Club", org: "Gyeonggi Artist Support Center", role: "Co-planned, Tool Development & Facilitated" },
    { year: "Oct 2023", title: "Dururu Excavation Team", org: "Cheorwon Cultural Foundation", role: "Facilitated" },
    { year: "Jul 2022", title: "Honey Pot Excavation Team", org: "Shared Village Archive School, Siheung Eungye District 7", role: "Planned & Facilitated" },
    { year: "May–Dec 2021", title: "Seongsu-dong Excavation Team", org: "Seoul Foundation for Arts and Culture (SFAC)", role: "Planned & Managed" },
    { year: "May–Dec 2020", title: "Mind Maps of Our Neighborhood", org: "Seongdong Cultural Foundation", role: "Planned & Facilitated" },
  ],
  privateWorkshops: [
    { year: "Jul 2024", title: "Artist Branding Workshop", org: "Daegu Foundation for Culture & Creative Design", role: "Co-planned & Facilitated" },
    { year: "Jan–Feb 2024", title: "abc-zine project: Discovering & Delivering My Message through Zines", org: "Patchwork", role: "Co-planned & Facilitated" },
    { year: "Jan 2024", title: "Defining the Direction of My Work", org: "Patchwork", role: "Co-planned & Facilitated" },
    { year: "Dec 2023", title: "Manifesto Zine Making", org: "University of Utah Asia Campus", role: "Facilitated" },
    { year: "May 2021", title: "Mind Mapping Workshop", org: "Daejeon Youth Naeil(JOB)ro", role: "Facilitated" },
  ],
  collaborations: [
    { year: "2024–Present", title: "Program Designer", org: "Patchwork" },
    { year: "2023–Present", title: "Ritual Maker: Cheer-up Journal for Me", org: "meet me (Personal Growth Platform)" },
    { year: "2021–Present", title: "Local Project Collaborator", org: "Dongyang Gabaegwan" },
    { year: "Sep 2024", title: "Creative Workshop for Content Creators", org: "Hana TI & Patchwork" },
    { year: "Jun–Sep 2023", title: "Creative Workshop for Organizational Culture", org: "365mc" },
    { year: "Jul 2023", title: "Experience Mapping Kit & Workshop", org: "Kyobo Book Centre Branding Program" },
    { year: "Jan–Jun 2021", title: "Our Neighborhood Geographic", org: "All That Story (6 YouTube episodes)" },
  ],
};

function Section({ title, subtitle, items }: {
  title: string;
  subtitle: string;
  items: { year: string; title: string; org?: string; venue?: string; role?: string; location?: string }[];
}) {
  return (
    <section className="py-16 border-t border-stone-900">
      <div className="mb-10">
        <p className="text-xs text-stone-600 tracking-[0.3em] uppercase mb-1">{subtitle}</p>
        <h2 className="font-kr text-2xl">{title}</h2>
      </div>
      <div className="space-y-px">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row md:items-start gap-2 md:gap-12 py-4 border-b border-stone-900/50 hover:bg-stone-900/40 px-2 -mx-2 transition-colors"
          >
            <span className="text-xs text-stone-600 tabular-nums shrink-0 w-28 pt-0.5">
              {item.year}
            </span>
            <div className="flex-1">
              <p className="font-kr text-base mb-0.5">{item.title}</p>
              <p className="text-xs text-stone-500">
                {[item.venue, item.org, item.role, item.location]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function WorkPage() {
  return (
    <main className="px-8 pt-32 pb-24 max-w-4xl">
      <div className="mb-4">
        <p className="text-xs text-stone-600 tracking-[0.3em] uppercase mb-4">작업</p>
        <h1 className="font-kr text-4xl md:text-5xl">Bee Chee Chang</h1>
      </div>

      <Section title="전시" subtitle="Exhibitions" items={works.exhibitions} />
      <Section title="공공 워크숍" subtitle="Public Workshops · Local Research & Community Dialogue" items={works.publicWorkshops} />
      <Section title="개인 성장 워크숍" subtitle="Private Workshops · Personal Growth & Self-Expression" items={works.privateWorkshops} />
      <Section title="협업" subtitle="Brand Collaborations" items={works.collaborations} />
    </main>
  );
}
