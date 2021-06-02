import React, {useState} from "react";

import { Link } from 'react-router-dom';

export default function PhoneConfirmation(){

	const [value, setValue] = useState();

	return(

		<div className='PhoneConfirmation'>
			<h1>Enter Your Phone</h1>
		</div>

	)
}