import PostsLiked from "@/components/PostsLiked";

const ProfilePage = () => {
  return (
    <div>
      <h1>Bienvenue sur la plateforme !</h1>
      <p>Vous avez aimé les produits suivants :</p>
      <PostsLiked />
    </div>
  );
};

export default ProfilePage;
