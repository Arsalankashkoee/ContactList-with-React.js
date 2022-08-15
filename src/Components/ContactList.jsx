import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import EditContact from "./EditContact";

const ContactList = ({ contacts, deleteContactHandler, setContacts }) => {
  const [edit, setEdit] = useState({ id: null, name: "", email: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  let navigate = useNavigate();

  // There is no contact
  if (!contacts.length)
    return (
      <div className=" flex items-center justify-center">
        <h2 className="bg-red-100 py-1 px-3 rounded-lg shadow-lg w-1/2 text-center mt-11">
          !! Add your contacts ... !!
        </h2>
      </div>
    );

  const sendDataHandler = (contact) => {
    // console.log(contact);
    navigate(`/user/${contact.id}`, {
      state: { name: contact.name, email: contact.email },
    });
  };

  const editDataHandler = (contact) => {
    setEdit(contact);
  };

  // search based on name and email
  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    // filter contacts
    const filterContacts = contacts.filter((c) => {
      // console.log(Object.values(c));
      return Object.values(c)
        .join(" ")
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase().trim());
    });
    console.log(filterContacts);
    setFilteredContacts(filterContacts);
  };

  if (edit.id)
    return (
      <EditContact
        edit={edit}
        setEdit={setEdit}
        contacts={contacts}
        setContacts={setContacts}
      />
    );

  return (
    <section className="flex items-center justify-center">
      <div className="w-1/2 ">
        <h2 className="mb-3 font-semibold text-lg">Contact List</h2>
        <div>
          <input
            className="focus:outline-none w-full py-2 px-3 rounded-lg shadow-lg mb-9 "
            type="search"
            placeholder="search ..."
            value={searchTerm}
            onChange={searchHandler}
          />
        </div>
        {filteredContacts.map((contact) => (
          <div key={contact.id}>
            <div className="mb-5 bg-violet-200 py-1 px-3 rounded-lg shadow-lg w-full ">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <BiUserCircle className="w-9 h-9 text-violet-800" />

                  <div
                    className="flex flex-col justify-center ml-5 cursor-pointer hover:text-violet-800"
                    onClick={() => sendDataHandler(contact)}
                  >
                    <p>name : {contact.name}</p>
                    <p>email : {contact.email} </p>
                  </div>
                </div>
                <div className="flex items-center gap-x-3">
                  <button
                    className="bg-none border border-red-500 text-red-500 rounded-lg shadow-lg px-2 py-1 "
                    onClick={() => deleteContactHandler(contact.id)}
                  >
                    <BiTrash className="w-5 h-5" />
                  </button>

                  <button
                    className="border border-violet-900 bg-none py-1 px-2 rounded-lg shadow-lg text-violet-800"
                    onClick={() => editDataHandler(contact)}
                  >
                    edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactList;
