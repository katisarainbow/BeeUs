import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  ModalBody,
  ModalFooter,
  SelectField,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from '@chakra-ui/react';
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from './utils/cropImage';
import EndForm from '../modal/share/EndForm';

function StepCrop({ imageToCrop, setImageToCrop }) {
  const [isImageCropped, setIsImageCropped] = useState(false);
  const [previewImageForm, setPreviewImageForm] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const cropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const cropImage = async () => {
    try {
      const { file, url } = await getCroppedImg(
        imageToCrop,
        croppedAreaPixels,
        rotation
      );
      setPreviewImageForm(file);
      setIsImageCropped(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {!isImageCropped ? (
        <>
          <ModalBody>
            <Box
              sx={{
                background: 'none',
                position: 'relative',
                width: '800px',
                height: '500px',
              }}
            >
              <Cropper
                objectFit="auto-cover"
                aspect={4 / 3}
                image={imageToCrop}
                crop={crop}
                zoom={zoom}
                rotation={rotation}
                onZoomChange={setZoom}
                onRotationChange={setRotation}
                onCropChange={setCrop}
                onCropComplete={cropComplete}
              />
            </Box>
            <Box display="flex" flexDirection="column" mt="1.2rem">
              <Text align="initial"> Zoom: {zoomPercent(zoom)}</Text>
              <Slider
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(zoom) => setZoom(zoom)}
                aria-label="slider-ex-1"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>
            <Box display="flex" flexDirection="column" mt="1rem">
              <Text align="initial"> Rotation: {rotation + '°'}</Text>
              <Slider
                min={0}
                max={300}
                value={rotation}
                onChange={(rotation) => setRotation(rotation)}
                aria-label="slider-ex-1"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>
          </ModalBody>
          <ModalFooter>
            <ButtonGroup spacing="400" variant="outline">
              <Button
                width="200px"
                onClick={() => {
                  setImageToCrop(null);
                }}
              >
                Cancel
              </Button>
              <Button width="200px" onClick={cropImage}>
                Next
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </>
      ) : (
        <EndForm {...{ previewImageForm, setPreviewImageForm }} />
      )}
    </>
  );
}

export default StepCrop;

const zoomPercent = (value) => {
  return `${Math.round(value * 100)}%`;
};
