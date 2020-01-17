- [x] Why would you use class component over function components (removing hooks from the question)?

  •	If you need to control or manipulate a particular part of the lifecycle method. Hooks don’t have this same functionality.

- [x] Name three lifecycle methods and their purposes.

  •	componentDidMount – calling/loading data to your component
  •	componentDidUpdate - Updating the DOM in response to prop or state changes.
  •	componentWillUnmount - Cleaning up any leftover debris from your component.
  Src: https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1

- [x] What is the purpose of a custom hook?

  •	By building out a custom hook, we can skip writing out all of the stateful logic for our non-visual behavior. Custom hooks produce beautiful, DRY code that is easy to read and use. You have built a reusable piece of code that makes it easy for you to import anywhere in your application and build out stateful logic in any of your components.

- [x] Why is it important to test our apps?

  •	 Automated testing minimizes the risk of bugs finding their way into production code.