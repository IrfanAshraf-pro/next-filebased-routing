import { useRouter } from "next/router";
const index = () => {
	const router = useRouter();
	console.log(router.query);
	return <div>Author name is : {router.query.authorname}</div>;
};

export default index;
