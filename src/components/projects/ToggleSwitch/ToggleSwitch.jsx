import { useState } from "react"
import { IoIosSwitch } from "react-icons/io";
import { FaUserSecret } from "react-icons/fa";
import "./ToggleSwitch.css"

export const ToggleSwitch = () => {
    const [isToggle, setIsToggle] = useState(false);
    console.log(isToggle);
    const handleToggleSwitch = () => {
        setIsToggle(!isToggle);
    }
    const checkIsOn = isToggle ? "ON" : "OFF";
    const checkToggle = isToggle ? "on" : "off";
    return (
        <>
            <h1>Toggle Switch <IoIosSwitch style={{ color: "red" }} /> <FaUserSecret /></h1>
            <div className="toggle-switch" style={{
                backgroundColor: isToggle ? "red" : "#84d10d"
            }} onClick={handleToggleSwitch}>
                <div className={`switch ${checkToggle}`}>
                    <span className="switch-state"> {checkIsOn}</span>
                </div>
            </div >
        </>
    )
}
