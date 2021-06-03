import React, {useState, useEffect} from "react";
import style from "../style/roomCard.module.css";
import data from "../Data/roomCard.json";

export default function RoomInfoCard(props){

	return (

		<>
			<h2></h2>
			
			{data.map((item) => (
				<div>
					<div>
						<div className={style.roomCardContainer}>
							<h6>{item.title}</h6>
							<h2>{item.sub_title}</h2>
						</div>
					</div>
				</div>
			))}

		</>

	)


}
