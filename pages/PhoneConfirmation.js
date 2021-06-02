import React, {useState} from "react";

import { Link } from 'react-router-dom';
import style  from "../style/phone.modulo.css";
import PhoneInput from 'react-phone-number-input';

export default function PhoneConfirmation(){

	const [value, setValue] = useState();

	return(

		<div className='PhoneConfirmation'>
			
			<Link exact to='/' className='backBtn'>
				<img src="/images/arrow.png" alt="" />
			</Link>		

			<h1>Enter Your Phone</h1>
			<PhoneInput international defaultCountry='CO' value={value} />
			<p>
				By entering your number, you're agreeing to our
				<span>Terms of service and privacy policy.</span>
				Thanks.
			</p>

			<Link exact to='/code_confirm' className='primaryBtn'>
				Siguiente <img src="/images/Nextarrow.png" alt="" className='ml-1' />
			</Link>	

		</div>

	)
}