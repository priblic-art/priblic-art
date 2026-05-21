import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* 히어로 */}
      <section className="min-h-screen flex flex-col justify-between px-8 pt-32 pb-12">
        <div />
        <div>
          <h1 className="font-kr text-4xl md:text-6xl lg:text-7xl leading-snug max-w-4xl mb-10">
            장비치는 &lsquo;나&rsquo;를 말하는 일이
            <br />
            &lsquo;우리&rsquo;를 만드는 일임을
            <br />
            증명하는 자리를 만든다
          </h1>
          <Link
            href="/work"
            className="text-sm text-stone-500 hover:text-[#f0ede8] transition-colors"
          >
            작업 보기 →
          </Link>
        </div>
        <div className="flex items-end justify-between mt-16">
          <span className="text-xs text-stone-800 tracking-[0.3em] uppercase">
            priblic art
          </span>
          <span className="text-xs text-stone-800">2026</span>
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
          {[
            { label: "자화상", desc: "자기고백 시리즈" },
            { label: "공공작업", desc: "도시와 사람" },
            { label: "공동창작", desc: "다른 시선 포개기" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[#0a0a0a] aspect-square p-8 flex flex-col justify-end hover:bg-stone-900 transition-colors cursor-pointer"
            >
              <p className="text-xs text-stone-600 tracking-widest uppercase mb-2">
                {item.desc}
              </p>
              <p className="text-lg font-kr">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
