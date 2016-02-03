/**
 * Created by z672626 on 2016/1/6.
 */
define(function(){
    /*
     * @class SH
     * @description  ԭʼҳ����ÿͻ��˷���
     * @example
     *   new SH.callShare({
     *     pic:"http://" + window.location.host + pic[flag].img,
     *     linkUrl:shareUrl,
     *     describe:pic[flag].desc,
     *     short:true,//�Ƿ���Ҫ���ö����ӽӿ�
     *     shortUrl:"/CreditPoint/getShare",
     *      shortParam:body
     *  });
     * */
    var SH = {};
    SH.callShare = function (options) {
        var defaults = {
            /**
             * @param pic {String}
             * @description ����Сͼ��
             */
            pic: "",
            /**
             * @param linkUrl {String}
             * @description ����������
             */
            linkUrl: "",
            /**
             * @param describe {String}
             * @description ��������
             */
            describe: "",
            /**
             * @param short {Boolean}
             * @description �Ƿ���Ҫ���ö����ӽӿ�
             */
            short: false,//�Ƿ���Ҫ���ö����ӽӿ�
            /**
             * @param shortUrl {String}
             * @description �����ӽӿڵ�ַ
             */
            shortUrl: "",
            /**
             * @param shortParam {String}
             * @description ������body����
             */
            shortParam: "",
            /**
             * @param suncFunc {Function}
             * @description �����Ļص�
             */
            suncFunc: function () {

            }
        };
        $.extend(defaults, options);
        this.initialize(defaults);
    };
    SH.callShare.prototype = {
        /**
         * ��ʼ������
         * @param options
         */
        initialize: function (options) {
            this.setOptions(options);
            if (!this.short) {
                this.shareOs();
            } else {
                this.shortPost();
            }
        },
        /*
         * �ϲ�����
         * @param options
         * */
        setOptions: function (options) {
            $.extend(this, options);
        },
        /*
         * ���ö����ӽӿ�
         * */
        shortPost: function () {
            var _this = this;
            new base().doPost({
                purl: _this.shortUrl,
                data: {url: _this.linkUrl, body: _this.shortParam},
                sucFunc: function (data) {
                    _this.linkUrl = data.shortUrl;
                    _this.shareOs();
                },
                errorFunc: function () {
                    _this.shareOs();
                },
                //ajax�����쳣����
                timeOutFunc: function () {
                    _this.shareOs();
                }
            });
        },
        /*
         * ���ÿͻ��˷���
         * */
        shareOs: function () {
            var shareData = {
                content: this.describe,
                url: this.linkUrl,
                picUrl: this.pic
            };
            console.log(shareData.url);
            window.location.href = "cmblife://share?content=" + encodeURIComponent(shareData.content)
                + "&linkurl=" + encodeURIComponent(shareData.url)
                + "&picurl=" + encodeURIComponent(shareData.picUrl);
        }
    };
    /**
     *@global
     */
    return SH;


});
