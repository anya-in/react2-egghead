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

//Child Component extension 
// class App extends React.Component {
//   render() {
//     return <Button>I <Heart /> React</Button>
//   }
// }
// const Button = (props) => <button>{props.children}</button>

// class Heart extends React.Component {
//   render() {
//     return <span>&hearts;</span>
//   }
// }
//const Widget = (props) => <input type="text" onChange={props.update} />

class App extends React.Component {
  render() {
    return <Title text="The Text" />
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>
Title.propTypes = {
  text(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`missing ${propName}`)
    }
    if (props[propName].length < 6) {
      return new Error(`${propName} was too short`)
    }
  }
}

export default App