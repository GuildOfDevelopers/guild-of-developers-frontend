import styled from 'styled-components';

export const Section = styled.section`
  background-color: var(--color-white);
`;

export const Title = styled.h1`
  font-size: var(--fs-600);
  font-weight: var(--fw-700);
  line-height: var(--line-height-600);

  text-align: center;
  margin: 81px 0 32px;

  @media (min-width: 768px) {
    margin: 105px 0 39px;
  }
`;

export const Wrapper = styled.form`
  position: relative;
  max-width: 792px;
  padding: 24px 12px;
  margin: 0 auto 64px;
  background-color: var(--color-white-2);
  border-radius: 20px;

  @media (min-width: 768px) {
    padding: 64px 100px;
    margin: 0 auto 128px;
  }
`;

export const SubTitle = styled.h2`
  font-size: var(--fs-600);
  font-weight: var(--fw-700);
  line-height: var(--line-height-600);

  text-align: center;
  margin: 0 0 24px;

  @media (min-width: 768px) {
    margin: 0 0 32px;
  }
`;

export const PhotoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-bottom: 88px;

  @media (min-width: 768px) {
    gap: 42px;
    flex-direction: row;
    margin-bottom: 64px;
  }
`;

interface PhotoBoxProps {
  minWidth: string;
  maxWidth?: string;
  height: string;
  marginMob?: string;
  marginDesk?: string;
  border: string;
}

export const PhotoBox = styled.div<PhotoBoxProps>`
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  margin: ${(props) => props.marginMob};
  background-color: var(--color-white);
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  border: ${(props) => props.border};
  border-radius: 50%;

  @media (min-width: 768px) {
    margin: ${(props) => props.marginDesk};
    border: 4px solid var(--color-black);
  }
`;

export const PhotoImg = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  z-index: 1;
`;

interface ButtonsBoxProps {
  paddingBlock: string;
  deskGap: string;
}

export const ButtonsBox = styled.div<ButtonsBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: ${(props) => props.deskGap};
    padding-block: ${(props) => props.paddingBlock};
  }
`;

export const FileInput = styled.input`
  display: none;
`;

interface BlackBtnProps {
  margin?: string;
  display?: string;
}

export const BlackBtn = styled.button<BlackBtnProps>`
  min-width: 183px;
  padding: 12px 42px;
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};

  background-color: var(--color-grey);
  border-radius: 25px;
  border: none;

  font-size: var(--fs-500);
  font-weight: var(--fw-700);
  line-height: var(--line-height-350);
  text-align: center;
  color: var(--color-white);
`;

export const LeftPartBox = styled.div``;

export const RightPartBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
  }
`;

interface WhiteBtnProps {
  marginTop?: string;
}

export const WhiteBtn = styled.button<WhiteBtnProps>`
  min-width: 183px;
  max-width: 183px;
  width: 100%;
  padding: 9px 42px;
  margin-top: ${(props) => props.marginTop};

  background-color: var(--color-white);
  border-radius: 25px;
  border: 3px solid var(--color-black);

  font-size: var(--fs-500);
  font-weight: var(--fw-700);
  line-height: var(--line-height-350);
  text-align: center;
  color: var(--color-black);
`;

export const CoverDiv = styled.div`
  margin-bottom: 64px;
  @media (min-width: 768px) {
    margin-bottom: 88px;
  }
`;

export const CoverBox = styled.div`
  max-width: 588px;
  width: 100%;
  height: 110px;
  background-color: var(--color-grey-3);
  border-radius: 15px;
  margin: 0 auto;
  @media (min-width: 768px) {
    height: 185px;
  }
`;

export const CoverImg = styled.img`
  width: 100%;
  height: 110px;
  border-radius: 15px;
  @media (min-width: 768px) {
    height: 185px;
  }
`;

export const CropDiv = styled.div`
  position: absolute;
  top: 25%;
  left: 10%;
  right: 10%;
  bottom: 25%;
  z-index: 100;
  background-color: var(--color-grey-2);
`;

export const CropControls = styled.div`
  position: absolute;
  width: 100%;
  bottom: 30%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  z-index: 101;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;
