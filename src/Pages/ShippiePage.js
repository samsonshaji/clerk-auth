import { UserButton, UserProfile } from "@clerk/clerk-react"

const ShippiePage = ({companyName}) => {
  // console.log("HERE IT IS:", companyName); 
  if (companyName === "shippie") {
      
      return (
        <>
        <div>
          <h1>Welcome to Upgraded-Shippie Partnership</h1>
        <UserButton />
        </div>
        </>
      )
      }
    else{
      return (
        <>
        <div>
          <h1>Welcome to Upgraded-Shippie Partnership</h1>
        </div>
        {/* <UserProfile/> */}
        <UserButton/>
        
        </>
      )
    }
} 

export default ShippiePage 