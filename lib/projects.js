const projects = [
	{
		id: 1,
		title: "DevJobs Board",
		description:
			"Jobs board application using GitHub jobs API data to retrieve data. Users can filter jobs by title, location, and full-time/part-time contracts. Pagination with a default of 12 jobs loaded initially.",
		link: "https://jl-dev-jobs.netlify.app/",
		github: "https://github.com/Joelynn94/devjobs-web-app",
		skills: "HTML, CSS, JavaScript, React, API Data",
		image: "/images/DevJobs.png",
		isFeatured: true,
	},
	{
		id: 2,
		title: "Coffeeroasters Subscription",
		description:
			"A multi-page coffee subscription website. A user makes selections on a series of questions to create a customized coffee subscription plan with an order summary preview of their choices.",
		link: "https://jl-coffeeroasters.netlify.app/",
		github: "https://github.com/Joelynn94/coffeeroasters",
		skills: "HTML, CSS, JavaScript",
		image: "/images/Coffeeroasters.png",
		isFeatured: true,
	},
	{
		id: 3,
		title: "PayAPI Marketing",
		description:
			"A multi-page marketing website. Showcasing who the customers are, how easy it is to work with this product and pricing plans. Taking a mobile-first approach and using modern CSS like Flexbox and Grid for layout purposes.",
		link: "https://jl-pay-api.netlify.app/",
		github: "https://github.com/Joelynn94/payapi-website",
		skills: "HTML, CSS, JavaScript",
		image: "/images/PayAPI.png",
		isFeatured: true,
	},
	{
		id: 5,
		title: "Password Generator",
		description:
			"A password generator application that allows the user to select a password length, if the user wants to use uppercase characters, lowercase characters, numeric characters, or smybol characters in their password. The user is able to generate a new password and copy the passwords to their clipboards.",
		link: "https://joelynn94.github.io/password-generator/",
		github: "https://github.com/Joelynn94/password-generator",
		skills: "HTML, CSS, JavaScript",
		image: "/images/Password-Generator.png",
		isFeatured: true,
	},
	{
		id: 6,
		title: "Developer Profile Generator",
		description:
			"A command-line application that dynamically generates a PDF file (a GitHub profile) from a GitHub username - the user will be prompted for the developer's username and then choose a color to use as the background color.",
		link: "https://joelynn94.github.io/dev-profile-generator/",
		github: "https://github.com/Joelynn94/dev-profile-generator",
		skills: "HTML, CSS, JavaScript, Node.js, GitHub API",
		image: "/images/Developer-Profile.png",
		isFeatured: false,
	},
	{
		id: 7,
		title: "Budget Tracker",
		description:
			"A user can add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.",
		link: "https://sparky-budget-tracker.herokuapp.com/",
		github: "https://github.com/Joelynn94/budget-tracker",
		skills: "HTML, CSS, JavaScript, PWA, Express, MongoDB, Mongoose ORM",
		image: "/images/Budget-Tracker.png",
		isFeatured: false,
	},
	{
		id: 8,
		title: "Team Template Engine",
		description:
			"A command line application generator for a software engineering team. The application prompts the user for information about the team manager and then information about the team members. Once you're done adding memebers, an HTML file will generate the team.",
		link: "https://github.com/Joelynn94/team-template-engine",
		github: "https://github.com/Joelynn94/team-template-engine",
		skills: "HTML, CSS, JavaScript, Node CLI, TDD with Jest",
		image: "/images/Team-Template-Engine.png",
		isFeatured: false,
	},
	{
		id: 9,
		title: "Good Deeds",
		description:
			"A donation web application (e-commerce based) that gives a donor and those of need ease of access to a charitable organization who can administer charitable donations much easier.",
		link: "https://good-deeds-1.herokuapp.com/",
		github: "https://github.com/Joelynn94/good-deeds",
		skills: "HTML, CSS, JavaScript, Handlebars, Express, NodeJS, SQL, Sequelize ORM",
		image: "/images/Good-Deeds.png",
		isFeatured: false,
	},
	{
		id: 10,
		title: "Weather Dashboard",
		description:
			"A weather dashboard with search functionality to find current weather conditions and the future weather outlook for multiple cities.",
		link: "https://joelynn94.github.io/weather-dashboard/",
		github: "https://github.com/Joelynn94/weather-dashboard",
		skills: "HTML, CSS, JavaScript, OpenWeather API",
		image: "/images/Weather-Dashboard.png",
		isFeatured: false,
	},
];

export default projects;
