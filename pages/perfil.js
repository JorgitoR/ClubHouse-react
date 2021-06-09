import React from "react";
import style from "../style/profile.module.css";
import explorestyle from "../style/explore.module.css";
import {  Link } from "react-router-dom";

import {BsAt, BsUpload} from "react-icons/bs";
import {AiOutlineSetting} from "react-icons/ai";


export default function perfil(){

	return (
		<>
		<div className={style.profileContainer}>
			<div className={explorestyle.header}>
				<div className={`${explorestyle.head} text-right mb-0`}>
					<Link to='/home'>
						<img src="/images/arrow.png" className={explorestyle.arrow_icon} />
					</Link>

					<div className={style.actionBtn}>
						<BsAt />
						<BsUpload />
						<AiOutlineSetting />
					</div>

				</div>
			</div>
		</div>
		</>
	)
}
