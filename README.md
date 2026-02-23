
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById :- Its seletct a single element by its unique id and it is an Element Object.
getElementsByClassName - Its returns a live Html collection of all elements with the specified classname.
querySelector:- Its return the first element that matches a specifed CSS selector.
querySelectorAll - Its returns a static Nodelist of all elements that match a specified CSS selector.

### 2. How do you create and insert a new element into the DOM?

 To clreate and insert a new element into dom .. its nassery to create the element using...					let newElement = document.createElement(tagName);
and then
newElement.innerText = "This is ME";
then
document.body.appendChild(newElement);

### 3. What is Event Bubbling? And how does it work?
Its is a precess when an event starts from the element where it happened and then moves upward to its parent elemts.
firtst the elemnt is run in child element then -
its moving to its parents element then if there any there parent then its come to them ... like its conitues up to the document.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique where we add an event listener to a parent element instead of adding event listeners to multiple child elements.

Instead of adding click events to many buttons, we add one event listener to their parent element.
When a child is clicked, the event bubbles up to the parent, and the parent handles it.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() :- It is used to stop the default behavior of an element. 
Example: Stops form submission

stopPropagation() :- It is used to stop the event from moving to parent elements.
Example: Stops parent click event
