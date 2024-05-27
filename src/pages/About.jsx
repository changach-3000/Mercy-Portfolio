import React from "react";
import Timeline from "../components/Timeline";

function About() {
  return (
    <>
    <section className="relative flex items-center justify-center h-screen">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <div className="blob"></div>
          <img src="about-image.png" alt="About-photo" />
        </div>

        <div className="place-self-center relative lg:col-span-7">
          <h1
            className="z-10 max-w-2xl mb-4 text-4xl font-poetsen tracking-tight leading-none md:text-5xl xl:text-6xl text-center animate-float-in-right"
            id="header"
          >
            About Mercy
          </h1>
          <p className="font-sans animate-float-in-right">
            With over seven years of experience in public health Monitoring,
            Evaluation, and Learning (MEL), I have honed my skills in data
            analysis, research methodologies, and stakeholder engagement. I am
            passionate about leveraging data to drive impactful improvements in
            international health programs. Currently, I manage data analysis for
            key projects, collaborating with organizations like the World Bank
            and World Food Programme. My dedication to continuous learning is
            evidenced by my pursuit of a Master of Public Health in Monitoring
            and Evaluation at Kenyatta University. I am eager to connect with
            like-minded professionals and organizations to contribute to the
            development of innovative solutions that address the health needs of
            underserved communities.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;
