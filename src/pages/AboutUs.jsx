import Title from "../Title";
import { NavLink } from "react-router-dom";
import HtmlFromFile from "../HtmlFromFile";
import NavBar from "../NavBar";
import styles from "../App.module.css";

const AboutUs = ({ filePath }) => {
  return (
    <>
      <NavBar />
      <Title title="About Us"/>
      <HtmlFromFile class={"container"}filePath={filePath} />
    </>
  
  )
};

export default AboutUs;