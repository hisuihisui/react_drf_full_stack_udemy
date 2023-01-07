import React, { useEffect, useState } from "react";
// import axios from "axios";

const ApiFetch = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [clicked, setClicked] = useState(false)

  const handlerClicked = () => {
    setClicked(!clicked)
  }

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
    //   .then(
    //     // fetch のレスポンスはHTMLなので、Jsonへ変換する
    //     (res) => res.json()
    //   )
    //   .then((data) => {
    //     setPosts(data);
    //   });

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: "GET" })
      .then(
        // fetch のレスポンスはHTMLなので、Jsonへ変換する
        (res) => res.json()
      )
      .then((data) => {
        setPosts(data);
      });

    // axios.get("https://jsonplaceholder.typicode.com/posts")
    // .then(res => {
    //   setPosts(res.data)
    // })
  }, [clicked]);

  return (
    <div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}

      <input type="text" value={id} onChange={evt => setId(evt.target.value)} />
      <button type="button" onClick={handlerClicked}>Get Post</button>
      <br />
      {posts.title}
    </div>
  );
};

export default ApiFetch;
