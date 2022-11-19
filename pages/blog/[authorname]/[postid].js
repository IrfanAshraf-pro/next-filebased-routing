import { useRouter } from "next/router";
const PostOfAuthor = () => {
	const router = useRouter();
	return (
		<div>
			<h1>AUTHOR NAME IS: {router.query.authorname}</h1>
			<h1>Post id is : {router.query.postid}</h1>
		</div>
	);
};

export default PostOfAuthor;
