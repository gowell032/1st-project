import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <InfoWrap>
        <span>Contact us</span>
      </InfoWrap>
    </Container>
  );
}
const Container = styled.footer`
  width: 100vw;
  display: flex;
  border-top: 1px solid #ccc;
`;
const InfoWrap = styled.div`
  margin: 0 auto;
  width: 1290px;
`;
export default Footer;
