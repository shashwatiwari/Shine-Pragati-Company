import React, { useState } from 'react';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {

    };

    return (
        <div id="contact" className="container mx-auto mt-18">
            <h1 className="text-5xl text-white font-bold mb-6 justify-center">Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="w-full border border-gray-400 rounded-md p-2 bg-slate-900 text-white"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full border border-gray-400 rounded-md p-2  bg-slate-900 text-white"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <textarea
                            name="message"
                            placeholder="Message"
                            className="w-full border border-gray-400 rounded-md p-4 bg-slate-900 text-white font-poppins"
                            rows="4"
                            required
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-6 rounded-md"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactUs;
