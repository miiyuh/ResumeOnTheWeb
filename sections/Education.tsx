import Tippy from "@tippyjs/react";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const DISPLAY_COUNT = 4;

type Education = {
  id: number;
  logo: string;
  institution: string;
  degree: string;
  study: string;
  location: string;
  period: { start: string; end: string };
};

const education: Education[] = [
  {
    id: 1,
    logo: "/images/education/msu.png",
    institution: "Management & Science University (MSU)",
    degree: "Bachelor's Degree",
    study: "Computer Forensics",
    location: "Shah Alam, Selangor, Malaysia",
    period: { start: "2024", end: "present" },
  },
  {
    id: 2,
    logo: "/images/education/msu.png",
    institution: "Management & Science University (MSU)",
    degree: "Diploma",
    study: "Computer Forensics",
    location: "Shah Alam, Selangor, Malaysia",
    period: { start: "2021", end: "2024" },
  },
  {
    id: 3,
    logo: "/images/education/samttaj.png",
    institution: "Sekolah Agama Menengah Tinggi Tengku Ampuan Jemaah (SAMTTAJ)",
    degree: "High School",
    study: "Science Stream",
    location: "Shah Alam, Selangor, Malaysia",
    period: { start: "2016", end: "2021" },
  },
  {
    id: 4,
    logo: "/images/education/sias.png",
    institution: "Sekolah Integrasi as-Syakirin (SIAS)",
    degree: "Elementary & Primary School",
    study: "Religious Studies",
    location: "Shah Alam, Selangor, Malaysia",
    period: { start: "2010", end: "2015" },
  },
];

type Props = {
  data: Education;
  isFirst: boolean;
  isLast: boolean;
};

const Education: React.FC<Props> = ({ data, isFirst, isLast }) => (
  <div className="flex group">
    <div
      className={clsx("ml-1 w-1 flex-shrink-0 bg-neutral-500/25", {
        "rounded-t": isFirst,
        "rounded-b": isLast,
      })}
    />

    <div className="-ml-2 mt-8 flex-shrink-0 relative w-3 h-3 rounded-full shadow-lg bg-teal-500/80 dark:bg-white/80 group-hover:w-6 transition-[width]" />

    <div className="mt-5 ml-8 grid gap-2 pb-2">
      <div className="relative w-10 h-10">
        <Image src={data.logo} width={40} height={40} alt={data.institution} className="object-contain" />
      </div>

      <div>
        <h3>
          <span className="text-base font-bold">{data.institution}</span>{" "}
          <span className="text-xs">
            ({data.period.start} - {data.period.end})
          </span>
        </h3>
        <h4>
          {data.degree}, {data.study}
        </h4>
      </div>

      <h5 className="my-1 flex gap-2 items-center text-xs">
        <FaLocationArrow />
        <span>{data.location}</span>
      </h5>
    </div>
  </div>
);

const EducationTimeline = () => {
  const [showMore, setShowMore] = useState(education.length > DISPLAY_COUNT ? false : true);

  return (
    <div id={Section.Education}>
      {getSectionHeading(Section.Education)}

      <div className="flex flex-col">
        {education
          .filter((_, index) => (showMore ? true : index < DISPLAY_COUNT))
          .map((data, index) => (
            <Education key={data.id} data={data} isFirst={index === 0} isLast={index === 2} />
          ))}
      </div>

      {!showMore && (
        <Tippy content={`Show ${education.length - DISPLAY_COUNT} More`} placement="right">
          <div className="inline-block ml-8 p-2 cursor-pointer" onClick={() => setShowMore(true)}>
            <MdMoreHoriz size="24" />
          </div>
        </Tippy>
      )}
    </div>
  );
};

export default EducationTimeline;
