import Navigation from "./Navigation";

const navItems = [
	{label: "Home", href: "/"},
	{label: "About", href: "/about"},
	{label: "Products", href: "/store"},
]

export default function Header() {
	return (  
		<header>
			<Navigation navLinks={navItems}/>			
		</header>
	);
}
