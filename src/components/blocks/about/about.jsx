import React from "react";
import "./style.css";
import Title from "../../ui/title/title";
import compressor from "../../../assets/compressor.png";

export default function About() {
	return (
		<section className="about">
			<div className="about-wrapper">
				<div className="text-wrapper">
					<Title style={{width: "100px"}}>Привет! <br/> Я полноценный калькулятор для расчета всех параметров сети сжатого воздуха.</Title>
					<p className="about__text">Выбери нужный тебе расчет и я постараюсь помочь</p>
				</div>
				<img className="about__img" src={compressor} alt="Картинка компрессора" />
			</div>
		</section>
	)
}