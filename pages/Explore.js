import React from "react";
import style from "../style/explore.module.css";
import { DownOutlined, FiredOutLines } from "@ant-design/icons";
import data from "../Data/Explore.json";

export default function Explore(){
	const {people, conversation} = data;

	return (

		<div className={style.exploreContainer}>
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
		</div>

	);
}