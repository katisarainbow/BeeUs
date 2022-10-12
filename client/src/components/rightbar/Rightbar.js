import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Table,
  Text,
} from '@chakra-ui/react';
import rightbar1 from '../../assets/rightbar1.png';
import rightbar2 from '../../assets/rightbar2.png';
import rightbar3 from '../../assets/rightbar3.jpeg';
import rightbar4 from '../../assets/rightbar4.jpeg';
import rightbar5 from '../../assets/rightbar5.jpeg';
import rightbar6 from '../../assets/rightbar6.jpeg';
import './rightbar.css';

const Rightbar = () => {
  const dataImages = [
    { image: rightbar1, name: 'Realism' },
    { image: rightbar2, name: 'Valorant' },
    { image: rightbar3, name: 'Anime' },
    { image: rightbar4, name: 'Watercolor' },
    { image: rightbar5, name: 'Pen' },
    { image: rightbar6, name: 'Digital' },
  ];
  return (
    <Flex className="rigthbar" padding="2rem">
      <Box width="28rem" height="50rem" bg="white" borderRadius="20px">
        <Flex
          h="25%"
          align="center"
          borderWidth="1px"
          borderTopLeftRadius="20px"
          borderTopRightRadius="20px"
        >
          <Avatar size="xl" ml="3rem" />
          <Flex direction="column" ml="2rem" mr="3rem">
            <Heading color="gray.600">Username</Heading>
            <Text color="gray.400">pronouns</Text>
          </Flex>
        </Flex>
        <Flex h="75%" justify="center" align="center">
          <Flex
            direction="column"
            width="90%"
            height="92%"
            bg="gray.100"
            borderRadius="20px"
          >
            <Center h="60px" mt="15px">
              <Heading style={{ fontFamily: 'Bungee' }} color="gray.900">
                Today trends
              </Heading>
            </Center>
            <Center h="100%">
              <SimpleGrid columns={2} spacing="5px">
                {dataImages.map((obj) => (
                  <Button
                    width="170px"
                    height="140px"
                    bgImage={obj.image}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    borderRadius="none"
                    key={obj.name}
                  >
                    {obj.name}
                  </Button>
                ))}
              </SimpleGrid>
            </Center>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Rightbar;
