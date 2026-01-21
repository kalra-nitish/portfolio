import Head from 'next/head'
import fs from 'fs'
import path from 'path'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { AnimatedList } from '@/components/ui/animated-list'
import { cn } from '@/lib/utils'

function Article({ article }) {
  return (
    <article 
      className={cn(
        "relative w-full cursor-pointer overflow-hidden rounded-2xl p-6 border-2",
        // animation styles
        "transition-all duration-300 ease-in-out hover:scale-[102%] hover:shadow-xl",
        // light styles
        "bg-white border-zinc-200 shadow-lg hover:border-robb-purple",
        // dark styles
        "dark:bg-zinc-900 dark:border-zinc-700 dark:hover:border-robb-cyan"
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <Card.Title href={`/articles/${article.slug}`} className="text-2xl font-bold text-zinc-900 dark:text-white hover:text-robb-purple dark:hover:text-robb-cyan transition-colors">
              {article.title}
            </Card.Title>
            <Card.Eyebrow
              as="time"
              dateTime={article.date}
              className="mt-2 text-zinc-500 dark:text-zinc-400"
              decorate
            >
              {formatDate(article.date)}
            </Card.Eyebrow>
          </div>
        </div>
        <Card.Description className="line-clamp-2 text-zinc-600 dark:text-zinc-300">{article.description}</Card.Description>
        <Card.Cta className="mt-2 text-robb-purple hover:text-robb-purpleDark dark:text-robb-cyan dark:hover:text-robb-cyanLight">Read article</Card.Cta>
      </div>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Articles - Nitish Kalra</title>
        <meta
          name="description"
          content="The Knowledge I get is the Knowledge to be in Public."
        />
      </Head>
      <SimpleLayout
        title="Writing on software development, important aspects of UI development, Data Science."
        intro="The knowledge I get is the knowledge to be in public arranged in chronological order."
        bgColor="#f5f0e8"
      >
        <div className="relative pb-32">
          <div className="mx-auto max-w-4xl">
            <AnimatedList delay={300} className="gap-6">
              {articles.map((article) => (
                <Article key={article.slug} article={article} />
              ))}
            </AnimatedList>
          </div>
          {/* Gradient fade at bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f5f0e8] dark:from-black"></div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  // Read articles from JSON file
  const articlesPath = path.join(process.cwd(), 'src/data/articles.json')
  const articlesData = fs.readFileSync(articlesPath, 'utf8')
  const articles = JSON.parse(articlesData)
  
  // Sort by date (oldest first for AnimatedList, which reverses the display)
  const sortedArticles = articles.sort((a, b) => new Date(a.date) - new Date(b.date))

  return {
    props: {
      articles: sortedArticles,
    },
  }
}
