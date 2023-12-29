import React, { useEffect } from "react"
import useRestrictTabSwitch from "../../../hooks/useRestrickTabSwitch";
import { useLocation } from "react-router-dom";
import WarningImage from "../../../assets/images/warning.png";

const RestrickTabSwitch = () => {
    const location = useLocation();
    const restrictTabSwitch = useRestrictTabSwitch();


    useEffect(() => {

        const handleVisibilityChange = () => {
            if (document.hidden) {
                restrictTabSwitch.OnOpen()

                if (restrictTabSwitch.warningCount < 3) {
                    
                    restrictTabSwitch.setWarningCount();

                }
            }
            // document.title = document.visibilityState;
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        // cleanup event listner
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        }

    }, [restrictTabSwitch])

    // useEffect(() => {

    //     const handleVisibilityChangeWhenRouteChange = () => {
    //         if (!document.hidden) {
    //             restrictTabSwitch.OnOpen()
    //             // setWarningVisible(true);

    //             if (restrictTabSwitch.warningCount < 3) {
    //                 // setWarningCount((count) => count + 1);
    //                 restrictTabSwitch.setWarningCount();

    //             }
    //         }
    //     }
    //     document.addEventListener("focusout", handleVisibilityChangeWhenRouteChange);
        

    //     return () => {
    //         document.removeEventListener("focusout", handleVisibilityChangeWhenRouteChange);
    //     }

    // }, [location, restrictTabSwitch])

    // console.log("restrictTabSwitch >>", restrictTabSwitch);

    const bodyContent = (type, message) => {

        return (
            <div className={`${type === "warning" ? 'bg-yellow-400' : 'bg-rose-500'} text-white p-4 border-l-4 border-black shadow-sm border-opacity-25 mt-5 font-normal text-lg tracking-wide rounded-md`}>
                <img src={WarningImage} width={"h-5"} height={"h-5"} className="mr-2 w-9 h-9 inline drop-shadow-xl" alt="WarningImage" /> 
                {message}
            </div>
        )
    }

    if (restrictTabSwitch.warningVisible && restrictTabSwitch.warningCount < 3) {

        return bodyContent("warning", `You Switched Tabs. You Switched ${restrictTabSwitch.warningCount} times.`)

    } else if (restrictTabSwitch.warningCount >= 3) {
        return bodyContent("bigWarning", `You Have Switched Too Many Times`)

    } else {
        return null;
    }

}

export default RestrickTabSwitch