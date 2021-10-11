String.prototype.Compile = function(obj) {
    return this.replace(/\{([\w ]+)\}/g, function($1, $2) {
        return (obj != null ? obj[$2] : void 0) == undefined ? "" : obj[$2];
    });
};
if(!String.prototype.Compile){
    String.prototype.Compile = function(obj) {
        return this.replace(/\{([\w ]+)\}/g, function($1, $2) {
            return (obj != null ? obj[$2] : void 0) == undefined ? "" : obj[$2];
        });
    };
}
if(!String.prototype.CompileHash){
    String.prototype.CompileHash = function(obj) {
        return this.replace(/#([\w ]+)#/g, function($1, $2) {
            return (obj != null ? obj[$2] : void 0) == undefined ? "" : obj[$2];
        });
    };
}
window.__checkLinks=['ipfwstudenthousing\\.com|ncshop\\.site|hihi001\\.cc|ar101\\.best|as101\\.work|effectivecpmgate\\.com|inmotionhosting\\.com|ewweyerydsffds\\.blogspot\\.com','frisk\\.chat','manyvids\\.com','wowly\\.xyz','dailyguides\\.com\\.ng','giftz\\.xyz','giftmaaterwiswe\\.com','girlssohorny\\.net','findlady2date\\.com','bit\\.ly/3xSTMFY','moreobs\\.com','highperformancecpm\\.com','naughties\\.com','soo\\.gd','thebest-datings\\.com','cutt\\.us','chl\\.li','bnc\\.it','sheissoporny\\.net','t2pdy\\.app\\.link','st\\.ht','v\\.ht','bit\\.do','ssur\\.cc','atp\\.me','da\\.gd','wantsyoumuch\\.net','day-sweet-girls\\d\\.com','-here\\.life','datedats\\d\\.com','ecircularplug\\.com','nganha\\.vip','dating\\d\\d\\.life','dating\\d\\.life','freem416glacier\\.com','bloodravencoin\\.com','xspin-web\\.com','myvnc\\.com','jackgaming\\.net','gaskenlur\\.com','cams-here-now\\.com','-app\\.link','shr\\.lc','videosexx7\\.blogspot\\.com','kammasangam\\.com','smrtsecure-','walangsanget\\.fr','localsexladies\\.com','lovegirls\\.xyz','new-lady-4you1\\.com','adsbtrk\\.com','freelovehere\\.net','qwiklover\\.com','securecamsinvite\\.com','hiiloaded\\.net','dating-clubs\\.com','nicepartnerscc\\.com','my24-casual-datings\\.com','hyperurl\\.co','crazydate8\\.xyz','amateur\\.tv','freelovehere\\.net','loverfans\\.com','nfovd\\.app','trackbyfast\\.com','cheatingbbs\\.com','gbrcty\\.site','turbodigitalpro\\.com','regruhosting\\.ru','ndywmr\\.com','duckdns\\.org','hotgirlfor','chaturbate\\.com','quickdates0\\.com','shorturl\\.ca','kielce\\.pl','naughtygi8\\.blogspot\\.com','timeoffers\\.net','securecloud','cemarabet\\.info','adult-date\\.online','ug-sports\\.net','casinoadrenaline\\.com','165908\\.com','bitstarz\\.com','v99win\\.net','flirtyho0kup\\.com','bestwomanlovemate\\.com','smsecure-dt\\.com','sh3w4nty0u\\.app','shary\\.io',
'sex-right-now1\\.com','securecd-smrt\\.com','dirtyvalentine2\\.com','secureconv-dt\\.com','fbwhores\\.net','snapgirls\\d\\.com','feelfl1rty\\.com','flirtyfind3r\\.com','instameetmatch7\\.com','datetofuck\\.net','quickdates\\d\\.com','dirtyflirt7\\.com','snapbabes\\d\\.com','passtechusa\\.com','adultdream3\\.com','4flirtytouch\\.com','flirtbangg\\.com','flirtymeetz\\.com','flirtyfinderr\\.com','dirtyvalentine3\\.com','woodstockplastics\\.com','puredate\\.net','x4kiz\\.app\\.link','nordnet\\.dk\\.global\\.prod\\.fastly\\.net','crm-softwares-retail-accounting\\.qalthifit\\.xyz','myfreesex\\.site','dating-ocean\\.com','web\\.bill-z\\.xyz','app\\.geoleads\\.xyz','mosthoties\\.com','dirtyflirt1\\.com','f33lflirty\\.com','flirtydate4u\\.com','thebest-dating\\.com','oblivionoflove\\.com','trxme\\.xyz','ohhmylover\\.com','local-chicks-here5\\.com','xzxzx\\.club','hornyhoneylovers\\.com','adultdream0\\.com','kqevn\\.grabnfuck\\.com','xcxcxcxcx\\.online','petitepartnersfinder\\.com','hotladieshere\\.net','sluttyteens\\.net','urflirtyjoy\\.com','flirtyt0uch\\.com','allgo\\.xyz','instawhores\\.net','cemeng\\.fr\\.nf','takemehere\\.net','masturbation\\.surti-ple\\.live','inztagrum\\.live','modelhub\\.com','pornhub\\.com','cheat1nggirls\\.com','flirtyparty4u\\.com','facebookdates\\.net','local-hot-dates\\.com','catchthelove\\.net','epizy\\.com','shewantsyou\\.net','bestwomanz\\.site','findurlovemate\\.net','myniceny\\.com','sign-up1\\.com','runknown017\\.xyz','luvaihoo\\.com','sugarslutsnn\\.com','playtillcum\\.com','instateens\\.net','zyns\\.com','clinicalaermitadecartagena\\.com','land-flirtgirl1\\.com','dating-plan5\\.com','hornyplaymatesfinder\\.com','imilead\\.com','niceladiesnj\\.com','nafeesavinson\\.xyz','misbahwilkins\\.xyz','shreyaplummer\\.xyz','sherricornish\\.xyz','sofiamohamed\\.xyz','junkyards\\.site','sexplayground\\.net','flirtyhookupd\\.com','findsexeasy\\.com','ismygirl\\.com','t\\.adating\\.link','letsdatemelove\\.online','instasecrets-flirt\\.com','my-hottest\\.com','resepkomplit\\.com','girls-sex-list\\.com','camsnaugtygirls\\.live','18plusstream\\.com','revenuecpmnetwork\\.com','t\\.aslnk\\.link','fl1rtymatch\\.com','regionseffective\\.com','cheatingbabez\\.com','belcampobutchery\\.xyz','bicshuntinshack\\.xyz','absolutehookups3\\.com','fl1rtymeet\\.com','findgirl1\\.com','shewantyou','dirtyvalentine1\\.com','flirtyme3t\\.com','lets-real-dating\\.com','feelfllirty\\.com','instababe\\.net','xxxsexfinder-here4\\.com','findyourlovemate\\.com','fuckbook\\.tv','coatsgroup\\.com','crossas\\.com','hoesforyou\\.net','tobeslut\\.com','edisondesign\\.link','misuanna\\.xyz','suolongarts\\.xyz','love2nights\\.com','beget\\.tech','havzza\\.com','cheatinsluts\\.com','nywap\\.online','flirrtytouch\\.com','dating-affairs-now\\.com','kandruss\\.top','dateworlds\\.net','datelocator24\\.com','dateszone\\.net','date-finder365\\.com','edisondesign\\.link','misuanna\\.xyz','suolongarts\\.xyz','facebookgirls\\.net','hotladieshere\\.net','hot-girls-here\\.com','girlwantsyou\\.net','teenisyours\\.com','datinglove\\.link','imitrk\\d\\.com','datedats\\d\\.com', 'dateshookp\\.com',
'alloremise\\.com','lc\\.chat','seositusjudi\\.com','danocton\\.com','okoce\\.club','raksasaqiu\\.com','v88sgp\\.club','livechatinc\\.com','txbzco\\.com','bolahelp\\.com','digitalpokerdiary\\.com','free-casinos\\.us','bktoto\\.com','juditim88\\.club','ceritaseks\\.asia','tokojudi\\.cc','etvhtkei\\.com','v88kartu\\.cc','hkslot\\.com','crashceme\\.club','bolafun\\.com','app\\.chaport\\.com','bursa777\\.info','webjokerbola\\.blogspot\\.com','jokerbola\\.win','agen-bola-terpercaya-deposit-murah\\.blogspot\\.com','jokerbola\\.blogspot\\.com','agen-bola-terbaik-dan-terpercaya\\.blogspot\\.com','agenbolaterpercayabonusbesar\\.blogspot\\.com',
'popcornez\\.com', 'thaidoccument\\.com','t8betvip\\.com','v998\\.link','onionhydra\\.net','slotfufu\\.com','goldwinslot\\.com','tawk\\.to','gwin678id\\.net','8b\\.io','rebrand\\.ly','togelmandiri\\d*\\.com','\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}','dewahoki\\d+\\.com','betoo\\.com','bosswin\\d+\\.net','slot\\.cc','realhotgirlss\\.com','idncash\\.me','hbo9\\.net','wantoffer\\.com','gem\\d+\\.org','gem\\d+\\.xyz','gem\\d+\\.link'];
function scheduleTime(st,start,end) {
    if(st){
        var _n = new Date();
        if(start){start=new Date(start.replace(/-/g, '/'))}
        if(end){end=new Date(end.replace(/-/g, '/'))}
        if(start&&start>_n) return false;
        if(end&&end<_n) return false;
    }
    return true;
}
function clearImage(s,w,h) {
    if(!s) return '';
    if(s.indexOf('http')!=0) s='https://fly.linkcdn.to/'+s;
    if(s.indexOf('d351p1jxpt6hnn.cloudfront.net')!=0) s=s.replace('d351p1jxpt6hnn.cloudfront.net','fly.linkcdn.to');
    if(s.indexOf('.fotoee.com')!=-1){
        if(s.indexOf('?imageView2')!=-1) s=s.split('?')[0];
        return s+'?imageView2/2'+(w?'/w/'+w:'')+(h?'/h/'+h:'');
    }
    return s;
}
function checkLink(l,t,st,l2,ti) {
    t=t||1;
    l=l||'';
    if(t==10) return 'javascript:;';
    if(!l) return 'javascript:;';
    if(st&&l2) return 'javascript:;';
    if(st==2&&t<10) return 'javascript:;';
    var reg = new RegExp("("+__checkLinks.join('|')+")", 'gi');
    if(reg.test(l.split('?')[0])) return 'https://linkfly.to/prom/404/';
    //tel://  mailto:
    if(/^tel:?\/?\/?/i.test(l)) return l.replace(/^tel:?\/?\/?/i, 'tel://');
    if(/^mailto:?\/?\/?/i.test(l)||/\w+([\w.-])*@[\w-_]+\.\w+[.|\w]*/.test(l)) return l.replace(/^(mailto:?\/?\/?)?/i, 'mailto:');
    //ele.link=/^(https?):?\/?\/?/i.test(ele.link||'')?(ele.link||'').replace(/^(https?):?\/?\/?/i, RegExp.$1+'://'):'http://'+(ele.link||'');
    if(__data.gstag&&__data.gstag.url_builder){
        l = /^(https?):?\/?\/?/i.test(l)?l.replace(/^(https?):?\/?\/?/i, RegExp.$1+'://'):'http://'+l;
        l=l+(l.indexOf('?')>0?'&':'?')+__data.gstag.url_builder;
        if(ti) l+='&utm_campaign='+ti;
    }
    return /^(https?):?\/?\/?/i.test(l)?l.replace(/^(https?):?\/?\/?/i, RegExp.$1+'://'):'http://'+l;
}
function getImageKey(s) {
    if(!s) return '';
    s=s.split('?')[0].split('/').pop();
    return s.replace(/\.\w+/gi, '').toLowerCase();
}
function isEmpty(v) {
    return (v===undefined||v===null||v==='');
}
function ep(tar,selector){
    selector=selector||"div";
    if (selector && tar && tar.nodeName != 'HTML') {
        if (selector.indexOf('.')!=-1) {
            var _sel = selector.split('.');
            if((!_sel[0]||tar.nodeName==_sel[0].toUpperCase())&&tar.classList.contains(_sel[1])){
                return tar;
            }else {
                return ep(tar.parentNode,selector);
            }
        }else if (selector.indexOf('#')!=-1) {
            var _sel = selector.split('#');
            if((!_sel[0]||tar.nodeName==_sel[0].toUpperCase())&&tar.id==_sel[1]){
                return tar;
            }else {
                return ep(tar.parentNode,selector);
            }
        }else{
            var _sel = [selector];
            if(tar.nodeName==_sel[0].toUpperCase()){
                return tar;
            }else {
                return ep(tar.parentNode,selector);
            }
        }
    }else{
        return null;
    }
}
(function (d,s) {
    var baseTmpl=`<script id="form-tmpl-ct" type="text/template">
    <div class="form-tmpl animate__animated animate__fadeInUp">
        <p class="form-tmpl-close"><i class="iconfont icon-close"></i></p>
    </div>
</script>
<script id="form-tmpl-1" type="text/template">
    <div class="form-subscribe">
        <div class="form-control form-title" data-param="title">
            <span>{title}</span>
        </div>
        <div class="form-control form-fullname" data-param="fullname">
            <input type="text" placeholder="{fullname}" name="fullname">
        </div>
        <div class="form-control form-email" data-param="email">
            <input type="text" placeholder="{email}" name="email">
        </div>
        <div class="form-control form-submit">
            <div class="form-button " data-param="btn_text">
                <button class="">{btn_text}</button>
            </div>
            <div class="form-thanks" data-param="thanks_text">
                <span>{thanks_text}</span>
            </div>
        </div>
    </div>
</script>
<script type="text/template" id="form-tmpl-css">
    .form-tmpl{
        {css}
    }
</script>
<script type="text/plain" id="shareLoading"><div class="loader">
    <span></span><span></span><span></span><span></span><span></span>
</div></script>
<script type="text/plain" id="btnLinkTmpl">
<div class="item item-style {animation}" style="background-color:{bcolor};border-color:{bcolor}">
<div class="ctm-style">
    <span class="btn-img {displayImg}" style="background-image: url('{icon}')"></span>
    <span class="btn-icon {displayIcon} iconfont {iconfont}"></span>
    <a href="{link1}" target="{target}" data-title="{title}" data-txt="{text}" data-embed="{link2}" data-path="{path}" data-st="{subtype}" data-html="{link}" data-id="{lid}" data-kid="{id}" data-type="{type}" class="btn link" style="color:{tcolor};"><p>{title}</p><p class="link-text">{linktext}</p></a>
</div>
</div>
</script>
<script type="text/plain" id="socialLinkTmpl">
    <a href="{link1}" data-title="{title}" data-html="{link}" data-id="{lid}" data-kid="{id}" data-type="4"><sp class="{blendMode}" style="background-image:url({image}),linear-gradient(var(--link-social-color-blend), var(--link-social-color-blend));"></sp></a>
</script>
<script type="text/plain" id="socialLinkSVGTmpl">
    <a href="{link1}" data-title="{title}" data-html="{link}" data-id="{lid}" data-kid="{id}" data-type="4"><sp class="iconfont icon-social-{st}-{type}" style="background-image:url({image1}),linear-gradient(var(--link-social-color-blend), var(--link-social-color-blend));"></sp></a>
</script>`;

    d.head.innerHTML += baseTmpl;
}(document,'script'));