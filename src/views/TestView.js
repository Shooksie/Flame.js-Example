import { Component, Text, Div, Button } from '../spark';


export default class TestView extends Component {
  constructor() {
    super();
  }
  render() {
    console.log(Div);
    const ButtonClick = new Button();
    const TextValue = new Text();
    TextValue.setValue('hey')
    ButtonClick.onClick(()=> {
      TextValue.setValue('whats up')
    });
    const MainDiv = new Div();
    console.log(TextValue);
    MainDiv.setChild(TextValue);
    MainDiv.setChild(ButtonClick);
    return MainDiv;
  }
}
