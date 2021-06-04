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
			<div className={style.selectRoom}>
				<button className={room == "open" ? style.active : ""}
				onClick={() => setRoom("open")}
				>
				<div>
					<FcGlobe />
				</div>
				Open
				</button>

				<button className={room == "social" ? style.active : ""}
				onClick={() => setRoom("social")}
				>
				<div>
					<FcGlobe />
				</div>
				social
				</button>

				<button className={room == "closed" ? style.active : ""}
				onClick={() => setRoom("closed")}
				>
				<div>
					<FcGlobe />
				</div>
				closed
				</button>
			</div>

			<p>
				Start a room{" "}
				<span>
					{room == "closed"
					? "for people I choosed"
					: room == "social"
					? "with people I follow"
					: "open to everyone"}
				</span>
			</p>

		</>
	);

}