
import './App.css';
import React from "react";
import Header  from './Header';
import Nav from  './Nav';
import Footer from './Footer';
function App() {
  return (
   /*  <div >
      
      <header>
   
  </header>
  <nav>
    <ul>
        <li><a href="littlelemon.html">Home</a></li>
        <li><a href="menu.html">Menu</a></li>
        <li><a href="book.html">Book</a></li>
        <li><a href="about.html">about</a></li>
    </ul>
  </nav>
  <main>
    <section>
        <article id ="main_offer">
            <h1>Welcome To our Little Lemon Resturant</h1>
            <p>PECIAL OFFER
              25% Off This Weekend</p>
        </article>
    </section>
    <section>
        <article>
            <h2>Beaf Meal is Delicious</h2>
            
            <p>Try our beaf meal with some potatos and katchap</p>
        </article>

        <article>
            <h2>Grilled beef with onions</h2>
            
            <p>Try our Grilled beef with onions with other things</p>
        </article>

        <article>
            <h2>ONE-POT SPAGHETTI</h2>
           
            <p>One-Pot Spaghetti is an easy weeknight dinner and one the whole family will love!</p>
        </article>
    </section>
  </main>
  <footer>
    <div>
        <p>Copyright © Little Lemon Resturant</p>
    </div>
  </footer>
    </div> */
    <React.Fragment>
      <Header />
      <Nav />
      <Footer />
    </React.Fragment>
  );
}

export default App;
