import React, { useState } from 'react'
import NumberInput from './Card_number_input'
import CardContainer from './Cards/Card_container'
// import ResetBtn from './ResetBtn'
import '../Stylesheets/root.css'
function App() {
  const [cardNum, setCardNum] = useState(0);
  return (
    <div className="App">
      {/* <h1>Hello world!</h1> */}
      <NumberInput cardNum={cardNum} setCardNum={setCardNum} />
      <CardContainer cardNum={cardNum} />
      {/* <ResetBtn setCardNum={setCardNum} /> */}
    </div>
  );
}

export default App;
