import React from "react";

function Header() {
	return (
		<header class="jumbotron jumbotron-fluid">
			<div class="container">
				<div class="row">
					<div class="col">
						<h1 class="text-left text-dark">Pride Music</h1>
						<h2 class="text-left text-dark">
							For LGBTQ+ Artists of COLOR To Share Our Music With Each Other and
							The World!
						</h2>
					</div>
					<div class="col-md-4 col-xl-2 mt-6">
						<a class="btn btn-lg text-nowrap" href="login.html">
							Artist Login
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
