import React from "react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import style from "../style/bottom.mudule.css";
import StartRoom from "./bottom/StartRoom";


export default function BottomSheet(props){

	return (

		<SwipeableBottomSheet
		open={props.sheetVisible}
		onChange={() => {
			props.setSheetVisible(!props.sheetVisible)
			props.setItemsVisible(true)
		}}

		fullScreen={props.sheetTitle == "room detail" ? true : false}
		>

		<div className={style.BottomSheetContainer}
		style={{backgroundColort:props.sheetTitle ==  "transparent" }}>

			<StartRoom 
				sheetCreateRoom={props.sheetCreateRoom}
				setSheetVisible={(item) => {
					props.setSheetVisible(item);
					props.setItemsVisible(true);
				}}
			/>

		</div>

		</SwipeableBottomSheet>

	)

}