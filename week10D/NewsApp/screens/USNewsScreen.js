import News from "../components/NewsArticle/NewsInfo";
import { NEWS } from "../data/dummy_data";


export default function USNewsScreen() {
  const category = "us";
  const displayedNews = NEWS.filter((n) => n.category === category);
  return <News items={displayedNews} />;
}