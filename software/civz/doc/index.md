---
layout: default
title: CIVZ Documentation
desc: CIVZ documentation

css:
- navbar

navbar:
- name: Home
  url: /
- name: CIVZ Web App
  url: /software/civz

---
# About
Embeddable list memorizer.
From a studying survey™ at my class, a lot of my friends apparently "asked themselves" when studying, which is a bad way to memorize something.

Also, check out [list-memorize](https://raw.githubusercontent.com/DaringCuteSeal/shell-scripts/main/list-memorize) for a based studying experience from the CLI.

# Query Strings
## file
Use `file=<path to file>` to load a JSON file. Only supports files from the internet.
Example: `https://daringcuteseal.xyz/software/civz?file=demo/try.json`

## theme
`dark` forces a dark theme, any other values beside dark will force a light theme. If not set, a light theme is used by default.

# JSON File
Contains:
- `title` string
- `description` string
- `list` string array

Example:
```json
{
    "title": "An Example Title",
    "description": "An example description",
    "list":
    [
        "List one",
        "List two",
        "List three",
        "List four"
    ]
}
```
# Interface
![civz-interface](civz-interface.png)

- Use the most left input box to type a string value.
- Use the `Add` button to add the string from the input box to the list.
- Use the `Check` button to match your answers with the correct answers.
- Use the `Clear` button to start over.

# Demo
[CIVZ with a sample list](/software/civz?file=demo/try.json).

Answers are:
1. List one
2. List two
3. List three
