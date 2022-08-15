import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout/Layout";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import ContactDetail from "./Components/ContactDetail";


function App() {
  const contactsFromLocalStorage = JSON.parse(
    localStorage.getItem("contacts") || "[]"
  );

  const [contacts, setContacts] = useState(contactsFromLocalStorage);

  const addContactHandler = (contact) => {
    if (!contact.name || !contact.email) {
      toast.warning("All fields are mandatory !! ");
      return;
    }
    setContacts([...contacts, { id: Date.now(), ...contact }]);
    toast.success("Contact was added successfully ");
  };

  const deleteContactHandler = (id) => {
    //   console.log("deleted",id);
    const filteredContact = contacts.filter((c) => c.id !== id);
    setContacts(filteredContact);
    toast.success("Contact was deleted successfully");
  };

  const editContact = (id) => {
    console.log(id);
  };

  // useEffect(() => {
  //     const savedContacts = JSON.parse(localStorage.getItem("contacts"));
  //     if (savedContacts) {
  //       setContacts(savedContacts);
  //     }
  //   }, [])

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <main className="">
      <ToastContainer />
      <h1 className="text-center border-b-2 border-violet-200 pb-4 font-semibold text-2xl mb-5 ">
        Contact App
      </h1>
      <Layout>
        <Routes>
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                setContacts={setContacts}
                deleteContactHandler={deleteContactHandler}
                editContact={editContact}
              />
            }
          />
          <Route path="/user/:id" element={<ContactDetail />} />
        </Routes>
      </Layout>
      {/* <section className="flex  items-center justify-center">
        <AddContact addContactHandler={addContactHandler} />
      </section>
      <section className="flex  items-center justify-center">
        <ContactList
          contacts={contacts}
          deleteContactHandler={deleteContactHandler}
        />
      </section> */}
    </main>
  );
}

export default App;
