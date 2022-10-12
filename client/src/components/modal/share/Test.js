import {
  Box,
  Button,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from '@chakra-ui/react';
import React, { useState, useRef, useEffect } from 'react';
import Cropper from 'react-easy-crop';
import ReactCrop from 'react-image-crop';
import icon from '../../../assets/icon.png';

const Test = () => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState('');
  const inputRef = useRef();

  const [isCrop, setIsCrop] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result.toString());
        setIsCrop(true);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const cropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  return (
    <div>
      {!isCrop ? (
        <ModalContent>
          <ModalHeader>Create new post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img src={icon} alt="iconShare" />
            <Input
              type="file"
              style={{ display: 'none' }}
              ref={inputRef}
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files[0];
                if (file && file.type.substr(0, 5) === 'image') {
                  setImage(file);
                } else {
                  setImage(null);
                }
              }}
            />
            <Button
              type="button"
              width="20rem"
              align="center"
              mt="20px"
              onClick={() => inputRef.current.click()}
            >
              Select file
            </Button>
          </ModalBody>
        </ModalContent>
      ) : (
        <ModalContent>
          <ModalHeader>Crop Image</ModalHeader>
          <Box>
            <Cropper
              image={preview}
              crop={crop}
              zoom={zoom}
              rotation={rotation}
              onZoomChange={setZoom}
              onRotationChange={setRotation}
              onCropChange={setCrop}
              onCropComplete={cropComplete}
            />
          </Box>

          <Box display="flex">
            <Text> Zoom: {zoomPercent(zoom)}</Text>
            <Slider
              min={1}
              max={3}
              step={1}
              value={zoom}
              onChange={(e, zoom) => setZoom(zoom)}
              aria-label="slider-ex-1"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
          <Box display="flex">
            <Text> Rotation: {rotation}</Text>
            <Slider
              min={0}
              max={360}
              value={rotation}
              onChange={(e, rotation) => setRotation(rotation)}
              aria-label="slider-ex-1"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
        </ModalContent>
      )}
    </div>
  );
};

const zoomPercent = (value) => {
  return `${Math.round(value * 100)}%`;
};

export default Test;
