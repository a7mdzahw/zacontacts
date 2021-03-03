import React from "react";
import Contact from "../components/Contact";

const contactsList = [
  {
    name: "Ahmed",
    email: "a7mdzahw@gmail.com",
    phone: "+01026292492",
  },
  {
    name: "Ahmed",
    email: "a7mdzahw@gmail.com",
    phone: "+01026292492",
  },
  {
    name: "Ahmed",
    email: "a7mdzahw@gmail.com",
    phone: "+01026292492",
  },
  {
    name: "Ahmed",
    email: "a7mdzahw@gmail.com",
    phone: "+01026292492",
  },
  {
    name: "Ahmed",
    email: "a7mdzahw@gmail.com",
    phone: "+01026292492",
  },
  {
    name: "Ahmed",
    email: "a7mdzahw@gmail.com",
    phone: "+01026292492",
  },
];

const contacts = () => {
  return (
    <>
      <div className="row align-items-center">
        <h2 className="col-md-8 display-3 p-2">My Contacts</h2>
        <form className=" col-md-4">
          <input
            className="form-control"
            id="search"
            name="search"
            placeholder="Search Contacts..."
          />
        </form>
      </div>
      <div className="row">
        {contactsList.map((contact, i) => (
          <div className="col-lg-6">
            <Contact contact={contact} key={i} />
          </div>
        ))}
      </div>
    </>
  );
};

export default contacts;
