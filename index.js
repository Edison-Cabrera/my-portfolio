let aboutMe = document.getElementById('about_me');
let nameContactMe = document.getElementById('name_contact_me');
let imageProjects = document.getElementById('image_projects');
let contactFormContainer = document.getElementById('contact-form-container');

// array of projects with class or innerhtml or array of objects 
let projects = [
		{
			 projectName: "Projects",
			 projectDescription: "Capstone Projects from bootcamp and personal mini projects."
		},
		{
			 projectName: "Capstone Project 3",
			 projectDescription: "My e-commerce project requirement to pass my web dev bootcamp at Zuitt using MERN stack as tools. ",
			 url: "https://relaxed-lumiere-131f1a.netlify.app/"
		},
		{
			 projectName: "Albion Online Refining Calculator",
			 projectDescription: "Simple refining calculator for the game Albion Online.",
			 url: "https://edison-cabrera.github.io/AO-Refining-App/"
		},
	] 


// auto-add, still need to change images here
aboutMe.classList.add("about_me_img");
nameContactMe.classList.add("name_contact_me_img");
imageProjects.classList.add("image_projects_img");

// initial render whe loaded and how my landing page should initially look
aboutMe.innerHTML = `<span>About Me</span>`;
nameContactMe.innerHTML = 
	`
		<div class="name_contact_me_inner_div">
			<h4 class="heading-style-4">Hi, I'm</h4>
			<h1 class="heading-style-1">Edison</h1>
			<p class="paragraph-style">Full-stack Web Developer</p>
		</div>
	`;
imageProjects.innerHTML =
	`
		<div class="image_projects_div">
			<div class="image_projects_div_inner">
				<h1 id="projectHeading" class="heading-style-4">${projects[0].projectName}</h1>
				<p id="projectParagraph" class="paragraph-style">${projects[0].projectDescription}</p>
			</div>
		</div>
		<input id="prevButton" type="button" value="&laquo">
		<input id="nextButton" type="button" value="&raquo">
	`;

// will transform to about me section when clicked
function changeToAboutMeStyle() {
	let aboutMeClassList = aboutMe.classList;
	let aboutMeClasslListArray = [...aboutMeClassList]

	if (aboutMeClasslListArray.includes("about_me_img")) {
		aboutMeClassList.remove("about_me_img");

		aboutMe.innerHTML = `<h5 class="heading-style-5">About Me</h5>
		<p class="paragraph-style">
			Graduate of Web Development at Zuitt Learning Institute, Inc and learned a lot using both frontend and backend tech stacks. So far, we were taught about MERN stacks but I'm always up in learning new stacks and up my skills as a software developer. 
		</p>
		<p class="paragraph-style">
			I am spending my free time coding a lot, doing mini projects and polishing old the old ones. I like doing backend stuffs like making APIs for my app coz I prefer the logical thinking aspect of it. 
		</p>
		<p class="paragraph-style">
			I'm always up for a challenge, and whatever comes my way, I always take it as opportunity to grow and learn.  
		</p>
		`;
	} else {
		aboutMe.innerHTML = `<span>About Me</span>`;
		aboutMeClassList.add("about_me_img");
	}
}

// will transform to contact form when clicked
function changeToInputForm() {
	let nameContactMeClasslist = nameContactMe.classList;
	let nameContactMeClasslistArray = [...nameContactMeClasslist]


	if (nameContactMeClasslistArray.includes("name_contact_me_img")) {
		nameContactMeClasslist.remove("name_contact_me_img");

		nameContactMe.innerHTML =
		`
			<form id="contact-form-container" action="mailto:nevercreatives@gmail.com" autocomplete="off" class="form-container">
				<div class="contact-form-div heading-style-1">Contact Form</div>
				<label for="firstNameInput" id="firstNameLabel">First Name: </label>
				<input type="text" id="firstNameInput" class="input-field-style" required>
				<label for="lastNameInput" id="lastNameLabel">Last Name: </label>
				<input type="text" id="lastNameInput" class="input-field-style" required>
				<label for="emailInput" id="emailLabel">Email: </label>
				<input type="email" id="emailInput" class="input-field-style" required>
				<label for="comment_text_area_input" id="comment_text_area_input_label">Comment: </label>
				<textarea id="comment_text_area_input" class="input-field-style" required></textarea>
				<input type="submit" formenctype="text/plain" value="Send" id="sendButton" class="input-button-style">
			</form>
		`;
	}
}

// revert back after submitting
function submitForm() {
	nameContactMeClasslist.add("name_contact_me_img");

	// after submitting, pop a modal that says "Form submitted. I'll get in touch soon!"

}

// for pagination-styled projects grid
// scoping reason
let imageProjectsDivInner = document.querySelector('.image_projects_div_inner');
let prevButton = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton');

function next(current, projects) {

	let idx = projects.findIndex(project => project.projectName === `${current}`);
	console.log(idx);

	if (idx === projects.length -1) {
		// return projects[0];
		return project =
			`
				<h1 id="projectHeading" class="heading-style-4">${projects[0].projectName}</h1>
				<p id="projectParagraph" class="paragraph-style">${projects[0].projectDescription}</p>
			`;
	}

	// return projects[idx + 1];
	return project =
		`
			<h1 id="projectHeading" class="heading-style-4">${projects[idx + 1].projectName}</h1>
			<p id="projectParagraph" class="paragraph-style">${projects[idx + 1].projectDescription}</p>
			<a href="${projects[idx + 1].url}" class="link-style" target="_blank"><input type="button" value="Check webpage" class="input-button-style"></a>
		`;
}

function prev(current, projects) {

	let idx = projects.findIndex(project => project.projectName === `${current}`);
	console.log(idx);

	if (idx === 0) {
		// return projects[projects.length -1];
		return project =
			`
			<h1 id="projectHeading" class="heading-style-4">${projects[projects.length -1].projectName}</h1>
			<p id="projectParagraph" class="paragraph-style">${projects[projects.length -1].projectDescription}</p>
			<a href="${projects[projects.length -1].url}" class="link-style" target="_blank"><input type="button" value="Check webpage" class="input-button-style"></a>
		`;
	} else if (idx === 1) {
		return project =
		`
			<h1 id="projectHeading" class="heading-style-4">${projects[idx -1].projectName}</h1>
			<p id="projectParagraph" class="paragraph-style">${projects[idx -1].projectDescription}</p>
		`;
	}
	return project =
		`
			<h1 id="projectHeading" class="heading-style-4">${projects[idx -1].projectName}</h1>
			<p id="projectParagraph" class="paragraph-style">${projects[idx -1].projectDescription}</p>
			<a href="${projects[idx -1].url}" class="link-style" target="_blank"><input type="button" value="Check webpage" class="input-button-style"></a>
		`;
}

prevButton.addEventListener('click', () => {
	imageProjectsDivInner.innerHTML = prev(projectHeading.innerHTML, projects);
});

nextButton.addEventListener('click', () => {
	imageProjectsDivInner.innerHTML = next(projectHeading.innerHTML, projects);
});

