import { AppEvents } from '../core/config/app-events';
import { AppKeys } from '../core/config/app-keys';
import { AppSelectors } from '../core/config/app-selectors';
import { Game } from './game';
import { Player } from './player';
import { Scene } from './scene/scene';

export class App {
  private rootEl: HTMLElement | null;
  private contentEl: HTMLElement | null;
  private terminalEl: HTMLInputElement | null;

  constructor(rootEl: HTMLElement | null) {
    this.rootEl = rootEl;
    if (this.rootEl) {
      this.contentEl = this.rootEl.querySelector(AppSelectors.content);
      this.terminalEl = this.rootEl.querySelector(AppSelectors.terminal);
    } else {
      this.contentEl = null;
      this.terminalEl = null;
    }
  }

  public init() {
    if (this.rootEl) {
      if (this.terminalEl) {
        this.terminalEl.focus();
        this.terminalEl.addEventListener(AppEvents.KEY_UP, (event) => {
          if (event.keyCode === AppKeys.ENTER) {
            event.preventDefault();
            if (this.terminalEl) {
              const command: string = this.terminalEl.value.trim();
              this.interpretCommand(command);
            }
          }
        });
      }
    }
  }

  private interpretCommand(command: string) {
    // TODO: this is simply showing the first scene in the game.
    // We will need this to dynamically figure out what commands mean etc.
    const scene: Scene = Game.map[Player.posY][Player.posX];
    if (this.contentEl) {
      this.contentEl.innerHTML = scene.bottomEntryText;
    } else {
      throw new Error('No content element is defined');
    }
  }
}
