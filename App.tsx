
import React, { useState, useMemo, useEffect } from 'react';
import { 
  BarChart2, 
  Search,
  PenTool
} from 'lucide-react';
import { TABS } from './constants';
import { RatingsMap, FocusAreasMap, RatingValue } from './types';
import SkillRow from './components/SkillRow';
import SummarySection from './components/SummarySection';

export default function App() {
  // Filter tabs to only show those that have at least one skill across all their groups
  const visibleTabs = useMemo(() => {
    return TABS.filter(tab => 
      tab.data.some(group => group.skills.length > 0)
    );
  }, []);

  const [activeTabId, setActiveTabId] = useState(() => {
    // Default to the first visible tab if available
    return visibleTabs.length > 0 ? visibleTabs[0].id : 'experience';
  });
  
  const [ratings, setRatings] = useState<RatingsMap>(() => {
    const saved = localStorage.getItem('matrix_ratings');
    try {
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [focusAreas, setFocusAreas] = useState<FocusAreasMap>(() => {
    const saved = localStorage.getItem('matrix_focus');
    try {
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Persist state to local storage via effects to ensure state is the source of truth
  useEffect(() => {
    localStorage.setItem('matrix_ratings', JSON.stringify(ratings));
  }, [ratings]);

  useEffect(() => {
    localStorage.setItem('matrix_focus', JSON.stringify(focusAreas));
  }, [focusAreas]);

  const handleRate = (skillId: string, rating: RatingValue) => {
    setRatings(prev => ({
      ...prev,
      [skillId]: prev[skillId] === rating ? undefined : rating
    }));
  };

  const handleToggleFocus = (skillId: string) => {
    setFocusAreas(prev => ({
      ...prev,
      [skillId]: !prev[skillId]
    }));
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to clear all ratings and focus areas? This will reset your entire assessment.")) {
      setRatings({});
      setFocusAreas({});
    }
  };

  // Calculate total skills across all tabs (even hidden ones, for data integrity)
  const totalSkills = useMemo(() => {
    return TABS.reduce((acc, tab) => {
      const tabSkillsCount = tab.data.reduce((gAcc, group) => gAcc + group.skills.length, 0);
      return acc + tabSkillsCount;
    }, 0);
  }, []);

  const activeTab = useMemo(() => {
    return visibleTabs.find(t => t.id === activeTabId) || visibleTabs[0] || TABS[0];
  }, [activeTabId, visibleTabs]);

  // Filtering logic
  const filteredData = useMemo(() => {
    if (!activeTab || !activeTab.data) return [];
    if (!searchQuery.trim()) return activeTab.data;
    const query = searchQuery.toLowerCase();
    return activeTab.data.map(group => ({
      ...group,
      skills: group.skills.filter(s => 
        s.name.toLowerCase().includes(query) || 
        s.subskills?.some(sub => sub.toLowerCase().includes(query))
      )
    })).filter(group => group.skills.length > 0);
  }, [activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-100 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
              <BarChart2 size={24} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 tracking-tight leading-none">Design Capability Matrix</h1>
              <p className="text-[10px] uppercase font-bold text-indigo-500 tracking-wider mt-1">v2.1 Build • Jan 2026</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 w-48 transition-all"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        
        <SummarySection 
            ratings={ratings} 
            focusAreas={focusAreas}
            totalSkills={totalSkills} 
        />

        {/* Tab Navigation */}
        <div className="sticky top-[64px] z-20 bg-gray-50/95 backdrop-blur-sm py-4">
          <div className="flex overflow-x-auto gap-2 no-scrollbar px-1">
            {visibleTabs.map((tab) => {
              const Icon = tab.icon;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTabId(tab.id);
                    setSearchQuery('');
                  }}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all border relative
                    ${activeTabId === tab.id 
                      ? 'bg-white text-indigo-700 border-indigo-200 shadow-sm ring-1 ring-indigo-100' 
                      : 'bg-white/50 text-gray-500 border-gray-200 hover:bg-white hover:border-gray-300'}
                  `}
                >
                  <Icon size={18} className={activeTabId === tab.id ? 'text-indigo-600' : 'text-gray-400'} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-10 min-h-[400px] mt-4">
          {filteredData.length > 0 ? (
            filteredData.map((group, idx) => (
              <div key={idx} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {group.group}
                  </h2>
                  <div className="h-px bg-gray-200 flex-1"></div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {group.skills.map(skill => (
                    <SkillRow 
                      key={skill.id} 
                      skill={skill} 
                      ratings={ratings} 
                      onRate={handleRate} 
                      type={activeTab.type}
                      isFocused={focusAreas[skill.id]}
                      onToggleFocus={handleToggleFocus}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-200 shadow-sm">
              <div className="mx-auto w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 text-gray-300">
                <PenTool size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">No skills found</h3>
              <p className="mt-2 text-gray-500 max-w-xs mx-auto text-sm">
                {searchQuery 
                  ? `We couldn't find anything matching "${searchQuery}" in this category.` 
                  : `Specific skills for this discipline have not been defined in the current matrix version.`}
              </p>
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-6 text-indigo-600 font-semibold text-sm hover:underline"
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
