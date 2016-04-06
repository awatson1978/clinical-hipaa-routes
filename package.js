Package.describe({
  name: 'clinical:hipaa-routes',
  version: '0.1.2',
  summary: 'Helper package with routes for Hipaa Policy templates.',
  git: 'https://github.com/awatson1978/clinical-hipaa-routes',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('hipaa-routes.js', 'client');

  api.use('meteor-platform');
  api.use('clinical:router@2.0.17');
  api.use('less');
  api.use('clinical:hipaa-policies@0.1.2');

  api.imply('clinical:hipaa-policies');

  api.addFiles('components/hipaaPolicyMenu/hipaaPolicyMenu.html');
  api.addFiles('components/hipaaPolicyMenu/hipaaPolicyMenu.less');

  api.export('hipaaPolicyMenu');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('clinical:hipaa-routes');
  api.addFiles('hipaa-routes-tests.js');
});
