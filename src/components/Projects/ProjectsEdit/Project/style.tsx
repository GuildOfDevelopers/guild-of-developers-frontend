import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  background-color: var(--color-white-2);
  border-radius: 20px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 278px;
  border-radius: 20px;
`;

export const CardEdit = styled(Link)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-white);
  border-radius: 50%;
`;

export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 278px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-3);
  border-radius: 20px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 19px;

  @media (min-width: 768px) {
    padding: 16px 24px 32px;
  }
`;

export const Date = styled.span`
  font-size: var(--fs-300);
  line-height: var(--line-height-300);
  font-feature-settings: 'pnum' on, 'lnum' on;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
`;

export const Title = styled.h2`
  font-size: var(--fs-550);
  font-weight: var(--fw-700);
  line-height: var(--line-height-550);
  font-feature-settings: 'pnum' on, 'lnum' on;

  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 25px;
  }
`;

export const Text = styled.p`
  font-size: var(--fs-350);
  line-height: var(--line-height-400);

  margin-bottom: 24px;
`;

export const SubTitle = styled.h3`
  font-size: var(--fs-250);
  font-weight: var(--fw-600);
  line-height: var(--line-height-500);

  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 6px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const DepartmentBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 0;
  }
`;

export const Department = styled.li`
  font-size: var(--fs-250);
  font-weight: var(--fw-600);
  line-height: var(--line-height-500);
  padding: 6px 15px;
  border: 2px solid var(--color-black);
  border-radius: 20px;
  width: fit-content;
`;

export const ProjectLink = styled(Link)`
  font-size: var(--fs-500);
  font-weight: var(--fw-700);
  line-height: var(--line-height-500);
  color: var(--color-white);
  padding: 9px 19px;
  background-color: var(--color-grey);
  border-radius: 25px;
  width: fit-content;
  text-align: center;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 183px;
  }
`;
