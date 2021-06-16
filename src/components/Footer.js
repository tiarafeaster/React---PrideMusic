import React from "react";

function Footer() {
	return (
		<footer>
			<footer className="site-footer">
				<div className="container">
					<div className="row">
						<div className="col-4 col-sm-2 offset-1">
							<h5>Links</h5>
							<ul className="list-unstyled">
								<li>Home</li>
								<li>Get Started</li>
								<li>Browse and Book</li>
								<li>Contact</li>
							</ul>
						</div>
						<div className="col-6 col-sm-5 text-center">
							<h5>Social</h5>
							<a href="http://instagram.com/">Instagram</a>
							<a href="http://facebook.com/">Facebook</a>
							<a href="http://twitter.com/">Twitter</a>
							<a href="http://youtube.com/">YouTube</a>
						</div>
					</div>
				</div>
			</footer>
		</footer>
	);
}

export default Footer;
