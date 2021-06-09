import React from "react";
import style from "../style/profile.module.css";
import explorestyle from "../style/explore.module.css";
import {  Link } from "react-router-dom";

import {BsAt, BsUpload, BsPlus} from "react-icons/bs";
import {AiOutlineSetting, AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai";


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

			<img src="/images/user-img.jpg" className={style.profile_image}/>
			<h4>Rafeh Qazzi</h4>
			<p>@cleverqazi</p>

			<div className={style.follow}>
				<p>
					<span>0</span> followers
				</p>
				<p>
					<span>51</span> following
				</p>

			</div>
		
				<button>Add a bio</button>
			

				<div className="mb-4">
					<button className="mb-0">
						<AiOutlineTwitter /> Add Twitter
					</button>

					<button className="mb-0">
						<AiOutlineInstagram /> Add Instagram
					</button>
				</div>

			<div className={style.nominated}>
				<img src="/images/user-img.jpg" />
				<div>
					<p>Joined 14-July-2020</p>
					<p>
					 Nominated by <span>Anton Alarcon</span>
					</p>
				</div>
			</div>
			<p>Member of</p>
			<button className={style.addMemberBtn}>
				<BsPlus />
			</button>

		</div>
		</>
	)
}
