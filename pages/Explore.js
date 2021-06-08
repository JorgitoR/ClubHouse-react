import React from "react";
import style from "../style/explore.module.css";
import { DownOutlined, FiredOutLines } from "@ant-design/icons";
import data from "../Data/Explore.json";

import {Input} from 'antd';

export default function Explore(){
	const {people, conversation} = data;

	return (

		<div className={style.exploreContainer}>

			<div className={style.header}>
				<Input style={{
					backgroundColor:"#f4f4f4",
					borderRadius:"0.8em",

				}}></Input>
			</div>

			<h6>People To Follow</h6>
			<div className={style.peopleContainer}>
				{people.map((item) => (
					<div>
						<div className="d-flex align-items-center">
							<img src="/images/user-img.jpg" />
							<div className="ml-2">
								<h5>{item.title}</h5>
								<p>{item.description}</p>
							</div>
						</div>

						<button>Seguir</button>
					</div>
				))}

				<button className={style.ShowMore}>
					Show more people <DownOutlined />
				</button>
			</div>


				<h6>FIND CONVERSATIONS ABOUT ...</h6>
				<div className="row mx-0">
					{conversation.map((item) => (
						<div className="col-6 px-2 mb-3">
							<div className={style.conversationCard}>
								<h6>
									{item.title}
								</h6>
								<p>{item.discription}</p>
							</div>
						</div>
					))}
				</div>
		</div>

	);
}