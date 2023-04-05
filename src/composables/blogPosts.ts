export default async () => {
  return await fetch(
    'https://raw.githubusercontent.com/frontendkey/frontendkey.github.io/main/blogPosts.json'
  ).then((r) => r.json())
}
