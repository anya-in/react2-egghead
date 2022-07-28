import React from 'react'
//Components
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       txt: 'This is the state text'
//     }
//   }
//   update(e) {
//     this.setState({ txt: e.target.value })
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.txt}</h1>
//         <Widget update={this.update.bind(this)} />
//       </div>
//     )
//   }
// }
class App extends React.Component {
  render() {
    return <Button>React</Button>
  }
}
const Button = (props) => <Button>{props.children}</Button>
//const Widget = (props) => <input type="text" onChange={props.update} />


export default App