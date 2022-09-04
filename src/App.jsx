import Section from './components/Section'
import Button from './components/Button'
import Info from './components/Info'
import Image from './components/Image'
import Footer from './components/Footer'
function App() {


  return (
      <div className="max-w-sm mx-auto bg-card my-6 rounded-xl text-white shadow-xl">
        <Image url="./src/imgs/user.jpg"/>
        <div className='p-8'>
          <Info name="Laura Smith" job="Frontend Developer" email="laurasmith.website"/>
          <Button/>
          <Section title="About" content="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."/>
          <Section title="Interests" content="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."/>
        </div>
        <Footer/>
      </div>
  )
}

export default App
