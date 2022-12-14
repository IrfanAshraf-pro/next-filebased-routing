import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
	return (
		<div className={styles.container}>
			<h1>HomePage</h1>
			<ul>
				<li>
					<Link href="/portfolio">Portfolio</Link>
				</li>
				<li>
					<Link href="/blog">Blog</Link>
				</li>
			</ul>
		</div>
	);
}
