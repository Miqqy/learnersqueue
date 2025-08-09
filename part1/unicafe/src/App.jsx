import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Stats = (props) => (
  <p>{props.text} {props.typeTotal}</p>
)

const Total = (props) => (
  <p>all {props.total}</p>
)

const Avg = (props) => (
  <p>average {props.avg}</p>
)

const Positive = (props) => (
  <p>positive {props.pos} %</p>
)

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)



const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const avg = total ? (good - bad) / total : 0
  const pos = total ? good / total : 0

  if(total === 0){
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given man cmon</p>
      </div>
    )
  }
  return(
      <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text='good' value={good}/>
          <StatisticLine text='neutral' value={neutral}/>
          <StatisticLine text='bad' value={bad}/>
          <StatisticLine text='total' value={total}/>
          <StatisticLine text='average' value={avg}/>
          <StatisticLine text='positive' value={pos}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => {
    console.log('current val', good)
    setGood(good + 1)
  }

    const setToNeutral = () => {
    console.log('current val', neutral)
    setNeutral(neutral + 1)
  }

    const setToBad = () => {
    console.log('current val', bad)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={setToGood} text='good'/>
      <Button onClick={setToNeutral} text='neutral'/>
      <Button onClick={setToBad} text='bad'/>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App