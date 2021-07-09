# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

It helps with the task of passing data through intermediate components between higher elements and lower elements.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Action is an object containing the type and data attributes (and can have some additional attribute) that are passed to the store or the middleware. The action object is adding to a queue in the store, where each will trigger a function call on and passed to the reducer sequentially. The reducer is a pure functoon, meaning it has no side effects. The current state and an action object is passed to the reducer, and a new state is returned. As actions are processed and state is updated sequentially, it improves the predictability of the code as it prevents race conditions.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

4. What is your favorite state management system you've learned and this sprint? Please explain why!
