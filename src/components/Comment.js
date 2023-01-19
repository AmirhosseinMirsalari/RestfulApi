import "../App.css";
const Comment = ({ name, email, onClick }) => {
  return (
    <div className="box pointer" >
      <p>name: {name}</p>
      <p>email: {email}</p>
    </div>
  );
};

export default Comment;
