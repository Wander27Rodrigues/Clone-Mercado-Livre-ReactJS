import React from 'react';
import Header from '../Header';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />

      <Wrapper>
        <Product />
      </Wrapper>

    <Footer />

    </Container>
  );
};

export default Layout;
