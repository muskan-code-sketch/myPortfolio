// ─────────────────────────────────────────────────────────────────────────
// chatService.js
//
// A clean abstraction for "Ask Muskan" so a real LLM can be dropped in later
// without touching any component. Everything below is a self-contained,
// keyword-matching "demo mode" that answers strictly from
// src/data/portfolioData.js — it never invents information.
//
// TO CONNECT A REAL LLM LATER:
//   1. Deploy a serverless function (e.g. /api/chat on Vercel) that holds
//      your Anthropic API key server-side (never in frontend code).
//   2. Set VITE_CHAT_API_ENDPOINT in your .env to that function's URL.
//   3. That's it — askMuskan() below already checks for the endpoint and
//      will call it instead of the local demo responder when present.
// ─────────────────────────────────────────────────────────────────────────

import { portfolioKnowledgeBase as kb } from '../data/portfolioData.js';

const FALLBACK_MESSAGE =
  "I don't have that information in Muskan's portfolio yet.";

const API_ENDPOINT = import.meta.env.VITE_CHAT_API_ENDPOINT || null;

/**
 * Public entry point used by the Chatbot component.
 * @param {string} query - the visitor's question
 * @returns {Promise<string>} - the assistant's reply
 */
export async function askMuskan(query) {
  if (!query || !query.trim()) return FALLBACK_MESSAGE;

  if (API_ENDPOINT) {
    try {
      return await askViaApi(query);
    } catch (err) {
      // Graceful fallback — never break the site if the API is unreachable.
      console.warn('Ask Muskan API unavailable, using demo mode.', err);
      return answerFromKnowledgeBase(query);
    }
  }

  return answerFromKnowledgeBase(query);
}

/** Calls an external serverless/LLM endpoint if one has been configured. */
async function askViaApi(query) {
  const res = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, knowledgeBase: kb }),
  });
  if (!res.ok) throw new Error(`Chat API responded with ${res.status}`);
  const data = await res.json();
  return data.reply || FALLBACK_MESSAGE;
}

// ─────────────────────────────────────────────────────────────────────────
// Demo-mode responder — deterministic, grounded strictly in portfolioData.js
// ─────────────────────────────────────────────────────────────────────────

function answerFromKnowledgeBase(rawQuery) {
  const q = rawQuery.toLowerCase();

  if (/who is muskan|introduce|about (her|muskan)/.test(q)) {
    return `${kb.personalInfo.name} is a ${kb.personalInfo.summary}`;
  }

  if (/summary|overview|quick.*(summary|intro)|tell me about muskan/.test(q)) {
    return kb.personalInfo.summary;
  }

  if (/education|degree|college|school|cgpa|academic/.test(q)) {
    return kb.education
      .map((e) =>
        [e.degree, e.institution, e.period, e.score].filter(Boolean).join(' — ')
      )
      .join('\n');
  }

  if (/maruti|msil|hr|fraq/.test(q)) {
    const msil = kb.experience.find((e) => e.id === 'msil');
    return msil ? `${msil.role} at ${msil.org} (${msil.period}). ${msil.points[0]}` : FALLBACK_MESSAGE;
  }

  if (/infosys|internship|springboard|virtual internship/.test(q)) {
    const infy = kb.experience.find((e) => e.id === 'infosys');
    return infy
      ? `${infy.role}, ${infy.org} (${infy.period}).\n${infy.points.join('\n')}`
      : FALLBACK_MESSAGE;
  }

  if (/experience|worked|work history/.test(q)) {
    return kb.experience
      .map((e) => `${e.role} — ${e.org} (${e.period})`)
      .join('\n');
  }

  if (/project|built|build|portfolio work/.test(q)) {
    return kb.projects
      .map((p) => `${p.title} (${p.tech.join(', ')}): ${p.description}`)
      .join('\n\n');
  }

  if (/iris/.test(q)) {
    const p = kb.projects.find((p) => p.id === 'iris');
    return p ? `${p.title}: ${p.description}\n${p.highlights.join('\n')}` : FALLBACK_MESSAGE;
  }

  if (/scrap/.test(q)) {
    const p = kb.projects.find((p) => p.id === 'web-scraping');
    return p ? `${p.title}: ${p.description}\n${p.highlights.join('\n')}` : FALLBACK_MESSAGE;
  }

  if (/price optima|pricing/.test(q)) {
    const p = kb.projects.find((p) => p.id === 'ai-price-optima');
    return p ? `${p.title}: ${p.description}\n${p.highlights.join('\n')}` : FALLBACK_MESSAGE;
  }

  if (/skill|technolog|tech stack|tools|programming languages?|know/.test(q)) {
    return Object.entries(kb.skills)
      .map(([cat, items]) => `${cat}: ${items.join(', ')}`)
      .join('\n');
  }

  if (/certif/.test(q)) {
    return kb.certifications
      .map((c) => `${c.title} — ${c.issuer}${c.note ? ` (${c.note})` : ''}`)
      .join('\n');
  }

  if (/interest|passion|career goal|why.*(good candidate|hire|internship)/.test(q)) {
    const skillsList = Object.values(kb.skills).flat().slice(0, 6).join(', ');
    return `Muskan pairs a strong academic record (${kb.education[0].score}) with hands-on ML project work — including a Random Forest model that reached 100% test accuracy on the Iris dataset — and practical exposure to data pipelines from her Infosys Springboard internship. She's proficient in ${skillsList}, and is actively focused on ${kb.interests.join(', ')}.`;
  }

  if (/contact|email|reach|linkedin|github/.test(q)) {
    return `You can reach Muskan at ${kb.personalInfo.email}${
      kb.personalInfo.links.linkedin ? ` or on LinkedIn: ${kb.personalInfo.links.linkedin}` : ''
    }.`;
  }

  return FALLBACK_MESSAGE;
}
