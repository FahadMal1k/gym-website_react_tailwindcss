import React from 'react';

export default function Service () {
  return (
   <section id = 'service' className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
    <div  className="container mx-auto">
      <div className="container mx-auto">
        <h2 className="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-2xl hover:border-black p-6 hover:bg-personal-training-color hover:text-white">
            <h3 className="text-xl font-semibold mb-2">Personal Training</h3>
            <p className="text-gray-700 hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-2xl p-6 hover:bg-group-color hover:text-white">
            <h3 className="text-xl font-semibold mb-2">Group Classes</h3>
            <p className="text-gray-700 hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-2xl p-6 hover:bg-orange-custom hover:text-white">
            <h3 className="text-xl font-semibold mb-2">Nutrition Counseling</h3>
            <p className="text-gray-700 hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

