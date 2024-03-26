import { Button } from "../shad/components/ui/button";
import { Globe2, FileText, Linkedin, AtSign, Phone } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../shad/components/ui/dropdown-menu";
import tag from "./tag.js";

const socials = [
  {
    title: "rohankalgutkar@gmail.com",
    href: "mailto:rohankalgutkar@gmail.com",
    Icon: <AtSign className='mr-2 h-4 w-4' />,
    tagEventCode: "Email",
  },
  {
    title: "+91-9619-817-506",
    href: "tel:+919619817506",
    Icon: <Phone className='mr-2 h-4 w-4' />,
    tagEventCode: "Phone",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/rohankalgutkar/",
    Icon: <Linkedin className='mr-2 h-4 w-4' />,
    tagEventCode: "LinkedIn",
  },
];

export default function GetInTouchBtn() {
  function handleButtonClick(tagEventCode) {
    tag({
      eventAction: "linkClick",
      eventCode: tagEventCode,
      eventSrc: "landing",
    });
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger variant='secondary' asChild>
        <Button variant='secondary'>
          <Globe2 className='mr-2 h-4 w-4' /> Get In Touch
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {socials.map(({ href, title, Icon, tagEventCode }) => (
          <DropdownMenuItem key={title}>
            <a
              onClick={() => {
                handleButtonClick(tagEventCode);
              }}
              className='flex items-center text-blue-900 hover:underline underline-offset-4'
              href={href}
              target='_blank'>
              {Icon} {title}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
