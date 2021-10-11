(function(d){if(!String.prototype.Format){String.prototype.Format=function(){var result=this;if(arguments.length>0){for(var i=0;i<arguments.length;i++){if(arguments[i]==null)arguments[i]='';var reg=new RegExp("(\\{"+i+"\\})","g");result=result.replace(reg,arguments[i]);}}
return result;};}
if(!String.prototype.Compile){String.prototype.Compile=function(obj){return this.replace(/\{([\w ]+)\}/g,function($1,$2){return(obj!=null?obj[$2]:void 0)==undefined?"":obj[$2];});};}
var Lfy_Theme_2_CSS_Text={'font':'body{font-family:{0};}','title_color':'.text h3{color:{0}!important;}','desc_color':'.desc{color:{0}!important;}',};var Lfy_Theme_2_CSS_Button={'style':{'radius0.background':`.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important;background-color:transparent;}
.item{border-radius:0;background-color:var(--link-button-color,--link-button-color-default)!important;border:0!important;}`,'radius12.background':`.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important;background-color:transparent;}
.item{border-radius:12px;background-color:var(--link-button-color,--link-button-color-default)!important;border:0!important;}`,'radius50.background':`.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important;background-color:transparent;}
.item{border-radius:50vh;background-color:var(--link-button-color,--link-button-color-default)!important;border:0!important;}`,'radius0.border.hide-opacity':`.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important;background-color:transparent;}
.item{border-radius:0;background-color:rgba(0,0,0,0)!important;border:2px solid var(--link-button-color,--link-button-color-default)!important;}`,'radius12.border.hide-opacity':`.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important;background-color:transparent;}
.item{border-radius:12px;background-color:rgba(0,0,0,0)!important;border:2px solid var(--link-button-color,--link-button-color-default)!important;}`,'radius50.border.hide-opacity':`.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important;background-color:transparent;}
.item{border-radius:50vh;background-color:rgba(0,0,0,0)!important;border:2px solid var(--link-button-color,--link-button-color-default)!important;}`,'style1.border.hide-opacity':`.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important;margin:0;;background-color:transparent;}
.item-style{
    background-color: rgba(0,0,0,0)!important;
    border-radius:0;
    border: 2px solid var(--link-button-color,--link-button-color-default)!important;
}
.item-style .ctm-style {
    border-bottom: 2px solid var(--link-button-color,--link-button-color-default)!important;
}`,'style2.background':`.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important}
.item-style{
    background-color: rgba(0,0,0,0)!important;
    border-radius:0;
    border: 2px solid var(--link-button-color,--link-button-color-default)!important;
}
.item-style .ctm-style {
    margin:3px;
    border:0;
    background-color:var(--link-button-color,--link-button-color-default)!important;
}`,'style3.border.hide-opacity':`.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important}
.item-style{
    background-color: rgba(0,0,0,0)!important;
    border-radius:0;
    border:1px solid rgba(0,0,0,0)!important;
}
.item-style::before{
    position:absolute;top:0;left:0;
    content:"";display: block;
    width:40px;height:32px;border:2px solid var(--link-button-color,--link-button-color-default);
    border-bottom:0!important;
    border-right:0!important;
}
.item-style::after{
    position:absolute;bottom:0;right:0;
    content:"";display: block;
    width:40px;height:32px;border:2px solid var(--link-button-color,--link-button-color-default);
    border-top:0!important;
    border-left:0!important;
}
.item-style .ctm-style {
    margin:5px;
    background-color: rgba(0,0,0,0)!important;
    border-radius:0;
    border: 2px solid var(--link-button-color,--link-button-color-default)!important;
}`,'style4.border.hide-opacity':`.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important;margin:0;background-color:transparent;}
.item-style{
    background-color: rgba(0,0,0,0)!important;
    border-radius:0;
    border: 2px dashed var(--link-button-color,--link-button-color-default)!important;

}
.item-style .ctm-style {
    margin:0;
    border:0;
}`,'style5.border.hide-opacity':`.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important}
.item-style{
    background-color: rgba(0,0,0,0)!important;
    border-radius:0;
    border:1px solid rgba(0,0,0,0)!important;
}
.item-style::before{
    position:absolute;top:6px;left:-8px;
    content:"";display: block;
    width:8px;height:100%;
    background:var(--link-button-color,--link-button-color-default);
}
.item-style::after{
    position:absolute;bottom:-8px;right:8px;
    content:"";display: block;
    width:100%;height:8px;
    background:var(--link-button-color,--link-button-color-default);
}
.item-style .ctm-style {
    margin:0;
    background-color: rgba(0,0,0,0)!important;
    border-radius:0;
    border: 2px solid var(--link-button-color,--link-button-color-default)!important;
}
.item-style .ctm-style:before{
    position: absolute;
    top: -2px;
    left: -10px;
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-bottom: 6px solid var(--link-button-color,--link-button-color-default);
    border-left: 8px solid transparent;
}
.item-style .ctm-style:after{
    position: absolute;
    bottom: -10px;right: -2px;
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 8px solid var(--link-button-color,--link-button-color-default);
    border-right: 8px solid transparent;
}`,'style6.border.hide-opacity':`.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important}
.item-style {
    background-color: rgba(0,0,0,0) !important;
    border-radius: 0;
    border: 1px solid rgba(0,0,0,0) !important;
}
.item-style::before {
    position: absolute;
    top: 6px;
    left: -8px;
    content: "";
    display: block;
    width: 2px;
    height: 100%;
    background: var(--link-button-color,--link-button-color-default);
}
.item-style::after {
    position: absolute;
    bottom: -7px;
    right: 8px;
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: var(--link-button-color,--link-button-color-default);
}
.item-style .ctm-style {
    margin: 0;
    background-color: rgba(0, 0, 0, 0) !important;
    border-radius: 0;
    border: 2px solid var(--link-button-color,--link-button-color-default) !important;
}
.item-style .ctm-style:before {
    position: absolute;
    top: 1px;
    left: -10px;
    content: "";
    display: block;
    width: 10px;
    height: 2px;
    background: var(--link-button-color,--link-button-color-default);
    transform: rotate(-36deg);
}
.item-style .ctm-style:after {
    position: absolute;
    bottom: -6px;
    right: -2px;
    content: "";
    display: block;
    width: 10px;
    height: 2px;
    background: var(--link-button-color,--link-button-color-default);
    transform: rotate(-45deg);
}`,},'thumbnail_style':{'radius0.background':'.item span{border-radius:0;}','radius12.background':'.item span{border-radius:12px;}','radius50.background':'.item span{border-radius:50%;}'},'text_color':'.item .btn{color:{0}!important}','color':'--link-button-color:{0};','opacity':'',};var Lfy_Theme_2_CSS_Thumbnail={'style':{'origin':`.item .btn-img{display:inline-block;}
    .item .btn-icon{display:none;}`,'borderColor':`.item .btn-img{display:none;}
              .item .btn-icon{display:inline-block;}`},'radius':{'radius0':'.item .btn-img,.item .btn-icon{border-radius:0!important;}','radius':'.item .btn-img,.item .btn-icon{border-radius:var(--link-button-radius12, 12px)!important;}','radius12':'.item .btn-img,.item .btn-icon{border-radius:var(--link-button-radius12, 12px)!important;}','radius50':'.item .btn-img,.item .btn-icon{border-radius:50%!important;}'},'color':`--link-button-bg-thumbnail-color:{0};
    --link-button-bg-thumbnail-border-color:{0};
    --link-button-border-thumbnail-color:{0};
    --link-button-border-thumbnail-border-color:{0};
`,};var Lfy_Theme_2_CSS_Background={'color':'.bg{background-image:initial;background-color:{0};}','gradient':{'gradient.style.flat':'--link-background-gradient-style:to right;','gradient.style.up':'--link-background-gradient-style:to bottom;','gradient.style.down':'--link-background-gradient-style:to top;','gradient.color.default':'','gradient.color.color1':`.bg{background-image:linear-gradient(var(--link-background-gradient-style), #EF629F, #EECDA3)}`,'gradient.color.color2':`.bg{background-image:linear-gradient(var(--link-background-gradient-style), #F64F59, #C471ED, #12C2E9)}`,'gradient.color.color3':`.bg{background-image:linear-gradient(var(--link-background-gradient-style), #FDBB2D, #22C1C3)}`,'gradient.color.color4':`.bg{background-image:linear-gradient(var(--link-background-gradient-style), #1D2671, #C33764)}`,'gradient.color.color5':`.bg{background-image:linear-gradient(var(--link-background-gradient-style), #2C3E50, #BDC3C7)}`,'gradient.color.color6':`.bg{background-image:linear-gradient(var(--link-background-gradient-style), #B91D73, #F953C6)}`,'gradient.color.color7':`.bg{background-image:linear-gradient(var(--link-background-gradient-style), #C6FFDD, #FBD786, #F7797D)}`,'gradient.color.color8':`.bg{background-image:linear-gradient(var(--link-background-gradient-style), #0083B0, #00B4DB)}`,'gradient.color.color9':`.bg{background-image:linear-gradient(var(--link-background-gradient-style), #185A9D, #43CEA2)}`,'gradient.color.color10':`.bg{background-image:linear-gradient(var(--link-background-gradient-style), #870000, #190A05 35%)}`,'gradient.color.color11':`.bg{background-image:linear-gradient(var(--link-background-gradient-style), #EEF2F3, #8E9EAB)}`,},'image':{'style':{'default':'.css-null{{0}}','gallery':`body{background:rgba(0,0,0,0);}
.bg-container{width:120%;height:120vh;top:-10%;left:-10%;}
.bg{
    background-image: linear-gradient(rgba(0, 0, 0, var(--link-background-image-opacity)),rgba(0, 0, 0, var(--link-background-image-opacity))), url({0});
    -webkit-filter: blur(var(--link-background-image-blur));
    -moz-filter: blur(var(--link-background-image-blur));
    -ms-filter: blur(var(--link-background-image-blur));
    filter: blur(var(--link-background-image-blur));
}`,'upload':`body{background:rgba(0,0,0,0);}
.bg-container{width:120%;height:120vh;top:-10%;left:-10%;}
.bg{
    background-image: linear-gradient(rgba(0, 0, 0, var(--link-background-image-opacity)),rgba(0, 0, 0, var(--link-background-image-opacity))), url({0});
    -webkit-filter: blur(var(--link-background-image-blur));
    -moz-filter: blur(var(--link-background-image-blur));
    -ms-filter: blur(var(--link-background-image-blur));
    filter: blur(var(--link-background-image-blur));
}`,},'blur':'--link-background-image-blur:{0}px;','opacity':'--link-background-image-opacity:{0};',},};var Lfy_Theme_2_CSS_Social={'style':{'style1.image.hide-color':`.social_list-spirit{display:flex;}
    .social_list-svg-3{display:none;}
    .social_list-svg-4{display:none;}
    .social_list a sp{
        background-position-x: 0;
        background-blend-mode:initial;
}`,'style2.color':`.social_list-spirit{display:flex;}
    .social_list-svg-3{display:none;}
    .social_list-svg-4{display:none;}
    .social_list a sp{
        background-position-x: -30px;
        background-blend-mode: lighten;
}`,'style3.color':`.social_list-spirit{display:none;}
.social_list-svg-3{display:flex;}
.social_list-svg-4{display:none;}
.social_list a sp{color:var(--link-social-color-shadow, --link-social-color-default)}
`,'style4.color':`.social_list-spirit{display:none;}
.social_list-svg-3{display:none;}
.social_list-svg-4{display:flex;}
.social_list a sp{color:var(--link-social-color-shadow, --link-social-color-default)}
`,'style5.image.hide-color':`.social_list-spirit{display:flex;}
    .social_list-svg-3{display:none;}
    .social_list-svg-4{display:none;}
    .social_list a sp{
        background-position-x:30px;
        background-blend-mode:initial;
}`},'color':`--link-social-color-shadow:{0};
--link-social-color-blend:{1};`};var _IMAGE_DOMAIN='https://fly.linkcdn.to/';function _int(num){num=parseInt(num,10);if(isNaN(num))return 0;return num;}
function _parse_style(style,m){var _HIDE_RE_COMPILE=/\.hide(-(\w+))+/ig,_HIDE_RE_COMPILE_MATCH=/-(\w+)/ig;style=(typeof style!=='undefined')?style:'';m=(typeof m!=='undefined')?m:'hide';if(m=='hide'&&style.indexOf('.hide-')!=-1){if(_HIDE_RE_COMPILE.test(style))return _HIDE_RE_COMPILE_MATCH.exec(style);}
return[];}
function _hex2rgb(color,opacity,style){opacity=(typeof opacity!=='undefined')?opacity:null;style=(typeof style!=='undefined')?style:'';if(color){color=color.replace('#','');opacity=(opacity===null||opacity==='')?1:_int(opacity)/100;if(style){if(_parse_style(style).includes('opacity'))opacity=1;}
if(opacity<=0)return 'rgba(0,0,0,0)';if(color.length==3){return 'rgba({r},{g},{b},{a})'.Compile({r:color[0],g:color[1],b:color[2],a:opacity.toFixed(3)})}
if(color.length==4){return 'rgba({r},{g},{b},{a})'.Compile({r:color[0],g:color[1],b:color[2],a:(parseInt(color[3]+color[3],16)/255).toFixed(3)})}
if(color.length==6){return 'rgba({r},{g},{b},{a})'.Compile({r:parseInt(color.substr(0,2),16),g:parseInt(color.substr(2,2),16),b:parseInt(color.substr(4,2),16),a:opacity.toFixed(3)})}
if(color.length==8){return 'rgba({r},{g},{b},{a})'.Compile({r:parseInt(color.substr(0,2),16),g:parseInt(color.substr(2,2),16),b:parseInt(color.substr(4,2),16),a:(parseInt(color.substr(4,2),16)/255).toFixed(3)})}}
return 'rgba(0,0,0,0)';}
function _format_color(color){if(color){if(typeof color=='number')color=color+'';if(color.startsWith('rgba(')){var _color_val=color.replace('rgba(','');if(_color_val.endsWith(')'))_color_val=_color_val.slice(0,-1);_color_val=_color_val.split(',');if(_color_val.length==3)return 'rgba({0}, {1}, {2}, 1)'.Format(_color_val[0],_color_val[1],_color_val[2]);if(_color_val.length==4)return 'rgba({0}, {1}, {2}, {3})'.Format(_color_val[0],_color_val[1],_color_val[2],_color_val[3]);return color;}
if(color.startsWith('rgb(')){_color_val=color.replace('rgb(','');if(_color_val.endsWith(')'))_color_val=_color_val.slice(0,-1);_color_val=_color_val.split(',');if(_color_val.length==3)return 'rgb({0}, {1}, {2})'.Format(_color_val[0],_color_val[1],_color_val[2]);if(_color_val.length==4)return 'rgba({0}, {1}, {2}, {3})'.Format(_color_val[0],_color_val[1],_color_val[2],_color_val[3]);return color}
if(!color.startsWith('#'))return '#'+color;return color}
return ''}
function _check_image(link,w,h){if(!link)return '';if(link.indexOf('http')!=0)link=_IMAGE_DOMAIN+link;if(link.indexOf('d351p1jxpt6hnn.cloudfront.net')!=0)link=link.replace('d351p1jxpt6hnn.cloudfront.net','fly.linkcdn.to');if(link.indexOf('.fotoee.com')!=-1){if(link.indexOf('?imageView2')!=-1)link=link.split('?')[0];return link+'?imageView2/2'+(w?'/w/'+w:'')+(h?'/h/'+h:'');}
return link;}
var ThemeConfigCSS=function(data){if(data){if(data.text)this.text=new ThemeConfigText(data.text);if(data.button)this.button=new ThemeConfigButton(data.button);if(data.background)this.background=new ThemeConfigBackground(data.background);if(data.social)this.social=new ThemeConfigSocial(data.social);if(data.thumbnail)this.thumbnail=new ThemeConfigThumbnail(data.thumbnail);}
this._fields=['text','button','background','social','thumbnail'];};ThemeConfigCSS.prototype={as_css:function(){var _css_list=[],_css_var_list=['body{'],_this=this;_this._fields.forEach(function(x,idx){if(_this[x]){var x_ret=_this[x].as_css();_css_list=_css_list.concat(x_ret[0]);_css_var_list=_css_var_list.concat(x_ret[1]);}});_css_var_list.push('}');return _css_var_list.join('\n')+_css_list.join('\n');},};var ThemeConfigBackground=function(data){this._keys=['color','gradient','image'];this.key=data.key;if(this.key&&this._keys.includes(this.key))this.module=data.module||{};this._fields=['key','module'];};ThemeConfigBackground.prototype={as_css:function(){if(this.key=='color'){return this.color_css();}else if(this.key=='gradient'){return this.gradient_css();}else if(this.key=='image'){return this.image_css();}
return[[],[]];},color_css:function(){var _background=Lfy_Theme_2_CSS_Background,_this=this;var _css_list=[],_css_var_list=[];try{if(_this.module.color)_css_list.push(_background.color.Format(_format_color(_this.module.color)));}catch(e){}
return[_css_list,_css_var_list];},gradient_css:function(){var _background=Lfy_Theme_2_CSS_Background,_this=this;var _css_list=[],_css_var_list=[];try{if(_this.module.style)_css_var_list.push(_background.gradient[_this.module.style]||'');if(_this.module.gradient)_css_list.push(_background.gradient[_this.module.gradient]||'')}catch(e){}
return[_css_list,_css_var_list];},image_css:function(){var _background=Lfy_Theme_2_CSS_Background,_this=this;var _css_list=[],_css_var_list=[];try{if(_this.module.image)_css_list.push(_background.image.style[_this.module.style||'default'].Format(_check_image(_this.module.image)));_css_var_list.push(_background.image.blur.Format(_int(_this.module.blur)));_css_var_list.push(_background.image.opacity.Format(_int(_this.module.opacity)/100))}catch(e){}
return[_css_list,_css_var_list];}};var ThemeConfigButton=function(data){this.value=data||{};this._fields=['style','thumbnail_style','text_color','color','opacity'];};ThemeConfigButton.prototype={as_css:function(){var _button=Lfy_Theme_2_CSS_Button,_this=this;var _css_list=[],_css_var_list=[];try{['style','thumbnail_style'].forEach(function(x,idx){if(typeof _this.value[x]!='undefined'&&_this.value[x]!=null){var _x_dict=_button[x];_css_list.push(_x_dict[_this.value[x]])}});['text_color'].forEach(function(x,idx){if(typeof _this.value[x]!='undefined'&&_this.value[x]!=null){var _x_dict=_button[x];_css_list.push(_x_dict.Format(_format_color(_this.value[x])))}});['color'].forEach(function(x,idx){if(typeof _this.value[x]!='undefined'&&_this.value[x]!=null){var _x_dict=_button[x];_css_var_list.push(_x_dict.Format(_hex2rgb(_this.value[x],_this.value.opacity,_this.value.style)))}});}catch(e){}
return[_css_list,_css_var_list];},};var ThemeConfigThumbnail=function(data){var _value=data||{};this.style=_value.style;this.radius=_value.radius;this.color=_format_color(_value.color);this._fields=['style','radius','color'];};ThemeConfigThumbnail.prototype={as_css:function(){var _thumbnail=Lfy_Theme_2_CSS_Thumbnail,_this=this;var _css_list=[],_css_var_list=[];try{['style','radius'].forEach(function(x,idx){if(_this[x]&&_thumbnail[x]){var _x_dict=_thumbnail[x];_css_list.push(_x_dict[_this[x]])}});var _x='color';if(_this[_x]&&_thumbnail[_x]){var _x_dict=_thumbnail[_x];_css_var_list.push(_x_dict.Format(_this[_x]));}}catch(e){}
return[_css_list,_css_var_list];},};var ThemeConfigSocial=function(data){var _value=data||{};this.style=_value.style;this.color=_format_color(_value.color);this._fields=['style','color'];};ThemeConfigSocial.prototype={as_css:function(){var _social=Lfy_Theme_2_CSS_Social,_this=this;var _css_list=[],_css_var_list=[];try{_css_list.push(_social['style'][_this.style]);if(_this.style&&(_this.style.startsWith('style1.')||_this.style.startsWith('style5.'))){return[_css_list,_css_var_list];}
if(_this.style&&_this.style.startsWith('style2.')){if(_this.color)_css_var_list.push(_social.color.Format(_hex2rgb(_this.color,0),_hex2rgb(_this.color)));return[_css_list,_css_var_list];}
if(_this.style&&(_this.style.startsWith('style3.')||_this.style.startsWith('style4.'))){if(_this.color)_css_var_list.push(_social.color.Format(_hex2rgb(_this.color),_hex2rgb(_this.color,0)));return[_css_list,_css_var_list];}}catch(e){}
return[_css_list,_css_var_list];},};var ThemeConfigText=function(data){data=data||{};this.font=data.font;this.title_color=_format_color(data.title_color);this.desc_color=_format_color(data.desc_color);this._fields=['font','title_color','desc_color'];};ThemeConfigText.prototype={as_css:function(){var _text=Lfy_Theme_2_CSS_Text,_this=this;var _css_list=[];try{_this._fields.forEach(function(x,idx){if(_this.hasOwnProperty(x)&&_this[x]){_css_list.push(_text[x].Format(_this[x]))}});}catch(e){}
return[_css_list,[]]},};var _theme_config=new ThemeConfigCSS(__theme||{});var _style=d.createElement('style');_style.type='text/css';d.querySelector('head').appendChild(_style);_style.innerHTML=_theme_config.as_css();}(document));