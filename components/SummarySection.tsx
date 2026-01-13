
import React, { useMemo } from 'react';
import { 
  Copy,
  FileText,
  Star,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { RatingsMap, FocusAreasMap } from '../types';
import { RATINGS, TABS } from '../constants';

interface SummarySectionProps {
  ratings: RatingsMap;
  focusAreas: FocusAreasMap;
  totalSkills: number;
}

const SummarySection: React.FC<SummarySectionProps> = ({ ratings, focusAreas, totalSkills }) => {
  const counts = useMemo(() => {
    const c = { basic: 0, intermediate: 0, advanced: 0, na: 0, unrated: 0, focused: 0 };
    const ratedIds = Object.keys(ratings);
    
    // Check which ones are actually rated with a non-empty value
    const validRatings = ratedIds.filter(id => ratings[id] !== undefined);
    c.unrated = totalSkills - validRatings.length;
    
    validRatings.forEach(id => {
      const val = ratings[id];
      if (val && c[val as keyof typeof c] !== undefined) {
        (c[val as keyof typeof c] as number)++;
      }
    });
    
    c.focused = Object.values(focusAreas).filter(Boolean).length;
    
    return c;
  }, [ratings, focusAreas, totalSkills]);

  const copyToClipboard = () => {
    let text = `CAPABILITY MATRIX ASSESSMENT - ${new Date().toLocaleDateString()}\n`;
    text += `====================================================\n\n`;
    
    text += `OVERVIEW\n`;
    text += `----------------------------\n`;
    text += `Completion:   ${Math.round(((totalSkills - counts.unrated) / totalSkills) * 100)}%\n`;
    text += `Focus Areas:  ${counts.focused}\n`;
    text += `Advanced:     ${counts.advanced}\n`;
    text += `Intermediate: ${counts.intermediate}\n`;
    text += `Basic:        ${counts.basic}\n`;
    text += `N/A:          ${counts.na}\n\n`;

    text += `DETAILED BREAKDOWN (ALL SKILLS)\n`;
    text += `----------------------------\n`;
    text += `Category\tGroup\tSkill\tRating\tFocus Area\n`;

    TABS.forEach(tab => {
        tab.data.forEach(group => {
            group.skills.forEach(skill => {
              const ratingValue = ratings[skill.id];
              const ratingLabel = RATINGS.find(r => r.value === ratingValue)?.label || '-';
              const isFocused = focusAreas[skill.id] ? "YES" : "-";
              
              text += `${tab.label}\t${group.group}\t${skill.name}\t${ratingLabel}\t${isFocused}\n`;
            });
        });
    });

    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      alert("Results copied to clipboard!");
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    document.body.removeChild(textArea);
  };

  const exportToCSV = () => {
    const dateStr = new Date().toLocaleDateString();
    const completionPercent = totalSkills > 0 ? Math.round(((totalSkills - counts.unrated) / totalSkills) * 100) : 0;
    
    const headerLines = [
      [`CAPABILITY MATRIX ASSESSMENT - ${dateStr}`],
      [`====================================================`],
      [],
      [`OVERVIEW`],
      [`----------------------------`],
      [`Completion:   ${completionPercent}%`],
      [`Focus Areas:  ${counts.focused}`],
      [`Advanced:     ${counts.advanced}`],
      [`Intermediate: ${counts.intermediate}`],
      [`Basic:        ${counts.basic}`],
      [`N/A:          ${counts.na}`],
      [],
      [`DETAILED BREAKDOWN (ALL SKILLS)`],
      [`----------------------------`],
      []
    ];

    const tableHeaders = ['Category', 'Group', 'Skill', 'Rating', 'Focus Area'];
    const tableRows: string[][] = [];

    TABS.forEach(tab => {
      tab.data.forEach(group => {
        group.skills.forEach(skill => {
          const ratingValue = ratings[skill.id];
          const ratingLabel = RATINGS.find(r => r.value === ratingValue)?.label || '-';
          const isFocused = focusAreas[skill.id] ? "YES" : "-";
          
          tableRows.push([
            tab.label,
            group.group,
            skill.name,
            ratingLabel,
            isFocused
          ]);
        });
      });
    });

    const formatRow = (row: string[]) => row.map(val => `"${(val || '').toString().replace(/"/g, '""')}"`).join(',');

    const csvContent = [
      ...headerLines.map(line => formatRow(line)),
      formatRow(tableHeaders),
      ...tableRows.map(row => formatRow(row))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `capability_matrix_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const completionPercent = totalSkills > 0 ? Math.round(((totalSkills - counts.unrated) / totalSkills) * 100) : 0;

  return (
    <div className="bg-white rounded-[2rem] shadow-xl shadow-indigo-100/50 border border-gray-100 p-8 mb-8 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Layers className="text-indigo-600" size={20} />
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">Your Proficiency Profile</h2>
            </div>
            <p className="text-sm text-gray-500 font-medium">Quantify your design expertise and identify growth opportunities.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-indigo-600 border border-indigo-200 rounded-xl hover:bg-indigo-50 transition-all text-sm font-bold active:scale-95 shadow-sm"
            >
              <Copy size={16} />
              Copy Results
            </button>
            <button 
              onClick={exportToCSV}
              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 hover:shadow-lg transition-all text-sm font-bold active:scale-95 shadow-md shadow-indigo-200"
            >
              <FileText size={16} />
              Export to CSV
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatCard 
            label="Focus Areas" 
            value={counts.focused} 
            icon={<Star size={14} fill="currentColor" />} 
            color="bg-yellow-50 text-yellow-700 border-yellow-200" 
          />
          <StatCard 
            label="Basic" 
            value={counts.basic} 
            icon={<CheckCircle2 size={14} />} 
            color="bg-blue-50 text-blue-700 border-blue-100" 
          />
          <StatCard 
            label="Intermediate" 
            value={counts.intermediate} 
            icon={<CheckCircle2 size={14} />} 
            color="bg-indigo-50 text-indigo-700 border-indigo-100" 
          />
          <StatCard 
            label="Advanced" 
            value={counts.advanced} 
            icon={<CheckCircle2 size={14} />} 
            color="bg-purple-50 text-purple-700 border-purple-100" 
          />
          <StatCard 
            label="N/A" 
            value={counts.na} 
            icon={<CheckCircle2 size={14} />} 
            color="bg-gray-50 text-gray-500 border-gray-200" 
          />
          
          <div className="p-5 bg-white rounded-2xl border border-indigo-50 flex flex-col items-center justify-center relative overflow-hidden shadow-inner group">
            <span className="text-3xl font-black text-indigo-600 group-hover:scale-110 transition-transform">{completionPercent}%</span>
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">Completion</span>
            <div className="mt-3 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
               <div 
                 className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000" 
                 style={{ width: `${completionPercent}%` }}
               ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, icon, color }: { label: string, value: number, icon: React.ReactNode, color: string }) => (
  <div className={`p-5 rounded-2xl border flex flex-col items-center justify-center transition-all hover:scale-105 hover:shadow-md ${color}`}>
    <div className="flex items-center gap-1.5 mb-1 text-[9px] font-black uppercase tracking-widest opacity-80">
      {icon}
      {label}
    </div>
    <span className="text-3xl font-black leading-none">{value}</span>
  </div>
);

export default SummarySection;
