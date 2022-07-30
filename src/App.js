// // import React from 'react'
// // //Components
// // // class App extends React.Component {
// // //   constructor() {
// // //     super();
// // //     this.state = {
// // //       txt: 'This is the state text'
// // //     }
// // //   }
// // //   update(e) {
// // //     this.setState({ txt: e.target.value })
// // //   }

// // //   render() {
// // //     return (
// // //       <div>
// // //         <h1>{this.state.txt}</h1>
// // //         <Widget update={this.update.bind(this)} />
// // //       </div>
// // //     )
// // //   }
// // // }

// // //Child Component extension 
// // // class App extends React.Component {
// // //   render() {
// // //     return <Button>I <Heart /> React</Button>
// // //   }
// // // }
// // // const Button = (props) => <button>{props.children}</button>

// // // class Heart extends React.Component {
// // //   render() {
// // //     return <span>&hearts;</span>
// // //   }
// // // }
// // //const Widget = (props) => <input type="text" onChange={props.update} />


// // //Custom validation
// // // class App extends React.Component {
// // //   render() {
// // //     return <Title text="The Text" />
// // //   }
// // // }

// // // const Title = (props) => <h1>Title: {props.text}</h1>
// // // Title.propTypes = {
// // //   text(props, propName, component) {
// // //     if (!(propName in props)) {
// // //       return new Error(`missing ${propName}`)
// // //     }
// // //     if (props[propName].length < 6) {
// // //       return new Error(`${propName} was too short`)
// // //     }
// // //   }
// // // }

// // //react's synthetic event system
// // class App extends React.Component {
// //   constructor() {
// //     super();
// //     this.state = { currentEvent: '---' }
// //     this.update = this.update.bind(this)
// //   }
// //   update(e) {
// //     this.setState({ currentEvent: e.type })
// //   }
// //   render() {
// //     return (
// //       <div>
// //         <textarea
// //           onKeyPress={this.update}
// //           onCopy={this.update}
// //           onCut={this.update}
// //           onPaste={this.update}
// //           onFocus={this.update}
// //           onBlur={this.update}
// //           onDoubleClick={this.update}
// //           onTouchStart={this.update}

// //           cols="30"
// //           rows="10" />
// //         <h1>{this.state.currentEvent}</h1>
// //       </div >
// //     )
// //   }
// // }
// import React from 'react'

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { a: '' }
//   }
//   update(e) {
//     this.setState({ a: this.refs.a.value, b: this.refs.b.value })
//   }
//   render() {
//     return (
//       <div>
//         <input
//           ref="a"
//           type="text"
//           onChange={this.update.bind(this)}
//         />
//         {this.state.a}
//         <hr />
//         <input
//           ref="b"
//           type="text"
//           onChange={this.update.bind(this)}
//         />
//         {this.state.b}
//       </div>
//     )
//   }
// }

// export default App
