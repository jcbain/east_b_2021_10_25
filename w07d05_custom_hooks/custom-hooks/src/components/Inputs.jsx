import useInput from '../hooks/useInput';

const Inputs = () => {

  const emailInput = useInput();
  const passwordInput = useInput();

  const handleSubmit = (event) => {
    event.preventDefault();
  //  if ( emailInput.value === "") return
    console.log(`email: ${emailInput.value}, password: ${passwordInput.value}`);
    emailInput.clearValue();
    passwordInput.clearValue();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>login form</h2>
      <label>email</label>
      <br />
      <input value={emailInput.value}
        onChange={emailInput.handleChange}
      />
      <br />
      <label>password</label>
      <br />
      <input value={passwordInput.value}
        onChange={passwordInput.handleChange}
      />
      <br />

      <button type="submit">Login!</button>

    </form>
  )
};

export default Inputs;