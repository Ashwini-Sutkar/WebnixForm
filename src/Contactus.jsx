import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Step1 = ({ formData, handleChange }) => (
  <div className='mb-4'>
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
      Name:
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </label>
    <br />
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email" >
      Email:
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </label>
  </div>
);

const Step2 = ({ formData, handleChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
      Phone Number:
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />
    </label>
  </div>
);

const Step3 = ({ formData, handleChange, technicalServices }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
      Service:
      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="service"
        value={formData.service}
        onChange={handleChange}
        required
      >
        <option value="">Select a service</option>
        {technicalServices.map((service, index) => (
          <option key={index} value={service} name="service">
            {service}
          </option>
        ))}
      </select>
    </label>
  </div>
);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    service: '',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCombinedSubmit = async (e) => {
    e.preventDefault();
    console.log("Nice to meet you Rahul");
    if (currentStep === 3) {
    await sendEmail();
      setIsFormSubmitted(true);
    } else {
      handleNextStep();
    }
  };

  const sendEmail = async () => {

  try {
      const email_Js  = {
        name : formData.name,
        to_email: formData.email,
        service: formData.service
      }
      console.log(formData, "hii");
      // console.log("Heyyy !!", email_Js)
 const rahul  =  await emailjs.send(import.meta.env.VITE_REACT_APP_SERVICE_ID,  import.meta.env.VITE_REACT_APP_TEMPLATE_ID, email_Js, import.meta.env.VITE_REACT_APP_USER_ID)
       console.log(rahul);
  } catch (error) {
    console.log( error, "Emailjs error")
    
  }
  };

  const handleClosePopup = () => {
    setIsFormSubmitted(false);
  };

  const technicalServices = [
        'Web Development',
        'Mobile App Development',
        'Database Management',
        'Network Administration',
        'System Administration',
        'Cloud Computing',
        'Cybersecurity',
        'UI/UX Design',
        'DevOps',
        'Machine Learning',
        'Data Science',
        'IT Consulting',
        'Software Testing',
        'IT Support',
        'Blockchain Development',

    // ... other services
  ];

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form  onSubmit={handleCombinedSubmit} className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-orange-400">
        {currentStep === 1 && <Step1 formData={formData} handleChange={handleChange} />}
        {currentStep === 2 && <Step2 formData={formData} handleChange={handleChange} />}
        {currentStep === 3 && <Step3 formData={formData} handleChange={handleChange} technicalServices={technicalServices} />}

        <div className="mb-4">
          {currentStep > 1 && (
            <button
              className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handlePrevStep}
            >
              Back
            </button>
          )}
          {currentStep < 3 ? (
            <button
              className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleNextStep}
            >
              Next
            </button>
          ) : (
            <button
              className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          )}
        </div>
      </form>

      {isFormSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md flex flex-col items-center">
            <p className="text-lg mb-4">
              Thank you, we have received your enquiry and <br /> sent you an email. Please check your mailbox.
            </p>
            <button
              className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleClosePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
