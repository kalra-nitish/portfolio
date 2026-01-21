import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { DownloadCV } from '@/components/DownloadCV'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

function Logo({ bgColor = 'white' }) {
  return (
    <div className="relative transition-transform hover:scale-110">
      <svg width="60" height="60" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#67e8f9" />
          </linearGradient>
        </defs>
        {/* Outer triangle */}
        <path
          d="M 50 10 L 90 80 L 10 80 Z"
          fill="none"
          stroke="url(#triangleGradient)"
          strokeWidth="3"
        />
        {/* Inner filled triangle with background color */}
        <path
          d="M 50 25 L 75 70 L 25 70 Z"
          fill={bgColor}
          opacity="0.9"
        />
      </svg>
    </div>
  )
}

export function Layout({ children, bgColor = 'white', showConnectFooter = true }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: bgColor }}>
      {/* SCROLL Indicator */}
      {/* <div className="fixed left-8 top-1/2 z-40 hidden lg:block" style={{ transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'center' }}>
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium tracking-[0.3em] text-robb-navy/40 dark:text-white/40">
            SCROLL
          </span>
          <div className="h-px w-12 bg-robb-navy/20 dark:bg-white/20"></div>
        </div>
      </div> */}

      {/* Header */}
      <header className="lg:fixed lg:left-0 lg:right-0 lg:top-0 z-50 fixed top-0 left-0 right-0" style={{ backgroundColor: bgColor }}>
        <div className="flex items-center justify-between py-6 px-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-6">
            <Link href="/" aria-label="Home">
              <Logo bgColor={bgColor} />
            </Link>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-sm font-bold tracking-[0.2em] text-robb-navy hover:text-robb-purple transition cursor-pointer dark:text-white dark:hover:text-robb-cyan"
            >
              MENU
            </button>
          </div>
          <Link 
            href="mailto:nitish4561kalra@gmail.com" 
            className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-[0.15em] transition hover:opacity-90"
            style={{ 
              backgroundColor: bgColor === 'white' ? '#67e8f9' : bgColor,
              color: '#1e293b',
              border: '2px solid rgba(0,0,0,0.1)'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            HIRE ME
          </Link>
        </div>
      </header>

      {/* Full-Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-robb-navy transition-all duration-700 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{
          animation: isMenuOpen ? 'slideDownBounce 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'none',
        }}
      >
        <style jsx>{`
          @keyframes slideDownBounce {
            0% {
              transform: translateY(-100%);
            }
            60% {
              transform: translateY(2%);
            }
            80% {
              transform: translateY(-1%);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}</style>
        <div className="flex h-full flex-col">
          {/* Menu Header */}
          <div className="flex items-center justify-between py-6 px-4 sm:px-8 lg:px-12">
            <Link href="/" aria-label="Home" onClick={() => setIsMenuOpen(false)}>
              <Logo bgColor="#1a202c" />
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-bold tracking-[0.2em] text-white hover:text-robb-cyan transition"
              >
                CLOSE MENU
              </button>
            </div>
          </div>

          {/* Menu Content */}
          <Container>
            <div className="flex flex-1 items-center">
              <div className="grid w-full gap-16 lg:grid-cols-2">
                {/* Main Navigation */}
                <div>
                  <ul className="space-y-6">
                    <li>
                      <Link
                        href="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="group block"
                      >
                        <span className="font-serif text-4xl font-bold text-white hover:text-robb-cyan transition">
                          Home
                        </span>
                        <span className="mt-2 block text-sm text-white/60">
                          Back to the home page.
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/work"
                        onClick={() => setIsMenuOpen(false)}
                        className="group block"
                      >
                        <span className="font-serif text-4xl font-bold text-white hover:text-robb-cyan transition">
                          Work
                        </span>
                        <span className="mt-2 block text-sm text-white/60">
                          My projects and experience.
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        onClick={() => setIsMenuOpen(false)}
                        className="group block"
                      >
                        <span className="font-serif text-4xl font-bold text-white hover:text-robb-cyan transition">
                          About
                        </span>
                        <span className="mt-2 block text-sm text-white/60">
                          A little about me and my background.
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/articles"
                        onClick={() => setIsMenuOpen(false)}
                        className="group block"
                      >
                        <span className="font-serif text-4xl font-bold text-white hover:text-robb-cyan transition">
                          Articles
                        </span>
                        <span className="mt-2 block text-sm text-white/60">
                          My latest writing on tech and AI.
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/uses"
                        onClick={() => setIsMenuOpen(false)}
                        className="group block"
                      >
                        <span className="font-serif text-4xl font-bold text-white hover:text-robb-cyan transition">
                          Uses
                        </span>
                        <span className="mt-2 block text-sm text-white/60">
                          Software and tools I use daily.
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Let's Connect Footer - Show on all pages except work */}
      {showConnectFooter && (
        <section className="bg-robb-navy py-24">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
                Let's connect<span className="text-robb-cyan">.</span>
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 bg-robb-cyan" />

              <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                <a
                  href="https://github.com/kalra-nitish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-robb-navy shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
                >
                  <GitHubIcon className="h-5 w-5" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/nitishkalra-uiaspects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-robb-navy shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
                >
                  <LinkedInIcon className="h-5 w-5" />
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/4561Nitish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-robb-navy shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
                >
                  <TwitterIcon className="h-5 w-5" />
                  Twitter
                </a>
                <a
                  href="https://instagram.com/nitish._kalra._"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-robb-navy shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
                >
                  <InstagramIcon className="h-5 w-5" />
                  Instagram
                </a>
              </div>

              <div className="mt-12 flex justify-center">
                <DownloadCV variant="primary" />
              </div>
            </div>
          </Container>
        </section>
      )}
    </div>
  )
}

