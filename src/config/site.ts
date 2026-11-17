export const site = {
  name: 'Open Conversation Format',
  short: 'OCF',
  url: 'https://www.open-conversation-format.org',
  title: 'Open Conversation Format (OCF) - one open format for every AI session',
  description:
    'OCF is an open file format for AI sessions. One adapter per tool lets a session move between machines and between tools like Claude Code, Codex and Cursor. Plain files you own.',
};

const org = 'https://github.com/open-conversation-format';

export const links = {
  org,
  spec: `${org}/spec`,
  schema: `${org}/spec/blob/main/schema/ocf-v0.1.0.schema.json`,
  mapping: `${org}/spec/blob/main/mapping.md`,
  examples: `${org}/spec/tree/main/examples`,
  roadmap: `${org}/spec/blob/main/ROADMAP.md`,
  ocfpy: `${org}/ocf-py`,
  adapters: `${org}/ocf-py/tree/main/src/ocf/exporters`,
  issues: `${org}/ocf-py/issues`,
  license: 'https://www.apache.org/licenses/LICENSE-2.0',
};

// TODO before going live: confirm that this operator and these contact
// details are the right ones for this site. They are taken over from
// dannygerst.de as a starting point.
export const operator = {
  company: 'bizness rocket GmbH',
  street: 'Ramsdorfer Hoff 24',
  city: '46342 Velen',
  country: 'Germany',
  director: 'Danny Gerst',
  vatId: 'DE298965194',
  register: 'HRB 10710 (Steinfurt local court)',
  phone: '+49 2551 98670 50',
  email: 'danny@dannygerst.de',
};
