
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Row = styled.div`
    display: flex;
    justify-content: flex-end;
    aling-items: center;
    padding: 16px 0;

    > a {
        font-size: 14px;
        text-decoration:none;
        color: var(--color-blue);
        padding: 2.5px 0;

        & + a {
            padding-left: 10px;
            border-left:1px solid vat (--color-border);
            margin-left: 10px;
        }
    }
`; 
    
export const Panel = styled.div`
    background: var(--color-white);
    box-shadow: var(--panel-shadow);

    display: grid;
    grid-template-columns: 65fr 35fr;

`; 

export const Column = styled.div`
    &:first-child {
        border-right: 1px solid var(--color-border);
    }
`; 

export const Gallery = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 530px;

    >img {
        height: 70%;
    }
`;

export const Section = styled.div``;

export const Description = styled.div``;


