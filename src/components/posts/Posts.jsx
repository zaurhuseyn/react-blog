import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://static.euronews.com/articles/stories/07/71/91/76/773x435_cmsv2_9d29b4cd-81fe-585b-805d-dbc86f542338-7719176.jpg" />
      <Post img="https://static.euronews.com/articles/stories/07/71/91/76/750x500_cmsv2_83062741-cb63-5276-bb97-e3539aba3a7f-7719176.jpg" />
  </div>
  );
}
