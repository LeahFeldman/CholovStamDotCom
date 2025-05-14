import Title from "../Title";
import { NavLink } from "react-router-dom";
import HtmlFromFile from "../HtmlFromFile";

const AboutUs = ({ filePath }) => {
  return (
    <>
      <Title title="About Us"/>
      <HtmlFromFile filePath={filePath} />
      <NavLink to="/">Go Home</NavLink>
    </>
  
  )
};

export default AboutUs;