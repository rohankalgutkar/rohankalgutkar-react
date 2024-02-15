import { useEffect, useState } from "react";
import { Button } from "../shad/components/ui/button";
import { Linkedin, Github } from "lucide-react";

const navItemArray = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
];

const socials = [
  {
    title: <Linkedin className=' h-5 w-5' />,
    href: "https://www.linkedin.com/in/rohankalgutkar/",
  },
  {
    title: <Github className='h-5 w-5' />,
    href: "https://github.com/rohankalgutkar/",
  },
];
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const controlNav = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNav);
  });
  return (
    <header
      className={`w-full sticky top-0 flex float-end flex-row justify-end transition-colors ease-in-out duration-400 ${
        scrolled && "bg-white shadow-md "
      }`}>
      <nav className='flex float-end py-1'>
        <ul className='mr-12 flex float-end items-center'>
          {navItemArray.map(({ title, href }) => (
            <li>
              <Button variant='ghost'>
                <a href={href}>{title.toUpperCase()}</a>
              </Button>
            </li>
          ))}
          <li>
            {socials.map(({ title, href }) => (
              <Button variant='ghost'>
                <a href={href} target='_blank'>
                  {title}
                </a>
              </Button>
            ))}
          </li>
        </ul>
      </nav>
    </header>
    // <header>
    //   <nav>
    //     <ul>
    //       <li>
    //         <a href='#'>Aeqrwe</a>
    //       </li>

    //       <li>
    //         <a href='#'>Basdasd</a>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
}
