import { useState } from "react";
import { toast } from "react-toastify";

const EditContact = ({ contacts, setContacts, edit, setEdit }) => {
  const [editContact, setEditContact] = useState({
    name: edit.name,
    email: edit.email,
  });

  const changeHandler = (e) => {
    setEditContact({ ...editContact, [e.target.name]: e.target.value });
  };

  const editHandler = (id) => {
    const index = contacts.findIndex((contact) => contact.id === id);
    const selectedContact = { ...contacts[index] };
    selectedContact.name = editContact.name;
    selectedContact.email = editContact.email;
    const updatedContacts = [...contacts];
    updatedContacts[index] = selectedContact;
    setContacts(updatedContacts);
    // show contactList because id is null
    setEdit({ id: null, name: "", email: "" });
    toast.success("Contact was edited successfully");
  };

  return (
    <div>
      <section className="flex items-center justify-center mt-5 ">
        <form className="mb-7 bg-white w-1/2 px-3 py-5 rounded-lg shadow-lg border border-gray-300 ">
          <h2 className="mb-3 font-semibold text-lg">Edit Contact</h2>
          <div className="flex flex-col mb-7">
            <label htmlFor="name" className="mb-3 cursor-pointer">
              name :
            </label>
            <input
              type="text"
              name="name"
              value={editContact.name}
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
              value={editContact.email}
              id="email"
              className="focus:outline-none w-full py-1 px-5 rounded-lg shadow-lg border border-gray-200 focus:border-violet-500 "
              onChange={changeHandler}
            />
          </div>
          <button
            className="py-1 px-5 bg-violet-500 text-white rounded-lg shadow-lg"
            type="button"
            onClick={() => editHandler(edit.id)}
          >
            Edit Contact
          </button>
        </form>
      </section>
    </div>
  );
};

export default EditContact;
