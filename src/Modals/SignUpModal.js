import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSignUp } from "@clerk/clerk-react";

export default function SignUpModal({ open, setOpen }) {

    const { isLoading, signUp } = useSignUp();

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 max-w-screen w-full overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
								<div>
									<div className="mt-3 text-center sm:mt-5">
										<Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
											Create an Upgraded Account
										</Dialog.Title>
										<div className="mt-2">
											<p className="text-sm text-gray-500">Enter some information to get you started with Upgraded.</p>
										</div>
									</div>
								</div>
								<form
									onSubmit={(e) => {
										e.preventDefault();
										console.log(e.target['password'].value);
                                        console.dir(signUp);
									}}
									id="inputFields"
									className="my-2 py-2"
								>
									<div className="py-2">
										<span>
											<p className="text-sm">Enter an Email:</p>
										</span>
										<input
											type="text"
											id="email"
											placeholder="prayaag@getupgraded.ca"
											required
											className="rounded-md p-2 h-8 max-w-lg w-full"
										/>
									</div>
									<div className="py-2">
										<span>
											<p className="text-sm">Enter your Company's Domain</p>
										</span>
										<input type="text" id="domain" placeholder="getupgraded.ca" required className="rounded-md p-2 h-8 max-w-lg w-full" />
									</div>
									<div className="py-2">
										<span>
											<p className="text-sm">Create a Password:</p>
										</span>
										<input type="password" id="password" required placeholder="" className="rounded-md p-2 h-8 max-w-lg w-full" />
									</div>
									<div className="py-2">
										<span>
											<p className="text-sm">Confirm Password:</p>
										</span>
										<input type="password" id="confirm" required placeholder="" className="rounded-md p-2 h-8 max-w-lg w-full" />
									</div>
									<div className="mt-5 sm:mt-6 grid grid-cols-2 gap-x-2">
										<button
											type="button"
											className="rounded-md outline outline-1 outline-offset-1 outline-gray-300 hover:bg-gray-50 focus:outline-none focus:ring"
											onClick={() => setOpen(false)}
										>
											Cancel
										</button>
										<button
											type="submit"
											className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
										>
											Login
										</button>
									</div>
								</form>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
