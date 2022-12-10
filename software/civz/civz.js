// Get query strings
const params = new Proxy(new URLSearchParams(window.location.search),{
	  get: (searchParams, prop) => searchParams.get(prop),
});

// Append text
function appendText(string)
{
	newEl = document.createElement("p");
	content_text = document.createTextNode(string)

	newEl.appendChild(content_text);
	document.body.appendChild(newEl);
}


// File handling
if(!params.file)
{

	alert("ERROR: No file was specified! Specify a file by inputting a file as a query string.");
}
else
{
	filepath = params.file;
}

// Handle file loading
async function loadFile(url)
{
	try {
		const response = await fetch(url);

		if(!response.ok)
		{
			alert("ERROR: Failed to load file, make sure you typed the correct file address.");
		}
		else
		{
			const data = await response.text();
			return data;
		}
	} catch(err) {
		console.log(err);
	}
}

async function parseFile()
{

	fileContent = await loadFile(filepath);
	file = JSON.parse(fileContent);
	

	// Set title
	if(!file.title)
	{
		document.title = "CIVZ";
	}
	else
	{
		document.title = file.title;
	}

}


// Ask
function appendList(string)
{
	newEl = document.createElement("li");

	content_text = document.createTextNode(string)

	newEl.appendChild(content_text);
	listEl.appendChild(newEl);

}

function ask() 
{
	parseFile();


}

parseFile()

listEl = document.getElementById("list-contents");

btn = document.getElementById("okBtn")
textContent = document.getElementById("inputArea")
btn.addEventListener('click', function() {
	appendList(textContent.value)
	}
)
