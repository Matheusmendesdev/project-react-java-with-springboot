import { useState } from 'react';
import './App.css'
import { useFoodData } from './hooks/useFoodData'
import { CreateModal } from './components/create-modal/create-modal';
import { Card } from './components/card/card';


function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlerOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  
  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(foodData => 
        <Card
          title={foodData.title} 
          price={foodData.price} 
          image={foodData.image}
        />)}
      </div>
      {isModalOpen && <CreateModal closeModal={handlerOpenModal}/>}
      <button onClick={handlerOpenModal}>novo</button>
    </div>
  )
}

export default App
