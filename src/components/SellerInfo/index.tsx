import React from 'react';
import SellerInfo from '../SellerInfo';

import { 
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationRow,
  ReputationThermomete,
  SupportIcon,
  ClockIcon,
  More,
 } from '../SellerInfo/styles';

const Sellerinfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações sobre o vendedor</Title>

      <LocationCard>
        <LocationIcon/>

        <div>
          <p>Localização</p>
          <strong>Belém PA</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermomete>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThermomete>

        <ReputationRow>
          <div>
            <strong>1000</strong>
            <span>Vendas nos útimos 3 meses</span>
          </div>

          <div>
            <strong><SupportIcon /></strong>
            <span>Otimo atendimento</span>
          </div>

          <div>
            <strong><ClockIcon /></strong>
            <span>Vendas nos últimos 3 meses.</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">Ver mais dados do vendedor.</More>

    </Container>
  );
};

export default Sellerinfo;
