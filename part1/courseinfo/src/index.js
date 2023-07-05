import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
)
}

const Content = (props) => {
  let [part0, part1, part2] = props.parts
  return (
    <div>
      <p>{part0.name} has {part0.exercises} exercises</p>
      <p>{part1.name} has {part1.exercises} exercises</p>
      <p>{part2.name} has {part2.exercises} exercises</p>
    </div>
  )
}

const Total = (props) => {
  let total = props.parts
    .map((a) => a.exercises)
    .reduce((a, b) => a + b)

  return (
    <div>
      Total exercises: {total}
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))