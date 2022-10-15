import logo from './logo.svg';
import Hello from './View/Hello';
import Test from './View/Test';
import EnhanceBorder from './HOC/ApplyBorder';



const UpdatedBorder =EnhanceBorder(Hello);
const UpdatedBorderTest =EnhanceBorder(Test);
function App() {
  return (
    <div className="App">
          <span style={{fontSize:"18px",fontWeight:"600",display:"flex",justifyContent:"center"}}>Higher Order Function (HOC)</span>
          <br></br>
          <Hello/>
          <hr/>
          <UpdatedBorder/>
          <Test/>
          <hr/>
          <UpdatedBorderTest/>

    </div>
  );
}

export default App;
