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

	appendText("ERROR: No file was specified! Specify a file by inputting a file as a query string.");
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
			appendText("ERROR: Failed to load file, make sure you typed the correct file address.");
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

async function parse()
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
function appendQuestion()
{
	newEl = document.createElement("input");
	content_text = document.createTextNode(string)

	newEl.appendChild(content_text);
	document.body.appendChild(newEl);

}
function ask() 
{

	for(i = 0; i < file.list.length)
	{


	}

}
ask()
