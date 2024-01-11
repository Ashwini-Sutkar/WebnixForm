import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const handleCombinedSubmit = (e) => {
        e.preventDefault();
        sendEmail(e); // Call sendEmail
        handleSubmit(e); // Call handleSubmit
      };

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mbfhl6w', 'template_z6ij6wu', form.current, 'MC1gDa6wfYU1FbxdY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        service: '',
      });
  
      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
            e.preventDefault();
            // Basic form validation
          if (!formData.name || !formData.email || !formData.phoneNumber || !formData.service) {
            alert('Please fill in all fields.');
            return;
          }
  
          setIsFormSubmitted(true);
        // You can perform form submission logic here
        // console.log('Form submitted with data:', formData);
        // Reset the form after submission if needed
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          service: '',
        });
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
      ];
  
 


  return (
    
    <div   className="min-h-screen flex items-center justify-center ">

    <form  ref={form} onSubmit={ handleCombinedSubmit } className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-orange-400">
    
    <div className='mb-4'>
      <label  className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Name:
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
    </div>
      <br />
    <div className="mb-4">
        <label  className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email" >
          Email:
          <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
    </div>
        <br />

      <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
        Phone Number:
        <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </label>
      </div>

      <br />
     <div className="mb-4">
     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
        Service:
        <select  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
      <br />
            <div>        
              <button  className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline items-center justify-center" 
               type="submit">Submit</button>
            </div>

    </form>
    {isFormSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md flex flex-col items-center">
            <p className="text-lg mb-4">
              Thank you, we have received your enquiry and <br/> sent you an email. Please check your mailbox.
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
  )

};
