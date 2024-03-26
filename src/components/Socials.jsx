import SectionContainer from "./SectionContainer";
import InnerSection from "./InnerSection";
import { Linkedin, Github, AtSign, Instagram, Phone } from "lucide-react";
import tag from "./tag.js";

const socials = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/rohankalgutkar/",
    Icon: <Linkedin className='mr-2 h-4 w-4' />,
    tagEventCode: "LinkedIn",
  },
  {
    title: "Github",
    href: "https://github.com/rohankalgutkar/",
    Icon: <Github className='mr-2 h-4 w-4' />,
    tagEventCode: "Github",
  },
  {
    title: "Email",
    href: "mailto:rohankalgutkar@gmail.com",
    Icon: <AtSign className='mr-2 h-4 w-4' />,
    tagEventCode: "Email",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/daft_ro/",
    Icon: <Instagram className='mr-2 h-4 w-4' />,
    tagEventCode: "Instagram",
  },
  {
    title: "Call / Text",
    href: "tel:+919619817506",
    Icon: <Phone className='mr-2 h-4 w-4' />,
    tagEventCode: "Phone",
  },
];
export default function Socials() {
  function handleButtonClick(tagEventCode) {
    tag({
      eventAction: "linkClick",
      eventSrc: "footer",
      eventCode: tagEventCode,
    });
  }

  return (
    <SectionContainer>
      <InnerSection title='Interested in my Profile?'>
        <h2 className='text-2xl pb-4'>Let's build something.</h2>

        <div className='grid grid-cols-2 md:flex md:flex-row md:space-x-4'>
          {socials.map(({ href, title, Icon, tagEventCode }) => (
            <a
              onClick={() => {
                handleButtonClick(tagEventCode);
              }}
              key={title}
              className='pr-5 border-0 md:border-r md:last:border-none flex items-center text-blue-900 hover:underline underline-offset-4'
              href={href}
              target='_blank'>
              {Icon} {title}
            </a>
          ))}
        </div>
      </InnerSection>
    </SectionContainer>
  );
}
