import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const HeroBanner = () => {
  return (
    <div className>
      <Container>
        <Row className="align-items-center justify-items-center">
          <Col xs={12} md={6}>
            <h1 className="">Content Experiences Made Easier And Faster</h1>
            <h4>Headless CMS taken to the next level</h4>
            <p>
              March 7-8, 2022
              <br />
              March 8-9, 2022 EMEA &amp; APJ
              <br />
              Your brand deserves the best. Create the unimaginable with our enterprise Content Experience Platform.It’s headless CMS taken to the next level.
            </p>
          </Col>
          <Col xs={12} md={6} className="text-md-end d-md-block">
            <img
              src="../logo521.png"
              alt="banner.png"
              class="jsx-1123434775 img-fluid main-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroBanner;
