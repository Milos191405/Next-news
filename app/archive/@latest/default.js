import NewsList from '@/components/news-list';
import { getLatestNews } from '@/lib/news';


function LatestNewsPage() {
  const latestNews = getLatestNews();
  return (
    <>
    <h2>Latest news</h2>
    <NewsList news={latestNews} />
    </>
  )
}

export default LatestNewsPage