import React from "react";
import style from "../style/bienvenido.modulo.css";

export default  function Bienvenido(){

	return (

			<div className='ContenedorBienvenido'>
				<h1 className='h1Bienvenido'>Bienvenido</h1>
				<div className='BienvenidoInfo'>
					<p>
						We're working hard to get clubhouse ready for everyone! while we warp up the finishing
						touches, we're adding people gradually to make sure nothing breaks
					</p>
					<p>
						Anyone can join with an invite from an existing user - or reserve your
						username and we'll text you if yu have a friend on the app who can let you in.
						We are so grateful you're here and can't wait to have join!
					</p>

					<p>
						Paul, Rohan & the clubhouse Team
					</p>
				</div>
			</div>

	);

}
