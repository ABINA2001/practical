Mobile Communication and Computing Practical Day 07: Parent-Child Communication
2020ICT100
This React practical illustrates parent-to-child and child-to-parent communication using props and state within a functional component structure.

Project Overview:
This React example demonstrates parent-to-child and child-to-parent communication using props, state, and callback functions. The project consists of two main files: `App.js` (the parent component) and `Childcom.js` (the child component).
The parent component manages state using the `useState` hook, defines a state variable (`childName`), and a function (`receiveName`) to update it. This function is passed to the child as a prop, enabling the child to send data back to the parent.
In the child component, the parent's callback function is invoked to send a message (e.g., "My Name is Bob"), which the parent then uses to update its state and display the received message.  

To run the project, first, clone the repository and navigate to the project folder. Install the required dependencies using `npm install`, then start the application with `npm start`.
Finally, open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application in action. This practical example highlights key concepts like state management, props for passing data, and callback functions for two-way communication between components.
