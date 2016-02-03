/**
 * Created by chenbei on 16/1/22.
 */
define(function(){
    require("./styles.css");
    var Header = require("header");
    var Content=React.createClass({
        render:function(){
            return (
                <div className="main">
                    <div className="bigTitle">常见问题应答</div>
                    <div className="subTitle">1.信用分是怎么得来的？</div>
                    <div className="content">掌上生活信用分由专业的风险研究人员对大量数据进行分析建模，将信用状况这样一个抽象的概念科学地量化成一个直观的数值。</div>
                    <div className="subTitle">2.信用分多久更新？</div>
                    <div className="content">掌上生活信用分每月17号更新，请定期查看，关注您的信用分变化。</div>
                    <div className="subTitle">3.信用分高就一定能提升额度吗？</div>
                    <div className="content">
                        掌上生活信用分是我行判断客户调额资格的参考依据之一，最终的调额资格和幅度仍以系统综合评估判定结果为准。例如，一名客户的掌上生活信用分达到优秀水平，但是他/她近期的信用卡额度使用率较低，系统仍将判定无法提升额度。
                    </div>
                </div>
            );
        }
    });
    var Help=React.createClass({
        render:function(){
            return (
                <div id="problemMainPage">
                    <Header/>
                    <Content/>
                </div>
            );
        }
    });
    return Help;
});