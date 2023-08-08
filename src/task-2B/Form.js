import React, { useState } from 'react';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      selectedOption &&
      firstName &&
      lastName &&
      (selectedOption === 'number' ? phoneNumber : email)
    ) {
      setIsFormComplete(true);
      console.log('Form submitted:', {
        selectedOption,
        firstName,
        lastName,
        phoneNumber,
        email,
      });

      setSelectedOption('');
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setEmail('');
    } else {
      setIsFormComplete(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 col-lg-4">
    <div className="card " style={{backgroundColor:'orange'}}>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
  
            <div className="col-12 mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="col-12 mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          
          <div className="radioWrapper mb-3">
            <h5>How should we contact you</h5>
            <div>
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  value="number"
                  checked={selectedOption === 'number'}
                  onChange={handleOptionChange}
                />
                Phone Number
              </label>
            </div>
            <div>
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  value="email"
                  checked={selectedOption === 'email'}
                  onChange={handleOptionChange}
                />
                Email Address
              </label>
            </div>
          </div>
          {selectedOption === 'number' && (
            <div className="col-12 mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          )}
          {selectedOption === 'email' && (
            <div className="col-12 mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
          {isFormComplete === false && (
            <p className="mb-3 text-danger">Please fill all details.</p>
          )}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
  </div>
  </div>
  );
}

export default Form;
