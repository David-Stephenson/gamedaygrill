import { json } from '@sveltejs/kit';

async function getEvents() {
  let events = [];

  const paths = import.meta.glob('/src/events/*.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata;
      const event = { ...metadata, slug };
      events.push(event);
    }
  }

  events = events.sort(
    (first, second) =>
      new Date(first.date).getTime() - new Date(second.date).getTime(),
  );

  return events;
}

export async function GET() {
  const events = await getEvents();
  return json(events);
}
