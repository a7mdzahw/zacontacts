import axios from "axios";
import React from "react";
import router from "next/router";

const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  image: "",
};

const Login = () => {
  const [form, setForm] = React.useState(INITIAL_STATE);

  const handleChange = ({ target: input }) => {
    const formData = new FormData();
    if (input.files) {
      formData.append(input.name, input.files[0]);
    } else {
      formData.append(input.name, input.value);
    }

    setForm(formData);
    formData.forEach((v, k) => console.log(k, v));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(form);
      const contact = await axios.post("/api/contacts", form);
      router.push("/");
    } catch (ex) {
      console.log(ex.response ? ex.response.data : ex.message);
    }
  };
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          className="form-control"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          className="form-control"
          type="email"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          className="form-control"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          id="image"
          name="image"
          className="form-control"
          type="file"
          onChange={handleChange}
        />
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-outline-success btn-block">Submit</button>
      </div>
    </form>
  );
};

export default Login;
