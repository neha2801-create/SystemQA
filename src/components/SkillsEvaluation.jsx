import React from 'react';
import { FiGitBranch } from 'react-icons/fi';
import Draggable from 'react-draggable';  // Import Draggable component

const SkillsEvaluation = ({ technicalSkills }) => {
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <FiGitBranch className="w-6 h-6 text-orange-500 mr-2" />
        <h2 className="text-xl font-bold text-gray-800">Technical Skills Evaluation</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {technicalSkills.map((skill, index) => (
          <Draggable key={index}>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  {skill.icon}
                  <span className="ml-2 font-medium">{skill.name}</span>
                </div>
                <span className="text-sm text-gray-600">{skill.proficiency}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-orange-400 h-2 rounded-full" 
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          </Draggable>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-medium text-gray-800 mb-2">Overall Technical Assessment</h3>
        <p className="text-gray-700">
          Candidate demonstrates strong technical qualifications in key areas required for the Just Walk Out QA role. 
          Particularly notable are strengths in Test Automation (95%) and Selenium (90%), which are critical for this position.
        </p>
      </div>
    </div>
  );
};

export default SkillsEvaluation;
