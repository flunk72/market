import React from "react";
import { H2, H3 } from "../../../../components/HTag/HTag.styled";
import {
  AboutWrapper,
  Taste,
  Images,
  Room,
  Hole,
  Kitchen,
  Bedroom,
} from "./About.styled";
import room from "../../../../helpers/images/room.jpg";
import hole from "../../../../helpers/images/hole.jpg";
import kitchen from "../../../../helpers/images/kitchen.jpg";
import bedroom from "../../../../helpers/images/bedroom.jpg";

const About = () => {
  return (
    <AboutWrapper>
      <H2 place>
        Наша цель — воплотить в жизнь ваши мечты об интерьере. Обустраивайте
        свой дом. Создавайте обстановку, которая делает будни ярче!
      </H2>
      <Taste>
        <H3 place>Обстановка со вкусом</H3>
        Мы делаем дизайнерскую мебель для реальных квартир. Мы ценим
        индивидуальный стиль и хотим помочь оформить дом так, чтобы он отражал
        ваш вкус в интерьере. Наши клиенты — сотни тысяч людей, готовых делиться
        своими решениями: планировкой, выбранной мебелью, вариантами стилизации.
        Ищите идеи и создавайте окружающую обстановку, которая будет вдохновлять
        каждый день!
      </Taste>
      <Images>
        <Room src={room} alt="" />
        <Hole src={hole} alt="" />
        <Kitchen src={kitchen} alt="" />
        <Bedroom src={bedroom} alt="" />
      </Images>
    </AboutWrapper>
  );
};

export default About;
