import styled from 'styled-components'

export const Wrapper = styled.main`
  button {
    width: 320px;
    border: none;
    background-color: #0b4c6f;
    padding: 12px;
    color: #fff;
    border-radius: 12px;
    font-size: 20px;
    cursor: pointer;
    transition: 0.2s ease-in-out 0s;

    &:hover {
      transform: scale(1.01);
    }

    @media (max-width: 768px) {
      margin: 0;
      width: 300px;
    }
  }
`
