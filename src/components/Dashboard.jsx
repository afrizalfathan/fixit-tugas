import React from "react"
import Ilustration from "../assets/ilustration.svg"

function Dashboard() {
    return (
        <div className="dashboard">
            <img className="dashboard_img" src={Ilustration} />
            <h1>
                Let's Fix Your PC <br />
                Problem!
            </h1>
            <button className="get_started">Get Started</button>
        </div>
    )
}

export default Dashboard
