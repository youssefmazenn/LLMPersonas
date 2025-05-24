module.exports = {

"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}}),
"[project]/components/PersonaSelector.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// components/PersonaSelector.tsx
__turbopack_context__.s({
    "PersonaSelector": (()=>PersonaSelector)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
;
const PersonaSelector = ({ persona, setPersona, customPrompt, setCustomPrompt })=>{
    return(// The parent div in index.tsx already applies font-mono to this section
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                        htmlFor: "persona-select" // Added htmlFor for accessibility
                        ,
                        className: "block text-xs font-medium text-slate-600 mb-1" // Matches sidebar label style
                        ,
                        children: "Select Persona"
                    }, void 0, false, {
                        fileName: "[project]/components/PersonaSelector.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                        id: "persona-select" // Added id for accessibility
                        ,
                        className: "w-full py-1.5 px-3 border border-slate-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-150 text-sm" // Changed to rounded-lg
                        ,
                        value: persona,
                        onChange: (e)=>setPersona(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                value: "Friendly Assistant",
                                children: "Friendly Assistant"
                            }, void 0, false, {
                                fileName: "[project]/components/PersonaSelector.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                value: "Sarcastic Expert",
                                children: "Sarcastic Expert"
                            }, void 0, false, {
                                fileName: "[project]/components/PersonaSelector.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                value: "Emotional Mentor",
                                children: "Emotional Mentor"
                            }, void 0, false, {
                                fileName: "[project]/components/PersonaSelector.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                value: "Stoic Analyst",
                                children: "Stoic Analyst"
                            }, void 0, false, {
                                fileName: "[project]/components/PersonaSelector.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PersonaSelector.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PersonaSelector.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                        htmlFor: "custom-prompt-textarea" // Added htmlFor for accessibility
                        ,
                        className: "block text-xs font-medium text-slate-600 mb-1" // Matches sidebar label style
                        ,
                        children: "Custom Pre-Prompt (Optional)"
                    }, void 0, false, {
                        fileName: "[project]/components/PersonaSelector.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                        id: "custom-prompt-textarea" // Added id for accessibility
                        ,
                        className: "w-full py-2 px-3 border border-slate-300 bg-white rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-150 text-sm min-h-[80px] max-h-[150px] resize-y" // Changed to rounded-xl
                        ,
                        placeholder: "e.g., You are a humorous AI who likes puns...",
                        value: customPrompt,
                        onChange: (e)=>setCustomPrompt(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/components/PersonaSelector.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PersonaSelector.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PersonaSelector.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this));
};
}}),
"[project]/components/ChatBox.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// components/ChatBox.tsx
__turbopack_context__.s({
    "ChatBox": (()=>ChatBox)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$up$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-arrow-up.js [ssr] (ecmascript) <export default as ArrowUpCircle>"); // For icons
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [ssr] (ecmascript) <export default as Brain>");
;
;
;
// Gemini-style ChatInput component
const ChatInput = ({ onSendMessage, isLoading })=>{
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const handleInputChange = (event)=>{
        setInputValue(event.target.value);
        // Auto-resize textarea height
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'; // Reset height
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scroll height
        }
    };
    const handleSend = ()=>{
        if (inputValue.trim() && !isLoading) {
            onSendMessage(inputValue.trim());
            setInputValue('');
            if (textareaRef.current) {
                textareaRef.current.style.height = 'auto';
            }
        }
    };
    const handleKeyDown = (event)=>{
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSend();
        }
    };
    return(// This is the bar at the bottom of the chat, containing the input pill. Flex to center the pill.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "p-3 sm:p-4 bg-white border-t border-slate-200 flex justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex items-end gap-2 p-3 sm:p-3.5 bg-white border border-slate-300 rounded-3xl focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-shadow w-full max-w-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                    ref: textareaRef,
                    rows: 1,
                    className: "flex-1 py-3.5 px-3 bg-transparent border-none focus:ring-0 resize-none overflow-y-auto text-sm text-slate-800 placeholder-slate-500 max-h-48" // Text color to slate-800, placeholder to slate-500
                    ,
                    placeholder: "Enter your message...",
                    value: inputValue,
                    onChange: handleInputChange,
                    onKeyDown: handleKeyDown,
                    disabled: isLoading
                }, void 0, false, {
                    fileName: "[project]/components/ChatBox.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    onClick: handleSend,
                    disabled: !inputValue.trim() || isLoading,
                    className: `p-2 rounded-full transition-colors duration-150 ease-in-out
                      ${inputValue.trim() && !isLoading ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`,
                    "aria-label": "Send message",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$up$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpCircle$3e$__["ArrowUpCircle"], {
                        size: 22
                    }, void 0, false, {
                        fileName: "[project]/components/ChatBox.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ChatBox.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ChatBox.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ChatBox.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this));
};
const ChatBox = ({ selectedModel, apiKey, persona, customPrompt })=>{
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        messages
    ]);
    const handleSendMessageFromChatBox = async (messageToSend)=>{
        if (!messageToSend.trim()) return;
        setIsLoading(true);
        const userMessage = {
            id: Date.now().toString() + '-user',
            text: messageToSend,
            sender: 'user'
        };
        const thinkingMessage = {
            id: Date.now().toString() + '-thinking',
            text: 'Thinking...',
            sender: 'ai',
            modelUsed: selectedModel
        };
        setMessages((prevMessages)=>[
                ...prevMessages,
                userMessage,
                thinkingMessage
            ]);
        try {
            const res = await fetch('http://localhost:8000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: messageToSend,
                    model: selectedModel,
                    api_key: apiKey,
                    persona,
                    custom_prompt: customPrompt
                })
            });
            if (!res.ok) {
                let errorText = `Error: ${res.status} ${res.statusText}`;
                try {
                    const errorData = await res.json();
                    errorText = errorData.detail || errorData.error || errorText;
                } catch (e) {}
                setMessages((prevMessages)=>prevMessages.map((msg)=>msg.id === thinkingMessage.id ? {
                            ...msg,
                            text: errorText,
                            sender: 'error'
                        } : msg));
                setIsLoading(false);
                return;
            }
            const data = await res.json();
            setMessages((prevMessages)=>prevMessages.map((msg)=>msg.id === thinkingMessage.id ? {
                        ...msg,
                        text: data.response || 'Received an empty response.',
                        sender: 'ai'
                    } : msg));
        } catch (error) {
            console.error("Chat API call failed:", error);
            setMessages((prevMessages)=>prevMessages.map((msg)=>msg.id === thinkingMessage.id ? {
                        ...msg,
                        text: 'Network error. Could not reach the server.',
                        sender: 'error'
                    } : msg));
        } finally{
            setIsLoading(false);
        }
    };
    // Welcome message component
    const WelcomeMessage = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center h-full text-center p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-full mb-6 shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                        size: 48,
                        className: "text-white"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatBox.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ChatBox.tsx",
                    lineNumber: 173,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-semibold text-slate-700 mb-2",
                    children: "Hello!"
                }, void 0, false, {
                    fileName: "[project]/components/ChatBox.tsx",
                    lineNumber: 176,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-slate-500 max-w-md",
                    children: "I'm your LLM Persona Tester. How can I help you today? Select a model and persona from the sidebar to get started."
                }, void 0, false, {
                    fileName: "[project]/components/ChatBox.tsx",
                    lineNumber: 177,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ChatBox.tsx",
            lineNumber: 172,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-slate-50 overflow-hidden",
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex-1 p-4 sm:p-6 space-y-4 overflow-y-auto",
                children: [
                    messages.length === 0 && !isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(WelcomeMessage, {}, void 0, false, {
                        fileName: "[project]/components/ChatBox.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this) : messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: `flex items-end max-w-xl lg:max-w-2xl xl:max-w-3xl
                          ${msg.sender === 'user' ? 'ml-auto justify-end' : 'mr-auto justify-start'}`,
                            children: [
                                msg.sender !== 'user' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: `flex-shrink-0 w-8 h-8 rounded-full mr-2.5 mb-1 flex items-center justify-center
                                ${msg.sender === 'ai' ? 'bg-indigo-500' : 'bg-red-500'}`,
                                    children: [
                                        msg.sender === 'ai' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                            size: 16,
                                            className: "text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatBox.tsx",
                                            lineNumber: 201,
                                            columnNumber: 42
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            size: 16,
                                            className: "text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatBox.tsx",
                                            lineNumber: 201,
                                            columnNumber: 87
                                        }, this),
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChatBox.tsx",
                                    lineNumber: 199,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: `p-3 rounded-2xl break-words whitespace-pre-wrap text-sm shadow-sm
                            ${msg.sender === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : msg.sender === 'ai' ? 'bg-white text-slate-800 border border-slate-200 rounded-bl-none' : 'bg-red-100 text-red-700 border border-red-200 rounded-bl-none' // Error style
                                    }`,
                                    children: [
                                        msg.sender === 'ai' && msg.modelUsed && msg.text !== "Thinking..." && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-indigo-400 font-medium mb-1",
                                            children: msg.modelUsed
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatBox.tsx",
                                            lineNumber: 217,
                                            columnNumber: 19
                                        }, this),
                                        msg.text
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChatBox.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, msg.id, true, {
                            fileName: "[project]/components/ChatBox.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/components/ChatBox.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatBox.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ChatInput, {
                onSendMessage: handleSendMessageFromChatBox,
                isLoading: isLoading
            }, void 0, false, {
                fileName: "[project]/components/ChatBox.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatBox.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
};
}}),
"[project]/utils/api.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "pingBackend": (()=>pingBackend)
});
async function pingBackend() {
    const res = await fetch('http://localhost:8000/');
    if (!res.ok) throw new Error('Backend not reachable');
    return await res.json();
}
}}),
"[project]/pages/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// pages/index.tsx
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left.js [ssr] (ecmascript) <export default as PanelLeft>"); // Icons for sidebar toggle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-right.js [ssr] (ecmascript) <export default as PanelRight>");
// Make sure these paths are correct for your project structure
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PersonaSelector$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PersonaSelector.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatBox$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatBox.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/api.ts [ssr] (ecmascript)");
;
;
;
;
;
;
;
function Home() {
    const [selectedModel, setSelectedModel] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('gpt-4');
    const [apiKey, setApiKey] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [persona, setPersona] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('Friendly Assistant');
    const [customPrompt, setCustomPrompt] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true); // State for sidebar visibility
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // This effect remains unchanged
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["pingBackend"])().then((data)=>console.log('✅ Backend says:', data)).catch((err)=>console.error('❌ Backend error:', err));
    }, []);
    return(// Overall page container: Full height, flex layout, light gray background, Inter font
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "flex h-screen antialiased text-slate-800 bg-slate-100 font-inter",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("aside", {
                className: `flex-shrink-0 bg-white border-r border-slate-200 flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-[320px]' : 'w-[70px]'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: `p-4 flex items-center ${isSidebarOpen ? 'justify-between' : 'justify-center'} border-b border-slate-200 h-[65px] flex-shrink-0`,
                        children: [
                            isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-semibold text-slate-900 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        role: "img",
                                        "aria-label": "brain emoji",
                                        className: "mr-2 text-2xl",
                                        children: "🧠"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    "LLM Persona Tester"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsSidebarOpen(!isSidebarOpen),
                                className: `p-2 rounded-md hover:bg-slate-100 text-slate-600 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isSidebarOpen ? '' : 'mx-auto'}`,
                                "aria-label": isSidebarOpen ? "Collapse sidebar" : "Expand sidebar",
                                children: isSidebarOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__["PanelLeft"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.tsx",
                                    lineNumber: 47,
                                    columnNumber: 30
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelRight$3e$__["PanelRight"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.tsx",
                                    lineNumber: 47,
                                    columnNumber: 56
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: `flex-grow flex flex-col space-y-5 overflow-y-auto font-mono 
                      ${isSidebarOpen ? 'p-6 opacity-100' : 'p-0 opacity-0 pointer-events-none h-0'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        htmlFor: "model-select",
                                        className: "block text-xs font-medium text-slate-600 mb-1",
                                        children: "Model"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                        id: "model-select",
                                        className: "w-full py-1.5 px-3 border border-slate-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-150 text-sm",
                                        value: selectedModel,
                                        onChange: (e)=>setSelectedModel(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "gpt-4",
                                                children: "GPT-4"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.tsx",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "claude-3",
                                                children: "Claude 3"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.tsx",
                                                lineNumber: 68,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "gemini",
                                                children: "Gemini"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "llama3",
                                                children: "LLaMA 3"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.tsx",
                                                lineNumber: 70,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        htmlFor: "api-key-input",
                                        className: "block text-xs font-medium text-slate-600 mb-1",
                                        children: "API Key"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        id: "api-key-input",
                                        type: "password" // Good practice for API keys
                                        ,
                                        className: "w-full py-2.5 px-3 border border-slate-300 bg-white rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-150 text-sm text-slate-800" // Increased py padding, explicit text color
                                        ,
                                        value: apiKey,
                                        onChange: (e)=>setApiKey(e.target.value),
                                        placeholder: "Enter your API key"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-3 rounded-md shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-150 ease-in-out text-sm",
                                children: "Save API Key"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("hr", {
                                className: "border-slate-200 !my-4"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                className: "flex flex-col space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "text-sm font-semibold text-slate-700 mb-1",
                                        children: "Configure Persona"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PersonaSelector$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["PersonaSelector"], {
                                        persona: persona,
                                        setPersona: setPersona,
                                        customPrompt: customPrompt,
                                        setCustomPrompt: setCustomPrompt
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col bg-slate-50 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatBox$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ChatBox"], {
                    selectedModel: selectedModel,
                    apiKey: apiKey,
                    persona: persona,
                    customPrompt: customPrompt
                }, void 0, false, {
                    fileName: "[project]/pages/index.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this));
}
}}),
"[project]/node_modules/next/dist/esm/server/route-modules/pages/module.compiled.js [ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time truthy", 1) {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/pages-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-turbo.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    } else {
        "TURBOPACK unreachable";
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/esm/server/route-kind.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RouteKind": (()=>RouteKind)
});
var RouteKind = /*#__PURE__*/ function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `IMAGE` represents all the images that are generated by `next/image`.
   */ RouteKind["IMAGE"] = "IMAGE";
    return RouteKind;
}({}); //# sourceMappingURL=route-kind.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/helpers.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ __turbopack_context__.s({
    "hoist": (()=>hoist)
});
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ('then' in module && typeof module.then === 'function') {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === 'function' && name === 'default') {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
} //# sourceMappingURL=helpers.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "hasA11yProp": (()=>hasA11yProp),
    "mergeClasses": (()=>mergeClasses),
    "toCamelCase": (()=>toCamelCase),
    "toKebabCase": (()=>toKebabCase),
    "toPascalCase": (()=>toPascalCase)
});
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>defaultAttributes)
});
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/Icon.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>Icon)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>createLucideIcon)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.js [ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/panel-left.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>PanelLeft)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }
    ],
    [
        "path",
        {
            d: "M9 3v18",
            key: "fh3hqa"
        }
    ]
];
const PanelLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("panel-left", __iconNode);
;
 //# sourceMappingURL=panel-left.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/panel-left.js [ssr] (ecmascript) <export default as PanelLeft>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PanelLeft": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left.js [ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/panel-right.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>PanelRight)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }
    ],
    [
        "path",
        {
            d: "M15 3v18",
            key: "14nvp0"
        }
    ]
];
const PanelRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("panel-right", __iconNode);
;
 //# sourceMappingURL=panel-right.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/panel-right.js [ssr] (ecmascript) <export default as PanelRight>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PanelRight": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-right.js [ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-arrow-up.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>CircleArrowUp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m16 12-4-4-4 4",
            key: "177agl"
        }
    ],
    [
        "path",
        {
            d: "M12 16V8",
            key: "1sbj14"
        }
    ]
];
const CircleArrowUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("circle-arrow-up", __iconNode);
;
 //# sourceMappingURL=circle-arrow-up.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-arrow-up.js [ssr] (ecmascript) <export default as ArrowUpCircle>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ArrowUpCircle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$up$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$up$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-arrow-up.js [ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/user.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>User)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }
    ]
];
const User = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("user", __iconNode);
;
 //# sourceMappingURL=user.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/user.js [ssr] (ecmascript) <export default as User>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "User": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/brain.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Brain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
            key: "l5xja"
        }
    ],
    [
        "path",
        {
            d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
            key: "ep3f8r"
        }
    ],
    [
        "path",
        {
            d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
            key: "1p4c4q"
        }
    ],
    [
        "path",
        {
            d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
            key: "tmeiqw"
        }
    ],
    [
        "path",
        {
            d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
            key: "105sqy"
        }
    ],
    [
        "path",
        {
            d: "M3.477 10.896a4 4 0 0 1 .585-.396",
            key: "ql3yin"
        }
    ],
    [
        "path",
        {
            d: "M19.938 10.5a4 4 0 0 1 .585.396",
            key: "1qfode"
        }
    ],
    [
        "path",
        {
            d: "M6 18a4 4 0 0 1-1.967-.516",
            key: "2e4loj"
        }
    ],
    [
        "path",
        {
            d: "M19.967 17.484A4 4 0 0 1 18 18",
            key: "159ez6"
        }
    ]
];
const Brain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("brain", __iconNode);
;
 //# sourceMappingURL=brain.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/brain.js [ssr] (ecmascript) <export default as Brain>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Brain": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [ssr] (ecmascript)");
}}),
"[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/pages/index.tsx [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/node_modules/next/document.js [ssr] (ecmascript)\", INNER_APP => \"[project]/node_modules/next/app.js [ssr] (ecmascript)\" } [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "default": (()=>__TURBOPACK__default__export__),
    "getServerSideProps": (()=>getServerSideProps),
    "getStaticPaths": (()=>getStaticPaths),
    "getStaticProps": (()=>getStaticProps),
    "reportWebVitals": (()=>reportWebVitals),
    "routeModule": (()=>routeModule),
    "unstable_getServerProps": (()=>unstable_getServerProps),
    "unstable_getServerSideProps": (()=>unstable_getServerSideProps),
    "unstable_getStaticParams": (()=>unstable_getStaticParams),
    "unstable_getStaticPaths": (()=>unstable_getStaticPaths),
    "unstable_getStaticProps": (()=>unstable_getStaticProps)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2f$module$2e$compiled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/pages/module.compiled.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/build/templates/helpers.js [ssr] (ecmascript)");
// Import the app and document modules.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/document.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$app$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/app.js [ssr] (ecmascript)");
// Import the userland code.
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pages/index.tsx [ssr] (ecmascript)");
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'default');
const getStaticProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'getStaticProps');
const getStaticPaths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'getStaticPaths');
const getServerSideProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'getServerSideProps');
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'config');
const reportWebVitals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'reportWebVitals');
const unstable_getStaticProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'unstable_getStaticParams');
const unstable_getServerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'unstable_getServerSideProps');
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2f$module$2e$compiled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["PagesRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["RouteKind"].PAGES,
        page: "/index",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    components: {
        // default export might not exist when optimized for data only
        App: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$app$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        Document: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    },
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
}); //# sourceMappingURL=pages.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__f546aebe._.js.map