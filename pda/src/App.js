import "bulma/css/bulma.css"
import ProfileCards from "./ProfileCards"
import AlexaPng from "./images/alexa.png"
import CortanaPng from "./images/cortana.png"
import SiriPng from "./images/siri.png"

function App(){
    return (
    <div>
        <section className="hero is-primary">
            <div className = "hero-body">
                <p className="title">
                    Personal Digital Assistants
                </p>
            </div>
        </section>
            <div className="container">
                <section className = "section" >
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCards 
                            image = {AlexaPng} 
                            title = "Alexa" 
                            handle = "@alexa99" 
                            description="Alexa is the PDA for Amazon"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCards 
                            image = {CortanaPng} 
                            title = "Cortana" 
                            handle = "@cortana99" 
                            description="Cortana is the PDA for Windows"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCards 
                            image = {SiriPng} 
                            title = "Siri" 
                            handle = "@siri99" 
                            description="Siri is the PDA for Apple"/>      
                        </div>
                    </div>
                </section>
            </div>
    </div>
    )
}

export default App;