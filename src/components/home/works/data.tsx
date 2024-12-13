import image1 from '@/assets/img/card1.jpg';
import image2 from '@/assets/img/card2.jpg';
import image3 from '@/assets/img/news3.png';
import image4 from '@/assets/img/news4.png';
import image5 from '@/assets/img/news5.png';
import image6 from '@/assets/img/card6.jpg';






export const useDataWork = () => {

  const data_works = [
    {
      image: image1,
      title: "Инкубационно-мальковый цех, озеро Сон-Куль.",
      desc: "Инкубационно-мальковый цех.",
      product: "До 10 000 000 сиговых на аппаратах «Вейса» и 800 000 личинок на аппаратах «Аткенс» за один заклад",
      location: "Озеро Сон-Куль."
    },
    {
      image: image2,
      title: "Отель Плаза.",
      desc: "Купальный скиммерный бассейн размером 5 x 14, глубиной 1,5 м.",
      product: "112 м³.",
      location: "г. Бишкек."
    },
    {
      image: image3,
      title: "Купальный коммерческий бассейн.",
      desc: "Купальный коммерческий бассейн размером 10 × 5 × 1,6 м.",
      location: "г. Кара-Балта."
    },
    {
      image: image4,
      title: "Ёмкость для питьевой воды для гипермаркета «Мегаполис».",
      desc: "Накопительная ёмкость для питьевой воды из пищевого полипропилена толщиной 10 мм.",
      product: "50 м³.",
      location: "г. Ош."
    },
    {
      image: image5,
      title: "Очистное сооружение для коттеджного городка.",
      desc: "Биологическое очистное сооружение — система для очистки сточных вод, рассчитанная на 400 человек.",
      product: "80 м³ в сутки.",
      location: "Область Иссык-Куль, с. Корумду."
    },
    {
      image: image6,
      title: "Очистное сооружение производительностью 12 м³ в сутки.",
      desc: "Государственное предприятие «Тонский рыборазводный завод».",
      product: "12 м³.",
      location: "Область Иссык-Куль, Тонский район."
    }
    
  ]
  return  {data_works}
};
 