"use client"

import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { testimonials } from './data';

const skills = [
    { id: 'html', label: 'HTML/CSS', percentage: 85 },
    { id: 'javascript', label: 'JavaScript', percentage: 75 },
    { id: 'Bootstrap', label: 'Bootstrap', percentage: 90 },
    { id: 'NodeJs', label: 'NodeJs', percentage: 80 },
    { id: 'ReactJs', label: 'ReactJs', percentage: 87 },
    { id: 'NextJs', label: 'NextJs', percentage: 70 },
    { id: 'TailwindCss', label: 'TailwindCss', percentage: 90 },
    { id: 'MongoDB', label: 'MongoDB', percentage: 75 },
  ];
  
  const AboutTab = () => {
    useEffect(() => {
      skills.forEach((skill) => {
        animateProgressBar(skill.id, skill.percentage);
      });
    }, []);
  
    const animateProgressBar = (skillId, percentage) => {
      const progressBar = document.querySelector(`#${skillId}`);
      progressBar.style.width = `${percentage}%`;
    };

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const [testimonialIndex, setTestimonialIndex] = useState(0);
  
    const openModal = (testimonial) => {
      setSelectedTestimonial(testimonial);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setSelectedTestimonial(null);
      setModalIsOpen(false);
    };

    const testimonialsPerSlide = 2;
    const testimonialWidth = 100 / testimonialsPerSlide;
  
    const handleNextSlide = () => {
      const newIndex = Math.min(testimonialIndex + 1, testimonials.length - 1);
      setTestimonialIndex(newIndex);
    };
  
    const handlePrevSlide = () => {
      const newIndex = Math.max(testimonialIndex - 1, 0);
      setTestimonialIndex(newIndex);
    };
  
    const translateX = `translateX(-${testimonialIndex * testimonialWidth}%)`;

  return (
    <section>
      {/* Header title */}
      <div>
        <h2 className="text-xl font-extrabold text-white text-opacity-90">About Me</h2>
      </div>

      {/* Intro */}
      <div className="mt-6">
        <h2 className="text-xl text-white text-opacity-90 capitalize">I am davies precious</h2>
        <p className="text-xl text-white mt-3 text-opacity-50 capitalize">I am a web-developer with 3 years of experience</p>
        <p className="text-xl text-white mt-3 text-opacity-50 capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia fuga, alias similique culpa harum accusantium ea soluta deleniti! Unde tempora tenetur dolores ab explicabo? Assumenda dicta et expedita aut!</p>
      </div>

      {/* Skills */}
      <div className="mt-6">
        <h2 className="text-xl font-extrabold text-white text-opacity-90">Skills</h2>
        <div className="flex flex-wrap -mx-2">
          {skills.map((skill) => (
            <div key={skill.id} className="w-1/2 px-2 mb-6">
              <div className="flex justify-between">
                <span className="font-bold">{skill.label}</span>
                <span className="text-gray-500">{skill.percentage}%</span>
              </div>
              <div className="h-2 bg-gray-300 rounded">
                <div id={skill.id} className="h-full bg-blue-500 rounded transition-width duration-1000 ease-in-out"></div>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* Testimonials */}
        <div className="mt-6">
        <h2 className="text-xl font-extrabold text-white text-opacity-90">Testimonials</h2>
        <div className="mt-6 testimonial-container" style={{ transform: translateX }}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial" onClick={() => openModal(testimonial)}>
            <p className="text-gray-800">{testimonial.content.slice(0, 100)}...</p>
            <p className="text-gray-600 mt-2">{testimonial.author}</p>
            <p className="text-gray-600">{testimonial.role}</p>
          </div>
        ))}
      </div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          {selectedTestimonial && (
            <div className="p-4">
              <p className="text-gray-800">{selectedTestimonial.content}</p>
              <p className="text-gray-600 mt-2">{selectedTestimonial.author}</p>
              <p className="text-gray-600">{selectedTestimonial.role}</p>
            </div>
          )}
        </Modal>
        <div>
        <button className="prev-button" onClick={handlePrevSlide}>
        Previous
      </button>
      <button className="next-button" onClick={handleNextSlide}>
        Next
      </button>
        </div>
      </div>
    </section>
  );
};

export default AboutTab;

