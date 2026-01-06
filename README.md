Full stack Engineering Task
Async Screen-Recorded Coding Challenge

Overview
The goal of this task is to understand how you think, structure your code, and solve problems in a real-world scenario.
You are expected to record your screen while building the project from scratch, explaining your decisions as you go.

This is not a live interview and not a take-home with perfect results expected.
We care about your process, clarity, and ownership.

Task Description
Build a small frontend application that records user voice input and translates each spoken sentence using an AI API via a real-time connection.

High-level flow:
User starts voice recording
Spoken sentences are captured
Each sentence is sent to a backend via WebSocket / Socket.io
The backend makes a request to an AI API (e.g. OpenAI or any similar service, real or mocked)
The translated text is returned and displayed in the UI in real time
Technical Requirements
Frontend (Required)
React + TypeScript
Voice recording using Web APIs (MediaRecorder or Web Audio API)
Real-time communication using WebSocket or Socket.io
Clear and simple UI
Proper state management (React state, Context, Zustand, etc.)
Backend (Minimal)
Node.js backend (can be very minimal)
WebSocket / Socket.io server
Makes a request to an AI API or returns a mocked translation response
Note: The backend does not need to be production-ready.
The focus of this task is frontend engineering.

Recording Requirements (Very Important)
Record your screen and voice
Start recording before project setup
One continuous recording
Explain:
What you are doing
Why you are doing it
Any issues you encounter and how you solve them
If you don’t know something, say it out loud and show how you would find the answer.

Rules
Allowed
Google search
Official documentation
StackOverflow
AI tools as reference only
Not Allowed
Pre-written or prepared repositories
Copy-pasting full solutions
Generating the entire app using AI
Deliverables
Please submit:

GitHub repository with your code
Screen recording video (Google Drive / Loom / unlisted YouTube)
A short README.md explaining:
How to run the project
Any assumptions or trade-offs you made
Evaluation Criteria
Junior Level
Application works
Basic React and TypeScript usage
Simple real-time data flow
Clear verbal explanation
Mid Level
Clean project structure
Thoughtful state management
Error handling
Performance considerations
Ability to explain trade-offs and improvements
Notes
Perfection is not expected
We value clarity, learning ability, and ownership
Good luck — we’re excited to see how you think!