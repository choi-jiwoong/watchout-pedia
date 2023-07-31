import React from "react";
import styled from '@emotion/styled';


const Base = styled.footer`
  display: block;
  box-sizing: border-box;
  width: 100%;
`;

const Section = styled.section`
  background-color: #1c1c1f;
`;

const Statistic = styled.section`
  background-color: #101113;
  width: 100%;
  height: 62px;
  line-height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Summary = styled.span`
  color: #d1d1d2;
  font-size: 12px;
  font-weight: 500;
  line-height: 22px; 
  text-align: center;

`;   

const Emphasis = styled.span`
  color: #ff0558;
  font-size: 19px;
  font-weight: 500;
  line-height: 22px;
`;

const Container = styled.section`
  background-color: #1c1c1f;
  padding: 20px 0 38px;
`;

const ContainerWrapper = styled.section`
  display: flex;
  margin: 0 60px;
`;

const Left = styled.div``;

const Right = styled.div``;

const TermAndPolicy = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TermAndPolicyItem = styled.li`
  display: inline-block;
  color: #a5a5a7;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  vertical-align: top;
  cursor: pointer;  
  &:not(:last-child) {
    &::after {
      content: "";
      display: inline-block;
      background-color: "#848485";
      vertical-align: top;
      width: 1px;
      height: 12px;
      margin: 5px 8px 0;
    } 
  }
`;

const Footer: React.FC = () => {

    return (
        <Base>
            <Section>
                <Statistic>
                    <Summary>
                        지금까지&nbsp;
                            <Emphasis>* 122,212,212 개의 평가가</Emphasis>
                        &nbsp;쌓여있어요.
                    </Summary>
                </Statistic>
                <Container>
                    <ContainerWrapper>
                        <Left>
                            <TermAndPolicy>
                                <TermAndPolicyItem>서비스 이용약관</TermAndPolicyItem>
                                <TermAndPolicyItem>개인정보 처리방침</TermAndPolicyItem>
                                <TermAndPolicyItem>회사정책</TermAndPolicyItem>
                            </TermAndPolicy>
                        </Left>
                    </ContainerWrapper>
                </Container>
            </Section>

        </Base>

    )
}

export default Footer;