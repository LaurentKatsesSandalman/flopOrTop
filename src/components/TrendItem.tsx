import { useState } from "react";
import style from "./TrendItem.module.css"
import { ScoreItem, ScoreSetState } from "./App";

interface ItemProps {
    item: ScoreItem
    setScores: ScoreSetState
    key: string
}




function TrendItem({ item, setScores, key }: ItemProps) {

    // const [flop, setFlop] = useState(currentFlop);
    // const [top, setTop] = useState(currentTop);

    // const [isClickedTop, setIsClickedTop] = useState(false)
    // const [isClickedFlop, setIsClickedFlop] = useState(false)




    const handleOnClickTop = () => {
        if (!item.alreadyTop) {
            setScores((prev) => prev.map((currentItem) => {
                if (currentItem.name !== item.name) {
                    return currentItem
                }
                if (currentItem.alreadyFlop) {
                    return {
                        ...currentItem,
                        top: currentItem.top++,
                        alreadyTop: true,
                        flop: currentItem.flop--,
                        alreadyFlop: false,
                    }
                }
                return {
                    ...currentItem,
                    top: currentItem.top++,
                    alreadyTop: true
                }
            }))
        }
    }

    const handleOnClickFlop = () => {

        if (!item.alreadyFlop) {
            setScores((prev) => prev.map((currentItem) => {
                if (currentItem.name !== item.name) {
                    return currentItem
                }
                if (currentItem.alreadyTop) {
                    return {
                        ...currentItem,
                        flop: currentItem.flop++,
                        alreadyFlop: true,
                        top: currentItem.top--,
                        alreadyTop: false,
                    }
                }
                return {
                    ...currentItem,
                    flop: currentItem.flop++,
                    alreadyFlop: true
                }
            }))
        }
    }

    return <div className={style.itemContainer} key={key}>
        <img src={item.image} alt={"Eco-geste lié à: " + item.name} className={style.image} />
        <p className={style.name}>{item.name}</p>
        <div>
            <button className={style.button} type="button" onClick={() => handleOnClickTop()}>Top: {item.top}</button>
            <button className={style.button} type="button" onClick={() => handleOnClickFlop()}>Flop: {item.flop}</button>
        </div>
    </div>

}

export default TrendItem