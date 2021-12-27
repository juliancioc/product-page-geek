import Stars from '../Stars'
import * as S from './styles'

const Review = () => {
  return (
    <S.Wrapper>
      <S.Title>
        <h4>Avaliações</h4>
      </S.Title>
      <S.Container>
        <S.WrapperReview>
          <p>
            Produto condizente com o anúncio. Ótima qualidade, possui detalhes
            no acabamento e cores realistas. Além disso a entrega foi super
            rápida! Recomendo demais!{' '}
          </p>
          <Stars />

          <img
            width="300"
            src="https://ae01.alicdn.com/kf/Ua1550a02602d4dfd8450e37658026b613.jpg"
            alt="review da compra"
          />
        </S.WrapperReview>
        <S.WrapperReview>
          <p>
            Perfeito!!!!um dos melhores produtos comprados, até hoje. Entrega
            rapidíssima. Estou contentíssimo!!!!
          </p>
          <Stars />

          <img
            width="300"
            src="https://ae01.alicdn.com/kf/Udd793496915e489baabbcc50588d19cey.jpg"
            alt="review da compra"
          />
        </S.WrapperReview>
        <S.WrapperReview>
          <p>
            Produto condizente com o anúncio. Ótima qualidade, possui detalhes
            no acabamento e cores realistas. Além disso a entrega foi super
            rápida! Recomendo demais!
          </p>
          <Stars />
          <img
            width="300"
            src="https://ae01.alicdn.com/kf/U6078fb79381c468881ce44b1cf3b0ee0L.jpg"
            alt="review da compra"
          />
        </S.WrapperReview>
      </S.Container>
    </S.Wrapper>
  )
}

export default Review
