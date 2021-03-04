
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
        font-size: 0.9rem;
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
    grid-template-columns: 67fr 33fr;

`; 

export const Column = styled.div`
    &:first-child {
        border-right: 0.1rem solid var(--color-border);
    }
`; 

export const Gallery = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 22rem;

    >img {
        height: 70%;
    }
`;

export const Section = styled.div`
    border-top: 1px solid var(--color-border);
    padding: 2rem 1rem;

    display: flex;
    flex-direction: column;

    > h4 {
        font-size: 1.1rem;
        margin-bottom: 1rem;
    }
    
    > div {
        display: flex;
        flex-direction: column;

        > span + span {
            margin-top: 2rem;
        }
        .title {
            font-size: 6rem;
        }
        .description {
            margin-top: 0.7rem;
            font-size: 1rem;
            color: var(--color-gray);
            line-height: 1.2rem;
        }
    }
    > a {
        margin-top: 1rem;
        font-size: 1rem;
        font-weight: 700;
        color: var(--color-blue);
        text-decoration: none;
    }        
`;

export const Description = styled.div`
       border-top: 1rem solid var(--color-borde);
       padding: 1rem 2rem;

       > h2 {
           font-size: 1.7rem;
           margin-bottom: 2rem;
       }
       > p {
           font-size: 0.9rem;
           color: var(--color-gray);
           line-height: 27px;
       }
`;


