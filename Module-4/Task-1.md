## First task
Create a react app using npx-create-react@latests

1. Create a folder called Components and inside this folder create a folder called task 1
2. Create 3 functional components
  * Button 
   * The props for button should be
    * onClick - text
  * TextDisplay
  * The props for TextDisplay should be 
    * text
  * Counter
 3. In the Button component create a button passing the onClick  and the text props.
    IE.
  ``` 
  <button onClick={onClick}>{text}</button>
  ```
  4. In the TextField component create a h2 passing the text prop as the h2 text
 import the Button and the Text component 
  ```
  <h2>{text}</h2>
  ```
  5. Import both components to the Counter component and create a counter that starts in zero. The counter should allow to increment/decrement the value and shows the value