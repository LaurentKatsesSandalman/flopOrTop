import { Dispatch, SetStateAction, useState } from 'react'
import './App.css'
import TrendList from './TrendList'
import ScoreBoard from './ScoreBoard'

const itemList = [
  { image: "src/images/Ecogeste01.jpg", name: "Vêtements", currentTop: 1, currentFlop: 1 },
  { image: "src/images/Ecogeste02.jpg", name: "Mouchoirs", currentTop: 1, currentFlop: 2 },
  { image: "src/images/Ecogeste03.jpg", name: "Soupe", currentTop: 1, currentFlop: 3 },
  { image: "src/images/Ecogeste04.jpg", name: "Lessive", currentTop: 1, currentFlop: 4 },
  { image: "src/images/Ecogeste05.jpg", name: "Eau", currentTop: 2, currentFlop: 1 },
  { image: "src/images/Ecogeste06.jpg", name: "Elastiques", currentTop: 2, currentFlop: 2 },
  { image: "src/images/Ecogeste07.jpg", name: "Verre", currentTop: 2, currentFlop: 3 },
  { image: "src/images/Ecogeste08.jpg", name: "Casseroles", currentTop: 2, currentFlop: 4 },
  { image: "src/images/Ecogeste09.jpg", name: "Poubelles", currentTop: 3, currentFlop: 1 },
  { image: "src/images/Ecogeste10.jpg", name: "Dêchets", currentTop: 3, currentFlop: 2 },
  { image: "src/images/Ecogeste11.jpg", name: "Cadeaux", currentTop: 3, currentFlop: 3 },
  { image: "src/images/Ecogeste12.jpg", name: "Vaisselle", currentTop: 3, currentFlop: 4 },
  { image: "src/images/Ecogeste13.jpg", name: "Douche", currentTop: 4, currentFlop: 1 },
  { image: "src/images/Ecogeste14.jpg", name: "Soins", currentTop: 4, currentFlop: 2 },
  { image: "src/images/Ecogeste15.jpg", name: "Téléphone", currentTop: 4, currentFlop: 3 },
  { image: "src/images/Ecogeste16.jpg", name: "WC", currentTop: 4, currentFlop: 4 }
]
const initialScores = itemList.map((item) => {
  return {
    name: item.name,
    top: item.currentTop,
    flop: item.currentFlop,
    image: item.image,
    alreadyTop: false,
    alreadyFlop: false,
  }
})

export interface ScoreItem {
  name: string,
  top: number,
  flop: number,
  image: string,
  alreadyTop: boolean,
  alreadyFlop: boolean
}

export type ScoresState = ScoreItem[];
export type ScoreSetState = Dispatch<SetStateAction<ScoresState>>

function App() {
  // for (let item in itemList){
  //   const [flop, setFlop] = useState(item.currentFlop);
  //   const [top, setTop] = useState(item.currentTop);}

  const [scores, setScores] = useState(initialScores)


  return (
    <>
      <div>
        <TrendList setScores={setScores} scores={scores} />
        <ScoreBoard setScores={setScores} scores={scores} />
      </div>
    </>
  )
}

export default App
