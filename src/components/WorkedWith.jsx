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
    <div className='mt-5 grid place-content-center md:flex md:flex-row md:justify-around'>
      {company.map(({ href, src }) => (
        <div key={src} className='text-center'>
          <a href={href}>
            <img src={src} alt='' className='h-20 justify-self-center' />
          </a>
        </div>
      ))}
    </div>
  );
}
