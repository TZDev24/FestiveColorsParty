import os  # For running terminal commands

projectName = input("Enter name of new tool / project: ")

projectName_dir = projectName
projectName_dir = projectName_dir.lower()
projectName_dir = projectName_dir.replace(" ", "-")

print(f"{projectName}")
print(f"{projectName_dir}")

# Create the directory for the project
os.system(f"mkdir {projectName_dir}")

# Create the project files
os.system(f"touch {projectName_dir}/{projectName_dir}.html")
os.system(f"touch {projectName_dir}/{projectName_dir}.css")
os.system(f"touch {projectName_dir}/{projectName_dir}.js")

# Insert HTML boilerplate automatically, automation is nice
with open(f"{projectName_dir}/{projectName_dir}.html", "w") as html:
    html.write(
        f"""<!DOCTYPE html>

<title>{projectName}</title>

<link href="{projectName_dir}.css" rel="stylesheet">

<link rel="apple-touch-icon" sizes="180x180" href="../../apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="../../favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="../../favicon-16x16.png">
<link rel="manifest" href="../../site.webmanifest">

<footer>
    <script src="{projectName_dir}.js"></script>
</footer>
"""
    )

# Generate CSS code
with open(f"{projectName_dir}/{projectName_dir}.css", "w") as css:
    css.write("""html {
    font-family: sans-serif;
    color: white;
    background-color: rgb(16, 16, 16);
}
""")
