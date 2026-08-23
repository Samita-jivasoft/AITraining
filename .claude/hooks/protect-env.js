#!/usr/bin/env node
/**
 * PreToolUse guardrail: blocks Edit/Write calls that target .env files.
 *
 * Hook contract: read the tool call as JSON on stdin; exit 0 to allow,
 * exit 2 to block (stderr is fed back to the model).
 */

let raw = '';
process.stdin.on('data', (chunk) => (raw += chunk));
process.stdin.on('end', () => {
  let filePath = '';
  try {
    const payload = JSON.parse(raw);
    filePath = payload.tool_input?.file_path ?? '';
  } catch {
    process.exit(0); // Unparseable payload: don't block unrelated work.
  }

  const normalized = filePath.replaceAll('\\', '/');
  const fileName = normalized.split('/').pop() ?? '';

  if (fileName === '.env' || fileName.startsWith('.env.')) {
    console.error(
      [
        'BLOCKED: Editing .env files is not allowed.',
        'Why: these files often contain local secrets and credentials.',
        'Instead: update .env.example or ask the project owner where this configuration belongs.',
      ].join('\n'),
    );
    process.exit(2);
  }

  process.exit(0);
});
