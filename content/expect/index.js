define(function(){
	require("./styles.css");
	var Expect=React.createClass({
        backApp:function(){
        	cF.backApp();
        },
		render:function(){
			return (
				<section className="box verticalBox" id="expect">
				    <div></div>
				    <div className="box verticalBox">
				        <div className="smileTip"></div>
				        <div className="notinlistTip"></div>
				        <div className="expect">将陆续对所有用户开放</div>
				        <div className="expect">我们正在努力调试，期待在春暖花开之时与您相见！</div>
				        <div className="box backButton" onClick ={this.backApp}>返回</div>
				        <div className="defaultHeight"></div>
				    </div>
			    </section>
		    );
		}
	});
	return Expect;
});