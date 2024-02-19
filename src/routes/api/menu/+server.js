import { promises as fs } from 'fs';
import path from 'path';
import { json } from '@sveltejs/kit';

export async function GET(request) {
  // Construct the path to the JSON file
  const filePath = path.resolve('src/lib/menu.json');

  try {
    // Read the JSON file
    const data = await fs.readFile(filePath, 'utf8');

    // Parse the JSON data
    const parsedData = JSON.parse(data);

    // Use the json utility to return the response
    return json(parsedData);
  } catch (error) {
    // Use the json utility to return an error response
    return json({ error: 'Failed to read the JSON file' }, { status: 500 });
  }
}
