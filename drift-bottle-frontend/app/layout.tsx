import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Link } from "@nextui-org/link";
import { Metadata } from "next";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { auth } from "@/auth";
import { Providers } from "./providers";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	// themeColor: [
	// 	{ media: "(prefers-color-scheme: light)", color: "white" },
	// 	{ media: "(prefers-color-scheme: dark)", color: "black" },
	// ],
	icons: {
		icon: "/favicon.ico",
		// shortcut: "/favicon-16x16.png",
		// apple: "/apple-touch-icon.png",
	},
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await auth();
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<SessionProvider session={session}>
					<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
						<div className="relative flex flex-col h-full min-h-[90vh]">
							<Navbar />
							<main className="w-full mx-auto flex-grow">
								{children}
							</main>
							<footer className="w-full flex items-center justify-center py-3">
								<Link
									isExternal
									className="flex items-center gap-1 text-current"
									href="/"
									title="nextui.org homepage"
								>
									<span className="text-default-600">Powered by</span>
									<p className="text-primary">Eco-friendly Floating Bottle</p>
								</Link>
							</footer>
						</div>
					</Providers>
				</SessionProvider>
			</body>
		</html>
	);
}
