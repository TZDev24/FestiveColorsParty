#!/usr/bin/env python3
from datetime import datetime
import os

# Do this before we do anything else
# articleDirectory = "articles"
numArticles = len(os.listdir("."))

# Hacky band-aid fix for having style_article.css in there
# Since style_article.css counts as a file, we have to subtract
# the total number of articles by 1.
#
# UPDATE: -2 instead to hack around the fact that make_new_article.py is in there too
numArticles -= 3

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
with open(f"./article-{numArticles + 1}-{articleFileName}.html", "w") as newFile:
    newFile.write(
        f"""<!DOCTYPE html>

<link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png">
<link rel="manifest" href="../site.webmanifest">

<link href="style_article_new.css" rel="stylesheet">

<title>{articleTitle} | FestiveColors.party</title>

<header>
  <h1 id="article-title">{articleTitle}</h1>
  <h3 id="article-date">{articleDate}</h3>
  <hr>
</header>

<main>

</main>

<footer>
  <a href="https://festivecolors.party">FestiveColors.party</a>
</footer>
    """
    )

# After creating an article, automatically add it to our list of articles on our website.
# TODO: work on setting up a way to automatically update the articles page
