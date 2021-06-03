import React, {useState, useEffect} from "react";
import style from "../style/roomCard.module.css";
import data from "../Data/roomCard.json";

import {ChatDots, BsChatDotsFill, BsFillPersonFill} from 'react-icons/bs';

export default function RoomInfoCard(props){

	return (

		<>
			<h2></h2>
			
			{data.map((item) => (
				<div>
					<div>
						<div className={style.roomCardContainer}>
							<h6>{item.title}</h6>
							<h2>{item.sub_title}</h2>
							<div className={style.roomMembers}>
								<div>
									<img src="/images/user-img.jpg" alt="" />
									<img src="/images/user-img2.jpg" alt="" />
								</div>
								<div>
									{item.members.map((person) => (

										<p>
										 {person.first_name} {person.last_name} <BsChatDotsFill/> 
										</p>

									))}

									<p className='d-flex align-items-center'>
										<span className='mr-2'>1.8</span>
										<BsFillPersonFill />

										<span className='mx-2'></span>
										<span className='mr-2'>5</span><BsChatDotsFill/> 
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}

		</>

	)


}
