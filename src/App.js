import './App.css';
import Github from './img/IconGithub.png'
import Logo from './img/logo.png'
import Slack from './img/slackslack.png'
import {FiCamera} from 'react-icons/fi'
import { RiShareForwardLine } from 'react-icons/ri'
import Profile from './img/Profile.jpg'
 


function App() {

  
  const links = [{
    id: "twitter",
    href: 'https://twitter.com/_JexXxika',
    title : 'Twitter Link'
  },
    {
     id:'btn_zuri',
      href: 'http://books.zuri.team',
      title:'Zuri Team'
    },
    {
    id:'book',
      href: 'https://training.zuri.team/',
     title:'Zuri Books'
    },
  {href:'https://books.zuri.team/python-for-beginners?ref_id=<O>',
      id: 'book_phyton',
      title: 'Phyton Books'
    },
    {
      href:'https://background.zuri.team',
            id:"pitch",
    title:'Background Check for coders'
    },
    {
      href:'https://books.zuri.team/design-rules',
             id:"book_design",
    title:'Design Books'
  },
  ]
  // using setState for the modal
  return (
    <>
      <header>
        <div className="shareimg">
          <div className='img'>
            <FiCamera className='camera'/>
            <img src={Profile} alt="Jessica" ></img>
          </div>
          
          <RiShareForwardLine title='Share link' className='share'/>
        </div>
        <h1 id='twitter'>JexXxika</h1>
      </header>
      
      <section>
        <ul>
          {links.map(link => <li><a 
            key={link.id}
            id={link.id}
            href={link.href}
            target='_blank'
            rel="noreferrer">{ link.title}</a></li>)}
        </ul>

        <div className='icons'>
        <img src={ Github} alt='github icon' />
        <img src={Slack } alt='slack icon' />
        </div>
      </section>
      <footer>
        <h1>Zuri <span>.</span> Internship</h1>
        <h3>HNG Internship 9 Frontend Task</h3>
        <img src={Logo } alt='ingressive for good logo' />
      </footer>
    </>
  );
}

export default App;
