import React, { useState } from "react";
import style from "../../style/roomDetail.module.css";
import { AiOutlineFile } from "react-icons/ai";
import { BsMicMuteFill } from "react-icons/bs";

export default function NewRoom(props){

	const [micMuteVisible, setMicMuteVisible] = useState(false);
	const card = props.cardDetail;

	return(
		<>
			<div className={style.roomDetailContainer}>
				<div className={style.head}>
					<div className={"d-flex align-items-center"}>
					 <a href="#" onClick={() => {props.setSheetVisible(false)}}>
					 	<img src="/images/arrow.png" alt="" className={style.arrow_icon} />
					 </a>
					 <span>
					  Hallway
					 </span>
					</div>

					<div>
  						<AiOutlineFile />
  						<img src="/images/user-img.jpg" alt="" className={style.profile_img} />
					</div>
				</div>
			</div>
		</>
	);

}