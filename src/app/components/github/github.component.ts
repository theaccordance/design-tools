import { Component } from '@angular/core';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [],
  templateUrl: './github.component.html',
  styleUrl: './github.component.less'
})
export class GithubComponent {

  repoUrl = "https://github.com/theaccordance/design-tools";
  octocat = '#ffffff';
  corner = '#000';

}
