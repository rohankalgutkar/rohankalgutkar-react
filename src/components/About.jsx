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
            My name is Rohan Kalgutkar. I am a full stack software engineer with 9 years of experience delivering scalable, high-impact digital solutions for global businesses in analytics, telecom, and SaaS domains. I specialize in building robust backend microservices with <i>Node.js and TypeScript</i>, as well as dynamic, user-focused frontend applications using <i>React and Next.js</i>.
          </p>
          <p>
            Originally from Mumbai, my web development journey started in 2015
            in college itself, where I, along with some friends, started
            freelancing and even won a couple of inter-college competitions.
          </p>
          <p>
            I'm currently based out of Bengaluru and working as a Specialist Software Engineer at AT&T. This is a backend web
            engineering role, where I focus on the development of several
            analytics APIs used site-wide and related tools.{" "}
          </p>
          <p>I've worked with these amazing companies –</p>
        </div>
        <WorkedWith />
      </InnerSection>
      <SectionSeparator />
    </SectionContainer>
  );
}
