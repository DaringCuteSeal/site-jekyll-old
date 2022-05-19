---
layout: blog
title: "BASH: Dynamic Variable Naming"
---

<!-- ok i'll admit it, i had a hard time explaining programming stuff to someone. -->

BASH (or I'll just spell it 'bash', actually) only has 1-dimensional array. That sucks, and dynamic variable naming would be very helpful.

TL;DR: eval "echo "\$variable_$dynamicname"="$name""

Dynamic namings are bad, and unelegant. Why? Well, just read this example snippet of a script. I'll explain more about it later.


```bash
...
for (( i = 0; i < ${#groups}; i++ ))
do
	eval "members=\${group_$i[@]}"
	echo "Group $(($i+1)) members:"
	eval "for (( j = 0; j < \${#group_$i[@]}; j++)); do echo \${group_$i[\$j]}; done"
done
...
```

Ew, escapes, quotings, that's just ugly. You should try to avoid it whenever possible, but it does have some actual use. As I mentioned earlier, bash (and some other shells) only has 1-dimensional array. Plus, it's not object-oriented, which sucks! I mean, bash isn't supposed to be used for more advanced programming but still. We can get around that by dynamically naming variables.

To name a variable with another variable name as part of/being its name (that's what I call 'dynamic variable naming'), we're going to use `eval`, which is a shell builtin command that evaluates a string as if it's an actual command. To prevent "special characters" getting "expanded" (substitution, basically), we can escape that character with backslash (\\), though you can also escape some with quoting.

The special characters I mentioned earlier includes a wild range of stuff including `*` and `?` (pattern matching), `~` (expands to the value of HOME variable), `!` ("event designator" for command history), `{<range>}` (sequence of numbers/letters), and also `$` (variables).

So, try running this script:

```bash
#!/bin/bash

# Patterns
ls -d /b?n # should output /bin
ls -d "/b?n" # should output "/b?n: no such file or directory"
ls -d /b\?n # should output "/b?n: no such file or direcetory"

ls -d /usr/sha* # should output /usr/share
ls -d "/usr/sha*" # should output "/usr/sha*: no such file or directory"
ls -d /usr/sha\* # should output "/b?n: no such file or direcetory"

# Home
echo My home is at ~ # should output "My home is at <your home directory>"
echo "My home is at ~" # should output "My home is at ~"
echo My home is at \~ # should output "My home is at ~"

# Sequence
echo {1..5} # should output "1 2 3 4 5"
echo "{1..5}" # should output "{1..5}"
echo \{1..5} # should output "{1..5}"

# Variables
myname="$USER"
echo I am $myname. # should output "I am <your name>."
echo "I am $myname." # should output "I am <your name>."
echo "I am \$myname." # should output "I am $myname."
```

As you can see, some of that "special characters" will not be expanded with quoting (except for variables). Alright, they are confusing and escaping stuff is pretty complicated&mdash;but that's bash. Now, we can use the eval to properly do whatever we wanted!

Here's a simple example.

```bash
#!/bin/bash

name="tom" # assign "tom" to the name variable

# The brackets surrounding a variable name is used
# to make sure that only the name inside the brackets
# is the variable name and not anything outside it.

eval "${name}_age=20" # will be executed as "tom_age=20"
eval "echo \"$name's age is \$${name}_age\"" # will be executed as:
                                             # echo "tom's age is $tom_age"
```

Output:
```
tom's age is 20
```

And now, a more complicated situation. Let's say we have to assign **every animal in an indexed array** to a **category associative array** based on its attributes we defined under the name ***animal*_attr**.

We'll first declare all the animals:

```bash
animals=("koala" "crocodile" "horse" "dolphin")
```

Cool! Then, I want to add their attributes.

```bash
declare -A koala_attr=(
["class"]="mammal"
["habitat"]="forests"
)

declare -A crocodile_attr=(
["class"]="reptile"
["habitat"]="rivers"
)

declare -A horse_attr=(
["class"]="mammal"
["habitat"]="plains"
)

declare -A dolphin_attr=(
["class"]="software"
["habitat"]="plasma"
)
```

..and we're going to assign the animals to a category in a loop!

```bash
for (( i = 0; i < ${#animals[@]}; i++ )) # for i equals 0, do this until i is less
                                         # than the length of the animals array
					 # and after each loop, increment i by 1
do
	
```
