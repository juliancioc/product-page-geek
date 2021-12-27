import * as S from './styles'

const ProductDescription = () => {
  return (
    <S.Wrapper>
      <S.Title>
        <h4>Descrição</h4>
      </S.Title>
      <p className="product-name">
        Uzumaki Naruto - Modo Sábio Com Fukasaku e Shima
      </p>
      <S.Section>
        <S.Details>
          <p>Material do produto: PVC</p>
          <p>Tamanho: 20cm</p>
          <p>Breve resumo sobre o personagem:</p>
          <p>
            Naruto Uzumaki é um shinobi de Konohagakure, também sendo a
            reencarnação atual de Asura e o protagonista homônimo da franquia
            Naruto.
          </p>
          <p>
            Ele se tornou o jinchūriki de Kurama no dia de seu nascimento, um
            destino que o levou a ser condenado ao ostracismo e ser
            negligenciado por toda a aldeia durante toda a sua infância.
          </p>
        </S.Details>

        <img
          src="https://ae01.alicdn.com/kf/Hf8e60362878b42818ca97fa5b3ac63aaJ.jpg"
          alt="Boneco Naruto"
        />
      </S.Section>
      <S.Section>
        <img
          src="https://ae01.alicdn.com/kf/H9c9acdb6d21d41258f0e8ef0b40b77874.jpg"
          alt="Boneco Naruto"
        />
        <img
          src="https://ae01.alicdn.com/kf/H0216dcfe27d145519566936d5005f71ee.jpg"
          alt="Boneco Naruto"
        />
        <img
          src="https://ae01.alicdn.com/kf/Hcbbfa381076f4b73a6b46550346a4db2R.jpg"
          alt="Boneco Naruto"
        />

        <S.Details></S.Details>
      </S.Section>
    </S.Wrapper>
  )
}

export default ProductDescription
