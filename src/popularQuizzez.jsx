import Button from "react-bootstrap/Button";
import photo1 from "/new.jpg";
export default function PopularQuizzez() {
  return (
    <>
    <br/>
    
    <br/>
    <div className="div"><h3>Popular Quizzez</h3></div>
    <div className="container">
    
    <button className="btn btn-white btn-sm mt-3" ><img src={photo1}></img> <p>Quiz 1</p></button>
    <button className="btn btn-white btn-sm mt-3" ><img src={photo1}></img> <p>Quiz 2</p></button>
    <button className="btn btn-white btn-sm mt-3" ><img src={photo1}></img> <p>Quiz 3</p></button>
   
    <button className="btn btn-white btn-sm mt-3" ><img src={photo1}></img> <p>Quiz 4</p></button>
    <button className="btn btn-white btn-sm mt-3" ><img src={photo1}></img> <p>Quiz 5</p></button>
    <button className="btn btn-white btn-sm mt-3" ><img src={photo1}></img> <p>Quiz 6</p></button>
    </div>
    </>
  );
}
