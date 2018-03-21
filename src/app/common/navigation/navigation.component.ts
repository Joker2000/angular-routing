import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  menuItems = [
    { label: 'Overview', url: 'my-account/overview' },
    { label: 'My stuff', url: 'my-account/my-stuff' },
    { label: 'Profile', url: 'profile' },
    { label: 'Non default', url: 'non-default' }
  ];
}
