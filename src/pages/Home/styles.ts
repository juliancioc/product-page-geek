import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1320px;
  width: 100%;
`

export const Wrapper = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  img {
    max-width: 520px;
    width: auto;
    margin: 12px;
  }

  @media (max-width: 768px) {
    img {
      max-width: 318px;
    }
  }
`

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 14px;

  p,
  button {
    margin: 12px;
    font-weight: bold;
  }

  .cep {
    padding: 12px;
    border-radius: 12px;
    border: 1px solid #0b4c6f;
    width: 150px;
    margin: 12px;
    font-size: 16px;
  }

  .product-size {
    font-weight: normal;
  }
`

export const Title = styled.p`
  text-transform: uppercase;
  color: #0b4c6f;
  font-size: 20px;
`

export const Price = styled.p`
  font-size: 28px;
`

export const Review = styled.p`
  display: flex;
  align-items: center;

  span {
    margin: 6px;
    font-size: 14px;
    font-weight: normal;
  }
`

export const Address = styled.div`
  .wrapper-street {
    display: flex;
    align-items: center;

    p {
      margin: 0 6px;
    }
  }

  p {
    font-weight: normal;
    margin: 6px;
  }
`

export const WrapperAddress = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px;
  flex-wrap: wrap;
`

export const Delivery = styled.div`
  p {
    font-weight: normal;
    margin: 6px;
  }

  .freight {
    color: #144552;
    font-weight: bold;
  }
`
