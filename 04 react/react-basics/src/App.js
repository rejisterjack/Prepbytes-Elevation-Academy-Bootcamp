// conponent with normal function syntax

// conponent name, file name first letter should be in caps

// conponents => javascript logic(business logic) and user interface (jsx)
// jsx can have only one parent element

const App = ()=>{
  const name = "rupam";
  function getName(){
    console.log(name);
  }
  getName();
  return(
    <div>
      <div>Div 1</div>
      <div>Div 1</div>
    </div>
  )
}

export default App;