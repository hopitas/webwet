/*
 Highstock JS v1.2.2 (2012-08-31)

 (c) 2009-2011 Torstein Hønsi

 License: www.highcharts.com/license
*/
(function(){
    function w(a,b){
        var c;
        a||(a={});
        for(c in b)a[c]=b[c];return a
        }
        function ja(){
        for(var a=0,b=arguments,c=b.length,d={};
            a<c;a++)d[b[a++]]=b[a];
        return d
        }
        function G(a,b){
        return parseInt(a,b||10)
        }
        function ra(a){
        return typeof a==="string"
        }
        function ga(a){
        return typeof a==="object"
        }
        function Ta(a){
        return Object.prototype.toString.call(a)==="[object Array]"
        }
        function Ua(a){
        return typeof a==="number"
        }
        function sa(a){
        return M.log(a)/M.LN10
        }
        function ka(a){
        return M.pow(10,a)
        }
        function La(a,b){
        for(var c=
            a.length;c--;)if(a[c]===b){
            a.splice(c,1);
            break
        }
        }
        function v(a){
    return a!==z&&a!==null
    }
    function D(a,b,c){
    var d,e;
    if(ra(b))v(c)?a.setAttribute(b,c):a&&a.getAttribute&&(e=a.getAttribute(b));
    else if(v(b)&&ga(b))for(d in b)a.setAttribute(d,b[d]);return e
    }
    function la(a){
    return Ta(a)?a:[a]
    }
    function p(){
    var a=arguments,b,c,d=a.length;
    for(b=0;b<d;b++)if(c=a[b],typeof c!=="undefined"&&c!==null)return c
        }
        function L(a,b){
    if(Va&&b&&b.opacity!==z)b.filter="alpha(opacity="+b.opacity*100+")";
    w(a.style,b)
    }
    function V(a,
    b,c,d,e){
    a=F.createElement(a);
    b&&w(a,b);
    e&&L(a,{
        padding:0,
        border:$,
        margin:0
    });
    c&&L(a,c);
    d&&d.appendChild(a);
    return a
    }
    function aa(a,b){
    var c=function(){};

    c.prototype=new a;
    w(c.prototype,b);
    return c
    }
    function Ma(a,b,c,d){
    var e=P.lang,f=a;
    b===-1?(b=(a||0).toString(),a=b.indexOf(".")>-1?b.split(".")[1].length:0):a=isNaN(b=W(b))?2:b;
    var b=a,c=c===void 0?e.decimalPoint:c,d=d===void 0?e.thousandsSep:d,e=f<0?"-":"",a=String(G(f=W(+f||0).toFixed(b))),g=a.length>3?a.length%3:0;
    return e+(g?a.substr(0,g)+d:"")+
    a.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+d)+(b?c+W(f-a).toFixed(b).slice(2):"")
    }
    function za(a,b){
    return Array((b||2)+1-String(a).length).join(0)+a
    }
    function pb(a,b,c){
    var d=a[b];
    a[b]=function(){
        var a=Array.prototype.slice.call(arguments);
        a.unshift(d);
        return c.apply(this,a)
        }
    }
function qb(a,b,c,d){
    var e,c=p(c,1);
    e=a/c;
    b||(b=[1,2,2.5,5,10],d&&d.allowDecimals===!1&&(c===1?b=[1,2,5,10]:c<=0.1&&(b=[1/c])));
    for(d=0;d<b.length;d++)if(a=b[d],e<=(b[d]+(b[d+1]||b[d]))/2)break;a*=c;
    return a
    }
    function Gb(a,b){
    var c=
    b||[[ab,[1,2,5,10,20,25,50,100,200,500]],[Wa,[1,2,5,10,15,30]],[Na,[1,2,5,10,15,30]],[ta,[1,2,3,4,6,8,12]],[fa,[1,2]],[Aa,[1,2]],[Ba,[1,2,3,4,6]],[na,null]],d=c[c.length-1],e=H[d[0]],f=d[1],g;
    for(g=0;g<c.length;g++)if(d=c[g],e=H[d[0]],f=d[1],c[g+1]&&a<=(e*f[f.length-1]+H[c[g+1][0]])/2)break;e===H[na]&&a<5*e&&(f=[1,2,5]);
    e===H[na]&&a<5*e&&(f=[1,2,5]);
    c=qb(a/e,f);
    return{
        unitRange:e,
        count:c,
        unitName:d[0]
        }
    }
function bb(a,b,c,d){
    var e=[],f={},g=P.global.useUTC,h,i=new Date(b),b=a.unitRange,j=a.count;
    b>=
    H[Wa]&&(i.setMilliseconds(0),i.setSeconds(b>=H[Na]?0:j*Y(i.getSeconds()/j)));
    if(b>=H[Na])i[Hb](b>=H[ta]?0:j*Y(i[rb]()/j));
    if(b>=H[ta])i[Ib](b>=H[fa]?0:j*Y(i[sb]()/j));
    if(b>=H[fa])i[tb](b>=H[Ba]?1:j*Y(i[Ca]()/j));
    b>=H[Ba]&&(i[Jb](b>=H[na]?0:j*Y(i[cb]()/j)),h=i[db]());
    b>=H[na]&&(h-=h%j,i[Kb](h));
    if(b===H[Aa])i[tb](i[Ca]()-i[ub]()+p(d,1));
    d=1;
    h=i[db]();
    for(var k=i.getTime(),l=i[cb](),m=i[Ca](),i=g?0:(864E5+i.getTimezoneOffset()*6E4)%864E5;k<c;)e.push(k),b===H[na]?k=eb(h+d*j,0):b===H[Ba]?k=eb(h,l+d*j):
        !g&&(b===H[fa]||b===H[Aa])?k=eb(h,l,m+d*j*(b===H[fa]?1:7)):(k+=b*j,b<=H[ta]&&k%H[fa]===i&&(f[k]=fa)),d++;
    e.push(k);
    e.info=w(a,{
        higherRanks:f,
        totalRange:b*j
        });
    return e
    }
    function Lb(){
    this.symbol=this.color=0
    }
    function Mb(a,b){
    var c=a.length,d,e;
    for(e=0;e<c;e++)a[e].ss_i=e;
    a.sort(function(a,c){
        d=b(a,c);
        return d===0?a.ss_i-c.ss_i:d
        });
    for(e=0;e<c;e++)delete a[e].ss_i
        }
        function Oa(a){
    for(var b=a.length,c=a[0];b--;)a[b]<c&&(c=a[b]);
    return c
    }
    function Da(a){
    for(var b=a.length,c=a[0];b--;)a[b]>c&&(c=a[b]);
    return c
    }
function ua(a,b){
    for(var c in a)a[c]&&a[c]!==b&&a[c].destroy&&a[c].destroy(),delete a[c]
    }
    function Pa(a){
    fb||(fb=V(oa));
    a&&fb.appendChild(a);
    fb.innerHTML=""
    }
    function gb(a,b){
    var c="Highcharts error #"+a+": www.highcharts.com/errors/"+a;
    if(b)throw c;else T.console&&console.log(c)
        }
        function pa(a){
    return parseFloat(a.toPrecision(14))
    }
    function Ea(a,b){
    Xa=p(a,b.animation)
    }
    function Nb(){
    var a=P.global.useUTC,b=a?"getUTC":"get",c=a?"setUTC":"set";
    eb=a?Date.UTC:function(a,b,c,g,h,i){
        return(new Date(a,b,p(c,
            1),p(g,0),p(h,0),p(i,0))).getTime()
        };

    rb=b+"Minutes";
    sb=b+"Hours";
    ub=b+"Day";
    Ca=b+"Date";
    cb=b+"Month";
    db=b+"FullYear";
    Hb=c+"Minutes";
    Ib=c+"Hours";
    tb=c+"Date";
    Jb=c+"Month";
    Kb=c+"FullYear"
    }
    function Fa(){}
function Ya(a,b,c){
    this.axis=a;
    this.pos=b;
    this.type=c||"";
    this.isNew=!0;
    c||this.addLabel()
    }
    function vb(a,b){
    this.axis=a;
    if(b)this.options=b,this.id=b.id;
    return this
    }
    function Ob(a,b,c,d,e){
    var f=a.chart.inverted;
    this.axis=a;
    this.isNegative=c;
    this.options=b;
    this.x=d;
    this.stack=e;
    this.alignOptions={
        align:b.align||
        (f?c?"left":"right":"center"),
        verticalAlign:b.verticalAlign||(f?"middle":c?"bottom":"top"),
        y:p(b.y,f?4:c?14:-6),
        x:p(b.x,f?c?-6:6:0)
        };

    this.textAlign=b.textAlign||(f?c?"right":"left":"center")
    }
    function Qa(){
    this.init.apply(this,arguments)
    }
    function wb(a,b){
    var c=b.borderWidth,d=b.style,e=G(d.padding);
    this.chart=a;
    this.options=b;
    this.crosshairs=[];
    this.now={
        x:0,
        y:0
    };

    this.isHidden=!0;
    this.label=a.renderer.label("",0,0,b.shape,null,null,b.useHTML,null,"tooltip").attr({
        padding:e,
        fill:b.backgroundColor,
        "stroke-width":c,
        r:b.borderRadius,
        zIndex:8
    }).css(d).css({
        padding:0
    }).hide().add();
    ha||this.label.shadow(b.shadow);
    this.shared=b.shared
    }
    function xb(a,b){
    var c=ha?"":b.chart.zoomType;
    this.zoomX=/x/.test(c);
    this.zoomY=/y/.test(c);
    this.options=b;
    this.chart=a;
    this.init(a,b.tooltip)
    }
    function yb(a){
    this.init(a)
    }
    function Za(a,b){
    var c,d=a.series;
    a.series=null;
    c=t(P,a);
    c.series=a.series=d;
    var d=c.chart,e=d.margin,e=ga(e)?e:[e,e,e,e];
    this.optionsMarginTop=p(d.marginTop,e[0]);
    this.optionsMarginRight=p(d.marginRight,e[1]);
    this.optionsMarginBottom=
    p(d.marginBottom,e[2]);
    this.optionsMarginLeft=p(d.marginLeft,e[3]);
    this.runChartClick=(e=d.events)&&!!e.click;
    this.callback=b;
    this.isResizing=0;
    this.options=c;
    this.axes=[];
    this.series=[];
    this.hasCartesianSeries=d.showAxes;
    this.init(e)
    }
    function Pb(a){
    var b=a.options,c=b.navigator,d=c.enabled,b=b.scrollbar,e=b.enabled,f=d?c.height:0,g=e?b.height:0,h=c.baseSeries;
    this.baseSeries=a.series[h]||typeof h==="string"&&a.get(h)||a.series[0];
    this.handles=[];
    this.scrollbarButtons=[];
    this.elementsToDestroy=[];
    this.chart=a;
    this.height=f;
    this.scrollbarHeight=g;
    this.scrollbarEnabled=e;
    this.navigatorEnabled=d;
    this.navigatorOptions=c;
    this.scrollbarOptions=b;
    this.outlineHeight=f+g;
    this.init()
    }
    function Qb(a){
    this.chart=a;
    this.buttons=[];
    this.boxSpanElements={};

    this.init([{
        type:"month",
        count:1,
        text:"1m"
    },{
        type:"month",
        count:3,
        text:"3m"
    },{
        type:"month",
        count:6,
        text:"6m"
    },{
        type:"ytd",
        text:"YTD"
    },{
        type:"year",
        count:1,
        text:"1y"
    },{
        type:"all",
        text:"All"
    }])
    }
    var z,F=document,T=window,M=Math,s=M.round,Y=M.floor,Ga=M.ceil,
x=M.max,K=M.min,W=M.abs,da=M.cos,ia=M.sin,Ha=M.PI,hb=Ha*2/360,Ra=navigator.userAgent,Rb=T.opera,Va=/msie/i.test(Ra)&&!Rb,$a=F.documentMode===8,zb=/AppleWebKit/.test(Ra),ib=/Firefox/.test(Ra),ma=!!F.createElementNS&&!!F.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,Zb=ib&&parseInt(Ra.split("Firefox/")[1],10)<4,ha=!ma&&!Va&&!!F.createElement("canvas").getContext,Sa,ba=F.documentElement.ontouchstart!==z,Sb={},Ab=0,fb,P,va,Xa,Bb,H,Cb=function(){},oa="div",$="none",Db="rgba(192,192,192,"+
(ma?1.0E-6:0.0020)+")",ab="millisecond",Wa="second",Na="minute",ta="hour",fa="day",Aa="week",Ba="month",na="year",eb,rb,sb,ub,Ca,cb,db,Hb,Ib,tb,Jb,Kb,S={};

T.Highcharts={};

va=function(a,b,c){
    if(!v(b)||isNaN(b))return"Invalid date";
    var a=p(a,"%Y-%m-%d %H:%M:%S"),d=new Date(b),e,f=d[sb](),g=d[ub](),h=d[Ca](),i=d[cb](),j=d[db](),k=P.lang,l=k.weekdays,b={
        a:l[g].substr(0,3),
        A:l[g],
        d:za(h),
        e:h,
        b:k.shortMonths[i],
        B:k.months[i],
        m:za(i+1),
        y:j.toString().substr(2,2),
        Y:j,
        H:za(f),
        I:za(f%12||12),
        l:f%12||12,
        M:za(d[rb]()),
        p:f<12?"AM":"PM",
        P:f<12?"am":"pm",
        S:za(d.getSeconds()),
        L:za(s(b%1E3),3)
        };

    for(e in b)a=a.replace("%"+e,b[e]);return c?a.substr(0,1).toUpperCase()+a.substr(1):a
    };

Lb.prototype={
    wrapColor:function(a){
        if(this.color>=a)this.color=0
            },
    wrapSymbol:function(a){
        if(this.symbol>=a)this.symbol=0
            }
        };

H=ja(ab,1,Wa,1E3,Na,6E4,ta,36E5,fa,864E5,Aa,6048E5,Ba,2592E6,na,31556952E3);
Bb={
    init:function(a,b,c){
        var b=b||"",d=a.shift,e=b.indexOf("C")>-1,f=e?7:3,g,b=b.split(" "),c=[].concat(c),h,i,j=function(a){
            for(g=a.length;g--;)a[g]===
                "M"&&a.splice(g+1,0,a[g+1],a[g+2],a[g+1],a[g+2])
                };

        e&&(j(b),j(c));
        a.isArea&&(h=b.splice(b.length-6,6),i=c.splice(c.length-6,6));
        if(d<=c.length/f)for(;d--;)c=[].concat(c).splice(0,f).concat(c);
        a.shift=0;
        if(b.length)for(a=c.length;b.length<a;)d=[].concat(b).splice(b.length-f,f),e&&(d[f-6]=d[f-2],d[f-5]=d[f-1]),b=b.concat(d);
        h&&(b=b.concat(h),c=c.concat(i));
        return[b,c]
        },
    step:function(a,b,c,d){
        var e=[],f=a.length;
        if(c===1)e=d;
        else if(f===b.length&&c<1)for(;f--;)d=parseFloat(a[f]),e[f]=isNaN(d)?a[f]:c*
            parseFloat(b[f]-d)+d;else e=b;
        return e
        }
    };
(function(a){
    T.HighchartsAdapter=T.HighchartsAdapter||a&&{
        init:function(b){
            var c=a.fx,d=c.step,e,f=a.Tween,g=f&&f.propHooks;
            a.extend(a.easing,{
                easeOutQuad:function(a,b,c,d,e){
                    return-d*(b/=e)*(b-2)+c
                    }
                });
        a.each(["cur","_default","width","height"],function(a,b){
            var e=d,k,l;
            b==="cur"?e=c.prototype:b==="_default"&&f&&(e=g[b],b="set");
            (k=e[b])&&(e[b]=function(c){
                c=a?c:this;
                l=c.elem;
                return l.attr?l.attr(c.prop,b==="cur"?z:c.now):k.apply(this,arguments)
                })
            });
        e=function(a){
            var c=
            a.elem,d;
            if(!a.started)d=b.init(c,c.d,c.toD),a.start=d[0],a.end=d[1],a.started=!0;
            c.attr("d",b.step(a.start,a.end,a.pos,c.toD))
            };

        f?g.d={
            set:e
        }:d.d=e;
        this.each=Array.prototype.forEach?function(a,b){
            return Array.prototype.forEach.call(a,b)
            }:function(a,b){
            for(var c=0,d=a.length;c<d;c++)if(b.call(a[c],a[c],c,a)===!1)return c
                }
            },
getScript:a.getScript,
inArray:a.inArray,
adapterRun:function(b,c){
    return a(b)[c]()
    },
grep:a.grep,
map:function(a,c){
    for(var d=[],e=0,f=a.length;e<f;e++)d[e]=c.call(a[e],a[e],e,a);
    return d
    },
merge:function(){
    var b=arguments;
    return a.extend(!0,null,b[0],b[1],b[2],b[3])
    },
offset:function(b){
    return a(b).offset()
    },
addEvent:function(b,c,d){
    a(b).bind(c,d)
    },
removeEvent:function(b,c,d){
    var e=F.removeEventListener?"removeEventListener":"detachEvent";
    F[e]&&!b[e]&&(b[e]=function(){});
    a(b).unbind(c,d)
    },
fireEvent:function(b,c,d,e){
    var f=a.Event(c),g="detached"+c,h;
    !Va&&d&&(delete d.layerX,delete d.layerY);
    w(f,d);
    b[c]&&(b[g]=b[c],b[c]=null);
    a.each(["preventDefault","stopPropagation"],function(a,
        b){
        var c=f[b];
        f[b]=function(){
            try{
                c.call(f)
                }catch(a){
                b==="preventDefault"&&(h=!0)
                }
            }
    });
a(b).trigger(f);
b[g]&&(b[c]=b[g],b[g]=null);
e&&!f.isDefaultPrevented()&&!h&&e(f)
},
washMouseEvent:function(a){
    var c=a.originalEvent||a;
    c.pageX=a.pageX;
    c.pageY=a.pageY;
    return c
    },
animate:function(b,c,d){
    var e=a(b);
    if(c.d)b.toD=c.d,c.d=1;
    e.stop();
    e.animate(c,d)
    },
stop:function(b){
    a(b).stop()
    }
}
})(T.jQuery);
var N=T.HighchartsAdapter,I=N||{};

N&&N.init.call(N,Bb);
var jb=I.adapterRun,$b=I.getScript,ac=I.inArray,n=I.each,Tb=
I.grep,bc=I.offset,Ia=I.map,t=I.merge,C=I.addEvent,O=I.removeEvent,J=I.fireEvent,Ub=I.washMouseEvent,Eb=I.animate,kb=I.stop,I={
    enabled:!0,
    align:"center",
    x:0,
    y:15,
    style:{
        color:"#666",
        fontSize:"11px",
        lineHeight:"14px"
    }
};

P={
    colors:"#4572A7,#AA4643,#89A54E,#80699B,#3D96AE,#DB843D,#92A8CD,#A47D7C,#B5CA92".split(","),
    symbols:["circle","diamond","square","triangle","triangle-down"],
    lang:{
        loading:"Loading...",
        months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),
        shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
        weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
        decimalPoint:".",
        numericSymbols:"k,M,G,T,P,E".split(","),
        resetZoom:"Reset zoom",
        resetZoomTitle:"Reset zoom level 1:1",
        thousandsSep:","
    },
    global:{
        useUTC:!0,
        canvasToolsURL:"http://code.highcharts.com/stock/1.2.2/modules/canvas-tools.js",
        VMLRadialGradientURL:"http://code.highcharts.com/stock/1.2.2/gfx/vml-radial-gradient.png"
    },
    chart:{
        borderColor:"#4572A7",
        borderRadius:5,
        defaultSeriesType:"line",
        ignoreHiddenSeries:!0,
        spacingTop:10,
        spacingRight:10,
        spacingBottom:15,
        spacingLeft:10,
        style:{
            fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
            fontSize:"12px"
        },
        backgroundColor:"#FFFFFF",
        plotBorderColor:"#C0C0C0",
        resetZoomButton:{
            theme:{
                zIndex:20
            },
            position:{
                align:"right",
                x:-10,
                y:10
            }
        }
    },
title:{
    text:"Chart title",
    align:"center",
    y:15,
    style:{
        color:"#3E576F",
        fontSize:"16px"
    }
},
subtitle:{
    text:"",
    align:"center",
    y:30,
    style:{
        color:"#6D869F"
    }
},
plotOptions:{
    line:{
        allowPointSelect:!1,
        showCheckbox:!1,
        animation:{
            duration:1E3
        },
        events:{},
        lineWidth:2,
        shadow:!0,
        marker:{
            enabled:!0,
            lineWidth:0,
            radius:4,
            lineColor:"#FFFFFF",
            states:{
                hover:{
                    enabled:!0
                    },
                select:{
                    fillColor:"#FFFFFF",
                    lineColor:"#000000",
                    lineWidth:2
                }
            }
        },
point:{
    events:{}
},
dataLabels:t(I,{
    enabled:!1,
    y:-6,
    formatter:function(){
        return this.y
        }
    }),
cropThreshold:300,
pointRange:0,
showInLegend:!0,
states:{
    hover:{
        marker:{}
},
select:{
    marker:{}
}
},
stickyTracking:!0
}
},
labels:{
    style:{
        position:"absolute",
        color:"#3E576F"
    }
},
legend:{
    enabled:!0,
    align:"center",
    layout:"horizontal",
    labelFormatter:function(){
        return this.name
        },
    borderWidth:1,
    borderColor:"#909090",
    borderRadius:5,
    navigation:{
        activeColor:"#3E576F",
        inactiveColor:"#CCC"
    },
    shadow:!1,
    itemStyle:{
        cursor:"pointer",
        color:"#3E576F",
        fontSize:"12px"
    },
    itemHoverStyle:{
        color:"#000"
    },
    itemHiddenStyle:{
        color:"#CCC"
    },
    itemCheckboxStyle:{
        position:"absolute",
        width:"13px",
        height:"13px"
    },
    symbolWidth:16,
    symbolPadding:5,
    verticalAlign:"bottom",
    x:0,
    y:0
},
loading:{
    labelStyle:{
        fontWeight:"bold",
        position:"relative",
        top:"1em"
    },
    style:{
        position:"absolute",
        backgroundColor:"white",
        opacity:0.5,
        textAlign:"center"
    }
},
tooltip:{
    enabled:!0,
    backgroundColor:"rgba(255, 255, 255, .85)",
    borderWidth:2,
    borderRadius:5,
    dateTimeLabelFormats:{
        millisecond:"%A, %b %e, %H:%M:%S.%L",
        second:"%A, %b %e, %H:%M:%S",
        minute:"%A, %b %e, %H:%M",
        hour:"%A, %b %e, %H:%M",
        day:"%A, %b %e, %Y",
        week:"Week from %A, %b %e, %Y",
        month:"%B %Y",
        year:"%Y"
    },
    headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',
    pointFormat:'<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
    shadow:!0,
    shared:ha,
    snap:ba?25:10,
    style:{
        color:"#333333",
        fontSize:"12px",
        padding:"5px",
        whiteSpace:"nowrap"
    }
},
credits:{
    enabled:!0,
    text:"Highcharts.com",
    href:"http://www.highcharts.com",
    position:{
        align:"right",
        x:-10,
        verticalAlign:"bottom",
        y:-5
    },
    style:{
        cursor:"pointer",
        color:"#909090",
        fontSize:"10px"
    }
}
};

var Q=P.plotOptions,N=Q.line;
Nb();
var wa=function(a){
    var b=[],c;
    (function(a){
        (c=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(a))?b=[G(c[1]),G(c[2]),
        G(c[3]),parseFloat(c[4],10)]:(c=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(a))&&(b=[G(c[1],16),G(c[2],16),G(c[3],16),1])
        })(a);
    return{
        get:function(c){
            return b&&!isNaN(b[0])?c==="rgb"?"rgb("+b[0]+","+b[1]+","+b[2]+")":c==="a"?b[3]:"rgba("+b.join(",")+")":a
            },
        brighten:function(a){
            if(Ua(a)&&a!==0){
                var c;
                for(c=0;c<3;c++)b[c]+=G(a*255),b[c]<0&&(b[c]=0),b[c]>255&&(b[c]=255)
                    }
                    return this
            },
        setOpacity:function(a){
            b[3]=a;
            return this
            }
        }
};

Fa.prototype={
    init:function(a,b){
        this.element=b==="span"?V(b):
        F.createElementNS("http://www.w3.org/2000/svg",b);
        this.renderer=a;
        this.attrSetters={}
    },
animate:function(a,b,c){
    b=p(b,Xa,!0);
    kb(this);
    if(b){
        b=t(b);
        if(c)b.complete=c;
        Eb(this,a,b)
        }else this.attr(a),c&&c()
        },
attr:function(a,b){
    var c,d,e,f,g=this.element,h=g.nodeName,i=this.renderer,j,k=this.attrSetters,l=this.shadows,m,o,r=this;
    ra(a)&&v(b)&&(c=a,a={},a[c]=b);
    if(ra(a))c=a,h==="circle"?c={
        x:"cx",
        y:"cy"
    }
    [c]||c:c==="strokeWidth"&&(c="stroke-width"),r=D(g,c)||this[c]||0,c!=="d"&&c!=="visibility"&&(r=parseFloat(r));
    else for(c in a)if(j=!1,d=a[c],e=k[c]&&k[c].call(this,d,c),e!==!1){
        e!==z&&(d=e);
        if(c==="d")d&&d.join&&(d=d.join(" ")),/(NaN| {2}|^$)/.test(d)&&(d="M 0 0");
        else if(c==="x"&&h==="text"){
            for(e=0;e<g.childNodes.length;e++)f=g.childNodes[e],D(f,"x")===D(g,"x")&&D(f,"x",d);
            this.rotation&&D(g,"transform","rotate("+this.rotation+" "+d+" "+G(a.y||D(g,"y"))+")")
            }else if(c==="fill")d=i.color(d,g,c);
        else if(h==="circle"&&(c==="x"||c==="y"))c={
            x:"cx",
            y:"cy"
        }
        [c]||c;
        else if(h==="rect"&&c==="r")D(g,{
            rx:d,
            ry:d
        }),
        j=!0;
        else if(c==="translateX"||c==="translateY"||c==="rotation"||c==="verticalAlign")j=o=!0;
        else if(c==="stroke")d=i.color(d,g,c);
        else if(c==="dashstyle")if(c="stroke-dasharray",d=d&&d.toLowerCase(),d==="solid")d=$;
            else{
            if(d){
                d=d.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");
                for(e=d.length;e--;)d[e]=G(d[e])*a["stroke-width"];
                d=d.join(",")
                }
            }else if(c==="isTracker")this[c]=d;
        else if(c==="width")d=G(d);
        else if(c==="align")c="text-anchor",d={
        left:"start",
        center:"middle",
        right:"end"
    }
    [d];
    else if(c==="title")e=g.getElementsByTagName("title")[0],e||(e=F.createElementNS("http://www.w3.org/2000/svg","title"),g.appendChild(e)),e.textContent=d;
        c==="strokeWidth"&&(c="stroke-width");
        zb&&c==="stroke-width"&&d===0&&(d=1.0E-6);
        this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c)&&(m||(this.symbolAttr(a),m=
        !0),j=!0);
    if(l&&/^(width|height|visibility|x|y|d|transform)$/.test(c))for(e=l.length;e--;)D(l[e],c,c==="height"?x(d-(l[e].cutHeight||0),0):d);
        if((c==="width"||c==="height")&&h==="rect"&&d<0)d=0;
        this[c]=d;
        o&&this.updateTransform();
        c==="text"?(d!==this.textStr&&delete this.bBox,this.textStr=d,this.added&&i.buildText(this)):j||D(g,c,d)
        }
        return r
},
symbolAttr:function(a){
    var b=this;
    n("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","),function(c){
        b[c]=p(a[c],b[c])
        });
    b.attr({
        d:b.renderer.symbols[b.symbolName](b.x,
            b.y,b.width,b.height,b)
        })
    },
clip:function(a){
    return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":$)
    },
crisp:function(a,b,c,d,e){
    var f,g={},h={},i,a=a||this.strokeWidth||this.attr&&this.attr("stroke-width")||0;
    i=s(a)%2/2;
    h.x=Y(b||this.x||0)+i;
    h.y=Y(c||this.y||0)+i;
    h.width=Y((d||this.width||0)-2*i);
    h.height=Y((e||this.height||0)-2*i);
    h.strokeWidth=a;
    for(f in h)this[f]!==h[f]&&(this[f]=g[f]=h[f]);return g
    },
css:function(a){
    var b=this.element,b=a&&a.width&&b.nodeName==="text",c,d="",e=function(a,
        b){
        return"-"+b.toLowerCase()
        };

    if(a&&a.color)a.fill=a.color;
    this.styles=a=w(this.styles,a);
    if(Va&&!ma)b&&delete a.width,L(this.element,a);
    else{
        for(c in a)d+=c.replace(/([A-Z])/g,e)+":"+a[c]+";";this.attr({
            style:d
        })
        }
        b&&this.added&&this.renderer.buildText(this);
    return this
    },
on:function(a,b){
    var c=b;
    ba&&a==="click"&&(a="touchstart",c=function(a){
        a.preventDefault();
        b()
        });
    this.element["on"+a]=c;
    return this
    },
setRadialReference:function(a){
    this.element.radialReference=a;
    return this
    },
translate:function(a,
    b){
    return this.attr({
        translateX:a,
        translateY:b
    })
    },
invert:function(){
    this.inverted=!0;
    this.updateTransform();
    return this
    },
htmlCss:function(a){
    var b=this.element;
    if(b=a&&b.tagName==="SPAN"&&a.width)delete a.width,this.textWidth=b,this.updateTransform();
    this.styles=w(this.styles,a);
    L(this.element,a);
    return this
    },
