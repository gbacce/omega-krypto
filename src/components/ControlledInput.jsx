function ControlledInput(value, setvalue, name) {

  const onChange = (event) => {
    setvalue(event.target.value);
  };

  return (
    <>
      <input className={name} value={value} onChange={onChange}/>
    </>
  );
}

export default ControlledInput;