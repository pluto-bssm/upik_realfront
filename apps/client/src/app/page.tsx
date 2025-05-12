import ContentCard from "@/components/ContentBox";
import NavBar from "@/components/NavBar";


const posts = [
  {
    title: "학교에서 가장 무서운 존재는?",
    date: "2025-05-23",
    likes: 170,
    content:
      "부산소프트웨어 마이스터고등학교는 총 64명이 한 학년에 있으며 곽상미선생님이 참 귀여우시다 ㅎㅎ 그리고 짜장이가 참귀엽다 진짜 카와이하다 뽀뽀하고싶다,,ㅠㅠ",
  },
  {
    title: "급식 킹",
    date: "2025-04-20",
    likes: 98,
    content: "덮밥 vs 핫도그 골라봐",
  },
  {
    title: "라면데이~",
    date: "2025-03-15",
    likes: 205,
    content: "부산소프트웨어 마이스터고등학교는 한달에 한번~ 라면데이~",
  },
];

export default function Home() {
  return (
    <div className="flex">
      <NavBar />
      <main className="bg-[#EFF5FF] min-h-screen flex-1 px-10 py-14 ml-[242px] h-[337px] w-[866px] pl-[150px]">
        <h1 className="text-4xl font-bold mb-12">학교생활 가이드</h1>
        <div className="flex flex-col gap-8">
          {posts.map((post, idx) => (
            <ContentCard key={idx} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
