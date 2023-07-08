import * as React from "react";

import styles from "../styles/Contact.module.css";

import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

export default function Header () {
  return (
        <div className={styles.Contact}>
            <IconButton href="https://www.linkedin.com/anthony-achiterdene" target="_blank" color="primary">
                <LinkedInIcon/> 
            </IconButton>
            <IconButton href="https://github.com/adanzan" target="_blank" color="primary">
                <GitHubIcon/> 
            </IconButton>
            <IconButton href="https://www.instagram.com/a_danzan/" target="_blank" color="primary">
                <InstagramIcon/> 
            </IconButton>
            <IconButton href="mailto:danzanachiterdene@gmail.com" target="_blank" color="primary">
                <EmailIcon/> 
            </IconButton>
        </div>
  );
}
