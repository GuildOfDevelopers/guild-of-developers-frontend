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
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 17px 25px 29px;
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
  font-size: var(--fs-550);
  font-weight: var(--fw-700);
  line-height: var(--line-height-550);
  color: var(--color-black);

  &::before {
    content: open-quote;
  }
  &::after {
    content: close-quote;
  }

  @media (min-width: 768px) {
    font-size: var(--fs-570);
  }
`;

export const CardDescription = styled.p`
  flex-grow: 1;
  margin-bottom: 22px;
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
  width: 130px;
  padding: 9px 19px;
  text-align: center;
  background: var(--color-grey);
  border-radius: 25px;
  color: var(--color-white);
  font-weight: var(--fw-700);
  font-size: var(--fs-500);
  line-height: var(--line-height-550);

  @media (min-width: 768px) {
    width: 184px;
    font-size: var(--fs-550);
  }
`;
