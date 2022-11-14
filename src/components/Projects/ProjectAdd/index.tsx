/* eslint-disable @typescript-eslint/no-shadow */
import { Menu } from '@headlessui/react';
import React, { FC, useState, useCallback } from 'react';
import { Container } from '../../../lib/styled/container';
import Cropper from 'react-easy-crop';
import { Point, Area } from 'react-easy-crop/types';
import getCroppedImg from '../../../services/canvasUtils';
import {
  Fieldset,
  InputText,
  Label,
  LabelText,
  MenuButton,
  MenuItems,
  Section,
  Textarea,
  Title,
  Wrapper,
  BlackBtn,
  ButtonsBox,
  WhiteBtn,
  CropDiv,
  CropControls,
  FileInput,
  CoverDiv,
  CoverBox,
  CoverImg,
  BackBox,
  BackBoxText
} from './style';
import { Link } from 'react-router-dom';
import { ArrowBack } from './icon';
import { useProjectStore } from '../../../zustand-store';
import DropdownList from '../../DropdownList';

const ProjectAdd: FC = () => {
  const hiddenCoverInput = React.useRef<HTMLInputElement>(null);
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const { name, data, description, role, changeInput, checkedDepartments, projectLink } =
    useProjectStore();

  const [cover, setCover] = useState('');
  const [croppedCover, setCroppedCover] = useState('');
  const [coverCrop, setCoverCrop] = useState(false);

  const [croppedArea, setCroppedArea] = useState<Area>();

  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

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

  const handleCoverUpload = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (hiddenCoverInput.current) hiddenCoverInput.current.click();
  };

  const handleChangeCover = (event: React.FormEvent<HTMLInputElement>) => {
    const uploadedCovers = (event.target as HTMLInputElement).files;
    if (uploadedCovers) {
      setCroppedCover('');
      setCover(URL.createObjectURL(uploadedCovers[0]));
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

  const handleCoverMin = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (cover) {
      setCoverCrop(true);
    }
  };

  return (
    <Section>
      <Container>
        <BackBox>
          <Link to="/profile">
            <ArrowBack />
            <BackBoxText>Назад в профиль</BackBoxText>
          </Link>
        </BackBox>
        <Title>Добавить проект в портфолио</Title>
        <Wrapper>
          <Fieldset>
            <Label wfill>
              <LabelText>Название проекта*</LabelText>
              <InputText
                value={name}
                placeholder="Введите"
                onChange={(e) => changeInput('name', e.target.value)}
              />
            </Label>
            <Label wfill>
              <LabelText>Сроки выполнения*</LabelText>
              <InputText
                value={data}
                placeholder="Введите"
                onChange={(e) => changeInput('data', e.target.value)}
              />
            </Label>
            <Label wfill>
              <LabelText>Короткое описание*</LabelText>
              <Textarea
                value={description}
                placeholder="Начните вводить...."
                onChange={(e) => changeInput('description', e.target.value)}
              />
            </Label>
            <Label wfill>
              <LabelText>Роль в команде</LabelText>
              <InputText
                value={role}
                placeholder="Введите"
                onChange={(e) => changeInput('role', e.target.value)}
              />
            </Label>
            <Label wfill>
              <LabelText>Направление (одно или несколько)</LabelText>
              <Menu>
                <MenuButton>
                  {checkedDepartments()
                    .map((item) => item.name)
                    .join(', ') || 'Выберите'}
                </MenuButton>
                <MenuItems>
                  <DropdownList page="addProject" type="checkbox" name="department" />
                </MenuItems>
              </Menu>
            </Label>
            <Label wfill>
              <LabelText>Ссылка на проект (если есть на другом источнике)</LabelText>
              <InputText
                value={projectLink}
                placeholder="Введите"
                onChange={(e) => changeInput('projectLink', e.target.value)}
              />
            </Label>
          </Fieldset>
          <Fieldset>
            <LabelText>Фото проeкта (для обложки)</LabelText>
            <CoverDiv>
              <CoverBox>
                {croppedCover ? (
                  <CoverImg src={croppedCover} alt="Обложка" />
                ) : cover ? (
                  <CoverImg src={cover} alt="Обложка" />
                ) : null}
              </CoverBox>
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
                      aspect={4 / 3}
                    />
                  </CropDiv>
                  <CropControls>
                    <WhiteBtn onClick={saveCroppedCover}>Сохранить</WhiteBtn>
                    <WhiteBtn onClick={() => setCoverCrop(false)}>Отмена</WhiteBtn>
                  </CropControls>
                </>
              )}
            </CoverDiv>
            <BlackBtn width="100%" margin="0 auto" display="block" type="submit" onClick={() => {}}>
              <Link to="profile/portfolio"> Готово </Link>
            </BlackBtn>
          </Fieldset>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default ProjectAdd;
