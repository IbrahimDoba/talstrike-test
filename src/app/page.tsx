import { BottomNav } from "./components/bottom-nav";
import { Feed } from "./components/feed";
import { feedData } from "./constants/data";

export default function Home() {
  return (
    <main className="relative h-[100dvh] w-full overflow-hidden">
      <Feed items={feedData} activeTab="videos" />
      <BottomNav />
    </main>
  );
}
