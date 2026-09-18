interface Project{
	id: string;
	title: string;
	image: string;
	description: string;
	tags: string[];
	link: string;
}

const projects: Project[] = [
	{
		id: "edushare",
		title: "EduShare - Piattaforma e-learning",
		image: "../assets/EduShare/cover.png",
		description: "Web app. Simula un portale di e-learning con possibilità di seguire corsi online di altri utenti o crearne di propri",
		tags:["React", "Java", "SpringBoot", "Hibernate"],
		link: "../projects/EduShare.html",
	},
	{
		id: "emailapp",
		title: "Client/Server Mail",
		image: "../assets/EmailApp/cover.png",
		description: "Sistema di posta elettronica asincrono. Gestisce concorrenza, lock manuali sui file e UI non bloccante.",
		tags: ["Java", "JavaFX", "Socket", "JSON"],
		link: "../projects/EmailApp.html",
	},
]

const showCaseDiv = document.getElementById("projects-showcase");

if(showCaseDiv){
	showCaseDiv.innerHTML = projects.map(proj => `
		<div class="project-card"> 
			<div class="card-image">
				<img src="${proj.image}" alt="Anteprima ${proj.title}">
			</div>
			<div class="card-content">
				<h3>${proj.title}</h3>
				<p>${proj.description}</p>
				<div class="tags">
					${proj.tags.map(tag => `<span class="tag">#${tag}</span>`).join(' ')}
				</div>
				<a href="${proj.link}" class="btn btn-read-more">Scopri il progetto</a>
			</div>
		</div>
	`).join('');
}
