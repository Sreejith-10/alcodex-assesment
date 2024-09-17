import {BiCopyright} from "react-icons/bi";
import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const Footer = () => {
	return (
		<div className="w-full h-auto md:h-auto py-[70px] px-[64px] md:py-10 md:px-8 flex flex-col gap-[80px] border-t border-black ">
			<div className="w-full flex gap-[128px] justify-between md:flex-col md:gap-10">
				<div className="w-[500px] h-[240px] md:h-[140px] sm:w-auto">
					<span className="text-[72px] font-[800] md:text-[64px]">CastMe</span>
				</div>
				<div className="w-[684px] h-[240px] md:w-full md:h-auto flex gap-[80px] md:gap-3 sm:gap-1 lg:gap-5 md:justify-between">
					<div className="space-y-[16px]">
						<h2 className="font-[600]">Column One</h2>
						<ul className="space-y-[16px]">
							<li>Link One</li>
							<li>Link Two</li>
							<li>Link Three</li>
							<li>Link Four</li>
							<li>Link Five</li>
						</ul>
					</div>
					<div className="space-y-[16px]">
						<h2 className="font-[600]">Column Two</h2>
						<ul className="space-y-[16px]">
							<li>Link Six</li>
							<li>Link Seven</li>
							<li>Link Eight</li>
							<li>Link Nine</li>
							<li>Link Ten</li>
						</ul>
					</div>
					<div className="space-y-[16px]">
						<h2 className="font-[600]">Follow Us</h2>
						<ul className="space-y-[16px]">
							<li className="flex items-center gap-2">
								<span>
									<FaFacebook size={24} />
								</span>
								<p>Facebook</p>
							</li>
							<li className="flex items-center gap-2">
								<span>
									<FaInstagram size={24} />
								</span>
								<p>Instagram</p>
							</li>
							<li className="flex items-center gap-2">
								<span>
									<FaXTwitter size={24} />
								</span>
								<p>X</p>
							</li>
							<li className="flex items-center gap-2">
								<span>
									<FaLinkedin size={24} />
								</span>
								<p>Linkedin</p>
							</li>
							<li className="flex items-center gap-2">
								<span>
									<FaYoutube size={24} />
								</span>
								<p>Youtube</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="w-full h-[20px] sm:h-auto xs:h-auto space-y-5">
				<div className="w-full h-[1px] bg-black" />
				<div className="w-full h-[21px] sm:h-auto flex justify-between sm:flex-col sm:gap-5">
					<div className="flex items-center">
						<BiCopyright />
						<h2>2024 INFOLITZ. All rights reserved</h2>
					</div>
					<div className="flex gap-[24px] sm:gap-4">
						<span className="underline underline-offset-2 cursor-pointer">
							Privacy Policy
						</span>
						<span className="underline underline-offset-2 cursor-pointer">
							Terms of Service
						</span>
						<span className="underline underline-offset-2 cursor-pointer">
							Cookies Settings
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
