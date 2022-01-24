import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/timeline/61e9b7d571090ca3b43b227d");
      console.log(res);
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))} */}
      </div>
    </div>
  );
};

export default Feed;