htmlGetBBox:function(){
    var a=this.element,b=this.bBox;
    if(!b){
        if(a.nodeName==="text")a.style.position="absolute";
        b=this.bBox={
            x:a.offsetLeft,
            y:a.offsetTop,
            width:a.offsetWidth,
            height:a.offsetHeight
            }
        }
    return b
},
htmlUpdateTransform:function(){
    if(this.added){
        var a=this.renderer,b=this.element,c=this.translateX||0,d=this.translateY||0,e=this.x||0,f=this.y||0,g=this.textAlign||"left",h={
            left:0,
            center:0.5,
            right:1
        }
        [g],i=g&&g!=="left",j=this.shadows;
        if(c||d)L(b,{
            marginLeft:c,
            marginTop:d
        }),j&&n(j,function(a){
            L(a,{
                marginLeft:c+1,
                marginTop:d+1
                })
            });
        this.inverted&&n(b.childNodes,function(c){
            a.invertChild(c,b)
            });
        if(b.tagName==="SPAN"){
            var k,l,j=this.rotation,m,o=0,r=1,o=0,u;
            m=G(this.textWidth);
            var q=this.xCorr||0,ca=
            this.yCorr||0,B=[j,g,b.innerHTML,this.textWidth].join(",");
            k={};

            if(B!==this.cTT){
                if(v(j))a.isSVG?(q=Va?"-ms":zb?"-webkit":ib?"-moz":Rb?"-o":"",k[q+"-transform"]=k.transform="rotate("+j+"deg)"):(o=j*hb,r=da(o),o=ia(o),k.filter=j?["progid:DXImageTransform.Microsoft.Matrix(M11=",r,", M12=",-o,", M21=",o,", M22=",r,", sizingMethod='auto expand')"].join(""):$),L(b,k);
                k=p(this.elemWidth,b.offsetWidth);
                l=p(this.elemHeight,b.offsetHeight);
                k>m&&/[ \-]/.test(b.innerText)&&(L(b,{
                    width:m+"px",
                    display:"block",
                    whiteSpace:"normal"
                }),k=m);
                m=a.fontMetrics(b.style.fontSize).b;
                q=r<0&&-k;
                ca=o<0&&-l;
                u=r*o<0;
                q+=o*m*(u?1-h:h);
                ca-=r*m*(j?u?h:1-h:1);
                i&&(q-=k*h*(r<0?-1:1),j&&(ca-=l*h*(o<0?-1:1)),L(b,{
                    textAlign:g
                }));
                this.xCorr=q;
                this.yCorr=ca
                }
                L(b,{
                left:e+q+"px",
                top:f+ca+"px"
                });
            this.cTT=B
            }
        }else this.alignOnAdd=!0
    },
updateTransform:function(){
    var a=this.translateX||0,b=this.translateY||0,c=this.inverted,d=this.rotation,e=[];
    c&&(a+=this.attr("width"),b+=this.attr("height"));
    (a||b)&&e.push("translate("+a+","+b+")");
    c?e.push("rotate(90) scale(-1,1)"):
    d&&e.push("rotate("+d+" "+(this.x||0)+" "+(this.y||0)+")");
    e.length&&D(this.element,"transform",e.join(" "))
    },
toFront:function(){
    var a=this.element;
    a.parentNode.appendChild(a);
    return this
    },
align:function(a,b,c){
    a?(this.alignOptions=a,this.alignByTranslate=b,c||this.renderer.alignedObjects.push(this)):(a=this.alignOptions,b=this.alignByTranslate);
    var c=p(c,this.renderer),d=a.align,e=a.verticalAlign,f=(c.x||0)+(a.x||0),g=(c.y||0)+(a.y||0),h={};

    /^(right|center)$/.test(d)&&(f+=(c.width-(a.width||0))/

    {
        right:1,
        center:2
    }
    [d]);
    h[b?"translateX":"x"]=s(f);
    /^(bottom|middle)$/.test(e)&&(g+=(c.height-(a.height||0))/({
        bottom:1,
        middle:2
    }
    [e]||1));
    h[b?"translateY":"y"]=s(g);
    this[this.placed?"animate":"attr"](h);
    this.placed=!0;
    this.alignAttr=h;
    return this
    },
getBBox:function(){
    var a=this.bBox,b=this.renderer,c,d=this.rotation;
    c=this.element;
    var e=d*hb;
    if(!a){
        if(c.namespaceURI==="http://www.w3.org/2000/svg"||b.forExport){
            try{
                a=c.getBBox?w({},c.getBBox()):{
                    width:c.offsetWidth,
                    height:c.offsetHeight
                    }
                }catch(f){}
        if(!a||
            a.width<0)a={
            width:0,
            height:0
        }
        }else a=this.htmlGetBBox();
if(b.isSVG&&(b=a.width,c=a.height,d))a.width=W(c*ia(e))+W(b*da(e)),a.height=W(c*da(e))+W(b*ia(e));
this.bBox=a
}
return a
},
show:function(){
    return this.attr({
        visibility:"visible"
    })
    },
hide:function(){
    return this.attr({
        visibility:"hidden"
    })
    },
add:function(a){
    var b=this.renderer,c=a||b,d=c.element||b.box,e=d.childNodes,f=this.element,g=D(f,"zIndex"),h;
    if(a)this.parentGroup=a;
    this.parentInverted=a&&a.inverted;
    this.textStr!==void 0&&b.buildText(this);
    if(g)c.handleZ=!0,g=G(g);
    if(c.handleZ)for(c=0;c<e.length;c++)if(a=e[c],b=D(a,"zIndex"),a!==f&&(G(b)>g||!v(g)&&v(b))){
        d.insertBefore(f,a);
        h=!0;
        break
    }
    h||d.appendChild(f);
    this.added=!0;
    J(this,"add");
    return this
    },
safeRemoveChild:function(a){
    var b=a.parentNode;
    b&&b.removeChild(a)
    },
destroy:function(){
    var a=this,b=a.element||{},c=a.shadows,d=a.box,e,f;
    b.onclick=b.onmouseout=b.onmouseover=b.onmousemove=null;
    kb(a);
    if(a.clipPath)a.clipPath=a.clipPath.destroy();
    if(a.stops){
        for(f=0;f<a.stops.length;f++)a.stops[f]=
            a.stops[f].destroy();
        a.stops=null
        }
        a.safeRemoveChild(b);
    c&&n(c,function(b){
        a.safeRemoveChild(b)
        });
    d&&d.destroy();
    La(a.renderer.alignedObjects,a);
    for(e in a)delete a[e];return null
    },
empty:function(){
    for(var a=this.element,b=a.childNodes,c=b.length;c--;)a.removeChild(b[c])
        },
shadow:function(a,b,c){
    var d=[],e,f,g=this.element,h,i,j,k;
    if(a){
        i=p(a.width,3);
        j=(a.opacity||0.15)/i;
        k=this.parentInverted?"(-1,-1)":"("+(a.offsetX||1)+", "+(a.offsetY||1)+")";
        for(e=1;e<=i;e++){
            f=g.cloneNode(0);
            h=i*2+1-2*e;
            D(f,{
                isShadow:"true",
                stroke:a.color||"black",
                "stroke-opacity":j*e,
                "stroke-width":h,
                transform:"translate"+k,
                fill:$
            });
            if(c)D(f,"height",x(D(f,"height")-h,0)),f.cutHeight=h;
            b?b.element.appendChild(f):g.parentNode.insertBefore(f,g);
            d.push(f)
            }
            this.shadows=d
        }
        return this
    }
};

var qa=function(){
    this.init.apply(this,arguments)
    };

qa.prototype={
    Element:Fa,
    init:function(a,b,c,d){
        var e=location,f;
        f=this.createElement("svg").attr({
            xmlns:"http://www.w3.org/2000/svg",
            version:"1.1"
        });
        a.appendChild(f.element);
        this.isSVG=!0;
        this.box=f.element;
        this.boxWrapper=f;
        this.alignedObjects=[];
        this.url=(ib||zb)&&F.getElementsByTagName("base").length?e.href.replace(/#.*?$/,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";
        this.defs=this.createElement("defs").add();
        this.forExport=d;
        this.gradients={};

        this.setSize(b,c,!1);
        var g;
        if(ib&&a.getBoundingClientRect)this.subPixelFix=b=function(){
            L(a,{
                left:0,
                top:0
            });
            g=a.getBoundingClientRect();
            L(a,{
                left:Ga(g.left)-g.left+"px",
                top:Ga(g.top)-g.top+"px"
                })
            },b(),C(T,"resize",b)
            },
    isHidden:function(){
        return!this.boxWrapper.getBBox().width
        },
    destroy:function(){
        var a=this.defs;
        this.box=null;
        this.boxWrapper=this.boxWrapper.destroy();
        ua(this.gradients||{});
        this.gradients=null;
        if(a)this.defs=a.destroy();
        this.subPixelFix&&O(T,"resize",this.subPixelFix);
        return this.alignedObjects=null
        },
    createElement:function(a){
        var b=new this.Element;
        b.init(this,a);
        return b
        },
    draw:function(){},
    buildText:function(a){
        for(var b=a.element,c=p(a.textStr,"").toString().replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,
            "<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g),d=b.childNodes,e=/style="([^"]+)"/,f=/href="([^"]+)"/,g=D(b,"x"),h=a.styles,i=h&&G(h.width),j=h&&h.lineHeight,k,h=d.length,l=[];h--;)b.removeChild(d[h]);
        i&&!a.added&&this.box.appendChild(b);
        c[c.length-1]===""&&c.pop();
        n(c,function(c,d){
            var h,u=0,q,c=c.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");
            h=c.split("|||");
            n(h,function(c){
                if(c!==""||h.length===1){
                    var m={},n=F.createElementNS("http://www.w3.org/2000/svg",
                        "tspan");
                    e.test(c)&&D(n,"style",c.match(e)[1].replace(/(;| |^)color([ :])/,"$1fill$2"));
                    f.test(c)&&(D(n,"onclick",'location.href="'+c.match(f)[1]+'"'),L(n,{
                        cursor:"pointer"
                    }));
                    c=(c.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"<").replace(/&gt;/g,">");
                    n.appendChild(F.createTextNode(c));
                    u?m.dx=3:m.x=g;
                    if(!u){
                        if(d){
                            !ma&&a.renderer.forExport&&L(n,{
                                display:"block"
                            });
                            q=T.getComputedStyle&&G(T.getComputedStyle(k,null).getPropertyValue("line-height"));
                            if(!q||isNaN(q)){
                                var p;
                                if(!(p=j))if(!(p=k.offsetHeight))l[d]=
                                    b.getBBox?b.getBBox().height:a.renderer.fontMetrics(b.style.fontSize).h,p=s(l[d]-(l[d-1]||0))||18;
                                q=p
                                }
                                D(n,"dy",q)
                            }
                            k=n
                        }
                        D(n,m);
                    b.appendChild(n);
                    u++;
                    if(i)for(var c=c.replace(/-/g,"- ").split(" "),E=[];c.length||E.length;)delete a.bBox,p=a.getBBox().width,m=p>i,!m||c.length===1?(c=E,E=[],c.length&&(n=F.createElementNS("http://www.w3.org/2000/svg","tspan"),D(n,{
                        dy:j||16,
                        x:g
                    }),b.appendChild(n),p>i&&(i=p))):(n.removeChild(n.firstChild),E.unshift(c.pop())),c.length&&n.appendChild(F.createTextNode(c.join(" ").replace(/- /g,
                        "-")))
                    }
                    })
        })
    },
button:function(a,b,c,d,e,f,g){
    var h=this.label(a,b,c),i=0,j,k,l,m,o,a={
        x1:0,
        y1:0,
        x2:0,
        y2:1
    },e=t(ja("stroke-width",1,"stroke","#999","fill",ja("linearGradient",a,"stops",[[0,"#FFF"],[1,"#DDD"]]),"r",3,"padding",3,"style",ja("color","black")),e);
    l=e.style;
    delete e.style;
    f=t(e,ja("stroke","#68A","fill",ja("linearGradient",a,"stops",[[0,"#FFF"],[1,"#ACF"]])),f);
    m=f.style;
    delete f.style;
    g=t(e,ja("stroke","#68A","fill",ja("linearGradient",a,"stops",[[0,"#9BD"],[1,"#CDF"]])),g);
    o=g.style;
    delete g.style;
    C(h.element,"mouseenter",function(){
        h.attr(f).css(m)
        });
    C(h.element,"mouseleave",function(){
        j=[e,f,g][i];
        k=[l,m,o][i];
        h.attr(j).css(k)
        });
    h.setState=function(a){
        (i=a)?a===2&&h.attr(g).css(o):h.attr(e).css(l)
        };

    return h.on("click",function(){
        d.call(h)
        }).attr(e).css(w({
        cursor:"default"
    },l))
    },
crispLine:function(a,b){
    a[1]===a[4]&&(a[1]=a[4]=s(a[1])-b%2/2);
    a[2]===a[5]&&(a[2]=a[5]=s(a[2])+b%2/2);
    return a
    },
path:function(a){
    var b={
        fill:$
    };

    Ta(a)?b.d=a:ga(a)&&w(b,a);
    return this.createElement("path").attr(b)
    },
circle:function(a,b,c){
    a=ga(a)?a:{
        x:a,
        y:b,
        r:c
    };

    return this.createElement("circle").attr(a)
    },
arc:function(a,b,c,d,e,f){
    if(ga(a))b=a.y,c=a.r,d=a.innerR,e=a.start,f=a.end,a=a.x;
    return this.symbol("arc",a||0,b||0,c||0,c||0,{
        innerR:d||0,
        start:e||0,
        end:f||0
        })
    },
rect:function(a,b,c,d,e,f){
    e=ga(a)?a.r:e;
    e=this.createElement("rect").attr({
        rx:e,
        ry:e,
        fill:$
    });
    return e.attr(ga(a)?a:e.crisp(f,a,b,x(c,0),x(d,0)))
    },
setSize:function(a,b,c){
    var d=this.alignedObjects,e=d.length;
    this.width=a;
    this.height=b;
    for(this.boxWrapper[p(c,
        !0)?"animate":"attr"]({
        width:a,
        height:b
    });e--;)d[e].align()
        },
g:function(a){
    var b=this.createElement("g");
    return v(a)?b.attr({
        "class":"highcharts-"+a
        }):b
    },
image:function(a,b,c,d,e){
    var f={
        preserveAspectRatio:$
    };

    arguments.length>1&&w(f,{
        x:b,
        y:c,
        width:d,
        height:e
    });
    f=this.createElement("image").attr(f);
    f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):f.element.setAttribute("hc-svg-href",a);
    return f
    },
symbol:function(a,b,c,d,e,f){
    var g,h=this.symbols[a],h=h&&h(s(b),
        s(c),d,e,f),i=/^url\((.*?)\)$/,j,k;
    h?(g=this.path(h),w(g,{
        symbolName:a,
        x:b,
        y:c,
        width:d,
        height:e
    }),f&&w(g,f)):i.test(a)&&(k=function(a,b){
        a.attr({
            width:b[0],
            height:b[1]
            });
        a.alignByTranslate||a.translate(-s(b[0]/2),-s(b[1]/2))
        },j=a.match(i)[1],a=Sb[j],g=this.image(j).attr({
        x:b,
        y:c
    }),a?k(g,a):(g.attr({
        width:0,
        height:0
    }),V("img",{
        onload:function(){
            k(g,Sb[j]=[this.width,this.height])
            },
        src:j
    })));
    return g
    },
symbols:{
    circle:function(a,b,c,d){
        var e=0.166*c;
        return["M",a+c/2,b,"C",a+c+e,b,a+c+e,b+d,a+c/2,b+d,
        "C",a-e,b+d,a-e,b,a+c/2,b,"Z"]
        },
    square:function(a,b,c,d){
        return["M",a,b,"L",a+c,b,a+c,b+d,a,b+d,"Z"]
        },
    triangle:function(a,b,c,d){
        return["M",a+c/2,b,"L",a+c,b+d,a,b+d,"Z"]
        },
    "triangle-down":function(a,b,c,d){
        return["M",a,b,"L",a+c,b,a+c/2,b+d,"Z"]
        },
    diamond:function(a,b,c,d){
        return["M",a+c/2,b,"L",a+c,b+d/2,a+c/2,b+d,a,b+d/2,"Z"]
        },
    arc:function(a,b,c,d,e){
        var f=e.start,c=e.r||c||d,g=e.end-1.0E-6,d=e.innerR,h=e.open,i=da(f),j=ia(f),k=da(g),g=ia(g),e=e.end-f<Ha?0:1;
        return["M",a+c*i,b+c*j,"A",c,c,0,e,1,
        a+c*k,b+c*g,h?"M":"L",a+d*k,b+d*g,"A",d,d,0,e,0,a+d*i,b+d*j,h?"":"Z"]
        }
    },
clipRect:function(a,b,c,d){
    var e="highcharts-"+Ab++,f=this.createElement("clipPath").attr({
        id:e
    }).add(this.defs),a=this.rect(a,b,c,d,0).add(f);
    a.id=e;
    a.clipPath=f;
    return a
    },
color:function(a,b,c){
    var d=this,e,f=/^rgba/,g;
    a&&a.linearGradient?g="linearGradient":a&&a.radialGradient&&(g="radialGradient");
    if(g){
        var c=a[g],h=d.gradients,i,j,k,b=b.radialReference;
        if(!c.id||!h[c.id])Ta(c)&&(a[g]=c={
            x1:c[0],
            y1:c[1],
            x2:c[2],
            y2:c[3],
            gradientUnits:"userSpaceOnUse"
        }),
        g==="radialGradient"&&b&&!v(c.gradientUnits)&&w(c,{
            cx:b[0]-b[2]/2+c.cx*b[2],
            cy:b[1]-b[2]/2+c.cy*b[2],
            r:c.r*b[2],
            gradientUnits:"userSpaceOnUse"
        }),c.id="highcharts-"+Ab++,h[c.id]=i=d.createElement(g).attr(c).add(d.defs),i.stops=[],n(a.stops,function(a){
            f.test(a[1])?(e=wa(a[1]),j=e.get("rgb"),k=e.get("a")):(j=a[1],k=1);
            a=d.createElement("stop").attr({
                offset:a[0],
                "stop-color":j,
                "stop-opacity":k
            }).add(i);
            i.stops.push(a)
            });
        return"url("+d.url+"#"+c.id+")"
        }else return f.test(a)?(e=wa(a),D(b,c+"-opacity",
        e.get("a")),e.get("rgb")):(b.removeAttribute(c+"-opacity"),a)
        },
text:function(a,b,c,d){
    var e=P.chart.style;
    if(d&&!this.forExport)return this.html(a,b,c);
    b=s(p(b,0));
    c=s(p(c,0));
    a=this.createElement("text").attr({
        x:b,
        y:c,
        text:a
    }).css({
        fontFamily:e.fontFamily,
        fontSize:e.fontSize
        });
    !ma&&this.forExport&&a.css({
        position:"absolute"
    });
    a.x=b;
    a.y=c;
    return a
    },
html:function(a,b,c){
    var d=P.chart.style,e=this.createElement("span"),f=e.attrSetters,g=e.element,h=e.renderer;
    f.text=function(a){
        a!==g.innerHTML&&delete this.bBox;
        g.innerHTML=a;
        return!1
        };

    f.x=f.y=f.align=function(a,b){
        b==="align"&&(b="textAlign");
        e[b]=a;
        e.htmlUpdateTransform();
        return!1
        };

    e.attr({
        text:a,
        x:s(b),
        y:s(c)
        }).css({
        position:"absolute",
        whiteSpace:"nowrap",
        fontFamily:d.fontFamily,
        fontSize:d.fontSize
        });
    e.css=e.htmlCss;
    if(h.isSVG)e.add=function(a){
        var b,c=h.box.parentNode,d=[];
        if(a){
            if(b=a.div,!b){
                for(;a;)d.push(a),a=a.parentGroup;
                n(d.reverse(),function(a){
                    var d;
                    b=a.div=a.div||V(oa,{
                        className:D(a.element,"class")
                        },{
                        position:"absolute",
                        left:(a.translateX||
                            0)+"px",
                        top:(a.translateY||0)+"px"
                        },b||c);
                    d=b.style;
                    w(a.attrSetters,{
                        translateX:function(a){
                            d.left=a+"px"
                            },
                        translateY:function(a){
                            d.top=a+"px"
                            },
                        visibility:function(a,b){
                            d[b]=a
                            }
                        })
                })
            }
        }else b=c;
    b.appendChild(g);
    e.added=!0;
    e.alignOnAdd&&e.htmlUpdateTransform();
    return e
    };

return e
},
fontMetrics:function(a){
    var a=G(a||11),a=a<24?a+4:s(a*1.2),b=s(a*0.8);
    return{
        h:a,
        b:b
    }
},
label:function(a,b,c,d,e,f,g,h,i){
    function j(){
        var a=o.styles,a=a&&a.textAlign,b=B*(1-p),c;
        c=h?0:Fb;
        if(v(A)&&(a==="center"||a==="right"))b+=

        {
            center:0.5,
            right:1
        }
        [a]*(A-q.width);
        (b!==r.x||c!==r.y)&&r.attr({
            x:b,
            y:c
        });
        r.x=b;
        r.y=c
        }
        function k(a,b){
        u?u.attr(a,b):lb[a]=b
        }
        function l(){
        r.add(o);
        o.attr({
            text:a,
            x:b,
            y:c
        });
        v(e)&&o.attr({
            anchorX:e,
            anchorY:f
        })
        }
        var m=this,o=m.g(i),r=m.text("",0,0,g).attr({
        zIndex:1
    }),u,q,p=0,B=3,A,y,E,R,Z=0,lb={},Fb,g=o.attrSetters;
    C(o,"add",l);
    g.width=function(a){
        A=a;
        return!1
        };

    g.height=function(a){
        y=a;
        return!1
        };

    g.padding=function(a){
        v(a)&&a!==B&&(B=a,j());
        return!1
        };

    g.align=function(a){
        p={
            left:0,
            center:0.5,
            right:1
        }
        [a];
        return!1
        };

    g.text=function(a,b){
        r.attr(b,a);
        var c;
        c=r.element.style;
        q=(A===void 0||y===void 0||o.styles.textAlign)&&r.getBBox();
        o.width=(A||q.width||0)+2*B;
        o.height=(y||q.height||0)+2*B;
        Fb=B+m.fontMetrics(c&&c.fontSize).b;
        if(!u)c=h?-Fb:0,o.box=u=d?m.symbol(d,-p*B,c,o.width,o.height):m.rect(-p*B,c,o.width,o.height,0,lb["stroke-width"]),u.add(o);
        u.attr(t({
            width:o.width,
            height:o.height
            },lb));
        lb=null;
        j();
        return!1
        };

    g["stroke-width"]=function(a,b){
        Z=a%2/2;
        k(b,a);
        return!1
        };

    g.stroke=g.fill=g.r=function(a,
        b){
        k(b,a);
        return!1
        };

    g.anchorX=function(a,b){
        e=a;
        k(b,a+Z-E);
        return!1
        };

    g.anchorY=function(a,b){
        f=a;
        k(b,a-R);
        return!1
        };

    g.x=function(a){
        o.x=a;
        a-=p*((A||q.width)+B);
        E=s(a);
        o.attr("translateX",E);
        return!1
        };

    g.y=function(a){
        R=o.y=s(a);
        o.attr("translateY",a);
        return!1
        };

    var cc=o.css;
    return w(o,{
        css:function(a){
            if(a){
                var b={},a=t({},a);
                n("fontSize,fontWeight,fontFamily,color,lineHeight,width".split(","),function(c){
                    a[c]!==z&&(b[c]=a[c],delete a[c])
                    });
                r.css(b)
                }
                return cc.call(o,a)
            },
        getBBox:function(){
            return u.getBBox()
            },
        shadow:function(a){
            u.shadow(a);
            return o
            },
        destroy:function(){
            O(o,"add",l);
            O(o.element,"mouseenter");
            O(o.element,"mouseleave");
            r&&(r=r.destroy());
            Fa.prototype.destroy.call(o)
            }
        })
}
};

Sa=qa;
var Ja;
if(!ma&&!ha){
    var ea={
        init:function(a,b){
            var c=["<",b,' filled="f" stroked="f"'],d=["position: ","absolute",";"];
            (b==="shape"||b===oa)&&d.push("left:0;top:0;width:1px;height:1px;");
            $a&&d.push("visibility: ",b===oa?"hidden":"visible");
            c.push(' style="',d.join(""),'"/>');
            if(b)c=b===oa||b==="span"||b==="img"?c.join(""):
                a.prepVML(c),this.element=V(c);
            this.renderer=a;
            this.attrSetters={}
        },
    add:function(a){
        var b=this.renderer,c=this.element,d=b.box,d=a?a.element||a:d;
        a&&a.inverted&&b.invertChild(c,d);
        d.appendChild(c);
        this.added=!0;
        this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();
        J(this,"add");
        return this
        },
    updateTransform:Fa.prototype.htmlUpdateTransform,
    attr:function(a,b){
        var c,d,e,f=this.element||{},g=f.style,h=f.nodeName,i=this.renderer,j=this.symbolName,k,l=this.shadows,m,o=this.attrSetters,r=this;
        ra(a)&&v(b)&&(c=a,a={},a[c]=b);
        if(ra(a))c=a,r=c==="strokeWidth"||c==="stroke-width"?this.strokeweight:this[c];else for(c in a)if(d=a[c],m=!1,e=o[c]&&o[c].call(this,d,c),e!==!1&&d!==null){
            e!==z&&(d=e);
            if(j&&/^(x|y|r|start|end|width|height|innerR|anchorX|anchorY)/.test(c))k||(this.symbolAttr(a),k=!0),m=!0;
            else if(c==="d"){
                d=d||[];
                this.d=d.join(" ");
                e=d.length;
                for(m=[];e--;)m[e]=Ua(d[e])?s(d[e]*10)-5:d[e]==="Z"?"x":d[e];
                d=m.join(" ")||"x";
                f.path=d;
                if(l)for(e=l.length;e--;)l[e].path=l[e].cutOff?this.cutOffPath(d,
                    l[e].cutOff):d;
                m=!0
                }else if(c==="visibility"){
                if(l)for(e=l.length;e--;)l[e].style[c]=d;
                h==="DIV"&&(d=d==="hidden"?"-999em":0,c="top");
                g[c]=d;
                m=!0
                }else if(c==="zIndex")d&&(g[c]=d),m=!0;
            else if(c==="width"||c==="height")d=x(0,d),this[c]=d,this.updateClipping?(this[c]=d,this.updateClipping()):g[c]=d,m=!0;
            else if(c==="x"||c==="y")this[c]=d,g[{
                x:"left",
                y:"top"
            }
            [c]]=d;
            else if(c==="class")f.className=d;
            else if(c==="stroke")d=i.color(d,f,c),c="strokecolor";
            else if(c==="stroke-width"||c==="strokeWidth")f.stroked=
                d?!0:!1,c="strokeweight",this[c]=d,Ua(d)&&(d+="px");
            else if(c==="dashstyle")(f.getElementsByTagName("stroke")[0]||V(i.prepVML(["<stroke/>"]),null,null,f))[c]=d||"solid",this.dashstyle=d,m=!0;
            else if(c==="fill")h==="SPAN"?g.color=d:(f.filled=d!==$?!0:!1,d=i.color(d,f,c,this),c="fillcolor");
            else if(h==="shape"&&c==="rotation")this[c]=d,f.style.left=-s(ia(d*hb)+1)+"px",f.style.top=s(da(d*hb))+"px";
            else if(c==="translateX"||c==="translateY"||c==="rotation")this[c]=d,this.updateTransform(),m=!0;
            else if(c===
                "text")this.bBox=null,f.innerHTML=d,m=!0;
            m||($a?f[c]=d:D(f,c,d))
            }
            return r
        },
    clip:function(a){
        var b=this,c,d=b.element,e=d.parentNode;
        a?(c=a.members,c.push(b),b.destroyClip=function(){
            La(c,b)
            },e&&e.className==="highcharts-tracker"&&!$a&&L(d,{
            visibility:"hidden"
        }),a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={
            clip:$a?"inherit":"rect(auto)"
            });
        return b.css(a)
        },
    css:Fa.prototype.htmlCss,
    safeRemoveChild:function(a){
        a.parentNode&&Pa(a)
        },
    destroy:function(){
        this.destroyClip&&this.destroyClip();
        return Fa.prototype.destroy.apply(this)
        },
    empty:function(){
        for(var a=this.element.childNodes,b=a.length,c;b--;)c=a[b],c.parentNode.removeChild(c)
            },
    on:function(a,b){
        this.element["on"+a]=function(){
            var a=T.event;
            a.target=a.srcElement;
            b(a)
            };

        return this
        },
    cutOffPath:function(a,b){
        var c,a=a.split(/[ ,]/);
        c=a.length;
        if(c===9||c===11)a[c-4]=a[c-2]=G(a[c-2])-10*b;
        return a.join(" ")
        },
    shadow:function(a,b,c){
        var d=[],e,f=this.element,g=this.renderer,h,i=f.style,j,k=f.path,l,m,o,r;
        k&&typeof k.value!=="string"&&(k="x");
        m=k;
        if(a){
            o=p(a.width,3);
            r=(a.opacity||
                0.15)/o;
            for(e=1;e<=3;e++){
                l=o*2+1-2*e;
                c&&(m=this.cutOffPath(k.value,l+0.5));
                j=['<shape isShadow="true" strokeweight="',l,'" filled="false" path="',m,'" coordsize="10 10" style="',f.style.cssText,'" />'];
                h=V(g.prepVML(j),null,{
                    left:G(i.left)+(a.offsetX||1),
                    top:G(i.top)+(a.offsetY||1)
                    });
                if(c)h.cutOff=l+1;
                j=['<stroke color="',a.color||"black",'" opacity="',r*e,'"/>'];
                V(g.prepVML(j),null,null,h);
                b?b.element.appendChild(h):f.parentNode.insertBefore(h,f);
                d.push(h)
                }
                this.shadows=d
            }
            return this
        }
    },ea=aa(Fa,
    ea),ea={
    Element:ea,
    isIE8:Ra.indexOf("MSIE 8.0")>-1,
    init:function(a,b,c){
        var d,e;
        this.alignedObjects=[];
        d=this.createElement(oa);
        e=d.element;
        e.style.position="relative";
        a.appendChild(d.element);
        this.box=e;
        this.boxWrapper=d;
        this.setSize(b,c,!1);
        if(!F.namespaces.hcv)F.namespaces.add("hcv","urn:schemas-microsoft-com:vml"),F.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
            },
    isHidden:function(){
        return!this.box.offsetWidth
        },
    clipRect:function(a,b,c,d){
        var e=this.createElement(),f=ga(a);
        return w(e,{
            members:[],
            left:f?a.x:a,
            top:f?a.y:b,
            width:f?a.width:c,
            height:f?a.height:d,
            getCSS:function(a){
                var b=a.inverted,c=this.top,d=this.left,e=d+this.width,f=c+this.height,c={
                    clip:"rect("+s(b?d:c)+"px,"+s(b?f:e)+"px,"+s(b?e:f)+"px,"+s(b?c:d)+"px)"
                    };
                !b&&$a&&a.element.nodeName!=="IMG"&&w(c,{
                    width:e+"px",
                    height:f+"px"
                    });
                return c
                },
            updateClipping:function(){
                n(e.members,function(a){
                    a.css(e.getCSS(a))
                    })
                }
            })
    },
color:function(a,b,c,d){
    var e=this,
    f,g=/^rgba/,h,i,j=$;
    a&&a.linearGradient?i="gradient":a&&a.radialGradient&&(i="pattern");
    if(i){
        var k,l,m=a.linearGradient||a.radialGradient,o,r,u,q,p,B="",a=a.stops,A,y=[],E=function(){
            h=['<fill colors="'+y.join(",")+'" opacity="',u,'" o:opacity2="',r,'" type="',i,'" ',B,'focus="100%" method="any" />'];
            V(e.prepVML(h),null,null,b)
            };

        o=a[0];
        A=a[a.length-1];
        o[0]>0&&a.unshift([0,o[1]]);
        A[0]<1&&a.push([1,A[1]]);
        n(a,function(a,b){
            g.test(a[1])?(f=wa(a[1]),k=f.get("rgb"),l=f.get("a")):(k=a[1],l=1);
            y.push(a[0]*
                100+"% "+k);
            b?(u=l,q=k):(r=l,p=k)
            });
        if(c==="fill")if(i==="gradient")c=m.x1||m[0]||0,a=m.y1||m[1]||0,o=m.x2||m[2]||0,m=m.y2||m[3]||0,B='angle="'+(90-M.atan((m-a)/(o-c))*180/Ha)+'"',E();
            else{
            var j=m.r,R=j*2,Z=j*2,v=m.cx,z=m.cy,s=b.radialReference,t,j=function(){
                s&&(t=d.getBBox(),v+=(s[0]-t.x)/t.width-0.5,z+=(s[1]-t.y)/t.height-0.5,R*=s[2]/t.width,Z*=s[2]/t.height);
                B='src="'+P.global.VMLRadialGradientURL+'" size="'+R+","+Z+'" origin="0.5,0.5" position="'+v+","+z+'" color2="'+p+'" ';
                E()
                };

            d.added?j():
            C(d,"add",j);
            j=q
            }else j=k
            }else if(g.test(a)&&b.tagName!=="IMG")f=wa(a),h=["<",c,' opacity="',f.get("a"),'"/>'],V(this.prepVML(h),null,null,b),j=f.get("rgb");
    else{
        j=b.getElementsByTagName(c);
        if(j.length)j[0].opacity=1;
        j=a
        }
        return j
    },
prepVML:function(a){
    var b=this.isIE8,a=a.join("");
    b?(a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),a=a.indexOf('style="')===-1?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):
    a=a.replace("<","<hcv:");
    return a
    },
text:qa.prototype.html,
path:function(a){
    var b={
        coordsize:"10 10"
    };

    Ta(a)?b.d=a:ga(a)&&w(b,a);
    return this.createElement("shape").attr(b)
    },
circle:function(a,b,c){
    return this.symbol("circle").attr({
        x:a-c,
        y:b-c,
        width:2*c,
        height:2*c
        })
    },
g:function(a){
    var b;
    a&&(b={
        className:"highcharts-"+a,
        "class":"highcharts-"+a
        });
    return this.createElement(oa).attr(b)
    },
image:function(a,b,c,d,e){
    var f=this.createElement("img").attr({
        src:a
    });
    arguments.length>1&&f.css({
        left:b,
        top:c,
        width:d,
        height:e
    });
    return f
    },
rect:function(a,b,c,d,e,f){
    if(ga(a))b=a.y,c=a.width,d=a.height,f=a.strokeWidth,a=a.x;
    var g=this.symbol("rect");
    g.r=e;
    return g.attr(g.crisp(f,a,b,x(c,0),x(d,0)))
    },
invertChild:function(a,b){
    var c=b.style;
    L(a,{
        flip:"x",
        left:G(c.width)-1,
        top:G(c.height)-1,
        rotation:-90
    })
    },
symbols:{
    arc:function(a,b,c,d,e){
        var f=e.start,g=e.end,h=e.r||c||d,c=da(f),d=ia(f),i=da(g),j=ia(g),k=e.innerR,l=0.08/h,m=k&&0.1/k||0;
        if(g-f===0)return["x"];else 2*Ha-g+f<l?i=-l:g-f<m&&(i=da(f+m));
        f=["wa",a-h,b-h,
        a+h,b+h,a+h*c,b+h*d,a+h*i,b+h*j];
        e.open&&!k&&f.push("e","M",a,b);
        f.push("at",a-k,b-k,a+k,b+k,a+k*i,b+k*j,a+k*c,b+k*d,"x","e");
        return f
        },
    circle:function(a,b,c,d){
        return["wa",a,b,a+c,b+d,a+c,b+d/2,a+c,b+d/2,"e"]
        },
    rect:function(a,b,c,d,e){
        var f=a+c,g=b+d,h;
        !v(e)||!e.r?f=qa.prototype.symbols.square.apply(0,arguments):(h=K(e.r,c,d),f=["M",a+h,b,"L",f-h,b,"wa",f-2*h,b,f,b+2*h,f-h,b,f,b+h,"L",f,g-h,"wa",f-2*h,g-2*h,f,g,f,g-h,f-h,g,"L",a+h,g,"wa",a,g-2*h,a+2*h,g,a+h,g,a,g-h,"L",a,b+h,"wa",a,b,a+2*h,b+2*h,
            a,b+h,a+h,b,"x","e"]);
        return f
        }
    }
};

Ja=function(){
    this.init.apply(this,arguments)
    };

Ja.prototype=t(qa.prototype,ea);
Sa=Ja
}
var mb,Vb;
if(ha)mb=function(){},mb.prototype.symbols={},Vb=function(){
    function a(){
        var a=b.length,d;
        for(d=0;d<a;d++)b[d]();
        b=[]
        }
        var b=[];
    return{
        push:function(c,d){
            b.length===0&&$b(d,a);
            b.push(c)
            }
        }
}();
Sa=Ja||mb||qa;
Ya.prototype={
    addLabel:function(){
        var a=this.axis,b=a.options,c=a.chart,d=a.horiz,e=a.categories,f=this.pos,g=b.labels,h=a.tickPositions,d=e&&d&&e.length&&!g.step&&!g.staggerLines&&
        !g.rotation&&c.plotWidth/h.length||!d&&c.plotWidth/2,i=f===h[0],j=f===h[h.length-1],k=e&&v(e[f])?e[f]:f,e=this.label,h=h.info,l;
        a.isDatetimeAxis&&h&&(l=b.dateTimeLabelFormats[h.higherRanks[f]||h.unitName]);
        this.isFirst=i;
        this.isLast=j;
        b=a.labelFormatter.call({
            axis:a,
            chart:c,
            isFirst:i,
            isLast:j,
            dateTimeLabelFormat:l,
            value:a.isLog?pa(ka(k)):k
            });
        f=d&&{
            width:x(1,s(d-2*(g.padding||10)))+"px"
            };

        f=w(f,g.style);
        if(v(e))e&&e.attr({
            text:b
        }).css(f);
        else{
            d={
                align:g.align
                };

            if(Ua(g.rotation))d.rotation=g.rotation;
            this.label=v(b)&&g.enabled?c.renderer.text(b,0,0,g.useHTML).attr(d).css(f).add(a.labelGroup):null
            }
        },
getLabelSize:function(){
    var a=this.label,b=this.axis;
    return a?(this.labelBBox=a.getBBox())[b.horiz?"height":"width"]:0
    },
getLabelSides:function(){
    var a=this.axis.options.labels,b=this.labelBBox.width,a=b*{
        left:0,
        center:0.5,
        right:1
    }
    [a.align]-a.x;
    return[-a,b-a]
    },
handleOverflow:function(a,b){
    var c=!0,d=this.axis,e=d.chart,f=this.isFirst,g=this.isLast,h=b.x,i=d.reversed,j=d.tickPositions;
    if(f||g){
        var k=
        this.getLabelSides(),l=k[0],k=k[1],e=e.plotLeft,m=e+d.len,j=(d=d.ticks[j[a+(f?1:-1)]])&&d.label.xy&&d.label.xy.x+d.getLabelSides()[f?0:1];
        f&&!i||g&&i?h+l<e&&(h=e-l,d&&h+k>j&&(c=!1)):h+k>m&&(h=m-k,d&&h+l<j&&(c=!1));
        b.x=h
        }
        return c
    },
getPosition:function(a,b,c,d){
    var e=this.axis,f=e.chart,g=d&&f.oldChartHeight||f.chartHeight;
    return{
        x:a?e.translate(b+c,null,null,d)+e.transB:e.left+e.offset+(e.opposite?(d&&f.oldChartWidth||f.chartWidth)-e.right-e.left:0),
        y:a?g-e.bottom+e.offset-(e.opposite?e.height:0):
        g-e.translate(b+c,null,null,d)-e.transB
        }
    },
getLabelPosition:function(a,b,c,d,e,f,g,h){
    var i=this.axis,j=i.transA,k=i.reversed,i=i.staggerLines,a=a+e.x-(f&&d?f*j*(k?-1:1):0),b=b+e.y-(f&&!d?f*j*(k?1:-1):0);
    v(e.y)||(b+=G(c.styles.lineHeight)*0.9-c.getBBox().height/2);
    i&&(b+=g/(h||1)%i*16);
    return{
        x:a,
        y:b
    }
},
getMarkPath:function(a,b,c,d,e,f){
    return f.crispLine(["M",a,b,"L",a+(e?0:-c),b+(e?c:0)],d)
    },
render:function(a,b){
    var c=this.axis,d=c.options,e=c.chart.renderer,f=c.horiz,g=this.type,h=this.label,i=this.pos,
    j=d.labels,k=this.gridLine,l=g?g+"Grid":"grid",m=g?g+"Tick":"tick",o=d[l+"LineWidth"],r=d[l+"LineColor"],u=d[l+"LineDashStyle"],q=d[m+"Length"],l=d[m+"Width"]||0,n=d[m+"Color"],B=d[m+"Position"],m=this.mark,A=j.step,y=!0,E=c.tickmarkOffset,R=this.getPosition(f,i,E,b),Z=R.x,R=R.y,v=c.staggerLines;
    if(o){
        i=c.getPlotLinePath(i+E,o,b);
        if(k===z){
            k={
                stroke:r,
                "stroke-width":o
            };

            if(u)k.dashstyle=u;
            if(!g)k.zIndex=1;
            this.gridLine=k=o?e.path(i).attr(k).add(c.gridGroup):null
            }
            if(!b&&k&&i)k[this.isNew?"attr":"animate"]({
            d:i
        })
        }
        if(l&&
        q)B==="inside"&&(q=-q),c.opposite&&(q=-q),g=this.getMarkPath(Z,R,q,l,f,e),m?m.animate({
        d:g
    }):this.mark=e.path(g).attr({
        stroke:n,
        "stroke-width":l
    }).add(c.axisGroup);
    if(h&&!isNaN(Z))h.xy=R=this.getLabelPosition(Z,R,h,f,j,E,a,A),this.isFirst&&!p(d.showFirstLabel,1)||this.isLast&&!p(d.showLastLabel,1)?y=!1:!v&&f&&j.overflow==="justify"&&!this.handleOverflow(a,R)&&(y=!1),A&&a%A&&(y=!1),y?(h[this.isNew?"attr":"animate"](R),h.show(),this.isNew=!1):h.hide()
        },
destroy:function(){
    ua(this,this.axis)
    }
};

