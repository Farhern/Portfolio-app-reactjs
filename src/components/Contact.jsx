import React from 'react'

function Contact() {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <div className="max-w-[1000px]">
        <form method="POST" action="https://getform.io/f/07e60e97-fed8-4959-ab62-94cf26be8605" className="flex flex-col max-w-[600px] w-full">
            <div className="pb-8 mt-20">
                <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Contact</p>
                <p className="text-gray-300 py-4">// Submit the form below or shoot me an email- farhanjp7452@gmail.com</p>
            </div>
            <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" />
            <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" />
            <textarea className="bg-[#ccd6f6] p-2" name="message" rows="10" placeholder="Message"></textarea>
            <button className="py-3 px-4 text-white border-2 hover:bg-pink-600 my-8 mx-auto flex items-center">Let's collaborate</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
