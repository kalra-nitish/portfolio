import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import { DownloadCV } from '@/components/DownloadCV'

function WorkExperience({ company, role, period, description, technologies, logo, logoAlt }) {
  return (
    <div className="group relative rounded-2xl border border-robb-navy/10 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white border border-robb-navy/10 overflow-hidden">
            {logo ? (
              <img
                src={logo}
                alt={logoAlt || company}
                className="h-full w-full object-contain p-2"
              />
            ) : (
              <span className="text-2xl font-bold text-robb-purple">{logoAlt}</span>
            )}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-serif text-2xl font-bold text-robb-navy">{company}</h3>
          <p className="mt-1 font-medium text-robb-purple">{role}</p>
          <p className="mt-1 text-sm text-robb-navy/60">{period}</p>
          {Array.isArray(description) ? (
            <ul className="mt-4 space-y-2">
              {description.map((item, index) => (
                <li key={index} className="flex items-start gap-2 leading-relaxed text-robb-navyDark/80">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-robb-cyan"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 leading-relaxed text-robb-navyDark/80">{description}</p>
          )}
          {technologies && (
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-robb-cyan/10 px-3 py-1 text-xs font-medium text-robb-purple"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function Project({ title, description, link, technologies }) {
  return (
    <div className="group">
      <h3 className="font-serif text-2xl font-bold text-robb-navy sm:text-3xl">
        {title}<span className="text-robb-cyan">.</span>
      </h3>
      {Array.isArray(description) ? (
        <ul className="mt-4 max-w-3xl space-y-2">
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-2 leading-relaxed text-robb-navyDark/80">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-robb-cyan"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 max-w-3xl leading-relaxed text-robb-navyDark/80">
          {description}
        </p>
      )}
      {technologies && (
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-robb-purple/10 px-3 py-1 text-xs font-medium text-robb-purple"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      {link && (
        <Link
          href={link}
          className="group mt-6 inline-flex items-center gap-2 text-robb-purple hover:text-robb-purpleDark transition"
        >
          <span>View project</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      )}
    </div>
  )
}

export default function Work() {
  return (
    <Layout bgColor="#ffc8dc" showConnectFooter={false}>
      <Head>
        <title>Work - Nitish Kalra</title>
        <meta
          name="description"
          content="My professional experience and projects. Frontend Architect with 10+ years building scalable applications."
        />
      </Head>

      {/* Hero */}
      <section className="py-32 lg:py-48">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h1 className="font-serif text-5xl font-bold leading-tight text-robb-navy sm:text-6xl lg:text-7xl">
              About my work<span className="text-robb-cyan">.</span>
            </h1>
            <div className="mt-6 h-1 w-16 bg-gradient-to-r from-robb-pink to-robb-cyan" />

            <p className="mt-12 text-xl leading-relaxed text-robb-navy">
            I collaborate with ambitious teams to design and architect <strong className="font-semibold text-robb-navy">scalable, accessible, and high-performance web products</strong>. With over a decade of experience across startups and enterprise platforms, I focus on <strong className="font-semibold text-robb-navy">building frontend systems that are maintainable, user-centric, and ready for the AI-driven future.</strong>
            </p>
          </div>
        </Container>
      </section>

      {/* SCROLL Divider */}
      <section className="py-16">
        <Container>
          <div className="flex items-center justify-center">
            {/* <div className="flex items-center gap-4 text-robb-navy/40">
              <div className="h-px w-24 bg-robb-navy/20"></div>
              <span className="text-xs font-medium tracking-[0.3em]">SCROLL</span>
              <div className="h-px w-24 bg-robb-navy/20"></div>
            </div> */}
          </div>
        </Container>
      </section>

      {/* Experience */}
      <section className="bg-white py-24">
        <Container>
          <h2 className="mb-4 font-serif text-4xl font-bold text-robb-navy sm:text-5xl">
            Experience<span className="text-robb-cyan">.</span>
          </h2>
          <div className="mb-16 h-1 w-24 bg-robb-cyan" />

          <div className="space-y-8">
            <WorkExperience
              company="Tech9"
              role="Senior Software Engineer"
              period="Mar 2018 - Present"
              logo="/images/logos/tech9.png"
              logoAlt="Tech9"
              description={[
                "Leading frontend architecture and development for enterprise-scale applications.",
                "Building scalable design systems and component libraries used across multiple teams.",
                "Mentoring junior developers and conducting technical interviews.",
                "Driving technical excellence through code reviews and best practices.",
                "Specializing in React, Next.js, and modern frontend tooling."
              ]}
              technologies={['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL']}
            />

            <WorkExperience
              company="Publicis Sapient"
              role="Senior Associate L2"
              period="Mar 2016 - Mar 2018"
              logo="/images/logos/publicis.jpeg"
              logoAlt="Publicis Sapient"
              description={[
                "Developed and maintained large-scale web applications for enterprise clients.",
                "Collaborated with cross-functional teams to deliver high-quality solutions.",
                "Implemented responsive designs and ensured cross-browser compatibility.",
                "Focused on modern JavaScript frameworks and industry best practices.",
                "Participated in agile development processes and sprint planning."
              ]}
              technologies={['React', 'Redux', 'JavaScript', 'SASS', 'Webpack']}
            />

            <WorkExperience
              company="Cognizant"
              role="Programmer Analyst"
              period="Feb 2014 - Mar 2016"
              logo="/images/logos/cognizant.jpeg"
              logoAlt="Cognizant"
              description={[
                "Built responsive web applications and user interfaces for various clients.",
                "Worked on multiple projects implementing pixel-perfect designs.",
                "Ensured cross-browser compatibility and optimized performance.",
                "Gained expertise in frontend fundamentals and web standards.",
                "Participated in agile methodologies and team collaboration."
              ]}
              technologies={['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap']}
            />
          </div>
        </Container>
      </section>

      {/* Key Projects */}
      <section className="bg-[#ffc8dc] py-24">
        <Container>
          <h2 className="mb-4 font-serif text-4xl font-bold text-robb-navy sm:text-5xl">
            Key Projects<span className="text-robb-cyan">.</span>
          </h2>
          <div className="mb-16 h-1 w-24 bg-robb-cyan" />

          <div className="space-y-16">
            <Project
              title="Enterprise Design System"
              description={[
                "Led the development of a comprehensive design system used across multiple products at Tech9.",
                "Created reusable components and established consistent design patterns.",
                "Built tooling and documentation for seamless integration across teams.",
                "Improved development velocity by 40% through standardized components.",
                "Ensured consistent user experience across the entire platform."
              ]}
              technologies={['React', 'Storybook', 'TypeScript', 'Styled Components', 'Figma']}
            />

            <Project
              title="AI-Powered Dashboard Platform"
              description={[
                "Built a modern dashboard platform integrating machine learning models.",
                "Implemented real-time data processing and interactive visualizations.",
                "Created predictive analytics features with TensorFlow.js integration.",
                "Developed responsive charts and data insights using D3.js.",
                "Combined frontend expertise with AI/ML knowledge from M.Tech studies."
              ]}
              technologies={['Next.js', 'Python', 'TensorFlow.js', 'D3.js', 'WebSockets']}
            />

            <Project
              title="E-commerce Platform Redesign"
              description={[
                "Redesigned and rebuilt a high-traffic e-commerce platform serving millions of users.",
                "Implemented comprehensive performance optimizations and caching strategies.",
                "Improved accessibility compliance and user experience across all devices.",
                "Modernized the tech stack with React, Next.js, and GraphQL architecture.",
                "Achieved 60% faster load times and significantly improved conversion rates."
              ]}
              technologies={['React', 'Next.js', 'GraphQL', 'Redis', 'AWS']}
            />
          </div>
        </Container>
      </section>

      {/* Education */}
      <section className="bg-white py-24">
        <Container>
          <h2 className="mb-4 font-serif text-4xl font-bold text-robb-navy sm:text-5xl">
            Education<span className="text-robb-cyan">.</span>
          </h2>
          <div className="mb-16 h-1 w-24 bg-robb-cyan" />

          <div className="space-y-8">
            <WorkExperience
              company="BITS Pilani"
              role="M.Tech - Data Science & Engineering"
              period="2022 - 2024"
              logo="/images/logos/bits.jpeg"
              logoAlt="BITS Pilani"
              description={[
                "Advanced studies in machine learning and artificial intelligence.",
                "Data engineering and large-scale data processing systems.",
                "Bridging the gap between AI/ML research and practical frontend applications.",
                "Projects combining web technologies with intelligent systems.",
                "Researching modern approaches to data visualization and user interfaces."
              ]}
              technologies={['Python', 'Machine Learning', 'Deep Learning', 'Data Analysis', 'AI', 'Data Engineering', 'Data Visualization']}
            />

            <WorkExperience
              company="Kurukshetra University"
              role="B.Tech - Computer Science & Engineering"
              period="2010 - 2014"
              logo="/images/logos/kuk.jpeg"
              logoAlt="Kurukshetra University"
              description={[
                "Graduated with strong foundation in computer science fundamentals.",
                "Studied algorithms, data structures, and software engineering principles.",
                "Developed early interest in web development and user interface design.",
                "Completed projects in various programming languages and technologies.",
                "Built solid understanding of computer systems and software architecture."
              ]}
              technologies={['Java', 'C++', 'Data Structures', 'Algorithms', 'Web Development']}
            />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-robb-navy py-24 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-4xl font-bold sm:text-5xl">
              Let's work together<span className="text-robb-cyan">.</span>
            </h2>
            <p className="mt-6 text-lg text-white/80">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <DownloadCV variant="primary" />
              <a
                href="mailto:nitish4561kalra@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-transparent px-8 py-4 font-medium text-white transition hover:border-white/40 hover:bg-white/5"
              >
                <span>Get in touch</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

