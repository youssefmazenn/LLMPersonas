export async function pingBackend() {
  const res = await fetch('http://localhost:8000/');
  if (!res.ok) throw new Error('Backend not reachable');
  return await res.json();
}