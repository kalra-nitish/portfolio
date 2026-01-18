import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import { AnimatedAvatar } from '@/components/AnimatedAvatar'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

function Logo() {
  return (
    <svg width="50" height="42" viewBox="0 0 50 42" fill="none" className="transition-transform hover:scale-110">
      <path d="M25 0L50 42H0L25 0Z" fill="url(#gradient1)" />
      <path d="M25 10L40 36H10L25 10Z" fill="url(#gradient2)" />
      <defs>
        <linearGradient id="gradient1" x1="25" y1="0" x2="25" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7c3aed" />
          <stop offset="1" stopColor="#67e8f9" />
        </linearGradient>
        <linearGradient id="gradient2" x1="25" y1="10" x2="25" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f472b6" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function DiagonalPattern() {
  return (
    <div className="absolute right-0 top-1/4 h-96 w-1/2 opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diagonal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <line x1="0" y1="20" x2="20" y2="0" stroke="#67e8f9" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal)"/>
      </svg>
    </div>
  )
}

function ScrollIndicator() {
  return (
    <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4 animate-bounce">
      <span className="text-sm tracking-[0.3em] text-robb-navy/40">SCROLL</span>
      <div className="h-12 w-px bg-robb-navy/20" />
    </div>
  )
}

export default function Home() {
  return (
    <Layout bgColor="#e7e9f0">
      <Head>
        <title>Nitish Kalra - Frontend Architect & AI Engineer</title>
        <meta
          name="description"
          content="Independent creative developer specializing in React, Next.js, and AI/ML integration. Building ambitious yet accessible web experiences."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] pt-32">
        <Container>
          <DiagonalPattern />
          
          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex flex-col justify-center">
              <h1 className="font-serif text-6xl font-bold leading-tight text-robb-navy sm:text-7xl lg:text-8xl">
                Hi, my <span className="inline-block">name is <strong className="text-robb-navy">Nitish</strong><span className="text-robb-cyan">.</span></span>
              </h1>
              
              <p className="mt-8 text-xl leading-relaxed text-robb-navyDark sm:text-2xl">
                I'm a <strong className="font-semibold text-robb-navy">frontend architect</strong> from New Delhi, India.
              </p>
            </div>

            {/* Right Column - Animated Illustrated Avatar */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative">
                <AnimatedAvatar className="h-96 w-96" />
                <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-robb-purple opacity-20 blur-3xl" />
                <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-robb-cyan opacity-20 blur-3xl" />
              </div>
            </div>
          </div>

          <ScrollIndicator />
        </Container>
      </section>

      {/* About Section */}
      <section className="bg-white py-32">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-5xl font-bold leading-tight text-robb-navy sm:text-6xl lg:text-7xl">
              Let's work <strong>together</strong><span className="text-robb-pink">.</span>
            </h2>
            <div className="mt-4 h-1 w-24 bg-robb-cyan" />

            <div className="mt-12 space-y-6 text-xl leading-relaxed text-robb-navyDark/80">
              <p>
                I'm a <strong className="font-semibold text-robb-navy">frontend architect</strong> from New Delhi, India. 
                From <strong className="font-semibold text-robb-navy">interaction design</strong> to <strong className="font-semibold text-robb-navy">scalable design systems</strong>, 
                single-page apps to something more experimental with <strong className="font-semibold text-robb-navy">AI/ML</strong>. 
              </p>
              <p>
                I help awesome people to build <strong className="font-semibold text-robb-navy">ambitious yet accessible</strong> web projects — 
                <strong className="font-semibold text-robb-purple">the wilder, the better</strong>.
              </p>
            </div>

            <Link 
              href="/work" 
              className="group mt-12 inline-flex items-center gap-3 text-lg font-medium text-robb-purple hover:text-robb-purpleDark transition"
            >
              <span>About my approach</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
              <span className="sr-only">About my approach</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Experience Stats */}
      <section className="py-24">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Delivered' },
              { number: '15+', label: 'Technologies' },
              { number: '3', label: 'Top Companies' },
            ].map((stat, i) => (
              <div key={i} className="group cursor-default rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="text-5xl font-bold text-robb-purple">{stat.number}</div>
                <div className="mt-2 text-sm font-medium tracking-wide text-robb-navy/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-32">
        <Container>
          <h2 className="mb-4 font-serif text-4xl font-bold text-robb-navy sm:text-5xl">
            Key Projects<span className="text-robb-cyan">.</span>
          </h2>
          <div className="mb-16 h-1 w-24 bg-robb-cyan" />

          <div className="space-y-20">
            {/* Project 1 */}
            <div className="group">
              <h3 className="font-serif text-3xl font-bold text-robb-navy sm:text-4xl">
                Tech9 Platform<span className="text-robb-pink">.</span>
              </h3>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-robb-navyDark/80">
                Leading <strong className="font-semibold text-robb-navy">frontend architecture</strong> for enterprise-scale applications. 
                Building <strong className="font-semibold text-robb-navy">scalable design systems</strong> with React, Next.js, and modern tooling.
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-robb-navyDark/80">
                Since 2018, I've helped shape the technical direction and <strong className="font-semibold text-robb-purple">mentored teams</strong> to deliver 
                exceptional user experiences.
              </p>
            </div>

            {/* Project 2 */}
            <div className="group">
              <h3 className="font-serif text-3xl font-bold text-robb-navy sm:text-4xl">
                AI/ML Integration<span className="text-robb-cyan">.</span>
              </h3>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-robb-navyDark/80">
                Recently completed <strong className="font-semibold text-robb-navy">M.Tech in Data Science & Engineering</strong> at BITS Pilani 
                while actively integrating <strong className="font-semibold text-robb-navy">machine learning capabilities</strong> into web applications.
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-robb-navyDark/80">
                Bridging the gap between <strong className="font-semibold text-robb-purple">AI/ML</strong> and user-facing applications 
                to create intelligent, responsive experiences.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}