vb.prototype=
{
    render:function(){
        var a=this,b=a.axis,c=b.horiz,d=(b.pointRange||0)/2,e=a.options,f=e.label,g=a.label,h=e.width,i=e.to,j=e.from,k=v(j)&&v(i),l=e.value,m=e.dashStyle,o=a.svgElem,r=[],u,q=e.color,n=e.zIndex,B=e.events,A=b.chart.renderer;
        b.isLog&&(j=sa(j),i=sa(i),l=sa(l));
        if(h){
            if(r=b.getPlotLinePath(l,h),d={
                stroke:q,
                "stroke-width":h
            },m)d.dashstyle=m
                }else if(k){
            if(j=x(j,b.min-d),i=K(i,b.max+d),r=b.getPlotBandPath(j,i,e),d={
                fill:q
            },e.borderWidth)d.stroke=e.borderColor,d["stroke-width"]=e.borderWidth
                }else return;
        if(v(n))d.zIndex=n;
        if(o)r?o.animate({
            d:r
        },null,o.onGetPath):(o.hide(),o.onGetPath=function(){
            o.show()
            });
        else if(r&&r.length&&(a.svgElem=o=A.path(r).attr(d).add(),B))for(u in e=function(b){
            o.on(b,function(c){
                B[b].apply(a,[c])
                })
            },B)e(u);if(f&&v(f.text)&&r&&r.length&&b.width>0&&b.height>0){
            f=t({
                align:c&&k&&"center",
                x:c?!k&&4:10,
                verticalAlign:!c&&k&&"middle",
                y:c?k?16:10:k?6:-4,
                rotation:c&&!k&&90
                },f);
            if(!g)a.label=g=A.text(f.text,0,0).attr({
                align:f.textAlign||f.align,
                rotation:f.rotation,
                zIndex:n
            }).css(f.style).add();
            b=[r[1],r[4],p(r[6],r[1])];
            r=[r[2],r[5],p(r[7],r[2])];
            c=Oa(b);
            k=Oa(r);
            g.align(f,!1,{
                x:c,
                y:k,
                width:Da(b)-c,
                height:Da(r)-k
                });
            g.show()
            }else g&&g.hide();
        return a
        },
    destroy:function(){
        La(this.axis.plotLinesAndBands,this);
        ua(this,this.axis)
        }
    };

Ob.prototype={
    destroy:function(){
        ua(this,this.axis)
        },
    setTotal:function(a){
        this.cum=this.total=a
        },
    render:function(a){
        var b=this.options.formatter.call(this);
        this.label?this.label.attr({
            text:b,
            visibility:"hidden"
        }):this.label=this.axis.chart.renderer.text(b,0,0).css(this.options.style).attr({
            align:this.textAlign,
            rotation:this.options.rotation,
            visibility:"hidden"
        }).add(a)
        },
    setOffset:function(a,b){
        var c=this.axis,d=c.chart,e=d.inverted,f=this.isNegative,g=c.translate(this.total,0,0,0,1),c=c.translate(0),c=W(g-c),h=d.xAxis[0].translate(this.x)+a,d=d.plotHeight,e={
            x:e?f?g:g-c:h,
            y:e?d-h-b:f?d-g-c:d-g,
            width:e?c:b,
            height:e?b:c
            };

        this.label&&this.label.align(this.alignOptions,null,e).attr({
            visibility:"visible"
        })
        }
    };

Qa.prototype={
    defaultOptions:{
        dateTimeLabelFormats:{
            millisecond:"%H:%M:%S.%L",
            second:"%H:%M:%S",
            minute:"%H:%M",
            hour:"%H:%M",
            day:"%e. %b",
            week:"%e. %b",
            month:"%b '%y",
            year:"%Y"
        },
        endOnTick:!1,
        gridLineColor:"#C0C0C0",
        labels:I,
        lineColor:"#C0D0E0",
        lineWidth:1,
        minPadding:0.01,
        maxPadding:0.01,
        minorGridLineColor:"#E0E0E0",
        minorGridLineWidth:1,
        minorTickColor:"#A0A0A0",
        minorTickLength:2,
        minorTickPosition:"outside",
        startOfWeek:1,
        startOnTick:!1,
        tickColor:"#C0D0E0",
        tickLength:5,
        tickmarkPlacement:"between",
        tickPixelInterval:100,
        tickPosition:"outside",
        tickWidth:1,
        title:{
            align:"middle",
            style:{
                color:"#6D869F",
                fontWeight:"bold"
            }
        },
    type:"linear"
},
defaultYAxisOptions:{
    endOnTick:!0,
    gridLineWidth:1,
    tickPixelInterval:72,
    showLastLabel:!0,
    labels:{
        align:"right",
        x:-8,
        y:3
    },
    lineWidth:0,
    maxPadding:0.05,
    minPadding:0.05,
    startOnTick:!0,
    tickWidth:0,
    title:{
        rotation:270,
        text:"Y-values"
    },
    stackLabels:{
        enabled:!1,
        formatter:function(){
            return this.total
            },
        style:I.style
        }
    },
defaultLeftAxisOptions:{
    labels:{
        align:"right",
        x:-8,
        y:null
    },
    title:{
        rotation:270
    }
},
defaultRightAxisOptions:{
    labels:{
        align:"left",
        x:8,
        y:null
    },
    title:{
        rotation:90
    }
},
defaultBottomAxisOptions:{
    labels:{
        align:"center",
        x:0,
        y:14
    },
    title:{
        rotation:0
    }
},
defaultTopAxisOptions:{
    labels:{
        align:"center",
        x:0,
        y:-5
    },
    title:{
        rotation:0
    }
},
init:function(a,b){
    var c=b.isX;
    this.horiz=a.inverted?!c:c;
    this.xOrY=(this.isXAxis=c)?"x":"y";
    this.opposite=b.opposite;
    this.side=this.horiz?this.opposite?0:2:this.opposite?1:3;
    this.setOptions(b);
    var d=this.options,e=d.type,f=e==="datetime";
    this.labelFormatter=d.labels.formatter||this.defaultLabelFormatter;
    this.staggerLines=this.horiz&&d.labels.staggerLines;
    this.userOptions=b;
    this.minPixelPadding=
    0;
    this.chart=a;
    this.reversed=d.reversed;
    this.categories=d.categories;
    this.isLog=e==="logarithmic";
    this.isLinked=v(d.linkedTo);
    this.isDatetimeAxis=f;
    this.tickmarkOffset=d.categories&&d.tickmarkPlacement==="between"?0.5:0;
    this.ticks={};

    this.minorTicks={};

    this.plotLinesAndBands=[];
    this.alternateBands={};

    this.len=0;
    this.minRange=this.userMinRange=d.minRange||d.maxZoom;
    this.range=d.range;
    this.offset=d.offset||0;
    this.stacks={};

    this.min=this.max=null;
    var g,d=this.options.events;
    a.axes.push(this);
    a[c?"xAxis":
    "yAxis"].push(this);
    this.series=[];
    if(a.inverted&&c&&this.reversed===z)this.reversed=!0;
    this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;
    this.addPlotLine=this.addPlotBand=this.addPlotBandOrLine;
    for(g in d)C(this,g,d[g]);if(this.isLog)this.val2lin=sa,this.lin2val=ka
        },
setOptions:function(a){
    this.options=t(this.defaultOptions,this.isXAxis?{}:this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],
        t(P[this.isXAxis?"xAxis":"yAxis"],a))
    },
defaultLabelFormatter:function(){
    var a=this.axis,b=this.value,c=this.dateTimeLabelFormat,d=P.lang.numericSymbols,e=d&&d.length,f,g=a.isLog?b:a.tickInterval;
    if(a.categories)f=b;
    else if(c)f=va(c,b);
    else if(e&&g>=1E3)for(;e--&&f===z;)a=Math.pow(1E3,e+1),g>=a&&d[e]!==null&&(f=Ma(b/a,-1)+d[e]);
    f===z&&(f=b>=1E3?Ma(b,0):Ma(b,-1));
    return f
    },
getSeriesExtremes:function(){
    var a=this,b=a.chart,c=a.stacks,d=[],e=[],f;
    a.hasVisibleSeries=!1;
    a.dataMin=a.dataMax=null;
    n(a.series,
        function(g){
            if(g.visible||!b.options.chart.ignoreHiddenSeries){
                var h=g.options,i,j,k,l,m,o,r,u,q,n=h.threshold,B,A=[],y=0;
                a.hasVisibleSeries=!0;
                if(a.isLog&&n<=0)n=h.threshold=null;
                if(a.isXAxis){
                    if(h=g.xData,h.length)a.dataMin=K(p(a.dataMin,h[0]),Oa(h)),a.dataMax=x(p(a.dataMax,h[0]),Da(h))
                        }else{
                    var E,R,Z,s=g.cropped,t=g.xAxis.getExtremes(),w=!!g.modifyValue;
                    i=h.stacking;
                    a.usePercentage=i==="percent";
                    if(i)m=h.stack,l=g.type+p(m,""),o="-"+l,g.stackKey=l,j=d[l]||[],d[l]=j,k=e[o]||[],e[o]=k;
                    if(a.usePercentage)a.dataMin=
                        0,a.dataMax=99;
                    h=g.processedXData;
                    r=g.processedYData;
                    B=r.length;
                    for(f=0;f<B;f++)if(u=h[f],q=r[f],q!==null&&q!==z&&(i?(R=(E=q<n)?k:j,Z=E?o:l,q=R[u]=v(R[u])?R[u]+q:q,c[Z]||(c[Z]={}),c[Z][u]||(c[Z][u]=new Ob(a,a.options.stackLabels,E,u,m)),c[Z][u].setTotal(q)):w&&(q=g.modifyValue(q)),s||(h[f+1]||u)>=t.min&&(h[f-1]||u)<=t.max))if(u=q.length)for(;u--;)q[u]!==null&&(A[y++]=q[u]);else A[y++]=q;if(!a.usePercentage&&A.length)a.dataMin=K(p(a.dataMin,A[0]),Oa(A)),a.dataMax=x(p(a.dataMax,A[0]),Da(A));
                    if(v(n))if(a.dataMin>=
                        n)a.dataMin=n,a.ignoreMinPadding=!0;
                        else if(a.dataMax<n)a.dataMax=n,a.ignoreMaxPadding=!0
                        }
                    }
        })
},
translate:function(a,b,c,d,e,f){
    var g=this.len,h=1,i=0,j=d?this.oldTransA:this.transA,d=d?this.oldMin:this.min,e=this.options.ordinal||this.isLog&&e;
    if(!j)j=this.transA;
    c&&(h*=-1,i=g);
    this.reversed&&(h*=-1,i-=h*g);
    b?(this.reversed&&(a=g-a),a=a/j+d,e&&(a=this.lin2val(a))):(e&&(a=this.val2lin(a)),a=h*(a-d)*j+i+h*this.minPixelPadding+(f?j*this.pointRange/2:0));
    return a
    },
getPlotLinePath:function(a,b,c){
    var d=
    this.chart,e=this.left,f=this.top,g,h,i,a=this.translate(a,null,null,c),j=c&&d.oldChartHeight||d.chartHeight,k=c&&d.oldChartWidth||d.chartWidth,l;
    g=this.transB;
    c=h=s(a+g);
    g=i=s(j-a-g);
    if(isNaN(a))l=!0;
    else if(this.horiz){
        if(g=f,i=j-this.bottom,c<e||c>e+this.width)l=!0
            }else if(c=e,h=k-this.right,g<f||g>f+this.height)l=!0;
    return l?null:d.renderer.crispLine(["M",c,g,"L",h,i],b||0)
    },
getPlotBandPath:function(a,b){
    var c=this.getPlotLinePath(b),d=this.getPlotLinePath(a);
    d&&c?d.push(c[4],c[5],c[1],c[2]):
    d=null;
    return d
    },
getLinearTickPositions:function(a,b,c){
    for(var d,b=pa(Y(b/a)*a),c=pa(Ga(c/a)*a),e=[];b<=c;){
        e.push(b);
        b=pa(b+a);
        if(b===d)break;
        d=b
        }
        return e
    },
getLogTickPositions:function(a,b,c,d){
    var e=this.options,f=this.len,g=[];
    if(!d)this._minorAutoInterval=null;
    if(a>=0.5)a=s(a),g=this.getLinearTickPositions(a,b,c);
    else if(a>=0.08)for(var f=Y(b),h,i,j,k,l,e=a>0.3?[1,2,4]:a>0.15?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];f<c+1&&!l;f++){
        i=e.length;
        for(h=0;h<i&&!l;h++)j=sa(ka(f)*e[h]),j>b&&g.push(k),k>c&&(l=
            !0),k=j
        }else if(b=ka(b),c=ka(c),a=e[d?"minorTickInterval":"tickInterval"],a=p(a==="auto"?null:a,this._minorAutoInterval,(c-b)*(e.tickPixelInterval/(d?5:1))/((d?f/this.tickPositions.length:f)||1)),a=qb(a,null,M.pow(10,Y(M.log(a)/M.LN10))),g=Ia(this.getLinearTickPositions(a,b,c),sa),!d)this._minorAutoInterval=a/5;
    if(!d)this.tickInterval=a;
    return g
    },
getMinorTickPositions:function(){
    var a=this.tickPositions,b=this.minorTickInterval,c=[],d,e;
    if(this.isLog){
        e=a.length;
        for(d=1;d<e;d++)c=c.concat(this.getLogTickPositions(b,
            a[d-1],a[d],!0))
        }else for(a=this.min+(a[0]-this.min)%b;a<=this.max;a+=b)c.push(a);
    return c
    },
adjustForMinRange:function(){
    var a=this.options,b=this.min,c=this.max,d,e=this.dataMax-this.dataMin>=this.minRange,f,g,h,i,j;
    if(this.isXAxis&&this.minRange===z&&!this.isLog)v(a.min)||v(a.max)?this.minRange=null:(n(this.series,function(a){
        i=a.xData;
        for(g=j=a.xIncrement?1:i.length-1;g>0;g--)if(h=i[g]-i[g-1],f===z||h<f)f=h
            }),this.minRange=K(f*5,this.dataMax-this.dataMin));
    if(c-b<this.minRange){
        var k=this.minRange;
        d=(k-c+b)/2;
        d=[b-d,p(a.min,b-d)];
        if(e)d[2]=this.dataMin;
        b=Da(d);
        c=[b+k,p(a.max,b+k)];
        if(e)c[2]=this.dataMax;
        c=Oa(c);
        c-b<k&&(d[0]=c-k,d[1]=p(a.min,c-k),b=Da(d))
        }
        this.min=b;
    this.max=c
    },
setAxisTranslation:function(){
    var a=this.max-this.min,b=0,c,d=0,e=0,f=this.transA;
    if(this.isXAxis)this.isLinked?d=this.linkedParent.minPointOffset:n(this.series,function(a){
        var f=a.pointRange,i=a.options.pointPlacement,j=a.closestPointRange;
        b=x(b,f);
        d=x(d,i?0:f/2);
        e=x(e,i==="on"?0:f);
        !a.noSharedTooltip&&v(j)&&(c=v(c)?
            K(c,j):j)
        }),this.minPointOffset=d,this.pointRange=b,this.closestPointRange=c;
    this.oldTransA=f;
    this.translationSlope=this.transA=f=this.len/(a+e||1);
    this.transB=this.horiz?this.left:this.bottom;
    this.minPixelPadding=f*d
    },
setTickPositions:function(a){
    var b=this,c=b.chart,d=b.options,e=b.isLog,f=b.isDatetimeAxis,g=b.isXAxis,h=b.isLinked,i=b.options.tickPositioner,j=d.maxPadding,k=d.minPadding,l=d.tickInterval,m=d.minTickInterval,o=d.tickPixelInterval,r=b.categories;
    h?(b.linkedParent=c[g?"xAxis":"yAxis"][d.linkedTo],
        c=b.linkedParent.getExtremes(),b.min=p(c.min,c.dataMin),b.max=p(c.max,c.dataMax),d.type!==b.linkedParent.options.type&&gb(11,1)):(b.min=p(b.userMin,d.min,b.dataMin),b.max=p(b.userMax,d.max,b.dataMax));
    if(e)!a&&K(b.min,p(b.dataMin,b.min))<=0&&gb(10,1),b.min=pa(sa(b.min)),b.max=pa(sa(b.max));
    if(b.range&&(b.userMin=b.min=x(b.min,b.max-b.range),b.userMax=b.max,a))b.range=null;
    b.adjustForMinRange();
    if(!r&&!b.usePercentage&&!h&&v(b.min)&&v(b.max)){
        c=b.max-b.min||1;
        if(!v(d.min)&&!v(b.userMin)&&k&&(b.dataMin<
            0||!b.ignoreMinPadding))b.min-=c*k;
        if(!v(d.max)&&!v(b.userMax)&&j&&(b.dataMax>0||!b.ignoreMaxPadding))b.max+=c*j
            }
            b.tickInterval=b.min===b.max||b.min===void 0||b.max===void 0?1:h&&!l&&o===b.linkedParent.options.tickPixelInterval?b.linkedParent.tickInterval:p(l,r?1:(b.max-b.min)*o/(b.len||1));
    g&&!a&&n(b.series,function(a){
        a.processData(b.min!==b.oldMin||b.max!==b.oldMax)
        });
    b.setAxisTranslation(a);
    b.beforeSetTickPositions&&b.beforeSetTickPositions();
    if(b.postProcessTickInterval)b.tickInterval=b.postProcessTickInterval(b.tickInterval);
    if(!l&&b.tickInterval<m)b.tickInterval=m;
    if(!f&&!e&&(a=M.pow(10,Y(M.log(b.tickInterval)/M.LN10)),!l))b.tickInterval=qb(b.tickInterval,null,a,d);
    b.minorTickInterval=d.minorTickInterval==="auto"&&b.tickInterval?b.tickInterval/5:d.minorTickInterval;
    b.tickPositions=i=d.tickPositions||i&&i.apply(b,[b.min,b.max]);
    if(!i)i=f?(b.getNonLinearTimeTicks||bb)(Gb(b.tickInterval,d.units),b.min,b.max,d.startOfWeek,b.ordinalPositions,b.closestPointRange,!0):e?b.getLogTickPositions(b.tickInterval,b.min,b.max):b.getLinearTickPositions(b.tickInterval,
        b.min,b.max),b.tickPositions=i;
    if(!h)e=i[0],f=i[i.length-1],h=b.minPointOffset||0,d.startOnTick?b.min=e:b.min-h>e&&i.shift(),d.endOnTick?b.max=f:b.max+h<f&&i.pop()
        },
