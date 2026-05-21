export default function ContactPage() {
  return (
    <main className="px-8 pt-32 pb-24 max-w-2xl">
      <div className="mb-16">
        <p className="text-xs text-stone-600 tracking-[0.3em] uppercase mb-4">연락</p>
        <h1 className="font-kr text-4xl md:text-5xl">함께 만들기</h1>
      </div>

      <div className="border-t border-stone-900 pt-12 space-y-10">
        <p className="text-stone-300 leading-relaxed text-lg">
          전시 커미션, 워크숍, 협업, 강연 문의는 아래로 연락해 주세요.
        </p>
        <a
          href="mailto:beecheechang@gmail.com"
          className="block text-xl text-stone-400 hover:text-[#f0ede8] transition-colors"
        >
          beecheechang@gmail.com →
        </a>
        <div className="pt-4 space-y-2 text-sm text-stone-600">
          <p>전시 커미션</p>
          <p>워크숍 · 강연</p>
          <p>브랜드 협업</p>
          <p>인터뷰 · 기고</p>
        </div>
      </div>
    </main>
  );
}
