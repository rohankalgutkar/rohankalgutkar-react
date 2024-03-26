import imgATT from "../assets/att.png";
import imgAcc from "../assets/accenture.png";
import imgVis from "../assets/vistaar.png";
import tag from "./tag.js";

const company = [
  {
    href: "https://www.att.com/",
    src: imgATT,
    tagEventCode: "Att",
  },
  {
    href: "https://www.accenture.com/in-en",
    src: imgAcc,
    tagEventCode: "Accenture",
  },
  {
    href: "https://www.vistaar.com/",
    src: imgVis,
    tagEventCode: "Vistaar",
  },
];

export default function WorkedWith() {
  function handleButtonClick(tagEventCode) {
    tag({
      eventAction: "linkClick",
      eventSrc: "workedWith",
      eventCode: tagEventCode,
    });
  }
  return (
    <div className='mt-5 grid place-content-center md:flex md:flex-row md:justify-around'>
      {company.map(({ href, src, tagEventCode }) => (
        <div key={src} className='text-center'>
          <a
            href={href}
            onClick={() => {
              handleButtonClick(tagEventCode);
            }}>
            <img src={src} alt='' className='h-20 justify-self-center' />
          </a>
        </div>
      ))}
    </div>
  );
}
