import './Home.css'
import myImage from '../../assets/daniel.png'

export default function Home () {
  return (<>
            <div className='home-container'>
              <img src={myImage} />
              <p>Hi, I am Daniel, a software developer. I mostly work with dotnet core but lately I have been working on becoming full stack.</p>
            </div>
        </>)
}
