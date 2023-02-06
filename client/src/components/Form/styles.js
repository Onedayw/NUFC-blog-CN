import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 100%;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 2rem;

    background: ${props => props.theme['base-post']};
    border-radius: 10px;
    border: 2px solid transparent;

    overflow: hidden;

    transition: border 0.2s;

    cursor: pointer;
    input {
        display: flex;
    }

    div {
        display: flex;

        FileBase {
            display: flex;
        }

        button {
            display: flex;
        }
    }
`;
