import styles from "../styles/Home.module.css";
import Link from "next/link";

export function Navbar() {
	return (
		<div className={styles.navbar}>
			<ul>
				<li>
					<Link href="/">BetterReads</Link>
				</li>
				<li>
					<Link href="/authors">Authors</Link>
				</li>
			</ul>
		</div>
	);
}
