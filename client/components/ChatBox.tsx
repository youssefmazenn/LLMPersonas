// components/ChatBox.tsx
import React, { useState } from 'react';

interface Props {
  selectedModel: string;
  apiKey: string;
  persona: string;
  customPrompt: string;
}

export const ChatBox: React.FC<Props> = ({
  selectedModel,
  apiKey,
  persona,
  customPrompt,
}) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
  if (!input.trim()) return;

  setMessages((prev) => [...prev, `🧍 ${input}`, '🤖 ...']);

  const res = await fetch('http://localhost:8000/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: input,
      model: selectedModel,
      persona,
      custom_prompt: customPrompt,
    }),
  });

  const data = await res.json();

  if (data.response) {
    setMessages((prev) => [...prev.slice(0, -1), `🤖 ${data.response}`]);
  } else {
    setMessages((prev) => [...prev.slice(0, -1), `🤖 Error: ${data.error || 'No response from model.'}`]);
  }

  setInput('');
};

  return (
    <div className="flex flex-col h-full bg-zinc-900 text-white p-0 overflow-hidden">
      {/* Chat History */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((msg, idx) => {
          const isUser = msg.startsWith('🧍');
          const text = msg.replace(/^🧍 |^🤖 /, '');

          return (
            <div
              key={idx}
              className={`w-full flex ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`px-4 py-3 max-w-[75%] whitespace-pre-line text-sm leading-relaxed ${
                  isUser
                    ? 'bg-gray-700 rounded-lg rounded-br-none'
                    : 'bg-gray-800 rounded-lg rounded-bl-none'
                }`}
              >
                {text}
              </div>
            </div>
          );
        })}
      </div>

      {/* Input Area */}
      <div className="bg-black p-4 border-t border-zinc-800">
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Send a message..."
            className="flex-1 p-4 rounded-md bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-white hover:bg-slate-100 text-black font-semibold px-5 py-2.5 rounded-md transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};