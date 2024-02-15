import SectionContainer from "./SectionContainer";
import InnerSection from "./InnerSection";
import { Linkedin, Github, AtSign, Instagram, Phone } from "lucide-react";

const socials = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/rohankalgutkar/",
    Icon: <Linkedin className='mr-2 h-4 w-4' />,
  },
  {
    title: "Github",
    href: "https://github.com/rohankalgutkar/",
    Icon: <Github className='mr-2 h-4 w-4' />,
  },
  {
    title: "Email",
    href: "mailto:rohankalgutkar@gmail.com",
    Icon: <AtSign className='mr-2 h-4 w-4' />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/daft_ro/",
    Icon: <Instagram className='mr-2 h-4 w-4' />,
  },
  {
    title: "Call / Text",
    href: "tel:+919619817506",
    Icon: <Phone className='mr-2 h-4 w-4' />,
  },
];
export default function Socials() {
  return (
    <SectionContainer>
      <InnerSection title='Interested in my Profile?'>
        <h2 className='text-2xl pb-4'>Let's build something.</h2>

        <div className='grid grid-cols-2 md:flex md:flex-row md:space-x-4'>
          {socials.map(({ href, title, Icon }) => (
            <a
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
