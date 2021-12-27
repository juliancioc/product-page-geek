import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 94%;
  max-width: 1320px;
  margin: 90px auto;
`

export const Title = styled.div`
  background-color: #0b4c6f;
  opacity: 0.8;
  color: #fff;
  padding: 16px;
  border-radius: 4px;
  text-align: center;
`

export const WrapperReview = styled.div`
  max-width: 320px;
  margin: 8px;

  p {
    font-style: italic;
    margin: 6px 0;
    margin: 14px 0;
  }

  img {
    margin: 8px 0;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`
