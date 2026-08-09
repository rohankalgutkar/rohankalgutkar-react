import SectionContainer from "./SectionContainer";
import InnerSection from "./InnerSection";
import SectionSeparator from "./SectionSeperator";
import WorkedWith from "./WorkedWith";

export default function About() {
  return (
    <SectionContainer id='about'>
      <InnerSection title='About'>
        <div className='space-y-5 text-lg'>
          <p>
            My name is Rohan Kalgutkar. I am a full-stack software engineer with 10 years of experience building and scaling backend systems, microservices, and cloud-native applications for analytics, telecom, and SaaS products. I specialize in <i>Node.js and TypeScript</i>, with strong full-stack capability across <i>React, Next.js, and Python</i>.
          </p>
          <p>
            My work spans high-throughput analytics platforms processing 120M+ events daily, disaster recovery systems with zero data loss, cost-saving API architecture, and internal tools that help business teams move faster.
          </p>
          <p>
            I&apos;m currently based out of Bengaluru and working as a Senior Specialist Software Engineer at AT&T, where I am a senior backend engineer on a 6-member Analytics team, mentor engineers, drive architecture and code reviews, and explore practical AI-assisted development workflows.
          </p>
          <p>
            Originally from Mumbai, my web development journey started in 2015 in college itself, where I, along with some friends, started freelancing and even won a couple of inter-college competitions.
          </p>
          <p>I&apos;ve worked with these amazing companies –</p>
        </div>
        <WorkedWith />
      </InnerSection>
      <SectionSeparator />
    </SectionContainer>
  );
}
