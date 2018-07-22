import { Spark } from './spark';
import TestView from './views/TestView';
import './style.css';
import Icon from './image.png';

function component() {
  var element = document.createElement('div');
  var spark = new Spark('#mainPoint').addChild(new TestView());
  return element;
}

document.body.appendChild(component());
