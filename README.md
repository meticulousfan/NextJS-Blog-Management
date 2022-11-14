### Requirements

- Node >=12.22 and <=14.20 -- recommend using 14.20
- An internet connection

### Getting Started

Install npm dependencies by running `npm ci`. You should see output that looks like

```sh
$ npm ci
npm WARN prepare removing existing node_modules/ before installation
added 31 packages in 3.928s
```

Start the development server by running `npm start`. You should see output that looks like

```sh
$ npm start

> take-home-test@1.0.0 start /home/tills13/dev/take-home-test
> next

ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

Use your browser of choice to access the app url. In the example above, you would use `http://localhost:3000`. If you have something else running on port 3000, next will automatically use a different port.

### Context

**NextJS** is an opinionated React framework. It provides many things, but was chosen specifically for this example due to its built-in routing and dev. server.

While not required, you can read more about NextJS [here](https://nextjs.org/docs). _Note_ that you may or may not use the built-in routing in your solution.

**TypeScript** is a JavaScript superset which adds static typing. This test uses TypeScript and your solution should not have any explicit type errors. You may run `npm run lint` to run linting and enumerate type errors. If you find yourself stuck fighting types, you may use the [`any` escape-hatch](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any) without penalty, though we believe TypeScript is generally fair, and suggest you try to understand why you are needing to use `any`.

### Your Task

In `pages/index.tsx`, you will find a page responsible for displaying a list of Users. This list is currently static. Your first task will be to fetch the list of users from [`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users) and display the result as it is currently.

There are many ways to complete this task, some within NextJS itself, others by using only React constructs. It is up to you to decide how you want to approach this.

In `pages/index.tsx`, you will find a variable called `showNewsletterWidget` controlling the visibility of a fake newsletter signup form. Your second task will be to, 10 seconds after the page loads, show the newsletter form.

There is a performance concern with this form: the submit button, `HeavyButton`, takes multiple seconds to render. Typing in the input field results in a very sluggish experience. Update `NewsletterSignupForm` such that typing into the input is not laggy despite `HeavyButton`'s render performance.

Users have posts. You can fetch the posts for a particular user via the following URL, in this case for a user with an ID of `1`: [`https://jsonplaceholder.typicode.com/users/1/posts`](`https://jsonplaceholder.typicode.com/users/1/posts`). Your third task will be to add some new functionality to the app. When you click on a user in the `UserList` component, the user's posts should be fetched and displayed in a list. You may use the provided `Post` component to display the post in the list.

Again, there are many ways to accomplish this task. It is _not_ required to have the URL update when viewing a user's posts.

Finally, when viewing a user's posts, implement a form with `title` and `body` fields that, when `POST`ed to `https://jsonplaceholder.typicode.com/posts` as JSON "creates" the post and updates the _local_ list of posts displayed to the user. The ID of the user whose posts you are viewing will need to be passed along to the endpoint as well. While the create request is in flight, the button to submit the form should be disabled.

You can use the [`createNewPost`](./utils/createNewPost.ts) utility function for this.

**NOTE** that the _remote_ list of posts from `jsonplaceholder.typicode.com` **will not update** as the creation is faked. Reloading the page, for example, will clear your newly created post.
