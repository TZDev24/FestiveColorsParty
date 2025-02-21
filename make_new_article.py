from datetime import datetime
import os

# Do this before we do anything else
articleDirectory = "articles"
numArticles = len(os.listdir(articleDirectory))

# What's the title of the article at the top?
articleTitle = input("Enter article title: ")

# To make the file more terminal friendly, when creating the file
# replace all strings with a hyphen
articleFileName = articleTitle.replace(" ", "-")
# Also remove ''
articleFileName = articleFileName.replace("'", "")
# Make the filename all lowercase, too
articleFileName = articleFileName.lower()

print(f"{articleDirectory}/article-{numArticles + 1}-{articleFileName}.html")

# Let's automatically get the date instead of having to do it manually
articleDate = datetime.today().strftime("%d %B %Y")

# Create our new html article and automatically insert boilerplate
with open(
    f"{articleDirectory}/article-{numArticles + 1}-{articleFileName}.html", "w"
) as newFile:
    newFile.write(
        f"""<!DOCTYPE html>

<header>
  <link href="../style.css" rel="stylesheet">
  <h1 class="article-title">{articleTitle}</h1>
  <p>{articleDate}</p>
</header>

<main class="article-main-content">

</main>

<footer class="article-bottom">
  <a href="https://festivecolors.party">FestiveColors.party</a>
</footer>
    """
    )
