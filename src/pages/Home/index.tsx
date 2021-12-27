import { useEffect, useState } from 'react'
import cep from 'cep-promise'
import { BiMap } from 'react-icons/bi'

import ButtonBuy from '../../components/ButtonBuy'
import ProductDescription from '../../components/ProductDescription'
import Review from '../../components/Review'
import Stars from '../../components/Stars'

import * as S from './styles'

type Address = {
  city: string
  neighborhood: string
  state: string
  street: string
}

const Home = () => {
  const [address, setAddress] = useState<Address>()
  const [dayDelivery, setDayDelivery] = useState(0)
  const [monthDelivery, setMonthDelivery] = useState('')
  const [yearDelivery, setYearDelivery] = useState(0)

  useEffect(() => {
    let date = new Date()
    let dateDelivery = new Date()

    const newDate = dateDelivery.setDate(date.getDate() + 15)
    setDayDelivery(new Date(newDate).getDate())
    setMonthDelivery(
      new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(newDate)
    )

    setYearDelivery(new Date(newDate).getFullYear())
  }, [])

  const hanleFindAddress = async (cepInput: any) => {
    const cepReceived = cepInput.target.value

    if (cepReceived.length >= 8) {
      try {
        await cep(cepReceived).then((res: Address) => setAddress(res))
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <S.Container>
      <S.Wrapper>
        <img
          src="https://ae01.alicdn.com/kf/H24ad1238d0e34a0c9f8c8dd5979a35c7J/Uzumaki-naruto-naruto-sage-a-o-anime-figuras-pvc-brinquedos-shippuden-coletor-estatueta-uchiha-sasuke-brinquedos.jpg_Q90.jpg_.webp"
          alt="Figure Action Uzomaki Naruto"
        />
        <S.WrapperInfo>
          <S.Title>Uzumaki Naruto - Modo Sábio Com Fukasaku e Shima</S.Title>
          <S.Review>
            <Stars />
            <span>4.8</span>
            <span>22 avaliações</span>
          </S.Review>
          <p className="product-size">Tamanho: 20cm</p>

          <S.Price>R$ 319,00</S.Price>
          <ButtonBuy />

          <input
            onChange={hanleFindAddress}
            placeholder="CEP"
            maxLength={8}
            type="text"
            className="cep"
          />
          {address && (
            <S.WrapperAddress>
              <S.Address>
                <div className="wrapper-street">
                  <BiMap color="#0b4c6f" size={18} />
                  <p>{address.street}</p>
                </div>

                <p>{address.neighborhood}</p>
                <p>
                  {address.city}/{address.state}
                </p>
              </S.Address>

              <S.Delivery>
                <p>
                  Receba até {dayDelivery} de {monthDelivery} de {yearDelivery}
                </p>
                <p className="freight">Frete Grátis</p>
              </S.Delivery>
            </S.WrapperAddress>
          )}
        </S.WrapperInfo>
      </S.Wrapper>
      <ProductDescription />
      <Review />
    </S.Container>
  )
}

export default Home
