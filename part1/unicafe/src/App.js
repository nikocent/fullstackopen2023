import { useState } from 'react'
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if (total === 0) return <h3>No feedback given</h3>
  const average = (good - bad) / total
  const positive = (good / total) * 100
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text={'Good: '} value={good}/>
      <StatisticLine text={'Neutral: '} value={neutral}/>
      <StatisticLine text={'Bad: '} value={bad}/>
      <StatisticLine text={'All: '} value={total}/>
      <StatisticLine text={'Average: '} value={average}/>
      <StatisticLine text={'Positive: '} value={positive}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>Give feedback!</h1>
      <Button handleClick={() => setGood(good + 1)} text='Good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='Bad'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App