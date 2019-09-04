import { AppSelectors } from './core/config/app-selectors';
import { App } from './lib/app';
import './style.css';

const rootEl: HTMLElement | null = document.querySelector(AppSelectors.root);
const app: App = new App(rootEl);

try {
  app.init();
} catch (error) {
  console.error(error);
}
