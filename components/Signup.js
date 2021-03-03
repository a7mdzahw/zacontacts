import React from "react";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const Login = () => {
  const [form, setForm] = React.useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="text-center">
        <i className="bi bi-person-plus display-4"></i>
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          className="form-control"
          type="text"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">
          Email <i className="bi bi-envelope"></i>
        </label>
        <input
          id="email"
          name="email"
          className="form-control"
          type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          className="form-control"
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password2">Confirm Password</label>
        <input
          id="password2"
          name="password2"
          className="form-control"
          type="password"
          onChange={(e) => setForm({ ...form, password2: e.target.value })}
        />
      </div>
      <div className="d-grid">
        <button className="btn btn-outline-success btn-block">
          <i className="bi bi-person-plus"></i> Sign Up
        </button>
      </div>
    </form>
  );
};

export default Login;