setMaxTicks:function(){
    var a=this.chart,b=a.maxTicks,c=this.tickPositions,d=this.xOrY;
    b||(b={
        x:0,
        y:0
    });
    if(!this.isLinked&&!this.isDatetimeAxis&&c.length>b[d]&&this.options.alignTicks!==!1)b[d]=c.length;
    a.maxTicks=b
    },
adjustTickAmount:function(){
    var a=this.xOrY,b=this.tickPositions,c=this.chart.maxTicks;
    if(c&&c[a]&&!this.isDatetimeAxis&&
        !this.categories&&!this.isLinked&&this.options.alignTicks!==!1){
        var d=this.tickAmount,e=b.length;
        this.tickAmount=a=c[a];
        if(e<a){
            for(;b.length<a;)b.push(pa(b[b.length-1]+this.tickInterval));
            this.transA*=(e-1)/(a-1);
            this.max=b[b.length-1]
            }
            if(v(d)&&a!==d)this.isDirty=!0
            }
        },
setScale:function(){
    var a=this.stacks,b,c,d,e;
    this.oldMin=this.min;
    this.oldMax=this.max;
    this.oldAxisLength=this.len;
    this.setAxisSize();
    e=this.len!==this.oldAxisLength;
    n(this.series,function(a){
        if(a.isDirtyData||a.isDirty||a.xAxis.isDirty)d=
            !0
            });
    if(e||d||this.isLinked||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax)if(this.getSeriesExtremes(),this.setTickPositions(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,!this.isDirty)this.isDirty=e||this.min!==this.oldMin||this.max!==this.oldMax;
    if(!this.isXAxis)for(b in a)for(c in a[b])a[b][c].cum=a[b][c].total;this.setMaxTicks()
    },
setExtremes:function(a,b,c,d,e){
    var f=this,g=f.chart,c=p(c,!0),e=w(e,{
        min:a,
        max:b
    });
    J(f,"setExtremes",e,function(){
        f.userMin=a;
        f.userMax=
        b;
        f.isDirtyExtremes=!0;
        c&&g.redraw(d)
        })
    },
zoom:function(a,b){
    this.setExtremes(a,b,!1,z,{
        trigger:"zoom"
    });
    return!0
    },
setAxisSize:function(){
    var a=this.chart,b=this.options,c=b.offsetLeft||0,d=b.offsetRight||0;
    this.left=p(b.left,a.plotLeft+c);
    this.top=p(b.top,a.plotTop);
    this.width=p(b.width,a.plotWidth-c+d);
    this.height=p(b.height,a.plotHeight);
    this.bottom=a.chartHeight-this.height-this.top;
    this.right=a.chartWidth-this.width-this.left;
    this.len=x(this.horiz?this.width:this.height,0)
    },
getExtremes:function(){
    var a=
    this.isLog;
    return{
        min:a?pa(ka(this.min)):this.min,
        max:a?pa(ka(this.max)):this.max,
        dataMin:this.dataMin,
        dataMax:this.dataMax,
        userMin:this.userMin,
        userMax:this.userMax
        }
    },
getThreshold:function(a){
    var b=this.isLog,c=b?ka(this.min):this.min,b=b?ka(this.max):this.max;
    c>a||a===null?a=c:b<a&&(a=b);
    return this.translate(a,0,1,0,1)
    },
addPlotBandOrLine:function(a){
    a=(new vb(this,a)).render();
    this.plotLinesAndBands.push(a);
    return a
    },
getOffset:function(){
    var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.tickPositions,
    f=a.ticks,g=a.horiz,h=a.side,i,j=0,k,l=0,m=d.title,o=d.labels,r=0,u=b.axisOffset,q=[-1,1,1,-1][h],ca;
    a.hasData=b=a.hasVisibleSeries||v(a.min)&&v(a.max)&&!!e;
    a.showAxis=i=b||p(d.showEmpty,!0);
    if(!a.axisGroup)a.gridGroup=c.g("grid").attr({
        zIndex:d.gridZIndex||1
        }).add(),a.axisGroup=c.g("axis").attr({
        zIndex:d.zIndex||2
        }).add(),a.labelGroup=c.g("axis-labels").attr({
        zIndex:o.zIndex||7
        }).add();
    if(b||a.isLinked)n(e,function(b){
        f[b]?f[b].addLabel():f[b]=new Ya(a,b)
        }),n(e,function(a){
        if(h===0||h===2||{
            1:"left",
            3:"right"
        }
        [h]===o.align)r=x(f[a].getLabelSize(),r)
            }),a.staggerLines&&(r+=(a.staggerLines-1)*16);else for(ca in f)f[ca].destroy(),delete f[ca];if(m&&m.text){
        if(!a.axisTitle)a.axisTitle=c.text(m.text,0,0,m.useHTML).attr({
            zIndex:7,
            rotation:m.rotation||0,
            align:m.textAlign||{
                low:"left",
                middle:"center",
                high:"right"
            }
            [m.align]
            }).css(m.style).add(a.axisGroup),a.axisTitle.isNew=!0;
        if(i)j=a.axisTitle.getBBox()[g?"height":"width"],l=p(m.margin,g?5:10),k=m.offset;
        a.axisTitle[i?"show":"hide"]()
        }
        a.offset=q*p(d.offset,
        u[h]);
    a.axisTitleMargin=p(k,r+l+(h!==2&&r&&q*d.labels[g?"y":"x"]));
    u[h]=x(u[h],a.axisTitleMargin+j+q*a.offset)
    },
getLinePath:function(a){
    var b=this.chart,c=this.opposite,d=this.offset,e=this.horiz,f=this.left+(c?this.width:0)+d;
    this.lineTop=c=b.chartHeight-this.bottom-(c?this.height:0)+d;
    return b.renderer.crispLine(["M",e?this.left:f,e?c:this.top,"L",e?b.chartWidth-this.right:f,e?c:b.chartHeight-this.bottom],a)
    },
getTitlePosition:function(){
    var a=this.horiz,b=this.left,c=this.top,d=this.len,e=this.options.title,
    f=a?b:c,g=this.opposite,h=this.offset,i=G(e.style.fontSize||12),d={
        low:f+(a?0:d),
        middle:f+d/2,
        high:f+(a?d:0)
        }
        [e.align],b=(a?c+this.height:b)+(a?1:-1)*(g?-1:1)*this.axisTitleMargin+(this.side===2?i:0);
    return{
        x:a?d:b+(g?this.width:0)+h+(e.x||0),
        y:a?b-(g?this.height:0)+h:d+(e.y||0)
        }
    },
render:function(){
    var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.isLog,f=a.isLinked,g=a.tickPositions,h=a.axisTitle,i=a.stacks,j=a.ticks,k=a.minorTicks,l=a.alternateBands,m=d.stackLabels,o=d.alternateGridColor,r=a.tickmarkOffset,
    u=d.lineWidth,q,p=b.hasRendered&&v(a.oldMin)&&!isNaN(a.oldMin),s=a.showAxis,A,y;
    if(a.hasData||f)if(a.minorTickInterval&&!a.categories&&n(a.getMinorTickPositions(),function(b){
        k[b]||(k[b]=new Ya(a,b,"minor"));
        p&&k[b].isNew&&k[b].render(null,!0);
        k[b].isActive=!0;
        k[b].render()
        }),n(g.slice(1).concat([g[0]]),function(b,c){
        c=c===g.length-1?0:c+1;
        if(!f||b>=a.min&&b<=a.max)j[b]||(j[b]=new Ya(a,b)),p&&j[b].isNew&&j[b].render(c,!0),j[b].isActive=!0,j[b].render(c)
            }),o&&n(g,function(b,c){
        if(c%2===0&&b<a.max)l[b]||
            (l[b]=new vb(a)),A=b+r,y=g[c+1]!==z?g[c+1]+r:a.max,l[b].options={
                from:e?ka(A):A,
                to:e?ka(y):y,
                color:o
            },l[b].render(),l[b].isActive=!0
            }),!a._addedPlotLB)n((d.plotLines||[]).concat(d.plotBands||[]),function(b){
        a.addPlotBandOrLine(b)
        }),a._addedPlotLB=!0;
    n([j,k,l],function(a){
        for(var b in a)a[b].isActive?a[b].isActive=!1:(a[b].destroy(),delete a[b])
            });
    if(u)q=a.getLinePath(u),a.axisLine?a.axisLine.animate({
        d:q
    }):a.axisLine=c.path(q).attr({
        stroke:d.lineColor,
        "stroke-width":u,
        zIndex:7
    }).add(a.axisGroup),
        a.axisLine[s?"show":"hide"]();
    if(h&&s)h[h.isNew?"attr":"animate"](a.getTitlePosition()),h.isNew=!1;
    if(m&&m.enabled){
        var E,R,d=a.stackTotalGroup;
        if(!d)a.stackTotalGroup=d=c.g("stack-labels").attr({
            visibility:"visible",
            zIndex:6
        }).add();
        d.translate(b.plotLeft,b.plotTop);
        for(E in i)for(R in b=i[E],b)b[R].render(d)
            }
            a.isDirty=!1
    },
removePlotBandOrLine:function(a){
    for(var b=this.plotLinesAndBands,c=b.length;c--;)b[c].id===a&&b[c].destroy()
        },
setTitle:function(a,b){
    var c=this.chart,d=this.options,e=this.axisTitle;
    d.title=t(d.title,a);
    this.axisTitle=e&&e.destroy();
    this.isDirty=!0;
    p(b,!0)&&c.redraw()
    },
redraw:function(){
    var a=this.chart;
    a.tracker.resetTracker&&a.tracker.resetTracker(!0);
    this.render();
    n(this.plotLinesAndBands,function(a){
        a.render()
        });
    n(this.series,function(a){
        a.isDirty=!0
        })
    },
setCategories:function(a,b){
    var c=this.chart;
    this.categories=this.userOptions.categories=a;
    n(this.series,function(a){
        a.translate();
        a.setTooltipPoints(!0)
        });
    this.isDirty=!0;
    p(b,!0)&&c.redraw()
    },
destroy:function(){
    var a=this,
    b=a.stacks,c;
    O(a);
    for(c in b)ua(b[c]),b[c]=null;n([a.ticks,a.minorTicks,a.alternateBands,a.plotLinesAndBands],function(a){
        ua(a)
        });
    n("stackTotalGroup,axisLine,axisGroup,gridGroup,labelGroup,axisTitle".split(","),function(b){
        a[b]&&(a[b]=a[b].destroy())
        })
    }
};

wb.prototype={
    destroy:function(){
        n(this.crosshairs,function(a){
            a&&a.destroy()
            });
        if(this.label)this.label=this.label.destroy()
            },
    move:function(a,b,c,d){
        var e=this,f=e.now,g=e.options.animation!==!1&&!e.isHidden;
        w(f,{
            x:g?(2*f.x+a)/3:a,
            y:g?(f.y+b)/2:
            b,
            anchorX:g?(2*f.anchorX+c)/3:c,
            anchorY:g?(f.anchorY+d)/2:d
            });
        e.label.attr(f);
        e.tooltipTick=g&&(W(a-f.x)>1||W(b-f.y)>1)?function(){
            e.move(a,b,c,d)
            }:null
        },
    hide:function(){
        if(!this.isHidden){
            var a=this.chart.hoverPoints;
            this.label.hide();
            a&&n(a,function(a){
                a.setState()
                });
            this.chart.hoverPoints=null;
            this.isHidden=!0
            }
        },
hideCrosshairs:function(){
    n(this.crosshairs,function(a){
        a&&a.hide()
        })
    },
getAnchor:function(a,b){
    var c,d=this.chart,e=d.inverted,f=0,g=0,h,a=la(a);
    c=a[0].tooltipPos;
    c||(n(a,function(a){
        h=
        a.series.yAxis;
        f+=a.plotX;
        g+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!e&&h?h.top-d.plotTop:0)
        }),f/=a.length,g/=a.length,c=[e?d.plotWidth-g:f,this.shared&&!e&&a.length>1&&b?b.chartY-d.plotTop:e?d.plotHeight-f:g]);
    return Ia(c,s)
    },
getPosition:function(a,b,c){
    var d=this.chart,e=d.plotLeft,f=d.plotTop,g=d.plotWidth,h=d.plotHeight,i=p(this.options.distance,12),j=c.plotX,c=c.plotY,d=j+e+(d.inverted?i:-a-i),k=c-b+f+15,l;
    d<7&&(d=e+j+i);
    d+a>e+g&&(d-=d+a-(e+g),k=c-b+f-i,l=!0);
    k<f+5&&(k=f+5,l&&c>=k&&c<=
        k+b&&(k=c+f+i));
    k+b>f+h&&(k=x(f,f+h-b-i));
    return{
        x:d,
        y:k
    }
},
refresh:function(a,b){
    function c(){
        var a=this.points||la(this),b=a[0].series,c;
        c=[b.tooltipHeaderFormatter(a[0].key)];
        n(a,function(a){
            b=a.series;
            c.push(b.tooltipFormatter&&b.tooltipFormatter(a)||a.point.tooltipFormatter(b.tooltipOptions.pointFormat))
            });
        c.push(f.footerFormat||"");
        return c.join("")
        }
        var d=this.chart,e=this.label,f=this.options,g,h,i,j={},k,l=[];
    k=f.formatter||c;
    var j=d.hoverPoints,m,o=f.crosshairs;
    i=this.shared;
    h=this.getAnchor(a,
        b);
    g=h[0];
    h=h[1];
    i&&(!a.series||!a.series.noSharedTooltip)?(d.hoverPoints=a,j&&n(j,function(a){
        a.setState()
        }),n(a,function(a){
        a.setState("hover");
        l.push(a.getLabelConfig())
        }),j={
        x:a[0].category,
        y:a[0].y
        },j.points=l,a=a[0]):j=a.getLabelConfig();
    k=k.call(j);
    j=a.series;
    i=i||!j.isCartesian||j.tooltipOutsidePlot||d.isInsidePlot(g,h);
    k===!1||!i?this.hide():(this.isHidden&&e.show(),e.attr({
        text:k
    }),m=f.borderColor||a.color||j.color||"#606060",e.attr({
        stroke:m
    }),e=(f.positioner||this.getPosition).call(this,
        e.width,e.height,{
            plotX:g,
            plotY:h
        }),this.move(s(e.x),s(e.y),g+d.plotLeft,h+d.plotTop),this.isHidden=!1);
    if(o){
        o=la(o);
        for(e=o.length;e--;)if(i=a.series[e?"yAxis":"xAxis"],o[e]&&i)if(i=i.getPlotLinePath(e?p(a.stackY,a.y):a.x,1),this.crosshairs[e])this.crosshairs[e].attr({
            d:i,
            visibility:"visible"
        });
        else{
            j={
                "stroke-width":o[e].width||1,
                stroke:o[e].color||"#C0C0C0",
                zIndex:o[e].zIndex||2
                };

            if(o[e].dashStyle)j.dashstyle=o[e].dashStyle;
            this.crosshairs[e]=d.renderer.path(i).attr(j).add()
            }
        }
        J(d,"tooltipRefresh",

        {
    text:k,
    x:g+d.plotLeft,
    y:h+d.plotTop,
    borderColor:m
})
},
tick:function(){
    this.tooltipTick&&this.tooltipTick()
    }
};

xb.prototype={
    normalizeMouseEvent:function(a){
        var b,c,d,a=a||T.event;
        if(!a.target)a.target=a.srcElement;
        a=Ub(a);
        d=a.touches?a.touches.item(0):a;
        this.chartPosition=b=bc(this.chart.container);
        d.pageX===z?(c=a.x,b=a.y):(c=d.pageX-b.left,b=d.pageY-b.top);
        return w(a,{
            chartX:s(c),
            chartY:s(b)
            })
        },
    getMouseCoordinates:function(a){
        var b={
            xAxis:[],
            yAxis:[]
        },c=this.chart;
        n(c.axes,function(d){
            var e=d.isXAxis;
            b[e?"xAxis":"yAxis"].push({
                axis:d,
                value:d.translate(((c.inverted?!e:e)?a.chartX-c.plotLeft:d.top+d.len-a.chartY)-d.minPixelPadding,!0)
                })
            });
        return b
        },
    getIndex:function(a){
        var b=this.chart;
        return b.inverted?b.plotHeight+b.plotTop-a.chartY:a.chartX-b.plotLeft
        },
    onmousemove:function(a){
        var b=this.chart,c=b.series,d=b.tooltip,e,f=b.hoverPoint,g=b.hoverSeries,h,i,j=b.chartWidth,k=this.getIndex(a);
        if(d&&this.options.tooltip.shared&&(!g||!g.noSharedTooltip)){
            e=[];
            h=c.length;
            for(i=0;i<h;i++)if(c[i].visible&&
                c[i].options.enableMouseTracking!==!1&&!c[i].noSharedTooltip&&c[i].tooltipPoints.length)b=c[i].tooltipPoints[k],b._dist=W(k-b[c[i].xAxis.tooltipPosName||"plotX"]),j=K(j,b._dist),e.push(b);for(h=e.length;h--;)e[h]._dist>j&&e.splice(h,1);
            if(e.length&&e[0].plotX!==this.hoverX)d.refresh(e,a),this.hoverX=e[0].plotX
                }
                if(g&&g.tracker&&(b=g.tooltipPoints[k])&&b!==f)b.onMouseOver()
            },
    resetTracker:function(a){
        var b=this.chart,c=b.hoverSeries,d=b.hoverPoint,e=b.tooltip,b=e&&e.shared?b.hoverPoints:d;
        (a=a&&e&&b)&&
        la(b)[0].plotX===z&&(a=!1);
        if(a)e.refresh(b);
        else{
            if(d)d.onMouseOut();
            if(c)c.onMouseOut();
            e&&(e.hide(),e.hideCrosshairs());
            this.hoverX=null
            }
        },
setDOMEvents:function(){
    function a(){
        if(b.selectionMarker){
            var f={
                xAxis:[],
                yAxis:[]
            },g=b.selectionMarker.getBBox(),h=g.x-c.plotLeft,l=g.y-c.plotTop,m;
            e&&(n(c.axes,function(a){
                if(a.options.zoomEnabled!==!1){
                    var b=a.isXAxis,d=c.inverted?!b:b,e=a.translate(d?h:c.plotHeight-l-g.height,!0,0,0,1),d=a.translate((d?h+g.width:c.plotHeight-l)-2*a.minPixelPadding,!0,0,
                        0,1);
                    !isNaN(e)&&!isNaN(d)&&(f[b?"xAxis":"yAxis"].push({
                        axis:a,
                        min:K(e,d),
                        max:x(e,d)
                        }),m=!0)
                    }
                }),m&&J(c,"selection",f,function(a){
                c.zoom(a)
                }));
        b.selectionMarker=b.selectionMarker.destroy()
        }
        if(c)L(d,{
        cursor:"auto"
    }),c.cancelClick=e,c.mouseIsDown=e=!1;
    O(F,ba?"touchend":"mouseup",a)
    }
    var b=this,c=b.chart,d=c.container,e,f=b.zoomX&&!c.inverted||b.zoomY&&c.inverted,g=b.zoomY&&!c.inverted||b.zoomX&&c.inverted;
b.hideTooltipOnMouseMove=function(a){
    a=Ub(a);
    b.chartPosition&&c.hoverSeries&&c.hoverSeries.isCartesian&&
    !c.isInsidePlot(a.pageX-b.chartPosition.left-c.plotLeft,a.pageY-b.chartPosition.top-c.plotTop)&&b.resetTracker()
    };

b.hideTooltipOnMouseLeave=function(){
    b.resetTracker();
    b.chartPosition=null
    };

d.onmousedown=function(d){
    d=b.normalizeMouseEvent(d);
    !ba&&d.preventDefault&&d.preventDefault();
    c.mouseIsDown=!0;
    c.cancelClick=!1;
    c.mouseDownX=b.mouseDownX=d.chartX;
    b.mouseDownY=d.chartY;
    C(F,ba?"touchend":"mouseup",a)
    };

var h=function(a){
    if(!a||!(a.touches&&a.touches.length>1)){
        a=b.normalizeMouseEvent(a);
        if(!ba)a.returnValue=
            !1;
        var d=a.chartX,h=a.chartY,l=!c.isInsidePlot(d-c.plotLeft,h-c.plotTop);
        ba&&a.type==="touchstart"&&(D(a.target,"isTracker")?c.runTrackerClick||a.preventDefault():!c.runChartClick&&!l&&a.preventDefault());
        if(l)d<c.plotLeft?d=c.plotLeft:d>c.plotLeft+c.plotWidth&&(d=c.plotLeft+c.plotWidth),h<c.plotTop?h=c.plotTop:h>c.plotTop+c.plotHeight&&(h=c.plotTop+c.plotHeight);
        if(c.mouseIsDown&&a.type!=="touchstart"&&(e=Math.sqrt(Math.pow(b.mouseDownX-d,2)+Math.pow(b.mouseDownY-h,2)),e>10)){
            var m=c.isInsidePlot(b.mouseDownX-
                c.plotLeft,b.mouseDownY-c.plotTop);
            if(c.hasCartesianSeries&&(b.zoomX||b.zoomY)&&m&&!b.selectionMarker)b.selectionMarker=c.renderer.rect(c.plotLeft,c.plotTop,f?1:c.plotWidth,g?1:c.plotHeight,0).attr({
                fill:b.options.chart.selectionMarkerFill||"rgba(69,114,167,0.25)",
                zIndex:7
            }).add();
            if(b.selectionMarker&&f){
                var o=d-b.mouseDownX;
                b.selectionMarker.attr({
                    width:W(o),
                    x:(o>0?0:o)+b.mouseDownX
                    })
                }
                b.selectionMarker&&g&&(h-=b.mouseDownY,b.selectionMarker.attr({
                height:W(h),
                y:(h>0?0:h)+b.mouseDownY
                }));
            m&&!b.selectionMarker&&
            b.options.chart.panning&&c.pan(d)
            }
            if(!l)b.onmousemove(a);
        return l||!c.hasCartesianSeries
        }
    };

d.onmousemove=h;
C(d,"mouseleave",b.hideTooltipOnMouseLeave);
C(F,"mousemove",b.hideTooltipOnMouseMove);
d.ontouchstart=function(a){
    if(b.zoomX||b.zoomY)d.onmousedown(a);
    h(a)
    };

d.ontouchmove=h;
d.ontouchend=function(){
    e&&b.resetTracker()
    };

d.onclick=function(a){
    var d=c.hoverPoint,e,f,a=b.normalizeMouseEvent(a);
    a.cancelBubble=!0;
    if(!c.cancelClick)d&&(D(a.target,"isTracker")||D(a.target.parentNode,"isTracker"))?(e=d.plotX,
        f=d.plotY,w(d,{
            pageX:b.chartPosition.left+c.plotLeft+(c.inverted?c.plotWidth-f:e),
            pageY:b.chartPosition.top+c.plotTop+(c.inverted?c.plotHeight-e:f)
            }),J(d.series,"click",w(a,{
            point:d
        })),d.firePointEvent("click",a)):(w(a,b.getMouseCoordinates(a)),c.isInsidePlot(a.chartX-c.plotLeft,a.chartY-c.plotTop)&&J(c,"click",a))
        }
    },
destroy:function(){
    var a=this.chart,b=a.container;
    if(a.trackerGroup)a.trackerGroup=a.trackerGroup.destroy();
    O(b,"mouseleave",this.hideTooltipOnMouseLeave);
    O(F,"mousemove",this.hideTooltipOnMouseMove);
    b.onclick=b.onmousedown=b.onmousemove=b.ontouchstart=b.ontouchend=b.ontouchmove=null;
    clearInterval(this.tooltipInterval)
    },
init:function(a,b){
    if(!a.trackerGroup)a.trackerGroup=a.renderer.g("tracker").attr({
        zIndex:9
    }).add();
    if(b.enabled)a.tooltip=new wb(a,b),this.tooltipInterval=setInterval(function(){
        a&&a.tooltip&&a.tooltip.tick()
        },32);
    this.setDOMEvents()
    }
};

yb.prototype={
    init:function(a){
        var b=this,c=b.options=a.options.legend;
        if(c.enabled){
            var d=c.itemStyle,e=p(c.padding,8),f=c.itemMarginTop||0;
            b.baseline=
            G(d.fontSize)+3+f;
            b.itemStyle=d;
            b.itemHiddenStyle=t(d,c.itemHiddenStyle);
            b.itemMarginTop=f;
            b.padding=e;
            b.initialItemX=e;
            b.initialItemY=e-5;
            b.maxItemWidth=0;
            b.chart=a;
            b.itemHeight=0;
            b.lastLineHeight=0;
            b.render();
            C(b.chart,"endResize",function(){
                b.positionCheckboxes()
                })
            }
        },
colorizeItem:function(a,b){
    var c=this.options,d=a.legendItem,e=a.legendLine,f=a.legendSymbol,g=this.itemHiddenStyle.color,c=b?c.itemStyle.color:g,g=b?a.color:g;
    d&&d.css({
        fill:c
    });
    e&&e.attr({
        stroke:g
    });
    f&&f.attr({
        stroke:g,
        fill:g
    })
    },
positionItem:function(a){
    var b=this.options,c=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,e=d[0],d=d[1],f=a.checkbox;
    a.legendGroup&&a.legendGroup.translate(b?e:this.legendWidth-e-2*c-4,d);
    if(f)f.x=e,f.y=d
        },
destroyItem:function(a){
    var b=a.checkbox;
    n(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){
        a[b]&&a[b].destroy()
        });
    b&&Pa(a.checkbox)
    },
destroy:function(){
    var a=this.group,b=this.box;
    if(b)this.box=b.destroy();
    if(a)this.group=a.destroy()
        },
positionCheckboxes:function(){
    var a=this;
    n(a.allItems,function(b){
        var c=b.checkbox,d=a.group.alignAttr;
        c&&L(c,{
            left:d.translateX+b.legendItemWidth+c.x-20+"px",
            top:d.translateY+c.y+3+"px"
            })
        })
    },
renderItem:function(a){
    var u;
    var b=this,c=b.chart,d=c.renderer,e=b.options,f=e.layout==="horizontal",g=e.symbolWidth,h=e.symbolPadding,i=b.itemStyle,j=b.itemHiddenStyle,k=b.padding,l=!e.rtl,m=e.width,o=e.itemMarginBottom||0,r=b.itemMarginTop,n=b.initialItemX,q=a.legendItem,p=a.series||a,s=p.options,A=s.showCheckbox;
    if(!q&&(a.legendGroup=d.g("legend-item").attr({
        zIndex:1
    }).add(b.scrollGroup),
        p.drawLegendSymbol(b,a),a.legendItem=q=d.text(e.labelFormatter.call(a),l?g+h:-h,b.baseline,e.useHTML).css(t(a.visible?i:j)).attr({
            align:l?"left":"right",
            zIndex:2
        }).add(a.legendGroup),a.legendGroup.on("mouseover",function(){
            a.setState("hover");
            q.css(b.options.itemHoverStyle)
            }).on("mouseout",function(){
            q.css(a.visible?i:j);
            a.setState()
            }).on("click",function(b){
            var c=function(){
                a.setVisible()
                },b={
                browserEvent:b
            };

            a.firePointEvent?a.firePointEvent("legendItemClick",b,c):J(a,"legendItemClick",b,c)
            }),b.colorizeItem(a,
            a.visible),s&&A))a.checkbox=V("input",{
        type:"checkbox",
        checked:a.selected,
        defaultChecked:a.selected
        },e.itemCheckboxStyle,c.container),C(a.checkbox,"click",function(b){
        J(a,"checkboxClick",{
            checked:b.target.checked
            },function(){
            a.select()
            })
        });
    d=q.getBBox();
    u=a.legendItemWidth=e.itemWidth||g+h+d.width+k+(A?20:0),e=u;
    b.itemHeight=g=d.height;
    if(f&&b.itemX-n+e>(m||c.chartWidth-2*k-n))b.itemX=n,b.itemY+=r+b.lastLineHeight+o,b.lastLineHeight=0;
    b.maxItemWidth=x(b.maxItemWidth,e);
    b.lastItemY=r+b.itemY+o;
    b.lastLineHeight=
    x(g,b.lastLineHeight);
    a._legendItemPos=[b.itemX,b.itemY];
    f?b.itemX+=e:(b.itemY+=r+g+o,b.lastLineHeight=g);
    b.offsetWidth=m||x(f?b.itemX-n:e,b.offsetWidth)
    },
render:function(){
    var a=this,b=a.chart,c=b.renderer,d=a.group,e,f,g,h,i=a.box,j=a.options,k=a.padding,l=j.borderWidth,m=j.backgroundColor;
    a.itemX=a.initialItemX;
    a.itemY=a.initialItemY;
    a.offsetWidth=0;
    a.lastItemY=0;
    if(!d)a.group=d=c.g("legend").attr({
        zIndex:7
    }).add(),a.contentGroup=c.g().attr({
        zIndex:1
    }).add(d),a.scrollGroup=c.g().add(a.contentGroup),
        a.clipRect=c.clipRect(0,0,9999,b.chartHeight),a.contentGroup.clip(a.clipRect);
    e=[];
    n(b.series,function(a){
        var b=a.options;
        b.showInLegend&&(e=e.concat(a.legendItems||(b.legendType==="point"?a.data:a)))
        });
    Mb(e,function(a,b){
        return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)
        });
    j.reversed&&e.reverse();
    a.allItems=e;
    a.display=f=!!e.length;
    n(e,function(b){
        a.renderItem(b)
        });
    g=j.width||a.offsetWidth;
    h=a.lastItemY+a.lastLineHeight;
    h=a.handleOverflow(h);
    if(l||m){
        g+=k;
        h+=k;
        if(i){
            if(g>
                0&&h>0)i[i.isNew?"attr":"animate"](i.crisp(null,null,null,g,h)),i.isNew=!1
                }else a.box=i=c.rect(0,0,g,h,j.borderRadius,l||0).attr({
            stroke:j.borderColor,
            "stroke-width":l||0,
            fill:m||$
            }).add(d).shadow(j.shadow),i.isNew=!0;
        i[f?"show":"hide"]()
        }
        a.legendWidth=g;
    a.legendHeight=h;
    n(e,function(b){
        a.positionItem(b)
        });
    f&&d.align(w({
        width:g,
        height:h
    },j),!0,b.spacingBox);
    b.isResizing||this.positionCheckboxes()
    },
