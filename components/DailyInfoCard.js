import React from "react";
import style  from "../style/dailyInfoCard.module.css";
import data from "../Data/dailyCard.json";

export default function dailyInfoCard(){

	console.log(data)
	return (

		<div className='dailyCard'>	
			{data.map((item) => (

				<div>
					<span>{item.time}</span>
					<div>
						<span>{item.title}</span>
						<p>{item.description}</p>
					</div>
				</div>

			))}
		</div>	

	)

}