 import React from 'react';

const Form = (props) => {
    let { step, onChange, onNext, onSubmit, formData, errorMsg } = props;
  
    const handleInputChange = (e) => {
      onChange(e.target.name, e.target.value);
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
          {step === 0 && (
            <div className="form-content">
              <div>
                <label className="label-content">Name:</label>
                <input
                  type="text"
                  name="name"
                  className="input-content"
                  required={true}
                  value={formData.name || ""}
                  onChange={handleInputChange}
                  placeholder="Enter Your Name"
                />
                <div className="input-error">{errorMsg.nameError}</div>
              </div>
              <div>
                <label className="label-content">Email:</label>
                <input
                  type="email"
                  name="email"
                  className="input-content"
                  required={true}
                  value={formData.email || ""}
                  onChange={handleInputChange}
                  placeholder="Enter Your Email"
                />
                <div className="input-error">{errorMsg.emailError}</div>
              </div>
            </div>
          )}
          {step === 1 && (
            <div className="no-content">
              <label className="label-content">Phone No:</label>
              <input
                type="tel"
                name="phone"
                className="input-content"
                value={formData.phone || ""}
                onChange={handleInputChange}
                placeholder="Enter Your Mobile No"
              />
              <br />
            </div>
          )}
          {step === 2 && (
            <div className="form-content">
              <label className="label-content">Select Service</label>
              <select
                name="service"
                className="select-content"
                required={true}
                value={formData.service || ""}
                onChange={handleInputChange}
              >
                <option value="">Select a service</option>
                <option value="technical service">Technical services</option>
                <option value="cloud service">Cloud Service</option>
                <option value="computer service">Computer Service</option>
                <option value="fronted service">Fronted Service</option>
                <option value="backend service">Backend Service</option>
              </select>
              <div className="input-error">{errorMsg.serviceError}</div>
              <br />
            </div>
          )}
          {step < 2 && <button onClick={onNext}>Next</button>}
          {step === 2 && <button onClick={onSubmit}>Submit</button>}
        </form>
      );
    };
