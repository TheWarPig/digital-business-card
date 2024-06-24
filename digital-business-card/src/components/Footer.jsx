import twitterLogo from '../assets/twitter-logo.png'
import facebookLogo from '../assets/facebook-logo.png'
import instagramLogo from '../assets/instagram-logo.png'
import githubLogo from '../assets/github-logo.png'

export default function Footer(){
    return (
        <footer>
            <img src={twitterLogo} />
            <img src={facebookLogo} />
            <img src={instagramLogo} />
            <img src={githubLogo} />
        </footer>
    )
}