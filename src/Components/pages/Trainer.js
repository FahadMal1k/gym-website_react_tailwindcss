import React from 'react';
// import TrainerImg1 from "../Images/Female.jpg"
import TrainerImg2 from "../Images/Trainer1.jpg"
import TrainerImg3 from "../Images/Trainer2.jpg"
import TrainerImg4 from "../Images/dollar-gill-YTAK-7BBEsc-unsplash.jpg"

const TrainerCard = ({ name, description, image }) => {
  return (
    <div id='trainer' className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-60 object-cover object-center" src={image} alt={`${name}`} />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const MeetOurTrainer = () => {
  const trainers = [
    {
      name: 'John Doe',
      description: 'Certified personal trainer with 10 years of experience in strength training and weight loss programs.',
      image: TrainerImg3,
    },
    {
      name: 'James Smith',
      description: 'Experienced yoga instructor specializing in Hatha and Vinyasa flow. Dedicated to helping clients achieve mind-body balance.',
      image: TrainerImg4,
    },
    {
        name: 'Samuel Girven',
        description: 'Experienced yoga instructor specializing in Hatha and Vinyasa flow. Dedicated to helping clients achieve mind-body balance.',
        image: TrainerImg2,
      }
    // Add more trainers as needed
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mb-6">Meet Our Trainers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer, index) => (
            <TrainerCard key={index} {...trainer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTrainer;
