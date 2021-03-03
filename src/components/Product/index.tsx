import React from 'react';
import styles from '../Product/styles.module.css';
import tshirtImage from '../../assets/tshirt.png';

import { Container, 
         Row, 
         Panel, 
         Column, 
         Gallery, 
         Section, 
         Description,
       } from '../Product/styles.module.css';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          {/* <ProductAction />
          <SellerInfo /> */}


          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
    <Section>
      <h4>Garantia</h4>

      <div>
        <span>
          <p className="titlle">Compre agora</p>
          <p className="description">Caso não receba o produto, devolveremos o seu 
          dinheiro.</p>
        </span>

        <span>
          <p className="titlle">Garantia do Vendedor</p>
          <p className="description">sem garantia</p>
        </span>
      </div>
    </Section>
)


const Info = () => (
  <Description>
    <h2>Descrição</h2>
      <p>llllllllllllllllllllllll
        lllllllllllllllllllllllll
      <br />
      <br />
      llllllllllllllllllllllllllll
      llllllllllllllllllllllllllll
      <br />
      <br />
      Itens inclusos:<br />
      -1x <br />
      -2x <br />
      -3x <br />
      <br />
      </p>


  </Description>
)

export default Product;
