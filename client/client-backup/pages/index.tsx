// pages/index.tsx
import '../src/app/globals.css';
import { useState, useEffect } from 'react';
import { PanelLeft, PanelRight } from 'lucide-react';
import { PersonaSelector } from '../components/PersonaSelector';
import { ChatBox } from '../components/ChatBox';
import { pingBackend } from '../utils/api';

export default function Home() {
  const [selectedModel, setSelectedModel] = useState('gpt-4');
  const [persona, setPersona] = useState('Friendly Assistant');
  const [customPrompt, setCustomPrompt] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

 
  return (
    <div className="flex h-screen antialiased text-slate-800 bg-slate-100 font-inter">
      <aside 
        className={`flex-shrink-0 bg-white border-r border-slate-200 flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-[320px]' : 'w-[70px]'}`}
      >
        <div className={`p-4 flex items-center ${isSidebarOpen ? 'justify-between' : 'justify-center'} border-b border-slate-200 h-[65px] flex-shrink-0`}>
          {isSidebarOpen && (
            <h1 className="text-xl font-semibold text-slate-900 flex items-center">
              <span role="img" aria-label="brain emoji" className="mr-2 text-2xl">🧠</span>
              LLM Persona Tester
            </h1>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`p-2 rounded-md hover:bg-slate-100 text-slate-600 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isSidebarOpen ? '' : 'mx-auto'}`}
            aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isSidebarOpen ? <PanelLeft size={20} /> : <PanelRight size={20} />}
          </button>
        </div>

        <div 
          className={`flex-grow flex flex-col space-y-5 overflow-y-auto font-mono 
                      ${isSidebarOpen ? 'p-6 opacity-100' : 'p-0 opacity-0 pointer-events-none h-0'}`}
        >
          <section>
            <label htmlFor="model-select" className="block text-xs font-medium text-slate-600 mb-1">
              Model
            </label>
            <select
              id="model-select"
              className="w-full py-1.5 px-3 border border-slate-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-150 text-sm"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            >
              <option value="gpt-4">GPT-4</option>
              <option value="claude-3">Claude 3</option>
              <option value="gemini">Gemini</option>
              <option value="llama3">LLaMA 3</option>
            </select>
          </section>

          <hr className="border-slate-200 !my-4" /> 

          <section className="flex flex-col space-y-2">
            <h2 className="text-sm font-semibold text-slate-700 mb-1"> 
              Configure Persona
            </h2>
            <PersonaSelector
              persona={persona}
              setPersona={setPersona}
              customPrompt={customPrompt}
              setCustomPrompt={setCustomPrompt}
            />
          </section>
        </div>
      </aside>

      <main className="flex-1 flex flex-col bg-slate-50 overflow-hidden">
        <ChatBox
          selectedModel={selectedModel}
          apiKey={''} // Removed usage; not needed anymore
          persona={persona}
          customPrompt={customPrompt}
        />
      </main>
    </div>
  );
}