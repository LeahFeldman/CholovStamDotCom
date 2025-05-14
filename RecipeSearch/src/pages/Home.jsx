import { Link } from "react-router-dom";
import Title from "../Title";
export function Home() {
  return (
  <>
   <Title>Home</Title>
    <Link to = "/AboutUs"> About Us </Link>
  </>
  )
};

export default Home;