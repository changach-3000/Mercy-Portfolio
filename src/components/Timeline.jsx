import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Jul 2022 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title font-bold">
          Monitoring, Evaluation Research and Learning Coordinator
        </h3>
        <h4 className="vertical-timeline-element-subtitle text-center font-bold">
          RAAGSAN Consulting
        </h4>
        <h4 className="vertical-timeline-element-subtitle font-bold">
          Fulltime
        </h4>
        <ul className="list-disc">
          <li>
            {" "}
            Spearheaded Raagsan's citizen engagement program (Daadihiye),
            boosting community participation and ownership.
          </li>
          <li>
            Implemented successful MERL projects, streamlining data collection
            and analysis for Raagsan.
          </li>
          <li>Trained 100 field researchers, improving data quality.</li>
          <li>
            Developed learning materials and events, fostering knowledge
            sharing.
          </li>
          <li>
            Built a comprehensive database for improved knowledge management.
          </li>
          <li>
            Led social media efforts, significantly increasing outreach and
            engagement.
          </li>
        </ul>
        <p className="text-xs font-lighter">
          Skills: Strategic Leadership in Monitoring, Evaluation, and Learning
          (MEL) · Project Management · Research and Data Analysis · Capacity
          Building and Training · Communications and Stakeholder Engagement
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May 2022 - Jun 2022"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title font-bold">
          Qualitative Researcher/Policy Developer Consultant
        </h3>
        <h4 className="vertical-timeline-element-subtitle text-center font-bold">
          RAAGSAN Consulting
        </h4>
        <h4 className="vertical-timeline-element-subtitle font-bold">Remote</h4>
        <ul className="list-disc">
          <li>
            Authored 4 policy briefs on women's participation, women-led SMEs,
            youth labor market, and Somali vulnerabilities.
          </li>
          <li>
            Conducted qualitative data analysis on conflict and power dynamics
            for food insecurity reports (SCC & WFP).
          </li>
          <li>
            Contributed to inception reports for Third Party Monitoring,
            providing program effectiveness and stakeholder engagement insights.
          </li>
        </ul>
        <p>
          Skills: Programmatic documentation · Report Writing · Qualitative
          Research · Policy Development
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jan 2020 - Sep 2022 · 2 yrs 9 mos"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title font-bold">
          {" "}
          Monitoring, Evaluation and Learning Officer
        </h3>
        <h4 className="vertical-timeline-element-subtitle text-center  font-bold">
          ICW-Kenya Chapter
        </h4>
        <h4 className="vertical-timeline-element-subtitle font-bold">
          Kiambu, Kenya - Fulltime
        </h4>
        <ul className="list-disc">
          <li>
            Built a strong M&E system to track project progress and secure
            additional funding (USD 232,000 to USD 428,000).
          </li>
          <li>
            Provided technical support for a Global Fund HIV project and
            contributed to ICW Kenya's strategic plan.
          </li>
          <li>
            Led documentation of best practices and coordinated report
            preparation for various stakeholders.
          </li>
          <li>
            Ensured data quality and supported community health systems with 150
            Community Health Volunteers.
          </li>
          <li>
            Represented the organization as M&E Focal Person at different
            stakeholder forums.
          </li>
        </ul>
        <p>User Experience, Visual Design Engagement · HIV/AIDS</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Oct 2021 - Mar 2022 · 6 mos"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title font-bold">
          Grants Management Consultant
        </h3>
        <h4 className="vertical-timeline-element-subtitle font-bold">
          Jumuiya Women Fund
        </h4>
        <h4 className="vertical-timeline-element-subtitle font-bold">Remote</h4>
        <ul className="list-disc">
          <li>
            Secured critical funding for the organization by crafting compelling
            grant proposals, resulting in a substantial USD 300,000 grant from
            the Equality Fund. My efforts directly contributed to increased
            resources for our mission.
          </li>
          <li>
            Boosted organizational efficiency by establishing a robust
            Monitoring and Evaluation (M&E) system. This included developing a
            comprehensive M&E plan and ensuring staff effectively utilized the
            tools to track progress and impact. Additionally, I streamlined
            communication with donors and grantees by creating essential tools
            and a centralized database.
          </li>
        </ul>
        <p>
          Skills: Program Development · Budget Development · Grant writing and
          proposal development · Monitoring and evaluation
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jun 2019 - Dec 2019 · 7 mos"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title font-bold">
          {" "}
          Research Assistant
        </h3>
        <h4 className="vertical-timeline-element-subtitle font-bold">
          Global Programs for Research and Training, UCSF{" "}
        </h4>
        <h4 className="vertical-timeline-element-subtitle font-bold">
          Nairobi, Kenya
        </h4>
        <ul className="list-disc">
          <li>
            Led a large-scale data collection effort for the CDC across 16
            Kenyan counties. This involved quantitative and qualitative methods
            in 34 health facilities and 6 HIV reference labs to understand
            program service costs for patients achieving viral suppression in
            Kenya's antiretroviral therapy program.
          </li>
          <li>
            Contributed to the project's success by supporting the design and
            implementation of a robust data collection database and key
            informant interview guides. This ensured efficient data capture and
            insightful stakeholder perspectives.
          </li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Oct 2018 - Dec 2018 · 3 mos"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title font-bold">
          Monitoring And Evaluation Assistant
        </h3>
        <h4 className="vertical-timeline-element-subtitle font-bold">
          National Aids Control Council
        </h4>
        <h4 className="vertical-timeline-element-subtitle font-bold">
          Nairobi, Kenya
        </h4>
        <ul className="list-disc">
          <li>
            Played a key role in developing the 2018 County AIDS HIV Estimates
            County HIV Implementing Partners Online Reporting System (HIPORS)
            for all 47 Kenyan counties. This initiative streamlined HIV data
            collection and reporting across the country.
          </li>
          <li>
            Ensured data quality by conducting monthly and quarterly data
            validation for the Community AIDS Program Reporting (CAPR) program
            across 9 M&E regions. I also mined key HIV indicators from KHIS2 to
            align with county M&E plans, providing valuable insights for local
            decision-making.
          </li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Oct 2016 - Oct 2018 · 2 yrs 1 mo"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title font-bold">
          {" "}
          Research Assistant, Chama cha MamaToto, Maternal, Newborn and Child
          Health
        </h3>
        <h4 className="vertical-timeline-element-subtitle font-bold">
          AMPATH Kenya{" "}
        </h4>
        <h4 className="vertical-timeline-element-subtitle font-bold">
          Eldoret, Kenya
        </h4>
        <ul className="list-disc">
          <li>
            Led impactful RCT empowering 3,000+ women in Kenya through health
            education and economic opportunities.
          </li>
          <li>
            Built capacity through training facilitators and enumerators for the
            Chamas for Change program.
          </li>
          <li>
            Drove informed decision-making by collecting, analyzing data, and
            improving the program.
          </li>
          <li>
            Authored training materials and manuscripts, contributing to program
            knowledge.
          </li>
          <li>
            Supported robust research design through baseline and end-line
            evaluations.
          </li>
        </ul>
        <p>
          Skills: Qualitative & Quantitative Research · Project Management ·
          Program Evaluation · Public Health Research
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Dec 2015 - Sep 2016 · 10 mos"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title font-bold">
          Monitoring and Evaluation Assistant- Global Fund HIV program
        </h3>
        <h4 className="vertical-timeline-element-subtitle font-bold">
          Kenya Red Cross Society
        </h4>
        <h4 className="vertical-timeline-element-subtitle font-bold">
          North Rift region
        </h4>
        <ul className="list-disc">
          <li>
            Monitored project progress across 7 counties, ensuring accurate
            reporting from sub-recipients.
          </li>
          <li>
            Developed plans and budgets for efficient project execution in a
            multi-county region.
          </li>
          <li>
            Supported strong M&E practices for sub-recipients and ensured data
            quality.
          </li>
          <li>
            Collected client feedback to improve service provision by the Kenya
            Red Cross.
          </li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Apr 2015 - Sep 2015 · 6 mos"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title font-bold">
          {" "}
          WASH, Resilience and Livelihoods Intern
        </h3>
        <h4 className="vertical-timeline-element-subtitle font-bold">
          World Vision{" "}
        </h4>
        <h4 className="vertical-timeline-element-subtitle font-bold">
          Eldoret, Kenya
        </h4>
        <ul className="list-disc">
          <li>
            Assisted WASH Engineer with project implementation, including
            material estimates, construction supervision, and community
            training.
          </li>
          <li>
            Supported project planning from needs assessment to tender documents
            and contract preparation.
          </li>
          <li>
            Promoted WASH sustainability through community management and school
            WASH programs.
          </li>
        </ul>
        <p>
          Skills: Qualitative & Quantitative Research · Project Management ·
          Program Evaluation · Public Health Research
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
export default Timeline;
