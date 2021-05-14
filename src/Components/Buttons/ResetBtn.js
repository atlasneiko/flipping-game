import Button from '@material-ui/core/Button';

const ResetBtn = ({ setCardNum }) => {
  const handleClick = (event) => {
    event.preventDefault();
    setCardNum(0);
  }
  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      reset
    </Button>
  )
}
export default ResetBtn