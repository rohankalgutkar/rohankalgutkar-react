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
    roleTitle: "Senior Specialist Software Engineer",
    summary:
      "Promoted from Specialist Software Engineer in Aug 2026. I am a senior backend engineer on a 6-member Analytics team building microservices that process 120M+ daily events across 20+ downstream consumers while maintaining 99.9% uptime. Recent work includes zero-data-loss disaster recovery architecture, an in-house user journey tracing service that reduced external API latency from 200ms to under 30ms, and early team-level adoption of AI-assisted development workflows.",
    techStack: [
      "Node.js, TypeScript",
      "React, Next.js, Python",
      "Microservices",
      "Azure, AWS",
      "Cosmos DB, Redis, Kafka",
      "Jest, Postman",
      "Docker, Kubernetes, Jenkins",
      "Claude, GitHub Copilot, Devin",
    ],
    tagEventCode: "workExAtt",
  },
  Accenture: {
    dates: "Mar 2020 to Jun 2023",
    roleTitle: "Custom Software Engineering Specialist",
    summary:
      "Worked with AT&T as the client on a 10-engineer Analytics Product team handling tagging, processing, and data collection across multiple business domains. Designed, built, and tested scalable APIs for analytics services, and supported migration of 7 Node.js microservices from on-prem to Azure, reducing infrastructure costs by an estimated 30-40% while improving availability and deployment velocity.",
    techStack: [
      "Node.js, TypeScript",
      "Microservices",
      "Azure",
      "EventHub, Redis, Cosmos DB",
      "Jest",
      "Jenkins, Docker, Kubernetes",
      "Git, GitHub",
    ],
    tagEventCode: "workExAccenture",
  },
  Vistaar: {
    dates: "Jul 2016 to Mar 2020",
    roleTitle: "Senior Software Developer (Full-Stack)",
    summary:
      "Worked in the Solution Delivery team for Vistaar's Price Optimization SaaS product used by US-based clients. Built and maintained RESTful APIs, and led full-stack development and migration of a Reporting Framework adopted across teams, helping 20-30 end users create reports and dashboards while reducing initial setup time by 50%.",
    techStack: ["JavaScript", "RESTful APIs", "RhinoJS", "ExtJS", "Pricing SaaS", "Reporting Framework", "SVN"],
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
