import { useRouter } from "next/router";
const CatchAllRoutes = () => {
	const router = useRouter();
	console.log(router.query);
	return <div>catching alll routes</div>;
};

export default CatchAllRoutes;
