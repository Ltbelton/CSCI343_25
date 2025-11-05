import News from "../components/NewsArticle/NewsInfo";

import { NEWS } from "../data/dummy_data";


export default function TechNewsScreen() {
  const category = "tech";
  const displayedNews = NEWS.filter((n) => n.category === category);
  return <News items={displayedNews} />;
}