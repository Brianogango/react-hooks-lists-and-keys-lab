import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const newLinks = links.map((x)=>{
    return  <a key={x} href="#home">{x}</a>
  })

  return <nav>{newLinks}</nav>;
}

export default NavBar;
