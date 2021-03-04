import React from 'react';
import styles from '../Product/styles.module.css';
import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo';

import { Container, 
         Row, 
         Panel, 
         Column, 
         Gallery, 
         Section, 
         Description,
       } from './styles';

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
          {/* {/* <ProductAction /> */}
          <SellerInfo />


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

      <a href="#">Saiba mais sobre a garantia</a>
    </Section>
)


const Info = () => (
  <Description>
    <h2>Descrição</h2>
      <p>llllllllllllllllllllllll
        lllllllllllllllllllllllll
      <br />
      llllllllllllllllllllllllllll
      llllllllllllllllllllllllllll
      <br />      
      Itens inclusos:
      <br />
      -1x <br />
      -2x <br />
      -3x <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed plane dicit quod intellegit. Hoc não est positum em nostra actione. Duo Reges: constructio interrete. Inde sermone vario sex illa a Dipylo stadia confecimus. Si autem id non concedatur, non continuamente vita beata tollitur. Duarum enim vitarum nobis erunt instituta capienda. Atque ab his initiis profecti omnium virtutum et originem et progressionem persecuti sunt. Audeo dicere, injusto.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed plane dicit quod intellegit. Hoc não est positum em nostra actione. Duo Reges: constructio interrete. Inde sermone vario sex illa a Dipylo stadia confecimus. Si autem id non concedatur, non continuamente vita beata tollitur. Duarum enim vitarum nobis erunt instituta capienda. Atque ab his initiis profecti omnium virtutum et originem et progressionem persecuti sunt. Audeo dicere, injusto.
      </p>


  </Description>
)

export default Product;
