import Header from "../Components/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen ">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
