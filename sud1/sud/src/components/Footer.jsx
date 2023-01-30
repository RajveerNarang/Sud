import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Span,
  Input,
  Button,
} from "./FooterStyle";
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Technical Info</FooterLink>
            <FooterLink href="#">Other Products</FooterLink>
          </Column>

          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Bengaluru , India</FooterLink>
            <FooterLink href="#">8003010108</FooterLink>
            <FooterLink href="#">hr@curtistic.com</FooterLink>
          </Column>
          <Column>
            <Heading>
              Subscribe <Span>Newsletter</Span>
            </Heading>
            <FooterLink>
              <Input
                defaultValue="Enter Your Email"
                type="text"
                inputColor="rebeccapurple"
              />
              <Button primary>Subscribe</Button>
            </FooterLink>

            {/* <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink> */}
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
