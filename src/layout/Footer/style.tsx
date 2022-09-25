import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: var(--color-white-2);
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 31px 0;

  @media (max-width: 320px) {
    position: static;
    flex-direction: column;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  height: 18px;
  z-index: 2;

  @media (max-width: 320px) {
    flex-direction: column;
    gap: 16px;
    height: 100%;

    &:not(:last-child) {
      margin: 22px 0 16px 0;
    }
  }
`;

export const FooterLink = styled(Link)`
  padding: 0 25px 0 0;
  border-right: 1px solid var(--color-black);
  font-weight: var(--fw-300);
  font-size: var(--fs-300);
  line-height: var(--line-height-300);

  @media (max-width: 320px) {
    padding: 0;
    border: none;
  }
`;

export const FooterText = styled.span`
  font-weight: var(--fw-300);
  font-size: var(--fs-300);
  line-height: var(--line-height-300);
`;

export const Logo = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: var(--fs-700);
  font-weight: var(--fw-700);
  line-height: var(--line-height-700);

  @media (max-width: 320px) {
    display: none;
  }
`;

export const LogoMobile = styled.p`
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: var(--fs-700);
  font-weight: var(--fw-700);
  line-height: var(--line-height-700);

  @media (max-width: 320px) {
    display: flex;
  }
`;

export const FooterA = styled.a`
  font-weight: var(--fw-300);
  font-size: var(--fs-300);
  line-height: var(--line-height-300);
`;

export const SocialLink = styled.a`
  font-weight: var(--fw-300);
  font-size: var(--fs-300);
  line-height: var(--line-height-300);

  &:not(:last-child) {
    margin: 0 25px 0 0;
  }

  @media (max-width: 320px) {
    &:not(:last-child) {
      margin: 0 16px 0 0;
    }
  }
`;

export const IconDiv = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 320px) {
    margin: 8px 0 0 0;
  }
`;
