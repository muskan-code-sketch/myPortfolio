# Muskan Chauhan — Portfolio

A premium, dark-themed personal portfolio for an AI/ML & Data Science student, built with React, Vite, and Tailwind CSS. Features a floating **Ask Muskan** AI chatbot that answers visitor questions strictly from a structured knowledge base — no hallucinated facts.

Everything on the site is sourced from the resume provided, plus the Maruti Suzuki (MSIL) internship added explicitly. Nothing else was invented. A few fields (GitHub, LinkedIn, project demo/repo links) are left as clearly marked placeholders for you to fill in.

---

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 2. Where to edit your information

Everything on the site — hero copy, education, experience, projects, skills, certifications, contact links — comes from **one file**:

```
src/data/portfolioData.js
```

Edit the values there and every section (plus the chatbot) updates automatically. You don't need to touch any component file to change content.

## 3. Where to add GitHub / LinkedIn / project URLs

Open `src/data/portfolioData.js` and fill in these fields (currently empty strings marked `PLACEHOLDER`):

- `personalInfo.links.linkedin` — your LinkedIn profile URL
- `personalInfo.links.github` — your GitHub profile URL
- `personalInfo.links.resumeFile` — points to `/resume.pdf` by default; drop your actual resume PDF into the `public/` folder with that filename (or update the path)
- Each project's `githubUrl` and `demoUrl` in the `projects` array

Until filled in, the site shows a clearly labeled "coming soon" state instead of a broken or fake link — it will never show a fabricated URL.

## 4. How the "Ask Muskan" chatbot works

The chatbot lives in two files:

- `src/data/portfolioData.js` — the knowledge base (single source of truth)
- `src/services/chatService.js` — the `askMuskan(query)` abstraction

Out of the box it runs in **demo mode**: it matches your question against keywords and answers only from `portfolioData.js`. If it doesn't recognize the question, it says *"I don't have that information in Muskan's portfolio yet."* instead of guessing.

### Connecting a real LLM later

Do **not** put an API key in a `VITE_...` environment variable — anything prefixed `VITE_` is bundled into the client-side JavaScript and is publicly visible in the browser.

Instead:

1. Create a small serverless function that holds your Anthropic API key **server-side** — for example `api/chat.js` if deploying on Vercel:

   ```js
   // api/chat.js  (Vercel serverless function)
   export default async function handler(req, res) {
     const { query, knowledgeBase } = req.body;

     const response = await fetch('https://api.anthropic.com/v1/messages', {
       method: 'POST',
       headers: {
         'x-api-key': process.env.ANTHROPIC_API_KEY, // server-side only
         'anthropic-version': '2023-06-01',
         'content-type': 'application/json',
       },
       body: JSON.stringify({
         model: 'claude-sonnet-4-6',
         max_tokens: 500,
         system: `Answer only using this portfolio data, never invent facts: ${JSON.stringify(knowledgeBase)}`,
         messages: [{ role: 'user', content: query }],
       }),
     });

     const data = await response.json();
     const reply = data.content?.[0]?.text ?? "I don't have that information in Muskan's portfolio yet.";
     res.status(200).json({ reply });
   }
   ```

2. Set `ANTHROPIC_API_KEY` as a server-side environment variable in your hosting provider's dashboard (never commit it, never prefix it with `VITE_`).

3. In your `.env` (copy from `.env.example`), set:

   ```
   VITE_CHAT_API_ENDPOINT=/api/chat
   ```

4. That's it — `askMuskan()` in `chatService.js` automatically calls this endpoint instead of the local demo responder, and falls back to demo mode gracefully if the API is ever unreachable.

## 5. Deploying to Vercel

```bash
npm install -g vercel   # if you don't already have it
vercel
```

Or connect the GitHub repo directly at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects the Vite framework and uses `npm run build` with output directory `dist`.

If you add the `/api/chat` serverless function from step 4 above, Vercel will pick it up automatically since it's a standard file-based API route.

**Environment variables required:**

| Variable | Required? | Where it's used |
|---|---|---|
| `VITE_CHAT_API_ENDPOINT` | No — omit to run the chatbot in demo mode | Frontend, points to your serverless chat endpoint |
| `ANTHROPIC_API_KEY` | Only if you connect a real LLM | Server-side only, inside `api/chat.js` |

## 6. Project structure

```
src/
  components/
    sections/        # Hero, About, ExperienceTimeline, Projects, Skills,
                      # Education, Certifications, AskSection, Contact, Footer
    Navbar.jsx
    ProjectCard.jsx
    Chatbot.jsx
    ChatMessage.jsx
    QuestionChips.jsx
  data/
    portfolioData.js # single source of truth for content + chatbot
  services/
    chatService.js   # askMuskan() abstraction
  hooks/
    useScrollReveal.js
    useReducedMotion.js
  App.jsx
  main.jsx
  index.css
```

## 7. Design notes

Dark charcoal base (`#0A0B0F`) with electric blue, violet, and cyan accents used sparingly. Headings use Space Grotesk, body text uses Inter, and data/stats use JetBrains Mono — rendered as small "readout" chips (e.g. `CGPA 8.95/10`, `100% test accuracy`) instead of arbitrary skill-percentage bars, since these are the real, resume-sourced numbers. Motion respects `prefers-reduced-motion` throughout.
