import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: var(--color-fon);
`;

export const Wrapper = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 31px 0;

  @media (min-width: 1024px) {
    position: relative;
    flex-direction: row;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  height: 100%;
  z-index: 2;

  &:not(:last-child) {
    margin: 22px 0 16px 0;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 25px;
    height: 18px;

    &:not(:last-child) {
      margin: 0;
    }
  }
`;

export const FooterLink = styled(Link)`
  padding: 0;
  border: none;
  font-weight: var(--fw-300);
  font-size: var(--fs-300);
  line-height: var(--line-height-300);
  color: var(--color-grey1);

  @media (min-width: 1024px) {
    padding: 0 25px 0 0;
    border-right: 1px solid var(--color-grey1);
  }
`;

export const FooterText = styled.span`
  font-weight: var(--fw-300);
  font-size: var(--fs-300);
  line-height: var(--line-height-300);
  color: var(--color-grey1);
`;

export const Logo = styled.div`
  @media (min-width: 1024px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    svg {
      width: 95px;
      height: 48px;
    }
  }
`;

export const FooterA = styled.a`
  font-weight: var(--fw-300);
  font-size: var(--fs-300);
  line-height: var(--line-height-300);
  color: var(--color-grey1);
`;

export const SocialLink = styled.a`
  font-weight: var(--fw-300);
  font-size: var(--fs-300);
  line-height: var(--line-height-300);

  &:not(:last-child) {
    margin: 0 16px 0 0;
  }

  @media (min-width: 1024px) {
    &:not(:last-child) {
      margin: 0 25px 0 0;
    }
  }
`;

export const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px 0 0 0;

  @media (min-width: 1024px) {
    margin: 0;
  }
`;
