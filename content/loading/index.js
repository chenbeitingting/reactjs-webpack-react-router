/**
 * Created by chenbei on 16/1/21.
 */
define(function () {
    require("./styles.css");
    var Loading = React.createClass({
        componentDidMount: function () {
            var body=CF.parse_purl()["body"];
            var url=["index","bind","expect"];
            new AJ().doPost({
                purl: "/CreditPoint/getDetailUrl",
                data: {body: body},
                sucFunc:function(res){
                    if(res.userStatus.toString()==="1"){
                        var data=encodeURIComponent(JSON.stringify(res.data));
                        window.location.hash=url[0]+"?data="+data+"&body="+body;
                    }else if(res.userStatus.toString()==="3"){
                        window.location.hash=url[1];
                    }else{
                        window.location.hash=url[2];
                    }
                },
                errorFunc: function () {
                    window.location.hash=url[2];
                },
                //ajax请求异常错误
                timeOutFunc: function () {
                    window.location.hash=url[2];
                }
            });
        },
        render: function () {
            return (
                <section className="login box verticalBox">
                    <div className="box">查询中……</div>
                </section>
            );
        }
    });
    return Loading;
});