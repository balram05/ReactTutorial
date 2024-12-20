
import './App.css';
// import data from './Components/restaurantdata/restaurantdata';
import 'bootstrap/dist/css/bootstrap.min.css';
// import  Chapterone  from './Components/chapterone/chapterone';
// import Chaptertwo from './Components/chapterone/chaptertwo';
// import Chapterthree from './Components/chapterone/chapterthree';
// import Todo from './Components/chapterone/Todo';
// import From from './Components/Form/Form'
// import Parent from './Components/UseContext/Parent';
// import TimerReducer from './Components/useReducer/UseReducer';
// import Trendingcard from './Components/card/trendingcard';
// import Bestplaces from "./Components/topbestplaces/bestplaces"
// import Advances from './assets/pages/advances/advances';
import Sidenav from './Components/sidenav/sidenav';
// import Lunch from "./Components/lunch/lunch"
// import Advancescard from "./Components/advancescard/advancescard"
//components names uesd directly withou the {}
//{} are used for the react hooks or the custom packages 
function App() {
  // const books = [
  //   {titel:"sampleOne", author:"balram"}
    // {titel:"sampleTwo",author:"ram"}
  // ]
  return (
    <div className="App">
    {/* <h1>hello world...!</h1>   */}
    {/* props like attributes for the components */}
    {/* <Chapterone title = "chapterOne " auther= "balram" >he is a nice person</Chapterone> */}
    {/* example for the chapterTwo component we are using the map method  */}
    {/* {books.map((book,index) => (
      <Chaptertwo key={index} book={book.titel} author={book.author} />
    ))} */}

    {/* <Chapterthree/> */}

    {/* <From/> */}
    {/* <Todo/> */}
    {/* <Parent/> */}
    {/* <TimerReducer/> */}
    {/* <Trendingcard restaurantdata={data} /> */}
    {/* <Bestplaces restaurantdata={data}/> */}
    {/* <Lunch restaurantdata={data}/> */}
    {/* <Advancescard restaurantdata={data}/> */}
    {/* <Advances/> */}
    <Sidenav/>

    
    </div>

  );  
}

export default App;
