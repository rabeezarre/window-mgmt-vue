# VueJS Frontend Development Final Assignment


This is the starting template for your assignment. It starts with the frontend
as show as an example during the lecture. VueJS toolchain (configured with Vite),
is already configured.


## Getting started 

### Work groups - Personal projects

You may do this project by yourself or in group, up to 3 students working together.

If you work in group, please specify it explicitly to me when sending the project, so I
can grad all studends participating in the group.

Some of you can replace this assignment by doing a custom VueJS frontend
within the scope of their personal projects. In this case, I will provide you with
specific requirements.

### Prerequisites

As for the previous assignments, you need NodeJS and NPM.

### How to run the project


```shell
$ npm install
$ npm run dev
```


This should launch the VueJS development server, and your frontend should be 
served on <http://localhost:5173>.

### Setup your backend

The frontend is going to need a working backend. You should provide your own
backend that you're working on, as part of the backend development lecture. 

This project has a proxy setup, in order to redirect the API from your backend host,
to the host of your frontend. This is in order to avoid CORS issues.

#### How to configure the proxy

You need to edit `backend.config.js` and put the URL that hosts your backend in the 
variable `backendHost`.

For example : if your backend is running on `http://localhost:3014`, the `backend.config.js` 
file will be 

```js
export const backendHost = 'http://localhost:3014';
```

#### How the proxy works

When you launch the dev server, you now have access to the backend API on the same host
than the frontend. For example, your backend is running on `http://localhost:3014` and 
your frontend dev server is running on `http://localhost:5173`.

You can call `http://localhost:5173/api/windows` and the proxy will redirect the request
to `http://localhost:3014/api/windows`. This only works for endpoints prefixed by `api/`.

In your frontend app, make calls to `localhost:5173`, this way you won't get
permission issues for trying to access a different host.

### Bootstrap

This project uses [Bootstrap](https://getbootstrap.com/docs/5.0/) which is a CSS library.
It provides CSS classes ready to use, in order to quickly style common elements.

The code example you are provided with uses theses classes. 

You can augment your project by using Bootstrap elements, or you can write your own CSS
if you are more confortable with that. 

A bit of custom CSS is always needed, and you will see in the provided code that there
is also custom CSS.

## Assignment

### 1. Implement the "Delete" button in each window item

- You must implement a confirmation modal dialog to confirm the action (see sample HTML code)
- The button should send a request to the server to delete the window
- The list must be updated if the request is successfull

![](./assets/imgs/Confirm%20dialog.png)

### 2. Implement a form in order to create new windows

- When clicking on the "Create new window" button, the display should change
  to a creation form (see screenshot)
- On this form, when you click "Cancel", you should go back to
  the list of windows
- When clicking on "Create", you should send a request to the backend to create a
  new window
- You should handle backend errors and display an error message if the window could
  not be created (see screenshot)
- If the creation is successfull, you should go back to the updated list of window
- In the creation form : the dropdown (input of type "select"), must be populated
  with a valid list of existing rooms

See the sample HTML code for the form.

![](./assets/imgs/Creation%20form%201.png)
![](./assets/imgs/Creation%20form%202.png)
![](./assets/imgs/Creation%20form%203.png)


### 3. Implement the "rooms" screen

- Implement the MainNavigation component, in order to navigate between the tabs
  "windows" and "rooms"
- Implement the "rooms" display, as per the screenshot. This is only a display
  screen, there is no other interaction you need to implement

See the sample HTML code for rooms.

![](./assets/imgs/Rooms%20screen.png)

### Sample HTML code

In order to speed up your work, you can use these samples of HTML code.

#### Confirm dialog 

Sample HTML code, with the correct bootstrap classes, plus a bit of custom CSS 

```html
<div class="modal-background">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        Are you sure you want to delete Window 2?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary">Close</button>
        <button type="button" class="btn btn-primary">Confirm</button>
      </div>
    </div>
  </div>
</div>
```

```css
.modal-background {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
```

#### Window creation form

```html
<div class="d-flex mb-2">
  <button type="button" class="btn btn-primary me-2">Create</button>
  <button type="button" class="btn btn-danger">Cancel</button>
</div>

<div class="alert alert-danger" role="alert">
  An unexpected problem occured, the window could not be created
</div>

<form>
  <input type="text" class="form-control mb-3" placeholder="Window name">
  <select class="form-select">
    <option selected>-- Select room --</option>
    <option value="1">Room 401</option>
    <option value="2">Room 402</option>
  </select>
</form> 
```

#### Rooms screen

Sample code using bootstrap classes. You may need to add some custom CSS to adjust the visual result.

```html
<div class="border border-secondary rounded p-2 mb-2">
    <div class="top-row d-flex">
        <div class="fw-bold pe-3">Room 1</div>
        <div class="text-muted">Floor 1</div>
    </div>
    <hr>
    <div class="border border-secondary rounded p-2 mb-2">
        <div class="top-row d-flex">
            <div class="fw-bold pe-3">Window 1</div>

            <div class="ms-4">
                <span class="">&#x2B24;</span> Open
            </div>
        </div>
    </div>

    <div class="border border-secondary rounded p-2 mb-2">
        <div class="top-row d-flex">
            <div class="fw-bold pe-3">Window 2</div>

            <div class="ms-4">
                <span class="icon">&#x2B24;</span> Closed
            </div>
        </div>
    </div>
</div>
```



## Submission procedure

- The assignment is due for the 12/01/2024 in the evening.
- Please send me the project as a Git repository, or as a ZIP archive.
- Make the git repository public, so I don't have access issues.
- Email address to use : qrichaud.pro@gmail.com
- You should provide me with your backend, and instructions in order for me to be able
  to use it quickly. I don't want to guess the configuration needed for your backend to work. 
- I suggest you configure your frontend to use an online version of your API, this way the end
  user doesn't have to setup your API locally in order to test your frontend.
