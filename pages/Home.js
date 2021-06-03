import React from "react";
import Header from "../components/header";
import DayliInfoCard from "../components/DailyInfoCard";
import RoomInfo from "../components/RoomInfo";
import style from "../style/home.module.css";

import { AiOutlinePlus } from 'react-icons/ai';
import { BsGrid3x3Gap } from 'react-icons/bs';

export default function Home(){


	return (
		<>
		<Header/>

		<div className={style.home_container}>
			<DayliInfoCard />
			<RoomInfo />
		</div>
		</>
	);	

}