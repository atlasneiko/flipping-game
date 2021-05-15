import React, { useState } from 'react'
import NumberInput from './Card_number_input'
import CardContainer from './Cards/Cards_container'
import ResetBtn from './Buttons/ResetBtn'
import Counter from './counter'
import '../Stylesheets/root.css'
function App() {
  const [cardNum, setCardNum] = useState(0)
  console.log(cardNum);
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Counter initialCount={0} />
      <NumberInput cardNum={cardNum} setCardNum={setCardNum} />
      <CardContainer cardNum={cardNum} />
      <ResetBtn setCardNum={setCardNum} />
    </div>
  );
}

export default App;
