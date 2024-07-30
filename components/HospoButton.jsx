function HospoButton() {
    const handleClick = () => {
      window.location.href = `/`;
    };
  return (
    <div id="hospo-div">
      <button
        id="hospo-bottom"
        onClick={() => handleClick()}
      >
        HOSPO
      </button>
    </div>
  );
}

export default HospoButton
