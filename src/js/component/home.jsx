import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	return (
		<div>
			<h1>Meet our team</h1>
			<div className="card-body">
				<div className="section 1">
				<h3>Anh Tu Nguyen</h3>
				<p><i>TuNa</i></p>
				<p><b>Software Developer</b></p>
				<img src="https://ca.slack-edge.com/T0BFXMWMV-U06AMPQ9FU3-3821f62a208b-512" />
				<p>Me formé y trabajé en el sector de Economía. Ahora soy un Developer entusiasmada de aprender cosas nuevas y resolver los problemas en el mundo de la programación. Si no me encuentra escribiendo códigos, estoy con mis preciosos hijos o leyendo un libro</p>
				
				</div>
				<div className="section 2">
				<h3>Rocío Martín</h3>
				<p><i>Leela</i></p>
				<p><b>Software Developer</b></p>
				<img src="https://ca.slack-edge.com/T0BFXMWMV-U062WF4TZ8T-9b07fa5d0eec-512" />
				<p>Soy Rocío, tengo 36 años y decidí cambiar de la Educación Social al mundo de la programación para dar un giro a mi vida. Me apasiona la música, el cine, la literatura y la naturaleza</p>
				
				</div>
				<div className="section 3">
				<h3>Melissa Navarro</h3>
				<p><i>Phoenix</i></p>
				<p><b>Software Developer</b></p>
				<img src="https://ca.slack-edge.com/T0BFXMWMV-U067SRV7QCB-51252cac5384-512" />
				<p>El primer día de clases del Bootcamp, con muchos sueños y esperanzas</p>
				
				</div>
				<div className="section 4">
				<h3>Jordi Goixart Ribera</h3>
				<p><i>DevConKai</i></p>
				<p><b>Software Developer</b></p>
				<img src="https://ca.slack-edge.com/T0BFXMWMV-U06DEKBK9GB-aeb71d93d986-512" />
				<p>He sido técnico de diálisis durante la mayor parte de mi vida laboral y después, al ver como cada vez, el mundo de la informática me ha ido gustando más y más. finalmente me decidí a ser Software Developer</p>
				
				</div>
				

			</div>

		</div>
	);
}


export default Home;
