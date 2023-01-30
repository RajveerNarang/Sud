import styled from "styled-components";

export const Box = styled.div`
  padding: 80px 60px;
  background-image: url("./images/footer.png");
  background-color: black;
  position: absolute;
  bottom: -500;
  opacity: 1;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 20em;
  color: ${(props) => props.inputColor || "white"};
  background: white;
  border: none;
  border-radius: 3px;
`;

export const Span = styled.span`
  padding: 0.5em;
  margin: 0.5em;
  color: rgb(73, 182, 73);
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "rgb(73, 182, 73)" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 0.6em;
  margin: 1em;
  padding: 0.25em 1em;
  position: relative;
  top: -3.8em;
  left: 15em;
  border: 2px solid white;
  border-radius: 8px;
`;
