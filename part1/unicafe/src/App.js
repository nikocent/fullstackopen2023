import { useState } from 'react'
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100
  return (
    <div>
      <h1>Statistics</h1>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>All: {total}</li>
        <li>Average: {average}</li>
        <li>Positive: {positive}%</li>
      </ul>
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