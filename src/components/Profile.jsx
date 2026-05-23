import profileImage from "../assets/profile.jpg";

function Profile({ name, title, bio }) {
  return (
    <section className="profile">
      <img src={profileImage} alt={name} />

      <h2>{name}</h2>

      <h3>{title}</h3>

      <p>{bio}</p>
    </section>
  );
}

export default Profile;