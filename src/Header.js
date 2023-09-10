import React from "react";
import companyLogo from './logo.png';
export default function Header(){
    return (
        <header>
            <meta name='description' content='Beginner friendly page for learning React Helmet.' />
          <div >
                <img src={companyLogo} alt="" width="400" height="100"/>
          </div>
          
        </header>
      );
}
