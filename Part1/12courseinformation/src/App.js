const Header = (props) => {
  return (
    <div>
        <h1>{props.course}</h1>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
        <Part name={props.p1} number={props.e1} />
        <Part name={props.p2} number={props.e2} />
        <Part name={props.p3} number={props.e3} />
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>{props.name}: {props.number}</p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Total: {props.e1 + props.e2 + props.e3}</p>
    </div>
  )
}
const App = () => {
  //Const definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of react'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content p1={part1} e1={exercises1} p2={part2} e2={exercises2} p3={part3} e3={exercises3}/>
      <Total e1={exercises1} e2={exercises2} e3={exercises3} />
    </div> 
  )
}

export default App