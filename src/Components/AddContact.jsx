import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ addContactHandler }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  
  let navigate = useNavigate();

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    addContactHandler(contact);
    setContact({ name: "", email: "" });
    navigate("/", { replace: true });
  };

  return (
    <section className="flex items-center justify-center">
      <form
        className="mb-7 bg-white w-1/2 px-3 py-5 rounded-lg shadow-lg border border-gray-300 "
        onSubmit={submitForm}
      >
        <h2 className="mb-3 font-semibold text-lg">Add Contact</h2>
        <div className="flex flex-col mb-7">
          <label htmlFor="name" className="mb-3 cursor-pointer">
            name :
          </label>
          <input
            type="text"
            name="name"
            value={contact.name}
            id="name"
            className="focus:outline-none w-full py-1 px-5 rounded-lg shadow-lg border border-gray-200 focus:border-violet-500 "
            onChange={changeHandler}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="email" className="mb-3 cursor-pointer">
            email :
          </label>
          <input
            type="email"
            name="email"
            value={contact.email}
            id="email"
            className="focus:outline-none w-full py-1 px-5 rounded-lg shadow-lg border border-gray-200 focus:border-violet-500 "
            onChange={changeHandler}
          />
        </div>
        <button
          className="py-1 px-5 bg-violet-500 text-white rounded-lg shadow-lg"
          type="submit"
        >
          Add Contact
        </button>
      </form>
    </section>
  );
};

export default AddContact;
