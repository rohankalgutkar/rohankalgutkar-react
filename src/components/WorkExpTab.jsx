import { useState } from "react";
import { Button } from "../shad/components/ui/button";
import { Cpu, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../shad/components/ui/accordion";
import tag from "./tag.js";

const companyNames = ["AT&T", "Accenture", "Vistaar"];
const companyDetails = {
  "AT&T": {
    dates: "June 2023 to Present",
    roleTitle: "Specialist Software Engineer",
    summary:
      "AT&T is a leading telecommunications, technology and entertainment company in the US. I work in the Analytics Product team, where we own a cluser of microservices that manage, govern and process the clickstream data of the user journey across web, native apps and multiple other channels.",
    techStack: [
      "Node.js - TypeScript",
      "React, Next.js",
      "Microservices",
      "Azure Cloud",
      "Jest",
      "Jenkins, Docker, K8s",
      "Git/Github",
    ],
    tagEventCode: "workExAtt",
  },
  Accenture: {
    dates: "Mar 2020 to Jun 2023",
    roleTitle: "Custom Software Engineering Specialist",
    summary:
      "Accenture is a multinational IT Services & Management Consultancy company based in Dublin. My client here was AT&T and I worked in the Analytics Product team. I demonstrated consistent high-quality work, exceeding client expectations, which resulted in an offer to join the client company as a full-time employee in June 2023.",
    techStack: [
      "Node.js - TypeScript",
      "Microservices",
      "Azure Cloud",
      "Jest",
      "Jenkins, Docker, K8s",
      "Git/Github",
    ],
    tagEventCode: "workExAccenture",
  },
  Vistaar: {
    dates: "Jul 2016 to Mar 2020",
    roleTitle: "Senior Software Developer",
    summary:
      "Vistaar Technologies is a leading SaaS pricing optimization and rebate management software provider. I worked in the Solution Delivery Team which created and maintained Pricing Optimization platform for a major Steel Giant in the US. ",
    techStack: ["RhinoJS", "JavaScript", "RESTful API", "SVN", "ExtJS "],
    tagEventCode: "workExVistaar",
  },
};

export default function WorkExpTab() {
  const [activeCompany, setActiveCompany] = useState(companyNames[0]);
  function handleButtonClick(tagEventCode) {
    tag({
      eventAction: "linkClick",
      eventSrc: "workEx",
      eventCode: tagEventCode,
    });
  }
  return (
    <>
      <div className='hidden sm:block'>
        <div className='grid grid-cols-10 gap-14'>
          <div className='col-span-2 flex flex-col gap-1'>
            {companyNames.map((companyName) => {
              const btnClass = `mainFont justify-end text-xl ${companyName == activeCompany
                ? "underline decoration-dashed"
                : undefined
                } hover:decoration-dashed`;
              return (
                <Button
                  onClick={() => {
                    handleButtonClick(companyDetails[companyName].tagEventCode);
                    setActiveCompany(companyName);
                  }}
                  key={companyName}
                  className={btnClass}
                  variant='link'>
                  {companyName}
                </Button>
              );
            })}
          </div>
          <div className='col-span-8  p-1'>
            <div className='flex justify-between'>
              <p className='text-lg'>
                {companyDetails[activeCompany].roleTitle}
              </p>
              <p>
                <i>{companyDetails[activeCompany].dates}</i>
              </p>
            </div>

            <p className='py-4 text-lg'>
              {companyDetails[activeCompany].summary}
            </p>
            <div className='flex gap-8'>
              <div>
                <p className='inline-flex items-center'>
                  <Cpu className='mr-2' size={16} /> Tech Stack
                </p>
              </div>
              <div className='flex gap-8'>
                <ul>
                  {companyDetails[activeCompany].techStack.map(
                    (tech, index) => {
                      if (index <= 2) {
                        return (
                          <li className='flex items-center' key={tech}>
                            <ArrowRight className='mr-2' size={16} />
                            {tech}
                          </li>
                        );
                      }
                    }
                  )}
                </ul>
                <ul>
                  {companyDetails[activeCompany].techStack.map(
                    (tech, index) => {
                      if (index > 2) {
                        return (
                          <li className='flex items-center' key={tech}>
                            <ArrowRight className='mr-2' size={16} />
                            {tech}
                          </li>
                        );
                      }
                    }
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sm:hidden'>
        <Accordion type='single' collapsible defaultValue={companyNames[0]}>
          {companyNames.map((company) => (
            <AccordionItem
              key={company}
              value={company}
              className='last:border-none'>
              <AccordionTrigger
                className={`text-primary text-xl underline-offset-4 decoration-dashed`}>
                {company}
                {/* !TODO add event listener here */}
              </AccordionTrigger>
              <AccordionContent>
                <div className=''>
                  <div className=''>
                    <p className='text-lg'>
                      {companyDetails[company].roleTitle}
                    </p>
                    <p>
                      <i>{companyDetails[company].dates}</i>
                    </p>
                  </div>

                  <p className='py-4 text-lg'>
                    {companyDetails[company].summary}
                  </p>
                  <div className='flex gap-8 font-mono'>
                    <div className='flex-none'>
                      <p className='inline-flex items-center'>
                        <Cpu className='mr-2' size={16} /> Tech Stack
                      </p>
                    </div>

                    <ul>
                      {companyDetails[company].techStack.map((tech) => (
                        <li className='flex items-center' key={tech}>
                          <ArrowRight className='mr-2' size={16} />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div >
    </>
  );
}
