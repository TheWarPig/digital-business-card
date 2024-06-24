import face from '../assets/face.png'
import mailIcon from '../assets/mail-icon.png'
import linkedinIcon from '../assets/linkedin-icon.png'

export default function Info(){
    return (
        <header>
            <img src={face} />
            <div className="info">
                <h1>Laura Smith</h1>
                <h3>Frontend Developer</h3>
                <h4>laurasmith.website</h4>
                <div className="btns">
                    <button className='email'>
                        <img src={mailIcon} />
                        Email</button>
                    <button className='linkedin'>
                        <img src={linkedinIcon} />
                        LinkedIn
                        </button>
                </div>
            </div>
        </header>
    )
}