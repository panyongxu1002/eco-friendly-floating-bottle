import BottleTabs from "@/components/bottles/Tabs";

export default function BottlePage() {
	return (
		<div suppressHydrationWarning={true} className="w-full">
			<BottleTabs />	
		</div >
	);
}
