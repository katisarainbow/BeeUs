import React, { useState } from 'react';
import {
  Flex,
  IconButton,
  Avatar,
  Heading,
  Spacer,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { GiTreeBeehive } from 'react-icons/gi';
import { FaForumbee } from 'react-icons/fa';
import { IoIosNotificationsOutline, IoIosNotifications } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import avatar1 from '../../assets/avatar1.jpg';
import SearchInput from './SearchInput';
import RightContent from './RightContent/RightContent';
import Share from '../modal/share/Share';

const Navbar = () => {
  const [icons, setIcons] = useState(false);
  const user = true;
  const navigate = useNavigate();
  return (
    <Flex as="nav" bg="white" height="70px" padding="9px 20px" align="center">
      <Flex>
        <Heading
          as="h1"
          size="2xl"
          cursor="pointer"
          mt={1}
          onClick={() => {
            navigate('/');
          }}
        >
          BÜ
        </Heading>
      </Flex>
      {user ? (
        <>
          <Spacer />
          <SearchInput />
          <Spacer />
          <Wrap className="navbarRight" spacing={3} align="center">
            <WrapItem>
              <Share icons={icons} />
            </WrapItem>
            <WrapItem>
              <IconButton
                size="md"
                bg="transparent"
                onClick={() => {
                  navigate('/beehive');
                }}
              >
                <GiTreeBeehive size="1.5rem" />
              </IconButton>
            </WrapItem>
            <WrapItem>
              <IconButton size="md" bg="transparent">
                <FaForumbee size="1.2rem" />
              </IconButton>
            </WrapItem>
            <WrapItem>
              <IconButton
                size="md"
                bg="transparent"
                onClick={() => setIcons(!icons)}
              >
                {!icons ? (
                  <IoIosNotificationsOutline size="1.5rem" />
                ) : (
                  <IoIosNotifications size="1.5rem" />
                )}
              </IconButton>
            </WrapItem>
            <WrapItem>
              <Avatar
                name="pruebaxd"
                src={avatar1}
                cursor="pointer"
                size="sm"
                mt="4px"
                onClick={() => {
                  navigate('/profile');
                }}
              />
            </WrapItem>
          </Wrap>
        </>
      ) : (
        <>
          <Spacer />
          <SearchInput />
          <Spacer />
          <RightContent />
        </>
      )}
    </Flex>
  );
};

export default Navbar;
