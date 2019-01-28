import React, {useState} from 'react';
import ReactDOM from 'react-dom'

const Header = ({text}) => <h3>{text}</h3>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => {
    if (good + neutral + bad === 0) {
        return <div>Ei yhtään palautetta annettu</div>
    }
    return (
        <table>
            <tbody>
            <Statistic text='hyvä' value={good} text2=''/>
            <Statistic text='neutraali' value={neutral} text2=''/>
            <Statistic text='huono' value={bad} text2=''/>
            <Statistic text='yhteensä' value={good + neutral + bad} text2=''/>
            <Statistic text='keskiarvo' value={(good - bad) / (good + neutral + bad)} text2=''/>
            <Statistic text='positiivisia' value={good / (good + neutral + bad) * 100 + ' %'}/>
            </tbody>
        </table>
    )
}

const Statistic = ({text, value}) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
)

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => setGood(good + 1)
    const handleNeutral = () => setNeutral(neutral + 1)
    const handleBad = () => setBad(bad + 1)

    return (
        <div>
            <Header text={'anna palautetta'}/>
            <Button handleClick={handleGood} text="hyvä"/>
            <Button handleClick={handleNeutral} text="neutraali"/>
            <Button handleClick={handleBad} text="huono"/>
            <Header text={'statistiikka'}/>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