handleOverflow:function(a){
    var b=this,c=this.chart,d=c.renderer,e=this.options,f=e.y,f=c.spacingBox.height+
    (e.verticalAlign==="top"?-f:f)-this.padding,g=e.maxHeight,h=this.clipRect,i=e.navigation,j=p(i.animation,!0),k=i.arrowSize||12,l=this.nav;
    e.layout==="horizontal"&&(f/=2);
    g&&(f=K(f,g));
    if(a>f){
        this.clipHeight=c=f-20;
        this.pageCount=Ga(a/c);
        this.currentPage=p(this.currentPage,1);
        this.fullHeight=a;
        h.attr({
            height:c
        });
        if(!l)this.nav=l=d.g().attr({
            zIndex:1
        }).add(this.group),this.up=d.symbol("triangle",0,0,k,k).on("click",function(){
            b.scroll(-1,j)
            }).add(l),this.pager=d.text("",15,10).css(i.style).add(l),
            this.down=d.symbol("triangle-down",0,0,k,k).on("click",function(){
                b.scroll(1,j)
                }).add(l);
        b.scroll(0);
        a=f
        }else l&&(h.attr({
        height:c.chartHeight
        }),l.hide(),this.scrollGroup.attr({
        translateY:1
    }));
    return a
    },
scroll:function(a,b){
    var c=this.pageCount,d=this.currentPage+a,e=this.clipHeight,f=this.options.navigation,g=f.activeColor,f=f.inactiveColor,h=this.pager,i=this.padding;
    d>c&&(d=c);
    if(d>0)b!==z&&Ea(b,this.chart),this.nav.attr({
        translateX:i,
        translateY:e+7,
        visibility:"visible"
    }),this.up.attr({
        fill:d===
        1?f:g
        }).css({
        cursor:d===1?"default":"pointer"
        }),h.attr({
        text:d+"/"+this.pageCount
        }),this.down.attr({
        x:18+this.pager.getBBox().width,
        fill:d===c?f:g
        }).css({
        cursor:d===c?"default":"pointer"
        }),this.scrollGroup.animate({
        translateY:-K(e*(d-1),this.fullHeight-e+i)+1
        }),h.attr({
        text:d+"/"+c
        }),this.currentPage=d
    }
    };

Za.prototype={
    initSeries:function(a){
        var b=this.options.chart,b=new S[a.type||b.type||b.defaultSeriesType];
        b.init(this,a);
        return b
        },
    addSeries:function(a,b,c){
        var d,e=this;
        a&&(Ea(c,e),b=p(b,!0),J(e,
            "addSeries",{
                options:a
            },function(){
                d=e.initSeries(a);
                e.isDirtyLegend=!0;
                b&&e.redraw()
                }));
        return d
        },
    isInsidePlot:function(a,b,c){
        var d=c?b:a,a=c?a:b;
        return d>=0&&d<=this.plotWidth&&a>=0&&a<=this.plotHeight
        },
    adjustTickAmounts:function(){
        this.options.chart.alignTicks!==!1&&n(this.axes,function(a){
            a.adjustTickAmount()
            });
        this.maxTicks=null
        },
    redraw:function(a){
        var b=this.axes,c=this.series,d=this.tracker,e=this.legend,f=this.isDirtyLegend,g,h=this.isDirtyBox,i=c.length,j=i,k=this.renderer,l=k.isHidden();
        Ea(a,this);
        for(l&&this.cloneRenderTo();j--;)if(a=c[j],a.isDirty&&a.options.stacking){
            g=!0;
            break
        }
        if(g)for(j=i;j--;)if(a=c[j],a.options.stacking)a.isDirty=!0;n(c,function(a){
            a.isDirty&&a.options.legendType==="point"&&(f=!0)
            });
        if(f&&e.options.enabled)e.render(),this.isDirtyLegend=!1;
        if(this.hasCartesianSeries){
            if(!this.isResizing)this.maxTicks=null,n(b,function(a){
                a.setScale()
                });
            this.adjustTickAmounts();
            this.getMargins();
            n(b,function(a){
                if(a.isDirtyExtremes)a.isDirtyExtremes=!1,J(a,"afterSetExtremes",
                    a.getExtremes());
                if(a.isDirty||h||g)a.redraw(),h=!0
                    })
            }
            h&&this.drawChartBox();
        n(c,function(a){
            a.isDirty&&a.visible&&(!a.isCartesian||a.xAxis)&&a.redraw()
            });
        d&&d.resetTracker&&d.resetTracker(!0);
        k.draw();
        J(this,"redraw");
        l&&this.cloneRenderTo(!0)
        },
    showLoading:function(a){
        var b=this.options,c=this.loadingDiv,d=b.loading;
        if(!c)this.loadingDiv=c=V(oa,{
            className:"highcharts-loading"
        },w(d.style,{
            left:this.plotLeft+"px",
            top:this.plotTop+"px",
            width:this.plotWidth+"px",
            height:this.plotHeight+"px",
            zIndex:10,
            display:$
        }),this.container),this.loadingSpan=V("span",null,d.labelStyle,c);
        this.loadingSpan.innerHTML=a||b.lang.loading;
        if(!this.loadingShown)L(c,{
            opacity:0,
            display:""
        }),Eb(c,{
            opacity:d.style.opacity
            },{
            duration:d.showDuration||0
            }),this.loadingShown=!0
        },
    hideLoading:function(){
        var a=this.options,b=this.loadingDiv;
        b&&Eb(b,{
            opacity:0
        },{
            duration:a.loading.hideDuration||100,
            complete:function(){
                L(b,{
                    display:$
                })
                }
            });
    this.loadingShown=!1
    },
get:function(a){
    var b=this.axes,c=this.series,d,e;
    for(d=0;d<b.length;d++)if(b[d].options.id===
        a)return b[d];for(d=0;d<c.length;d++)if(c[d].options.id===a)return c[d];for(d=0;d<c.length;d++){
        e=c[d].points||[];
        for(b=0;b<e.length;b++)if(e[b].id===a)return e[b]
            }
            return null
    },
getAxes:function(){
    var a=this,b=this.options,c=b.xAxis||{},b=b.yAxis||{},c=la(c);
    n(c,function(a,b){
        a.index=b;
        a.isX=!0
        });
    b=la(b);
    n(b,function(a,b){
        a.index=b
        });
    c=c.concat(b);
    n(c,function(b){
        new Qa(a,b)
        });
    a.adjustTickAmounts()
    },
getSelectedPoints:function(){
    var a=[];
    n(this.series,function(b){
        a=a.concat(Tb(b.points,function(a){
            return a.selected
            }))
        });
    return a
    },
getSelectedSeries:function(){
    return Tb(this.series,function(a){
        return a.selected
        })
    },
showResetZoom:function(){
    var a=this,b=P.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,f=c.relativeTo==="chart"?null:"plotBox";
    this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){
        a.zoomOut()
        },d,e&&e.hover).attr({
        align:c.position.align,
        title:b.resetZoomTitle
        }).add().align(c.position,!1,a[f]);
    this.resetZoomButton.alignTo=f
    },
zoomOut:function(){
    var a=this,b=a.resetZoomButton;
    J(a,"selection",{
        resetSelection:!0
        },function(){
        a.zoom()
        });
    if(b)a.resetZoomButton=b.destroy()
        },
zoom:function(a){
    var b=this,c;
    !a||a.resetSelection?n(b.axes,function(a){
        c=a.zoom()
        }):n(a.xAxis.concat(a.yAxis),function(a){
        var e=a.axis;
        if(b.tracker[e.isXAxis?"zoomX":"zoomY"])c=e.zoom(a.min,a.max)
            });
    b.resetZoomButton||b.showResetZoom();
    c&&b.redraw(p(b.options.chart.animation,b.pointCount<100))
    },
pan:function(a){
    var b=this.xAxis[0],c=this.mouseDownX,d=b.pointRange/2,e=b.getExtremes(),f=b.translate(c-a,!0)+
    d,c=b.translate(c+this.plotWidth-a,!0)-d;
    (d=this.hoverPoints)&&n(d,function(a){
        a.setState()
        });
    b.series.length&&f>K(e.dataMin,e.min)&&c<x(e.dataMax,e.max)&&b.setExtremes(f,c,!0,!1,{
        trigger:"pan"
    });
    this.mouseDownX=a;
    L(this.container,{
        cursor:"move"
    })
    },
setTitle:function(a,b){
    var c=this,d=c.options,e;
    c.chartTitleOptions=e=t(d.title,a);
    c.chartSubtitleOptions=d=t(d.subtitle,b);
    n([["title",a,e],["subtitle",b,d]],function(a){
        var b=a[0],d=c[b],e=a[1],a=a[2];
        d&&e&&(c[b]=d=d.destroy());
        a&&a.text&&!d&&(c[b]=c.renderer.text(a.text,
            0,0,a.useHTML).attr({
            align:a.align,
            "class":"highcharts-"+b,
            zIndex:a.zIndex||4
            }).css(a.style).add().align(a,!1,c.spacingBox))
        })
    },
getChartSize:function(){
    var a=this.options.chart,b=this.renderToClone||this.renderTo;
    this.containerWidth=jb(b,"width");
    this.containerHeight=jb(b,"height");
    this.chartWidth=a.width||this.containerWidth||600;
    this.chartHeight=a.height||(this.containerHeight>19?this.containerHeight:400)
    },
cloneRenderTo:function(a){
    var b=this.renderToClone,c=this.container;
    a?b&&(this.renderTo.appendChild(c),
        Pa(b),delete this.renderToClone):(c&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),L(b,{
        position:"absolute",
        top:"-9999px",
        display:"block"
    }),F.body.appendChild(b),c&&b.appendChild(c))
    },
getContainer:function(){
    var a,b=this.options.chart,c,d,e;
    this.renderTo=a=b.renderTo;
    e="highcharts-"+Ab++;
    if(ra(a))this.renderTo=a=F.getElementById(a);
    a||gb(13,!0);
    a.innerHTML="";
    a.offsetWidth||this.cloneRenderTo();
    this.getChartSize();
    c=this.chartWidth;
    d=this.chartHeight;
    this.container=
    a=V(oa,{
        className:"highcharts-container"+(b.className?" "+b.className:""),
        id:e
    },w({
        position:"relative",
        overflow:"hidden",
        width:c+"px",
        height:d+"px",
        textAlign:"left",
        lineHeight:"normal",
        zIndex:0
    },b.style),this.renderToClone||a);
    this.renderer=b.forExport?new qa(a,c,d,!0):new Sa(a,c,d);
    ha&&this.renderer.create(this,a,c,d)
    },
getMargins:function(){
    var a=this.options.chart,b=a.spacingTop,c=a.spacingRight,d=a.spacingBottom,a=a.spacingLeft,e,f=this.legend,g=this.optionsMarginTop,h=this.optionsMarginLeft,i=
    this.optionsMarginRight,j=this.optionsMarginBottom,k=this.chartTitleOptions,l=this.chartSubtitleOptions,m=this.options.legend,o=p(m.margin,10),r=m.x,u=m.y,q=m.align,s=m.verticalAlign;
    this.resetMargins();
    e=this.axisOffset;
    if((this.title||this.subtitle)&&!v(this.optionsMarginTop))if(l=x(this.title&&!k.floating&&!k.verticalAlign&&k.y||0,this.subtitle&&!l.floating&&!l.verticalAlign&&l.y||0))this.plotTop=x(this.plotTop,l+p(k.margin,15)+b);
    if(f.display&&!m.floating)if(q==="right"){
        if(!v(i))this.marginRight=
            x(this.marginRight,f.legendWidth-r+o+c)
            }else if(q==="left"){
        if(!v(h))this.plotLeft=x(this.plotLeft,f.legendWidth+r+o+a)
            }else if(s==="top"){
        if(!v(g))this.plotTop=x(this.plotTop,f.legendHeight+u+o+b)
            }else if(s==="bottom"&&!v(j))this.marginBottom=x(this.marginBottom,f.legendHeight-u+o+d);
    this.extraBottomMargin&&(this.marginBottom+=this.extraBottomMargin);
    this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);
    this.hasCartesianSeries&&n(this.axes,function(a){
        a.getOffset()
        });
    v(h)||(this.plotLeft+=e[3]);
    v(g)||(this.plotTop+=e[0]);
    v(j)||(this.marginBottom+=e[2]);
    v(i)||(this.marginRight+=e[1]);
    this.setChartSize()
    },
initReflow:function(){
    function a(a){
        var g=c.width||jb(d,"width"),h=c.height||jb(d,"height"),a=a?a.target:T;
        if(g&&h&&(a===T||a===F)){
            if(g!==b.containerWidth||h!==b.containerHeight)clearTimeout(e),e=setTimeout(function(){
                b.resize(g,h,!1)
                },100);
            b.containerWidth=g;
            b.containerHeight=h
            }
        }
    var b=this,c=b.options.chart,d=b.renderTo,e;
C(T,"resize",a);
C(b,"destroy",function(){
    O(T,"resize",a)
    })
},
resize:function(a,
    b,c){
    var d=this,e,f,g=d.resetZoomButton,h=d.title,i=d.subtitle,j;
    d.isResizing+=1;
    j=function(){
        d&&J(d,"endResize",null,function(){
            d.isResizing-=1
            })
        };

    Ea(c,d);
    d.oldChartHeight=d.chartHeight;
    d.oldChartWidth=d.chartWidth;
    if(v(a))d.chartWidth=e=s(a);
    if(v(b))d.chartHeight=f=s(b);
    L(d.container,{
        width:e+"px",
        height:f+"px"
        });
    d.renderer.setSize(e,f,c);
    d.plotWidth=e-d.plotLeft-d.marginRight;
    d.plotHeight=f-d.plotTop-d.marginBottom;
    d.maxTicks=null;
    n(d.axes,function(a){
        a.isDirty=!0;
        a.setScale()
        });
    n(d.series,function(a){
        a.isDirty=
        !0
        });
    d.isDirtyLegend=!0;
    d.isDirtyBox=!0;
    d.getMargins();
    a=d.spacingBox;
    h&&h.align(null,null,a);
    i&&i.align(null,null,a);
    g&&g.align(null,null,d[g.alignTo]);
    d.redraw(c);
    d.oldChartHeight=null;
    J(d,"resize");
    Xa===!1?j():setTimeout(j,Xa&&Xa.duration||500)
    },
setChartSize:function(){
    var a=this.inverted,b=this.chartWidth,c=this.chartHeight,d=this.options.chart,e=d.spacingTop,f=d.spacingRight,g=d.spacingBottom,h=d.spacingLeft,i,j,k,l;
    this.plotLeft=i=s(this.plotLeft);
    this.plotTop=j=s(this.plotTop);
    this.plotWidth=
    k=s(b-i-this.marginRight);
    this.plotHeight=l=s(c-j-this.marginBottom);
    this.plotSizeX=a?l:k;
    this.plotSizeY=a?k:l;
    this.plotBorderWidth=a=d.plotBorderWidth||0;
    this.spacingBox={
        x:h,
        y:e,
        width:b-h-f,
        height:c-e-g
        };

    this.plotBox={
        x:i,
        y:j,
        width:k,
        height:l
    };

    this.clipBox={
        x:a/2,
        y:a/2,
        width:this.plotSizeX-a,
        height:this.plotSizeY-a
        };

    n(this.axes,function(a){
        a.setAxisSize();
        a.setAxisTranslation()
        })
    },
resetMargins:function(){
    var a=this.options.chart,b=a.spacingRight,c=a.spacingBottom,d=a.spacingLeft;
    this.plotTop=p(this.optionsMarginTop,
        a.spacingTop);
    this.marginRight=p(this.optionsMarginRight,b);
    this.marginBottom=p(this.optionsMarginBottom,c);
    this.plotLeft=p(this.optionsMarginLeft,d);
    this.axisOffset=[0,0,0,0]
    },
drawChartBox:function(){
    var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,e=this.chartBackground,f=this.plotBackground,g=this.plotBorder,h=this.plotBGImage,i=a.borderWidth||0,j=a.backgroundColor,k=a.plotBackgroundColor,l=a.plotBackgroundImage,m=a.plotBorderWidth||0,o,r=this.plotLeft,n=this.plotTop,
    q=this.plotWidth,p=this.plotHeight,s=this.plotBox,A=this.clipRect,y=this.clipBox;
    o=i+(a.shadow?8:0);
    if(i||j)if(e)e.animate(e.crisp(null,null,null,c-o,d-o));
        else{
        e={
            fill:j||$
            };

        if(i)e.stroke=a.borderColor,e["stroke-width"]=i;
        this.chartBackground=b.rect(o/2,o/2,c-o,d-o,a.borderRadius,i).attr(e).add().shadow(a.shadow)
        }
        if(k)f?f.animate(s):this.plotBackground=b.rect(r,n,q,p,0).attr({
        fill:k
    }).add().shadow(a.plotShadow);
    if(l)h?h.animate(s):this.plotBGImage=b.image(l,r,n,q,p).add();
    A?A.animate({
        width:y.width,
        height:y.height
        }):this.clipRect=b.clipRect(y);
    if(m)g?g.animate(g.crisp(null,r,n,q,p)):this.plotBorder=b.rect(r,n,q,p,0,m).attr({
        stroke:a.plotBorderColor,
        "stroke-width":m,
        zIndex:1
    }).add();
    this.isDirtyBox=!1
    },
propFromSeries:function(){
    var a=this,b=a.options.chart,c,d=a.options.series,e,f;
    n(["inverted","angular","polar"],function(g){
        c=S[b.type||b.defaultSeriesType];
        f=a[g]||b[g]||c&&c.prototype[g];
        for(e=d&&d.length;!f&&e--;)(c=S[d[e].type])&&c.prototype[g]&&(f=!0);
        a[g]=f
        })
    },
render:function(){
    var a=this,
    b=a.axes,c=a.renderer,d=a.options,e=d.labels,d=d.credits,f;
    a.setTitle();
    a.legend=new yb(a);
    n(b,function(a){
        a.setScale()
        });
    a.getMargins();
    a.maxTicks=null;
    n(b,function(a){
        a.setTickPositions(!0);
        a.setMaxTicks()
        });
    a.adjustTickAmounts();
    a.getMargins();
    a.drawChartBox();
    a.hasCartesianSeries&&n(b,function(a){
        a.render()
        });
    if(!a.seriesGroup)a.seriesGroup=c.g("series-group").attr({
        zIndex:3
    }).add();
    n(a.series,function(a){
        a.translate();
        a.setTooltipPoints();
        a.render()
        });
    e.items&&n(e.items,function(b){
        var d=w(e.style,
            b.style),f=G(d.left)+a.plotLeft,j=G(d.top)+a.plotTop+12;
        delete d.left;
        delete d.top;
        c.text(b.html,f,j).attr({
            zIndex:2
        }).css(d).add()
        });
    if(d.enabled&&!a.credits)f=d.href,a.credits=c.text(d.text,0,0).on("click",function(){
        if(f)location.href=f
            }).attr({
        align:d.position.align,
        zIndex:8
    }).css(d.style).add().align(d.position);
    a.hasRendered=!0
    },
destroy:function(){
    var a=this,b=a.axes,c=a.series,d=a.container,e,f=d&&d.parentNode;
    if(a!==null){
        J(a,"destroy");
        O(a);
        for(e=b.length;e--;)b[e]=b[e].destroy();
        for(e=c.length;e--;)c[e]=
            c[e].destroy();
        n("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,tracker,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),function(b){
            var c=a[b];
            c&&(a[b]=c.destroy())
            });
        if(d)d.innerHTML="",O(d),f&&Pa(d),d=null;
        for(e in a)delete a[e];a=a.options=null
        }
    },
firstRender:function(){
    var a=this,b=a.options,c=a.callback;
    if(!ma&&T==T.top&&F.readyState!=="complete"||ha&&!T.canvg)ha?Vb.push(function(){
        a.firstRender()
        },b.global.canvasToolsURL):
    F.attachEvent("onreadystatechange",function(){
        F.detachEvent("onreadystatechange",a.firstRender);
        F.readyState==="complete"&&a.firstRender()
        });
    else{
        a.getContainer();
        J(a,"init");
        if(Highcharts.RangeSelector&&b.rangeSelector.enabled)a.rangeSelector=new Highcharts.RangeSelector(a);
        a.resetMargins();
        a.setChartSize();
        a.propFromSeries();
        a.getAxes();
        n(b.series||[],function(b){
            a.initSeries(b)
            });
        if(Highcharts.Scroller&&(b.navigator.enabled||b.scrollbar.enabled))a.scroller=new Highcharts.Scroller(a);
        a.tracker=
        new xb(a,b);
        a.render();
        a.renderer.draw();
        c&&c.apply(a,[a]);
        n(a.callbacks,function(b){
            b.apply(a,[a])
            });
        a.cloneRenderTo(!0);
        J(a,"load")
        }
    },
init:function(a){
    var b=this.options.chart,c;
    b.reflow!==!1&&C(this,"load",this.initReflow);
    if(a)for(c in a)C(this,c,a[c]);this.xAxis=[];
    this.yAxis=[];
    this.animation=ha?!1:p(b.animation,!0);
    this.setSize=this.resize;
    this.pointCount=0;
    this.counters=new Lb;
    this.firstRender()
    }
};

Za.prototype.callbacks=[];
var xa=function(){};

xa.prototype={
    init:function(a,b,c){
        var d=a.chart.counters;
        this.series=a;
        this.applyOptions(b,c);
        this.pointAttr={};

        if(a.options.colorByPoint)b=a.chart.options.colors,this.color=this.color||b[d.color++],d.wrapColor(b.length);
        a.chart.pointCount++;
        return this
        },
    applyOptions:function(a,b){
        var c=this.series,d=typeof a;
        this.config=a;
        if(d==="number"||a===null)this.y=a;
        else if(typeof a[0]==="number")this.x=a[0],this.y=a[1];
        else if(d==="object"&&typeof a.length!=="number"){
            w(this,a);
            this.options=a;
            if(a.dataLabels)c._hasPointLabels=!0;
            if(a.marker)c._hasPointMarkers=
                !0
                }else if(typeof a[0]==="string")this.name=a[0],this.y=a[1];
        if(this.x===z)this.x=b===z?c.autoIncrement():b
            },
    destroy:function(){
        var a=this.series.chart,b=a.hoverPoints,c;
        a.pointCount--;
        if(b&&(this.setState(),La(b,this),!b.length))a.hoverPoints=null;
        if(this===a.hoverPoint)this.onMouseOut();
        if(this.graphic||this.dataLabel)O(this),this.destroyElements();
        this.legendItem&&a.legend.destroyItem(this);
        for(c in this)this[c]=null
            },
    destroyElements:function(){
        for(var a="graphic,tracker,dataLabel,group,connector,shadowGroup".split(","),
            b,c=6;c--;)b=a[c],this[b]&&(this[b]=this[b].destroy())
            },
    getLabelConfig:function(){
        return{
            x:this.category,
            y:this.y,
            key:this.name||this.category,
            series:this.series,
            point:this,
            percentage:this.percentage,
            total:this.total||this.stackTotal
            }
        },
select:function(a,b){
    var c=this,d=c.series.chart,a=p(a,!c.selected);
    c.firePointEvent(a?"select":"unselect",{
        accumulate:b
    },function(){
        c.selected=a;
        c.setState(a&&"select");
        b||n(d.getSelectedPoints(),function(a){
            if(a.selected&&a!==c)a.selected=!1,a.setState(""),a.firePointEvent("unselect")
                })
        })
    },
onMouseOver:function(){
    var a=this.series,b=a.chart,c=b.tooltip,d=b.hoverPoint;
    if(d&&d!==this)d.onMouseOut();
    this.firePointEvent("mouseOver");
    c&&(!c.shared||a.noSharedTooltip)&&c.refresh(this);
    this.setState("hover");
    b.hoverPoint=this
    },
onMouseOut:function(){
    var a=this.series.chart,b=a.hoverPoints;
    if(!b||ac(this,b)===-1)this.firePointEvent("mouseOut"),this.setState(),a.hoverPoint=null
        },
tooltipFormatter:function(a){
    var b=this.series,c=b.tooltipOptions,d=a.match(/\{(series|point)\.[a-zA-Z]+\}/g),e=/[{\.}]/,
    f,g,h,i,j={
        y:0,
        open:0,
        high:0,
        low:0,
        close:0,
        percentage:1,
        total:1
    };

    c.valuePrefix=c.valuePrefix||c.yPrefix;
    c.valueDecimals=c.valueDecimals||c.yDecimals;
    c.valueSuffix=c.valueSuffix||c.ySuffix;
    for(i in d)g=d[i],ra(g)&&g!==a&&(h=(" "+g).split(e),f={
        point:this,
        series:b
    }
    [h[1]],h=h[2],f===this&&j.hasOwnProperty(h)?(f=j[h]?h:"value",f=(c[f+"Prefix"]||"")+Ma(this[h],p(c[f+"Decimals"],-1))+(c[f+"Suffix"]||"")):f=f[h],a=a.replace(g,f));return a
    },
update:function(a,b,c){
    var d=this,e=d.series,f=d.graphic,g,h=e.data,
    i=h.length,j=e.chart,b=p(b,!0);
    d.firePointEvent("update",{
        options:a
    },function(){
        d.applyOptions(a);
        ga(a)&&(e.getAttribs(),f&&f.attr(d.pointAttr[e.state]));
        for(g=0;g<i;g++)if(h[g]===d){
            e.xData[g]=d.x;
            e.yData[g]=d.y;
            e.options.data[g]=a;
            break
        }
        e.isDirty=!0;
        e.isDirtyData=!0;
        b&&j.redraw(c)
        })
    },
remove:function(a,b){
    var c=this,d=c.series,e=d.chart,f,g=d.data,h=g.length;
    Ea(b,e);
    a=p(a,!0);
    c.firePointEvent("remove",null,function(){
        for(f=0;f<h;f++)if(g[f]===c){
            g.splice(f,1);
            d.options.data.splice(f,1);
            d.xData.splice(f,
                1);
            d.yData.splice(f,1);
            break
        }
        c.destroy();
        d.isDirty=!0;
        d.isDirtyData=!0;
        a&&e.redraw()
        })
    },
firePointEvent:function(a,b,c){
    var d=this,e=this.series.options;
    (e.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();
    a==="click"&&e.allowPointSelect&&(c=function(a){
        d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)
        });
    J(this,a,b,c)
    },
importEvents:function(){
    if(!this.hasImportedEvents){
        var a=t(this.series.options.point,this.options).events,b;
        this.events=a;
        for(b in a)C(this,b,a[b]);
        this.hasImportedEvents=!0
        }
    },
setState:function(a){
    var b=this.plotX,c=this.plotY,d=this.series,e=d.options.states,f=Q[d.type].marker&&d.options.marker,g=f&&!f.enabled,h=f&&f.states[a],i=h&&h.enabled===!1,j=d.stateMarkerGraphic,k=d.chart,l=this.pointAttr,a=a||"";
    if(!(a===this.state||this.selected&&a!=="select"||e[a]&&e[a].enabled===!1||a&&(i||g&&!h.enabled))){
        if(this.graphic)e=f&&this.graphic.symbolName&&l[a].r,this.graphic.attr(t(l[a],e?{
            x:b-e,
            y:c-e,
            width:2*e,
            height:2*e
            }:{}));
        else{
            if(a&&h)e=h.radius,
                j?j.attr({
                    x:b-e,
                    y:c-e
                    }):d.stateMarkerGraphic=j=k.renderer.symbol(d.symbol,b-e,c-e,2*e,2*e).attr(l[a]).add(d.markerGroup);
            if(j)j[a&&k.isInsidePlot(b,c)?"show":"hide"]()
                }
                this.state=a
        }
    }
};

var X=function(){};

