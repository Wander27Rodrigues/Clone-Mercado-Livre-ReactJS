import React from 'react';

import { 
  Container,
  Condition,
  Row,
  DispatchTag,
  PriceCard,
  PriceRow,
  IstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Buttom,
  Benefits,
  ShieldIcon
 } from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo</Condition>

      <Row>
        <h1>Camiseta Branca</h1>
      </Row>


      <DispatchTag>Enviando Normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>
        <IstallmentsInfo>em 3x de R$11,67</IstallmentsInfo>
      </PriceCard>
        <StockStatus>Estoque disponível</StockStatus>

        <MethodCard>
          <CheckIcon />


          <div>
            <span className="title">Frete Grátis</span>
            <span className="details">Benefício</span>
            <a href="#" className="more">
              Ver mais opções
            </a>
          </div>
        </MethodCard>

        <Actions>
          <Buttom solid>Comprar agora</Buttom>
          <Button>Adicionar ao carrinho</Button>
        </Actions>

        <Benefits>
          <li>
            <ShieldIcon />
            <p>Caso não receba o produto, <strong>devolvemos seu dinheiro.</strong></p>
          </li>
        </Benefits>
    </Container>


  );
};

export default ProductAction;
