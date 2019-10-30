const { h, Component, Text } = require('ink')

export class Counter extends Component
{
  constructor() {
    super();
    
    this.state = {
      i: 0
    };
  }
  
  render() {
    return (
      <Text>
        {this.state.i} tests passed
      </Text>
    )
  }
  
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ i: this.state.i + 1 });
    }, 100);
  }
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }
}


