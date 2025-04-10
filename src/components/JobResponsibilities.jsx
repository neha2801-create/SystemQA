import React, { useState } from 'react';
import { FiCheckCircle, FiCircle, FiArrowRight } from 'react-icons/fi';

const JobResponsibilities = ({ jobResponsibilities, activeSection, setActiveSection, completedSections, handleSectionComplete }) => {
  const [expandedDetail, setExpandedDetail] = useState(null);

  const renderSection = (section, index) => {
    const isActive = activeSection === index;
    const isCompleted = completedSections[index];
    
    return (
      <div 
        key={index}
        className={`p-5 mb-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${isActive ? 'bg-blue-50 border-b-4 border-blue-500' : 'bg-white hover:bg-gray-50'}`}
        onClick={() => setActiveSection(index)}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {isCompleted ? 
              <FiCheckCircle className="w-7 h-7 text-green-500 mr-3" /> : 
              <FiCircle className="w-7 h-7 text-gray-300 mr-3" />}
            <h2 className="text-xl font-bold text-gray-800">{section.title}</h2>
          </div>
          {isActive ? 
            <FiArrowRight className="w-6 h-6 text-blue-500" /> : 
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Click to expand
            </span>
          }
        </div>
        
        {isActive && (
          <div className="mt-6 ml-10 mr-4">
            <div className="grid grid-cols-1 gap-6">
              {section.details.map((detail, detailIndex) => (
                <div 
                  key={detailIndex} 
                  className={`border-l-4 ${expandedDetail === detailIndex ? 'border-blue-500 bg-blue-50' : 'border-gray-200'} pl-4 py-3 rounded-r-md transition-all duration-200 hover:border-blue-300`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedDetail(expandedDetail === detailIndex ? null : detailIndex);
                  }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-gray-800 text-lg">{detail.requirement}</h3>
                    <button className="text-blue-500 text-sm hover:underline focus:outline-none">
                      {expandedDetail === detailIndex ? 'Hide details' : 'Show details'}
                    </button>
                  </div>
                  
                  {expandedDetail === detailIndex && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                        <p className="text-sm text-gray-500 uppercase font-semibold mb-2">Candidate Experience</p>
                        <p className="text-gray-700">{detail.experience}</p>
                      </div>
                      <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                        <p className="text-sm text-gray-500 uppercase font-semibold mb-2">Resume Reference</p>
                        <p className="text-gray-700">{detail.resumeReference}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {!isCompleted && (
              <div className="mt-6 flex justify-center">
                <button 
                  className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors shadow-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSectionComplete(index);
                  }}
                >
                  Mark Section as Reviewed
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full mb-8">
      <div className="text-center mb-8">
        <div className="flex justify-center items-center mb-3">
          <FiCircle className="w-7 h-7 text-orange-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Key Responsibilities Assessment</h2>
        </div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Review how the candidate's experience aligns with Amazon's Just Walk Out QA Engineering position requirements.
          Click each section to expand details and mark as reviewed when complete.
        </p>
      </div>
      
      <div className="mt-8">
        {jobResponsibilities.map((section, index) => renderSection(section, index))}
      </div>
    </div>
  );
};

export default JobResponsibilities;