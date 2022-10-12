import React from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import rightbar1 from '../../assets/rightbar1.png';
import rightbar2 from '../../assets/rightbar2.png';
import rightbar3 from '../../assets/rightbar3.jpeg';
import rightbar4 from '../../assets/rightbar4.jpeg';
import rightbar5 from '../../assets/rightbar5.jpeg';
import rightbar6 from '../../assets/rightbar6.jpeg';
import ProfileFeed from '../../components/profileFeed/ProfileFeed';

const dataImages = [
  { image: rightbar1, name: 'Realism' },
  { image: rightbar2, name: 'Valorant' },
  { image: rightbar3, name: 'Anime' },
  { image: rightbar4, name: 'Watercolor' },
  { image: rightbar5, name: 'Pen' },
  { image: rightbar6, name: 'Digital' },
  { image: rightbar1, name: 'Realism' },
  { image: rightbar2, name: 'Valorant' },
  { image: rightbar3, name: 'Anime' },
  { image: rightbar4, name: 'Watercolor' },
  { image: rightbar5, name: 'Pen' },
  { image: rightbar6, name: 'Digital' },
  { image: rightbar1, name: 'Realism' },
  { image: rightbar2, name: 'Valorant' },
  { image: rightbar3, name: 'Anime' },
  { image: rightbar4, name: 'Watercolor' },
  { image: rightbar5, name: 'Pen' },
  { image: rightbar6, name: 'Digital' },
];

const Beehive = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  return (
    <Flex direction="column" align="center">
      <Box bg="red" h="300px" w="95%" mt="3rem">
        <Slider {...settings}>
          {dataImages.map((data) => (
            <Button
              h="300px"
              borderRadius="none"
              bgImage={data.image}
              bgPosition="center"
            >
              {data.name}
            </Button>
          ))}
        </Slider>
      </Box>
      <Flex>
        <ProfileFeed />
      </Flex>
    </Flex>
  );
};

export default Beehive;
