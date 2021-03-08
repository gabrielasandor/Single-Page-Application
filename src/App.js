import logo from './logo.svg';
import './App.css';
import React from "react";
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress'


<CircularProgress />
export default function App() {
  return (
    <Router>
      <div className="header">  <div><img className="imghead" src="https://www.blueskyvineyard.com/wp-content/uploads/2018/10/cat-and-dog-banner.png"></img></div></div>
      <div className="navbarLink">
        <nav>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Cats</Link>
            </li>
            <li>
              <Link to="/users">Dogs</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          <Route path="/catImgId/:id">
            <CatsFacts />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>


        </Switch>


        <footer>
          <div className="footer-icon">
            <h2> About Us</h2>
            <div className="footer-co">
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

require('dotenv').config() 

const dogKey = process.env.DOG_API_KEY;

const catKey = process.env.CAT_API_KEY;

function Home() {
  return <div className="main">
    <div className="information-card">
      <h2> 3 Things About Dog Adoption </h2>
      <h3>1. Tips for the First Week With Your Newly Adopted Dog</h3>
      <p>Just like us, dogs need order and leadership. They seek order, which you must provide. Your dog needs
      to
      know that you are the in charge and that you have a set of rules to live by. This makes the transition
      from the shelter to your home easier, faster and more rewarding. One idea to help set order is to hold a
      family meeting to create rules about caring for the dog. Purchase your essential dog care items such as
      ID
      tags, a collar and a 6 foot leash, food and water bowls, food, dog toys, a crate and bedding, and basic
      grooming tools. Just before you bring your dog adoption home, take him for a walk to tire him out a
      little. For starters when the dog arrives at home, limit your dog to one room or area. Most dogs
      instinctively like to den, and a crate makes the ideal place for your dog to sleep and get away from
      everything else going on. The next step is to plan a trip to the vet in order to make sure your dog is
       healthy and will not transmit any diseases to other local dogs. </p>
      <h3>2. Dog Adoption Will Build Life Lessons for Kids of All Ages</h3>
      <p>Dog adoption provides a fertile opportunity to teach significant values to children. The decision to
      devote your resources and care to a dog in need sends a very clear message about the identity of a
      family
      and its underlying values. It is a great time to explore who you are as a family and what you stand for.
      It is through this process that a child learns things like, "We are a family with an important choice to
      make, and we are going to use the power of this choice to save a life." This teaches kids about personal
      responsibility and their impact on the greater good as they make choices in life. Children need to feel
      they can impact their world. We need to give them opportunities to do so in positive, pro-social ways.
      Choosing dog adoption can plant the seeds for that ethic. Dogs help children get outside more – to go
      for
      walks, run, and play – and enjoy all the associated health benefits. Kids also learn responsibility by
      feeding and caring for a dog's routine needs. Children with dogs display improved impulse control,
      social
      skills and self-esteem. And for emerging readers, reading to a dog is an easy way to feel comfortable.
              </p>
      <h3>3. How to Prepare Your Budget for Dog Adoption</h3>
      <p>Being a good caring dog owner involves many things that don't affect your wallet, like your time and
      love, but there are certainly costs to plan for. If you've never owned a particular type of pet before,
      knowing how much your new pet will cost can be complicated. When adopting a dog there will usually be an
      dog adoption fee. Rescuing pets is expensive work! The rescuer often pays to have the dogs spayed or
      neutered if they aren't already, provides vaccines, and pays for all medical care needed while the pets
      are in their rescue. Food, beds, leashes, collars, tags, grooming, it adds up, but luckily much of that
      cost is not passed on. Typical dog adoption fees range from $100 to $300. Next consider you basic
      supplies
      such as a collar, IDs, microchip, leash, pet bed, bowls, and toys. The biggest cost will be food, that
      depends on the size and type of dog you will be adopting. Asking the shelter what they are feeding the
      dog
      you want to adopt and the cost can help prepare for this. Other costs are mostly medical and will
      include
      regular vet checkups, and the potential for a trip to the vest because of an accident, or illness. If
      you
      will be away from your dog all day long, you may want to look into doggie daycare, or a dog walker.
              </p>
    </div>


  </div>
}



function About() {
  const [images, catImages] = React.useState([]);

  useEffect(() => {

    fetch('https://api.thecatapi.com/v1/images/search?limit=12&size=small', {
      headers: {
        "x-api-key": catKey
      }
    })
      .then(response => response.json())
      .then(data => {
        catImages(data)
      });
  }, [])

  return <div className="dogandcat">

    {images.map((cat) => (<div className="adopt"><Link to={`/catImgId/${cat.id}`}><img className="catanddog" src={cat.url}></img></Link>
      <button className="button2">ADOPT ME!</button> </div>))}

  </div>

}

function CatsFacts() {
  const params = useParams();
  const catId = params.id;

  const [images, catImagesId] = React.useState();

  useEffect(() => {

    fetch(`https://api.thecatapi.com/v1/images/${catId}`, {
      headers: {
        "x-api-key": catKey
      }
    })
      .then(response => response.json())
      .then(data => {
        catImagesId(data)
      });
  }, [])

  if (images == null) {
    return <CircularProgress />
  }
  else {
    return <div className="catId">
      <div className="adopt">
        <img className="catanddog" src={images.url}></img>
        <button className="button2">ADOPT ME!</button>
      </div>
    </div>
  }
}

function Users() {
  const [dogImages, dogsImages] = React.useState([]);

  useEffect(() => {

    fetch('https://api.thedogapi.com/v1/images/search?limit=12&size=small', {
      headers: {
        "x-api-key": dogKey
      }
    })
      .then(response => response.json())
      .then(data => {
        dogsImages(data)
      });
  }, [])

  return <div className="dogandcat">
    {dogImages.map((dog) => (<div className="adopt">
      <img className="catanddog" src={dog.url}></img>
      <button className="button2">ADOPT ME!</button>

    </div>))}

  </div>
}





