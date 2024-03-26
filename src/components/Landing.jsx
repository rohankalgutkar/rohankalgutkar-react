import { FileText } from "lucide-react";
import { Button } from "../shad/components/ui/button";
import GetInTouchBtn from "./GetInTouchBtn.jsx";
import SectionContainer from "./SectionContainer";
import Resume from "../assets/Rohan_Kalgutkar_Resume.pdf";
import tag from "./tag.js";

export default function Landing() {
  function handleClickResume() {
    tag({
      eventAction: "linkClick",
      eventCode: "resumeDownload",
      eventSrc: "landing",
    });
  }
  return (
    <>
      <SectionContainer
        id='landing'
        className='bg-[#c1440c] md:bg-profile-img-lg profile-img-lg-style profile-common'>
        <div className='space-y-8 py-10 md:py-40 lg:py-60 '>
          <div className='space-y-1'>
            <h3 className='text-xl md:text-2xl lg:text-3xl font-mono'>
              Hey there, I'm
            </h3>
            <h1 className='text-5xl md:text-7xl lg:text-8xl sectionTitleFont'>
              Rohan Kalgutkar
            </h1>
            <h3 className='md:text-lg lg:text-xl font-mono'>
              Software Engineer - Web Developer
              <span className='sm:inline md:hidden lg:inline'> | </span>
              <br className='hidden md:inline lg:hidden' />
              AT&T, India
            </h3>
          </div>
          <div className='space-x-5'>
            <GetInTouchBtn />
            <a href={Resume} target='_blank'>
              <Button variant='secondary' onClick={handleClickResume}>
                <FileText className='mr-2 h-4 w-4' /> Resume
              </Button>
            </a>
          </div>
        </div>
      </SectionContainer>
      <div className='md:hidden py-36 bg-profile-img-sm  profile-mobile profile-common'></div>
    </>
  );
}
