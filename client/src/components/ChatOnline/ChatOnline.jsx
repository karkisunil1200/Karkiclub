import "./chatOnline.css";

const ChatOnline = () => {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://artfiles.alphacoders.com/109/109126.jpg"
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Sunil Karki</span>
      </div>
    </div>
  );
};

export default ChatOnline;
