import { Center, Flex } from '@chakra-ui/react';
import React from 'react';
import Feed from '../../components/feed/Feed';
import InformationCard from '../../components/informationCard/InformationCard';
import Post from '../../components/post/Post';
import ProfileFeed from '../../components/profileFeed/ProfileFeed';

const Profile = () => {
  return (
    <Flex direction="column">
      <Center width="100%" bg="gray.200">
        <InformationCard />
      </Center>
      <Center width="100%" bg="gray.200">
        <ProfileFeed />
      </Center>
    </Flex>
  );
};

export default Profile;
