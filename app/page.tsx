import Image from "next/image";
import Link from "next/link";

const featuredWorks = [
  {
    title: "Too Slow to Follow, Too Weak to Neglect",
    desc: "2025, Solo, WWW Space 2",
    image: "/works/IMG_3149-24279.JPG",
    href: "/work/too-slow-to-follow",
  },
  {
    title: "Designing the Strange",
    desc: "2025, Dongdaemun Festival",
    image: "/works/IMG_4829-24170.JPG",
    href: "/work/designing-the-strange",
  },
  {
    title: "Self-Portrait",
    desc: "2014–2016",
    image: "/works/Selfportrait_01-20718.jpg",
    href: "/work/self-portrait",
  },
];

export default function Home() {
  return (
    <main>
      {/* 히어로 */}
      <section className="relative min-h-screen flex flex-col justify-between px-8 pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/works/EA_10-21943.jpg"
            alt="Ever After: Tomb of King Muryeong"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        </div>
        <div className="relative z-10" />
        <div className="relative z-10">
          <h1 className="font-kr text-4xl md:text-6xl lg:text-7xl leading-snug max-w-4xl mb-10">
            장비치는 &lsquo;나&rsquo;를 말하는 일이
            <br />
            &lsquo;우리&rsquo;를 만드는 일임을
            <br />
            증명하는 자리를 만든다
          </h1>
          <Link
            href="/work"
            className="text-sm text-stone-400 hover:text-[#f0ede8] transition-colors"
          >
            작업 보기 →
          </Link>
        </div>
        <div className="relative z-10 flex items-end justify-between mt-16">
          <span className="text-xs text-stone-700 tracking-[0.3em] uppercase">
            priblic art
          </span>
          <span className="text-xs text-stone-700">2026</span>
        </div>
      </section>

      {/* priblic */}
      <section className="px-8 py-24 border-t border-stone-900">
        <p className="text-xs text-stone-600 tracking-[0.3em] uppercase mb-6">
          priblic = private + public
        </p>
        <p className="text-xl md:text-2xl text-stone-300 leading-relaxed max-w-lg">
          개인이 자신을 정확히 말할 때,
          <br />
          낯선 사람의 마음이 열린다.
        </p>
      </section>

      {/* 작업 */}
      <section className="px-8 py-24 border-t border-stone-900">
        <div className="flex items-center justify-between mb-12">
          <p className="text-xs text-stone-600 tracking-[0.3em] uppercase">
            작업
          </p>
          <Link
            href="/work"
            className="text-xs text-stone-500 hover:text-[#f0ede8] transition-colors"
          >
            전체 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-900">
          {featuredWorks.map((work) => (
            <Link
              key={work.title}
              href={work.href}
              className="group relative bg-[#0a0a0a] aspect-square overflow-hidden"
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs text-stone-500 tracking-widest uppercase mb-1">
                  {work.desc}
                </p>
                <p className="text-base font-kr text-[#f0ede8]">{work.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
