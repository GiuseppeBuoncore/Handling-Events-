function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.target.name);
  }

  function handleImgClick(event) {
    console.log(event.target.src);
  }

  return (
    <>
      <button name="one" onClick={handleButtonClick}>
        <img src="./email_2099199.png" onClick={handleImgClick} />
        Click me!
      </button>
    </>
  );
}

export default MouseClicker;
