import { useEffect, useState } from "react";
import "./conversation.css";
import axios from "axios";

const Conversation = ({ conversations, currentUser }) => {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversations.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      console.log("first of get user");
      try {
        const res = await axios.get(`/users?userId=` + friendId);
        setUser(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversations]);

  return (
    <div className="conversation">
      <img className="conversationImg" src={"person/noAvatar.png"} alt="" />
      <span className="conversationName">{user.username}</span>
    </div>
  );
};

export default Conversation;
