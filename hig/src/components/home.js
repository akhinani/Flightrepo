import React, { useState } from 'react';
import './home.css';

function HotelPanel() {
  // Define state variables for form inputs
  const [tripType, setTripType] = useState('roundTrip');
  const [flyingFrom, setFlyingFrom] = useState('');
  const [flyingTo, setFlyingTo] = useState('');
  const [departing, setDeparting] = useState('');
  const [returning, setReturning] = useState('');
  const [numOfAdults, setNumOfAdults] = useState(0);
  const [numOfKids, setNumOfKids] = useState(0);
  const [travelClass, setTravelClass] = useState('Economy class');

  // Event handler for incrementing and decrementing passenger counts
  const handleIncrement = (field) => {
    if (field === 'adults') {
      setNumOfAdults(numOfAdults + 1);
    } else if (field === 'kids') {
      setNumOfKids(numOfKids + 1);
    }
  };

  const handleDecrement = (field) => {
    if (field === 'adults' && numOfAdults > 0) {
      setNumOfAdults(numOfAdults - 1);
    } else if (field === 'kids' && numOfKids > 0) {
      setNumOfKids(numOfKids - 1);
    }
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <main>
      <section id="booking">
        <article id="cta">
          <header>
            <h1>Book your flight today</h1>
            <p>
              Anytime you visit the islands it is life changing in some way.
              Breathtaking scenery, friendly faces and the aloha spirit — come
              for a visit, you won't regret it.
            </p>
          </header>
        </article>

        <article id="formSection">
          <form onSubmit={handleSubmit} id="flightBook">
            <div id="tripType" className="form-group">
              <label htmlFor="roundTrip">
                <input
                  type="radio"
                  id="roundTrip"
                  name="flight-type"
                  checked={tripType === 'roundTrip'}
                  onChange={() => setTripType('roundTrip')}
                />
                <span></span>Roundtrip
              </label>
              <label htmlFor="oneWay">
                <input
                  type="radio"
                  id="oneWay"
                  name="flight-type"
                  checked={tripType === 'oneWay'}
                  onChange={() => setTripType('oneWay')}
                />
                <span></span>One way
              </label>
              <label htmlFor="multiCity">
                <input
                  type="radio"
                  id="multiCity"
                  name="flight-type"
                  checked={tripType === 'multiCity'}
                  onChange={() => setTripType('multiCity')}
                />
                <span></span>Multi-City
              </label>
            </div>

            <div id="placeDate">
              <div className="form-group">
                <label className="form-label" htmlFor="flyingFrom">
                  From
                </label>
                <input
                  className="form-control"
                  id="flyingFrom"
                  type="text"
                  placeholder="City or airport"
                  value={flyingFrom}
                  onChange={(e) => setFlyingFrom(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="flyingTo">
                  To
                </label>
                <input
                  className="form-control"
                  id="flyingTo"
                  type="text"
                  placeholder="City or airport"
                  value={flyingTo}
                  onChange={(e) => setFlyingTo(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="departing">
                  Departing date
                </label>
                <input
                  className="form-control"
                  id="departing"
                  type="date"
                  required
                  value={departing}
                  onChange={(e) => setDeparting(e.target.value)}
                />
                <i className="fas fa-calendar-alt"></i>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="returning">
                  Returning date
                </label>
                <input
                  className="form-control"
                  id="returning"
                  type="date"
                  required
                  value={returning}
                  onChange={(e) => setReturning(e.target.value)}
                />
                <i className="fas fa-calendar-alt"></i>
              </div>
            </div>

            <h3>Passengers</h3>
            <div id="details">
              {/* Passengers */}
              <div className="form-group selectNum">
                <label className="stepper-label" htmlFor="numOfAdults">
                  Adults (18+)
                </label>
                <div className="stepper">
                  <button
                    className="minus"
                    onClick={() => handleDecrement('adults')}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <input
                    className="stepper-control"
                    id="numOfAdults"
                    type="number"
                    value={numOfAdults}
                  />
                  <button
                    className="plus"
                    onClick={() => handleIncrement('adults')}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>

              <div className="form-group selectNum">
                <label className="stepper-label" htmlFor="numOfKids">
                  Children (0-17)
                </label>
                <div className="stepper">
                  <button
                    className="minus"
                    id="minus"
                    onClick={() => handleDecrement('kids')}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <input
                    className="stepper-control"
                    id="numOfKids"
                    type="number"
                    value={numOfKids}
                    max="10"
                  />
                  <button
                    className="plus"
                    onClick={() => handleIncrement('kids')}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>

              <div className="form-group travelClass">
                <label className="form-label" htmlFor="travClass">
                  Travel class
                </label>
                <select
                  className="form-control"
                  id="travClass"
                  value={travelClass}
                  onChange={(e) => setTravelClass(e.target.value)}
                >
                  <option>Economy class</option>
                  <option>Business class</option>
                  <option>First class</option>
                </select>
                <i className="fa fa-arrow-down select-arrow" aria-hidden="true"></i>
              </div>
            </div>

            <div className="form-btn">
              <button className="submit-btn" type="submit">
                Show flights
              </button>
            </div>
          </form>
        </article>
      </section>

    

      {/* Footer */}
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
         
          <section>
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input type="email" id="form5Example21" className="form-control" />
                    <label className="form-label" htmlFor="form5Example21">
                      Email address
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
        <p>&copy; 2023 Your Airline. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default HotelPanel;