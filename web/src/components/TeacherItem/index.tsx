import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
	return (
		<article className="teacher-item">
			<header>
				<img
					src="https://avatars2.githubusercontent.com/u/40203788?s=460&u=bb67357c370e74a78cb43239833649004c9212d6&v=4"
					alt="Marco Amorim"
				/>
				<div>
					<strong>Marco Amorim</strong>
					<span>Quimica</span>
				</div>
			</header>

			<p>
				Entusiasta das melhores tecnologias de química avançada.
				<br /> <br />
				Apaixonado por explodir coisas em laboratório e por mudar a vida das
				pessoas através de experiências. Mais de 200.000 pessoas já passaram por
				uma das minhas explosões.
			</p>

			<footer>
				<p>
					Preço/hora
					<strong>R$ 80.00</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="WhatsApp" />
					Entrar em contato
				</button>
			</footer>
		</article>
	);
};

export default TeacherItem;
