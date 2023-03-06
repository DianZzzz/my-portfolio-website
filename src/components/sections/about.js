import React, { useEffect, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { srConfig } from "@config";
import sr from "@utils/sr";
import { usePrefersReducedMotion } from "@hooks";

const StyledAboutSection = styled.section`
  max-width: 900px;
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(1, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);
    &:hover,
    &:focus {
      outline: 0;
      &:after {
        top: 15px;
        left: 15px;
      }
      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }
    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }
    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    "Python, SQL, Javascript",
    "Scikit-learn, PyTorch, Tensorflow",
    "React, Django, Node.js",
    "Azure, AWS, GCP",
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">
        My Story as a Cardi B Rap Written by GPT3
      </h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Started my life in China, filled up with possibilities\ Loved to
              ride my tricycle, living carefree\ Headed to Singapore for more
              education\ Got the grades to secure a future of distinction From
              Singapore went to the US to gain some more cred\ Had to work my
              way through college, there was no backlog of dough\ Became a hedge
              fund analyst, made buckets of dough\ But I gotta move up and find
              something new, had to be bold Leave the fund and found me a new
              profession\ Started on the path of becoming an AI obsessor\
              Learned to master data science, nothing left to guess\ Living off
              of Pepper's love and double shot espresso Why they be hatin' on
              me?\ I'm the girl who loves to roam free\ I'm the one with a
              pedigree\ No one's gonna tell me to give up what I'm building\
              Cause everyday I'm grinding, and my knowledge just keep on
              expanding\ Now repeat after me\
            </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
