import { SignInButton, UserButton } from "@clerk/clerk-react"

const OkosPage = ({companyName}) => { 
  console.log("SAmson checking:", companyName);
  if (companyName === "okos") {
    return (
      <div>
        <h1>Welcome to Upgraded-Okos Partnership</h1>
        <UserButton />
        <SignInButton/>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>Sorry, you are not authorized to view this page</h1>
        <UserButton />
        <SignInButton/>
      </div>
    )
  }
}

export default OkosPage 