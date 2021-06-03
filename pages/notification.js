import React from "react";
import style from  "../style/phone.modulo.css";
import {Link} from "react-router-dom";

export default function AllowNotification(){

	return (

		<div className="PhoneConfirmation">
			<div className="text-center">
				<h1 className="mb-4">Last, important step</h1>
				<h1 className="mb-3">
					Enable notifications to know when people are talkin
				</h1>

				<div className="notificationContainer">
					<div className="p-3">
						<h3>"Clubhouse would like to send you notifications"</h3>
						<p>
						 Notifications may include alerts, sounds, and icon badges
						</p>
					</div>

					<div className="action_btn">
						<Link exact to="/home">
							Don´t allow
						</Link>
						<Link exact to="/home">
							Allow
						</Link>
					</div>

				</div>
			</div>
		</div>

	)

}