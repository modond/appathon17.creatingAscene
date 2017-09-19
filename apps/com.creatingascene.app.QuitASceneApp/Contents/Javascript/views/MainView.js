var MainView = new MAF.Class( {
  ClassName: 'MainView',
  Extends: MAF.system.SidebarView,

  initialize: function() {
    this.parent();
    log('hello');
  },

  createView: function() {},

  updateView: function() {}
} );
