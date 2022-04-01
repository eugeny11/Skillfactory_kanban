import React, {useState} from 'react'
import {MainGoalsContainer} from './Components/Main/MainGoalsContainer/MainGoalsContainer'
import {HashRouter as Router} from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

const App = () => {

  const [countOfActiveGoals,setCountOfActiveGoals] = useState(0)
  const [countOfFinishedGoals,setCountOfFinishedGoals] = useState(0)

  return (
    <div>
      <Router>
        <Header />
        <MainGoalsContainer 
        setCountOfActiveGoals={setCountOfActiveGoals}
        setCountOfFinishedGoals={setCountOfFinishedGoals}/>
        <Footer countOfActiveGoals={countOfActiveGoals} countOfFinishedGoals={countOfFinishedGoals}/>
      </Router>
    </div>
  );
}

export default App;
