import Link from "next/link";
import React from "react";


type TopbarProps = {};

const Topbar: React.FC<TopbarProps> = () => {
	/*const [user] = useAuthState(auth);
	const setAuthModalState = useSetRecoilState(authModalState);
	const router = useRouter();

	const handleProblemChange = (isForward: boolean) => {
		const { order } = problems[router.query.pid as string] as Problem;
		const direction = isForward ? 1 : -1;
		const nextProblemOrder = order + direction;
		const nextProblemKey = Object.keys(problems).find((key) => problems[key].order === nextProblemOrder);

		if (isForward && !nextProblemKey) {
			const firstProblemKey = Object.keys(problems).find((key) => problems[key].order === 1);
			router.push(`/problems/${firstProblemKey}`);
		} else if (!isForward && !nextProblemKey) {
			const lastProblemKey = Object.keys(problems).find(
				(key) => problems[key].order === Object.keys(problems).length
			);
			router.push(`/problems/${lastProblemKey}`);
		} else {
			router.push(`/problems/${nextProblemKey}`);
		}
	};*/

	return (
		<nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7'>
			<div className={`flex w-full items-center justify-between max-w-[1200px] mx-auto`}>
				<Link href='/' className='h-[45px] flex-2'>
					<img src='/codejecrc-high-resolution-logo-white-transparent.png' alt='Logo' className='h-full' />
				</Link>

				<div className='flex items-center space-x-4 flex-1 justify-end'>
					<div>
						<a
							href='https://jecrcfoundation.com/'
							target='_blank'
							rel='noreferrer'
							className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'
						>
							About Us
						</a>
					</div>
					<Link href='/auth'>
						<button className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded '>Sign In</button>
					</Link>
				</div>
			</div>
</nav>
	);
};
export default Topbar;
