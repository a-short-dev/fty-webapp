'use client';

import Image from 'next/image';
import React from 'react';

interface SettingsProps {}
const SettingsClient = () => {
	return (
		<div className="relative h-full pb-20 overflow-y-auto">
			<div className="mt-5 bg-white flex flex-col  py-5 px-2 rounded-md ">
				<h5>Notification Settings</h5>
				<div>
					<div className="flex p-2 justify-between">
						<p>Email Alerts</p>
						<div>switch</div>
					</div>
					<div className="border m-1" />
					<div className="flex p-2 justify-between">
						<p>SMS Alerts</p>
					</div>
					<div className="border m-1" />
					<div className="flex p-2 justify-between">
						<p>Loan Alerts</p>
					</div>
					<div className="border m-1" />
					<div className="flex p-2 justify-between">
						<p>Login Alerts</p>
					</div>
				</div>
			</div>

			<div className="mt-5 bg-white flex flex-col  py-5 px-2 rounded-md ">
				<h5>Security Settings</h5>
				<div>
					<div className="flex p-2 justify-between">
						<p>2FA</p>
					</div>
					<div className="border m-1" />
					<div className="flex p-2 justify-between">
						<p>Auto Logout</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SettingsClient;
