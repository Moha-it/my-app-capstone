import React from "react";
export const navLinks = [
    { name: "Home", 
     path: "/" 
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact Us",
      path: "#contact",
    },
  ];
  export default function Nav(){
return (
    <nav>
        {navLinks.map((link, index) => {
          return (
            <ul>

                <li key={index}><a href={link.name}> {link.name} </a>{link.name}</li>

            </ul>
          );
        })}
      </nav>
);
    }