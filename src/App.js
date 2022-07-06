
import './App.css';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Card } from './components/Card';
import {arr} from './data'

function App() {
  const cards = arr.map(value => {
    return (
      <Card 
      key={value.id}
      {...value}
      />
    )
  })
  return (
    <div>
    <NavBar />
    <Hero />
    <div className='card-container'>
      {cards}
    </div>
    
    </div>
  )
}

export default App;
