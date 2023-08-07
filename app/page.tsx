import Image from "next/image";
import React from "react";
import DescriptionMap from "./components/DescriptionMap";
import Link from "next/link";

function SectionHeadertext(props) {
  const { children } = props;
  return <h4 className="pb-5 text-xl font-semibold">{children}</h4>;
}

export default function Home() {
  const link = [
    {
      name: "Email",
      content: "JoelCarr619@gmail.com",
      link: "https://www.google.com",
    },
    { name: "GitHub", content: "JoelCarr619", link: "https://www.google.com" },
    { name: "LinkedIn", content: "JoelCarr2", link: "https://www.google.com" },
  ];

  const skills = [
    {
      name: "SKILLS",
      content: ["Developed, Reduced, Achieved, Designed, Implemented, Delivered, Spearheaded, Time Management, Research and Analytics, Listening, Writing, Conflict Resolution, Resourcefulness, Teamwork, Prioritization Decision Making, Critical Thinking, Problem Solving "],
    },
    {
      name: "PROFILE",
      content: ["A highly - skilled and accomplished technology professional with extensive experience in project management, data analysis, and customer support. Proven ability to manage teams, improve workflows, and implement automated tools and scripts to increase departmental efficiency. Seeking a challenging role in the Technology sector that offers increased responsibility."],
    },
    { name: "Design", content: ["Figma", "Adobe", "Unlayer"] },
  ];
  const experience = [
    {
      name: "Ripe Metrics (May 2023 - Aug 2023) ",
      content:
        "Experienced over 600 hours (about 3 and a half weeks) of direct coding experience constructing code individually, pair programming or mob programming. Gained working proficiency of JavaScript, TypeScript, React Native, Redux and API’s. Worked on several projects, implementing different languages while understanding their methods and functionality. ",
    },
    {
      name: " LEARN Academy (FEB 2023 - JUN 2023) ",
      content:
        "Experienced over 640 hours (about 4 weeks) of direct coding experience constructing code individually, pair programming or mob programming. Gained working proficiency of JavaScript and Ruby and created full stack programs implementing test driven development. Languages learned: HTML, CSS, SASS, TailwindCSS, Bootstrap, JavaScript, React, React Native, Redux, NextJs, TypeScript, MUI. Back-End: Ruby, Ruby on Rails, NodeJs, MySQL, PostgreSQL, GitHub, Vercel, Unlayer, Figma, Adobe. ",
    },
    {
      name: " Department of Veteran Affairs - Program Analyst Apprentice  (MAR 2021 - FEB 2023) ",
      content:
        "Implemented, and delivered SQL Reports daily. Completed training on complex SQL queries using complex joins, grouping, aggregation, nested subqueries, cursors, etc.  Perform analysis and presented results using SQL, SSIS, MS Access, Excel, and Visual Basic scripts. Draft project plans for a multifunctional development project in software analysis, design, development, and implementation. ",
    },
    {
      name: " Department of Veteran Affairs - Lead Customer Support  (OCT 2018 - FEB 2023) ",
      content:
        "Performed administrative follow up actions and independently following up on team huddles by sharing information and collaborating with the clinical team to assure continuity of care. Developed and maintaining specific reports used by the patient care team to monitor, track and trend care delivery as well as participating and leading quality improvement efforts focused on cost, access, quality, and customer satisfaction. Reviewed claims cases to assure all issues have been addressed, applies, and interprets VA laws, including veterans' case law, existing statutes and procedures, precedent rulings, and state law in the adjudication process.  ",
    },
    {
      name: " World Financial Group - Business Associate (May 2023 - Present) ",
      content:
        "Consulted clients to find a suitable product to fulfill their needs as well as their family needs.  Planned and organized projects, gathering and analyzing data, estimating costs, as necessary. Provided education/guidance and assists Veterans and family members with completing Advance Directives (Living Will/Durable Power of Attorney for Health Care) and provides guidance to patients regarding these documents.  ",
    },
    {
      name: " US ARMY - Inventory Arms Specialist, Motor Transport Operator  (OCT 2017 - AUG 2011) ",
      content:
        "Maintained 100% accountability of over $4.9 millions of overly sensitive Government property. Purchased various equipment, supplies, and services using the government purchase card for micro purchases on purchase card program, procurement procedures and responsibilities while conducting random reviews in accordance with established Logistics and other departmental policy. Logistical planning experience, both in civilian deliveries and with military tactical convoys. Served as a purchase cardholder and approving official for equipment and commodities procurements to ensure that cardholders adhered to the procurement requirements.  ",
    },
  ];

  const education = [
    {
      name: "Customer Success Apprenticeship (Nov 2021 - Jan 2022) ",
      content: "Customer Success Manager- Completed rigorous training (300+ hours) with assessment of Customer Success skills by instructional coaches and industry professionals.  CS workflow: the customer journey; human-centered customer engagement; practical experience with data and tech tools; managing risk and effectively escalating issues; following up with customers and logging activity; creating stories, executive summaries, and slide decks for effective EB. ",
    },
    {
      name: "University Of Phoenix (Aug 2011 - Dec 2015) ",
      content: "Bachelors of Science in Business Marketing",
    },
  ];
  return (
    <main className="flex flex-col gap-6 p-4 mx-auto  ">
      <h2 className="font-bold sm:py-4 md:py-8 text-4xl sm:text-5xl md:text-6xl">
        Digital Resume
      </h2>
      <section>
        <SectionHeadertext className="">
          {" "}
          Joel Carr - Web Developer{" "}
        </SectionHeadertext>
        <DescriptionMap list={link} type={"link"} />
      </section>
      <section>
        <SectionHeadertext className=""> Skills </SectionHeadertext>
        <DescriptionMap list={skills} type={"skills"} />
      </section>
      <section>
        <SectionHeadertext> Projects </SectionHeadertext>
        <p className="text-xs sm:text-sm">
          Check out my latest{" "}
          <Link href={"/projects"} className="text-sky-400">
            projects
          </Link>
        </p>
      </section>

      <section>
        <SectionHeadertext className=""> Experience </SectionHeadertext>
        <DescriptionMap list={experience} type={"experience"} />
      </section>

      <section>
        <SectionHeadertext className=""> Education </SectionHeadertext>
        <DescriptionMap list={education} type={"education"} />
      </section>
    </main>
  );
}
