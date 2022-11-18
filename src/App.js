import { useEffect } from 'react';
import { useDispatch,useSelector} from 'react-redux';
import {getData} from "./redux/action"
import Navbar from './components/Navbar';
import Styles from "./components/Main.module.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  const {allCharacter,allSeries}=useSelector((state)=>state.Appreducer)

  const dispatch = useDispatch();

  const giveRating = (ind) =>{
    let bag = "";
    for(let i=0; i<=ind; i++){
      bag += "*";
    }
    return bag;
  }

  useEffect(()=>{
    dispatch(getData())
  },[])

  return (
    <div >
      <Navbar/>
      <div className={Styles.series}>
        <b>{allSeries.title}</b>
        <p className={Styles.ott}>{allSeries.ott}</p>
        <img src={`https://demo.tech2edge.co/samples/${allSeries.img}`} className={Styles.seriesimg}/>
        <p className={Styles.desc}>{allSeries.desc}</p>
      </div>

      <div className={Styles.container}>
        <div className="row" >
          {allCharacter && allCharacter.map((el,i)=>(
          <div className="col-lg-3 col-md-6 col-12 border bg-light" key={el.id}>
            <b> {el.name}</b>
            <img src={`https://demo.tech2edge.co/samples/${el.img}`} className={Styles.img}/>
            <p>Age: {el.age}</p>
            <p>Rating: <span >{giveRating(i)}</span></p>
            <p>Profession: {el.profession}</p>
          </div>
          ))}
        </div>
      </div>
          
    </div>
  );
}

export default App;
