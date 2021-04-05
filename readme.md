checkpoint-3 | TaskMaster
============

ToDo List
- setup HTML page
- setup List Model > connect Template from HTML > AppState for List > List Services > List Controller > Connect List to Main
- setup List Creator
- setup Task Model > connect to Template from HTML > AppState for Task > Task Services > Task Controller > Connect Task to Main
- setup Task Creator
- CSS style template and page


figma reference: https://www.figma.com/proto/KW12Zucoq79ic1KZh14T0b/TaskMaster?node-id=1%3A11&scaling=min-zoom

### Requirements
Requirements
---------------------------------------------------------------------------------------------------------------
O | All lists and tasks are rendered on load/reload
---------------------------------------------------------------------------------------------------------------
O | Lists are displayed out in columns across the page
---------------------------------------------------------------------------------------------------------------
O | Lists can be Created
---------------------------------------------------------------------------------------------------------------
O | Lists and tasks each have a delete button
---------------------------------------------------------------------------------------------------------------
O | List creation must include a title limited to 3-15 characters
---------------------------------------------------------------------------------------------------------------
O | List creation must include a color picker or minimum 5 different colors
---------------------------------------------------------------------------------------------------------------
O | Lists include a count of all tasks compared to uncompleted tasks
---------------------------------------------------------------------------------------------------------------
O | Each List must have its own Task form
---------------------------------------------------------------------------------------------------------------
O | Task title/body must be between 3-50 characters
---------------------------------------------------------------------------------------------------------------
O | Tasks can be marked complete, this will persist on reload (checked attribute)
---------------------------------------------------------------------------------------------------------------
O | Forms should not submit unless the fields adhere to the requirements
---------------------------------------------------------------------------------------------------------------
O | Lists can be Deleted
---------------------------------------------------------------------------------------------------------------
O | Tasks can be Deleted (separate from being marked complete)
---------------------------------------------------------------------------------------------------------------
O | Users are prompted to confirm any delete (search window.confirm)
---------------------------------------------------------------------------------------------------------------
O | All Data persists through local storage
---------------------------------------------------------------------------------------------------------------



Stretch Goals:
---------------------------------------------------------------------------------------------------------------
O | Use something like masonry to render the lists more elegantly
---------------------------------------------------------------------------------------------------------------
O | Use a better popup then window.confirm for a more clean user experience (see the SweetAlertJS documentation for ideas on this)
---------------------------------------------------------------------------------------------------------------
O | Play with the styling on 'completed' tasks to include a strikethrough
---------------------------------------------------------------------------------------------------------------
O | Add Toast notifications to encourage completed tasks
---------------------------------------------------------------------------------------------------------------










### Get Started

```terminal
> npm i
> npm run sass
> npm run serve
```

### AuthConfig

Fill in your AuthConfig with keys from [Auth0](https://auth0.com/)

```javascript
export const domain = '' 
export const clientId = '' 
export const audience = '' 
```
