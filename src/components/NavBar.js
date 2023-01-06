import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksTag = links.map(link=>{
    return <a key={link} href={"#"+link}>{link}</a>
  })

  return <nav>{linksTag}</nav>;
}

export default NavBar;
