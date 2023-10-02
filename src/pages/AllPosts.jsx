import { useState, useEffect } from "react";

import { dbService } from "../services";

import { PostCard, Container } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dbService
      .getPosts()
      .then((posts) => setPosts(posts.documents))
      .catch(console.error);
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="w-1/4 p-2" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
