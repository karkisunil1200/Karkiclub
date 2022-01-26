import "./message.css";

const Message = ({ own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images5.alphacoders.com/551/551218.jpg"
          alt=""
        />
        <p className="messageText">Nothing Happened</p>
      </div>

      <div className="messageBottom">I hour ago</div>
    </div>
  );
};
export default Message;
