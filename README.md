## aframe-vive-control-template

A Vive Control Template for [A-Frame](https://aframe.io).

### In a Nut Shell

1) 'npm install' to load dependencies

2) Modify index.js to add custom logic to button presses. Use 'npm run dev' to test.

3) 'npm run dist' to export component to dist folder

4) Rename and add script to your project

5) Attach your custom-controls component to the same entity as vive-controls

```html
    <!-- Vive controllers -->
    <a-entity custom-controls vive-controls="hand: left"></a-entity>
    <a-entity custom-controls vive-controls="hand: right"></a-entity>
```

Note: if you wish to have different control schemes for each controller, you could either make two custom-controls components or use a single component with a schema.

### Instructions (in more detail)

This is less of a component and more of a template for generating custom control schemes for Vive controllers. It is based off of the [A-Frame Component boilerplate](https://github.com/ngokevin/aframe-component-boilerplate), so the same development server and build commands are present here. Fork, clone, or download this repository to get started.

Index.js contains the skeleton of a component. By default, it has no schema, update() or init() methods. All it does is attach a set of listeners for events emitted by the [vive-controls component](https://aframe.io/docs/master/components/vive-controls.html) ('triggerup', 'triggerdown', 'menuup'...etc). At the top are empty methods that will activate in response to these events; in other words, the code in the 'onMenuDown' method will run whenever the menu button is pressed down.

It is wise to construct a simplified example during development. Once everything is working, use 'npm run dist' to export. The resulting JavaScript file can then be added to your project.

For a finished example, see demo-controls.js in [A-Frame Dominoes](https://github.com/bryik/aframe-dominoes).