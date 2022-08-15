import { Link, useLocation } from "react-router-dom";

const ContactDetail = () => {
  const location = useLocation();
    // console.log(location.state);

  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-3 bg-gray-200 p-2 rounded-lg shadow-lg w-1/2">
        <p>name : {location.state.name} </p>
        <p>email : {location.state.email}</p>
        <Link to="/">
          <button className="bg-violet-600 text-white mt-7 px-3 py-1 rounded-lg shadow-lg">
            go to contact list
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ContactDetail;
