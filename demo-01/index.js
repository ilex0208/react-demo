class Home extends React.Component {
  //use state
  constructor(props){
    super(props);
    this.state = {
      height:100
    };
  }
  render() {
    var { name,age,descr, pic} = this.props;
    var {height} = this.state;
    return (
      <div className="profile-box">
        <h2>name:{name}</h2>
        <h2>age:{age}</h2>
        <h2>descr:{descr}</h2>
        <img src={pic} height={height}/>
        <br />
        <button onClick={this.zoomOut.bind(this)}>-</button>
        <button className="greenBtn" onClick={this.zoomIn.bind(this)}>+</button>
      </div>
    );
  }
  zoomIn(){
      let temp = this.state.height + 100;
      if(temp > 500){
          temp = 500;
      }
      this.setState({height:temp});
  }
  zoomOut(){
      let temp = this.state.height - 100;
      if(temp < 50){
          temp = 50;
      }
      this.setState({height:temp});
  }
}
React.render( <Home 
  name = 'ilex'
  age = {23}
  descr = 'my github profile'
  pic = 'https://avatars2.githubusercontent.com/u/7751328?v=3&s=460' / > , document.getElementById("app"));
