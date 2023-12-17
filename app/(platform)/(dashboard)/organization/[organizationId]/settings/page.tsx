import { OrganizationProfile } from "@clerk/nextjs"
import { dark } from "@clerk/themes"

const SettingsPage = () => {
  return (
    <div>
        <OrganizationProfile 
            appearance={{
                baseTheme: dark,
                elements:{
                    rootBox:{
                        boxShadow: "none",
                        width: "100%"
                    },
                    card:{
                        border: "1px solid #e5e5e5",
                        width: "100%"
                    }
                }
            }}
        />
    </div>
  )
}

export default SettingsPage