import "./globals.css";

export const metadata = {
  title: "삿포로 3박4일 일정 | paks_h",
  description: "paks_h의 동선과 맛집 추천을 한눈에 정리한 삿포로 3박4일 일정",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
