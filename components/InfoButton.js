const InfoButton = ({ toggleAbout }) => {
  return (
    <div
      className="info-button"
      onClick={toggleAbout}
      >
      About me
    </div>
  )
};

export default InfoButton;
