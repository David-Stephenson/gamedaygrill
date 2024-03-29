export async function load({ fetch }) {
  const response = await fetch('api/events');
  const events = await response.json();
  return { events };
}
