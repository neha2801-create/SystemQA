import React from 'react';
import { FiCheckCircle, FiAward } from 'react-icons/fi';

const QualificationChecklists = ({ qualifications, preferredQualifications }) => {
  const renderQualification = (qual, index, isPreferred = false) => {
    return (
      <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-start">
          <div className="mt-1">
            {isPreferred ? 
              <FiAward className="w-5 h-5 text-orange-500" /> : 
              <FiCheckCircle className="w-5 h-5 text-green-500" />}
          </div>
          <div className="ml-3">
            <h3 className="font-medium text-gray-800">{qual.title}</h3>
            <div className="mt-2 p-3 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-700">{qual.match}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-4">
          <FiCheckCircle className="w-6 h-6 text-orange-500 mr-2" />
          <h2 className="text-xl font-bold text-gray-800">Basic Qualifications Checklist</h2>
        </div>
        <div className="mt-4">
          {qualifications.map((qual, index) => renderQualification(qual, index))}
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FiAward className="w-6 h-6 text-orange-500 mr-2" />
          <h2 className="text-xl font-bold text-gray-800">Preferred Qualifications Assessment</h2>
        </div>
        <div className="mt-4">
          {preferredQualifications.map((qual, index) => renderQualification(qual, index, true))}
        </div>
      </div>
    </>
  );
};

export default QualificationChecklists;