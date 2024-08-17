import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Home = () => {
  const result = useContext(AuthContext);
  console.log(result);
  return <div>This is Home Page </div>;
};

export default Home;
