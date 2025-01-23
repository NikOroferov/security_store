import Link from "next/link";

async function getBlogs() {
	const response = await fetch('https://jsonplaceholder.typicode.coms/posts', {
		next: {
			revalidate: 60
		}
	});

	if (!response.ok) throw new Error("Unable to fetch blogs");
	

	return response.json();
}

export const metadata = {
  title: "Store | Security store",
  description: "Магазин товарів безпеки. Сторінка продуктів",
};

async function Store() {
	const posts = await getBlogs();

	return ( 
	<>
		<h1>Store</h1> 

		<ul className="flex-column">
			{posts.map(post => (
				<li key={post.id}>
					<Link href={`store/${post.id}`}>{post.title}</Link>
				</li>
			))}
		</ul>
	</>
);
}

export default Store;