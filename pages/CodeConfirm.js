import React from 'react';
import style from  "../style/phoneConfirm.modulo.css";
import { Link } from 'react-router-dom';


export default function CodeConfirm(){

	return (
		<div className='phoneConfirmContainer'>
			
			<Link exact to='/get_username' className='backBtn'>
				<img src="/images/arrow.png" alt="" />
			</Link>		

			<div className='text-center'>
				<h1 style={{width:"100%", maxWidth:"200px"}}>
					Enter the code we just texted you
				</h1>

				<input 
					type="text"
					style={{
						width:"100%",
						border:"none",
						textAlign: "center",
						outline: "none",
					}}
				/>

				<p className='mt-2'>
					Didn't receive it? <span>Tap to resend</span>
				</p>

			</div>

			<Link exact to='/allow_notification' className='primaryBtn d-flex align-items-center'>
				Siguiente
			</Link>

		</div>
	)

}