/*jshint node:true*/
module.exports = {
  description: '',

  normalizeEntityName: function() {
    // noop
  },

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    return this.addBowerPackageToProject('bourbon', '4.2.6').then(() => {
      return this.addBowerPackageToProject('neat', '1.7.3');
    });
  }
};
