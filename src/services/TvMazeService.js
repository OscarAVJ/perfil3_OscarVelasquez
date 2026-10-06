const SHOWS_ENDPOINT = 'https://api.tvmaze.com/shows';

function removeHtml(value = '') {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * @param {{ signal?: AbortSignal }} [options]
 */
export async function getShows(options = {}) {
  const { signal } = options;
  const response = await fetch(SHOWS_ENDPOINT, {
    headers: { Accept: 'application/json' },
    signal,
  });

  if (!response.ok) {
    throw new Error(`TVMaze respondió con el estado ${response.status}.`);
  }

  const shows = await response.json();

  if (!Array.isArray(shows)) {
    throw new Error('TVMaze devolvió una respuesta inesperada.');
  }

  return shows.map((show) => ({
    id: String(show.id),
    title: show.name || 'Sin título',
    imageUrl: show.image?.medium ?? show.image?.original ?? null,
    description: removeHtml(show.summary) || 'Sin descripción disponible.',
  }));
}
