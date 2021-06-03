import React from "react";
import Header from "../components/header";
import DayliInfoCard from "../components/DailyInfoCard";
import style from "../style/home.module.css";

export default function Home(){


	return (
		<>
		<Header/>

		<div className={style.home_container}>
			<DayliInfoCard />
		</div>
		</>
	);	

}