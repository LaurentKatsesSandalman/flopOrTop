import { ScoreSetState, ScoresState } from "./App";
import TrendItem from "./TrendItem"
import style from "./TrendList.module.css"

interface TrendListProps {
    scores: ScoresState;
    setScores: ScoreSetState;
}

// interface Item {
//     image: string;
//     name: string;
//     currentTop: number;
//     currentFlop: number;
// }

function TrendList({ scores, setScores }: TrendListProps) {

    return (
        <div className={style.listContainer}>
            {scores.map((item) => (
                <TrendItem key={item.name} item={item} setScores={setScores} />))}
        </div>
    )
}

export default TrendList