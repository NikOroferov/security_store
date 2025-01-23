async function getBlogs(id) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		next: {
			revalidate: 60
		}
	});

	return response.json();
}

export async function generateMetadata({params}) {
	const {id} = await params;
	const post = await getBlogs(id);
	
	return {
		title: `${post.title} | Security store`
	}
}

async function Product({ params }) {
	const {id} = await params;
	const post = await getBlogs(id);
	
	return ( <>
	<h1>{post.title}</h1> 
	<p>
		{post.body}
	</p>
	</>
);
}

export default Product;