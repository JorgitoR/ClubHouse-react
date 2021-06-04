import React, { useState } from "react";
import style from "../../style/bottom.mudule.css";
import {FcGlobe} from "react-icons/fc";


export default function StartRoom(props){
	const[room, setRoom] = useState("open")

	return (
		<>
   			
   			<div className={style.switch_line}></div>
   			<div className="text-right">
   				<button className={style.addTopicBtn}>Add a topic</button>
   			</div>
		</>
	)

}