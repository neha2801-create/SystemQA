import React from 'react';
import { FiShoppingCart, FiUser, FiThumbsUp } from 'react-icons/fi';

const InteractiveEvaluation = ({ 
  gameMode, 
  setGameMode, 
  skills, 
  droppedItems, 
  setDroppedItems, 
  setDraggedItem, 
  draggedItem, 
  showTooltip, 
  setShowTooltip, 
  shoppingCart, 
  setShoppingCart, 
  setCandidateRating, 
  reviewCompleted, 
  setReviewCompleted, 
  setShowConfetti 
}) => {
  
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <FiShoppingCart className="w-6 h-6 text-orange-500 mr-2" />
          <h2 className="text-xl font-bold text-gray-800">Quality and Performance Engineering - Skill Evaluation</h2>
        </div>
        <button 
          onClick={() => {
            setGameMode(!gameMode);
            setDroppedItems([]);
            setShoppingCart(0);
          }}
          className={`px-4 py-2 rounded-md transition-colors ${gameMode ? 'bg-red-100 text-red-600 hover:bg-red-200' : 'bg-orange-100 text-orange-600 hover:bg-orange-200'}`}
        >
          {gameMode ? 'Exit Interactive Mode' : 'Enter Interactive Mode'}
        </button>
      </div>
      
      {gameMode ? (
        <div className="mt-4">
          <div className="mb-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <p className="text-orange-800">
              <strong>HR Recruiter Tool:</strong> Drag the skills you believe this candidate possesses based on their resume into the assessment area.
              Like our Just Walk Out technology, our AI will automatically evaluate the match between candidate skills and job requirements.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-6 mb-8">
            {skills.filter(item => !droppedItems.includes(item.id)).map((skill) => (
              <div 
                key={skill.id}
                className="p-3 bg-white rounded-lg border border-gray-200 shadow-sm cursor-grab flex items-center gap-2 hover:shadow-md transition-shadow"
                draggable
                onDragStart={() => setDraggedItem(skill)}
                onMouseEnter={() => setShowTooltip(skill.id)}
                onMouseLeave={() => setShowTooltip('')}
                style={{ position: 'relative' }}
              >
                <div className="p-2 rounded-full bg-blue-100 text-blue-700">
                  {skill.icon}
                </div>
                <span>{skill.name}</span>
                
                {showTooltip === skill.id && (
                  <div className="absolute bottom-full left-0 mb-2 p-2 bg-gray-800 text-white text-xs rounded shadow-lg w-64 z-10">
                    <strong>Evidence from resume:</strong><br/>
                    {skill.evidence}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div 
            className="border-2 border-dashed border-orange-300 rounded-lg p-6 flex flex-col items-center justify-center min-h-40 bg-orange-50"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => {
              if (draggedItem) {
                setDroppedItems([...droppedItems, draggedItem.id]);
                setShoppingCart(shoppingCart + draggedItem.value);
                setCandidateRating((shoppingCart + draggedItem.value) / 21 * 100);
                setDraggedItem(null);
                
                if (droppedItems.length >= 5) {
                  setShowConfetti(true);
                  setTimeout(() => setShowConfetti(false), 3000);
                }
              }
            }}
          >
            <div className="mb-4">
              <FiUser className={`w-16 h-16 ${droppedItems.length > 0 ? 'text-orange-500' : 'text-gray-400'}`} />
            </div>
            
            <p className="text-lg font-medium text-center mb-2">
              {droppedItems.length === 0 
                ? "Drag candidate skills here to assess" 
                : `${droppedItems.length} verified skills`}
            </p>
            
            {droppedItems.length > 0 && (
              <div className="mt-4 w-full max-w-md">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Candidate Match Score:</span>
                  <span className="font-bold text-orange-600">{Math.round((shoppingCart / 21) * 100)}%</span>
                </div>
                
                <div className="mt-2 h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-orange-400 rounded-full transition-all duration-500"
                    style={{ width: `${(shoppingCart / 21) * 100}%` }}
                  ></div>
                </div>
                
                {droppedItems.length >= 5 && (
                  <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg border border-green-200 slide-in">
                    <div className="flex items-center">
                      <FiThumbsUp className="w-5 h-5 mr-2" />
                      <span className="font-medium">Excellent match! This candidate meets or exceeds the requirements for the Just Walk Out QA role.</span>
                    </div>
                  </div>
                )}
                
                {droppedItems.length >= 4 && !reviewCompleted && (
                  <button
                    onClick={() => setReviewCompleted(true)} 
                    className="mt-4 w-full py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors"
                  >
                    Complete Candidate Review
                  </button>
                )}
                
                {reviewCompleted && (
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg slide-in">
                    <h3 className="font-semibold text-blue-800 mb-2">Review Summary</h3>
                    <p className="text-blue-800 mb-2">Candidate Neha Pathak demonstrates strong technical qualifications that align well with the Just Walk Out QA Engineer role requirements.</p>
                    <div className="flex justify-between text-sm text-blue-700 mt-3">
                      <span>Review completed by: Current User</span>
                      <span>{new Date().toLocaleDateString()}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-gray-600">
            This interactive tool helps HR and recruiting teams evaluate candidate Neha Pathak for the Just Walk Out QA Engineer position.
            Click "Enter Interactive Mode" above to begin the skills assessment process.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setGameMode(true)}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors"
            >
              Begin Candidate Evaluation
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveEvaluation;