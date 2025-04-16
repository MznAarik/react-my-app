import { useState } from "react"
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
            <div className="toggle-switch" style={{ backgroundColor: isToggle ? "rgb(153 9 9)" : "#84d10d" }} onClick={handleToggleSwitch}>
                <div className={`switch ${checkToggle}`}>
                    <span className="switch-state"> {checkIsOn}</span>
                </div>
            </div>
        </>
    )
}
