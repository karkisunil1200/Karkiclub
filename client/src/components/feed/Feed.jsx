import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(
        "https://localhost:8800/api/posts/timeline/61e9c5faf6f592984f0295b2"
      );
      console.log(res);
    };

    fetchPost();
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
