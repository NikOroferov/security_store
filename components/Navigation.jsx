'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation({navLinks}) {
	const pathname = usePathname();

	return ( 
		<nav>
			<ul>
				{navLinks.map(link => {
					const {label, href} = link;
					const isActive = pathname === href;

					return (
					<li>
						<Link 
							key={label}
							href={href}
							className={isActive ? "active" : ""}
						>{label}</Link>
					</li>
				)})}
			</ul>
		</nav>

	 );
}

export default Navigation;