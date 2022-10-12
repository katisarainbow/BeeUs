import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import example from '../../assets/example.jpeg';
import example2 from '../../assets/example2.jpeg';
import example3 from '../../assets/example3.jpeg';
import example4 from '../../assets/example4.jpeg';
import example5 from '../../assets/example5.jpeg';
import example6 from '../../assets/example6.jpeg';

const ProfileFeed = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const images = [
    { name: 'Albaricoq2', image: example },
    { name: 'amandaXx', image: example2 },
    { name: 'pikashuuu', image: example3 },
    { name: 'jonasbroterSS', image: example4 },
    { name: 'asjjajjd', image: example5 },
    { name: 'asok10202', image: example6 },
    { name: 'askjdnajks', image: example3 },
  ];
  return (
    <SimpleGrid
      flexDirection="column"
      columns={3}
      spacing={10}
      padding="3rem"
      width="100%"
    >
      {images.map((obj) => (
        <Box width="100%" position="relative">
          <Image
            src={obj.image}
            w="100%"
            objectFit="cover"
            borderRadius="20px"
            cursor="pointer"
          />
          <Flex
            position="absolute"
            flexDirection="row"
            align="center"
            justify="space-between"
            top="0px"
            right="0px"
            padding="1rem 1rem"
            w="100%"
          >
            <Flex align="center">
              <Avatar size="sm" cursor="pointer" />
              <Text color="white" ml="1rem">
                {obj.name}
              </Text>
            </Flex>
            <IconButton size="sm" bg="none">
              <MdOutlineKeyboardArrowDown />
            </IconButton>
          </Flex>
          <Flex
            position="absolute"
            align="center"
            justify="center"
            bottom="0px"
            right="0px"
          >
            <IconButton mr="1rem" mb="1rem">
              <AiOutlineHeart />
            </IconButton>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ProfileFeed;
