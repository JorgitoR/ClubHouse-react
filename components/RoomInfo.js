import React, {useState, useEffect} from "react";
import style from "../style/roomCard.module.css";
import data from "../Data/roomCard.json";

export default function RoomInfoCard(props){

	return (

		<>
			<h2></h2>
			
			{data.map((item) => JSON.stringify(item) )}

		</>

	)


}
