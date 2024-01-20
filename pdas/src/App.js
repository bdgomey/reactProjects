import ProfileCards from "./ProfileCards";
import AlexaImage from "./images/alexa.png"
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"
import 'bulma/css/bulma.css'

function App(){
  return(
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
          </div>
          </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCards 
              image = {AlexaImage} 
              title = "Alexa" 
              handle = "@alexa99" 
              description = "Alexa is created by Amazon and helps you buy things"
              />
            </div>
            <div className="column is-4">
              <ProfileCards  
              image = {CortanaImage} 
              title = "Cortana" 
              handle = "@cortana99"
              description = "Cortana was created by Microsoft and helps you with Windows"
              />
            </div>
            <div className="column is-4">
              <ProfileCards 
              image = {SiriImage} 
              title = "Siri" 
              handle = "@siri99" 
              description = "I absolutely hate this one"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App;