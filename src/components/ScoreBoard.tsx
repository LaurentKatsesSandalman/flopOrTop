import { ScoreItem, ScoreSetState, ScoresState } from "./App";
import TrendItem from "./TrendItem"
import style from "./ScoreBoard.module.css"

interface TrendListProps {
    scores: ScoresState;
    setScores: ScoreSetState;
}

function compareTop(a: ScoreItem, b: ScoreItem) {
    return a.top - b.top
}

function compareFlop(a: ScoreItem, b: ScoreItem) {
    return a.flop - b.flop
}



function ScoreBoard({ scores, setScores }: TrendListProps) {
    const tempScores = [...scores]
    tempScores.sort(compareTop)
    const arrayTop = (tempScores.filter((item) => (tempScores.indexOf(item) > tempScores.length - 4)))
    tempScores.sort(compareFlop)
    const arrayFlop = (tempScores.filter((item) => (tempScores.indexOf(item) > tempScores.length - 4)))



    return (

        <div className={style.scoreBoard}>
            <div className={style.mainDiv}>
                <h2>TOPS</h2>
                {arrayTop.map((item) => (
                    <TrendItem key={item.name} item={item} setScores={setScores} />))}
            </div>
            <div className={style.mainDiv}>
                <h2>FLOPS</h2>
                {arrayFlop.map((item) => (
                    <TrendItem key={item.name} item={item} setScores={setScores} />))}
            </div>
        </div>

    )
}

export default ScoreBoard