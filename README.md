# Useful Shortcuts

## Browser
#### To inspect page:
- Chrome: `command option i`
- FireFox: `command option c`
<br>

## Codepen (mac | windows)
- html boilerplate markup: `! tab` 
- undo: `command z` | `control z`
- redo: `command shift z` | `control y`
- save: `command s` | `control s`
- comment/comment out: `command /` | `control /`
- indent line right: `control [` or `tab`
- indent line left: `control ]`
- new pen: `command p`
- lorem: `lorem tab`
- find: `command f` | `control f`
- jump to end of a line of code: `command + right arrow`
- refreah `command r` | `control r`

### Auto-complete:
- To set up auto-completion assist in codepen: 
    - Navigate to your Settings
    - Scroll down to 'Editor Preferences'
    - Find Editor Options and toggle 'Autocomplete'

# Atom:
- install emmet (for shortcuts like `! tab`)


# Tags and comments:
- For all single letter tags type the first letter and `tab` for auto-completion. 

        a tab -> <a href=""></a>

- To make multiples of the same tag at once:

        li*2 -> 
        <li></li>
        <li></li>

        div*5 -> 
        <div></div>
        <div></div>
        <div></div>
        <div></div>

- To write [Entities](https://www.w3schools.com/html/html_entities.asp) (also see [Symbols](https://www.w3schools.com/html/html_symbols.asp)) in html:

        &lt; -> 
        <

        &gt; ->
        >

- To write a comment in html:
        
        <!--  I'm a comment, I won't be seen on the screen (unless you're inspecting) -->

- To select all (cascading):

        * {
             css rule block
        }

# HTML structure and why it's important:

The tags (div, main, aside, footer, etc) we use to wrap around our code blocks give our webpage context, allowing browsers and people to navigate and read them easier. 

This is especially important for screenreaders!

- [Why do we wrap things in div, main, header tags?](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
- [Semantic HTML: The foundation of web accessibility](https://uxdesign.cc/semantic-html-the-foundation-of-web-accessibility-e5bbecad7c17)
- [Writing HTML Code for Screen Readers: 6 Best Practices](https://medium.com/@OPTASY.com/writing-html-code-for-screen-readers-6-best-practices-bf8f2248318)

# CSS - cascading style sheets:

There are three types of selector: Element, Class and ID, and styles are read top to bottom, least specifc to most specific (ie.trunk to leaf).
- [CSS Examples](https://www.w3schools.com/css/css_examples.asp)

Also spelling is American!

# Functions, the syntax:
A function is a reusable block of code that performs a series of tasks or calculates a value a
innumerable number of times
> It is a mini program that takes an input and returns an output

        function add(numOne, numTwo) {
                return numOne + numTwo
        } 
        console.log(add(20,30))
        // expected 50
        console.log(add(10,80))
        // expected 90

### There are four parts to a function:
#### name
- The name or declaration of the function
#### params
- The names of each argument passed into the function
#### statements
- The body of the function, aka the statements comprising the body of the code block
#### callsite
- The request to run the function

Together the name, ( parameters ), { statements } and callsite() make up a complete function.

        name(parameters){
                statements
        } 
        callsite()

# Arrays, basically:

An array is a data type that consists of an ordered collection or list of items, starting at 0.

        let fruits = ["apple", "orange", "banana"]

        // the index of each fruit item is as follows:

        fruits[0]
        // apple
        fruits[1]
        // orange
        fruits[2]
        // banana


# Interesting things to read

- [HTML structure: The Basics](https://www.w3schools.com/html/html_intro.asp)

- [Semantic html: The Basics](https://dev.to/thibpat/semantic-html-basics-in-5-minutes-ultralearning-2020-1fm0)

- [Self-closing tags aka empty tags](https://simpledev.io/html/html-self-closing-tags/)

- [HTML table: The Basics](https://www.w3schools.com/tags/tag_table.asp)

- [Normalize](http://necolas.github.io/normalize.css/)

- [Box Model Example](https://codepen.io/GAmarketing/pen/eYYjQXQ)

- [Box Sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

- [Inline Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)

- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- [Flexbox: align-items and align-content](https://betterprogramming.pub/flexbox-align-items-and-align-content-a60b6f8451e3)

- [Websafe colors](https://htmlcolorcodes.com/color-chart/web-safe-color-chart/)

- [All About display:grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

- [CSS tricks - banckground images and text](https://css-tricks.com/design-considerations-text-images/)

- [JavaScript Functions ??? Understanding The Basics](https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99)

- [Understanding arrays in JavaScript](https://medium.com/@gemma.stiles/understanding-arrays-in-javascript-38975e3378b7)

- [Javascript: let???s meet the event object](https://medium.com/launch-school/javascript-lets-talk-about-events-572ecce968d0)