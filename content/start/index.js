define(function () {
    require("./styles.css");
    var Header = require("header");

    var Index = React.createClass({
        getDefaultProps: function () {
            var dt = JSON.parse(decodeURIComponent(CF.parse_purl()["data"]));
            var point = dt.point.toString();
            var len = point.length;
            dt.pointNum = "";
            switch (len) {
                case 1:
                    dt.pointNum = "00" + point;
                    break;
                case 2:
                    dt.pointNum = "0" + point.substring(0, 1) + point.substring(1, 2);
                    break;
                case 4:
                    dt.pointNum = "999";
                    break;
                default:
                    dt.pointNum = point;
                    break;
            }
            return {data: dt};

        },
        share: function () {
            var shareUrl = "http://" + window.location.host + "/share.html";
            new SH.callShare({
                pic: "http://" + window.location.host + "/public/img/share.png",
                linkUrl: shareUrl,
                describe: "我的信用分分享"
            });
        },
        render: function () {
            return (
                    <div>
                        <Header backUrl="cmblife://popweb" shareFunc={this.share} share={true} help={true}/>
                        <MainContent point={this.props.data.point} pointNum={this.props.data.pointNum}
                                     describe={this.props.data.pointDescribe}/>
                        <MainButton/>
                    </div>
            );
        }
    });
    var MainContent = React.createClass({
        getInitialState: function () {
            var start = 0;
            if (this.props.point * 1 > 100) {
                start = "100";
            } else {
                start = "000";
            }
            return {
                pointNum: start,
                interval: ""
            };

        },
        componentDidMount: function () {
            var point = this.props.point;
            var dom = this.refs.pointer;
            this.pointDegree(point, dom);

            this.animateNum(this.props.pointNum);
        },
        pointDegree: function (point, pointDeg) {
            var degree, startDegree = -60, middleLeftDegree = -20, endDegree = 60;

            if (point < 500) {
                degree = startDegree + (middleLeftDegree - startDegree) / 500 * point;
            } else if (point >= 1000) {
                degree = endDegree;
            } else {
                degree = middleLeftDegree + (endDegree - middleLeftDegree) / 500 * (point - 500);
            }

            $(pointDeg).animate({
                rotate: degree + 'deg'
            }, 1000, 'ease-in-out', function () {
            });
        },
        animateNum: function (pointNum) {
            var start = 100, that = this;
            var point = parseInt(pointNum);
            if (point < 100) {
                this.stopAnimate(pointNum);
            }
            var gap = parseInt(point / 30);
            var st = setInterval(function () {
                start = start + gap;
                if (point < start) {
                    that.stopAnimate(pointNum);
                    clearInterval(st);
                } else {
                    that.stopAnimate(start.toString());
                }
            }, 30);
            this.setState({
                interval: st
            });
        },
        stopAnimate: function (pointNum) {
            this.setState({pointNum: pointNum});
        },
        componentWillUnmount: function () {
            clearInterval(this.state.interval);
        },
        render: function () {
            return (
                <div className="mp-creditPoint">
                    <div className="mp-panel -box-align-end">
                        <div ref="pointer"></div>
                    </div>
                    <div className="mp-content box verticalBox">

                        <div>分值测评结果</div>

                        <div className="point box">
                            <div>{this.state.pointNum.substring(0, 1)}</div>
                            <div>{this.state.pointNum.substring(1, 2)}</div>
                            <div>{this.state.pointNum.substring(2, 3)}</div>
                        </div>
                        <div className={this.props.describe?"":"hidec"}>{this.props.describe}</div>
                    </div>
                    <div className="shareInfo box verticalBox">
                        <div>招商银行掌上生活全新推出信用分功能</div>
                        <div>赶快去试试吧</div>
                    </div>
                </div>
            );
        }
    });
    var MainButton = React.createClass({
        aboutPoint: function () {
            window.location.hash = "describe";
        },
        myLimit: function () {
            window.location.href = "cmblife://go?url=Limit&urlVersion=0";
        },
        render: function () {
            return (
                <div className="mp-footer">
                    <div onTouchTap={this.aboutPoint}>关于信用分</div>
                    <div onTouchTap={this.myLimit}>秒查额度</div>
                </div>

            );
        }
    });
    return Index;
})
;

