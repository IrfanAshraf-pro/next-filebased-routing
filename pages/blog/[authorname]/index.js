import { useRouter } from "next/router";
const index = () => {
	const router = useRouter();
	console.log(router.query);
	const pressHandler = () => {
		// router.push("/blog/irfan/A")
		router.push({
			pathname: "/blog/[authorname]/[postid]",
			query: { authorname: "irfan", postid: "A" },
		});
	};
	return (
		<div>
			<h1>Author name is : {router.query.authorname}</h1>
			<button onClick={pressHandler}>Load project A</button>
		</div>
	);
};

export default index;
