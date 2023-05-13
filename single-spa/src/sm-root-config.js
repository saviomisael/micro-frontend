import { registerApplication, start } from 'single-spa';
import applications from './applications.json';

applications.applications.forEach((x) => {
  registerApplication({
    name: x.name,
    app: () => System.import(x.package),
    activeWhen: x.exact
      ? (location) => location.pathname === x.activeWhen
      : [x.activeWhen],
  });
});

start({
  urlRerouteOnly: true,
});
