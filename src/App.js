import React, {useState} from 'react'
import {MainGoalsContainer} from './Components/Main/MainGoalsContainer/MainGoalsContainer'
import {HashRouter as Router} from 'react-router-dom'

const App = () => {

  const [countOfActiveGoals,setCountOfActiveGoals] = useState(0)
  const [countOfFinishedGoals,setCountOfFinishedGoals] = useState(0)

  return (
    <div>
      <Router>
        <MainGoalsContainer 
        setCountOfActiveGoals={setCountOfActiveGoals}
        setCountOfFinishedGoals={setCountOfFinishedGoals}/>
      </Router>
    </div>
  );
}

export default App;
