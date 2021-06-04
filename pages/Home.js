import React, {useState} from "react";
import Header from "../components/header";
import DayliInfoCard from "../components/DailyInfoCard";
import BottomSheet from "../components/BottomSheet";

import RoomInfo from "../components/RoomInfo";
import style from "../style/home.module.css";

import { AiOutlinePlus } from 'react-icons/ai';
import { BsGrid3X3Gap } from 'react-icons/bs';

import data from "../Data/roomCard.json"

export default function Home(){

	const[itemsVisible, setItemsVisible] = useState(true)
	const[sheetVisible, setSheetVisible] = useState(false)
	const[sheetCreateRoom, setSheetCreateRoom] = useState(false)
	const[loaderVisibility, setLoaderVisibility] = useState(false)
	const[cardId, setCardId] = useState(1)

	return (
		<>
		<Header/>

		<div className={style.home_container}>
			<DayliInfoCard />
			<RoomInfo />
		</div>

		<div className={style.action_btn}>
			<button onClick={() => setSheetVisible(true)}>
				<AiOutlinePlus className="mr-2" />
				Start a room
			</button>
			<button>
				<BsGrid3X3Gap />
			</button>
		</div>

		<BottomSheet
			sheetTitle='start room'
			setSheetVisible={(item) => setSheetVisible(item)}
			sheetVisible = {setSheetVisible}
			cardDetail = {data.find((item) => item.id == cardId)}
			setItemsVisible={(item) => setItemsVisible(item)}
			setSheetCreateRoom={(item) => {
				setLoaderVisibility(true);
				setTimeout(()=> {
					setSheetCreateRoom(item);
					setLoaderVisibility(false)
				}, 1000);
			}}


		/>
		</>
	);	

}