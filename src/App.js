import { UserButton, UserProfile } from "@clerk/clerk-react";
import CreateOrganization from "./createOrganizationPage";

function App() {
  return (
    <>
   {/* <a href='/sign-in'>Sign In</a> */}
   <h1 className="text-7xl text-center text-blue-400">Welcome to Upgraded!</h1>
   <h1 className="text-7xl text-center text-blue-400">Find your quick Savings report here</h1>
   <UserButton />
   {/* <UserProfile/> */}
   <CreateOrganization />
   </>
  );
}

export default App;