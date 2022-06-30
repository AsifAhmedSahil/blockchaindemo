import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Blockchain world changes very fast. our daily learning module can help you to improve yout blockchain development skills fast & efficient.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Our Block Miners Academy provides all time support session for our students and community members!",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "To Compleate your blockchain bootcamp 2022 and pass your exam we provide you a certificate which can help you to get your dream job!",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
