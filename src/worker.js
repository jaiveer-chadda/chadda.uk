// worker.js
// chadda.uk/src/worker.js

export default {
	async fetch(request, env, ctx) {
		console.info({ message: "Serving an HTML page!" });

		const htmlContent = `
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<title>chadda.uk - Home</title>
				<style>
					body {
						color: #C0C0C0;
						background-color: #2e2e3e;
						font-family: BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
						
						height: 100vh;
						margin: 0;
						
						display: flex;
						justify-content: center;
						align-items: center;
					}
					#central-card {
						background-color: #1e1e2e;
						box-shadow: 0 4px 12px rgba(255,255,255,0.1);
						
						border-radius: 12px;
						padding: 40px;
						
						text-align: center;
					}
					h1 {
						color: #807ded;
						margin-top: 0;
					}
				</style>
			</head>
			<body>
				<div id="central-card">
					<h1>chadda.uk</h1>
					<p>This page is under construction</p>
				</div>
			</body>
			</html>
		`;

		return new Response(htmlContent, { headers: { "Content-Type": "text/html;charset=UTF-8" } });
	}
};
