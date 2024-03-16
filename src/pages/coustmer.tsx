import React from 'react';

const Customer = () => {
  // JSON data for customers
  const customersData = [
    {
      "name": "Mr. John",
      "testimonial": "We appreciate your support and time given in every stage of the project. We know that you will always continue to support us.",
      "designation": "Sr. Engineer"
    },
    {
      "name": "Mr. Jain",
      "testimonial": "The results of the coating solution were amazing and helped us solve the problem.",
      "designation": "Sr. Business Associate"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-8 pt-10 lg:pt-[8%]  ">
      {/* Section 1 */}
      <div className="text-center lg:text-left lg:w-1/2 pr-8">
      <h2 className="text-lg lg:text-3xl font-bold mb-4 underline text-black-500">What our customers say.</h2>
      </div>

      {/* Section 2 */}
      <div className="max-w-2xl lg:w-1/2 flex flex-col gap-8">
        {customersData.map((customer, index) => (
          <div key={index} className="text-center lg:text-left">
            <div>
              <h2 className="text-lg lg:text-2xl font-bold mb-2">{customer.name}</h2>
              <p className="text-base lg:text-lg mb-4">{customer.testimonial}</p>
              <p className="text-base lg:text-lg">{customer.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
