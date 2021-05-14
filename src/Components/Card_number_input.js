import React from 'react';
import TextField from '@material-ui/core/TextField'
const NumberInput = ({ cardNum, setCardNum }) => {
  const handleChange = (event) => {
    // console.log(event.target.value)
    setCardNum(event.target.value)

  }
  return (
    < div className="number-input__container" >
      <h1>number input</h1>
      <TextField
        id="standard-number"
        label="Number"
        type="number"
        InputProps={{ inputProps: { min: 0, max: 9 } }}
        value={cardNum}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
      />
    </div >
  )
}
export default NumberInput;