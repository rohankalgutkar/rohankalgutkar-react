import SectionContainer from "./SectionContainer";
import SectionSeparator from "./SectionSeperator";
import InnerSection from "./InnerSection";
import imgATT from "../assets/att.png";
import imgAcc from "../assets/accenture.png";
import imgVis from "../assets/vistaar.png";

const company = [
  {
    href: "https://www.att.com/",
    src: imgATT,
  },
  {
    href: "https://www.accenture.com/in-en",
    src: imgAcc,
  },
  {
    href: "https://www.vistaar.com/",
    src: imgVis,
  },
];

export default function WorkedWith() {
  return (
    <SectionContainer>
      <InnerSection title="I've Worked With">
        <div className='grid place-content-center md:flex md:flex-row md:justify-around'>
          {company.map(({ href, src }) => (
            <div key={src} className='text-center'>
              <a href={href}>
                <img src={src} alt='' className='h-20 justify-self-center' />
              </a>
            </div>
          ))}
        </div>
      </InnerSection>
      <SectionSeparator />
    </SectionContainer>
  );
}

//px-20 flex flex-col place-content-center md:flex-row md:justify-between
