import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
	ClerkProvider,
	CreateOrganization,
	Protect,
	RedirectToSignIn,
	SignIn,
	SignUp,
	SignedIn,
	SignedOut,
	useAuth,
} from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import OkosPage from "./Pages/OkosPage.js";
import AuthPage from "./AuthPage";
import companyUsersMap from "./companyMap";
import ShippiePage from "./Pages/ShippiePage.js";
import LandingPage from "./Pages/LandingPage.js";
import LandingPageTwo from "./Pages/LandingPageTwo.js";
import ReportsPage from "./Pages/ReportsPage.js";
import Example from "./form.js";

function findCompanyNameByUserId(userId) {
	for (const [companyName, userIds] of Object.entries(companyUsersMap)) {
		if (userIds.includes(userId)) {
			return companyName;
		}
	}
	return undefined;
}

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const root = ReactDOM.createRoot(document.getElementById("root"));

const ClerkWithRoutes = () => {
	const [companyName, setCompanyName] = useState("");
	const navigate = useNavigate();
	useEffect(() => {
		// After companyName is set, navigate to the companyName page
		if (companyName) {
			navigate(`/${companyName}`);
		}
	}, [companyName, navigate]);

	return (
		<ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
			<LogUserId setCompanyName={setCompanyName} />
			<Routes>
				<Route path="/" element={<LandingPageTwo />} />
				<Route path="/tailwind" element={<AuthPage />} />
				<Route path="/sign-in/*" element={<SignIn redirectUrl={`/${companyName}`} routing="path" path="/sign-in" />} />
				<Route
					path="/sign-up/*"
					element={<SignUp redirectUrl={`/${companyName}`} afterSignUpUrl={`/example`} routing="path" path="/sign-up" />}
				/>
				<Route path="/example/*" element={<Example />} />

				<Route path="/createOrganization/*" element={<CreateOrganization afterCreateOrganizationUrl={`/reports`} />} />
				<Route path="/reports/*" element={<ReportsPage />} />
				<Route
					path="/okos"
					element={
						<>
							<SignedIn>
								<OkosPage setCompanyName={setCompanyName} />
							</SignedIn>
							<SignedOut>
								<RedirectToSignIn />
							</SignedOut>
						</>
					}
				/>
				<Route
					path="/shippie"
					element={
						<>
							<SignedIn>
								<ShippiePage setCompanyName={setCompanyName} />
							</SignedIn>
							<SignedOut>
								<RedirectToSignIn />
							</SignedOut>
						</>
					}
				/>
			</Routes>
		</ClerkProvider>
	);
};

function LogUserId({ setCompanyName }) {
	const { isLoaded, userId, orgId } = useAuth();

	React.useEffect(() => {
		if (isLoaded) {
			console.log("User ID:", userId);
			const companyName = findCompanyNameByUserId(userId);
			// console.log("Company ID from clerk:", orgId);
			console.log("Company Name:", companyName);
			if (companyName) {
				setCompanyName(companyName);
			}
		}
	}, [isLoaded, userId, setCompanyName]);

	return null;
}

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ClerkWithRoutes />
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
