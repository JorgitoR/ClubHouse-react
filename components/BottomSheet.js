import React from "react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import style from "../style/bottom.mudule.css";
import StartRoom from "./bottom/StartRoom";
import NewRoom from "./bottom/NewRoom";


export default function BottomSheet(props){

	return (

		<SwipeableBottomSheet
			open={props.sheetVisible}
			onChange={() => {
				props.setSheetVisible(!props.sheetVisible);
				props.setItemsVisible(true);
			}}

			fullScreen={props.sheetTitle === 'room detail' ? true : false} >

		<div className="BottomSheetContainer"
		style={{backgroundColor:props.sheetTitle === 'profile' ? 'transparent' : '' }}>

	

		</div>

		</SwipeableBottomSheet>

	);

}