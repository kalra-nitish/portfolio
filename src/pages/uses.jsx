// import Head from 'next/head';

// import { Card } from '@/components/Card';
// import { Section } from '@/components/Section';
// import { SimpleLayout } from '@/components/SimpleLayout';
// import { TOOLS_AND_TECH } from '@/lib/constants';

// function ToolsSection({ children, ...props }) {
//   return (
//     <Section {...props}>
//       <ul role="list" className="space-y-16">
//         {children}
//       </ul>
//     </Section>
//   );
// }

// function Tool({ title, href, children }) {
//   return (
//     <Card as="li">
//       <Card.Title as="h3" href={href}>
//         {title}
//       </Card.Title>
//       <Card.Description>{children}</Card.Description>
//     </Card>
//   );
// }

// export default function Uses() {
//   return (
//     <>
//       <Head>
//         <title>Uses - Nitish Kalra</title>
//         <meta
//           name="description"
//           content="Software I use, tools I love, and other things I recommend."
//         />
//       </Head>
//       <SimpleLayout
//         title="Software I use, tools I love, and other things I recommend."
//         intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I'm being productive when I'm really just procrastinating. Here's a big list of all of my favorite stuff."
//       >
//         <div className="space-y-20 pb-32">
//           {TOOLS_AND_TECH.map((section) => (
//             <ToolsSection key={`section${section?.id}`} title={section.title}>
//               {section.technologies.map((tool) => (
//                 <Tool
//                   title={tool.title}
//                   key={`tool${tool.id}`}
//                   href={tool.href}
//                 >
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: tool.description,
//                     }}
//                   />
//                 </Tool>
//               ))}
//             </ToolsSection>
//           ))}
//         </div>
//       </SimpleLayout>
//     </>
//   );
// }
import Head from "next/head"
import { SimpleLayout } from "@/components/SimpleLayout"
import { TOOLS_AND_TECH } from "@/lib/constants"

import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/ui/terminal"

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Nitish Kalra</title>
        <meta
          name="description"
          content="Software I use, tools I love, and other things I recommend."
        />
      </Head>

      <SimpleLayout
        title="Software I use, tools I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I'm being productive when I'm really just procrastinating."
      >
        <Terminal>
          <TypingAnimation>
            &gt; cat ~/uses.txt
          </TypingAnimation>

          {TOOLS_AND_TECH.map((section) => (
            <div key={section.id} className="mt-6">
              <AnimatedSpan className="text-green-500 font-semibold">
                ✔ {section.title}
              </AnimatedSpan>

              {section.technologies.map((tool) => (
                <div key={tool.id} className="pl-6 mt-2">
                  <AnimatedSpan className="text-blue-500">
                    <a
                      href={tool.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {tool.title}
                    </a>
                  </AnimatedSpan>

                  <AnimatedSpan className="text-muted-foreground text-sm pl-4 block">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: tool.description,
                      }}
                    />
                  </AnimatedSpan>
                </div>
              ))}
            </div>
          ))}

          <TypingAnimation className="text-muted-foreground mt-6">
            EOF
          </TypingAnimation>
        </Terminal>
      </SimpleLayout>
    </>
  )
}
