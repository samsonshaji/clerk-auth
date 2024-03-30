import React, { useState, useEffect } from "react";
import LogInModal from "../Modals/LogInModal.js";
import SignUpModal from "../Modals/SignUpModal.js";

function LandingPageTwo() {

	// TODO
	// use the useAuth hook to see if they're already logged in
	// if they are, redirect them to /report/${companyname}

	const [openLogInModal, setOpenLogInModal] = useState(false);
	const [openSignUpModal, setOpenSignUpModal] = useState(false);

	return (
		<div>
		<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xl w-full">
			<div className="p-3">
				<div className="m-2 p-1 text-center">
					<button onClick = {() => setOpenLogInModal(prev => !prev)} className="rounded-s-md rounded-e-md bg-gray-900 p-3 bg-blue text-md font-semibold text-white shadow-md hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full transition-all duration-100">
						Login
					</button>
				</div>

				<div className="m-2 p-1 text-center">
					<button onClick = {() => setOpenSignUpModal(prev => !prev)} className="rounded-s-md rounded-e-md bg-gray-900 p-3 text-md font-semibold text-white shadow-md hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full transition-all duration-100">
						Create an Account
					</button>
				</div>
			</div>
		</div>
		<LogInModal open = {openLogInModal} setOpen = {setOpenLogInModal}/>
		<SignUpModal open = {openSignUpModal} setOpen = {setOpenSignUpModal} />
		</div>
	);
}

export default LandingPageTwo;
