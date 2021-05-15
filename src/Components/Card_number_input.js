import React from 'react';
import TextField from '@material-ui/core/TextField'
import ResetBtn from './ResetBtn'
const NumberInput = ({ cardNum, setCardNum }) => {
  const handleChange = (event) => {
    // console.log(event.target.value)
    setCardNum(event.target.value)

  }
  return (
    < div className="number-input__container" >
      <h1>please slect a number between 2 and 9.</h1>
      <div>
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputProps={{ inputProps: { min: 0, max: 9 } }}
          value={cardNum}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
        <ResetBtn setCardNum={setCardNum} />
      </div>
    </div >
  )
}
export default NumberInput;