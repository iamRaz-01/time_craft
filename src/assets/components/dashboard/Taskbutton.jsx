import "../../css/dashboard/Taskbutton.css";

const Taskbutton = ({ icon, text, onContentChange }) => {
  const handleButtonClick = () => {
    onContentChange();
  };

  return (
    <button onClick={handleButtonClick}>
      <p className="icon">
        <span class="material-symbols-outlined">{icon}</span>
      </p>

      <p>{text}</p>
    </button>
  );
};

export { Taskbutton };