const linesContainer = document.getElementById("terminal-lines");
const cursor = document.querySelector(".cursor") as HTMLElement;

enum LineType {
	CMD = "cmd",
	OUT = "output",
	HIGHLIGHT = "highlight",
}

const sequence:{type: LineType, text: string}[] = [
	{ type: LineType.CMD, text: "> whoami" },
	{ type: LineType.OUT, text: "Alessandro Mallardi" },
	{ type: LineType.CMD, text: "> get goal" },
	{ type: LineType.HIGHLIGHT, text: "=> \"Software Architecture & Game Dev\"" },
	{ type: LineType.CMD, text: "> get stack --primary" },
	{ type: LineType.HIGHLIGHT, text: "=> [Java, Spring Boot, React, SQL]" },
	{ type: LineType.CMD, text: "> check status" },
	{ type: LineType.OUT, text: "Status: Ready to build." },
	{ type: LineType.CMD, text: "> " },
];

const sleep:(ms: number) => any = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function typeWriter(text: string, elementClass: string) {
	const line = document.createElement("div");
	line.className = `line ${elementClass}`;

	// Crea uno span per contenere il testo
	const textSpan = document.createElement("span");
	line.appendChild(textSpan);

	// Sposta il cursore dentro la riga corrente, di fianco al testo
	line.appendChild(cursor);

	cursor.classList.add("non-animated");

	linesContainer?.appendChild(line);

	for (let i = 0; i < text.length; i++) {
		textSpan.textContent += text[i];
		await sleep(40);
	}

	cursor.classList.remove("non-animated");
}

async function runTerminalLoop() {
	if(!linesContainer)
		return;

	while (true) {
		linesContainer.innerHTML = "";
		await sleep(600);

		for (const item of sequence) {
			if (item.type === LineType.CMD) {
				await typeWriter(item.text, item.type.toString());
				await sleep(450); // Piccola pausa prima dell'output
			} else {
				// Gli output di sistema compaiono istantaneamente
				const line = document.createElement("div");
				line.className = `line ${item.type.toString()}`;
				line.textContent = item.text;
				linesContainer.appendChild(line);
				await sleep(500);
			}
		}

		await sleep(4500);
	}
}

runTerminalLoop();