import Title from "../Title";
import { NavLink } from "react-router-dom";
import HtmlFromFile from "../HtmlFromFile";
import styles from "../App.module.css";

const AboutUs = ({ filePath }) => {
  return (
    <>
      <Title title="About Us"/>
      <HtmlFromFile class={"container"}filePath={filePath} />
      <NavLink to="/">Go Home</NavLink>
    </>
  
  )
};

export default AboutUs;