import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import React, { useState } from "react";



export default function Contact ({ data }) {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const [formSuccess, setFormSuccess] = useState(false)
  const [formSuccessMessage, setFormSuccessMessage] = useState("")

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault()

    const formURL = e.target.action
    const data = new FormData()

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    })

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        'accept': 'application/json',
      },
    }).then((response) => response.json())
    .then((data) => {
      setFormData({ 
        name: "", 
        email: "", 
        message: "",
        subject: "", 
      })

      setFormSuccess(true)
      setFormSuccessMessage(data.submission_text)
    })
  }

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">

          <div className="col-12 md:col-6 lg:col-7">
            {formSuccess ?
            <div>{formSuccessMessage}</div>:
            <form
              accept-charset="UTF-8"
              className="contact-form"
              method="POST"
              action={contact_form_action}
              onSubmit={submitForm}
            >
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={handleInput}
                  value={formData.name}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  onChange={handleInput}
                  value={formData.email}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  onChange={handleInput}
                  value={formData.subject}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder="Your message"
                  name="message"
                  onChange={handleInput}
                  value={formData.message}
                />
                
              </div>
              <button type="submit" className="btn btn-primary">
                Send Now
              </button>
            </form>
          }
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default Contact{
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
// };

// import React, { useState } from "react"

// export default function Contact() {




//   return (
//     <div>
//       <h1>Contact form</h1>
//       {formSuccess ? 
//         <div>{formSuccessMessage}</div> 
//         : 
//         <form method="POST" action="https://www.formbackend.com/f/664decaabbf1c319" onSubmit={submitForm}>
//           <div>
//             <label>Name</label>
//             <input type="text" name="name" onChange={handleInput} value={formData.name} />
//           </div>

//           <div>
//             <label>Email</label>
//             <input type="text" name="email" onChange={handleInput} value={formData.email} />
//           </div>

//           <div>
//             <label>Message</label>
//             <textarea name="message" onChange={handleInput} value={formData.message}></textarea>
//           </div>

//           <button type="submit">Send message</button>
//         </form>
//       }
//     </div>
//   )
// }
