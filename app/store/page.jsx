import Link from "next/link";

async function getBlogs() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
		next: {
			revalidate: 60
		}
	});

	if (!response.ok) throw new Error("Unable to fetch blogs");
	

	return response.json();
}

async function getBlogsBySearch(search) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`, {
		next: {
			revalidate: 60
		}
	});

	return response;
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

		<form >
			<input type="text" name="search" id="search" />
			<button type="submit">Search</button>
		</form>

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