import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import { PixelImage } from "@/components/ui/pixel-image"
import { ClientOnly } from '@/components/ClientOnly'
import { Meteors } from "@/components/ui/meteors"


import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <div className="relative h-full w-full">
    <Layout bgColor="#8fd8c7">
      <Head>
        <title>About - Nitish Kalra</title>
        <meta
          name="description"
          content="I'm Nitish Kalra. I live in New Delhi, India, from where I make browsers dance."
        />
      </Head>
      {/* Meteors - Fixed full screen overlay */}
      <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-0">
        <Meteors number={30} angle={-65} />
      </div>
      
      <Container className="mt-16 sm:mt-32 relative z-10">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none flex items-center justify-center">
              <ClientOnly fallback={
                <Image
                  src={portraitImage}
                  alt="Nitish Kalra"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                  priority
                />
              }>
                <div className="rotate-3">
                  <PixelImage
                    src={typeof portraitImage === 'string' ? portraitImage : portraitImage.src}
                    customGrid={{ rows: 4, cols: 6 }}
                    grayscaleAnimation
                  />
                </div>
              </ClientOnly>
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2 pb-32">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m <strong className="font-semibold text-robb-purple">Nitish Kalra</strong> from New Delhi, India, where I make <strong className="font-semibold text-robb-purple">Browsers</strong> Dance.
            </h1>
            <div className="mt-6 space-y-7 text-base">
              <p>
              From sketching and reading to building intelligent digital products, curiosity has always shaped how I grow. My first interaction with a computer in fourth grade quietly set the foundation for everything that followed. While my handwriting slowly faded, my passion for creating through technology only strengthened. Looking back, it feels less like coincidence and more like early alignment.</p>
              <p>My interests have always balanced creativity and structure. Anime, strategy games, and competitive play sharpen my problem-solving instincts, while reading history, mythology, and fiction continues to influence how I think about systems, narratives, and human behavior.</p>

              Today, I work as a Software Engineer at Tech9, where I’ve evolved into a frontend-focused product and architecture leader. I design and scale modern UI platforms using <strong className="font-semibold text-robb-purple">React, Next.js, TypeScript, Tailwind, and MUI</strong>, while collaborating closely with backend systems in Go and cloud infrastructure on AWS. Beyond writing code, I take ownership of frontend architecture, mentor engineers, and help shape technical direction across products.

            <p>What excites me most now is the intersection of frontend engineering and AI. I actively explore how AI can enhance developer productivity, improve testing, support design systems, and enable more adaptive user experiences. I believe the future of frontend is not just visual — it is intelligent.</p>

    <p>My focus today is on building scalable systems, growing strong engineering teams, and creating products that feel fast, accessible, thoughtful, and future-ready.
              </p>
              
            </div>
          </div>
        </div>
      </Container>
    </Layout>
    </div>
  )
}
