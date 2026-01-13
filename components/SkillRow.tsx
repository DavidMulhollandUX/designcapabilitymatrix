
import React, { useState } from 'react';
import { 
  CheckCircle, 
  Circle, 
  ChevronDown, 
  ChevronRight, 
  Star
} from 'lucide-react';
import { RATINGS } from '../constants';
import { Skill, RatingsMap, RatingValue } from '../types';

interface SkillRowProps {
  skill: Skill;
  ratings: RatingsMap;
  onRate: (id: string, rating: RatingValue) => void;
  type: 'exp' | 'gen';
  isFocused: boolean;
  onToggleFocus: (id: string) => void;
}

// Fixed: Defined RatingButtonProps and used React.FC to resolve the 'key' property error in lists.
interface RatingButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  colorClass: string;
}

const RatingButton: React.FC<RatingButtonProps> = ({ label, isSelected, onClick, colorClass }) => (
  <button
    onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}
    className={`
      px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all duration-200 border
      ${isSelected 
        ? `${colorClass} border-current shadow-sm scale-105 z-10` 
        : 'bg-white text-gray-400 border-gray-200 hover:border-gray-300 hover:bg-gray-50'}
    `}
  >
    {label}
  </button>
);

const SkillRow: React.FC<SkillRowProps> = ({ skill, ratings, onRate, type, isFocused, onToggleFocus }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const currentRating = ratings[skill.id];
  
  const activeRatingObj = RATINGS.find(r => r.value === currentRating);
  
  return (
    <div className={`
      group bg-white border rounded-2xl transition-all duration-300 overflow-hidden
      ${isExpanded ? 'shadow-lg border-indigo-100 ring-1 ring-indigo-50' : 'shadow-sm border-gray-200 hover:border-indigo-200'}
      ${isFocused ? 'ring-2 ring-yellow-400 shadow-yellow-100' : ''}
    `}>
      <div 
        className="p-5 flex items-center justify-between cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <button
             onClick={(e) => {
               e.stopPropagation();
               onToggleFocus(skill.id);
             }}
             className={`p-2 rounded-xl transition-all flex-shrink-0 ${isFocused ? 'bg-yellow-50 text-yellow-500 shadow-inner' : 'text-gray-200 hover:text-yellow-400 hover:bg-yellow-50/50'}`}
             title={isFocused ? "Unmark focus" : "Mark as focus area"}
          >
             <Star size={20} fill={isFocused ? "currentColor" : "none"} strokeWidth={2.5} />
          </button>
          
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2 truncate">
              {skill.name}
              {isFocused && (
                <span className="text-[9px] bg-yellow-400 text-yellow-900 px-1.5 py-0.5 rounded-full font-black tracking-tighter">FOCUS</span>
              )}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <div className={`p-0.5 rounded-full ${currentRating ? 'text-green-500' : 'text-gray-300'}`}>
                {currentRating ? <CheckCircle size={14} /> : <Circle size={14} />}
              </div>
              <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">
                {currentRating ? `Rated: ${activeRatingObj?.label}` : 'Not yet rated'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex gap-1.5" onClick={(e) => e.stopPropagation()}>
            {RATINGS.map((rate) => (
              <RatingButton
                key={rate.value}
                label={rate.label}
                isSelected={currentRating === rate.value}
                onClick={() => onRate(skill.id, rate.value as RatingValue)}
                colorClass={rate.color}
              />
            ))}
          </div>
          <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180 text-indigo-600' : 'text-gray-300'}`}>
            <ChevronDown size={20} />
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-5 pb-6 pt-0 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="lg:hidden flex gap-1.5 mb-6 overflow-x-auto no-scrollbar pb-1">
            {RATINGS.map((rate) => (
              <RatingButton
                key={rate.value}
                label={rate.label}
                isSelected={currentRating === rate.value}
                onClick={() => onRate(skill.id, rate.value as RatingValue)}
                colorClass={rate.color}
              />
            ))}
          </div>

          <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
            {type === 'exp' ? (
              <div>
                <div className="flex items-center gap-2 mb-4">
                   <div className="h-4 w-1 bg-indigo-500 rounded-full"></div>
                   <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Observable Behaviours</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {skill.subskills && skill.subskills.map((sub, idx) => (
                    <div key={idx} className="text-xs text-gray-600 flex items-start gap-3 leading-relaxed">
                      <div className="mt-1.5 w-1 h-1 bg-indigo-300 rounded-full flex-shrink-0" />
                      {sub}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-4">
                   <div className="h-4 w-1 bg-indigo-500 rounded-full"></div>
                   <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Proficiency Definitions</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['Basic', 'Intermediate', 'Advanced'].map((level) => (
                    <div 
                      key={level} 
                      onClick={() => onRate(skill.id, level.toLowerCase() as RatingValue)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        currentRating === level.toLowerCase() 
                          ? 'bg-white border-indigo-400 shadow-md ring-1 ring-indigo-50 scale-[1.02]' 
                          : 'bg-white border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-[10px] font-black uppercase tracking-widest ${
                          currentRating === level.toLowerCase() ? 'text-indigo-600' : 'text-gray-400'
                        }`}>
                          {level}
                        </span>
                        {currentRating === level.toLowerCase() && <CheckCircle size={14} className="text-indigo-600" />}
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed font-medium">
                        {skill.levels?.[level]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillRow;
