/**
 * Created by chenbei on 16/1/21.
 */
define(function(){
   var Header=React.createClass({
       back:function(){
           var url=this.props.backUrl;
           if(url){
               window.location.href = url;
           }else{
               window.history.back();
           }
       },
       help:function(){
           window.location.hash="help";
       },
       render:function(){
           return (
               <header className="box">
                   <div className="backApp" onTouchTap={this.back}></div>
                   <div className="title">我的信用分</div>
                   <div className="box">
                       <div onTouchTap={this.help} className={this.props.help?"mp-faq":"hidec"}></div>
                       <div onTouchTap={this.props.shareFunc} className={this.props.share?"share":"hidec"}></div>
                   </div>
               </header>
           );
       }
   });
    return Header;
});