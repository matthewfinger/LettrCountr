# LettrCountr
A simple, two file HTML/JS web app that displays a live count of both letters and words within a text

Isn't it annoying when lazy devs don't provide a workaround for max characters in a form? It's always irritating to have your train of thought cut off when you reach the limit and the words you're thinking don't appear on the screen?

This simple letter and word counter was created as a minimal and lightweight solution you can use to keep count of words and letters, without going through the hassle of more heavy duty program such as Microsoft Word. I found it so convenient that I bookmarked it in my browser so it's always only one click away.

Simply open the index.html file in a web browser to use a simple tool to count letters and words of a text. You can host it statically from a server as well.

Lastly, you can create your own HTML/CSS solution to provide a more stylized look, just make sure to satisfy the following:
  1) A textarea must be specified with the id of "textarea"
  2) Two EMPTY HTML elements that can contain text (ie. div, p, span) must exist, one with an id of "wordcount" and the other with the id of "charcount" 
  3) The "master.js" file must be accessed and run on the page

Note that:
  1) the textarea will be the area for a user to enter the input that will be counted
  2) the element with an id of "charcount" will be used to display (as innerHTML) the the number of characters in the textarea
  3) the element with an id of "wordcount" will be used to display (as innerHTML) the number of words in the textarea

Copyright Nov. 3, 2020, Matthew Finger
