export default async function createNewPost(
  title: string,
  body: string,
  userId: number
): Promise<{ id: number }> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ title, body, userId }),
  });

  return res.json();
}
