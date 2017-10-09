(function(bn,aA,C){var ax=!0,aw=null,av=!1;
function au(j){return function(){return this[j]
}
}var bd=this;
function aP(k,j){var n=k.split("."),m=bd;
!(n[0] in m)&&m.execScript&&m.execScript("var "+n[0]);
for(var l;
n.length&&(l=n.shift());
){!n.length&&void 0!==j?m[l]=j:m=m[l]?m[l]:m[l]={}
}}function at(k,j,l){return k.call.apply(k.bind,arguments)
}function H(k,j,m){if(!k){throw Error()
}if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);
return function(){var n=Array.prototype.slice.call(arguments);
Array.prototype.unshift.apply(n,l);
return k.apply(j,n)
}
}return function(){return k.apply(j,arguments)
}
}function ar(k,j,l){ar=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?at:H;
return ar.apply(aw,arguments)
}var d=Date.now||function(){return +new Date
};
function bo(k,j){this.Y=k;
this.P=j||k;
this.F=this.P.document
}bo.prototype.createElement=function(k,j,m){k=this.F.createElement(k);
if(j){for(var l in j){j.hasOwnProperty(l)&&("style"==l?k.style.cssText=j[l]:k.setAttribute(l,j[l]))
}}m&&k.appendChild(this.F.createTextNode(m));
return k
};
function ap(k,j,l){k=k.F.getElementsByTagName(j)[0];
k||(k=aA.documentElement);
k&&k.lastChild&&k.insertBefore(l,k.lastChild)
}function be(k,j){function l(){k.F.body?j():setTimeout(l,0)
}l()
}function ao(k,j){for(var n=k.className.split(/\s+/),m=0,l=n.length;
m<l;
m++){if(n[m]==j){return
}}n.push(j);
k.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")
}function an(k,j){for(var q=k.className.split(/\s+/),n=[],m=0,l=q.length;
m<l;
m++){q[m]!=j&&n.push(q[m])
}k.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")
}function aV(k,j){for(var n=k.className.split(/\s+/),m=0,l=n.length;
m<l;
m++){if(n[m]==j){return ax
}}return av
}function ay(k){var j=k.P.location.protocol;
"about:"==j&&(j=k.Y.location.protocol);
return"https:"==j?"https:":"http:"
}function K(k,j,q){var n=k.F.getElementsByTagName("head")[0];
if(n){var m=k.createElement("script",{src:j}),l=av;
m.onload=m.onreadystatechange=function(){if(!l&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState)){l=ax,q&&q(aw),m.onload=m.onreadystatechange=aw,"HEAD"==m.parentNode.tagName&&n.removeChild(m)
}};
n.appendChild(m);
bn.setTimeout(function(){l||(l=ax,q&&q(Error("Script load timeout")))
},5000)
}}function am(k,j,l){this.Oa=k;
this.aa=j;
this.Na=l
}aP("internalWebfont.BrowserInfo",am);
am.prototype.Ba=au("Oa");
am.prototype.hasWebFontSupport=am.prototype.Ba;
am.prototype.Ca=au("aa");
am.prototype.hasWebKitFallbackBug=am.prototype.Ca;
am.prototype.Da=au("Na");
am.prototype.hasWebKitMetricsBug=am.prototype.Da;
function al(k,j,m,l){this.e=k!=aw?k:aw;
this.m=j!=aw?j:aw;
this.D=m!=aw?m:aw;
this.j=l!=aw?l:aw
}var e=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
function ak(k,j){return k.e>j.e||k.e===j.e&&k.m>j.m||k.e===j.e&&k.m===j.m&&k.D>j.D?1:k.e<j.e||k.e===j.e&&k.m<j.m||k.e===j.e&&k.m===j.m&&k.D<j.D?-1:0
}function aj(k,j){return 0===ak(k,j)||1===ak(k,j)
}al.prototype.toString=function(){return[this.e,this.m||"",this.D||"",this.j||""].join("")
};
function ai(k){k=e.exec(k);
var j=aw,n=aw,m=aw,l=aw;
k&&(k[1]!==aw&&k[1]&&(j=parseInt(k[1],10)),k[2]!==aw&&k[2]&&(n=parseInt(k[2],10)),k[3]!==aw&&k[3]&&(m=parseInt(k[3],10)),k[4]!==aw&&k[4]&&(l=/^[0-9]+$/.test(k[4])?parseInt(k[4],10):k[4]));
return new al(j,n,m,l)
}function ag(v,u,s,r,q,n,m,l,k,t,j){this.Q=v;
this.n=u;
this.Ma=s;
this.v=r;
this.A=q;
this.ra=n;
this.k=m;
this.h=l;
this.Ia=k;
this.N=t;
this.t=j
}aP("internalWebfont.UserAgent",ag);
ag.prototype.getName=au("Q");
ag.prototype.getName=ag.prototype.getName;
ag.prototype.Aa=au("Ma");
ag.prototype.getVersion=ag.prototype.Aa;
ag.prototype.wa=au("v");
ag.prototype.getEngine=ag.prototype.wa;
ag.prototype.xa=au("ra");
ag.prototype.getEngineVersion=ag.prototype.xa;
ag.prototype.ya=au("k");
ag.prototype.getPlatform=ag.prototype.ya;
ag.prototype.za=au("Ia");
ag.prototype.getPlatformVersion=ag.prototype.za;
ag.prototype.va=au("N");
ag.prototype.getDocumentMode=ag.prototype.va;
ag.prototype.ua=au("t");
ag.prototype.getBrowserInfo=ag.prototype.ua;
function a1(k,j){this.c=k;
this.M=j
}var aB=new ag("Unknown",new al,"Unknown","Unknown",new al,"Unknown","Unknown",new al,"Unknown",void 0,new am(av,av,av));
a1.prototype.parse=function(){var t;
if(-1!=this.c.indexOf("MSIE")||-1!=this.c.indexOf("Trident/")){t=af(this);
var s=a5(this),r=ai(s),q=aw,n=aw,m=aw,l=aw,k=a4(this.c,/Trident\/([\d\w\.]+)/,1),j=a0(this.M),q=-1!=this.c.indexOf("MSIE")?a4(this.c,/MSIE ([\d\w\.]+)/,1):a4(this.c,/rv:([\d\w\.]+)/,1),n=ai(q);
""!=k?(m="Trident",l=ai(k)):(m="Unknown",l=new al,k="Unknown");
t=new ag("MSIE",n,q,m,l,k,t,r,s,j,new am("Windows"==t&&6<=n.e||"Windows Phone"==t&&8<=r.e,av,av))
}else{if(-1!=this.c.indexOf("Opera")){t:if(t="Unknown",s=a4(this.c,/Presto\/([\d\w\.]+)/,1),r=ai(s),q=a5(this),n=ai(q),m=a0(this.M),r.e!==aw?t="Presto":(-1!=this.c.indexOf("Gecko")&&(t="Gecko"),s=a4(this.c,/rv:([^\)]+)/,1),r=ai(s)),-1!=this.c.indexOf("Opera Mini/")){l=a4(this.c,/Opera Mini\/([\d\.]+)/,1),k=ai(l),t=new ag("OperaMini",k,l,t,r,s,af(this),n,q,m,new am(av,av,av))
}else{if(-1!=this.c.indexOf("Version/")&&(l=a4(this.c,/Version\/([\d\.]+)/,1),k=ai(l),k.e!==aw)){t=new ag("Opera",k,l,t,r,s,af(this),n,q,m,new am(10<=k.e,av,av));
break t
}l=a4(this.c,/Opera[\/ ]([\d\.]+)/,1);
k=ai(l);
t=k.e!==aw?new ag("Opera",k,l,t,r,s,af(this),n,q,m,new am(10<=k.e,av,av)):new ag("Opera",new al,"Unknown",t,r,s,af(this),n,q,m,new am(av,av,av))
}}else{/OPR\/[\d.]+/.test(this.c)?t=Z(this):/AppleWeb(K|k)it/.test(this.c)?t=Z(this):-1!=this.c.indexOf("Gecko")?(t="Unknown",s=new al,r="Unknown",q=a5(this),n=ai(q),m=av,-1!=this.c.indexOf("Firefox")?(t="Firefox",r=a4(this.c,/Firefox\/([\d\w\.]+)/,1),s=ai(r),m=3<=s.e&&5<=s.m):-1!=this.c.indexOf("Mozilla")&&(t="Mozilla"),l=a4(this.c,/rv:([^\)]+)/,1),k=ai(l),m||(m=1<k.e||1==k.e&&9<k.m||1==k.e&&9==k.m&&2<=k.D||l.match(/1\.9\.1b[123]/)!=aw||l.match(/1\.9\.1\.[\d\.]+/)!=aw),t=new ag(t,s,r,"Gecko",k,l,af(this),n,q,a0(this.M),new am(m,av,av))):t=aB
}}return t
};
function af(k){var j=a4(k.c,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);
if(""!=j){return/BB\d{2}/.test(j)&&(j="BlackBerry"),j
}k=a4(k.c,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1);
return""!=k?("Mac_PowerPC"==k&&(k="Macintosh"),k):"Unknown"
}function a5(k){var j=a4(k.c,/(OS X|Windows NT|Android) ([^;)]+)/,2);
if(j||(j=a4(k.c,/Windows Phone( OS)? ([^;)]+)/,2))||(j=a4(k.c,/(iPhone )?OS ([\d_]+)/,2))){return j
}if(j=a4(k.c,/(?:Linux|CrOS) ([^;)]+)/,1)){for(var j=j.split(/\s/),l=0;
l<j.length;
l+=1){if(/^[\d\._]+$/.test(j[l])){return j[l]
}}}return(k=a4(k.c,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?k:"Unknown"
}function Z(u){var t=af(u),r=a5(u),q=ai(r),n=a4(u.c,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1),m=ai(n),l="Unknown",k=new al,j="Unknown",s=av;
/OPR\/[\d.]+/.test(u.c)?l="Opera":-1!=u.c.indexOf("Chrome")||-1!=u.c.indexOf("CrMo")||-1!=u.c.indexOf("CriOS")?l="Chrome":/Silk\/\d/.test(u.c)?l="Silk":"BlackBerry"==t||"Android"==t?l="BuiltinBrowser":-1!=u.c.indexOf("PhantomJS")?l="PhantomJS":-1!=u.c.indexOf("Safari")?l="Safari":-1!=u.c.indexOf("AdobeAIR")&&(l="AdobeAIR");
"BuiltinBrowser"==l?j="Unknown":"Silk"==l?j=a4(u.c,/Silk\/([\d\._]+)/,1):"Chrome"==l?j=a4(u.c,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=u.c.indexOf("Version/")?j=a4(u.c,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==l?j=a4(u.c,/AdobeAIR\/([\d\.]+)/,1):"Opera"==l?j=a4(u.c,/OPR\/([\d.]+)/,1):"PhantomJS"==l&&(j=a4(u.c,/PhantomJS\/([\d.]+)/,1));
k=ai(j);
s="AdobeAIR"==l?2<k.e||2==k.e&&5<=k.m:"BlackBerry"==t?10<=q.e:"Android"==t?2<q.e||2==q.e&&1<q.m:526<=m.e||525<=m.e&&13<=m.m;
return new ag(l,k,j,"AppleWebKit",m,n,t,q,r,a0(u.M),new am(s,536>m.e||536==m.e&&11>m.m,"iPhone"==t||"iPad"==t||"iPod"==t||"Macintosh"==t))
}function a4(k,j,l){return(k=k.match(j))&&k[l]?k[l]:""
}function a0(j){if(j.documentMode){return j.documentMode
}}function g(j){this.Ga=j||"-"
}g.prototype.j=function(k){for(var j=[],l=0;
l<arguments.length;
l++){j.push(arguments[l].replace(/[\W_]+/g,"").toLowerCase())
}return j.join(this.Ga)
};
function br(k,j,l){this.g=k;
this.l=j;
this.T=l;
this.q="wf";
this.p=new g("-")
}function bi(j){an(j.l,j.p.j(j.q,"loading"));
aV(j.l,j.p.j(j.q,"active"))||ao(j.l,j.p.j(j.q,"inactive"));
aZ(j,"inactive")
}function aZ(k,j,l){if(k.T[j]){if(l){k.T[j](l.getName(),aY(l))
}else{k.T[j]()
}}}function aW(k,j){this.Q=k;
this.ba=4;
this.R="n";
var l=(j||"n4").match(/^([nio])([1-9])$/i);
l&&(this.R=l[1],this.ba=parseInt(l[2],10))
}aW.prototype.getName=au("Q");
function aY(j){return j.R+j.ba
}function aU(k,j){this.g=k;
this.J=j;
this.z=this.g.createElement("span",{"aria-hidden":"true"},this.J)
}function a6(k,j){var q;
q=[];
for(var n=j.Q.split(/,\s*/),m=0;
m<n.length;
m++){var l=n[m].replace(/['"]/g,"");
-1==l.indexOf(" ")?q.push(l):q.push("'"+l+"'")
}q=q.join(",");
n="normal";
m=j.ba+"00";
"o"===j.R?n="oblique":"i"===j.R&&(n="italic");
k.z.style.cssText="position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+q+";"+("font-style:"+n+";font-weight:"+m+";")
}function aD(j){ap(j.g,"body",j.z)
}aU.prototype.remove=function(){var j=this.z;
j.parentNode&&j.parentNode.removeChild(j)
};
function ad(t,s,r,q,n,m,l,k){this.ca=t;
this.Ea=s;
this.g=r;
this.w=q;
this.J=k||"BESbswy";
this.t=n;
this.K={};
this.Z=m||5000;
this.la=l||aw;
this.I=this.H=aw;
t=new aU(this.g,this.J);
aD(t);
for(var j in aT){aT.hasOwnProperty(j)&&(a6(t,new aW(aT[j],aY(this.w))),this.K[aT[j]]=t.z.offsetWidth)
}t.remove()
}var aT={Va:"serif",Ua:"sans-serif",Ra:"monospace"};
ad.prototype.start=function(){this.H=new aU(this.g,this.J);
aD(this.H);
this.I=new aU(this.g,this.J);
aD(this.I);
this.Ka=d();
a6(this.H,new aW(this.w.getName()+",serif",aY(this.w)));
a6(this.I,new aW(this.w.getName()+",sans-serif",aY(this.w)));
i(this)
};
function a(k,j,m){for(var l in aT){if(aT.hasOwnProperty(l)&&j===k.K[aT[l]]&&m===k.K[aT[l]]){return ax
}}return av
}function i(k){var j=k.H.z.offsetWidth,l=k.I.z.offsetWidth;
j===k.K.serif&&l===k.K["sans-serif"]||k.t.aa&&a(k,j,l)?d()-k.Ka>=k.Z?k.t.aa&&a(k,j,l)&&(k.la===aw||k.la.hasOwnProperty(k.w.getName()))?bk(k,k.ca):bk(k,k.Ea):setTimeout(ar(function(){i(this)
},k),25):bk(k,k.ca)
}function bk(k,j){k.H.remove();
k.I.remove();
j(k.w)
}function aS(k,j,m,l){this.g=j;
this.B=m;
this.V=0;
this.oa=this.ka=av;
this.Z=l;
this.t=k.t
}aS.prototype.$=function(k,j,s,r){if(0===k.length&&r){bi(this.B)
}else{this.V+=k.length;
r&&(this.ka=r);
for(r=0;
r<k.length;
r++){var q=k[r],n=j[q.getName()],m=this.B,l=q;
ao(m.l,m.p.j(m.q,l.getName(),aY(l).toString(),"loading"));
aZ(m,"fontloading",l);
(new ad(ar(this.sa,this),ar(this.ta,this),this.g,q,this.t,this.Z,s,n)).start()
}}};
aS.prototype.sa=function(k){var j=this.B;
an(j.l,j.p.j(j.q,k.getName(),aY(k).toString(),"loading"));
an(j.l,j.p.j(j.q,k.getName(),aY(k).toString(),"inactive"));
ao(j.l,j.p.j(j.q,k.getName(),aY(k).toString(),"active"));
aZ(j,"fontactive",k);
this.oa=ax;
a8(this)
};
aS.prototype.ta=function(k){var j=this.B;
an(j.l,j.p.j(j.q,k.getName(),aY(k).toString(),"loading"));
aV(j.l,j.p.j(j.q,k.getName(),aY(k).toString(),"active"))||ao(j.l,j.p.j(j.q,k.getName(),aY(k).toString(),"inactive"));
aZ(j,"fontinactive",k);
a8(this)
};
function a8(j){0==--j.V&&j.ka&&(j.oa?(j=j.B,an(j.l,j.p.j(j.q,"loading")),an(j.l,j.p.j(j.q,"inactive")),ao(j.l,j.p.j(j.q,"active")),aZ(j,"active")):bi(j.B))
}function aR(k,j){this.Ja=k;
this.ga=j
}function bp(k){for(var j=k.Ja.join(","),n=[],m=0;
m<k.ga.length;
m++){var l=k.ga[m];
n.push(l.name+":"+l.value+";")
}return j+"{"+n.join("")+"}"
}function bf(j){this.g=j
}bf.prototype.toString=function(){return encodeURIComponent(this.g.P.location.hostname||this.g.Y.location.hostname)
};
function aX(k,j){this.r=k;
this.o=j
}aX.prototype.toString=function(){for(var k=[],j=0;
j<this.o.length;
j++){for(var q=this.o[j],n=q.C(),q=q.C(this.r),m=0;
m<n.length;
m++){var l;
k:{for(l=0;
l<q.length;
l++){if(n[m]===q[l]){l=ax;
break k
}}l=av
}k.push(l?1:0)
}}k=k.join("");
k=k.replace(/^0+/,"");
j=[];
for(n=k.length;
0<n;
n-=4){q=k.slice(0>n-4?0:n-4,n),j.unshift(parseInt(q,2).toString(16))
}return j.join("")
};
function aQ(j){this.La=j
}aQ.prototype.j=function(k,j){var m=j||{},l=this.La.replace(/\{\/?([^*}]*)(\*?)\}/g,function(q,n,r){return r&&m[n]?"/"+m[n].join("/"):m[n]||""
});
l.match(/^\/\//)&&(l=(k?"https:":"http:")+l);
return l.replace(/\/*\?*($|\?)/,"$1")
};
function aO(k,j,m,l){this.G=k;
this.O=j;
this.Ya=m;
this.Za=l;
this.ia={};
this.ha={}
}aO.prototype.C=function(j){return j?(this.ia[j]||this.O).slice(0):this.O.slice(0)
};
aO.prototype.$=function(k,j,n){var m=[],l={};
az(this,j,m,l);
k(m,l,n)
};
function az(k,j,s,r){s.push(k.G);
r[k.G]=k.C(j);
k=k.ha[j]||[];
for(j=0;
j<k.length;
j++){for(var q=k[j],n=q.G,m=av,l=0;
l<s.length;
l++){s[l]==n&&(m=ax)
}m||(s.push(n),r[n]=q.C())
}}function Q(k,j){this.G=k;
this.O=j
}Q.prototype.C=au("O");
function f(){this.qa=this.Pa=this.L=this.W=this.Fa=ax
}function aM(j){return"Windows"===j.k
}function aL(j){return aM(j)&&0===ak(j.h,new al(5,1))||aM(j)&&0===ak(j.h,new al(5,2))||aM(j)&&0===ak(j.h,new al(6,0))||aM(j)&&aj(j.h,new al(6,1))
}function aK(j){return"Macintosh"===j.k&&(aj(j.h,new al(10,4))||j.h.e===aw)
}function bq(k,j){return j.Fa&&("iPhone"===k.k||"iPod"===k.k)
}function bg(k,j){return bq(k,j)&&aj(k.h,new al(4,2))&&-1===ak(k.h,new al(5))
}function a2(k,j){return j.W&&"iPad"===k.k&&aj(k.h,new al(4,2))&&-1===ak(k.h,new al(5))
}function aJ(k,j){return j.L&&"Android"===k.k
}function aC(k,j){return aJ(k,j)&&aj(k.h,new al(2,2))&&-1===ak(k.h,new al(3,1))
}function ac(k,j){return aJ(k,j)&&aj(k.h,new al(3,1))&&-1===ak(k.h,new al(4,1))
}function aI(j){return"Linux"===j.k||"Ubuntu"===j.k
}function h(j){return"Gecko"===j.v&&0===ak(j.A,new al(1,9,1))&&!/^b[1-3]$/.test(j.A.j||"")
}function bs(j){return"Safari"===j.getName()&&"AppleWebKit"===j.v||"Unknown"===j.getName()&&"AppleWebKit"===j.v&&("iPhone"===j.k||"iPad"===j.k||"iPod"===j.k)
}function bj(j){return"Safari"===j.getName()&&"AppleWebKit"===j.v&&aj(j.A,new al(525,13))&&-1===ak(j.A,new al(534,50))
}function a7(j){return"Opera"===j.getName()&&aj(j.n,new al(10,54))&&-1===ak(j.n,new al(11,10))
}function ae(j){return"BuiltinBrowser"===j.getName()
}function o(j){this.na=j
}function b(k,j){return j
}var bl={Sa:"a",Ta:"b",Xa:"d",Wa:"f",Qa:"i"},a9={a:function(k,j){return bj(k)&&aL(k)||ae(k)&&(aC(k,j)||aJ(k,j)&&aj(k.h,new al(4,1)))||j.L&&"Silk"===k.getName()&&-1===ak(k.n,new al(2))&&(aC(k,j)||aK)||j.L&&"Silk"===k.getName()&&aj(k.n,new al(2))&&aJ(k,j)&&aj(k.h,new al(4,1))||bs(k)&&(a2(k,j)||bg(k,j))||h(k)&&(aL(k)||aI(k))||a7(k)&&(aL(k)||aI(k))||("Chrome"===k.getName()&&1===ak(k.n,new al(4,0,249))&&-1===ak(k.n,new al(6))||0===ak(k.n,new al(4,0,249))&&(k.n.j===aw||4<=k.n.j))&&(aL(k)||aI(k)||aK(k))||"Chrome"===k.getName()&&aj(k.n,new al(6))&&(a2(k,j)||bg(k,j))||"AdobeAIR"===k.getName()&&aj(k.n,new al(2,5))&&(aM(k)&&k.h.e===aw||aI(k))
},b:function(j){return h(j)&&aK(j)||bj(j)&&aK(j)||a7(j)&&aK(j)||"AdobeAIR"===j.getName()&&aj(j.n,new al(2,5))&&aK(j)
},d:function(k,j){return"Chrome"===k.getName()&&aj(k.n,new al(6))&&(aL(k)||aI(k)||aK(k)||aJ(k,j)||"CrOS"===k.k||j.W&&"iPad"===k.k&&aj(k.h,new al(5))||bq(k,j)&&aj(k.h,new al(5)))||"Gecko"===k.v&&1===ak(k.A,new al(1,9,1))&&(aL(k)||aI(k)||aK(k)||aJ(k,j))||"Safari"===k.getName()&&("AppleWebKit"===k.v&&aj(k.A,new al(534,50)))&&(aL(k)||aK(k))||bs(k)&&(j.W&&"iPad"===k.k&&aj(k.h,new al(5))||bq(k,j)&&aj(k.h,new al(5)))||"Opera"===k.getName()&&aj(k.n,new al(11,10))&&(aL(k)||aI(k)||aK(k)||aJ(k,j))||"MSIE"===k.getName()&&9<=k.N&&(aM(k)&&aj(k.h,new al(6,1))||aM(k)&&0===ak(k.h,new al(6,0)))||"MSIE"===k.getName()&&j.Pa&&"Windows Phone"===k.k&&aj(k.h,new al(8))||ae(k)&&j.qa&&"BlackBerry"===k.k&&aj(k.h,new al(10))
},f:function(k,j){return ae(k)&&ac(k,j)||j.L&&"Silk"===k.getName()&&aj(k.n,new al(2))&&(ac(k,j)||aI(k))
},i:function(j){return"MSIE"===j.getName()&&(aj(j.n,new al(6,0))&&(void 0===j.N||9>j.N))&&aL(j)
}};
function aF(k,j){var n=j||new f,m;
for(m in bl){var l=bl[m];
if(a9[l](k,n)){return l
}}return aw
}var ah={};
ah.i=new o(function(k,j,s){for(var r=0;
r<j.length;
r+=1){var q=j[r],n=k.replace(/(-1|-2)$/,"").slice(0,28)+"-"+q;
s.push(new Q(n,[q]))
}k={};
for(q=0;
q<j.length;
q++){s=j[q],r=s.charAt(1),(k[r]||(k[r]=[])).push(s)
}s=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];
r=[];
for(q=0;
q<s.length;
q++){for(var n=s[q],m=0;
m<n.length;
m++){var l=n[m];
if(k[l]){r=r.concat(k[l]);
break
}}}s=r;
r={};
k=[];
for(q=0;
q<s.length;
q++){n=s[q],r[n]||(r[n]=ax,k.push(n))
}s=[];
for(r=0;
r<j.length;
r++){q=j[r];
for(n=0;
n<k.length;
n++){m=k[n],m==q&&s.push(m)
}}return s
});
var aH={};
aH.a=aH.b=aH.d=function(){return[]
};
aH.f=function(j){return[new bf(j)]
};
aH.i=function(k,j,l){return[new bf(k),new aX(j,l)]
};
function aG(j){this.g=j;
this.ea=this.c=this.r=aw;
this.o=[];
this.u=[];
this.pa=this.U=aw
}aG.prototype.supportsConfiguredBrowser=function(){return !!this.r
};
aG.prototype.init=function(){if(0<this.u.length){for(var k=[],j=0;
j<this.u.length;
j++){k.push(bp(this.u[j]))
}var j=this.g,k=k.join(""),l=this.g.createElement("style");
l.setAttribute("type","text/css");
l.styleSheet?l.styleSheet.cssText=k:l.appendChild(aA.createTextNode(k));
ap(j,"head",l)
}};
aG.prototype.load=function(F,E,B){if(this.r){for(var A=ah[this.r]||new o(b),z=0;
z<this.o.length;
z++){for(var y=this.o[z],x=this.r,w=A,u=[],q=y.G.split(",")[0].replace(/"|'/g,""),s=y.C(),m=u,t=void 0,r=[],l={},v=0;
v<s.length;
v++){t=s[v],0<t.length&&!l[t]&&(l[t]=ax,r.push(t))
}s=r;
w=w.na?w.na(q,s,m):s;
y.ia[x]=w;
y.ha[x]=u
}if(this.U){A=aH[this.r](this.g,this.r,this.o);
z=this.r;
y=[];
for(x=0;
x<A.length;
x++){y.push(A[x].toString())
}A={format:z,extras:y};
B&&(A.contextPath=B);
A=this.U.j("https:"===ay(this.g),A);
B=this.g;
var A=B.createElement("link",{rel:"stylesheet",href:A}),k=av;
A.onload=function(){k||(k=ax)
};
A.onerror=function(){k||(k=ax)
};
ap(B,"head",A)
}if(F){var j=this,n=this.r;
be(this.g,function(){for(var G=0;
G<j.o.length;
G++){j.o[G].$(F,n,E&&G==j.o.length-1)
}})
}}};
aG.prototype.collectFontFamilies=function(k,j){if(this.r){for(var l=0;
l<this.o.length;
l++){az(this.o[l],this.r,k,j)
}}};
aG.prototype.performOptionalActions=function(){if(this.X){var k=this,j=this.c,l=this.g;
be(this.g,function(){var q=k.X;
if(q.ma){var n=bn.__adobewebfontsappname__,n=n?n.toString().substr(0,20):"",q=q.ma.j("https:"===ay(l),{host:encodeURIComponent(l.P.location.hostname||l.Y.location.hostname),app:encodeURIComponent(n),_:(+new Date).toString()}),m=new Image(1,1);
m.src=q;
m.onload=function(){m.onload=aw
}
}q=k.X;
q.da&&(q=q.da.j(j,l),ap(l,"body",q))
})
}};
function p(k,j,m,l){this.Ha=k;
this.fa=aw;
this.g=j;
this.c=m;
this.l=l;
this.s=[]
}p.prototype.S=function(j){this.s.push(j)
};
p.prototype.load=function(k,j){var s=k,r=j||{};
if("string"==typeof s){s=[s]
}else{if(!s||!s.length){r=s||{},s=[]
}}if(s.length){for(var q=this,n=s.length,m=0;
m<s.length;
m++){var l=this.Ha.j("https:"===ay(this.g),{id:encodeURIComponent(s[m])});
K(this.g,l,function(){0==--n&&c(q,r)
})
}}else{c(this,r)
}};
function c(k,j){if(0!=k.s.length){k.fa=j.contextPath||aw;
for(var q=new br(k.g,k.l,j),n=av,m=0;
m<k.s.length;
m++){k.s[m].init(),n=n||k.s[m].supportsConfiguredBrowser()
}if(n){ao(q.l,q.p.j(q.q,"loading"));
aZ(q,"loading");
for(var l=new aS(k.c,k.g,q,j.timeout),q=function(s,r,y){for(var x=[],v=0;
v<s.length;
v+=1){var u=s[v];
if(r[u]){for(var w=r[u],t=0;
t<w.length;
t+=1){x.push(new aW(u,w[t]))
}}else{x.push(new aW(u))
}}l.$(x,{},aw,y)
},n=0;
n<k.s.length;
n++){m=k.s[n],m.supportsConfiguredBrowser()&&(m.load(q,n==k.s.length-1,k.fa),m.performOptionalActions(bn))
}}else{bi(q)
}k.s=[]
}}function bm(j){this.ja=j;
this.s=[]
}bm.prototype.S=function(j){this.s.push(j)
};
bm.prototype.load=function(){var k=this.ja.__webfonttypekitmodule__;
if(k){for(var j=0;
j<this.s.length;
j++){var m=this.s[j],l=k[m.pa];
l&&l(function(q,n,t){q=[];
n={};
var r=(new a1(navigator.userAgent,aA)).parse(),s=m;
s.c=r;
s.r=aF(s.c,s.ea);
m.supportsConfiguredBrowser()&&(m.init(),m.load(aw),m.collectFontFamilies(q,n),m.performOptionalActions(bn));
t(m.supportsConfiguredBrowser(),q,n)
})
}}};
var a3=(new a1(navigator.userAgent,aA)).parse();
bn.Typekit||(bn.Typekit={});
if(!bn.Typekit.load){var aE=new p(new aQ("//fonts.mathworks.com/{id}.js"),new bo(bn),a3,aA.documentElement),bc=new bm(bn);
bn.Typekit.load=function(){aE.load.apply(aE,arguments)
};
bn.Typekit.addKit=function(){aE.S.apply(aE,arguments)
}
}var aN=aw,aq,bh,aN=new aQ("//p.typekit.net/p.gif?a=712561&f=2032.5545.10879.10880.10881.10882.10884.10885.18153&h={host}&ht=sh&k=xvy5baa&s=1&_={_}");
aq=new function(){var j=aN;
this.da=aw;
this.ma=j
};
bh=new aG(new bo(bn));
bh.pa="xvy5baa";
bh.U=new aQ("//fonts.mathworks.com/k/xvy5baa-{format}.css?3bb2a6e53c9684ffdc9a99f11f5b2a6259e9e580e4938fcb487bcb48ad765cb4c66326ede94ac48d6ede67e4500a24e97a0591ac31cb9a79f653770995b73fcab179c8843e167d4d294efffce20684477e3030043617caba214c58b6f154839e39f8538e92cdd7798839d1a59e4d2b0791bbe6e783a84640f50c6e8f631ac5fd6e2928747046e8d3c8014f4e612066d47cd2f6460236d5af8067bf5be13b5d402fc9b57daa008f4648c576b0daffc4a09719f26748e4d12162f1841b44cd6114f823631817018292249f9424158262729aedfc9a7eaad686e19704ecf794505a5bf58346b86674958b71b58f71e596df71adc85eb06870a8aa3fa53e996a1fc9a87139ba5f47c506b20f3f5af733a35e32b903f3ea3ad28c5600e222fef219fa6d117c0d627897884abcb24d233482306c08ad5732c7ff2a2566cd5fa9554fc45a683e4492630af7837ac201efe374b4410a1ebb0f78147daed230fd70b646914a1bf60c1e5586d424a9779647a2ccd561f26b04a124f9");
bh.X=aq;
bh.o.push(new aO("museo-slab",["n7"]));
bh.o.push(new aO("futura-pt","n4 i4 n5 i5 n7 i7".split(" ")));
bh.o.push(new aO("automate",["n7"]));
bh.o.push(new aO("minion-pro-subhead",["n4"]));
bh.u.push(new aR([".tk-museo-slab"],[{name:"font-family",value:'"museo-slab",serif'}]));
bh.u.push(new aR([".tk-futura-pt"],[{name:"font-family",value:'"futura-pt","Arial","Helvetica",sans-serif'}]));
bh.u.push(new aR([".tk-automate"],[{name:"font-family",value:'"automate",sans-serif'}]));
bh.u.push(new aR([".tk-minion-pro-subhead"],[{name:"font-family",value:'"minion-pro-subhead",serif'}]));
var D;
if(D=bc){D=!!bc.ja.__webfonttypekitmodule__
}D?(bc.S(bh),bc.load()):(bh.c=a3,bh.r=aF(bh.c,bh.ea),bn.Typekit.addKit(bh))
})(this,document);