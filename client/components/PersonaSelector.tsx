// components/PersonaSelector.tsx
import React from 'react';
import '../src/app/globals.css'; // Ensure your global styles, Tailwind, and Inter font are set up

interface Props {
  persona: string;
  setPersona: (val: string) => void;
  customPrompt: string;
  setCustomPrompt: (val: string) => void;
}

export const PersonaSelector: React.FC<Props> = ({
  persona,
  setPersona,
  customPrompt,
  setCustomPrompt,
}) => {
  return (
    // The parent div in index.tsx already applies font-mono to this section
    <div className="space-y-4">
      {/* Select Persona Section */}
      <div>
        <label 
          htmlFor="persona-select" // Added htmlFor for accessibility
          className="block text-xs font-medium text-slate-600 mb-1" // Matches sidebar label style
        >
          Select Persona
        </label>
        <select
          id="persona-select" // Added id for accessibility
          className="w-full py-1.5 px-3 border border-slate-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-150 text-sm" // Changed to rounded-lg
          value={persona}
          onChange={(e) => setPersona(e.target.value)}
        >
          <option value="Friendly Assistant">Friendly Assistant</option>
          <option value="Sarcastic Expert">Sarcastic Expert</option>
          <option value="Emotional Mentor">Emotional Mentor</option>
          <option value="Stoic Analyst">Stoic Analyst</option>
          {/* Add more predefined personas or a "Custom" option if needed */}
        </select>
      </div>

      {/* Custom Pre-Prompt Section */}
      <div>
        <label 
          htmlFor="custom-prompt-textarea" // Added htmlFor for accessibility
          className="block text-xs font-medium text-slate-600 mb-1" // Matches sidebar label style
        >
          Custom Pre-Prompt (Optional)
        </label>
        <textarea
          id="custom-prompt-textarea" // Added id for accessibility
          className="w-full py-2 px-3 border border-slate-300 bg-white rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-150 text-sm min-h-[80px] max-h-[150px] resize-y" // Changed to rounded-xl
          placeholder="e.g., You are a humorous AI who likes puns..."
          value={customPrompt}
          onChange={(e) => setCustomPrompt(e.target.value)}
        />
      </div>
    </div>
  );
};
