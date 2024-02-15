import SectionContainer from "./SectionContainer";
import InnerSection from "./InnerSection";
import WorkExpTab from "./WorkExpTab";
import SectionSeparator from "./SectionSeperator";

export default function WorkExp() {
  return (
    <SectionContainer id='experience'>
      <InnerSection title='Work Experience'>
        <WorkExpTab />
      </InnerSection>
      <SectionSeparator />
    </SectionContainer>
  );
}
