import { Button } from "../shad/components/ui/button";
import { Globe2, FileText, Linkedin, AtSign, Phone } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../shad/components/ui/dropdown-menu";

const socials = [
  {
    title: "rohankalgutkar@gmail.com",
    href: "mailto:rohankalgutkar@gmail.com",
    Icon: <AtSign className='mr-2 h-4 w-4' />,
  },
  {
    title: "+91-9619-817-506",
    href: "tel:+919619817506",
    Icon: <Phone className='mr-2 h-4 w-4' />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/rohankalgutkar/",
    Icon: <Linkedin className='mr-2 h-4 w-4' />,
  },
];

export default function GetInTouchBtn() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger variant='secondary'>
        <Button variant='secondary'>
          <Globe2 className='mr-2 h-4 w-4' /> Get In Touch
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {socials.map(({ href, title, Icon }) => (
          <DropdownMenuItem key={title}>
            <a
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
