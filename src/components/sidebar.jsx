import {MdLocationPin, MdPhoneInTalk} from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import photo from '../assets/Candidate_photo.jpg';

const SidebarComponent = () => {
    return(
        <div className="sidebar">
            <div className="image-container">
              <img src={photo} style={{width:"100%", height:170}}/>
            </div>
            <div className='sidebar-section'>
              <ul className="lists" style={{listStyle:"none"}}>
                <li><h3>CONTACT</h3>
                  <ul className = "sublists" style={{marginLeft:-28, fontSize:12, listStyle:"none"}}>
                    <li><MdLocationPin/> Mysore, Karnataka, India 570017</li>
                    <li><MdPhoneInTalk/> +91 8277175715</li>
                    <li><BsFillSendFill/> ssdashu11@gmail.com </li>
                  </ul>
                </li>
                <li><h3>JOB TITLE</h3>
                  <ul className = "sublists" style={{marginLeft:-28, fontSize:12, listStyle:"none"}}>
                    <li>Software Developer</li>
                  </ul>
                </li>
                <li><h3>SKILLS</h3>
                  <ul className = "sublists" style={{marginLeft:-16, fontSize:12, listStyleType:"initial"}}>
                    <li>Html</li>
                    <li>Html5</li>
                    <li>Css</li>
                    <li>Bootstrap</li>
                    <li>Javascript</li>
                    <li>Jquery</li>
                    <li>PHP</li>
                    <li>Model-View-Controller (MVC)</li>
                    <li>Core Java</li>
                    <li>MySQL</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>MERN</li>
                  </ul>
                </li>
                <li><h3>LANGUAGES</h3>
                  <ul className = "sublists" style={{marginLeft:-28, fontSize:12, listStyle:"none"}}>
                    <li><b>Kannada:</b> First Language</li>
                    <li style={{display: "flex", justifyContent: "space-between"}}>
                      <b>English:</b><span>C2</span><br/>
                    </li>
                    <li>
                      <div className='level'>
                          <div className='range'></div>
                          <div className='range'></div>
                          <div className='range'></div>
                          <div className='range'></div>
                          <div className='range'></div>
                          <div className='range'></div>
                      </div>
                    </li>
                    Proficient
                  </ul>
                </li>
              </ul>
            </div>
        </div>
    )
}

export default SidebarComponent;