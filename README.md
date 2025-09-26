1.What is JSX, and why is it used?
=JSX is a JavaScript syntax extension that lets you write HTML-like code inside JavaScript. It makes UI code easier to read and maintain.

2.What is the difference between State and Props?
=State is internal, changeable data managed by a component, while props are read-only values passed from parent to child. State makes components dynamic, props make them reusable.

3.What is the useState hook, and how does it work?
=The useState hook adds state to functional components by returning a value and an updater function. Updating state with the setter re-renders the component.

4.How can you share state between components in React?
=You can share state by lifting it up to a common parent and passing it as props. For global sharing, the Context API or state libraries are used.

5.How is event handling done in React?
=React uses camelCase syntax for events instead of lowercase. Event handlers are passed as functions, not strings.