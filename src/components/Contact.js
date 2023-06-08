import React from 'react';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can access the form values using event.target.elements
    // For example: const name = event.target.elements.name.value;
  };

  return (
    <>
      <h1>This is the Contact Page</h1>
      <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}

export default Contact;

