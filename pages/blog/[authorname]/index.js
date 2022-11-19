import { useRouter } from "next/router";
const index = () => {
	const router = useRouter();
	return <div>Author name is : {router.query.authorname}</div>;
};

export default index;
