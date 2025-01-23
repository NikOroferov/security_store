import Link from "next/link";


export const metadata = {
  title: "About | Security store",
  description: "Магазин товарів безпеки. Сторінка з інформацією про магазин",
};

function AboutLayout({children}) {
	return ( 
		<div>
			<h1>About us</h1>

			<ul>
				<li>
					<Link href='/about/address'>Address</Link>
				</li>
				<li>
					<Link href='/about/contacts'>Contacts</Link>
				</li>
			</ul>

			{children}
		</div>
	 );
}

export default AboutLayout;