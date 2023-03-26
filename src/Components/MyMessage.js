const MyMessage = ({ message }) => {
  if (message.attachements && message.attachements.length > 0) {
    return (
      <img
        src={message.attachement[0].file}
        alt="message-attachement"
        className="message-attachement"
        style={{ float: "right" }}
      ></img>
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
