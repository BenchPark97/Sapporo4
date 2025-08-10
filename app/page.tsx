
function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}
function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge">{children}</span>;
}
function Node({ time, title, link, note }: { time?: string; title: string; link?: string; note?: string }) {
  return (
    <div className="node pl-6">
      <div className="node-dot" />
      <div className="flex items-start gap-3">
        {time && <div className="w-16 text-xs text-slate-500 font-medium mt-1">{time}</div>}
        <div className="flex-1">
          <div className="font-semibold">{title}</div>
          {note && <div className="text-sm text-slate-600 mt-1">{note}</div>}
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-brand-700 hover:text-brand-900 underline underline-offset-4">
              자세히 보기 ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
function Card({ title, subtitle, img, tags, map, site }: { title: string; subtitle?: string; img?: string; tags?: string[]; map?: string; site?: string; }) {
  return (
    <div className="card hover:shadow-lg transition">
      {img && (
        <div className="rounded-2xl overflow-hidden mb-4">
          <img src={img} alt={title} className="w-full h-48 object-cover" />
        </div>
      )}
      <h4 className="text-lg font-semibold">{title}</h4>
      {subtitle && <p className="text-sm text-slate-600 mt-1">{subtitle}</p>}
      {tags && <div className="mt-3 flex flex-wrap gap-2">{tags.map((t, i) => <Pill key={i}>{t}</Pill>)}</div>}
      <div className="flex gap-3 mt-4">
        {site && <a href={site} target="_blank" rel="noreferrer" className="btn-primary">공식 사이트</a>}
        {map && <a href={map} target="_blank" rel="noreferrer" className="btn-ghost border">Google 지도</a>}
      </div>
    </div>
  );
}
export default function Page() {
  const EXT = {
    hotel: {
      name: "삿포로 엑셀 호텔 도큐",
      link: "https://www.agoda.com/ko-kr/sapporo-excel-hotel-tokyu/hotel/sapporo-jp.html?cid=1719676",
      map: "https://maps.google.com/?q=Sapporo+Excel+Hotel+Tokyu",
      img: "/images/hotel.png"
    },
    tours: {
      bieiWhiteShadow: { name: "흰그림자 투어 (비에이/후라노)", link: "https://www.whiteshadowtour.co.kr/tour/TourView?code=1683532114" },
      otaruShakotan: { name: "라쿠투어 (샤코탄 & 오타루)", link: "https://smartstore.naver.com/rakutour/products/10149171855" },
    },
    eats: {
      crab: { name: "카니혼케 (蟹本家) 삿포로역 본점", site: "https://www.kani-honke.co.jp/en/location_sapporo.html", map: "https://maps.google.com/?q=Kani+Honke+Sapporo+Station+Main+Branch", tags: ["털게요리", "게 가이세키"], img: "/images/crab.png" },
      soupcurry: { name: "Suage+ (스아게) 수프카레", site: "https://suage.info/", map: "https://maps.google.com/?q=Suage+%E3%81%99%E3%81%82%E3%81%92+Sapporo", tags: ["스프카레"], img: "/images/soupcurry.png" },
      jingisukan: { name: "삿포로 비어 가든 (징키스칸)", site: "https://sapporo-bier-garten.jp/", map: "https://maps.google.com/?q=Sapporo+Beer+Garden", tags: ["징키스칸", "맥주"], img: "/images/jingisukan.png" },
      kaisendon1: { name: "돈부리차야 (Nijo Market)", site: "https://donburi.jp/en/", map: "https://maps.google.com/?q=Donburi+Chaya+Nijo+Market", tags: ["카이센동"], img: "/images/kaisendon.png" },
      kaisendon2: { name: "키타노 구르메테이 (Curb Market)", site: "https://www.kitanogurume.co.jp/en/", map: "https://maps.google.com/?q=Kitanogurume-tei+Sapporo+Central+Wholesale+Market", tags: ["카이센동"], img: "/images/kaisendon.png" },
      izakayaEn: { name: "이자카야 炭火居酒屋 炎(えん)", site: "https://www.hotpepper.jp/strJ000981454/", map: "https://maps.google.com/?q=%E7%82%AD%E7%81%AB%E5%B1%85%E9%85%92%E5%B1%8B+%E7%82%8E+%E6%9C%AD%E5%B9%8C", tags: ["노미호다이"], img: "/images/izakaya.png" },
    },
    images: { hero: "/images/hero.png" }
  };
  return (
    <main className="text-slate-900">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pt-10 pb-6">
        <div className="rounded-[28px] border border-slate-200/60 bg-white/80 backdrop-blur overflow-hidden shadow-soft">
          <div className="grid md:grid-cols-2 gap-0 items-stretch">
            <div className="p-8 md:p-10">
              <span className="badge">Sapporo · 3박4일 · Custom</span>
              <h1 className="title mt-3">삿포로 3박4일 일정</h1>
              <p className="subtitle">paks_h의 동선과 맛집 추천</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={EXT.hotel.link} target="_blank" rel="noreferrer" className="btn-primary">숙소 보기 (Agoda)</a>
                <a href={EXT.hotel.map} target="_blank" rel="noreferrer" className="btn-ghost border">호텔 지도</a>
              </div>
            </div>
            <div className="relative p-6 md:p-8">
              {/* 호텔 일러스트 */}
              <img src={EXT.hotel.img} alt="Hotel illustration" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 일정 & 동선 (이미지 제거, 타임라인만) */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">일정 & 동선</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">DAY 1 · 도착/스스키노/스프카레</h3>
              <Badge>도시 산책</Badge>
            </div>
            <div className="timeline">
              <Node time="오후" title={`체크인 – ${EXT.hotel.name}`} link={EXT.hotel.link} />
              <Node time="저녁" title={`스프카레 – ${EXT.eats.soupcurry.name}`} link={EXT.eats.soupcurry.site} note="대기 많음 · 웨이팅 감안" />
              <Node time="밤" title="스스키노 야경 · 라멘요코초" link="https://maps.google.com/?q=Susukino+Ramen+Alley" />
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">DAY 2 · 비에이/후라노 (흰그림자)</h3>
              <Badge>투어</Badge>
            </div>
            <div className="timeline">
              <Node time="종일" title={EXT.tours.bieiWhiteShadow.name} link={EXT.tours.bieiWhiteShadow.link} note="청의 연못 · 패치워크길 · 팜 토미타" />
              <Node time="저녁" title={`카이센동 – ${EXT.eats.kaisendon1.name}`} link={EXT.eats.kaisendon1.site} />
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">DAY 3 · 샤코탄/오타루 (라쿠투어)</h3>
              <Badge>투어</Badge>
            </div>
            <div className="timeline">
              <Node time="주간" title={EXT.tours.otaruShakotan.name} link={EXT.tours.otaruShakotan.link} note="샤코탄 곶 · 오타루 운하" />
              <Node time="저녁" title={`이자카야 엔(炎) · 노미호다이`} link={EXT.eats.izakayaEn.site} />
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">DAY 4 · 비어 가든/출국</h3>
              <Badge>귀국</Badge>
            </div>
            <div className="timeline">
              <Node time="오전" title="오도리 공원 · 빨간벽돌 청사" link="https://maps.google.com/?q=Odori+Park+Sapporo" />
              <Node time="점심" title={`${EXT.eats.jingisukan.name}`} link={EXT.eats.jingisukan.site} />
              <Node time="이동" title="삿포로 → 신치토세 공항" />
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 맛집 (음식 일러스트) */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">핵심 맛집</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title={EXT.eats.crab.name} subtitle="대표 게요리 전문 · 예약 추천" img={EXT.eats.crab.img} tags={EXT.eats.crab.tags} site={EXT.eats.crab.site} map={EXT.eats.crab.map} />
          <Card title={EXT.eats.soupcurry.name} subtitle="로컬 인기 스프카레" img={EXT.eats.soupcurry.img} tags={EXT.eats.soupcurry.tags} site={EXT.eats.soupcurry.site} map={EXT.eats.soupcurry.map} />
          <Card title={EXT.eats.jingisukan.name} subtitle="레드브릭 양식장 분위기" img={EXT.eats.jingisukan.img} tags={EXT.eats.jingisukan.tags} site={EXT.eats.jingisukan.site} map={EXT.eats.jingisukan.map} />
          <Card title={EXT.eats.kaisendon1.name} subtitle="니조시장 인기 카이센동" img={EXT.eats.kaisendon1.img} tags={EXT.eats.kaisendon1.tags} site={EXT.eats.kaisendon1.site} map={EXT.eats.kaisendon1.map} />
          <Card title={EXT.eats.kaisendon2.name} subtitle="중앙 도매시장 큐브마켓" img={EXT.eats.kaisendon2.img} tags={EXT.eats.kaisendon2.tags} site={EXT.eats.kaisendon2.site} map={EXT.eats.kaisendon2.map} />
          <Card title={EXT.eats.izakayaEn.name} subtitle="노미호다이 인기" img={EXT.eats.izakayaEn.img} tags={EXT.eats.izakayaEn.tags} site={EXT.eats.izakayaEn.site} map={EXT.eats.izakayaEn.map} />
        </div>
      </section>

      {/* 투어 링크 */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
        <div className="card">
          <h3 className="text-lg font-semibold">투어 · 예약 바로가기</h3>
          <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700">
            <li><a href={EXT.tours.bieiWhiteShadow.link} target="_blank" rel="noreferrer" className="text-brand-700 hover:text-brand-900 underline underline-offset-4">{EXT.tours.bieiWhiteShadow.name}</a></li>
            <li><a href={EXT.tours.otaruShakotan.link} target="_blank" rel="noreferrer" className="text-brand-700 hover:text-brand-900 underline underline-offset-4">{EXT.tours.otaruShakotan.name}</a></li>
          </ul>
          <p className="mt-3 text-sm text-slate-500">픽업/집합 장소는 각 예약 페이지에서 확인하세요.</p>
        </div>
      </section>

      <footer className="border-t bg-white/70">
        <div className="max-w-6xl mx_auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Sapporo Trip · Built for <span className="font-semibold">paks_h</span></p>
          <div className="flex items-center gap-3">
            <a href="https://instagram.com/paks_h" target="_blank" rel="noreferrer" className="btn-primary">인스타 @paks_h</a>
            <a href="https://maps.google.com/?q=Sapporo" target="_blank" rel="noreferrer" className="btn-ghost border">전체 지도</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
