import React, {useState, useEffect} from 'react'
import './MainGoalsContainer.css'
import { GoalsMain } from '../Goals/GoalsMain'
import { GoalSeparatePage } from '../GoalSeparatePage/GoalSeparatePage'
import { Route, Switch } from 'react-router-dom'

export const MainContext = React.createContext(null)

export const MainGoalsContainer = ({setCountOfActiveGoals,setCountOfFinishedGoals}) => {

   

   const [GoalsBacklog, setGoalsBacklog] = useState(
    JSON.parse(localStorage.getItem('GoalsBacklog'))
    )

    const [GoalsReady, setGoalsReady] = useState(
        JSON.parse(localStorage.getItem('GoalsReady'))
    )

    const [GoalsProgress, setGoalsProgress] = useState(
        JSON.parse(localStorage.getItem('GoalsProgress'))
    )

    const [GoalsFinished, setGoalsFinished] = useState(
        JSON.parse(localStorage.getItem('GoalsFinished'))
    )

   localStorage.setItem('GoalsBacklog', JSON.stringify(GoalsBacklog))
   localStorage.setItem('GoalsReady', JSON.stringify(GoalsReady))
   localStorage.setItem('GoalsProgress', JSON.stringify(GoalsProgress))
   localStorage.setItem('GoalsFinished',JSON.stringify(GoalsFinished))

   

   const addGoalsBacklog = (goal) => {
       if (GoalsBacklog === null){
        setGoalsBacklog([goal])
       } else {setGoalsBacklog([...GoalsBacklog, goal])}
   }

   const addReadyGoals = (goal) => {
       if (GoalsReady === null) {
          setGoalsReady([GoalsBacklog.find((item) => parseInt(item.id) === parseInt(goal))])
       } else {
           setGoalsReady([...GoalsReady, GoalsBacklog.find((item) => parseInt(item.id) === parseInt(goal))])
       }

       setGoalsBacklog(GoalsBacklog.filter((item) => parseInt(item.id) !== parseInt(goal)))
   }

   const addProgressGoals = (goal) => {
       if (GoalsProgress === null){
           setGoalsProgress([GoalsReady.find((item) => parseInt(item.id) === parseInt(goal))])
       } else {
           setGoalsProgress([...GoalsProgress, GoalsReady.find((item) => parseInt(item.id) === parseInt(goal))])
       }

       setGoalsReady(GoalsReady.filter((item) => parseInt(item.id) !== parseInt(goal)))
   }

   const addFinishedGoals = (goal) => {
       if (GoalsFinished === null){
        setGoalsFinished([GoalsProgress.find((item) => parseInt(item.id) === parseInt(goal))])
       } else {
        setGoalsFinished([...GoalsFinished, GoalsProgress.find((item) => parseInt(item.id) === parseInt(goal))])
       }

       setGoalsProgress(GoalsProgress.filter((item) => parseInt(item.id) !== parseInt(goal)))
   }

   useEffect(() => {
       if (GoalsBacklog){
           setCountOfActiveGoals(GoalsBacklog.length)
       }
   },[GoalsBacklog, setCountOfActiveGoals])

   useEffect(() => {
       if (GoalsFinished){
           setCountOfFinishedGoals(GoalsFinished.length)
       }
   },[GoalsFinished, setCountOfFinishedGoals])

  
   const [totalGoals, setTotalGoals] = useState(GoalsBacklog.concat(GoalsReady, GoalsProgress, GoalsFinished))

   const goalsCompile = (routerProps) => {
       let goalId = parseInt(routerProps.match.params.id)
       let getGoal = GoalsBacklog.concat(GoalsReady, GoalsProgress, GoalsFinished).find((goal) => goal.id === goalId)
       

       return getGoal ? (<GoalSeparatePage goal={getGoal} totalGoals={totalGoals} setTotalGoals={setTotalGoals}  />) : (<p>Задача не найдена</p>)
   }

   

    return(

        <MainContext.Provider value = {{addGoalsBacklog}}>
            <Switch>
                <div className='color-wrap'>
                <div className='main container'>
                    <Route exact path ='/'>
                        <GoalsMain
                            values={{
                            GoalsBacklog,
                            GoalsReady,
                            GoalsProgress,
                            GoalsFinished,
                            addReadyGoals,
                            addProgressGoals,
                            addFinishedGoals
                        }}/>
                    </Route>
                    <Route 
                    path='/goals/:id'
                    render={(routerProps) => goalsCompile(routerProps)} />
                </div>
                </div>
            </Switch>
        </MainContext.Provider>
    )
}