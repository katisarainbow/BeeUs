import React, { Profiler } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './chakra/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import NotFoundPage from './pages/notfound/NotFoundPage';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Beehive from './pages/beehive/Beehive';
import { PostProvider } from './context/postContext';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <PostProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/beehive" element={<Beehive />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PostProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
