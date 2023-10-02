import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { dbService, bucketService } from "../services";

import { PostForm, Container } from "../components";

function EditPost() {
  const [post, setPost] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    slug ?? navigate("/");

    dbService.getPost(slug).then(setPost).catch(console.error);
  }, [slug, navigate]);

  return (
    post && (
      <div className="py-8">
        <PostForm post={post}></PostForm>
      </div>
    )
  );
}

export default EditPost;
