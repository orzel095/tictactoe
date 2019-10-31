import React,{useEffect,useState,useRef} from 'react';
import './App.css'

const fields = [0,1,2,3,4,5,6,7,8];



function App() {
  const [player, setPlayer] = useState(0);
  const [occupiedArray,setOccupiedArray] = useState([]);
  
  const onTargetClick = (e) => {
    const id = e.target.id;
    const isOccupied = occupiedArray.indexOf(id) !== -1;
    console.log(occupiedArray)
    if(player === 0 && !isOccupied){
      e.target.innerHTML ="X";
      setOccupiedArray([...occupiedArray, id]);
      setPlayer(1);
    } else if(player === 1 && !isOccupied){
      e.target.innerHTML ="O";
      setOccupiedArray([...occupiedArray, id]);
      setPlayer(0);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="battlefield">
          {fields.map((el,i) => (
            <div id={i} key={`field_${i}`} className="field" onClick={onTargetClick}>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
