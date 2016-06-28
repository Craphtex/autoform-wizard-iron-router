Package.describe({
  name: 'craphtex:autoform-wizard-iron-router',
  summary: 'Iron Router bindings for AutoForm Wizard (based on the work of forwarder).',
  version: '0.1.4',
  git: 'https://github.com/craphtex/meteor-wizard-iron-router.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'craphtex:autoform-wizard@0.9.0',
    'iron:router@1.0.0'
  ], 'client');

  api.addFiles([
    'client.js'
  ], 'client');
});
