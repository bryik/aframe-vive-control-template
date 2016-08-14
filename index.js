/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * Vive Control Template for A-Frame.
 */
AFRAME.registerComponent('custom-controls', {
  schema: { },

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,

  /**
   * Grip control.
   */
  onGripDown: function () {
    console.log('GRIP DOWN');
  },
  onGripUp: function () {
    console.log('GRIP UP');
  },

  /**
   * Trackpad control.
   */
  onTrackpadDown: function () {
    console.log('TRACKPAD DOWN');
  },
  onTrackpadUp: function () {
    console.log('TRACKPAD UP');
  },

  /**
   * Trigger control.
   */
  onTriggerDown: function () {
    console.log('TRIGGER DOWN');
  },
  onTriggerUp: function () {
    console.log('TRIGGER UP');
  },

  /**
   * Menu control.
   */
  onMenuDown: function () {
    console.log('MENU DOWN');
  },
  onMenuUp: function () {
    console.log('MENU UP');
  },

  /**
   * Methods to add and remove event listeners.
   * You may not need all of them.
   */
  addEventListeners: function () {
    var el = this.el;
    el.addEventListener('gripdown', this.onGripDown.bind(this));
    el.addEventListener('gripup', this.onGripUp.bind(this));
    el.addEventListener('trackpaddown', this.onTrackpadDown.bind(this));
    el.addEventListener('trackpadup', this.onTrackpadUp.bind(this));
    el.addEventListener('triggerdown', this.onTriggerDown.bind(this));
    el.addEventListener('triggerup', this.onTriggerUp.bind(this));
    el.addEventListener('menudown', this.onMenuDown.bind(this));
    el.addEventListener('menuup', this.onMenuUp.bind(this));
  },

  removeEventListeners: function () {
    var el = this.el;
    el.removeEventListener('gripdown', this.onGripDown);
    el.removeEventListener('gripup', this.onGripUp);
    el.removeEventListener('trackpaddown', this.onTrackpadDown);
    el.removeEventListener('trackpadup', this.onTrackpadUp);
    el.removeEventListener('triggerdown', this.onTriggerDown);
    el.removeEventListener('triggerup', this.onTriggerUp);
    el.removeEventListener('menudown', this.onMenuDown);
    el.removeEventListener('menuup', this.onMenuUp);
  },

  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause: function () {
    this.removeEventListeners();
  },

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function () {
    this.addEventListeners();
  },


  /* DEFAULT COMPONENT METHODS
   * You may delete these if unused.
   */

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {},

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) { },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () {
    this.removeEventListeners();
  }

  /**
   * Called on each scene tick.
   */
  // tick: function (t) { },

});
