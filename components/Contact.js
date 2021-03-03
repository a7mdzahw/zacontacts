const Contact = ({ contact }) => {
  return (
    <div className="card d-flex flex-row align-items-center mt-2 ">
      <img
        src="unknown.jpg"
        alt="logo"
        className="img-fluid contact-logo m-2"
      />

      <div className="container">
        <h3 className="display-4 text-black">{contact.name}</h3>
        <p>{contact.email}</p>
        <p className="text-muted">{contact.phone}</p>
      </div>

      <div>
        <button className="btn btn-danger mb-2">
          <i className="bi bi-trash"></i>
        </button>
        <button className="btn btn-info">
          <i className="bi bi-pencil-square"></i>
        </button>
      </div>
    </div>
  );
};

export default Contact;
