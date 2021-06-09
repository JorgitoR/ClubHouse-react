import React from "react";
import style from "../style/profile.module.css";
import {  Link } from "react-router-dom";

export default function Profile(){

	return (
		<>
			<div className={style.profileContainer}>
				<div className{exploreStyle.header}>
					<div className={`${exploreStyle.header} text-right mb-0 `}>	
					  <Link to='/home'>
					  	<img src="/images/arrow.png" className={exploreStyle.arrow_icon} />
					  </Link> 

					</div>
				</div>
			</div>
		</>
	)

}