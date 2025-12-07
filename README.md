# Campus Connect — Starter Project

This is a lightweight frontend starter for *Campus Connect* (college dating prototype).

## What is included
- `index.html` — Homepage with gradient hero, features, and sign-up form
- `login.html` — Sign-in page
- `profile.html` — Simple user profile page (reads from Firestore)
- `swipe.html` — Basic browse UI (client-side demo)
- `chat.html` — Simple chat UI (client-side demo)
- `style.css` — Shared CSS with responsive styles and animations
- `firebase.js` — Firebase scaffold (replace config with your project keys)

## How to use
1. Open the folder in a static server (or VS Code Live Server) — open `index.html`.
2. To enable authentication & Firestore, create a Firebase project and replace the `firebaseConfig` object
   in `firebase.js` with your project's details.
3. In Firebase console, enable **Email/Password** authentication and create a Firestore database (start in test mode while developing).
4. This starter uses the compat SDK for simplicity. For production, migrate to modular SDK and secure Firestore rules.

## Notes & Next steps
- This project is a **frontend scaffold only**. The Firebase code is a basic example and **not production ready**.
- Passwords are stubbed for quick testing — implement proper signup with email verification, password creation, and domain enforcement for college emails.
- Add storage rules and security: require authentication for profile read/write and validate college email domain server-side.

## License
Use as you like. This starter is provided as-is for educational/demo purposes.
