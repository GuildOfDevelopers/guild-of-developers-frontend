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
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  height: 18px;
  z-index: 2;
`;

export const FooterLink = styled(Link)`
  padding: 0 25px 0 0;
  border-right: 1px solid var(--color-black);
  font-weight: var(--fw-300);
  font-size: var(--fs-300);
  line-height: var(--line-height-300);
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
`;

export const FooterA = styled.a`
  font-weight: var(--fw-300);
  font-size: var(--fs-300);
  line-height: var(--line-height-300);
`;
