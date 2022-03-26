
// Fetching the JSON movies file

export default async function fetchJson(): Promise<any> {
  const response = await fetch('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json');
  const data = await response.json();
  return data;
}