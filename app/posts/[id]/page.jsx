import Link from "next/link";

const fetchSinglePost = async (id) => {
  await new Promise((res) => setTimeout(res, "3000"));
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export default async function Post({ params }) {
  const { id } = params;
  const post = await fetchSinglePost(id);

  return (
    <div>
      <article>
        <h1>{post.title}</h1>
        <p>{post.body}</p>

        <Link href={`posts/${id}/comments`}>Ver Comentarios</Link>

        <Link href="/posts">Volver</Link>
      </article>
    </div>
  );
}
