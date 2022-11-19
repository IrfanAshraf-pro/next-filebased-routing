import Link from "next/link";

const index = () => {
	const clients = [
		{ id: "irfan", name: "Irfan" },
		{ id: "abdullah", name: "Abdullah" },
	];
	return (
		<div>
			<h1>All posts</h1>
			<ul>
				{clients.map((item) => {
					<li key={item.id}>
						<Link
							// href={`/blog/${item.id}`}
							href={{
								pathname: "/blog/[authorname]",
								query: { authorname: item.id },
							}}
						>
							{item.name}
						</Link>
					</li>;
				})}
				<li>
					<Link href="/blog/irfan">Irfan</Link>
				</li>
				<li>
					<Link href="/blog/abdullah">Abdullah</Link>
				</li>
			</ul>
		</div>
	);
};

export default index;
