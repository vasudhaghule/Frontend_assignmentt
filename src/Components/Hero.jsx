import React, { useState } from "react";

const Content = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    language: [],
    email: "",
  
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "termsAccepted") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "checkbox" && name === "language") {
      setFormData((prev) => {
        const languages = prev.language.includes(value)
          ? prev.language.filter((lang) => lang !== value)
          : [...prev.language, value];
        return { ...prev, language: languages };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = "First name is required.";
    if (!formData.lastName.trim()) errs.lastName = "Last name is required.";
    if (!formData.gender) errs.gender = "Gender is required.";
    if (formData.language.length === 0) errs.language = "At least one language is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errs.email = "Invalid email.";
    }
   
    if (!formData.termsAccepted) {
      errs.termsAccepted = "You must accept the terms.";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const newEntry = {
      ...formData,
      timestamp: new Date().toLocaleString(),
    };
    setSubmissions((prev) => [...prev, newEntry]);
    setIsFormOpen(false);
    setIsThankYouOpen(true);
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      language: [],
      email: "",
      phone: "",
      termsAccepted: false,
    });
  };

  return (
    <>

      <div className="relative bg-[#f0f0f7] py-20 px-4 min-h-screen flex flex-col items-center">
      <div className="relative bg-[#f0f0f7] py-20 px-4 overflow-hidden min-h-screen flex items-center">
      <div className="text-center max-w-3xl mx-auto z-10">
        
        <h1 className="text-[#170F49] font-bold font-Roboto text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Simplify Your Life with Our Todo App
        </h1>

       
        <p className="text-[#6F6C90] mt-6 text-sm sm:text-base md:text-lg font-medium">
          Stay organized and boost your productivity with our intuitive todo website. <br className="hidden sm:block" />
          Experience a modern approach to task management that fits your lifestyle.
        </p>

         <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
         <button  onClick={() => setIsFormOpen(true)} className="w-[180px] sm:w-[200px] md:w-[182px] md:h-[56px] border border-[#FF3E54] bg-[#FF3E54] text-white rounded-full font-semibold text-base sm:text-lg hover:bg-red-600 transition">
            Get started
          </button>
          <button className="w-[182px] sm:w-[200px] md:w-[182px] md:h-[56px] border border-[#FF3E54] text-[#FF3E54] rounded-full  font-semibold text-base sm:text-lg hover:bg-red-50 transition">
            Learn more
          </button>
        </div>

          

      </div>
    </div>

        
        {submissions.length > 0 && (
          <div className=" w-full max-w-5xl overflow-x-auto ">
            <h2 className="text-[#170F49] font-semibold mb-4 text-xl text-center">Submitted Entries</h2>
            <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
              <thead className="bg-[#FF3E54] text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">gender</th>
                  <th className="py-3 px-4 text-left">Language</th>
                </tr>
              </thead>
             


                <tbody>
  {submissions.map((item, idx) => (
    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
      <td className="py-2 px-4">{item.firstName} {item.lastName}</td>
      <td className="py-2 px-4">{item.email}</td>
      <td className="py-2 px-4">{item.gender}</td>
      <td className="py-2 px-4">{item.language.join(", ")}</td>
    </tr>
  ))}
</tbody>


             
            </table>
          </div>
        )}
      </div>

      {(isFormOpen || isThankYouOpen) && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4">
        
          {isFormOpen && (
            <div className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-[#141414]">Get Started Today!</h3>
              <button
  className="absolute top-3 right-3 text-black  hover:text-black text-xl font-bold"
  onClick={() => setIsFormOpen(false)}
>
  ×
</button>
              
              <p className="mb-4">Fill in your details and take control of your tasks.</p>
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex gap-3 mb-4">
                  <div className="flex-1">
                    
                     <label
                    htmlFor="name"
                    className="block text-sm font-bold text-black mb-1"
                  >
                    First Name
                  </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full border border-red-200 rounded px-3 py-2 bg-red-50"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                  </div>
                  <div className="flex-1">
                     <label
                    htmlFor="name"
                    className="block text-sm font-bold text-black mb-1"
                  >
                    Last Name
                  </label>
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full border border-red-200 rounded px-3 py-2 bg-red-50"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm mb-1 font-bold">Gender </label>
                  <div className="flex gap-4 ">
                    {["Male", "Female"].map((g) => (
                      <label key={g} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="gender"
                          value={g}
                          checked={formData.gender === g}
                          onChange={handleChange}
                        />
                        {g}
                      </label>
                    ))}
                  </div>
                  {errors.gender && <p className="text-red-500 text-xs">{errors.gender}</p>}
                </div>

                <div className="mb-4">
                  <label className="block text-sm mb-1 font-bold ">Language </label>
                  {["English", "Hindi", "Marathi"].map((lang) => (
                    <label key={lang} className="block text-sm mb-2 w-[220px] border border-red-200 rounded px-3 py-2 bg-red-50">
                      <input
                        type="checkbox"
                        name="language"
                        value={lang}
                        checked={formData.language.includes(lang)}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {lang}
                    </label>
                  ))}
                  {errors.language && <p className="text-red-500 text-xs">{errors.language}</p>}
                </div>

 <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-black mb-1"
                  >
                    Email Address
                  </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-red-200 rounded px-3 py-2 bg-red-50 mb-2"
                />
                {errors.email && <p className="text-red-500 text-xs mb-2">{errors.email}</p>}

               

                <label className="flex items-center gap-2 text-sm mb-3">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                  />
                  I agree to the <span className="text-[#FF3E54] underline">terms and conditions</span>
                </label>
                {errors.termsAccepted && (
                  <p className="text-red-500 text-xs mb-2">{errors.termsAccepted}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#FF3E54] text-white py-2 rounded font-semibold hover:bg-red-600"
                >
                  Done
                </button>
              </form>
            </div>
          )}

          {isThankYouOpen && (
            <div className="bg-white rounded-lg max-w-sm w-full p-6 relative shadow-lg text-center">
              <div className="text-3xl mb-2">❤️</div>
              <h3 className="text-xl font-semibold mb-2 text-[#170F49]">
                Thank you for connecting with us.
              </h3>
              <p className="mb-6 text-gray-700">Our team will contact you soon.</p>
              <button
                onClick={() => setIsThankYouOpen(false)}
                className="px-6 py-2 w-full rounded-full bg-[#FF3E54] text-white font-semibold hover:bg-red-600"
              >
                Done
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Content;
