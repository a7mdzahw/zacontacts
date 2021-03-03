const profile = ({ user }) => {
  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center mt-2">
        <img
          src="unknown.jpg"
          alt="user-logo"
          className="img-fluid user-logo"
        />
        <button className="btn btn-block btn-info w-25 mt-1">
          <i className="bi bi-camera"></i> Change Photo
        </button>
      </div>
      <div className="card p-0 m-2">
        <div className="card-body text-center p-0">
          <h2 className="display-3">{user.name}</h2>
          <p className="display-4 text-muted">{user.email}</p>
          <p className="display-4 text-muted">{user.phone}</p>
        </div>

        <div className="d-flex justify-content-center my-2">
          <button className="btn btn-info w-25 mx-3">
            <i className="bi bi-pencil-square"></i> Edit Profile
          </button>
          <button className="btn btn-danger w-25">
            <i className="bi bi-trash"></i> Delete Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = (ctx) => {
  return {
    props: {
      user: {
        name: "Ahmed Zahw",
        email: "a7mdzahw@gmail.com",
        phone: "01026292492",
      },
    },
  };
};

export default profile;
