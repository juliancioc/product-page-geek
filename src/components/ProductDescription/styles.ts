import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 94%;
  max-width: 1320px;

  margin: 90px auto;

  .product-name {
    margin: 30px 0;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
`

export const Title = styled.div`
  background-color: #0b4c6f;
  opacity: 0.8;
  color: #fff;
  padding: 16px;
  border-radius: 4px;
  text-align: center;
`

export const Section = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 60px 0;

  p {
    margin: 16px 0;
  }

  img {
    max-width: 420px;
    margin: 8px;
  }

  @media (max-width: 1320px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 768px) {
    img {
      max-width: 318px;
    }
  }
`

export const Details = styled.div`
  margin-right: 12px;
`
