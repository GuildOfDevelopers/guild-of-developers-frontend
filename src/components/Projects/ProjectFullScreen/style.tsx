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

export const ArrowDiv = styled(Link)`
  position: absolute;
  top: 115px;

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

  @media (max-width: 767px) {
    top: 63px;
  }

  @media (max-width: 700px) {
    top: 22px;
  }
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;
  gap: 25px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MainBlock = styled.div``;

export const MainContent = styled.main`
  background-color: var(--color-white-2);
  border-radius: 20px;

  max-width: 434px;
  padding: 25px;

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

  @media (max-width: 767px) {
    padding: 16px;
  }
`;

export const SubTitle = styled.h3`
  font-size: var(--fs-500);
  font-weight: var(--fw-600);
  line-height: var(--line-height-500);

  margin-bottom: 25px;
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
  display: flex;
  flex-direction: column;
  max-width: 331px;

  @media (max-width: 767px) {
    max-width: 434px;
  }
`;

export const AsideBlock = styled.div`
  background-color: var(--color-white-2);
  border-radius: 20px;

  padding: 25px;
  margin-bottom: 25px;

  @media (max-width: 767px) {
    padding: 16px;
  }
`;

export const Pagination = styled.div`
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
`;
