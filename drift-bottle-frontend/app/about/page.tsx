"use client"

import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Chip } from "@nextui-org/chip";
import { title } from "@/components/primitives";
import { login } from "@/actions/login";
import { JoinUsSchema, LoginSchema } from "@/schemas";
import SectionWhatIs from "@/components/home/SectionWhatIs";
import { Select, SelectItem } from "@nextui-org/select";
import { sleep } from "openai/core";
// import { EyeFilledIcon, EyeSlashFilledIcon, MailIcon, NotificationIcon, PasswordIcon } from "../icons";


export default function AboutPage() {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl");
	const [isVisible, setIsVisible] = useState(false);
	const [error, setError] = useState<string | undefined>("");
	const [isPending, setPending] = useState(false);

	const { control, handleSubmit, reset } = useForm<z.infer<typeof JoinUsSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			region: "",
			address: "",
			role: "",
		},
	});

	const toggleVisibility = () => setIsVisible(!isVisible);
	const onSubmit = async () => {
		setError("")
		setPending(true)
		await sleep(1000)
		setPending(false)
		reset()
		alert("success , thanks")
	};

	return (
		<div>
			<h1 className={title()}>About Us</h1>
			<SectionWhatIs />
			<form>
				<Card className="m-auto w-full max-w-[460px] p-3">
					<CardHeader className="flex flex-col items-start">
						<h1 className="text-4xl font-semibold">Tell Us About Yourself</h1>
						<p className="my-1 text-sm text-gray-400">Join us</p>
					</CardHeader>
					<CardBody className="flex flex-col justify-start  gap-6">
						<Controller
							name="email"
							control={control}
							render={({ field, fieldState }) => {
								return (
									<Input
										type="email"
										label="Email"
										placeholder="xxxx@example.com"
										errorMessage={fieldState.error?.message}
										color={fieldState.invalid ? "danger" : "default"}
										isInvalid={fieldState.invalid}
										isClearable
										labelPlacement="outside"
										{...field}
									/>
								)
							}}
						/>
						<Controller
							name="region"
							control={control}
							render={({ field, fieldState }) => {
								return (
									<Input
										type={"text"}
										label="Region"
										placeholder="Your Region: China"
										errorMessage={fieldState.error?.message}
										color={fieldState.invalid ? "danger" : "default"}
										isInvalid={fieldState.invalid}
										labelPlacement="outside"
										{...field}
									/>
								)
							}}
						/>
						<Controller
							name="address"
							control={control}
							render={({ field, fieldState }) => {
								return (
									<Input
										type={"text"}
										label="Address"
										placeholder="Enter your Address: 深圳市宝安区"
										errorMessage={fieldState.error?.message}
										color={fieldState.invalid ? "danger" : "default"}
										isInvalid={fieldState.invalid}
										labelPlacement="outside"
										{...field}
									/>
								)
							}}
						/>
						<Controller
							name="role"
							control={control}
							render={({ field, fieldState }) => {
								return (
									<Select
										size="md"
										label="Select Role"
										labelPlacement="outside"
										placeholder="Select your role"
									>
										{["Student", "government", "company"].map((value) => (
											<SelectItem key={value} value={value}>
												{value}
											</SelectItem>
										))}
									</Select>
								)
							}}
						/>
						{/* <Link href="/auth/sign-up">Forgot password?</Link> */}
						<div className="flex justify-center min-h-[30px]">
							{
								error &&
								<Chip
									variant="flat"
									color="danger"
									classNames={{
										base: "rounded-md p-2 whitespace-pre-wrap h-auto",
									}}
								>
									{error}
								</Chip>
							}
						</div>
						<Button
							fullWidth
							variant="ghost"
							color="success"
							isLoading={isPending}
							onClick={onSubmit}
						>
							Join Us
						</Button>
					</CardBody>
				</Card>
			</form>
		</div>
	);
}
