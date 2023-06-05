
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profile from "/Users/bootcamp/bootcamp/My-React-Portfolio/my-react-portfolio/src/components/images/Profile.jpg"


function About(props) {
  return (
    <Container>
      <Row>
        <Col>
         <img className="profile" src={profile} alt="Profile Picture" />
          <h1 className="display-4 text-center text-primary mb-4">About Me</h1>
          <p className="lead text-center">Software Developer | Language Enthusiast | Effective Communicator</p>

          <div className="bg-light p-4 mb-4">
            <p className="text-center">
              Results-driven software developer with a background in English literature and a passion for languages. Equipped with a Bachelor's degree in English, I have cultivated a keen eye for detail, effective communication skills, and an analytical mindset. With an understanding of multiple programming languages and frameworks, I am now transitioning my career towards development roles.
            </p>

            <p className="text-center">
              In my pursuit of a career in development, I have acquired valuable technical skills in web technologies including HTML, CSS, JavaScript, Node.js, Express, SQL, NoSQL, React, and the MERN stack. These tools have enabled me to create dynamic and interactive web applications that deliver exceptional user experiences. My experience working with diverse technologies has honed my problem-solving skills and fostered a strong foundation in software development principles.
            </p>


            <p className="text-center">
              If you are looking for a dedicated, adaptable, and multilingual software developer, I would welcome the opportunity to discuss how my skills and experiences align with your organization's needs. Please feel free to reach out to me for further discussion or to request any additional information.
            </p>

            <p className="text-center">
              Thank you for considering my profile.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
