import Title from "../Title";
import { NavLink } from "react-router-dom";
import HtmlFromFile from "../HtmlFromFile";
import styles from "../App.module.css";

const AboutUs = ({ filePath }) => {
  return (
    <>
      <Title title="About Us"/>
      <NavLink to="/">Home</NavLink>
      <HtmlFromFile class={"container"}filePath={filePath} />
    </>
  
  )
};

export default AboutUs;