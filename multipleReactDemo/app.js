/**
 * 顶部标题组件
 */
var Header = React.createClass({
  render: function(){
    return (
      <div className="index-header">
          <h2 className="subtitle">分享你的react学习经验</h2>
      </div>
    );
  }
});

/**
 * tab组件
 */
var Tabs = React.createClass({
  render: function(){
    return (
      <div className="index-tab-navs">
          <div className="navs-slider" data-active-index="0">
              <a href="#" className="active">注册</a>
              <a href="#" className="">登录</a>
              <span className="navs-slider-bar"></span>
          </div>
      </div>
    );
  }
});

/**
 * 用户注册或修改个人信息组件
 */
var UserInput = React.createClass({
  render: function(){
    return (
      <div>
        <div className="name input-wrapper">
            <input type="text" name="fullname" placeholder="姓名" />
        </div>
        <div className="email input-wrapper">
            <input type="text" className="account" name="account" placeholder="手机号或邮箱" />
        </div>
        <div className="input-wrapper">
            <input type="password" name="password" placeholder="密码（不少于 6 位）" />
        </div>
      </div>
    );
  }
});

/**
 * 验证码组件组件
 */
var Captcha = React.createClass({
  render: function(){
    return (
      <div className="input-wrapper captcha-module" data-type="en" style={this.props.blockStyle}>
          <input name="captcha" placeholder="验证码" />
          <div className="captcha-container">
              <img className="js-refreshCaptcha captcha" width="120" height="30" alt="验证码" style={this.props.blockStyle} src="./res/captcha.gif" />
          </div>
      </div>
    );
  }
});

/**
 * 表单组合组件
 */
var FormContent = React.createClass({
  render:function(){
    var blockStyle = {
      display: "block"
    };
    return(
      <div className="view view-signup selected" data-za-module="SignUpForm" style={blockStyle}>
          <form className="zu-side-login-box" action="#" autocomplete="off" novalidate="novalidate">
              <div className="group-inputs">
                  <UserInput />
                  <Captcha blockStyle={blockStyle}/>
              </div>
              <div className="button-wrapper command">
                  <button className="sign-button submit" type="submit">注册</button>
              </div>
          </form>
      </div>
    );
  }
});

/**
 * 操作组件组合
 */
var MainContent = React.createClass({
  render:function(){
    return(
      <div className="desk-front sign-flow clearfix sign-flow-simple">
          <Tabs />
          <FormContent />
      </div>
    );
  }
});

/**
 * 整个注册组件
 */
var Register = React.createClass({
  render: function(){
    return (
      <div>
        <div className="index-main">
            <div className="index-main-body">
                <Header />
                <MainContent />
            </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Register />,document.getElementById("reg"));
