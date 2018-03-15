import ScreenshotSuite from '../screenshot-suite';
import Screenshot from '../screenshot';

const screenshots = [
  new Screenshot('button/index.html', 'button/main.png', 'button/test.png', 'button/diff.png'),
];

const screenshotSuite = new ScreenshotSuite('Button', screenshots);

export default screenshotSuite;
