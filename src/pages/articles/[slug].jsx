import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'

export default function ArticleViewer() {
  const router = useRouter()
  const { slug } = router.query
  const [articleHtml, setArticleHtml] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!slug) return

    // Fetch the HTML article
    fetch(`/articles/${slug}/index.html`)
      .then((res) => {
        if (!res.ok) throw new Error('Article not found')
        return res.text()
      })
      .then((html) => {
        // Extract just the article content (remove html, head, body tags)
        const parser = new DOMParser()
        const doc = parser.parseFromString(html, 'text/html')
        const article = doc.querySelector('article')
        if (article) {
          // Fix relative image paths to be absolute
          const images = article.querySelectorAll('img')
          images.forEach((img) => {
            const src = img.getAttribute('src')
            if (src && src.startsWith('./')) {
              img.setAttribute('src', `/articles/${slug}/${src.substring(2)}`)
            }
          })
          
          setArticleHtml(article.innerHTML)
        }
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [slug])

  // Get article metadata from articles.json
  const [meta, setMeta] = useState(null)
  useEffect(() => {
    if (!slug) return

    fetch('/data/articles.json')
      .then((res) => res.json())
      .then((articles) => {
        const article = articles.find((a) => a.slug === slug)
        if (article) {
          setMeta(article)
        }
      })
      .catch(() => {})
  }, [slug])

  if (loading) {
    return (
      <Layout bgColor="#f5f0e8">
        <Container className="mt-16 lg:mt-32">
          <div className="text-center">Loading...</div>
        </Container>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout bgColor="#f5f0e8">
        <Container className="mt-16 lg:mt-32">
          <div className="text-center text-red-500">{error}</div>
        </Container>
      </Layout>
    )
  }

  // Define a palette of background colors
  const colorPalette = [
    '#f0f9ff', // light blue
    '#f0fdf4', // light green
    '#fefce8', // light yellow
    '#fef2f2', // light red/pink
    '#f3e8ff', // light purple
    '#ecfdf5', // light emerald
  ]

  // Get a consistent color based on the article slug
  const generateColorHash = (str) => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    return hash
  }

  const hash = generateColorHash(slug || '')
  const bgColor = colorPalette[Math.abs(hash) % colorPalette.length]

  return (
    <Layout bgColor={bgColor}>
      <Head>
        <title>{meta?.title || 'Article'} - Nitish Kalra</title>
        <meta name="description" content={meta?.description || ''} />
        <style>{`
          .article-meta {
            display: flex;
            gap: 1rem;
            font-size: 0.875rem;
            color: #71717a;
            margin-bottom: 2rem;
          }
          .article-meta .date::before {
            content: '•';
            margin-right: 0.5rem;
          }
          .hero-image {
            margin: 2rem 0;
          }
          .hero-image img {
            width: 100%;
            height: auto;
            border-radius: 1rem;
          }
          .lead {
            font-size: 1.25rem;
            font-style: italic;
            color: #52525b;
            margin: 2rem 0;
            text-align: center;
          }
          article header h1 {
            font-size: 2.5rem;
            font-weight: 800;
            line-height: 1.2;
            color: #000 !important;
            margin-bottom: 1rem;
          }
          article h2,
          article .prose h2,
          .prose article h2 {
            font-size: 1.875rem !important;
            font-weight: 700 !important;
            color: #000 !important;
            margin-top: 3rem !important;
            margin-bottom: 1rem !important;
          }
          article h3,
          article .prose h3,
          .prose article h3 {
            font-size: 1.5rem !important;
            font-weight: 600 !important;
            color: #000 !important;
            margin-top: 2rem !important;
            margin-bottom: 0.75rem !important;
          }
          article figure {
            margin: 2rem 0;
          }
          article figure img {
            width: 100%;
            height: auto;
            border-radius: 0.75rem;
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
          }
          article figcaption {
            margin-top: 0.5rem;
            font-size: 0.875rem;
            color: #71717a;
            text-align: center;
            font-style: italic;
          }
          article pre {
            background-color: #18181b;
            color: #fafafa;
            padding: 1.5rem;
            border-radius: 0.75rem;
            overflow-x: auto;
            margin: 1.5rem 0;
          }
          article code {
            font-family: 'Courier New', Courier, monospace;
            font-size: 0.875rem;
          }
          article p code {
            background-color: #f4f4f5;
            color: #18181b;
            padding: 0.125rem 0.375rem;
            border-radius: 0.25rem;
            font-size: 0.875em;
          }
          article ul, article ol {
            margin: 1.5rem 0;
            padding-left: 1.5rem;
          }
          article li {
            margin: 0.75rem 0;
            line-height: 1.75;
          }
          article a {
            color: #0891b2;
            text-decoration: underline;
            font-weight: 500;
          }
          article a:hover {
            color: #0e7490;
          }
          article p strong,
          article strong {
            font-weight: 600 !important;
            color: #000 !important;
          }
          article em {
            font-style: italic;
          }
          article hr {
            margin: 3rem 0;
            border: 0;
            border-top: 1px solid #e4e4e7;
          }
          article .article-footer {
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid #e4e4e7;
          }
          @media (max-width: 640px) {
            article header h1 {
              font-size: 2rem;
            }
            article h2,
            article .prose h2,
            .prose article h2 {
              font-size: 1.5rem !important;
            }
            article h3,
            article .prose h3,
            .prose article h3 {
              font-size: 1.25rem !important;
            }
          }
        `}</style>
      </Head>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition hover:ring-zinc-900/10 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
              >
                <path
                  d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <article
              className="prose prose-zinc prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: articleHtml }}
            />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

