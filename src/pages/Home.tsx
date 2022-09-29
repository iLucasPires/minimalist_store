import React from 'react';
import { About } from '../components/organisms/About';
import {Footer} from '../components/organisms/Footer';
import {Main} from '../components/organisms/Main';
import { Presentation } from '../components/organisms/Presentation';

export const Home = () => {
  return (
    <>
      <Main />
      <Presentation />
      <About />
      <Footer />
    </>
  );
};
