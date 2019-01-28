import React, {useState} from 'react';
import ReactDOM from 'react-dom'

const Header = ({text}) => <h3>{text}</h3>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Display = ({text, value}) => <div>{text} {value}</div>

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
            <Display text={'hyvä'} value={good}/>
            <Display text={'neutraali'} value={neutral}/>
            <Display text={'huono'} value={bad}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
