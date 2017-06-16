import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  styles: [
    require('./app-header.scss')
  ],
  template: `
    <header class="header">
      <div class="g-row">
        <div class="g-col">
          <h1 class="header__title">Suas Vacinas</h1>
    
          <ul class="header__links">
            <li *ngIf="authenticated"><a class="header__link" (click)="signOut.emit()" href="#">Sign out</a></li>
            <li><a class="header__link header__link--github" href="https://github.com/unb-ppca-construcao-de-software-2017/suasvacinas"></a></li>
          </ul>
        </div>
      </div>
    </header>
  `
})

export class AppHeaderComponent {
  @Input() authenticated: boolean;
  @Output() signOut = new EventEmitter(false);
}
