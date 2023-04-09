import React from "react";
import {
  UncontrolledCarousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const Home = () => {
  return (
    <>
      <section className="banner-section">
        <h1> Welcome Everyone to Celebrity Tinder</h1>
      </section>
      <div className="home-page">
        <section className="top">
          <UncontrolledCarousel
            className="carousel"
            items={[
              {
                caption: "Find the love you deserve! ",
                key: 1,
                src: "https://images.unsplash.com/photo-1540076156429-35ffe82b7870?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              },
              {
                caption: "Explore your chances today.",
                key: 2,
                src: "https://images.unsplash.com/photo-1545343403-03e407630152?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
              },
              {
                caption: "Meet your future Love TODAY!",
                key: 3,
                src: "https://plus.unsplash.com/premium_photo-1665159097883-d6a5017a637c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              },
              {
                caption: "Find love like this for 15.99 a month",
                key: 4,
                src: "https://images.unsplash.com/photo-1555689070-2d15336749b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
              },
            ]}
          />
        </section>
        <section className="top-middle">
          <h3>
            Are you tired of swiping left on endless profiles that never seem to
            lead anywhere? Our dating website is different. We believe in the
            power of true love, and our mission is to help you find it. We know
            that finding the right person can be tough, but with our unique
            approach to matchmaking, you'll be on your way to a lifetime of
            happiness in no time. We'll connect you with like-minded individuals
            who share your values and dreams, and help you build a deep,
            meaningful connection. No more wasted time on meaningless matches –
            with us, you'll find the love you've been searching for. Join us
            today and start your journey to happily ever after.
          </h3>
        </section>

        <section className="top-bottom">
          <h3>Our prices are unbeatable</h3>
          <table>
            <tr>
              <th>Popular Sites</th>
              <th>Prices</th>
              <th>How effective is the site</th>
            </tr>
            <tr>
              <td>Tinder</td>
              <td>$10/month</td>
              <td>100 matches/year</td>
            </tr>
            <tr>
              <td>Grindr</td>
              <td>$15/month</td>
              <td>200 matches/year</td>
            </tr>
            <tr>
              <td>Website 3</td>
              <td>$20/month</td>
              <td>300 matches/year</td>
            </tr>
            <tr>
              <td>Celebrity Tinder</td>
              <td>$15.99/month</td>
              <td>350 matches/year</td>
            </tr>
          </table>
        </section>
      </div>
    </>
  );
};

export default Home;
