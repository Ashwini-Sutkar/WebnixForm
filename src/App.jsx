import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ContactUs } from './Contactus';



function App() {
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mbfhl6w', 'template_z6ij6wu', form.current, 'MC1gDa6wfYU1FbxdY')
      .then((result) => {
          console.log(result.text);
          console.log(sent)
      }, (error) => {
          console.log(error.text);
      });
  };

return(
  <>
    <ContactUs/>
  </>
//   <form ref={form} onSubmit={sendEmail}>
//   <label>Name</label>
//   <input type="text" name="from_name" />
//   <label>Email</label>
//   <input type="email" name="from_email" />
//   <label>Message</label>
//   <textarea name="message"></textarea>
//     <input type="submit" value="Send" />
// </form>
)

   
   

}

export default App
