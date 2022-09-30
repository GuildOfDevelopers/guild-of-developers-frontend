import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  background-color: var(--color-white);
`;

export const Wrapper = styled.div`
  position: relative;
  padding-block: 55px;

  @media (min-width: 768px) {
    padding-block: 105px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;

  text-align: center;
  font-weight: var(--fw-700);
  font-size: var(--fs-600);
  line-height: var(--line-height-600);
`;

export const GoBack = styled(Link)`
  position: absolute;
  top: 22px;

  display: flex;
  align-items: center;
  gap: 25px;

  font-size: var(--fs-350);
  font-weight: var(--fw-400);
  cursor: pointer;

  transition: transform 0.3s ease-out;

  &:hover,
  &:focus-visible {
    font-weight: var(--fw-500);
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    top: 115px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

export const MainBlock = styled.li``;

export const MainContent = styled.ul`
  padding: 16px;
  max-width: 434px;

  border-radius: 20px;
  background-color: var(--color-white-2);

  & ${MainBlock}:nth-child(-n + 3) {
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      margin: 25px 0;
      background-color: var(--color-grey-2);
    }
  }

  @media (min-width: 768px) {
    padding: 25px;
  }
`;

export const SubTitle = styled.h3`
  margin-bottom: 25px;

  font-size: var(--fs-500);
  font-weight: var(--fw-600);
  line-height: var(--line-height-500);

  text-align: center;

  @media (min-width: 768px) {
    text-align: start;
  }
`;

export const Description = styled.p`
  font-size: var(--fs-350);
  font-weight: var(--fs-400);
  line-height: var(--line-height-400);
`;

export const List = styled.ul`
  list-style-type: disc;
  margin-inline-start: 25px;
`;

export const ListItem = styled.li`
  font-size: var(--fs-350);
  font-weight: var(--fs-400);
  line-height: var(--line-height-400);
`;

export const AsideContent = styled.aside`
  max-width: 434px;

  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 331px;
  }
`;

export const AsideBlock = styled.div`
  padding: 16px;
  margin-bottom: 25px;

  border-radius: 20px;
  background-color: var(--color-white-2);

  @media (min-width: 768px) {
    padding: 25px;
  }
`;

export const Pagination = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const PaginationControl = styled(Link)`
  display: flex;
  align-items: center;
  gap: 13px;

  font-size: var(--fs-350);
  font-weight: var(--fs-400);
  line-height: var(--line-height-400);
  transition: transform 0.3s ease-out;

  &:hover,
  &:focus-visible {
    font-weight: var(--fw-500);
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1.05);
  }

  cursor: pointer;
`;

export const PaginationLeft = styled.span`
  text-align: left;
`;

export const PaginationRight = styled.span`
  text-align: right;
`;

export const Button = styled.a`
  margin-inline: auto;

  width: 179px;
  height: 42px;

  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: var(--fw-700);
  font-size: var(--fs-500);
  line-height: var(--line-height-500);
  text-align: center;

  color: var(--color-white);
  background-color: var(--color-grey);

  transition: transform 0.3s ease-out;

  &:hover,
  &:focus-visible {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    margin-inline: 0;
  }
`;
