# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# from dotenv import load_dotenv
# from openai import OpenAI
# import google.generativeai as genai
# import anthropic
# import os
# from datetime import datetime


# # Load .env
# load_dotenv()
# openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
# genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
# claude_client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))


# LOG_DIR = "logs"
# os.makedirs(LOG_DIR, exist_ok=True)

# SESSION_ID = None
# LOG_FILE = None
# log_initialized = False  # NEW: track if header has been written



# # Create logs folder
# LOG_DIR = "logs"
# os.makedirs(LOG_DIR, exist_ok=True)

# # Session-wide log filename
# SESSION_ID = datetime.now().strftime("%Y%m%d_%H%M%S")
# LOG_FILE = os.path.join(LOG_DIR, f"session_{SESSION_ID}.txt")

# # Default persona
# DEFAULT_PERSONA = "Friendly Assistant"

# # Supported model identifiers
# MODEL_NAMES = {
#     "gpt-4": "gpt-4",
#     "gemini": "models/gemini-1.5-pro-latest",
#     "claude": "claude-3-haiku-20240307"
# }

# # Write pre-prompts at the beginning of the file
# with open(LOG_FILE, "w", encoding="utf-8") as f:
#     f.write(f"--- Session Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')} ---\n\n")
#     f.write("[Model Preprompts]\n")
#     for label, model_id in MODEL_NAMES.items():
#         f.write(f"{model_id}: You are a {DEFAULT_PERSONA}.\n")
#     f.write("\n----------------------------------------\n\n")

# # FastAPI setup
# app = FastAPI()
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class ChatRequest(BaseModel):
#     message: str
#     model: str
#     persona: str
#     custom_prompt: str

# def resolve_claude_model(model: str) -> str:
#     if model.lower() in ["claude", "claude-3"]:
#         return "claude-3-haiku-20240307"
#     return model


# @app.post("/chat")
# async def chat(req: ChatRequest):
#     global SESSION_ID, LOG_FILE, log_initialized

#     prompt = req.custom_prompt or f"You are a {req.persona}."
#     model_name = req.model
#     reply = ""

#     try:
#         # ✅ If this is the first chat of the session, initialize log
#         if not log_initialized:
#             SESSION_ID = datetime.now().strftime("%Y%m%d_%H%M%S")
#             LOG_FILE = os.path.join(LOG_DIR, f"session_{SESSION_ID}.txt")
#             with open(LOG_FILE, "w", encoding="utf-8") as f:
#                 f.write(f"--- Session Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')} ---\n\n")
#                 f.write(f"[Preprompt used for all models]:\n{prompt}\n\n")
#                 f.write("----------------------------------------\n\n")
#             log_initialized = True

#         # === Model logic (OpenAI, Claude, Gemini) ===
#         if model_name.lower() == "gemini":
#             model = genai.GenerativeModel("models/gemini-1.5-pro-latest")
#             response = model.generate_content(
#                 [prompt, req.message],
#                 generation_config={"temperature": 0.7, "max_output_tokens": 500}
#             )
#             reply = response.text.strip()

#         elif model_name.lower().startswith("claude"):
#             model_name = resolve_claude_model(model_name)
#             response = claude_client.messages.create(
#                 model=model_name,
#                 max_tokens=1000,
#                 temperature=0.7,
#                 system=prompt,
#                 messages=[{"role": "user", "content": req.message}]
#             )
#             reply = response.content[0].text.strip()

#         else:
#             messages = [
#                 {"role": "system", "content": prompt},
#                 {"role": "user", "content": req.message}
#             ]
#             response = openai_client.chat.completions.create(
#                 model=model_name,
#                 messages=messages,
#                 temperature=0.7,
#                 max_tokens=500
#             )
#             reply = response.choices[0].message.content.strip()

#         # ✅ Log the conversation turn
#         with open(LOG_FILE, "a", encoding="utf-8") as f:
#             f.write(f"user: {req.message}\n")
#             f.write(f"{model_name}: {reply}\n\n")

#         return {"response": reply}

#     except Exception as e:
#         return {"error": str(e)}


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from openai import OpenAI
import google.generativeai as genai
import anthropic
import os
from datetime import datetime

# Load environment variables
load_dotenv()
openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
claude_client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

# Set up logging
LOG_DIR = "logs"
os.makedirs(LOG_DIR, exist_ok=True)
SESSION_ID = None
LOG_FILE = None
log_initialized = False

# Conversation history per model
conversation_histories = {
    "gpt-4": [],
    "gemini": [],
    "claude-3-haiku-20240307": []
}

# FastAPI app setup
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str
    model: str
    persona: str
    custom_prompt: str

def resolve_claude_model(model: str) -> str:
    if model.lower() in ["claude", "claude-3"]:
        return "claude-3-haiku-20240307"
    return model

@app.post("/chat")
async def chat(req: ChatRequest):
    global SESSION_ID, LOG_FILE, log_initialized, conversation_histories

    prompt = req.custom_prompt or f"You are a {req.persona}."
    model_name = resolve_claude_model(req.model)
    reply = ""

    try:
        # Initialize log
        if not log_initialized:
            SESSION_ID = datetime.now().strftime("%Y%m%d_%H%M%S")
            LOG_FILE = os.path.join(LOG_DIR, f"session_{SESSION_ID}.txt")
            with open(LOG_FILE, "w", encoding="utf-8") as f:
                f.write(f"--- Session Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')} ---\n\n")
                f.write(f"[Preprompt used for all models]:\n{prompt}\n\n")
                f.write("----------------------------------------\n\n")
            log_initialized = True

        # Get history specific to this model
        history = conversation_histories.get(model_name, [])
        history.append({"role": "user", "content": req.message})

        # Generate response
        if model_name == "gemini":
            flat_history = [prompt] + [entry["content"] for entry in history]
            model = genai.GenerativeModel("models/gemini-1.5-pro-latest")
            response = model.generate_content(
                flat_history,
                generation_config={"temperature": 0.7, "max_output_tokens": 500}
            )
            reply = response.text.strip()

        elif model_name.startswith("claude"):
            response = claude_client.messages.create(
                model=model_name,
                max_tokens=1000,
                temperature=0.7,
                system=prompt,
                messages=history
            )
            reply = response.content[0].text.strip()

        else:
            messages = [{"role": "system", "content": prompt}] + history
            response = openai_client.chat.completions.create(
                model=model_name,
                messages=messages,
                temperature=0.7,
                max_tokens=500
            )
            reply = response.choices[0].message.content.strip()

        # Append assistant reply and update model's history
        history.append({"role": "assistant", "content": reply})
        conversation_histories[model_name] = history

        # Log the exchange
        with open(LOG_FILE, "a", encoding="utf-8") as f:
            f.write(f"user: {req.message}\n")
            f.write(f"{model_name}: {reply}\n\n")

        return {"response": reply}

    except Exception as e:
        return {"error": str(e)}