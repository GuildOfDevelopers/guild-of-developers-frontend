import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  padding: 25px;
  border-radius: 20px;
  background: var(--color-white-2);
`;

export const Photo = styled.img`
  margin: 0 25px 0 0;
  width: 98px;
  height: 98px;
  border: 4px solid var(--color-black);
  border-radius: 100%;
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Border = styled.div`
  border-bottom: 1px solid var(--color-black);
`;

export const Name = styled.p`
  margin: 0 9px 13px 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: var(--color-black);
`;

export const Nick = styled.p`
  margin: 0 0 22px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-black);
`;

export const BoldText = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: var(--color-black);
`;

export const Plank = styled.div`
  margin: 13px 0 0 0;
  padding: 5px 20.5px;
  width: max-content;
  border-radius: 20px;
  border: 2px solid var(--color-black);
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: var(--color-black);
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-black);
`;

export const More = styled.a`
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: var(--color-black);
`;
