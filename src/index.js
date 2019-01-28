import React, {useState} from 'react';
import ReactDOM from 'react-dom'

const Header = ({text}) => <h3>{text}</h3>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => {
    if (good + neutral + bad === 0) {
        return <div>Ei yhtään palautetta annettu</div>
    }
    return (
        <div>
            <div>hyvä {good}</div>
            <div>neutraali {neutral}</div>
            <div>huono {bad}</div>
            <div>yhteensä {good + neutral + bad}</div>
            <div>keskiarvo {(good - bad) / (good + neutral + bad)}</div>
            <div>positiivisia {good / (good + neutral + bad) * 100} %</div>
        </div>
    )

}

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
