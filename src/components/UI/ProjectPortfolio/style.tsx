import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 20px;
  background-color: var(--color-white-2);
`;

export const CardImg = styled.img`
  width: 100%;
  height: 278px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 20px;
  background-color: var(--color-grey-3);
`;

export const CardWrapper = styled.div`
  padding: 17px 25px 29px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const CardDate = styled.p`
  margin-bottom: 18px;
  font-size: var(--fs-300);
  font-weight: var(--fw-400);
  line-height: var(--line-height-370);
  color: var(--color-black);
  font-variant-numeric: lining-nums;
  font-feature-settings: 'lnum';
`;

export const CardTitle = styled.h3`
  margin-bottom: 25px;
  font-size: var(--fs-570);
  font-weight: var(--fw-700);
  line-height: var(--line-height-550);
  color: var(--color-black);

  &::before {
    content: open-quote;
  }
  &::after {
    content: close-quote;
  }
`;

export const CardDescription = styled.p`
  margin-bottom: 24px;
  font-size: var(--fs-350);
  font-weight: var(--fw-400);
  line-height: var(--line-height-400);
  color: var(--color-black);

  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  -ms-line-clamp: 4;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  display: -webkit-box;
  display: box;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
  box-orient: vertical;
`;

export const CardButton = styled.button`
  width: 184px;
  padding: 9px 19px;
  text-align: center;
  background: var(--color-grey);
  border-radius: 25px;
  color: var(--color-white);
  font-weight: var(--fw-700);
  font-size: var(--fs-550);
  line-height: var(--line-height-550);

  justify-self: end;
`;

export const CardTitleSmall = styled.p`
  margin-bottom: 6px;
  color: var(--color-black);
  font-size: var(--fs-250);
  font-weight: var(--fw-600);
  line-height: var(--line-height-500);
`;

export const CardRole = styled.ul`
  margin-bottom: 24px;
`;

export const CardRoleItem = styled.li`
  display: inline-block;
  flex-grow: 1;
  font-size: var(--fs-350);
  font-weight: var(--fw-400);
  line-height: var(--line-height-400);
  color: var(--color-black);

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const CardStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 25px;
`;

export const CardStackWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 15px;
`;

export const CardStackItem = styled.li`
  padding: 6px 15px;
  width: fit-content;
  border: 2px solid #000000;
  border-radius: 20px;

  font-size: var(--fs-450);
  font-weight: var(--fw-600);
  line-height: var(--line-height-500);
`;
