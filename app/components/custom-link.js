import Component from '@glimmer/component';
import { inject } from '@ember/service';

export default class CustomLinkComponent extends Component {
  @inject router;

  get href() {
    return this.router.urlFor(this.args.route);
  }
}
