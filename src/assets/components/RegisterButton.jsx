const RegisterButton = ({ buttonFor, registerAction }) => {
  return (
    <>
      <button className="common-button" onClick={registerAction}>
        {buttonFor}
      </button>
    </>
  );
};

export { RegisterButton };
