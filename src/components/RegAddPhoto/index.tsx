/* eslint-disable @typescript-eslint/no-shadow */
import React, { useCallback, useState } from 'react';
import { FC } from 'react';
import Cropper from 'react-easy-crop';
import { Point, Area } from 'react-easy-crop/types';
import { Container } from '../../lib/styled/container';
import getCroppedImg from '../../services/canvasUtils';
import { CropControls, CropDiv, Section } from './style';
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

const RegAddPhoto: FC = () => {
  // Состояние где будет храниться оригинальное фото
  const [photo, setPhoto] = useState('');

  // Состояние где будет храниться изменённое фото
  const [croppedPhoto, setCroppedPhoto] = useState('');

  // у обложки аналогично с фото

  const [cover, setCover] = useState('');
  const [croppedCover, setCroppedCover] = useState('');

  const hiddenPhotoInput = React.useRef<HTMLInputElement>(null);
  const hiddenCoverInput = React.useRef<HTMLInputElement>(null);

  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState<Area>();
  const [photoCrop, setPhotoCrop] = useState(false);
  const [coverCrop, setCoverCrop] = useState(false);

  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  // Функция для подставления изменённого фото
  const saveCroppedPhoto = useCallback(
    async (event: React.FormEvent<HTMLButtonElement>) => {
      event.preventDefault();
      try {
        const croppedImage = await getCroppedImg(photo, croppedArea, 0);
        setCroppedPhoto(croppedImage);
        setPhotoCrop(false);
      } catch (error) {
        console.error(error);
      }
    },
    [croppedArea, photo]
  );

  // Функция для подставления изменённого фото
  const saveCroppedCover = useCallback(
    async (event: React.FormEvent<HTMLButtonElement>) => {
      event.preventDefault();
      try {
        const croppedCover = await getCroppedImg(cover, croppedArea, 0);
        setCroppedCover(croppedCover);
        setCoverCrop(false);
      } catch (error) {
        console.error(error);
      }
    },
    [croppedArea, cover]
  );

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
      setCroppedPhoto('');
      setPhoto(URL.createObjectURL(uploadedPhotos[0]));
    }
  };

  const handleChangeCover = (event: React.FormEvent<HTMLInputElement>) => {
    const uploadedCovers = (event.target as HTMLInputElement).files;
    if (uploadedCovers) {
      setCroppedCover('');
      setCover(URL.createObjectURL(uploadedCovers[0]));
    }
  };

  const handlePhotoDelete = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (hiddenPhotoInput.current?.value) {
      hiddenPhotoInput.current.value = '';
      setPhoto('');
      setCroppedPhoto('');
    }
  };

  const handleCoverDelete = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (hiddenCoverInput.current?.value) {
      hiddenCoverInput.current.value = '';
      setCover('');
      setCroppedCover('');
    }
  };

  const handlePhotoMin = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (photo) {
      setPhotoCrop(true);
    }
  };

  const handleCoverMin = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (cover) {
      setCoverCrop(true);
    }
  };

  // TODO: вместе с другими данными отправлять на сервер
  const handleSumbit = () => {};

  return (
    <Section>
      <Container>
        <Title>Фотография и обложка</Title>
        <Wrapper onSubmit={handleSumbit}>
          <SubTitle>Фотография</SubTitle>
          <PhotoDiv>
            <PhotoBox minWidth="161px" height="161px" border="4px solid var(--color-black)">
              {croppedPhoto ? (
                <PhotoImg src={croppedPhoto} alt="аватар" />
              ) : photo ? (
                <PhotoImg src={photo} alt="аватар" />
              ) : (
                <PhotoBlanc />
              )}
            </PhotoBox>
            <ButtonsBox deskGap="21px" paddingBlock="21px">
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
            {photoCrop && (
              <>
                <CropDiv>
                  <Cropper
                    image={photo}
                    crop={crop}
                    cropShape="round"
                    zoom={zoom}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                    aspect={4 / 4}
                  />
                </CropDiv>
                <CropControls>
                  <WhiteBtn onClick={saveCroppedPhoto}>Сохранить</WhiteBtn>
                  <WhiteBtn onClick={() => setPhotoCrop(false)}>Отмена</WhiteBtn>
                </CropControls>
              </>
            )}
          </PhotoDiv>
          <SubTitle>Обложка</SubTitle>
          <CoverDiv>
            <CoverBox>
              {croppedCover ? (
                <CoverImg src={croppedCover} alt="Обложка" />
              ) : cover ? (
                <CoverImg src={cover} alt="Обложка" />
              ) : null}
            </CoverBox>
            <PhotoBox
              minWidth="90px"
              marginDesk="-22.5px 0 0 55px"
              maxWidth="90px"
              height="90px"
              marginMob="-22.5px auto 32px"
              border="2px solid var(--color-black)"
            >
              {croppedPhoto ? (
                <PhotoImg src={croppedPhoto} alt="аватар" />
              ) : photo ? (
                <PhotoImg src={photo} alt="аватар" />
              ) : (
                <PhotoBlancMin />
              )}
            </PhotoBox>
            <ButtonsBox deskGap="18px" paddingBlock="24px">
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
            {coverCrop && (
              <>
                <CropDiv>
                  <Cropper
                    image={cover}
                    crop={crop}
                    zoom={zoom}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                    aspect={16 / 9}
                  />
                </CropDiv>
                <CropControls>
                  <WhiteBtn onClick={saveCroppedCover}>Сохранить</WhiteBtn>
                  <WhiteBtn onClick={() => setCoverCrop(false)}>Отмена</WhiteBtn>
                </CropControls>
              </>
            )}
          </CoverDiv>
          <BlackBtn margin="0 auto" display="block" type="submit">
            Зарегистрироваться
          </BlackBtn>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default RegAddPhoto;
