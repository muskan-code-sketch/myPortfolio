// OPTIONAL — Vercel serverless function template.
//
// This file is inactive as-is (named .example.js so it isn't deployed by
// accident). To activate it:
//   1. Rename this file to `chat.js` (still inside /api).
//   2. Set ANTHROPIC_API_KEY as a server-side env var in your Vercel project
//      settings (Project → Settings → Environment Variables). Never prefix
//      it with VITE_ and never commit it to source control.
//   3. Set VITE_CHAT_API_ENDPOINT=/api/chat in your frontend env.
//
// See README.md section 4 for the full walkthrough.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { query, knowledgeBase } = req.body;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 500,
        system: `You are Muskan Chauhan's portfolio assistant. Answer visitor questions using ONLY the following JSON knowledge base. If the answer isn't in it, reply exactly: "I don't have that information in Muskan's portfolio yet." Never invent facts.\n\n${JSON.stringify(
          knowledgeBase
        )}`,
        messages: [{ role: 'user', content: query }],
      }),
    });

    const data = await response.json();
    const reply =
      data?.content?.[0]?.text ??
      "I don't have that information in Muskan's portfolio yet.";

    res.status(200).json({ reply });
  } catch (err) {
    console.error('Ask Muskan API error:', err);
    res
      .status(500)
      .json({ reply: "I don't have that information in Muskan's portfolio yet." });
  }
}
