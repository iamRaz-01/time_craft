import "../../css/bar/Taskbutton.css";

const Taskbutton = ({ icon, text, onContentChange }) => {
  const handleButtonClick = () => {
    onContentChange();
  };

  return (
    <button onClick={handleButtonClick}>
      <p className="icon">
        <span className="material-symbols-outlined">{icon}</span>
      </p>

      <p>{text}</p>
    </button>
  );
};

export { Taskbutton };
