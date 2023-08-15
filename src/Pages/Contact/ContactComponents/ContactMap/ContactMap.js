import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ContactMap() {
  return (
    <Container fluid className="gx-0" style={{height: '400px'}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.0580825953093!2d74.2589301753101!3d31.467588374238215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903a7b8137a3d%3A0xaf8bf9341ccad18f!2sInvoZone!5e0!3m2!1sen!2s!4v1691746891919!5m2!1sen!2s"
            width="100%"
            height="400px"
            style={{border: '0'}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
    </Container>
  );
}

export default ContactMap;
