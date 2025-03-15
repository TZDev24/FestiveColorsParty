from datetime import datetime
import os

# Do this before we do anything else
articleDirectory = "articles"
numArticles = len(os.listdir(articleDirectory))

# Hacky band-aid fix for having style_article.css in there
# Since style_article.css counts as a file, we have to subtract
# the total number of articles by 1.
numArticles -= 1

# What's the title of the article at the top?
articleTitle = input("Enter article title: ")

# To make the file more terminal friendly, when creating the file
# replace all strings with a hyphen
articleFileName = articleTitle.replace(" ", "-")

# Also remove ''
articleFileName = articleFileName.replace("'", "")

# Make the filename all lowercase, too
articleFileName = articleFileName.lower()

# print(f"{articleDirectory}/article-{numArticles + 1}-{articleFileName}.html")

# Let's automatically get the date instead of having to do it manually
articleDate = datetime.today().strftime("%d %B %Y")

# Create our new html article and automatically insert boilerplate
with open(
    f"{articleDirectory}/article-{numArticles + 1}-{articleFileName}.html", "w"
) as newFile:
    newFile.write(
        f"""<!DOCTYPE html>

<link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png">
<link rel="manifest" href="../site.webmanifest">

<link href="style_article.css" rel="stylesheet">

<title>{articleTitle} | FestiveColors.party</title>

<header>
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
