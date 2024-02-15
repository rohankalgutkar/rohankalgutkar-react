import SectionContainer from "./SectionContainer";
import InnerSection from "./InnerSection";
import SectionSeparator from "./SectionSeperator";

export default function About() {
  return (
    <SectionContainer id='about'>
      <InnerSection title='About'>
        <div className='space-y-5 text-lg'>
          <p>
            My name is Rohan Kalgutkar. I am a highly motivated Backend Web
            Developer with 7+ years of professional experience crafting
            high-performance, scalable applications. I thrive in an agile
            development environment and work seamlessly with cross-functional
            teams to translate business requirements into robust, user-centric
            solutions. My expertise lies in
            <i> Node.js, TypeScript, Microservices, and Cloud</i>.
          </p>
          <p>
            I'm currently based out of Bengaluru and working as a Technical
            Specialist - Application Development at AT&T. This is a backend web
            engineering role, where I focus on the development of several
            analytics APIs used site-wide and related tools.
          </p>
          <p>
            Originally from Mumbai, my web development journey started in 2015
            in college itself, where I, along with some friends, started
            freelancing and even won a couple of inter-college competitions.
          </p>
        </div>
      </InnerSection>
      <SectionSeparator />
    </SectionContainer>
  );
}
