# Copilot instructions for this repository

Purpose
- This repository appears to be a small collection of JavaScript exercises (folder name: `DSA with js`) implemented as one or more self-contained scripts. Current root file of interest: `index.js`.

Quick start (what to run locally) ✅
- Run the main script with Node (Windows PowerShell):

```powershell
node index.js
```

What to look for (project-specific patterns & examples) 🔎
- Small, top-level scripts (no `package.json`, no test framework found).
- Example problem file: `index.js` — contains a user-visible bug (incorrect template literal usage):

```js
// current (buggy) line in index.js
console.log`(sum of 10 and 20: + $(a) + b)`;

// correct approach
console.log(`sum of ${a} and ${b}: ${a + b}`);
```

Guidance for automated changes an AI agent should follow ✏️
- Be conservative: make small, focused changes that are easy to review. Prefer a 1-2 line fix + a test over sweeping refactors.
- When fixing runtime or syntax errors (like the `index.js` template literal), include a minimal test or a short snippet demonstrating the expected output.
- If you convert a script into a testable module, export a pure function (e.g., `function sum(a,b) { return a+b; } module.exports = { sum }`) and add a unit test.
- Because there is no `package.json`, if you add dev tooling (jest, eslint) also add `package.json` and include install and run steps in the PR description.

Suggested testing workflow (no tests currently present) 🧪
- Minimal recommended approach:
  1. `npm init -y`
  2. `npm i -D jest`
  3. Add `"test": "jest"` to `package.json` scripts
  4. Put tests under `__tests__/` or `test/`, e.g., `__tests__/index.test.js`
- Example test for the `sum` helper:

```js
// __tests__/index.test.js
const { sum } = require('../index');
test('sum of two numbers', () => expect(sum(10, 20)).toBe(30));
```

PR & commit guidance ✅
- Keep changes small and scoped to one logical issue.
- Include a short description of the problem, the fix, and how you validated it (example: `Fixed template literal usage in index.js; added unit test and updated README`).

What NOT to do
- Do not refactor unrelated files in the same PR.
- Do not add heavy toolchains unless justified — mention in the PR why adding test/lint infrastructure is needed.

Files to check when working on a change
- `index.js` (current entry point)
- Add or update `README.md` if you add new running instructions or scripts
- `package.json` (create if you add tests or tooling)

If something is unclear, ask the maintainer for:
- The intended canonical name/location of exercises (e.g., `exercises/`, `src/`) and preferred test framework
- Any repository-wide coding conventions (ESLint config, code style) not present in the repo

Thanks — ask for feedback if any instruction is missing or ambiguous. ✅
