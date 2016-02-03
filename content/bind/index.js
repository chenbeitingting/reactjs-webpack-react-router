define(function(){
	require("./style.css");
	var App=React.createClass({
		 applyNow:function(){
		 	window.location.href = "cmblife://go?url=ApplyCard";
		 },
         render:function(){
            return (
				<div className="bind">
				    <div className="top"></div>
				    <div className="bottom"></div>
				    <div className="content box verticalBox">
				        <div className="sunflower"></div>
				        <div className="bindTitle"></div>
				        <div className="paragraph0 box">将陆续对所有用户开放</div>
				        <div className="paragraph1 box verticalBox">
				            <div>持招商银行信用卡的客户</div>
				            <div>将会得到更全面、准确的评价</div>
				        </div>
				        <div className="paragraph2 box verticalBox">
				            <div>没有招行信用卡？现在就申请，持卡半年后</div>
				            <div>就可尝试查询您的掌上生活信用分啦！</div>
				        </div>
				        <div className="buttonBox box">
				            <div className="button" onClick={this.applyNow}>立即申请</div>
				        </div>
				    </div>
				</div>
            );
         }	
	});
	return App;
});