import { analytics } from "@/utils/analytics";

const Page = async () => {

    const pageview = await analytics.retrieve("pageview", "15/06/2024")

    return <pre className="text-white">{JSON.stringify(pageview)}</pre>;
}

export default Page;