import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start min-h-screen pt-20 pb-10 px-4  bg-purple-200">
    {/* About Us Section */}
    <div className="w-full lg:w-1/2 lg:pb-0 lg:pr-4">
      <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
      <p className="text-lg text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper mattis tellus. Fusce id sapien nec libero porta tempor. Integer vitae justo vel justo aliquet fermentum. Nulla facilisi. Phasellus dictum augue nec arcu vehicula, ac suscipit mauris molestie. Vestibulum hendrerit ex in ante laoreet, id efficitur eros vehicula. Vivamus pretium orci eget nisi tincidunt fermentum. In hac habitasse platea dictumst. Maecenas ultrices bibendum ipsum, in mattis justo tincidunt sed. Donec non tortor nec eros vehicula aliquet. Nullam id varius mi, sit amet sollicitudin neque. Proin semper felis ac turpis consectetur, nec tincidunt urna aliquet. In id sodales sapien, vel suscipit felis. Integer a risus in enim vestibulum laoreet. Mauris tempus sapien sed dictum tempus. Cras sit amet nisi vitae elit suscipit pharetra. Sed sit amet lectus sed enim pulvinar consectetur. Aliquam luctus suscipit libero nec molestie. Nam in accumsan purus. Nam tincidunt ultricies arcu non luctus. Donec blandit libero ut lorem pharetra, sed bibendum lorem luctus. Mauris eget ipsum non leo vestibulum venenatis id ac sapien.
      </p>
    </div>
  
    {/* Image Section */}
    <div className="w-full lg:w-1/2 lg:p-8">
      <div className="aspect-w-16 aspect-h-9 lg:h-96 rounded-xl overflow-hidden">
        {/* Adjust height here */}
        <img src="/images/image4.jpg" alt="Description of the image"></img>
      </div>
    </div>
  </div>
  
   
  );
};

export default AboutUs;