X.prototype={
    isCartesian:!0,
    type:"line",
    pointClass:xa,
    sorted:!0,
    pointAttrToOptions:{
        stroke:"lineColor",
        "stroke-width":"lineWidth",
        fill:"fillColor",
        r:"radius"
    },
    init:function(a,b){
        var c,d;
        this.chart=a;
        this.options=b=this.setOptions(b);
        this.bindAxes();
        w(this,{
            name:b.name,
            state:"",
            pointAttr:{},
            visible:b.visible!==
            !1,
            selected:b.selected===!0
            });
        if(ha)b.animation=!1;
        d=b.events;
        for(c in d)C(this,c,d[c]);if(d&&d.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;
        this.getColor();
        this.getSymbol();
        this.setData(b.data,!1);
        if(this.isCartesian)a.hasCartesianSeries=!0;
        a.series.push(this);
        Mb(a.series,function(a,b){
            return(a.options.index||0)-(b.options.index||0)
            });
        n(a.series,function(a,b){
            a.index=b;
            a.name=a.name||"Series "+(b+1)
            })
        },
    bindAxes:function(){
        var a=this,b=a.options,c=
        a.chart,d;
        a.isCartesian&&n(["xAxis","yAxis"],function(e){
            n(c[e],function(c){
                d=c.options;
                if(b[e]===d.index||b[e]===z&&d.index===0)c.series.push(a),a[e]=c,c.isDirty=!0
                    })
            })
        },
    autoIncrement:function(){
        var a=this.options,b=this.xIncrement,b=p(b,a.pointStart,0);
        this.pointInterval=p(this.pointInterval,a.pointInterval,1);
        this.xIncrement=b+this.pointInterval;
        return b
        },
    getSegments:function(){
        var a=-1,b=[],c,d=this.points,e=d.length;
        if(e)if(this.options.connectNulls){
            for(c=e;c--;)d[c].y===null&&d.splice(c,1);
            d.length&&(b=[d])
            }else n(d,function(c,g){
            c.y===null?(g>a+1&&b.push(d.slice(a+1,g)),a=g):g===e-1&&b.push(d.slice(a+1,g+1))
            });
        this.segments=b
        },
    setOptions:function(a){
        var b=this.chart.options,c=b.plotOptions,d=c[this.type],e=a.data;
        a.data=null;
        c=t(d,c.series,a);
        c.data=a.data=e;
        this.tooltipOptions=t(b.tooltip,c.tooltip);
        d.marker===null&&delete c.marker;
        return c
        },
    getColor:function(){
        var a=this.options,b=this.chart.options.colors,c=this.chart.counters;
        this.color=a.color||!a.colorByPoint&&b[c.color++]||
        "gray";
        c.wrapColor(b.length)
        },
    getSymbol:function(){
        var a=this.options.marker,b=this.chart,c=b.options.symbols,b=b.counters;
        this.symbol=a.symbol||c[b.symbol++];
        if(/^url/.test(this.symbol))a.radius=0;
        b.wrapSymbol(c.length)
        },
    drawLegendSymbol:function(a){
        var b=this.options,c=b.marker,d=a.options.symbolWidth,e=this.chart.renderer,f=this.legendGroup,a=a.baseline,g;
        if(b.lineWidth){
            g={
                "stroke-width":b.lineWidth
                };

            if(b.dashStyle)g.dashstyle=b.dashStyle;
            this.legendLine=e.path(["M",0,a-4,"L",d,a-4]).attr(g).add(f)
            }
            if(c&&
            c.enabled)b=c.radius,this.legendSymbol=e.symbol(this.symbol,d/2-b,a-4-b,2*b,2*b).attr(this.pointAttr[""]).add(f)
            },
    addPoint:function(a,b,c,d){
        var e=this.data,f=this.graph,g=this.area,h=this.chart,i=this.xData,j=this.yData,k=f&&f.shift||0,l=this.options.data,m=this.pointClass.prototype;
        Ea(d,h);
        if(f&&c)f.shift=k+1;
        if(g){
            if(c)g.shift=k+1;
            g.isArea=!0
            }
            b=p(b,!0);
        d={
            series:this
        };

        m.applyOptions.apply(d,[a]);
        i.push(d.x);
        j.push(m.toYData?m.toYData.call(d):d.y);
        l.push(a);
        c&&(e[0]&&e[0].remove?e[0].remove(!1):
            (e.shift(),i.shift(),j.shift(),l.shift()));
        this.getAttribs();
        this.isDirtyData=this.isDirty=!0;
        b&&h.redraw()
        },
    setData:function(a,b){
        var c=this.points,d=this.options,e=this.initialColor,f=this.chart,g=null,h=this.xAxis,i,j=this.pointClass.prototype;
        this.xIncrement=null;
        this.pointRange=h&&h.categories?1:d.pointRange;
        if(v(e))f.counters.color=e;
        var e=[],k=[],l=a?a.length:[],m=(i=this.pointArrayMap)&&i.length;
        if(l>(d.turboThreshold||1E3)){
            for(i=0;g===null&&i<l;)g=a[i],i++;
            if(Ua(g)){
                j=p(d.pointStart,0);
                d=p(d.pointInterval,1);
                for(i=0;i<l;i++)e[i]=j,k[i]=a[i],j+=d;
                this.xIncrement=j
                }else if(Ta(g))if(m)for(i=0;i<l;i++)d=a[i],e[i]=d[0],k[i]=d.slice(1,m+1);else for(i=0;i<l;i++)d=a[i],e[i]=d[0],k[i]=d[1]
                }else for(i=0;i<l;i++)d={
            series:this
        },j.applyOptions.apply(d,[a[i]]),e[i]=d.x,k[i]=j.toYData?j.toYData.call(d):d.y;
        ra(k[0])&&gb(14,!0);
        this.data=[];
        this.options.data=a;
        this.xData=e;
        this.yData=k;
        for(i=c&&c.length||0;i--;)c[i]&&c[i].destroy&&c[i].destroy();
        if(h)h.minRange=h.userMinRange;
        this.isDirty=this.isDirtyData=
        f.isDirtyBox=!0;
        p(b,!0)&&f.redraw(!1)
        },
    remove:function(a,b){
        var c=this,d=c.chart,a=p(a,!0);
        if(!c.isRemoving)c.isRemoving=!0,J(c,"remove",null,function(){
            c.destroy();
            d.isDirtyLegend=d.isDirtyBox=!0;
            a&&d.redraw(b)
            });
        c.isRemoving=!1
        },
    processData:function(a){
        var b=this.xData,c=this.yData,d=b.length,e=0,f=d,g,h,i=this.xAxis,j=this.options,k=j.cropThreshold,l=this.isCartesian;
        if(l&&!this.isDirty&&!i.isDirty&&!this.yAxis.isDirty&&!a)return!1;
        if(l&&this.sorted&&(!k||d>k||this.forceCrop))if(a=i.getExtremes(),
            i=a.min,k=a.max,b[d-1]<i||b[0]>k)b=[],c=[];
            else if(b[0]<i||b[d-1]>k){
            for(a=0;a<d;a++)if(b[a]>=i){
                e=x(0,a-1);
                break
            }
            for(;a<d;a++)if(b[a]>k){
                f=a+1;
                break
            }
            b=b.slice(e,f);
            c=c.slice(e,f);
            g=!0
            }
            for(a=b.length-1;a>0;a--)if(d=b[a]-b[a-1],d>0&&(h===z||d<h))h=d;this.cropped=g;
        this.cropStart=e;
        this.processedXData=b;
        this.processedYData=c;
        if(j.pointRange===null)this.pointRange=h||1;
        this.closestPointRange=h
        },
    generatePoints:function(){
        var a=this.options.data,b=this.data,c,d=this.processedXData,e=this.processedYData,
        f=this.pointClass,g=d.length,h=this.cropStart||0,i,j=this.hasGroupedData,k,l=[],m;
        if(!b&&!j)b=[],b.length=a.length,b=this.data=b;
        for(m=0;m<g;m++)i=h+m,j?l[m]=(new f).init(this,[d[m]].concat(la(e[m]))):(b[i]?k=b[i]:a[i]!==z&&(b[i]=k=(new f).init(this,a[i],d[m])),l[m]=k);
        if(b&&(g!==(c=b.length)||j))for(m=0;m<c;m++)if(m===h&&!j&&(m+=g),b[m])b[m].destroyElements(),b[m].plotX=z;this.data=b;
        this.points=l
        },
    translate:function(){
        this.processedXData||this.processData();
        this.generatePoints();
        for(var a=this.chart,
            b=this.options,c=b.stacking,d=this.xAxis,e=d.categories,f=this.yAxis,g=this.points,h=g.length,i=!!this.modifyValue,j,k=f.series,l=k.length,m=b.pointPlacement==="between";l--;)if(k[l].visible){
            k[l]===this&&(j=!0);
            break
        }
        for(l=0;l<h;l++){
            var k=g[l],o=k.x,r=k.y,n=k.low,q=f.stacks[(r<b.threshold?"-":"")+this.stackKey];
            k.plotX=d.translate(o,0,0,0,1,m);
            if(c&&this.visible&&q&&q[o])n=q[o],o=n.total,n.cum=n=n.cum-r,r=n+r,j&&(n=p(b.threshold,f.isLog?null:f.min)),c==="percent"&&(n=o?n*100/o:0,r=o?r*100/o:0),
                k.percentage=o?k.y*100/o:0,k.total=k.stackTotal=o,k.stackY=r;
            k.yBottom=v(n)?f.translate(n,0,1,0,1):null;
            i&&(r=this.modifyValue(r,k));
            k.plotY=typeof r==="number"?s(f.translate(r,0,1,0,1)*10)/10:z;
            k.clientX=a.inverted?a.plotHeight-k.plotX:k.plotX;
            k.category=e&&e[k.x]!==z?e[k.x]:k.x
            }
            this.getSegments()
        },
    setTooltipPoints:function(a){
        var b=[],c,d,e=(c=this.xAxis)?c.tooltipLen||c.len:this.chart.plotSizeX,f=c&&c.tooltipPosName||"plotX",g,h,i=[];
        if(this.options.enableMouseTracking!==!1){
            if(a)this.tooltipPoints=
                null;
            n(this.segments||this.points,function(a){
                b=b.concat(a)
                });
            c&&c.reversed&&(b=b.reverse());
            a=b.length;
            for(h=0;h<a;h++){
                g=b[h];
                c=b[h-1]?d+1:0;
                for(d=b[h+1]?x(0,Y((g[f]+(b[h+1]?b[h+1][f]:e))/2)):e;c>=0&&c<=d;)i[c++]=g
                    }
                    this.tooltipPoints=i
            }
        },
tooltipHeaderFormatter:function(a){
    var b=this.tooltipOptions,c=b.xDateFormat,d=this.xAxis,e=d&&d.options.type==="datetime",f;
    if(e&&!c)for(f in H)if(H[f]>=d.closestPointRange){
        c=b.dateTimeLabelFormats[f];
        break
    }
    return b.headerFormat.replace("{point.key}",e?va(c,a):
        a).replace("{series.name}",this.name).replace("{series.color}",this.color)
    },
onMouseOver:function(){
    var a=this.chart,b=a.hoverSeries;
    if(b&&b!==this)b.onMouseOut();
    this.options.events.mouseOver&&J(this,"mouseOver");
    this.setState("hover");
    a.hoverSeries=this
    },
onMouseOut:function(){
    var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;
    if(d)d.onMouseOut();
    this&&a.events.mouseOut&&J(this,"mouseOut");
    c&&!a.stickyTracking&&!c.shared&&c.hide();
    this.setState();
    b.hoverSeries=null
    },
animate:function(a){
    var b=
    this,c=b.chart,d=c.renderer,e;
    e=b.options.animation;
    var f=c.clipBox,g=c.inverted,h;
    if(e&&!ga(e))e=Q[b.type].animation;
    h="_sharedClip"+e.duration+e.easing;
    if(a)a=c[h],e=c[h+"m"],a||(c[h]=a=d.clipRect(w(f,{
        width:0
    })),c[h+"m"]=e=d.clipRect(-99,g?-c.plotLeft:-c.plotTop,99,g?c.chartWidth:c.chartHeight)),b.group.clip(a),b.markerGroup.clip(e),b.sharedClipKey=h;
    else{
        if(a=c[h])a.animate({
            width:c.plotSizeX
            },e),c[h+"m"].animate({
            width:c.plotSizeX+99
            },e);
        b.animate=null;
        b.animationTimeout=setTimeout(function(){
            b.afterAnimate()
            },
        e.duration)
        }
    },
afterAnimate:function(){
    var a=this.chart,b=this.sharedClipKey,c=this.group;
    c&&this.options.clip!==!1&&(c.clip(a.clipRect),this.markerGroup.clip());
    setTimeout(function(){
        b&&a[b]&&(a[b]=a[b].destroy(),a[b+"m"]=a[b+"m"].destroy())
        },100)
    },
drawPoints:function(){
    var a,b=this.points,c=this.chart,d,e,f,g,h,i,j,k,l=this.options.marker,m,o=this.markerGroup;
    if(l.enabled||this._hasPointMarkers)for(f=b.length;f--;)if(g=b[f],d=g.plotX,e=g.plotY,k=g.graphic,i=g.marker||{},a=l.enabled&&i.enabled===
        z||i.enabled,m=c.isInsidePlot(d,e,c.inverted),a&&e!==z&&!isNaN(e))if(a=g.pointAttr[g.selected?"select":""],h=a.r,i=p(i.symbol,this.symbol),j=i.indexOf("url")===0,k)k.attr({
        visibility:m?ma?"inherit":"visible":"hidden"
        }).animate(w({
        x:d-h,
        y:e-h
        },k.symbolName?{
        width:2*h,
        height:2*h
        }:{}));
    else if(m&&(h>0||j))g.graphic=c.renderer.symbol(i,d-h,e-h,2*h,2*h).attr(a).add(o)
        },
convertAttribs:function(a,b,c,d){
    var e=this.pointAttrToOptions,f,g,h={},a=a||{},b=b||{},c=c||{},d=d||{};

    for(f in e)g=e[f],h[f]=p(a[g],
        b[f],c[f],d[f]);return h
    },
getAttribs:function(){
    var a=this,b=Q[a.type].marker?a.options.marker:a.options,c=b.states,d=c.hover,e,f=a.color,g={
        stroke:f,
        fill:f
    },h=a.points||[],i=[],j,k=a.pointAttrToOptions,l;
    a.options.marker?(d.radius=d.radius||b.radius+2,d.lineWidth=d.lineWidth||b.lineWidth+1):d.color=d.color||wa(d.color||f).brighten(d.brightness).get();
    i[""]=a.convertAttribs(b,g);
    n(["hover","select"],function(b){
        i[b]=a.convertAttribs(c[b],i[""])
        });
    a.pointAttr=i;
    for(f=h.length;f--;){
        g=h[f];
        if((b=g.options&&
            g.options.marker||g.options)&&b.enabled===!1)b.radius=0;
        e=a.options.colorByPoint;
        if(g.options)for(l in k)v(b[k[l]])&&(e=!0);if(e){
            b=b||{};

            j=[];
            c=b.states||{};

            e=c.hover=c.hover||{};

            if(!a.options.marker)e.color=wa(e.color||g.color).brighten(e.brightness||d.brightness).get();
            j[""]=a.convertAttribs(w({
                color:g.color
                },b),i[""]);
            j.hover=a.convertAttribs(c.hover,i.hover,j[""]);
            j.select=a.convertAttribs(c.select,i.select,j[""])
            }else j=i;
        g.pointAttr=j
        }
    },
destroy:function(){
    var a=this,b=a.chart,c=/AppleWebKit\/533/.test(Ra),
    d,e,f=a.data||[],g,h,i;
    J(a,"destroy");
    O(a);
    n(["xAxis","yAxis"],function(b){
        if(i=a[b])La(i.series,a),i.isDirty=!0
            });
    a.legendItem&&a.chart.legend.destroyItem(a);
    for(e=f.length;e--;)(g=f[e])&&g.destroy&&g.destroy();
    a.points=null;
    clearTimeout(a.animationTimeout);
    n("area,graph,dataLabelsGroup,group,markerGroup,tracker,trackerGroup".split(","),function(b){
        a[b]&&(d=c&&b==="group"?"hide":"destroy",a[b][d]())
        });
    if(b.hoverSeries===a)b.hoverSeries=null;
    La(b.series,a);
    for(h in a)delete a[h]
    },
drawDataLabels:function(){
    var a=
    this,b=a.options,c=b.dataLabels;
    if(c.enabled||a._hasPointLabels){
        var d,e,f=a.points,g,h,i,j,k=a.chart,l=k.renderer,m=k.inverted,o=a.type,r=b.stacking,u=o==="column"||o==="bar",q=c.verticalAlign===null,ca=c.y===null,B=l.fontMetrics(c.style.fontSize),A=B.h,y=B.b;
        u&&(B={
            top:y,
            middle:y-A/2,
            bottom:-A+y
            },r?(q&&(c=t(c,{
            verticalAlign:"middle"
        })),ca&&(c=t(c,{
            y:B[c.verticalAlign]
            }))):q?c=t(c,{
            verticalAlign:"top"
        }):ca&&(c=t(c,{
            y:B[c.verticalAlign]
            })));
        j=a.plotGroup("dataLabelsGroup","data-labels",a.visible?
            "visible":"hidden",6);
        h=c;
        n(f,function(f){
            var n,q,ca,B,w=f.dataLabel;
            c=h;
            (g=f.options)&&g.dataLabels&&(c=t(c,g.dataLabels));
            if(B=c.enabled)n=f.barX&&f.barX+f.barW/2||p(f.plotX,-999),q=p(f.plotY,-999),ca=c.y===null?f.y>=b.threshold?-A+y:y:c.y,d=(m?k.plotWidth-q:n)+c.x,e=s((m?k.plotHeight-n:q)+ca);
            a.isCartesian&&!k.isInsidePlot(d-c.x,e)&&(B=!1);
            if(w&&!B)f.dataLabel=w.destroy();
            else if(B){
                n=c.align;
                var x;
                i=c.formatter.call(f.getLabelConfig(),c);
                o==="column"&&(d+={
                    left:-1,
                    right:1
                }
                [n]*f.barW/2||0);
                !r&&
                m&&f.y<0&&(n="right",d-=10);
                c.style.color=p(c.color,c.style.color,a.color,"black");
                if(w)w.attr({
                    text:i
                }).animate({
                    x:d,
                    y:e
                });
                else if(v(i)){
                    w={
                        align:n,
                        fill:c.backgroundColor,
                        stroke:c.borderColor,
                        "stroke-width":c.borderWidth,
                        r:c.borderRadius||0,
                        rotation:c.rotation,
                        padding:c.padding,
                        zIndex:1
                    };

                    for(x in w)w[x]===z&&delete w[x];w=f.dataLabel=l[c.rotation?"text":"label"](i,d,e,null,null,null,c.useHTML,!0).attr(w).css(c.style).add(j).shadow(c.shadow)
                    }
                    if(u&&b.stacking&&w)x=f.barX,n=f.barY,q=f.barW,f=f.barH,
                    w.align(c,null,{
                        x:m?k.plotWidth-n-f:x,
                        y:m?k.plotHeight-x-q:n,
                        width:m?f:q,
                        height:m?q:f
                        })
                    }
                })
    }
},
getSegmentPath:function(a){
    var b=this,c=[];
    n(a,function(d,e){
        b.getPointSpline?c.push.apply(c,b.getPointSpline(a,d,e)):(c.push(e?"L":"M"),e&&b.options.step&&c.push(d.plotX,a[e-1].plotY),c.push(d.plotX,d.plotY))
        });
    return c
    },
getGraphPath:function(){
    var a=this,b=[],c,d=[];
    n(a.segments,function(e){
        c=a.getSegmentPath(e);
        e.length>1?b=b.concat(c):d.push(e[0])
        });
    a.singlePoints=d;
    return a.graphPath=b
    },
drawGraph:function(){
    var a=
    this.options,b=this.graph,c=this.group,d=a.lineColor||this.color,e=a.lineWidth,f=a.dashStyle,g=this.getGraphPath();
    if(b)kb(b),b.animate({
        d:g
    });
    else if(e){
        b={
            stroke:d,
            "stroke-width":e,
            zIndex:1
        };

        if(f)b.dashstyle=f;
        this.graph=this.chart.renderer.path(g).attr(b).add(c).shadow(a.shadow)
        }
    },
invertGroups:function(){
    function a(){
        var a={
            width:b.yAxis.len,
            height:b.xAxis.len
            };

        n(["group","trackerGroup","markerGroup"],function(c){
            b[c]&&b[c].attr(a).invert()
            })
        }
        var b=this,c=b.chart;
    C(c,"resize",a);
    C(b,"destroy",
        function(){
            O(c,"resize",a)
            });
    a();
    b.invertGroups=a
    },
plotGroup:function(a,b,c,d,e){
    var f=this[a],g=this.chart,h=this.xAxis,i=this.yAxis;
    f||(this[a]=f=g.renderer.g(b).attr({
        visibility:c,
        zIndex:d||0.1
        }).add(e));
    f.translate(h?h.left:g.plotLeft,i?i.top:g.plotTop);
    return f
    },
render:function(){
    var a=this.chart,b,c=this.options,d=c.animation&&!!this.animate,e=this.visible?"visible":"hidden",f=c.zIndex,g=this.hasRendered,h=a.seriesGroup;
    b=this.plotGroup("group","series",e,f,h);
    this.markerGroup=this.plotGroup("markerGroup",
        "markers",e,f,h);
    this.drawDataLabels();
    d&&this.animate(!0);
    this.getAttribs();
    b.inverted=a.inverted;
    this.drawGraph&&this.drawGraph();
    this.drawPoints();
    this.options.enableMouseTracking!==!1&&this.drawTracker();
    a.inverted&&this.invertGroups();
    c.clip!==!1&&!this.sharedClipKey&&!g&&(b.clip(a.clipRect),this.trackerGroup&&this.trackerGroup.clip(a.clipRect));
    d?this.animate():g||this.afterAnimate();
    this.isDirty=this.isDirtyData=!1;
    this.hasRendered=!0
    },
redraw:function(){
    var a=this.chart,b=this.isDirtyData,
    c=this.group;
    c&&(a.inverted&&c.attr({
        width:a.plotWidth,
        height:a.plotHeight
        }),c.animate({
        translateX:this.xAxis.left,
        translateY:this.yAxis.top
        }));
    this.translate();
    this.setTooltipPoints(!0);
    this.render();
    b&&J(this,"updatedData")
    },
setState:function(a){
    var b=this.options,c=this.graph,d=b.states,b=b.lineWidth,a=a||"";
    if(this.state!==a)this.state=a,d[a]&&d[a].enabled===!1||(a&&(b=d[a].lineWidth||b+1),c&&!c.dashstyle&&c.attr({
        "stroke-width":b
    },a?0:500))
    },
setVisible:function(a,b){
    var c=this.chart,d=this.legendItem,
    e=this.group,f=this.tracker,g=this.dataLabelsGroup,h=this.markerGroup,i,j=this.points,k=c.options.chart.ignoreHiddenSeries;
    i=this.visible;
    i=(this.visible=a=a===z?!i:a)?"show":"hide";
    if(e)e[i]();
    if(h)h[i]();
    if(f)f[i]();
    else if(j)for(e=j.length;e--;)if(f=j[e],f.tracker)f.tracker[i]();if(g)g[i]();
    d&&c.legend.colorizeItem(this,a);
    this.isDirty=!0;
    this.options.stacking&&n(c.series,function(a){
        if(a.options.stacking&&a.visible)a.isDirty=!0
            });
    if(k)c.isDirtyBox=!0;
    b!==!1&&c.redraw();
    J(this,i)
    },
show:function(){
    this.setVisible(!0)
    },
hide:function(){
    this.setVisible(!1)
    },
select:function(a){
    this.selected=a=a===z?!this.selected:a;
    if(this.checkbox)this.checkbox.checked=a;
    J(this,a?"select":"unselect")
    },
drawTracker:function(){
    var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,g=f.renderer,h=f.options.tooltip.snap,i=a.tracker,j=b.cursor,j=j&&{
        cursor:j
    },k=a.singlePoints,l=this.isCartesian&&this.plotGroup("trackerGroup",null,"visible",b.zIndex||1,f.trackerGroup),m;
    if(e&&!c)for(m=e+1;m--;)d[m]===
        "M"&&d.splice(m+1,0,d[m+1]-h,d[m+2],"L"),(m&&d[m]==="M"||m===e)&&d.splice(m,0,"L",d[m-2]+h,d[m-1]);
    for(m=0;m<k.length;m++)e=k[m],d.push("M",e.plotX-h,e.plotY,"L",e.plotX+h,e.plotY);
    i?i.attr({
        d:d
    }):a.tracker=g.path(d).attr({
        isTracker:!0,
        "stroke-linejoin":"bevel",
        visibility:a.visible?"visible":"hidden",
        stroke:Db,
        fill:c?Db:$,
        "stroke-width":b.lineWidth+(c?0:2*h)
        }).on(ba?"touchstart":"mouseover",function(){
        if(f.hoverSeries!==a)a.onMouseOver()
            }).on("mouseout",function(){
        if(!b.stickyTracking)a.onMouseOut()
            }).css(j).add(l)
    }
};
I=aa(X);
S.line=I;
Q.area=t(N,{
    threshold:0
});
I=aa(X,{
    type:"area",
    getSegmentPath:function(a){
        var b=X.prototype.getSegmentPath.call(this,a),c=[].concat(b),d,e=this.options;
        b.length===3&&c.push("L",b[1],b[2]);
        if(e.stacking&&!this.closedStacks)for(d=a.length-1;d>=0;d--)d<a.length-1&&e.step&&c.push(a[d+1].plotX,a[d].yBottom),c.push(a[d].plotX,a[d].yBottom);else this.closeSegment(c,a);
        this.areaPath=this.areaPath.concat(c);
        return b
        },
    closeSegment:function(a,b){
        var c=this.yAxis.getThreshold(this.options.threshold);
        a.push("L",b[b.length-1].plotX,c,"L",b[0].plotX,c)
        },
    drawGraph:function(){
        this.areaPath=[];
        X.prototype.drawGraph.apply(this);
        var a=this.areaPath,b=this.options,c=this.area;
        c?c.animate({
            d:a
        }):this.area=this.chart.renderer.path(a).attr({
            fill:p(b.fillColor,wa(this.color).setOpacity(b.fillOpacity||0.75).get()),
            zIndex:0
        }).add(this.group)
        },
    drawLegendSymbol:function(a,b){
        b.legendSymbol=this.chart.renderer.rect(0,a.baseline-11,a.options.symbolWidth,12,2).attr({
            zIndex:3
        }).add(b.legendGroup)
        }
    });
S.area=I;
Q.spline=
t(N);
ea=aa(X,{
    type:"spline",
    getPointSpline:function(a,b,c){
        var d=b.plotX,e=b.plotY,f=a[c-1],g=a[c+1],h,i,j,k;
        if(f&&g){
            a=f.plotY;
            j=g.plotX;
            var g=g.plotY,l;
            h=(1.5*d+f.plotX)/2.5;
            i=(1.5*e+a)/2.5;
            j=(1.5*d+j)/2.5;
            k=(1.5*e+g)/2.5;
            l=(k-i)*(j-d)/(j-h)+e-k;
            i+=l;
            k+=l;
            i>a&&i>e?(i=x(a,e),k=2*e-i):i<a&&i<e&&(i=K(a,e),k=2*e-i);
            k>g&&k>e?(k=x(g,e),i=2*e-k):k<g&&k<e&&(k=K(g,e),i=2*e-k);
            b.rightContX=j;
            b.rightContY=k
            }
            c?(b=["C",f.rightContX||f.plotX,f.rightContY||f.plotY,h||d,i||e,d,e],f.rightContX=f.rightContY=null):
        b=["M",d,e];
        return b
        }
    });
S.spline=ea;
Q.areaspline=t(Q.area);
var Ka=I.prototype,ea=aa(ea,{
    type:"areaspline",
    closedStacks:!0,
    getSegmentPath:Ka.getSegmentPath,
    closeSegment:Ka.closeSegment,
    drawGraph:Ka.drawGraph
    });
S.areaspline=ea;
Q.column=t(N,{
    borderColor:"#FFFFFF",
    borderWidth:1,
    borderRadius:0,
    groupPadding:0.2,
    marker:null,
    pointPadding:0.1,
    minPointLength:0,
    cropThreshold:50,
    pointRange:null,
    states:{
        hover:{
            brightness:0.1,
            shadow:!1
            },
        select:{
            color:"#C0C0C0",
            borderColor:"#000000",
            shadow:!1
            }
        },
dataLabels:{
    y:null,
    verticalAlign:null
},
threshold:0
});
ea=aa(X,{
    type:"column",
    tooltipOutsidePlot:!0,
    pointAttrToOptions:{
        stroke:"borderColor",
        "stroke-width":"borderWidth",
        fill:"color",
        r:"borderRadius"
    },
    init:function(){
        X.prototype.init.apply(this,arguments);
        var a=this,b=a.chart;
        b.hasRendered&&n(b.series,function(b){
            if(b.type===a.type)b.isDirty=!0
                })
        },
    translate:function(){
        var a=this,b=a.chart,c=a.options,d=c.stacking,e=c.borderWidth,f=0,g=a.xAxis,h=g.reversed,i={},j,k;
        X.prototype.translate.apply(a);
        c.grouping===!1?f=1:n(b.series,
            function(b){
                var c=b.options;
                if(b.type===a.type&&b.visible&&a.options.group===c.group)c.stacking?(j=b.stackKey,i[j]===z&&(i[j]=f++),k=i[j]):c.grouping!==!1&&(k=f++),b.columnIndex=k
                    });
        var l=a.points,g=W(g.transA)*(g.ordinalSlope||c.pointRange||g.closestPointRange||1),m=g*c.groupPadding,o=(g-2*m)/f,r=c.pointWidth,u=v(r)?(o-r)/2:o*c.pointPadding,q=p(r,o-2*u),s=Ga(x(q,1+2*e)),B=u+(m+((h?f-a.columnIndex:a.columnIndex)||0)*o-g/2)*(h?-1:1),A=a.yAxis.getThreshold(c.threshold),y=p(c.minPointLength,5);
        n(l,function(c){
            var f=
            c.plotY,g=p(c.yBottom,A),h=c.plotX+B,i=Ga(K(f,g)),j=Ga(x(f,g)-i),k=a.yAxis.stacks[(c.y<0?"-":"")+a.stackKey];
            d&&a.visible&&k&&k[c.x]&&k[c.x].setOffset(B,s);
            W(j)<y&&y&&(j=y,i=W(i-A)>y?g-y:A-(f<=A?y:0));
            w(c,{
                barX:h,
                barY:i,
                barW:s,
                barH:j,
                pointWidth:q
            });
            c.shapeType="rect";
            c.shapeArgs=f=b.renderer.Element.prototype.crisp.call(0,e,h,i,s,j);
            e%2&&(f.y-=1,f.height+=1);
            c.trackerArgs=W(j)<3&&t(c.shapeArgs,{
                height:6,
                y:i-3
                })
            })
        },
    getSymbol:Cb,
    drawLegendSymbol:I.prototype.drawLegendSymbol,
    drawGraph:Cb,
    drawPoints:function(){
        var a=
        this,b=a.options,c=a.chart.renderer,d,e;
        n(a.points,function(f){
            var g=f.plotY;
            if(g!==z&&!isNaN(g)&&f.y!==null)d=f.graphic,e=f.shapeArgs,d?(kb(d),d.animate(t(e))):f.graphic=d=c[f.shapeType](e).attr(f.pointAttr[f.selected?"select":""]).add(a.group).shadow(b.shadow,null,b.stacking&&!b.borderRadius)
                })
        },
    drawTracker:function(){
        var a=this,b=a.chart,c=b.renderer,d,e,f=+new Date,g=a.options,h=g.cursor,i=h&&{
            cursor:h
        },j=a.isCartesian&&a.plotGroup("trackerGroup",null,"visible",g.zIndex||1,b.trackerGroup),k,l,
        m;
        n(a.points,function(h){
            e=h.tracker;
            d=h.trackerArgs||h.shapeArgs;
            l=h.plotY;
            m=!a.isCartesian||l!==z&&!isNaN(l);
            delete d.strokeWidth;
            if(h.y!==null&&m)e?e.attr(d):h.tracker=c[h.shapeType](d).attr({
                isTracker:f,
                fill:Db,
                visibility:a.visible?"visible":"hidden"
                }).on(ba?"touchstart":"mouseover",function(c){
                k=c.relatedTarget||c.fromElement;
                if(b.hoverSeries!==a&&D(k,"isTracker")!==f)a.onMouseOver();
                h.onMouseOver()
                }).on("mouseout",function(b){
                if(!g.stickyTracking&&(k=b.relatedTarget||b.toElement,D(k,"isTracker")!==
                    f))a.onMouseOut()
                    }).css(i).add(h.group||j)
                })
        },
    animate:function(a){
        var b=this,c=b.points,d=b.options;
        if(!a)n(c,function(a){
            var c=a.graphic,a=a.shapeArgs,g=b.yAxis,h=d.threshold;
            c&&(c.attr({
                height:0,
                y:v(h)?g.getThreshold(h):g.translate(g.getExtremes().min,0,1,0,1)
                }),c.animate({
                height:a.height,
                y:a.y
                },d.animation))
            }),b.animate=null
        },
    remove:function(){
        var a=this,b=a.chart;
        b.hasRendered&&n(b.series,function(b){
            if(b.type===a.type)b.isDirty=!0
                });
        X.prototype.remove.apply(a,arguments)
        }
    });
S.column=ea;
Q.bar=
t(Q.column,{
    dataLabels:{
        align:"left",
        x:5,
        y:null,
        verticalAlign:"middle"
    }
});
Ka=aa(ea,{
    type:"bar",
    inverted:!0
    });
S.bar=Ka;
Q.scatter=t(N,{
    lineWidth:0,
    states:{
        hover:{
            lineWidth:0
        }
    },
tooltip:{
    headerFormat:'<span style="font-size: 10px; color:{series.color}">{series.name}</span><br/>',
    pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
}
});
Ka=aa(X,{
    type:"scatter",
    sorted:!1,
    translate:function(){
        var a=this;
        X.prototype.translate.apply(a);
        n(a.points,function(b){
            b.shapeType="circle";
            b.shapeArgs={
                x:b.plotX,
                y:b.plotY,
                r:a.chart.options.tooltip.snap
                }
            })
    },
drawTracker:function(){
    for(var a=this,b=a.options.cursor,b=b&&{
        cursor:b
    },c=a.points,d=c.length,e;d--;)if(e=c[d].graphic)e.element._i=d;a._hasTracking?a._hasTracking=!0:a.markerGroup.attr({
        isTracker:!0
        }).on(ba?"touchstart":"mouseover",function(b){
        a.onMouseOver();
        if(b.target._i!==z)c[b.target._i].onMouseOver()
            }).on("mouseout",function(){
        if(!a.options.stickyTracking)a.onMouseOut()
            }).css(b)
    }
});
S.scatter=Ka;
Q.pie=t(N,{
    borderColor:"#FFFFFF",
    borderWidth:1,
    center:["50%",
    "50%"],
    colorByPoint:!0,
    dataLabels:{
        distance:30,
        enabled:!0,
        formatter:function(){
            return this.point.name
            },
        y:5
    },
    legendType:"point",
    marker:null,
    size:"75%",
    showInLegend:!1,
    slicedOffset:10,
    states:{
        hover:{
            brightness:0.1,
            shadow:!1
            }
        }
});
N={
    type:"pie",
    isCartesian:!1,
    pointClass:aa(xa,{
        init:function(){
            xa.prototype.init.apply(this,arguments);
            var a=this,b;
            w(a,{
                visible:a.visible!==!1,
                name:p(a.name,"Slice")
                });
            b=function(){
                a.slice()
                };

            C(a,"select",b);
            C(a,"unselect",b);
            return a
            },
        setVisible:function(a){
            var b=this.series,
            c=b.chart,d=this.tracker,e=this.dataLabel,f=this.connector,g=this.shadowGroup,h;
            h=(this.visible=a=a===z?!this.visible:a)?"show":"hide";
            this.group[h]();
            if(d)d[h]();
            if(e)e[h]();
            if(f)f[h]();
            if(g)g[h]();
            this.legendItem&&c.legend.colorizeItem(this,a);
            if(!b.isDirty&&b.options.ignoreHiddenPoint)b.isDirty=!0,c.redraw()
                },
        slice:function(a,b,c){
            var d=this.series.chart,e=this.slicedTranslation;
            Ea(c,d);
            p(b,!0);
            a=this.sliced=v(a)?a:!this.sliced;
            a={
                translateX:a?e[0]:d.plotLeft,
                translateY:a?e[1]:d.plotTop
                };

            this.group.animate(a);
            this.shadowGroup&&this.shadowGroup.animate(a)
            }
        }),
pointAttrToOptions:{
    stroke:"borderColor",
    "stroke-width":"borderWidth",
    fill:"color"
},
getColor:function(){
    this.initialColor=this.chart.counters.color
    },
animate:function(){
    var a=this;
    n(a.points,function(b){
        var c=b.graphic,b=b.shapeArgs,d=-Ha/2;
        c&&(c.attr({
            r:0,
            start:d,
            end:d
        }),c.animate({
            r:b.r,
            start:b.start,
            end:b.end
            },a.options.animation))
        });
    a.animate=null
    },
setData:function(a,b){
    X.prototype.setData.call(this,a,!1);
    this.processData();
    this.generatePoints();
    p(b,!0)&&this.chart.redraw()
    },
getCenter:function(){
    var a=this.options,b=this.chart,c=b.plotWidth,d=b.plotHeight,a=a.center.concat([a.size,a.innerSize||0]),e=K(c,d),f;
    return Ia(a,function(a,b){
        return(f=/%$/.test(a))?[c,d,e,e][b]*G(a)/100:a
        })
    },
translate:function(){
    this.generatePoints();
    var a=0,b=-0.25,c=this.options,d=c.slicedOffset,e=d+c.borderWidth,f,g=this.chart,h,i,j,k=this.points,l=2*Ha,m,o,r,p=c.dataLabels.distance,q=c.ignoreHiddenPoint;
    this.center=f=this.getCenter();
    this.getX=function(a,b){
        j=
        M.asin((a-f[1])/(f[2]/2+p));
        return f[0]+(b?-1:1)*da(j)*(f[2]/2+p)
        };

    n(k,function(b){
        a+=q&&!b.visible?0:b.y
        });
    n(k,function(c){
        m=a?c.y/a:0;
        h=s(b*l*1E3)/1E3;
        if(!q||c.visible)b+=m;
        i=s(b*l*1E3)/1E3;
        c.shapeType="arc";
        c.shapeArgs={
            x:f[0],
            y:f[1],
            r:f[2]/2,
            innerR:f[3]/2,
            start:h,
            end:i
        };

        j=(i+h)/2;
        c.slicedTranslation=Ia([da(j)*d+g.plotLeft,ia(j)*d+g.plotTop],s);
        o=da(j)*f[2]/2;
        r=ia(j)*f[2]/2;
        c.tooltipPos=[f[0]+o*0.7,f[1]+r*0.7];
        c.labelPos=[f[0]+o+da(j)*p,f[1]+r+ia(j)*p,f[0]+o+da(j)*e,f[1]+r+ia(j)*e,f[0]+o,f[1]+
        r,p<0?"center":j<l/4?"left":"right",j];
        c.percentage=m*100;
        c.total=a
        });
    this.setTooltipPoints()
    },
render:function(){
    this.getAttribs();
    this.drawPoints();
    this.options.enableMouseTracking!==!1&&this.drawTracker();
    this.drawDataLabels();
    this.options.animation&&this.animate&&this.animate();
    this.isDirty=!1
    },
drawPoints:function(){
    var a=this,b=a.chart,c=b.renderer,d,e,f,g=a.options.shadow,h,i;
    n(a.points,function(j){
        e=j.graphic;
        i=j.shapeArgs;
        f=j.group;
        h=j.shadowGroup;
        if(g&&!h)h=j.shadowGroup=c.g("shadow").attr({
            zIndex:4
        }).add();
        if(!f)f=j.group=c.g("point").attr({
            zIndex:5
        }).add();
        d=j.sliced?j.slicedTranslation:[b.plotLeft,b.plotTop];
        f.translate(d[0],d[1]);
        h&&h.translate(d[0],d[1]);
        e?e.animate(i):j.graphic=e=c.arc(i).setRadialReference(a.center).attr(w(j.pointAttr[""],{
            "stroke-linejoin":"round"
        })).add(j.group).shadow(g,h);
        j.visible===!1&&j.setVisible(!1)
        })
    },
drawDataLabels:function(){
    var a=this.data,b,c=this.chart,d=this.options.dataLabels,e=p(d.connectorPadding,10),f=p(d.connectorWidth,1),g,h,i=p(d.softConnector,!0),j=d.distance,
    k=this.center,l=k[2]/2,m=k[1],o=j>0,r=[[],[]],u,q,s,v,A=2,y;
    if(d.enabled||this._hasPointLabels){
        X.prototype.drawDataLabels.apply(this);
        n(a,function(a){
            a.dataLabel&&r[a.labelPos[7]<Ha/2?0:1].push(a)
            });
        r[1].reverse();
        v=function(a,b){
            return b.y-a.y
            };

        for(a=r[0][0]&&r[0][0].dataLabel&&(r[0][0].dataLabel.getBBox().height||21);A--;){
            var E=[],z=[],t=r[A],w=t.length,x;
            if(j>0){
                for(y=m-l-j;y<=m+l+j;y+=a)E.push(y);
                s=E.length;
                if(w>s){
                    h=[].concat(t);
                    h.sort(v);
                    for(y=w;y--;)h[y].rank=y;
                    for(y=w;y--;)t[y].rank>=s&&
                        t.splice(y,1);
                    w=t.length
                    }
                    for(y=0;y<w;y++){
                    b=t[y];
                    h=b.labelPos;
                    b=9999;
                    for(q=0;q<s;q++)g=W(E[q]-h[1]),g<b&&(b=g,x=q);
                    if(x<y&&E[y]!==null)x=y;else for(s<w-y+x&&E[y]!==null&&(x=s-w+y);E[x]===null;)x++;
                    z.push({
                        i:x,
                        y:E[x]
                        });
                    E[x]=null
                    }
                    z.sort(v)
                }
                for(y=0;y<w;y++){
                b=t[y];
                h=b.labelPos;
                g=b.dataLabel;
                s=b.visible===!1?"hidden":"visible";
                u=h[1];
                if(j>0){
                    if(q=z.pop(),x=q.i,q=q.y,u>q&&E[x+1]!==null||u<q&&E[x-1]!==null)q=u
                        }else q=u;
                u=d.justify?k[0]+(A?-1:1)*(l+j):this.getX(x===0||x===E.length-1?u:q,A);
                g.attr({
                    visibility:s,
                    align:h[6]
                    })[g.moved?"animate":"attr"]({
                    x:u+d.x+({
                        left:e,
                        right:-e
                        }
                        [h[6]]||0),
                    y:q+d.y
                    });
                g.moved=!0;
                if(o&&f)g=b.connector,h=i?["M",u+(h[6]==="left"?5:-5),q,"C",u,q,2*h[2]-h[4],2*h[3]-h[5],h[2],h[3],"L",h[4],h[5]]:["M",u+(h[6]==="left"?5:-5),q,"L",h[2],h[3],"L",h[4],h[5]],g?(g.animate({
                    d:h
                }),g.attr("visibility",s)):b.connector=g=this.chart.renderer.path(h).attr({
                    "stroke-width":f,
                    stroke:d.connectorColor||b.color||"#606060",
                    visibility:s,
                    zIndex:3
                }).translate(c.plotLeft,c.plotTop).add()
                    }
                }
        }
},
drawTracker:ea.prototype.drawTracker,
drawLegendSymbol:I.prototype.drawLegendSymbol,
getSymbol:function(){}
};

N=aa(X,N);
S.pie=N;
var U=X.prototype,dc=U.processData,ec=U.generatePoints,fc=U.destroy,gc=U.tooltipHeaderFormatter,hc={
    approximation:"average",
    groupPixelWidth:2,
    dateTimeLabelFormats:ja(ab,["%A, %b %e, %H:%M:%S.%L","%A, %b %e, %H:%M:%S.%L","-%H:%M:%S.%L"],Wa,["%A, %b %e, %H:%M:%S","%A, %b %e, %H:%M:%S","-%H:%M:%S"],Na,["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],ta,["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],fa,["%A, %b %e, %Y",
        "%A, %b %e","-%A, %b %e, %Y"],Aa,["Week from %A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],Ba,["%B %Y","%B","-%B %Y"],na,["%Y","%Y","-%Y"])
    },ic={
    line:{},
    spline:{},
    area:{},
    areaspline:{},
    column:{
        approximation:"sum",
        groupPixelWidth:10
    },
    arearange:{
        approximation:"range"
    },
    areasplinerange:{
        approximation:"range"
    },
    columnrange:{
        approximation:"range",
        groupPixelWidth:10
    },
    candlestick:{
        approximation:"ohlc",
        groupPixelWidth:10
    },
    ohlc:{
        approximation:"ohlc",
        groupPixelWidth:5
    }
},Wb=[[ab,[1,2,5,10,20,25,50,100,200,500]],
[Wa,[1,2,5,10,15,30]],[Na,[1,2,5,10,15,30]],[ta,[1,2,3,4,6,8,12]],[fa,[1]],[Aa,[1]],[Ba,[1,3,6]],[na,null]],ya={
    sum:function(a){
        var b=a.length,c;
        if(!b&&a.hasNulls)c=null;
        else if(b)for(c=0;b--;)c+=a[b];
        return c
        },
    average:function(a){
        var b=a.length,a=ya.sum(a);
        typeof a==="number"&&b&&(a/=b);
        return a
        },
    open:function(a){
        return a.length?a[0]:a.hasNulls?null:z
        },
    high:function(a){
        return a.length?Da(a):a.hasNulls?null:z
        },
    low:function(a){
        return a.length?Oa(a):a.hasNulls?null:z
        },
    close:function(a){
        return a.length?
        a[a.length-1]:a.hasNulls?null:z
        },
    ohlc:function(a,b,c,d){
        a=ya.open(a);
        b=ya.high(b);
        c=ya.low(c);
        d=ya.close(d);
        if(typeof a==="number"||typeof b==="number"||typeof c==="number"||typeof d==="number")return[a,b,c,d]
            },
    range:function(a,b){
        a=ya.low(a);
        b=ya.high(b);
        if(typeof a==="number"||typeof b==="number")return[a,b]
            }
        };

U.groupData=function(a,b,c,d){
    var e=this.data,f=this.options.data,g=[],h=[],i=a.length,j,k,l=!!b,m=[[],[],[],[]],d=typeof d==="function"?d:ya[d],o=this.pointArrayMap,n=o&&o.length,p;
    for(p=
        0;p<=i;p++){
        for(;c[1]!==z&&a[p]>=c[1]||p===i;)if(j=c.shift(),k=d.apply(0,m),k!==z&&(g.push(j),h.push(k)),m[0]=[],m[1]=[],m[2]=[],m[3]=[],p===i)break;if(p===i)break;
        if(o){
            j=this.cropStart+p;
            j=e&&e[j]||this.pointClass.prototype.applyOptions.apply({
                series:this
            },[f[j]]);
            var q;
            for(k=0;k<n;k++)if(q=j[o[k]],typeof q==="number")m[k].push(q);
                else if(q===null)m[k].hasNulls=!0
                }else if(j=l?b[p]:null,typeof j==="number")m[0].push(j);
        else if(j===null)m[0].hasNulls=!0
            }
            return[g,h]
    };

U.processData=function(){
    var a=
    this.options,b=a.dataGrouping,c=b&&b.enabled,d;
    this.forceCrop=c;
    if(dc.apply(this,arguments)!==!1&&c){
        this.destroyGroupedData();
        var e;
        e=this.chart;
        var c=this.processedXData,f=this.processedYData,g=e.plotSizeX,h=this.xAxis,i=p(h.groupPixelWidth,b.groupPixelWidth),j=c.length,k=e.series,l=this.pointRange;
        if(!h.groupPixelWidth){
            for(e=k.length;e--;)k[e].xAxis===h&&k[e].options.dataGrouping&&(i=x(i,k[e].options.dataGrouping.groupPixelWidth));
            h.groupPixelWidth=i
            }
            if(j>g/i||j&&b.forced){
            d=!0;
            this.points=null;
            e=h.getExtremes();
            j=e.min;
            k=e.max;
            e=h.getGroupIntervalFactor&&h.getGroupIntervalFactor(j,k,c)||1;
            g=i*(k-j)/g*e;
            h=(h.getNonLinearTimeTicks||bb)(Gb(g,b.units||Wb),j,k,null,c,this.closestPointRange);
            f=U.groupData.apply(this,[c,f,h,b.approximation]);
            c=f[0];
            f=f[1];
            if(b.smoothed){
                e=c.length-1;
                for(c[e]=k;e--&&e>0;)c[e]+=g/2;
                c[0]=j
                }
                this.currentDataGrouping=h.info;
            if(a.pointRange===null)this.pointRange=h.info.totalRange;
            this.closestPointRange=h.info.totalRange;
            this.processedXData=c;
            this.processedYData=f
            }else this.currentDataGrouping=
            null,this.pointRange=l;
        this.hasGroupedData=d
        }
    };

U.destroyGroupedData=function(){
    var a=this.groupedData;
    n(a||[],function(b,c){
        b&&(a[c]=b.destroy?b.destroy():null)
        });
    this.groupedData=null
    };

U.generatePoints=function(){
    ec.apply(this);
    this.destroyGroupedData();
    this.groupedData=this.hasGroupedData?this.points:null
    };

U.tooltipHeaderFormatter=function(a){
    var b=this.tooltipOptions,c=this.options.dataGrouping,d=b.xDateFormat,e,f=this.xAxis,g,h;
    if(f&&f.options.type==="datetime"&&c){
        g=this.currentDataGrouping;
        c=c.dateTimeLabelFormats;
        if(g)f=c[g.unitName],g.count===1?d=f[0]:(d=f[1],e=f[2]);
        else if(!d)for(h in H)if(H[h]>=f.closestPointRange){
            d=c[h][0];
            break
        }
        d=va(d,a);
        e&&(d+=va(e,a+g.totalRange-1));
        a=b.headerFormat.replace("{point.key}",d)
        }else a=gc.apply(this,[a]);
    return a
    };

U.destroy=function(){
    for(var a=this.groupedData||[],b=a.length;b--;)a[b]&&a[b].destroy();
    fc.apply(this)
    };

pb(U,"setOptions",function(a,b){
    var c=a.call(this,b),d=this.type;
    if(!Q[d].dataGrouping)Q[d].dataGrouping=t(hc,ic[d]);
    c.dataGrouping=
    t(Q[this.type].dataGrouping,this.chart.options.plotOptions[this.type].dataGrouping,b.dataGrouping);
    return c
    });
Q.ohlc=t(Q.column,{
    lineWidth:1,
    tooltip:{
        pointFormat:'<span style="color:{series.color};font-weight:bold">{series.name}</span><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>'
    },
    states:{
        hover:{
            lineWidth:3
        }
    },
threshold:null
});
N=aa(xa,{
    applyOptions:function(a){
        var b=this.series,c=b.pointArrayMap,d=0,e=0,f=c.length;
        if(typeof a==="object"&&typeof a.length!==
            "number")w(this,a),this.options=a;
        else if(a.length){
            if(a.length>f){
                if(typeof a[0]==="string")this.name=a[0];
                else if(typeof a[0]==="number")this.x=a[0];
                d++
            }
            for(;e<f;)this[c[e++]]=a[d++]
                }
                this.y=this[b.pointValKey];
        if(this.x===z&&b)this.x=b.autoIncrement();
        return this
        },
    tooltipFormatter:function(){
        var a=this.series;
        return['<span style="color:'+a.color+';font-weight:bold">',this.name||a.name,"</span><br/>Open: ",this.open,"<br/>High: ",this.high,"<br/>Low: ",this.low,"<br/>Close: ",this.close,"<br/>"].join("")
        },
    toYData:function(){
        return[this.open,this.high,this.low,this.close]
        }
    });
N=aa(S.column,{
    type:"ohlc",
    pointArrayMap:["open","high","low","close"],
    pointValKey:"high",
    pointClass:N,
    pointAttrToOptions:{
        stroke:"color",
        "stroke-width":"lineWidth"
    },
    upColorProp:"stroke",
    getAttribs:function(){
        S.column.prototype.getAttribs.apply(this,arguments);
        var a=this.options,b=a.states,a=a.upColor||this.color,c=t(this.pointAttr),d=this.upColorProp;
        c[""][d]=a;
        c.hover[d]=b.hover.upColor||a;
        c.select[d]=b.select.upColor||a;
        n(this.points,
            function(a){
                if(a.open<a.close)a.pointAttr=c
                    })
        },
    translate:function(){
        var a=this.yAxis;
        S.column.prototype.translate.apply(this);
        n(this.points,function(b){
            if(b.open!==null)b.plotOpen=a.translate(b.open,0,1,0,1);
            if(b.close!==null)b.plotClose=a.translate(b.close,0,1,0,1)
                })
        },
    drawPoints:function(){
        var a=this,b=a.chart,c,d,e,f,g,h,i,j;
        n(a.points,function(k){
            if(k.plotY!==z)i=k.graphic,c=k.pointAttr[k.selected?"selected":""],f=c["stroke-width"]%2/2,j=s(k.plotX)+f,g=s(k.barW/2),h=["M",j,s(k.yBottom),"L",j,s(k.plotY)],
                k.open!==null&&(d=s(k.plotOpen)+f,h.push("M",j,d,"L",j-g,d)),k.close!==null&&(e=s(k.plotClose)+f,h.push("M",j,e,"L",j+g,e)),i?i.animate({
                    d:h
                }):k.graphic=b.renderer.path(h).attr(c).add(a.group)
                })
        },
    animate:null
});
S.ohlc=N;
Q.candlestick=t(Q.column,{
    lineColor:"black",
    lineWidth:1,
    states:{
        hover:{
            lineWidth:2
        }
    },
tooltip:Q.ohlc.tooltip,
threshold:null,
upColor:"white"
});
N=aa(N,{
    type:"candlestick",
    pointAttrToOptions:{
        fill:"color",
        stroke:"lineColor",
        "stroke-width":"lineWidth"
    },
    upColorProp:"fill",
    drawPoints:function(){
        var a=
        this,b=a.chart,c,d,e,f,g,h,i,j,k,l;
        n(a.points,function(m){
            j=m.graphic;
            if(m.plotY!==z)c=m.pointAttr[m.selected?"selected":""],h=c["stroke-width"]%2/2,i=s(m.plotX)+h,d=s(m.plotOpen)+h,e=s(m.plotClose)+h,f=M.min(d,e),g=M.max(d,e),l=s(m.barW/2),k=["M",i-l,g,"L",i-l,f,"L",i+l,f,"L",i+l,g,"L",i-l,g,"M",i,g,"L",i,s(m.yBottom),"M",i,f,"L",i,s(m.plotY),"Z"],j?j.animate({
                d:k
            }):m.graphic=b.renderer.path(k).attr(c).add(a.group)
                })
        }
    });
S.candlestick=N;
var nb=qa.prototype.symbols;
Q.flags=t(Q.column,{
    dataGrouping:null,
    fillColor:"white",
    lineWidth:1,
    pointRange:0,
    shape:"flag",
    stackDistance:7,
    states:{
        hover:{
            lineColor:"black",
            fillColor:"#FCFFC5"
        }
    },
style:{
    fontSize:"11px",
    fontWeight:"bold",
    textAlign:"center"
},
threshold:null,
y:-30
});
S.flags=aa(S.column,{
    type:"flags",
    sorted:!1,
    noSharedTooltip:!0,
    takeOrdinalPosition:!1,
    forceCrop:!0,
    init:X.prototype.init,
    pointAttrToOptions:{
        fill:"fillColor",
        stroke:"color",
        "stroke-width":"lineWidth",
        r:"radius"
    },
    translate:function(){
        S.column.prototype.translate.apply(this);
        var a=this.chart,
        b=this.points,c=b.length-1,d,e,f=this.options.onSeries,f=(d=f&&a.get(f))&&d.options.step,g=d&&d.points,h=g&&g.length,i=this.xAxis,j=i.getExtremes(),k,l,m;
        if(d&&d.visible&&h){
            l=g[h-1].x;
            for(b.sort(function(a,b){
                return a.x-b.x
                });h--&&b[c];)if(d=b[c],k=g[h],k.x<=d.x&&k.plotY!==z){
                if(d.x<=l)d.plotY=k.plotY,k.x<d.x&&!f&&(m=g[h+1])&&m.plotY!==z&&(d.plotY+=(d.x-k.x)/(m.x-k.x)*(m.plotY-k.plotY));
                c--;
                h++;
                if(c<0)break
            }
            }
            n(b,function(c,d){
        if(c.plotY===z)c.x>=j.min&&c.x<=j.max?c.plotY=i.lineTop-a.plotTop:c.shapeArgs=

        {};

        if((e=b[d-1])&&e.plotX===c.plotX){
            if(e.stackIndex===z)e.stackIndex=0;
            c.stackIndex=e.stackIndex+1
            }
        })
},
drawPoints:function(){
    var a,b=this.points,c=this.chart.renderer,d,e,f=this.options,g=f.y,h=f.shape,i,j,k,l,m=f.lineWidth%2/2,o;
    for(k=b.length;k--;)if(l=b[k],d=l.plotX+m,j=l.stackIndex,e=l.plotY,e!==z&&(e=l.plotY+g+m-(j!==z&&j*f.stackDistance)),i=j?z:l.plotX+m,o=j?z:l.plotY,j=l.graphic,a=l.tracker,e!==z)a=l.pointAttr[l.selected?"select":""],j?j.attr({
        x:d,
        y:e,
        r:a.r,
        anchorX:i,
        anchorY:o
    }):j=l.graphic=
    c.label(l.options.title||f.title||"A",d,e,h,i,o).css(t(f.style,l.style)).attr(a).attr({
        align:h==="flag"?"left":"center",
        width:f.width,
        height:f.height
        }).add(this.group).shadow(f.shadow),i=j.box,j=i.getBBox(),l.shapeArgs=w(j,{
        x:d-(h==="flag"?0:i.attr("width")/2),
        y:e
    });
    else if(j)l.graphic=j.destroy(),a&&a.attr("y",-9999)
        },
drawTracker:function(){
    S.column.prototype.drawTracker.apply(this);
    n(this.points,function(a){
        a.tracker&&C(a.tracker.element,"mouseover",function(){
            a.graphic.toFront()
            })
        })
    },
tooltipFormatter:function(a){
    return a.point.text
    },
animate:function(){}
});
nb.flag=function(a,b,c,d,e){
    var f=e&&e.anchorX||a,e=e&&e.anchorY||b;
    return["M",f,e,"L",a,b+d,a,b,a+c,b,a+c,b+d,a,b+d,"M",f,e,"Z"]
    };

n(["circle","square"],function(a){
    nb[a+"pin"]=function(b,c,d,e,f){
        var g=f&&f.anchorX,f=f&&f.anchorY,b=nb[a](b,c,d,e);
        g&&f&&b.push("M",g,c+e,"L",g,f);
        return b
        }
    });
Sa===Ja&&n(["flag","circlepin","squarepin"],function(a){
    Ja.prototype.symbols[a]=nb[a]
    });
var ob=ba?"touchstart":"mousedown",Xb=ba?"touchmove":"mousemove",Yb=ba?"touchend":"mouseup",N=ja("linearGradient",

{
    x1:0,
    y1:0,
    x2:0,
    y2:1
},"stops",[[0,"#FFF"],[1,"#CCC"]]),I=[].concat(Wb);
I[4]=[fa,[1,2,3,4]];
I[5]=[Aa,[1,2,3]];
w(P,{
    navigator:{
        handles:{
            backgroundColor:"#FFF",
            borderColor:"#666"
        },
        height:40,
        margin:10,
        maskFill:"rgba(255, 255, 255, 0.75)",
        outlineColor:"#444",
        outlineWidth:1,
        series:{
            type:"areaspline",
            color:"#4572A7",
            compare:null,
            fillOpacity:0.4,
            dataGrouping:{
                approximation:"average",
                groupPixelWidth:2,
                smoothed:!0,
                units:I
            },
            dataLabels:{
                enabled:!1
                },
            id:"highcharts-navigator-series",
            lineColor:"#4572A7",
            lineWidth:1,
            marker:{
                enabled:!1
                },
            pointRange:0,
            shadow:!1
            },
        xAxis:{
            tickWidth:0,
            lineWidth:0,
            gridLineWidth:1,
            tickPixelInterval:200,
            labels:{
                align:"left",
                x:3,
                y:-4
            }
        },
    yAxis:{
        gridLineWidth:0,
        startOnTick:!1,
        endOnTick:!1,
        minPadding:0.1,
        maxPadding:0.1,
        labels:{
            enabled:!1
            },
        title:{
            text:null
        },
        tickWidth:0
    }
},
scrollbar:{
    height:ba?20:14,
    barBackgroundColor:N,
    barBorderRadius:2,
    barBorderWidth:1,
    barBorderColor:"#666",
    buttonArrowColor:"#666",
    buttonBackgroundColor:N,
    buttonBorderColor:"#666",
    buttonBorderRadius:2,
    buttonBorderWidth:1,
    rifleColor:"#666",
    trackBackgroundColor:ja("linearGradient",{
        x1:0,
        y1:0,
        x2:0,
        y2:1
    },"stops",[[0,"#EEE"],[1,"#FFF"]]),
    trackBorderColor:"#CCC",
    trackBorderWidth:1
}
});
Pb.prototype={
    getAxisTop:function(a){
        return this.navigatorOptions.top||a-this.height-this.scrollbarHeight-this.chart.options.chart.spacingBottom
        },
    drawHandle:function(a,b){
        var c=this.chart.renderer,d=this.elementsToDestroy,e=this.handles,f=this.navigatorOptions.handles,f={
            fill:f.backgroundColor,
            stroke:f.borderColor,
            "stroke-width":1
        },g;
        this.rendered||(e[b]=c.g().css({
            cursor:"e-resize"
        }).attr({
            zIndex:4-
            b
            }).add(),g=c.rect(-4.5,0,9,16,3,1).attr(f).add(e[b]),d.push(g),g=c.path(["M",-1.5,4,"L",-1.5,12,"M",0.5,4,"L",0.5,12]).attr(f).add(e[b]),d.push(g));
        e[b].translate(this.scrollerLeft+this.scrollbarHeight+parseInt(a,10),this.top+this.height/2-8)
        },
    drawScrollbarButton:function(a){
        var b=this.chart.renderer,c=this.elementsToDestroy,d=this.scrollbarButtons,e=this.scrollbarHeight,f=this.scrollbarOptions,g;
        this.rendered||(d[a]=b.g().add(this.scrollbarGroup),g=b.rect(-0.5,-0.5,e+1,e+1,f.buttonBorderRadius,
            f.buttonBorderWidth).attr({
            stroke:f.buttonBorderColor,
            "stroke-width":f.buttonBorderWidth,
            fill:f.buttonBackgroundColor
            }).add(d[a]),c.push(g),g=b.path(["M",e/2+(a?-1:1),e/2-3,"L",e/2+(a?-1:1),e/2+3,e/2+(a?2:-2),e/2]).attr({
            fill:f.buttonArrowColor
            }).add(d[a]),c.push(g));
        a&&d[a].attr({
            translateX:this.scrollerWidth-e
            })
        },
    render:function(a,b,c,d){
        var e=this.chart,f=e.renderer,g,h,i,j,k=this.scrollbarGroup,l=this.scrollbar,m=this.xAxis,o=this.scrollbarTrack,n=this.scrollbarHeight,u=this.scrollbarEnabled,
        q=this.navigatorOptions,v=this.scrollbarOptions,t=this.height,A=this.top,y=this.navigatorEnabled,E=q.outlineWidth,w=E/2,z=this.outlineHeight,C=v.barBorderRadius,H=v.barBorderWidth,D=A+w;
        if(!isNaN(a)){
            this.navigatorLeft=g=p(m.left,e.plotLeft+n);
            this.navigatorWidth=h=p(m.len,e.plotWidth-2*n);
            this.scrollerLeft=i=g-n;
            this.scrollerWidth=j=j=h+2*n;
            if(m.getExtremes){
                var F=e.xAxis[0].getExtremes(),e=F.dataMin===null,I=m.getExtremes(),J=K(F.dataMin,I.dataMin),F=x(F.dataMax,I.dataMax);
                !e&&(J!==I.min||F!==I.max)&&
                m.setExtremes(J,F,!0,!1)
                }
                c=p(c,m.translate(a));
            d=p(d,m.translate(b));
            this.zoomedMin=a=G(K(c,d));
            this.zoomedMax=d=G(x(c,d));
            this.range=c=d-a;
            if(!this.rendered){
                if(y)this.leftShade=f.rect().attr({
                    fill:q.maskFill,
                    zIndex:3
                }).add(),this.rightShade=f.rect().attr({
                    fill:q.maskFill,
                    zIndex:3
                }).add(),this.outline=f.path().attr({
                    "stroke-width":E,
                    stroke:q.outlineColor,
                    zIndex:3
                }).add();
                if(u)this.scrollbarGroup=k=f.g().add(),l=v.trackBorderWidth,this.scrollbarTrack=o=f.rect().attr({
                    y:-l%2/2,
                    fill:v.trackBackgroundColor,
                    stroke:v.trackBorderColor,
                    "stroke-width":l,
                    r:v.trackBorderRadius||0,
                    height:n
                }).add(k),this.scrollbar=l=f.rect().attr({
                    y:-H%2/2,
                    height:n,
                    fill:v.barBackgroundColor,
                    stroke:v.barBorderColor,
                    "stroke-width":H,
                    r:C
                }).add(k),this.scrollbarRifles=f.path().attr({
                    stroke:v.rifleColor,
                    "stroke-width":1
                }).add(k)
                    }
                    y&&(this.leftShade.attr({
                x:g,
                y:A,
                width:a,
                height:t
            }),this.rightShade.attr({
                x:g+d,
                y:A,
                width:h-d,
                height:t
            }),this.outline.attr({
                d:["M",i,D,"L",g+a+w,D,g+a+w,D+z-n,"M",g+d-w,D+z-n,"L",g+d-w,D,i+j,D]
                }),this.drawHandle(a+
                w,0),this.drawHandle(d+w,1));
            u&&(this.drawScrollbarButton(0),this.drawScrollbarButton(1),k.translate(i,s(D+t)),o.attr({
                width:j
            }),l.attr({
                x:s(n+a)+H%2/2,
                width:c-H
                }),f=n+a+c/2-0.5,this.scrollbarRifles.attr({
                d:["M",f-3,n/4,"L",f-3,2*n/3,"M",f,n/4,"L",f,2*n/3,"M",f+3,n/4,"L",f+3,2*n/3],
                visibility:c>12?"visible":"hidden"
                }));
            this.rendered=!0
            }
        },
addEvents:function(){
    var a=this.chart;
    C(a.container,ob,this.mouseDownHandler);
    C(a.container,Xb,this.mouseMoveHandler);
    C(document,Yb,this.mouseUpHandler)
    },
removeEvents:function(){
    var a=
    this.chart;
    O(a.container,ob,this.mouseDownHandler);
    O(a.container,Xb,this.mouseMoveHandler);
    O(document,Yb,this.mouseUpHandler);
    this.navigatorEnabled&&O(this.baseSeries,"updatedData",this.updatedDataHandler)
    },
init:function(){
    var a=this,b=a.chart,c,d,e=a.scrollbarHeight,f=a.navigatorOptions,g=a.height,h=a.top,i,j,k,l=document.body.style,m,o=a.baseSeries,n;
    a.mouseDownHandler=function(d){
        var d=b.tracker.normalizeMouseEvent(d),e=a.zoomedMin,f=a.zoomedMax,h=a.top,i=a.scrollbarHeight,k=a.scrollerLeft,o=a.scrollerWidth,
        n=a.navigatorLeft,p=a.navigatorWidth,q=a.range,r=d.chartX,u=d.chartY,d=ba?10:7;
        if(u>h&&u<h+g+i)if((h=!a.scrollbarEnabled||u<h+g)&&M.abs(r-e-n)<d)a.grabbedLeft=!0,a.otherHandlePos=f;
            else if(h&&M.abs(r-f-n)<d)a.grabbedRight=!0,a.otherHandlePos=e;
            else if(r>n+e&&r<n+f){
            a.grabbedCenter=r;
            if(b.renderer.isSVG)m=l.cursor,l.cursor="ew-resize";
            j=r-e
            }else r>k&&r<k+o&&(f=h?r-n-q/2:r<n?e-K(10,q):r>k+o-i?e+K(10,q):r<n+e?e-q:f,f<0?f=0:f+q>p&&(f=p-q),f!==e&&b.xAxis[0].setExtremes(c.translate(f,!0),c.translate(f+
            q,!0),!0,!1,{
            trigger:"navigator"
        }))
        };

    a.mouseMoveHandler=function(c){
        var d=a.scrollbarHeight,e=a.navigatorLeft,f=a.navigatorWidth,g=a.scrollerLeft,h=a.scrollerWidth,i=a.range,c=b.tracker.normalizeMouseEvent(c),c=c.chartX;
        c<e?c=e:c>g+h-d&&(c=g+h-d);
        a.grabbedLeft?(k=!0,a.render(0,0,c-e,a.otherHandlePos)):a.grabbedRight?(k=!0,a.render(0,0,a.otherHandlePos,c-e)):a.grabbedCenter&&(k=!0,c<j?c=j:c>f+j-i&&(c=f+j-i),a.render(0,0,c-j,c-j+i))
        };

    a.mouseUpHandler=function(){
        var d=a.zoomedMin,e=a.zoomedMax;
        k&&b.xAxis[0].setExtremes(c.translate(d,
            !0),c.translate(e,!0),!0,!1,{
            trigger:"navigator"
        });
        a.grabbedLeft=a.grabbedRight=a.grabbedCenter=k=j=null;
        l.cursor=m||""
        };

    a.updatedDataHandler=function(){
        var c=o.xAxis,d=c.getExtremes(),e=d.min,f=d.max,g=d.dataMin,d=d.dataMax,h=f-e,j,k,l,m,p;
        j=i.xData;
        var q=!!c.setExtremes;
        k=f>=j[j.length-1];
        j=e<=g;
        if(!n)i.options.pointStart=o.xData[0],i.setData(o.options.data,!1),p=!0;
        j&&(m=g,l=m+h);
        k&&(l=d,j||(m=x(l-h,i.xData[0])));
        q&&(j||k)?c.setExtremes(m,l,!0,!1,{
            trigger:"updatedData"
        }):(p&&b.redraw(!1),a.render(x(e,
            g),K(f,d)))
        };

    var p=b.xAxis.length,q=b.yAxis.length,s=b.setSize;
    b.extraBottomMargin=a.outlineHeight+f.margin;
    a.top=h=a.getAxisTop(b.chartHeight);
    if(a.navigatorEnabled){
        var v=o.options,w=v.data,y=f.series;
        n=y.data;
        v.data=y.data=null;
        a.xAxis=c=new Qa(b,t({
            ordinal:o.xAxis.options.ordinal
            },f.xAxis,{
            isX:!0,
            type:"datetime",
            index:p,
            height:g,
            top:h,
            offset:0,
            offsetLeft:e,
            offsetRight:-e,
            startOnTick:!1,
            endOnTick:!1,
            minPadding:0,
            maxPadding:0,
            zoomEnabled:!1
            }));
        a.yAxis=d=new Qa(b,t(f.yAxis,{
            alignTicks:!1,
            height:g,
            top:h,
            offset:0,
            index:q,
            zoomEnabled:!1
            }));
        p=t(o.options,y,{
            threshold:null,
            clip:!1,
            enableMouseTracking:!1,
            group:"nav",
            padXAxis:!1,
            xAxis:p,
            yAxis:q,
            name:"Navigator",
            showInLegend:!1,
            isInternal:!0,
            visible:!0
            });
        v.data=w;
        y.data=n;
        p.data=n||w;
        i=b.initSeries(p);
        f.adaptToUpdatedData!==!1&&C(o,"updatedData",a.updatedDataHandler)
        }else a.xAxis=c={
        translate:function(a,c){
            var d=b.xAxis[0].getExtremes(),f=b.plotWidth-2*e,g=d.dataMin,d=d.dataMax-g;
            return c?a*d/f+g:f*(a-g)/d
            }
        };

a.series=i;
b.setSize=function(e,f,g){
    a.top=
    h=a.getAxisTop(f);
    if(c&&d)c.options.top=d.options.top=h;
    s.call(b,e,f,g)
    };

a.addEvents()
},
destroy:function(){
    this.removeEvents();
    n([this.xAxis,this.yAxis,this.leftShade,this.rightShade,this.outline,this.scrollbarTrack,this.scrollbarRifles,this.scrollbarGroup,this.scrollbar],function(a){
        a&&a.destroy&&a.destroy()
        });
    this.xAxis=this.yAxis=this.leftShade=this.rightShade=this.outline=this.scrollbarTrack=this.scrollbarRifles=this.scrollbarGroup=this.scrollbar=null;
    n([this.scrollbarButtons,this.handles,this.elementsToDestroy],
        function(a){
            ua(a)
            })
    }
};

Highcharts.Scroller=Pb;
pb(Qa.prototype,"zoom",function(a,b,c){
    var d=this.chart,e=d.options,f=e.chart.zoomType,g;
    if(this.isXAxis&&(e.navigator&&e.navigator.enabled||e.scrollbar&&e.scrollbar.enabled))if(f==="x")d.resetZoomButton="blocked";
        else if(f==="y")g=!1;
        else if(f==="xy")d=this.previousZoom,v(b)?this.previousZoom=[this.min,this.max]:d&&(b=d[0],c=d[1],delete this.previousZoom);
    return g!==z?g:a.call(this,b,c)
    });
w(P,{
    rangeSelector:{
        buttonTheme:{
            width:28,
            height:16,
            padding:1,
            r:0,
            zIndex:7
        }
    }
});
P.lang=t(P.lang,{
    rangeSelectorZoom:"Zoom",
    rangeSelectorFrom:"From:",
    rangeSelectorTo:"To:"
});
Qb.prototype={
    clickButton:function(a,b,c){
        var d=this,e=d.chart,f=d.buttons,g=e.xAxis[0],h=g&&g.getExtremes(),i=e.scroller&&e.scroller.xAxis,j=i&&i.getExtremes&&i.getExtremes(),i=j&&j.dataMin,j=j&&j.dataMax,k=h&&h.dataMin,l=h&&h.dataMax,i=(v(k)&&v(i)?K:p)(k,i),j=(v(l)&&v(j)?x:p)(l,j),m,o=g&&K(h.max,j),h=new Date(o),l=b.type,k=b.count,n,u,q={
            millisecond:1,
            second:1E3,
            minute:6E4,
            hour:36E5,
            day:864E5,
            week:6048E5
        };

        if(!(i===null||j===null||a===d.selected))q[l]?(n=q[l]*k,m=x(o-n,i)):l==="month"?(h.setMonth(h.getMonth()-k),m=x(h.getTime(),i),n=2592E6*k):l==="ytd"?(h=new Date(0),l=new Date(j),u=l.getFullYear(),h.setFullYear(u),String(u)!==va("%Y",h)&&h.setFullYear(u-1),m=u=x(i||0,h.getTime()),l=l.getTime(),o=K(j||l,l)):l==="year"?(h.setFullYear(h.getFullYear()-k),m=x(i,h.getTime()),n=31536E6*k):l==="all"&&g&&(m=i,o=j),f[a]&&f[a].setState(2),g?setTimeout(function(){
            g.setExtremes(m,o,p(c,1),0,{
                trigger:"rangeSelectorButton",
                rangeSelectorButton:b
            });
            d.selected=a
            },1):(e=e.options.xAxis,e[0]=t(e[0],{
            range:n,
            min:u
        }),d.selected=a)
        },
    init:function(a){
        var b=this,c=b.chart,d=c.options.rangeSelector,a=d.buttons||a,e=b.buttons,f=b.leftBox,g=b.rightBox,d=d.selected;
        c.extraTopMargin=25;
        b.buttonOptions=a;
        b.mouseDownHandler=function(){
            f&&f.blur();
            g&&g.blur()
            };

        C(c.container,ob,b.mouseDownHandler);
        d!==z&&a[d]&&this.clickButton(d,a[d],!1);
        C(c,"load",function(){
            C(c.xAxis[0],"afterSetExtremes",function(){
                e[b.selected]&&!c.renderer.forExport&&
                e[b.selected].setState(0);
                b.selected=null
                })
            })
        },
    setInputValue:function(a,b){
        var c=this.chart.options.rangeSelector,c=a.hasFocus?c.inputEditDateFormat||"%Y-%m-%d":c.inputDateFormat||"%b %e, %Y";
        if(b)a.HCTime=b;
        a.value=va(c,a.HCTime)
        },
    drawInput:function(a){
        var b=this,c=b.chart,d=c.options.rangeSelector,e=b.div,f=a==="min",g;
        b.boxSpanElements[a]=V("span",{
            innerHTML:P.lang[f?"rangeSelectorFrom":"rangeSelectorTo"]
            },d.labelStyle,e);
        g=V("input",{
            name:a,
            className:"highcharts-range-selector",
            type:"text"
        },w({
            width:"80px",
            height:"16px",
            border:"1px solid silver",
            marginLeft:"5px",
            marginRight:f?"5px":"0",
            textAlign:"center"
        },d.inputStyle),e);
        g.onfocus=g.onblur=function(a){
            a=a||window.event||{};

            g.hasFocus=a.type==="focus";
            b.setInputValue(g)
            };

        g.onchange=function(){
            var a=g.value,d=Date.parse(a),e=c.xAxis[0].getExtremes();
            isNaN(d)&&(d=a.split("-"),d=Date.UTC(G(d[0]),G(d[1])-1,G(d[2])));
            if(!isNaN(d)&&(f&&d>=e.dataMin&&d<=b.rightBox.HCTime||!f&&d<=e.dataMax&&d>=b.leftBox.HCTime))c.xAxis[0].setExtremes(f?d:e.min,f?e.max:d,z,
                z,{
                    trigger:"rangeSelectorInput"
                })
            };

        return g
        },
    render:function(a,b){
        var c=this,d=c.chart,e=d.renderer,f=d.container,g=d.options.rangeSelector,h=c.buttons,i=P.lang,j=c.div,j=d.options.chart.style,k=g.buttonTheme,l=g.inputEnabled!==!1,m=k&&k.states,o=d.plotLeft,p;
        if(!c.rendered&&(c.zoomText=e.text(i.rangeSelectorZoom,o,d.plotTop-10).css(g.labelStyle).add(),p=o+c.zoomText.getBBox().width+5,n(c.buttonOptions,function(a,b){
            h[b]=e.button(a.text,p,d.plotTop-25,function(){
                c.clickButton(b,a);
                c.isActive=!0
                },
            k,m&&m.hover,m&&m.select).css({
                textAlign:"center"
            }).add();
            p+=h[b].width+(g.buttonSpacing||0);
            c.selected===b&&h[b].setState(2)
            }),l))c.divRelative=j=V("div",null,{
            position:"relative",
            height:0,
            fontFamily:j.fontFamily,
            fontSize:j.fontSize,
            zIndex:1
        }),f.parentNode.insertBefore(j,f),c.divAbsolute=c.div=j=V("div",null,w({
            position:"absolute",
            top:d.plotTop-25+"px",
            right:d.chartWidth-d.plotLeft-d.plotWidth+"px"
            },g.inputBoxStyle),j),c.leftBox=c.drawInput("min"),c.rightBox=c.drawInput("max");
        l&&(c.setInputValue(c.leftBox,
            a),c.setInputValue(c.rightBox,b));
        c.rendered=!0
        },
    destroy:function(){
        var a=this.leftBox,b=this.rightBox,c=this.boxSpanElements,d=this.divRelative,e=this.divAbsolute,f=this.zoomText;
        O(this.chart.container,ob,this.mouseDownHandler);
        n([this.buttons],function(a){
            ua(a)
            });
        if(f)this.zoomText=f.destroy();
        if(a)a.onfocus=a.onblur=a.onchange=null;
        if(b)b.onfocus=b.onblur=b.onchange=null;
        n([a,b,c.min,c.max,e,d],function(a){
            Pa(a)
            });
        this.leftBox=this.rightBox=this.boxSpanElements=this.div=this.divAbsolute=this.divRelative=
        null
        }
    };

Highcharts.RangeSelector=Qb;
Za.prototype.callbacks.push(function(a){
    function b(){
        f=a.xAxis[0].getExtremes();
        g.render(x(f.min,f.dataMin),K(f.max,f.dataMax))
        }
        function c(){
        f=a.xAxis[0].getExtremes();
        h.render(f.min,f.max)
        }
        function d(a){
        g.render(a.min,a.max)
        }
        function e(a){
        h.render(a.min,a.max)
        }
        var f,g=a.scroller,h=a.rangeSelector;
    g&&(C(a.xAxis[0],"afterSetExtremes",d),C(a,"resize",b),b());
    h&&(C(a.xAxis[0],"afterSetExtremes",e),C(a,"resize",c),c());
    C(a,"destroy",function(){
        g&&(O(a,"resize",b),O(a.xAxis[0],
            "afterSetExtremes",d));
        h&&(O(a,"resize",c),O(a.xAxis[0],"afterSetExtremes",e))
        })
    });
Highcharts.StockChart=function(a,b){
    var c=a.series,d,e={
        marker:{
            enabled:!1,
            states:{
                hover:{
                    radius:5
                }
            }
        },
shadow:!1,
states:{
    hover:{
        lineWidth:2
    }
},
dataGrouping:{
    enabled:!0
    }
},f={
    shadow:!1,
    borderWidth:0,
    dataGrouping:{
        enabled:!0
        }
    };

a.xAxis=Ia(la(a.xAxis||{}),function(a){
    return t({
        minPadding:0,
        maxPadding:0,
        ordinal:!0,
        title:{
            text:null
        },
        labels:{
            overflow:"justify"
        },
        showLastLabel:!0
        },a,{
        type:"datetime",
        categories:null
    })
    });
a.yAxis=
Ia(la(a.yAxis||{}),function(a){
    d=a.opposite;
    return t({
        labels:{
            align:d?"right":"left",
            x:d?-2:2,
            y:-2
        },
        showLastLabel:!1,
        title:{
            text:null
        }
    },a)
});
a.series=null;
a=t({
    chart:{
        panning:!0
        },
    navigator:{
        enabled:!0
        },
    scrollbar:{
        enabled:!0
        },
    rangeSelector:{
        enabled:!0
        },
    title:{
        text:null
    },
    tooltip:{
        shared:!0,
        crosshairs:!0
        },
    legend:{
        enabled:!1
        },
    plotOptions:{
        line:e,
        spline:e,
        area:e,
        areaspline:e,
        arearange:e,
        areasplinerange:e,
        column:f,
        columnrange:f,
        candlestick:f,
        ohlc:f
    }
},a,{
    chart:{
        inverted:!1
        }
    });
a.series=c;
return new Za(a,
    b)
};

var jc=U.init,kc=U.processData,lc=xa.prototype.tooltipFormatter;
U.init=function(){
    jc.apply(this,arguments);
    var a=this.options.compare;
    if(a)this.modifyValue=function(b,c){
        var d=this.compareValue,b=a==="value"?b-d:b=100*(b/d)-100;
        if(c)c.change=b;
        return b
        }
    };

U.processData=function(){
    kc.apply(this,arguments);
    if(this.options.compare)for(var a=0,b=this.processedXData,c=this.processedYData,d=c.length,e=this.xAxis.getExtremes().min;a<d;a++)if(typeof c[a]==="number"&&b[a]>=e){
        this.compareValue=c[a];
        break
    }
    };
xa.prototype.tooltipFormatter=function(a){
    a=a.replace("{point.change}",(this.change>0?"+":"")+Ma(this.change,this.series.tooltipOptions.changeDecimals||2));
    return lc.apply(this,[a])
    };
(function(){
    var a=U.init,b=U.getSegments;
    U.init=function(){
        var b,d;
        a.apply(this,arguments);
        b=this.chart;
        (d=this.xAxis)&&d.options.ordinal&&C(this,"updatedData",function(){
            delete d.ordinalIndex
            });
        if(d&&d.options.ordinal&&!d.hasOrdinalExtension){
            d.hasOrdinalExtension=!0;
            d.beforeSetTickPositions=function(){
                var a,b=[],c=
                !1,e,j=this.getExtremes(),k=j.min,j=j.max,l;
                if(this.options.ordinal){
                    n(this.series,function(c,d){
                        if(c.visible!==!1&&c.takeOrdinalPosition!==!1&&(b=b.concat(c.processedXData),a=b.length,d&&a)){
                            b.sort(function(a,b){
                                return a-b
                                });
                            for(d=a-1;d--;)b[d]===b[d+1]&&b.splice(d,1)
                                }
                            });
                a=b.length;
                if(a>2){
                    e=b[1]-b[0];
                    for(l=a-1;l--&&!c;)b[l+1]-b[l]!==e&&(c=!0)
                        }
                        c?(this.ordinalPositions=b,c=d.val2lin(k,!0),e=d.val2lin(j,!0),this.ordinalSlope=j=(j-k)/(e-c),this.ordinalOffset=k-c*j):this.ordinalPositions=this.ordinalSlope=
                this.ordinalOffset=z
                }
            };

    d.val2lin=function(a,b){
        var c=this.ordinalPositions;
        if(c){
            var d=c.length,e,k;
            for(e=d;e--;)if(c[e]===a){
                k=e;
                break
            }
            for(e=d-1;e--;)if(a>c[e]||e===0){
                c=(a-c[e])/(c[e+1]-c[e]);
                k=e+c;
                break
            }
            return b?k:this.ordinalSlope*(k||0)+this.ordinalOffset
            }else return a
            };

    d.lin2val=function(a,b){
        var c=this.ordinalPositions;
        if(c){
            var d=this.ordinalSlope,e=this.ordinalOffset,k=c.length-1,l,m;
            if(b)a<0?a=c[0]:a>k?a=c[k]:(k=Y(a),m=a-k);else for(;k--;)if(l=d*k+e,a>=l){
                d=d*(k+1)+e;
                m=(a-l)/(d-l);
                break
            }
            return m!==
            z&&c[k]!==z?c[k]+(m?m*(c[k+1]-c[k]):0):a
            }else return a
            };

    d.getExtendedPositions=function(){
        var a=d.series[0].currentDataGrouping,e=d.ordinalIndex,h=a?a.count+a.unitName:"raw",i=d.getExtremes(),j,k;
        if(!e)e=d.ordinalIndex={};

        if(!e[h])j={
            series:[],
            getExtremes:function(){
                return{
                    min:i.dataMin,
                    max:i.dataMax
                    }
                },
        options:{
            ordinal:!0
            }
        },n(d.series,function(d){
        k={
            xAxis:j,
            xData:d.xData,
            chart:b,
            destroyGroupedData:Cb
        };

        k.options={
            dataGrouping:a?{
                enabled:!0,
                forced:!0,
                approximation:"open",
                units:[[a.unitName,[a.count]]]
                }:

                {
                enabled:!1
                }
            };

    d.processData.apply(k);
        j.series.push(k)
        }),d.beforeSetTickPositions.apply(j),e[h]=j.ordinalPositions;
return e[h]
};

d.getGroupIntervalFactor=function(a,b,c){
    for(var d=0,e=c.length,k=[];d<e-1;d++)k[d]=c[d+1]-c[d];
    k.sort(function(a,b){
        return a-b
        });
    c=k[Y(e/2)];
    return e*c/(b-a)
    };

d.postProcessTickInterval=function(a){
    var b=this.ordinalSlope;
    return b?a/(b/d.closestPointRange):a
    };

d.getNonLinearTimeTicks=function(a,b,c,e,j,k,l){
    var m=0,n=0,p,u={},q,s,w,t=[],y=d.options.tickPixelInterval;
    if(!j||
        b===z)return bb(a,b,c,e);
    for(s=j.length;n<s;n++){
        w=n&&j[n-1]>c;
        j[n]<b&&(m=n);
        if(n===s-1||j[n+1]-j[n]>k*5||w)p=bb(a,j[m],j[n],e),t=t.concat(p),m=n+1;
        if(w)break
    }
    a=p.info;
    if(l&&a.unitRange<=H[ta]){
        n=t.length-1;
        for(m=1;m<n;m++)(new Date(t[m]))[Ca]()!==(new Date(t[m-1]))[Ca]()&&(u[t[m]]=fa,q=!0);
        q&&(u[t[0]]=fa);
        a.higherRanks=u
        }
        t.info=a;
    if(l&&v(y)){
        var l=a=t.length,n=[],x;
        for(q=[];l--;)m=d.translate(t[l]),x&&(q[l]=x-m),n[l]=x=m;
        q.sort();
        q=q[Y(q.length/2)];
        q<y*0.6&&(q=null);
        l=t[a-1]>c?a-1:a;
        for(x=void 0;l--;)m=
            n[l],c=x-m,x&&c<y*0.8&&(q===null||c<q*0.8)?(u[t[l]]&&!u[t[l+1]]?(c=l+1,x=m):c=l,t.splice(c,1)):x=m
            }
            return t
    };

var e=b.pan;
b.pan=function(a){
    var d=b.xAxis[0],h=!1;
    if(d.options.ordinal&&d.series.length){
        var i=b.mouseDownX,j=d.getExtremes(),k=j.dataMax,l=j.min,m=j.max,o;
        o=b.hoverPoints;
        var p=d.closestPointRange,i=(i-a)/(d.translationSlope*(d.ordinalSlope||p)),s={
            ordinalPositions:d.getExtendedPositions()
            },q,p=d.lin2val,t=d.val2lin;
        if(s.ordinalPositions){
            if(W(i)>1)o&&n(o,function(a){
                a.setState()
                }),i<0?
            (o=s,s=d.ordinalPositions?d:s):o=d.ordinalPositions?d:s,q=s.ordinalPositions,k>q[q.length-1]&&q.push(k),o=p.apply(o,[t.apply(o,[l,!0])+i,!0]),i=p.apply(s,[t.apply(s,[m,!0])+i,!0]),o>K(j.dataMin,l)&&i<x(k,m)&&d.setExtremes(o,i,!0,!1,{
                trigger:"pan"
            }),b.mouseDownX=a,L(b.container,{
                cursor:"move"
            })
            }else h=!0
            }else h=!0;
    h&&e.apply(b,arguments)
    }
}
};

U.getSegments=function(){
    var a=this,d,e=a.options.gapSize;
    b.apply(a);
    if(e)d=a.segments,n(d,function(b,g){
        for(var h=b.length-1;h--;)b[h+1].x-b[h].x>a.xAxis.closestPointRange*
            e&&d.splice(g+1,0,b.splice(h+1,b.length-h))
            })
    }
    })();
w(Highcharts,{
    Axis:Qa,
    CanVGRenderer:mb,
    Chart:Za,
    Color:wa,
    Legend:yb,
    MouseTracker:xb,
    Point:xa,
    Tick:Ya,
    Tooltip:wb,
    Renderer:Sa,
    Series:X,
    SVGRenderer:qa,
    VMLRenderer:Ja,
    dateFormat:va,
    pathAnim:Bb,
    getOptions:function(){
        return P
        },
    hasBidiBug:Zb,
    numberFormat:Ma,
    seriesTypes:S,
    setOptions:function(a){
        P=t(P,a);
        Nb();
        return P
        },
    addEvent:C,
    removeEvent:O,
    createElement:V,
    discardElement:Pa,
    css:L,
    each:n,
    extend:w,
    map:Ia,
    merge:t,
    pick:p,
    splat:la,
    extendClass:aa,
    pInt:G,
    wrap:pb,
    svg:ma,
    canvas:ha,
    vml:!ma&&!ha,
    product:"Highstock",
    version:"1.2.2"
})
})();
