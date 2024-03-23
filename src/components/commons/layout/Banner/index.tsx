import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./Banner.styles";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.Container>
      <Slider {...settings}>
        <div>
          <S.SliderImg src="img/Banner01.png" />
        </div>
        <div>
          <S.SliderImg src="img/Banner02.png" />
        </div>
        <div>
          <S.SliderImg src="img/Banner03.png" />
        </div>
      </Slider>
    </S.Container>
  );
}
