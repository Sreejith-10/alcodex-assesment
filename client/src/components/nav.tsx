const Nav = () => {
	return (
		<div className="w-full h-[72px] flex items-center justify-center border-b border-black">
			<nav>
				<ul className="flex gap-[32px]">
					<li className="font-[400] text-[16px]">Home</li>
					<li className="font-[400] text-[16px]">Info</li>
					<li className="font-[400] text-[16px]">Blog</li>
					<li className="font-[400] text-[16px]">Contact</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
