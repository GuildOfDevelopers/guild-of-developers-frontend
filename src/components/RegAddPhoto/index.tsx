import React, { useState } from 'react';
import { FC } from 'react';
import {
  Wrapper,
  Title,
  SubTitle,
  PhotoDiv,
  PhotoBox,
  ButtonsBox,
  FileInput,
  BlackBtn,
  PhotoImg,
  RightPartBox,
  LeftPartBox,
  CoverDiv,
  CoverBox,
  WhiteBtn,
  CoverImg
} from './style';
import { PhotoBlanc, PhotoBlancMin } from './svg';

// Если я правильно понимаю, то эта форма будет просто подставляться в контейнер регистрации, потому не обворачиваю.

const RegAddPhoto: FC = () => {
  const [photo, setPhoto] = useState({
    photo: ''
  });
  const [cover, setCover] = useState({
    cover: ''
  });
  const hiddenPhotoInput = React.useRef<HTMLInputElement>(null);
  const hiddenCoverInput = React.useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (hiddenPhotoInput.current) hiddenPhotoInput.current.click();
  };

  const handleCoverUpload = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (hiddenCoverInput.current) hiddenCoverInput.current.click();
  };

  const handleChangePhoto = (event: React.FormEvent<HTMLInputElement>) => {
    const uploadedPhotos = (event.target as HTMLInputElement).files;
    if (uploadedPhotos) {
      setPhoto({
        photo: URL.createObjectURL(uploadedPhotos[0])
      });
    }
  };

  const handleChangeCover = (event: React.FormEvent<HTMLInputElement>) => {
    const uploadedCovers = (event.target as HTMLInputElement).files;
    if (uploadedCovers) {
      setCover({
        cover: URL.createObjectURL(uploadedCovers[0])
      });
    }
  };

  const handlePhotoDelete = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (hiddenPhotoInput.current?.value) {
      hiddenPhotoInput.current.value = '';
      setPhoto({
        photo: ''
      });
    }
  };

  const handleCoverDelete = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (hiddenCoverInput.current?.value) {
      hiddenCoverInput.current.value = '';
      setCover({
        cover: ''
      });
    }
  };

  // TODO: настроить изменения миниатюры
  const handlePhotoMin = () => {};

  const handleCoverMin = () => {};

  // TODO: вместе с другими данными отправлять на сервер
  const handleSumbit = () => {};

  return (
    <>
      <Title>Фотография и обложка</Title>
      <Wrapper onSubmit={handleSumbit}>
        <SubTitle>Фотография</SubTitle>
        <PhotoDiv>
          <PhotoBox maxWidth="161px" height="161px">
            {photo.photo ? <PhotoImg src={photo.photo} alt="аватар" /> : <PhotoBlanc />}
          </PhotoBox>
          <ButtonsBox gap="21px" paddingBlock="21px">
            <LeftPartBox>
              <FileInput
                type="file"
                accept="image/*"
                ref={hiddenPhotoInput}
                onChange={handleChangePhoto}
              />
              <BlackBtn onClick={handlePhotoUpload}>Загрузить</BlackBtn>
            </LeftPartBox>
            <RightPartBox>
              <WhiteBtn onClick={handlePhotoMin}>Изменить</WhiteBtn>
              <WhiteBtn onClick={handlePhotoDelete} marginTop="24px">
                Удалить
              </WhiteBtn>
            </RightPartBox>
          </ButtonsBox>
        </PhotoDiv>
        <SubTitle>Обложка</SubTitle>
        <CoverDiv>
          <CoverBox>{cover.cover && <CoverImg src={cover.cover} alt="Обложка" />}</CoverBox>
          <PhotoBox maxWidth="90px" height="90px" marginTop="-22.5px" marginLeft="55px">
            {photo.photo ? <PhotoImg src={photo.photo} alt="аватар" /> : <PhotoBlancMin />}
          </PhotoBox>
          <ButtonsBox gap="18px" paddingBlock="24px">
            <FileInput
              type="file"
              accept="image/*"
              ref={hiddenCoverInput}
              onChange={handleChangeCover}
            />
            <BlackBtn onClick={handleCoverUpload}>Загрузить</BlackBtn>
            <WhiteBtn onClick={handleCoverMin}>Изменить</WhiteBtn>
            <WhiteBtn onClick={handleCoverDelete}>Удалить</WhiteBtn>
          </ButtonsBox>
        </CoverDiv>
        <BlackBtn margin="0 auto" display="block" type="submit">
          Зарегистрироваться
        </BlackBtn>
      </Wrapper>
    </>
  );
};

export default RegAddPhoto;
