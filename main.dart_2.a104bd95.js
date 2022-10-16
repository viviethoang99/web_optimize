.aA()
break
case 13:q=b.gTX().co(0,255)
p=b.gTA().co(0,255)
o=b.gTm().co(0,255)
s=A.mS()
s.uY(A.a([0,0,0,0,q,0,0,0,0,o,0,0,0,0,p,0,0,0,1,0],t.u),"recolor")
s.lF("recolor",i,1,0,0,0,6,j)
r=s.aA()
break
case 15:d=A.a7L(B.tD)
d.toString
r=A.a7a(b,d,!0)
break
case 26:case 18:case 19:case 25:case 27:case 28:case 24:case 14:case 16:case 17:case 20:case 21:case 22:case 23:d=A.a7L(c)
d.toString
r=A.a7a(b,d,!1)
break
case 1:case 2:case 6:case 8:case 4:case 0:case 3:A.U(A.c1("Blend mode not supported in HTML renderer: "+c.h(0)))
r=null
break
default:r=null}d=r.b
this.c.append(d)
this.f.push(d)
n=this.yk(a)
A.k(n.style,"filter","url(#"+r.a+")")
if(c===B.tE){d=n.style
m=A.bP(b)
m.toString
A.k(d,h,m)}return n
default:n=A.aL(self.document,"div")
m=n.style
switch(d){case 0:case 8:A.k(m,f,g)
break
case 1:case 3:A.k(m,f,g)
d=A.bP(b)
d.toString
A.k(m,h,d)
break
case 2:case 6:A.k(m,f,g)
A.k(m,e,"url('"+A.f(a.a.src)+"')")
break
default:A.k(m,f,g)
A.k(m,e,"url('"+A.f(a.a.src)+"')")
d=A.a0l(c)
A.k(m,"background-blend-mode",d==null?"":d)
d=A.bP(b)
d.toString
A.k(m,h,d)
break}return n}},
eO(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=b.a
if(g===0){s=b.b
r=s!==0||b.c-g!==a.gaE(a)||b.d-s!==a.gaS(a)}else r=!0
q=c.a
p=c.c-q
if(p===a.gaE(a)&&c.d-c.b===a.gaS(a)&&!r&&d.z==null)h.wN(a,new A.C(q,c.b),d)
else{if(r){h.bf(0)
h.hI(c,B.b0)}o=c.b
if(r){s=b.c-g
if(s!==a.gaE(a))q+=-g*(p/s)
s=b.b
n=b.d-s
m=n!==a.gaS(a)?o+-s*((c.d-o)/n):o}else m=o
l=h.wN(a,new A.C(q,m),d)
k=c.d-o
if(r){p*=a.gaE(a)/(b.c-g)
k*=a.gaS(a)/(b.d-b.b)}g=l.style
j=B.d.N(p,2)+"px"
i=B.d.N(k,2)+"px"
A.k(g,"left","0px")
A.k(g,"top","0px")
A.k(g,"width",j)
A.k(g,"height",i)
g=self.window.HTMLImageElement
g.toString
if(!(l instanceof g))A.k(l.style,"background-size",j+" "+i)
if(r)h.aV(0)}h.pi()},
pi(){var s,r,q=this.d
if(q.y!=null){q.qw()
q.e.dw(0)
s=q.w
if(s==null)s=q.w=A.a([],t.J)
r=q.y
r.toString
s.push(r)
q.e=q.d=q.y=null}this.as=!0
this.e=null},
rG(a,b,c,d,e){var s,r,q,p,o,n=this.d,m=n.gaa(n)
if(d!=null){m.save()
for(n=d.length,s=t.f,r=e===B.D,q=0;q<d.length;d.length===n||(0,A.E)(d),++q){p=d[q]
o=A.bP(p.a)
o.toString
m.shadowColor=o
m.shadowBlur=p.c
o=p.b
m.shadowOffsetX=o.a
m.shadowOffsetY=o.b
if(r)m.strokeText(a,b,c)
else{o=A.a([a,b,c],s)
m.fillText.apply(m,o)}}m.restore()}if(e===B.D)m.strokeText(a,b,c)
else A.abN(m,a,b,c)},
Pn(a,b,c,d){return this.rG(a,b,c,null,d)},
dT(a,b){var s,r,q,p,o,n,m,l,k=this
if(a.e&&k.d.y!=null&&!k.as&&!k.ch.d){s=a.x
if(s===$){s!==$&&A.b5()
s=a.x=new A.W6(a)}s.aO(k,b)
return}r=A.a7V(a,b,null)
q=k.d
p=q.b
q=q.c
if(p!=null){o=A.a2V(p,r,b,q)
for(q=o.length,p=k.c,n=k.f,m=0;m<o.length;o.length===q||(0,A.E)(o),++m){l=o[m]
p.append(l)
n.push(l)}}else{A.a3t(r,A.Ip(q,b).a)
k.c.append(r)}k.f.push(r)
q=r.style
A.k(q,"left","0px")
A.k(q,"top","0px")
k.pi()},
j_(){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.d.j_()
s=h.b
if(s!=null)s.OC()
if(h.at){s=$.by()
s=s===B.w}else s=!1
if(s){s=h.c
r=t.e
q=t.sM
q=A.fj(new A.ji(s.children,q),q.i("n.E"),r)
p=A.an(q,!0,A.r(q).i("n.E"))
for(q=p.length,o=h.f,n=t.f,m=0;m<q;++m){l=p[m]
k=self.document
j=A.a(["div"],n)
i=r.a(k.createElement.apply(k,j))
k=i.style
k.setProperty("transform","translate3d(0,0,0)","")
i.append(l)
s.append(i)
o.push(i)}}s=h.c.firstChild
if(s!=null){r=self.window.HTMLElement
r.toString
if(s instanceof r)if(s.tagName.toLowerCase()==="canvas")A.k(s.style,"z-index","-1")}}}
A.bt.prototype={}
A.Vp.prototype={
bf(a){var s=this.a
s.a.uO()
s.c.push(B.jz);++s.r},
dc(a,b){var s=this.a
t.k.a(b)
s.d.c=!0
s.c.push(B.jz)
s.a.uO();++s.r},
aV(a){var s,r,q=this.a
if(!q.f&&q.r>1){s=q.a
s.y=s.r.pop()
r=s.w.pop()
if(r!=null){s.Q=r.a
s.as=r.b
s.at=r.c
s.ax=r.d
s.z=!0}else if(s.z)s.z=!1}s=q.c
if(s.length!==0&&B.b.gI(s) instanceof A.qu)s.pop()
else s.push(B.uz);--q.r},
a4(a,b,c){var s=this.a,r=s.a
if(b!==0||c!==0)r.x=!1
r.y.a4(0,b,c)
s.c.push(new A.zD(b,c))},
cp(a,b,c){var s=c==null?b:c,r=this.a,q=r.a
if(b!==1||s!==1)q.x=!1
q.y.ht(0,b,s,1)
r.c.push(new A.zB(b,s))
return null},
a1(a,b){var s=A.Io(b),r=this.a,q=r.a
q.y.cc(0,new A.be(s))
q.x=q.y.l3(0)
r.c.push(new A.zC(s))},
kp(a,b,c){var s=this.a,r=new A.zq(a,b)
switch(b.a){case 1:s.a.hI(a,r)
break
case 0:break}s.d.c=!0
s.c.push(r)},
zT(a,b){return this.kp(a,B.b0,b)},
hH(a){return this.kp(a,B.b0,!0)},
mW(a,b){var s=this.a,r=new A.zp(a)
s.a.hI(new A.D(a.a,a.b,a.c,a.d),r)
s.d.c=!0
s.c.push(r)},
hG(a){return this.mW(a,!0)},
mV(a,b,c){var s,r=this.a
t.n.a(b)
s=new A.zo(b)
r.a.hI(b.cG(0),s)
r.d.c=!0
r.c.push(s)},
ef(a,b){return this.mV(a,b,!0)},
eP(a){var s,r,q=this.a
t.k.a(a)
a.b=q.e=q.d.c=!0
s=new A.zu(a.a)
r=q.a
r.ij(r.a,s)
q.c.push(s)},
bC(a,b){this.a.bC(a,t.k.a(b))},
by(a,b){this.a.by(a,t.k.a(b))},
dS(a,b,c){this.a.dS(a,b,t.k.a(c))},
dl(a,b,c){var s,r,q,p,o,n=this.a
t.k.a(c)
n.e=n.d.c=!0
s=A.I9(c)
c.b=!0
r=new A.zr(a,b,c.a)
q=b+s
p=a.a
o=a.b
n.a.jp(p-q,o-q,p+q,o+q,r)
n.c.push(r)},
c0(a,b){this.a.c0(a,t.k.a(b))},
eO(a,b,c,d){var s,r,q=this.a
t.k.a(d)
s=q.d
d.b=q.e=s.a=s.c=!0
r=new A.zt(a,b,c,d.a)
q.a.ij(c,r)
q.c.push(r)},
dT(a,b){this.a.dT(a,b)},
eQ(a,b,c,d){var s,r,q=this.a
q.e=q.d.c=!0
s=A.ahO(a.cG(0),c)
r=new A.zz(t.n.a(a),b,c,d)
q.a.ij(s,r)
q.c.push(r)}}
A.tn.prototype={
gdP(){return this.d3$},
bp(a){var s=this.n3("flt-clip"),r=A.aL(self.document,"flt-clip-interior")
this.d3$=r
A.k(r.style,"position","absolute")
r=this.d3$
r.toString
s.append(r)
return s},
zG(a,b){var s
if(b!==B.G){s=a.style
A.k(s,"overflow","hidden")
A.k(s,"z-index","0")}}}
A.qz.prototype={
ew(){var s=this
s.f=s.e.f
if(s.CW!==B.G)s.w=s.cx
else s.w=null
s.r=null},
bp(a){var s=this.vG(0)
A.y(s,"setAttribute",["clip-type","rect"])
return s},
dh(){var s,r=this,q=r.d.style,p=r.cx,o=p.a
A.k(q,"left",A.f(o)+"px")
s=p.b
A.k(q,"top",A.f(s)+"px")
A.k(q,"width",A.f(p.c-o)+"px")
A.k(q,"height",A.f(p.d-s)+"px")
p=r.d
p.toString
r.zG(p,r.CW)
p=r.d3$.style
A.k(p,"left",A.f(-o)+"px")
A.k(p,"top",A.f(-s)+"px")},
aX(a,b){var s=this
s.it(0,b)
if(!s.cx.k(0,b.cx)||s.CW!==b.CW){s.w=null
s.dh()}},
$iK7:1}
A.zJ.prototype={
ew(){var s,r=this
r.f=r.e.f
if(r.cx!==B.G){s=r.CW
r.w=new A.D(s.a,s.b,s.c,s.d)}else r.w=null
r.r=null},
bp(a){var s=this.vG(0)
A.y(s,"setAttribute",["clip-type","rrect"])
return s},
dh(){var s,r=this,q=r.d.style,p=r.CW,o=p.a
A.k(q,"left",A.f(o)+"px")
s=p.b
A.k(q,"top",A.f(s)+"px")
A.k(q,"width",A.f(p.c-o)+"px")
A.k(q,"height",A.f(p.d-s)+"px")
A.k(q,"border-top-left-radius",A.f(p.e)+"px")
A.k(q,"border-top-right-radius",A.f(p.r)+"px")
A.k(q,"border-bottom-right-radius",A.f(p.x)+"px")
A.k(q,"border-bottom-left-radius",A.f(p.z)+"px")
p=r.d
p.toString
r.zG(p,r.cx)
p=r.d3$.style
A.k(p,"left",A.f(-o)+"px")
A.k(p,"top",A.f(-s)+"px")},
aX(a,b){var s=this
s.it(0,b)
if(!s.CW.k(0,b.CW)||s.cx!==b.cx){s.w=null
s.dh()}},
$iK6:1}
A.qy.prototype={
bp(a){return this.n3("flt-clippath")},
ew(){var s=this
s.Fd()
if(s.cx!==B.G){if(s.w==null)s.w=s.CW.cG(0)}else s.w=null},
dh(){var s=this,r=s.cy
if(r!=null)r.remove()
r=s.d
r.toString
r=A.a7S(r,s.CW)
s.cy=r
s.d.append(r)},
aX(a,b){var s,r=this
r.it(0,b)
if(b.CW!==r.CW){r.w=null
s=b.cy
if(s!=null)s.remove()
r.dh()}else r.cy=b.cy
b.cy=null},
fl(){var s=this.cy
if(s!=null)s.remove()
this.cy=null
this.oQ()},
$iK5:1}
A.Vx.prototype={
uY(a,b){var s,r,q,p=self.document.createElementNS("http://www.w3.org/2000/svg","feColorMatrix"),o=p.type
o.toString
o.baseVal=1
o=p.result
o.toString
o.baseVal=b
o=p.values.baseVal
o.toString
for(s=this.b,r=0;r<20;++r){q=s.createSVGNumber()
q.value=a[r]
o.appendItem(q)}this.c.append(p)},
il(a,b,c){var s,r="setAttribute",q=self.document.createElementNS("http://www.w3.org/2000/svg","feFlood")
A.y(q,r,["flood-color",a])
A.y(q,r,["flood-opacity",b])
s=q.result
s.toString
s.baseVal=c
this.c.append(q)},
uX(a,b,c){var s=self.document.createElementNS("http://www.w3.org/2000/svg","feBlend"),r=s.in1
r.toString
r.baseVal=a
r=s.in2
r.toString
r.baseVal=b
r=s.mode
r.toString
r.baseVal=c
this.c.append(s)},
lF(a,b,c,d,e,f,g,h){var s=self.document.createElementNS("http://www.w3.org/2000/svg","feComposite"),r=s.in1
r.toString
r.baseVal=a
r=s.in2
r.toString
r.baseVal=b
r=s.operator
r.toString
r.baseVal=g
if(c!=null){r=s.k1
r.toString
r.baseVal=c}if(d!=null){r=s.k2
r.toString
r.baseVal=d}if(e!=null){r=s.k3
r.toString
r.baseVal=e}if(f!=null){r=s.k4
r.toString
r.baseVal=f}r=s.result
r.toString
r.baseVal=h
this.c.append(s)},
ov(a,b,c,d){return this.lF(a,b,null,null,null,null,c,d)},
aA(){var s=this.b
s.append(this.c)
return new A.Vw(this.a,s)}}
A.Vw.prototype={}
A.KX.prototype={
hI(a,b){throw A.d(A.c1(null))},
hG(a){throw A.d(A.c1(null))},
ef(a,b){throw A.d(A.c1(null))},
eP(a){throw A.d(A.c1(null))},
bC(a,b){var s=this.kP$
s=s.length===0?this.a:B.b.gI(s)
s.append(A.vc(a,b,"draw-rect",this.h8$))},
by(a,b){var s,r=A.vc(new A.D(a.a,a.b,a.c,a.d),b,"draw-rrect",this.h8$)
A.a7J(r.style,a)
s=this.kP$
s=s.length===0?this.a:B.b.gI(s)
s.append(r)},
dl(a,b,c){throw A.d(A.c1(null))},
c0(a,b){throw A.d(A.c1(null))},
eQ(a,b,c,d){throw A.d(A.c1(null))},
eO(a,b,c,d){throw A.d(A.c1(null))},
dT(a,b){var s=A.a7V(a,b,this.h8$),r=this.kP$
r=r.length===0?this.a:B.b.gI(r)
r.append(s)},
j_(){}}
A.qA.prototype={
ew(){var s,r,q=this,p=q.e.f
q.f=p
s=q.CW
if(s!==0||q.cx!==0){p.toString
r=new A.be(new Float32Array(16))
r.aw(p)
q.f=r
r.a4(0,s,q.cx)}q.r=null},
gl5(){var s=this,r=s.cy
if(r==null){r=A.cK()
r.im(-s.CW,-s.cx,0)
s.cy=r}return r},
bp(a){var s=A.aL(self.document,"flt-offset")
A.cg(s,"position","absolute")
A.cg(s,"transform-origin","0 0 0")
return s},
dh(){A.k(this.d.style,"transform","translate("+A.f(this.CW)+"px, "+A.f(this.cx)+"px)")},
aX(a,b){var s=this
s.it(0,b)
if(b.CW!==s.CW||b.cx!==s.cx)s.dh()},
$iQv:1}
A.qB.prototype={
ew(){var s,r,q,p=this,o=p.e.f
p.f=o
s=p.cx
r=s.a
q=s.b
if(r!==0||q!==0){o.toString
s=new A.be(new Float32Array(16))
s.aw(o)
p.f=s
s.a4(0,r,q)}p.r=null},
gl5(){var s,r=this.cy
if(r==null){r=this.cx
s=A.cK()
s.im(-r.a,-r.b,0)
this.cy=s
r=s}return r},
bp(a){var s=A.aL(self.document,"flt-opacity")
A.cg(s,"position","absolute")
A.cg(s,"transform-origin","0 0 0")
return s},
dh(){var s,r=this.d
r.toString
A.cg(r,"opacity",A.f(this.CW/255))
s=this.cx
A.k(r.style,"transform","translate("+A.f(s.a)+"px, "+A.f(s.b)+"px)")},
aX(a,b){var s=this
s.it(0,b)
if(s.CW!==b.CW||!s.cx.k(0,b.cx))s.dh()},
$iQx:1}
A.bh.prototype={
szL(a){var s=this
if(s.b){s.a=s.a.c_(0)
s.b=!1}s.a.a=a},
gc6(a){var s=this.a.b
return s==null?B.a8:s},
sc6(a,b){var s=this
if(s.b){s.a=s.a.c_(0)
s.b=!1}s.a.b=b},
gfJ(){var s=this.a.c
return s==null?0:s},
sfJ(a){var s=this
if(s.b){s.a=s.a.c_(0)
s.b=!1}s.a.c=a},
snx(a){var s=this
if(s.b){s.a=s.a.c_(0)
s.b=!1}s.a.f=!1},
gac(a){var s=this.a.r
return s==null?B.k:s},
sac(a,b){var s,r=this
if(r.b){r.a=r.a.c_(0)
r.b=!1}s=r.a
s.r=A.z(b)===B.HT?b:new A.S(b.gt(b))},
snv(a){},
sv3(a){var s=this
if(s.b){s.a=s.a.c_(0)
s.b=!1}s.a.w=a},
sBF(a){var s=this
if(s.b){s.a=s.a.c_(0)
s.b=!1}s.a.x=a},
shW(a){var s=this
if(s.b){s.a=s.a.c_(0)
s.b=!1}s.a.y=a},
szU(a){var s=this
if(s.b){s.a=s.a.c_(0)
s.b=!1}s.a.z=a},
h(a){var s,r=this,q=""+"Paint(",p=r.a.b,o=p==null
if((o?B.a8:p)===B.D){q+=(o?B.a8:p).h(0)
p=r.a.c
o=p==null
if((o?0:p)!==0)q+=" "+A.f(o?0:p)
else q+=" hairline"
s="; "}else s=""
p=r.a
if(!p.f){q+=s+"antialias off"
s="; "}p=p.r
if(!(p==null?B.k:p).k(0,B.k)){p=r.a.r
q+=s+(p==null?B.k:p).h(0)}q+=")"
return q.charCodeAt(0)==0?q:q}}
A.bo.prototype={
c_(a){var s=this,r=new A.bo()
r.a=s.a
r.y=s.y
r.x=s.x
r.w=s.w
r.f=s.f
r.r=s.r
r.z=s.z
r.c=s.c
r.b=s.b
r.e=s.e
r.d=s.d
return r},
h(a){var s=this.aY(0)
return s}}
A.e1.prototype={
ui(){var s,r,q,p,o,n,m,l,k,j=this,i=A.a([],t.kQ),h=j.I3(0.25),g=B.f.N3(1,h)
i.push(new A.C(j.a,j.b))
if(h===5){s=new A.CW()
j.wh(s)
r=s.a
r.toString
q=s.b
q.toString
p=r.c
if(p===r.e&&r.d===r.f&&q.a===q.c&&q.b===q.d){o=new A.C(p,r.d)
i.push(o)
i.push(o)
i.push(o)
i.push(new A.C(q.e,q.f))
g=2
n=!0}else n=!1}else n=!1
if(!n)A.a1G(j,h,i)
m=2*g+1
k=0
while(!0){if(!(k<m)){l=!1
break}r=i[k]
if(isNaN(r.a)||isNaN(r.b)){l=!0
break}++k}if(l)for(r=m-1,q=j.c,p=j.d,k=1;k<r;++k)i[k]=new A.C(q,p)
return i},
wh(a){var s,r,q=this,p=q.r,o=1/(1+p),n=Math.sqrt(0.5+p*0.5),m=q.c,l=p*m,k=q.d,j=p*k,i=q.a,h=q.e,g=(i+2*l+h)*o*0.5,f=q.b,e=q.f,d=(f+2*j+e)*o*0.5,c=new A.C(g,d)
if(isNaN(g)||isNaN(d)){s=p*2
r=o*0.5
c=new A.C((i+s*m+h)*r,(f+s*k+e)*r)}p=c.a
m=c.b
a.a=new A.e1(i,f,(i+l)*o,(f+j)*o,p,m,n)
a.b=new A.e1(p,m,(h+l)*o,(e+j)*o,h,e,n)},
Os(a){var s=this,r=s.IY()
if(r==null){a.push(s)
return}if(!s.HR(r,a,!0)){a.push(s)
return}},
IY(){var s,r,q=this,p=q.f,o=q.b,n=p-o
p=q.r
s=p*(q.d-o)
r=new A.hJ()
if(r.h9(p*n-n,n-2*s,s)===1)return r.a
return null},
HR(a,a0,a1){var s,r,q,p=this,o=p.a,n=p.b,m=p.r,l=p.c*m,k=p.d*m,j=p.e,i=p.f,h=o+(l-o)*a,g=l+(j-l)*a,f=n+(k-n)*a,e=1+(m-1)*a,d=m+(1-m)*a,c=e+(d-e)*a,b=Math.sqrt(c)
if(Math.abs(b-0)<0.000244140625)return!1
if(Math.abs(e-0)<0.000244140625||Math.abs(c-0)<0.000244140625||Math.abs(d-0)<0.000244140625)return!1
s=(h+(g-h)*a)/c
r=(f+(k+(i-k)*a-f)*a)/c
m=p.b
q=p.f
a0.push(new A.e1(o,m,h/e,r,s,r,e/b))
a0.push(new A.e1(s,r,g/d,r,j,q,d/b))
return!0},
I3(a){var s,r,q,p,o,n,m=this
if(a<0)return 0
s=m.r-1
r=s/(4*(2+s))
q=r*(m.a-2*m.c+m.e)
p=r*(m.b-2*m.d+m.f)
o=Math.sqrt(q*q+p*p)
for(n=0;n<5;++n){if(o<=a)break
o*=0.25}return n},
PB(a){var s,r,q,p,o,n,m,l,k=this
if(!(a===0&&k.a===k.c&&k.b===k.d))s=a===1&&k.c===k.e&&k.d===k.f
else s=!0
if(s)return new A.C(k.e-k.a,k.f-k.b)
s=k.a
r=k.e-s
q=k.f
p=k.b
o=q-p
q=k.r
n=q*(k.c-s)
m=q*(k.d-p)
l=A.a6_(q*r-r,q*o-o,r-n-n,o-m-m,n,m)
return new A.C(l.AK(a),l.AL(a))}}
A.Rn.prototype={}
A.Ki.prototype={}
A.CW.prototype={}
A.Ko.prototype={}
A.mQ.prototype={
yg(){var s=this
s.d=0
s.b=B.ak
s.f=s.e=-1},
wy(a){var s=this
s.b=a.b
s.d=a.d
s.e=a.e
s.f=a.f},
sAO(a){this.b=a},
dw(a){if(this.a.w!==0){this.a=A.a5w()
this.yg()}},
fw(a,b,c){var s=this,r=s.a.fa(0,0)
s.d=r+1
s.a.dD(r,b,c)
s.f=s.e=-1},
xq(){var s,r,q,p,o=this.d
if(o<=0){s=this.a
if(s.d===0){r=0
q=0}else{p=2*(-o-1)
o=s.f
r=o[p]
q=o[p+1]}this.fw(0,r,q)}},
cl(a,b,c){var s,r=this
if(r.d<=0)r.xq()
s=r.a.fa(1,0)
r.a.dD(s,b,c)
r.f=r.e=-1},
dR(a,b,c,d,e){var s,r=this
r.xq()
s=r.a.fa(3,e)
r.a.dD(s,a,b)
r.a.dD(s+1,c,d)
r.f=r.e=-1},
h2(a){var s=this,r=s.a,q=r.w
if(q!==0&&r.r[q-1]!==5)r.fa(5,0)
r=s.d
if(r>=0)s.d=-r
s.f=s.e=-1},
mJ(a){this.mK(a,0,0)},
md(){var s,r=this.a,q=r.w
for(r=r.r,s=0;s<q;++s)switch(r[s]){case 1:case 2:case 3:case 4:return!1}return!0},
mK(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.md(),i=k.md()?b:-1,h=k.a.fa(0,0)
k.d=h+1
s=k.a.fa(1,0)
r=k.a.fa(1,0)
q=k.a.fa(1,0)
k.a.fa(5,0)
p=k.a
o=a.a
n=a.b
m=a.c
l=a.d
if(b===0){p.dD(h,o,n)
k.a.dD(s,m,n)
k.a.dD(r,m,l)
k.a.dD(q,o,l)}else{p.dD(q,o,l)
k.a.dD(r,m,l)
k.a.dD(s,m,n)
k.a.dD(h,o,n)}p=k.a
p.ay=j
p.ch=b===1
p.CW=0
k.f=k.e=-1
k.f=i},
zu(a){this.vR(a,0,0)},
vR(a,b,c){var s,r=this,q=r.md(),p=a.a,o=a.c,n=(p+o)/2,m=a.b,l=a.d,k=(m+l)/2
if(b===0){r.fw(0,o,k)
r.dR(o,l,n,l,0.707106781)
r.dR(p,l,p,k,0.707106781)
r.dR(p,m,n,m,0.707106781)
r.dR(o,m,o,k,0.707106781)}else{r.fw(0,o,k)
r.dR(o,m,n,m,0.707106781)
r.dR(p,m,p,k,0.707106781)
r.dR(p,l,n,l,0.707106781)
r.dR(o,l,o,k,0.707106781)}r.h2(0)
s=r.a
s.at=q
s.ch=b===1
s.CW=0
r.f=r.e=-1
if(q)r.f=b},
eb(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.md(),e=a1.a,d=a1.b,c=a1.c,b=a1.d,a=new A.D(e,d,c,b),a0=a1.e
if(a0===0||a1.f===0)if(a1.r===0||a1.w===0)if(a1.z===0||a1.Q===0)s=a1.x===0||a1.y===0
else s=!1
else s=!1
else s=!1
if(s||e>=c||d>=b)g.mK(a,0,3)
else if(A.aiv(a1))g.vR(a,0,3)
else{r=c-e
q=b-d
p=Math.max(0,a0)
o=Math.max(0,a1.r)
n=Math.max(0,a1.z)
m=Math.max(0,a1.x)
l=Math.max(0,a1.f)
k=Math.max(0,a1.w)
j=Math.max(0,a1.Q)
i=Math.max(0,a1.y)
h=A.a_s(j,i,q,A.a_s(l,k,q,A.a_s(n,m,r,A.a_s(p,o,r,1))))
a0=b-h*j
g.fw(0,e,a0)
g.cl(0,e,d+h*l)
g.dR(e,d,e+h*p,d,0.707106781)
g.cl(0,c-h*o,d)
g.dR(c,d,c,d+h*k,0.707106781)
g.cl(0,c,b-h*i)
g.dR(c,b,c-h*m,b,0.707106781)
g.cl(0,e+h*n,b)
g.dR(e,b,e,a0,0.707106781)
g.h2(0)
g.f=f?0:-1
e=g.a
e.ax=f
e.ch=!1
e.CW=6}},
A(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
if(a3.a.w===0)return!1
s=a3.cG(0)
r=a5.a
q=a5.b
if(r<s.a||q<s.b||r>s.c||q>s.d)return!1
p=a3.a
o=new A.QM(p,r,q,new Float32Array(18))
o.NU()
n=B.cY===a3.b
m=o.d
if((n?m&1:m)!==0)return!0
l=o.e
if(l<=1)return B.bD.GK(l!==0,!1)
p=l&1
if(p!==0||n)return p!==0
k=A.a5v(a3.a,!0)
j=new Float32Array(18)
i=A.a([],t.kQ)
p=k.a
h=!1
do{g=i.length
switch(k.hj(0,j)){case 0:case 5:break
case 1:A.aiY(j,r,q,i)
break
case 2:A.aiZ(j,r,q,i)
break
case 3:f=k.f
A.aiW(j,r,q,p.y[f],i)
break
case 4:A.aiX(j,r,q,i)
break
case 6:h=!0
break}f=i.length
if(f>g){e=f-1
d=i[e]
c=d.a
b=d.b
if(Math.abs(c*c+b*b-0)<0.000244140625)B.b.ex(i,e)
else for(a=0;a<e;++a){a0=i[a]
f=a0.a
a1=a0.b
if(Math.abs(f*b-a1*c-0)<0.000244140625){f=c*f
if(f<0)f=-1
else f=f>0?1:0
if(f<=0){f=b*a1
if(f<0)f=-1
else f=f>0?1:0
f=f<=0}else f=!1}else f=!1
if(f){a2=B.b.ex(i,e)
if(a!==i.length)i[a]=a2
break}}}}while(!h)
return i.length!==0||!1},
c5(a){var s,r=a.a,q=a.b,p=this.a,o=A.adl(p,r,q),n=p.e,m=new Uint8Array(n)
B.A.js(m,0,p.r)
o=new A.mt(o,m)
n=p.x
o.x=n
o.z=p.z
s=p.y
if(s!=null){n=new Float32Array(n)
o.y=n
B.eB.js(n,0,s)}o.e=p.e
o.w=p.w
o.c=p.c
o.d=p.d
n=p.Q
o.Q=n
if(!n){o.a=p.a.a4(0,r,q)
n=p.b
o.b=n==null?null:n.a4(0,r,q)
o.as=p.as}o.cx=p.cx
o.at=p.at
o.ax=p.ax
o.ay=p.ay
o.ch=p.ch
o.CW=p.CW
r=new A.mQ(o,B.ak)
r.wy(this)
return r},
cG(e2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0=this,e1=e0.a
if((e1.ax?e1.CW:-1)===-1)s=(e1.at?e1.CW:-1)!==-1
else s=!0
if(s)return e1.cG(0)
if(!e1.Q&&e1.b!=null){e1=e1.b
e1.toString
return e1}r=new A.kq(e1)
r.jJ(e1)
q=e0.a.f
for(p=!1,o=0,n=0,m=0,l=0,k=0,j=0,i=0,h=0,g=null,f=null,e=null;d=r.RO(),d!==6;){c=r.e
switch(d){case 0:j=q[c]
h=q[c+1]
i=h
k=j
break
case 1:j=q[c+2]
h=q[c+3]
i=h
k=j
break
case 2:if(f==null)f=new A.Rn()
b=c+1
a=q[c]
a0=b+1
a1=q[b]
b=a0+1
a2=q[a0]
a0=b+1
a3=q[b]
a4=q[a0]
a5=q[a0+1]
s=f.a=Math.min(a,a4)
a6=f.b=Math.min(a1,a5)
a7=f.c=Math.max(a,a4)
a8=f.d=Math.max(a1,a5)
a9=a-2*a2+a4
if(Math.abs(a9)>0.000244140625){b0=(a-a2)/a9
if(b0>=0&&b0<=1){b1=1-b0
b2=b1*b1
b3=2*b0*b1
b0*=b0
b4=b2*a+b3*a2+b0*a4
b5=b2*a1+b3*a3+b0*a5
s=Math.min(s,b4)
f.a=s
a7=Math.max(a7,b4)
f.c=a7
a6=Math.min(a6,b5)
f.b=a6
a8=Math.max(a8,b5)
f.d=a8}}a9=a1-2*a3+a5
if(Math.abs(a9)>0.000244140625){b6=(a1-a3)/a9
if(b6>=0&&b6<=1){b7=1-b6
b2=b7*b7
b3=2*b6*b7
b6*=b6
b8=b2*a+b3*a2+b6*a4
b9=b2*a1+b3*a3+b6*a5
s=Math.min(s,b8)
f.a=s
a7=Math.max(a7,b8)
f.c=a7
a6=Math.min(a6,b9)
f.b=a6
a8=Math.max(a8,b9)
f.d=a8}h=a8
j=a7
i=a6
k=s}else{h=a8
j=a7
i=a6
k=s}break
case 3:if(e==null)e=new A.Ki()
s=e1.y[r.b]
b=c+1
a=q[c]
a0=b+1
a1=q[b]
b=a0+1
a2=q[a0]
a0=b+1
a3=q[b]
a4=q[a0]
a5=q[a0+1]
e.a=Math.min(a,a4)
e.b=Math.min(a1,a5)
e.c=Math.max(a,a4)
e.d=Math.max(a1,a5)
c0=new A.hJ()
c1=a4-a
c2=s*(a2-a)
if(c0.h9(s*c1-c1,c1-2*c2,c2)!==0){a6=c0.a
a6.toString
if(a6>=0&&a6<=1){c3=2*(s-1)
a9=(-c3*a6+c3)*a6+1
c4=a2*s
b4=(((a4-2*c4+a)*a6+2*(c4-a))*a6+a)/a9
c4=a3*s
b5=(((a5-2*c4+a1)*a6+2*(c4-a1))*a6+a1)/a9
e.a=Math.min(e.a,b4)
e.c=Math.max(e.c,b4)
e.b=Math.min(e.b,b5)
e.d=Math.max(e.d,b5)}}c5=a5-a1
c6=s*(a3-a1)
if(c0.h9(s*c5-c5,c5-2*c6,c6)!==0){a6=c0.a
a6.toString
if(a6>=0&&a6<=1){c3=2*(s-1)
a9=(-c3*a6+c3)*a6+1
c4=a2*s
b8=(((a4-2*c4+a)*a6+2*(c4-a))*a6+a)/a9
c4=a3*s
b9=(((a5-2*c4+a1)*a6+2*(c4-a1))*a6+a1)/a9
e.a=Math.min(e.a,b8)
e.c=Math.max(e.c,b8)
e.b=Math.min(e.b,b9)
e.d=Math.max(e.d,b9)}}k=e.a
i=e.b
j=e.c
h=e.d
break
case 4:if(g==null)g=new A.Ko()
b=c+1
c7=q[c]
a0=b+1
c8=q[b]
b=a0+1
c9=q[a0]
a0=b+1
d0=q[b]
b=a0+1
d1=q[a0]
a0=b+1
d2=q[b]
d3=q[a0]
d4=q[a0+1]
s=Math.min(c7,d3)
g.a=s
g.c=Math.min(c8,d4)
a6=Math.max(c7,d3)
g.b=a6
g.d=Math.max(c8,d4)
if(!(c7<c9&&c9<d1&&d1<d3))a7=c7>c9&&c9>d1&&d1>d3
else a7=!0
if(!a7){a7=-c7
d5=a7+3*(c9-d1)+d3
d6=2*(c7-2*c9+d1)
d7=d6*d6-4*d5*(a7+c9)
if(d7>=0&&Math.abs(d5)>0.000244140625){a7=-d6
a8=2*d5
if(d7===0){d8=a7/a8
b1=1-d8
if(d8>=0&&d8<=1){a7=3*b1
b4=b1*b1*b1*c7+a7*b1*d8*c9+a7*d8*d8*d1+d8*d8*d8*d3
g.a=Math.min(b4,s)
g.b=Math.max(b4,a6)}}else{d7=Math.sqrt(d7)
d8=(a7-d7)/a8
b1=1-d8
if(d8>=0&&d8<=1){s=3*b1
b4=b1*b1*b1*c7+s*b1*d8*c9+s*d8*d8*d1+d8*d8*d8*d3
g.a=Math.min(b4,g.a)
g.b=Math.max(b4,g.b)}d8=(a7+d7)/a8
b1=1-d8
if(d8>=0&&d8<=1){s=3*b1
b4=b1*b1*b1*c7+s*b1*d8*c9+s*d8*d8*d1+d8*d8*d8*d3
g.a=Math.min(b4,g.a)
g.b=Math.max(b4,g.b)}}}}if(!(c8<d0&&d0<d2&&d2<d4))s=c8>d0&&d0>d2&&d2>d4
else s=!0
if(!s){s=-c8
d5=s+3*(d0-d2)+d4
d6=2*(c8-2*d0+d2)
d7=d6*d6-4*d5*(s+d0)
if(d7>=0&&Math.abs(d5)>0.000244140625){s=-d6
a6=2*d5
if(d7===0){d8=s/a6
b1=1-d8
if(d8>=0&&d8<=1){s=3*b1
b5=b1*b1*b1*c8+s*b1*d8*d0+s*d8*d8*d2+d8*d8*d8*d4
g.c=Math.min(b5,g.c)
g.d=Math.max(b5,g.d)}}else{d7=Math.sqrt(d7)
d8=(s-d7)/a6
b1=1-d8
if(d8>=0&&d8<=1){a7=3*b1
b5=b1*b1*b1*c8+a7*b1*d8*d0+a7*d8*d8*d2+d8*d8*d8*d4
g.c=Math.min(b5,g.c)
g.d=Math.max(b5,g.d)}s=(s+d7)/a6
b7=1-s
if(s>=0&&s<=1){a6=3*b7
b5=b7*b7*b7*c8+a6*b7*s*d0+a6*s*s*d2+s*s*s*d4
g.c=Math.min(b5,g.c)
g.d=Math.max(b5,g.d)}}}}k=g.a
i=g.c
j=g.b
h=g.d
break}if(!p){l=h
m=j
n=i
o=k
p=!0}else{o=Math.min(o,k)
m=Math.max(m,j)
n=Math.min(n,i)
l=Math.max(l,h)}}d9=p?new A.D(o,n,m,l):B.x
e0.a.cG(0)
return e0.a.b=d9},
h(a){var s=this.aY(0)
return s}}
A.QL.prototype={
pa(a){var s=this,r=s.r,q=s.x
if(r!==q||s.w!==s.y){if(isNaN(r)||isNaN(s.w)||isNaN(q)||isNaN(s.y))return 5
a[0]=r
a[1]=s.w
a[2]=q
r=s.y
a[3]=r
s.r=q
s.w=r
return 1}else{a[0]=q
a[1]=s.y
return 5}},
lX(){var s,r,q=this
if(q.e===1){q.e=2
return new A.C(q.x,q.y)}s=q.a.f
r=q.Q
return new A.C(s[r-2],s[r-1])},
hj(a,b){var s,r,q,p,o,n,m=this,l=m.z,k=m.a
if(l===k.w){if(m.d&&m.e===2){if(1===m.pa(b))return 1
m.d=!1
return 5}return 6}s=m.z=l+1
r=k.r[l]
switch(r){case 0:if(m.d){m.z=s-1
q=m.pa(b)
if(q===5)m.d=!1
return q}if(s===m.c)return 6
l=k.f
k=m.Q
s=m.Q=k+1
p=l[k]
m.Q=s+1
o=l[s]
m.x=p
m.y=o
b[0]=p
b[1]=o
m.e=1
m.r=p
m.w=o
m.d=!0
break
case 1:n=m.lX()
l=k.f
k=m.Q
s=m.Q=k+1
p=l[k]
m.Q=s+1
o=l[s]
b[0]=n.a
b[1]=n.b
b[2]=p
b[3]=o
m.r=p
m.w=o
break
case 3:++m.f
n=m.lX()
b[0]=n.a
b[1]=n.b
l=k.f
k=m.Q
s=m.Q=k+1
b[2]=l[k]
k=m.Q=s+1
b[3]=l[s]
s=m.Q=k+1
k=l[k]
b[4]=k
m.r=k
m.Q=s+1
s=l[s]
b[5]=s
m.w=s
break
case 2:n=m.lX()
b[0]=n.a
b[1]=n.b
l=k.f
k=m.Q
s=m.Q=k+1
b[2]=l[k]
k=m.Q=s+1
b[3]=l[s]
s=m.Q=k+1
k=l[k]
b[4]=k
m.r=k
m.Q=s+1
s=l[s]
b[5]=s
m.w=s
break
case 4:n=m.lX()
b[0]=n.a
b[1]=n.b
l=k.f
k=m.Q
s=m.Q=k+1
b[2]=l[k]
k=m.Q=s+1
b[3]=l[s]
s=m.Q=k+1
b[4]=l[k]
k=m.Q=s+1
b[5]=l[s]
s=m.Q=k+1
k=l[k]
b[6]=k
m.r=k
m.Q=s+1
s=l[s]
b[7]=s
m.w=s
break
case 5:r=m.pa(b)
if(r===1)--m.z
else{m.d=!1
m.e=0}m.r=m.x
m.w=m.y
break
case 6:break
default:throw A.d(A.bK("Unsupport Path verb "+r,null,null))}return r}}
A.mt.prototype={
dD(a,b,c){var s=a*2,r=this.f
r[s]=b
r[s+1]=c},
dO(a){var s=this.f,r=a*2
return new A.C(s[r],s[r+1])},
uJ(){var s=this
if(s.ay)return new A.D(s.dO(0).a,s.dO(0).b,s.dO(1).a,s.dO(2).b)
else return s.w===4?s.Ir():null},
cG(a){var s
if(this.Q)this.pp()
s=this.a
s.toString
return s},
Ir(){var s,r,q,p,o,n,m=this,l=null,k=m.dO(0).a,j=m.dO(0).b,i=m.dO(1).a,h=m.dO(1).b
if(m.r[1]!==1||h!==j)return l
s=i-k
r=m.dO(2).a
q=m.dO(2).b
if(m.r[2]!==1||r!==i)return l
p=q-h
o=m.dO(3)
n=m.dO(3).b
if(m.r[3]!==1||n!==q)return l
if(r-o.a!==s||n-j!==p)return l
return new A.D(k,j,k+s,j+p)},
Dg(){var s,r,q,p,o
if(this.w===2){s=this.r
s=s[0]!==0||s[1]!==1}else s=!0
if(s)return null
s=this.f
r=s[0]
q=s[1]
p=s[2]
o=s[3]
if(q===o||r===p)return new A.D(r,q,p,o)
return null},
x0(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.cG(0),f=A.a([],t.c0),e=new A.kq(this)
e.jJ(this)
s=new Float32Array(8)
e.hj(0,s)
for(r=0;q=e.hj(0,s),q!==6;)if(3===q){p=s[2]
o=s[3]
n=p-s[0]
m=o-s[1]
l=s[4]
k=s[5]
if(n!==0){j=Math.abs(n)
i=Math.abs(k-o)}else{i=Math.abs(m)
j=m!==0?Math.abs(l-p):Math.abs(n)}f.push(new A.bD(j,i));++r}l=f[0]
k=f[1]
h=f[2]
return A.Ro(g,f[3],h,l,k)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.N(b)!==A.z(this))return!1
return b instanceof A.mt&&this.PA(b)},
gq(a){var s=this
return A.L(s.cx,s.f,s.y,s.r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
PA(a){var s,r,q,p,o,n,m,l=this
if(l.cx!==a.cx)return!1
s=l.d
if(s!==a.d)return!1
r=s*2
for(q=l.f,p=a.f,o=0;o<r;++o)if(q[o]!==p[o])return!1
q=l.y
if(q==null){if(a.y!=null)return!1}else{p=a.y
if(p==null)return!1
n=q.length
if(p.length!==n)return!1
for(o=0;o<n;++o)if(q[o]!==p[o])return!1}m=l.w
if(m!==a.w)return!1
for(q=l.r,p=a.r,o=0;o<m;++o)if(q[o]!==p[o])return!1
return!0},
MH(a){var s,r,q=this
if(a>q.c){s=a+10
q.c=s
r=new Float32Array(s*2)
B.eB.js(r,0,q.f)
q.f=r}q.d=a},
MI(a){var s,r,q=this
if(a>q.e){s=a+8
q.e=s
r=new Uint8Array(s)
B.A.js(r,0,q.r)
q.r=r}q.w=a},
MG(a){var s,r,q=this
if(a>q.x){s=a+4
q.x=s
r=new Float32Array(s)
s=q.y
if(s!=null)B.eB.js(r,0,s)
q.y=r}q.z=a},
pp(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.d
i.Q=!1
i.b=null
if(h===0){i.a=B.x
i.as=!0}else{s=i.f
r=s[0]
q=s[1]
p=0*r*q
o=2*h
for(n=q,m=r,l=2;l<o;l+=2){k=s[l]
j=s[l+1]
p=p*k*j
m=Math.min(m,k)
n=Math.min(n,j)
r=Math.max(r,k)
q=Math.max(q,j)}if(p*0===0){i.a=new A.D(m,n,r,q)
i.as=!0}else{i.a=B.x
i.as=!1}}},
fa(a,b){var s,r,q,p,o,n=this
switch(a){case 0:s=1
r=0
break
case 1:s=1
r=1
break
case 2:s=2
r=2
break
case 3:s=2
r=4
break
case 4:s=3
r=8
break
case 5:s=0
r=0
break
case 6:s=0
r=0
break
default:s=0
r=0
break}n.cx|=r
n.Q=!0
n.DX()
q=n.w
n.MI(q+1)
n.r[q]=a
if(3===a){p=n.z
n.MG(p+1)
n.y[p]=b}o=n.d
n.MH(o+s)
return o},
DX(){var s=this
s.ay=s.ax=s.at=!1
s.b=null
s.Q=!0}}
A.kq.prototype={
jJ(a){var s
this.d=0
s=this.a
if(s.Q)s.pp()
if(!s.as)this.c=s.w},
RO(){var s,r=this,q=r.c,p=r.a
if(q===p.w)return 6
p=p.r
r.c=q+1
s=p[q]
switch(s){case 0:q=r.d
r.e=q
r.d=q+2
break
case 1:q=r.d
r.e=q-2
r.d=q+2
break
case 3:++r.b
q=r.d
r.e=q-2
r.d=q+4
break
case 2:q=r.d
r.e=q-2
r.d=q+4
break
case 4:q=r.d
r.e=q-2
r.d=q+6
break
case 5:break
case 6:break
default:throw A.d(A.bK("Unsupport Path verb "+s,null,null))}return s},
hj(a,b){var s,r,q,p,o,n=this,m=n.c,l=n.a
if(m===l.w)return 6
s=l.r
n.c=m+1
r=s[m]
q=l.f
p=n.d
switch(r){case 0:o=p+1
b[0]=q[p]
p=o+1
b[1]=q[o]
break
case 1:b[0]=q[p-2]
b[1]=q[p-1]
o=p+1
b[2]=q[p]
p=o+1
b[3]=q[o]
break
case 3:++n.b
b[0]=q[p-2]
b[1]=q[p-1]
o=p+1
b[2]=q[p]
p=o+1
b[3]=q[o]
o=p+1
b[4]=q[p]
p=o+1
b[5]=q[o]
break
case 2:b[0]=q[p-2]
b[1]=q[p-1]
o=p+1
b[2]=q[p]
p=o+1
b[3]=q[o]
o=p+1
b[4]=q[p]
p=o+1
b[5]=q[o]
break
case 4:b[0]=q[p-2]
b[1]=q[p-1]
o=p+1
b[2]=q[p]
p=o+1
b[3]=q[o]
o=p+1
b[4]=q[p]
p=o+1
b[5]=q[o]
o=p+1
b[6]=q[p]
p=o+1
b[7]=q[o]
break
case 5:break
case 6:break
default:throw A.d(A.bK("Unsupport Path verb "+r,null,null))}n.d=p
return r}}
A.hJ.prototype={
h9(a,b,c){var s,r,q,p,o,n,m,l=this
if(a===0){s=A.Iq(-c,b)
l.a=s
return s==null?0:1}r=b*b-4*a*c
if(r<0)return 0
r=Math.sqrt(r)
if(!isFinite(r))return 0
q=b<0?-(b-r)/2:-(b+r)/2
p=A.Iq(q,a)
if(p!=null){l.a=p
o=1}else o=0
p=A.Iq(c,q)
if(p!=null){n=o+1
if(o===0)l.a=p
else l.b=p
o=n}if(o===2){s=l.a
s.toString
m=l.b
m.toString
if(s>m){l.a=m
l.b=s}else if(s===m)return 1}return o}}
A.Uu.prototype={
AK(a){return(this.a*a+this.c)*a+this.e},
AL(a){return(this.b*a+this.d)*a+this.f}}
A.QM.prototype={
NU(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=A.a5v(d,!0)
for(s=e.f,r=t.wd;q=c.hj(0,s),q!==6;)switch(q){case 0:case 5:break
case 1:e.I1()
break
case 2:p=!A.a5x(s)?A.adm(s):0
o=e.wt(s[0],s[1],s[2],s[3],s[4],s[5])
e.d+=p>0?o+e.wt(s[4],s[5],s[6],s[7],s[8],s[9]):o
break
case 3:n=d.y[c.f]
m=s[0]
l=s[1]
k=s[2]
j=s[3]
i=s[4]
h=s[5]
g=A.a5x(s)
f=A.a([],r)
new A.e1(m,l,k,j,i,h,n).Os(f)
e.ws(f[0])
if(!g&&f.length===2)e.ws(f[1])
break
case 4:e.I_()
break}},
I1(){var s,r,q,p,o,n=this,m=n.f,l=m[0],k=m[1],j=m[2],i=m[3]
if(k>i){s=k
r=i
q=-1}else{s=i
r=k
q=1}m=n.c
if(m<r||m>s)return
p=n.b
if(A.QN(p,m,l,k,j,i)){++n.e
return}if(m===s)return
o=(j-l)*(m-k)-(i-k)*(p-l)
if(o===0){if(p!==j||m!==i)++n.e
q=0}else if(A.ae8(o)===q)q=0
n.d+=q},
wt(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this
if(b>f){s=b
r=f
q=-1}else{s=f
r=b
q=1}p=k.c
if(p<r||p>s)return 0
o=k.b
if(A.QN(o,p,a,b,e,f)){++k.e
return 0}if(p===s)return 0
n=new A.hJ()
if(0===n.h9(b-2*d+f,2*(d-b),b-p))m=q===1?a:e
else{l=n.a
l.toString
m=((e-2*c+a)*l+2*(c-a))*l+a}if(Math.abs(m-o)<0.000244140625)if(o!==e||p!==f){++k.e
return 0}return m<o?q:0},
ws(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.b,f=a.f
if(g>f){s=g
r=f
q=-1}else{s=f
r=g
q=1}p=h.c
if(p<r||p>s)return
o=h.b
n=a.a
m=a.e
if(A.QN(o,p,n,g,m,f)){++h.e
return}if(p===s)return
l=a.r
k=a.d*l-p*l+p
j=new A.hJ()
if(0===j.h9(f+(g-2*k),2*(k-g),g-p))n=q===1?n:m
else{i=j.a
i.toString
n=A.abo(n,a.c,m,l,i)/A.abn(l,i)}if(Math.abs(n-o)<0.000244140625)if(o!==m||p!==a.f){++h.e
return}p=h.d
h.d=p+(n<o?q:0)},
I_(){var s,r=this.f,q=A.a7M(r,r)
for(s=0;s<=q;++s)this.NV(s*3*2)},
NV(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.f,e=a0+1,d=f[a0],c=e+1,b=f[e],a=f[c]
e=c+1+1
s=f[e]
e=e+1+1
r=f[e]
q=f[e+1]
if(b>q){p=b
o=q
n=-1}else{p=q
o=b
n=1}m=g.c
if(m<o||m>p)return
l=g.b
if(A.QN(l,m,d,b,r,q)){++g.e
return}if(m===p)return
k=Math.min(d,Math.min(a,Math.min(s,r)))
j=Math.max(d,Math.max(a,Math.max(s,r)))
if(l<k)return
if(l>j){g.d+=n
return}i=A.a7N(f,a0,m)
if(i==null)return
h=A.a7Y(d,a,s,r,i)
if(Math.abs(h-l)<0.000244140625)if(l!==r||m!==q){++g.e
return}f=g.d
g.d=f+(h<l?n:0)}}
A.iS.prototype={
S2(){return this.b.$0()}}
A.zM.prototype={
bp(a){var s=this.n3("flt-picture")
A.y(s,"setAttribute",["aria-hidden","true"])
return s},
lg(a){this.vw(a)},
ew(){var s,r,q,p,o,n=this,m=n.e.f
n.f=m
s=n.CW
if(s!==0||n.cx!==0){m.toString
r=new A.be(new Float32Array(16))
r.aw(m)
n.f=r
r.a4(0,s,n.cx)}m=n.db
q=m.c-m.a
p=m.d-m.b
o=q===0||p===0?1:A.agl(n.f,q,p)
if(o!==n.dy){n.dy=o
n.fr=!0}n.I0()},
I0(){var s,r,q,p,o,n,m=this,l=m.e
if(l.r==null){s=A.cK()
for(r=null;l!=null;){q=l.w
if(q!=null)r=r==null?A.a3x(s,q):r.d5(A.a3x(s,q))
p=l.gl5()
if(p!=null&&!p.l3(0))s.cc(0,p)
l=l.e}if(r!=null)o=r.c-r.a<=0||r.d-r.b<=0
else o=!1
if(o)r=B.x
o=m.e
o.r=r}else o=l
o=o.r
n=m.db
if(o==null){m.id=n
o=n}else o=m.id=n.d5(o)
if(o.c-o.a<=0||o.d-o.b<=0)m.go=m.id=B.x},
pr(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a==null||!a.cy.b.e){h.fy=h.id
h.fr=!0
return}s=a===h?h.fy:a.fy
if(J.e(h.id,B.x)){h.fy=B.x
if(!J.e(s,B.x))h.fr=!0
return}s.toString
r=h.id
r.toString
if(A.a8n(s,r)){h.fy=s
return}q=r.a
p=r.b
o=r.c
r=r.d
n=o-q
m=A.QQ(s.a-q,n)
l=r-p
k=A.QQ(s.b-p,l)
n=A.QQ(o-s.c,n)
l=A.QQ(r-s.d,l)
j=h.db
j.toString
i=new A.D(q-m,p-k,o+n,r+l).d5(j)
h.fr=!J.e(h.fy,i)
h.fy=i},
lT(a){var s,r,q,p=this,o=a==null,n=o?null:a.ch
p.fr=!1
s=p.cy.b
if(s.e){r=p.fy
r=r.gK(r)}else r=!0
if(r){A.Ib(n)
if(!o)a.ch=null
o=p.d
if(o!=null)A.a3q(o)
o=p.ch
if(o!=null&&o!==n)A.Ib(o)
p.ch=null
return}if(s.d.c)p.Hg(n)
else{A.Ib(p.ch)
o=p.d
o.toString
q=p.ch=new A.KX(o,A.a([],t.ea),A.a([],t.J),A.cK())
o=p.d
o.toString
A.a3q(o)
o=p.fy
o.toString
s.r3(q,o)
q.j_()}},
tp(a){var s,r,q,p,o=this,n=a.cy,m=o.cy
if(n===m)return 0
n=n.b
if(!n.e)return 1
s=n.d.c
r=m.b.d.c
if(s!==r)return 1
else if(!r)return 1
else{q=t.jz.a(a.ch)
if(q==null)return 1
else{n=o.id
n.toString
if(!q.Aw(n,o.dy))return 1
else{n=o.id
n=A.Jn(n.c-n.a)
m=o.id
m=A.Jm(m.d-m.b)
p=q.r*q.w
if(p===0)return 1
return 1-n*m/p}}}},
Hg(a){var s,r,q=this
if(a instanceof A.hj){s=q.fy
s.toString
s=a.Aw(s,q.dy)&&a.y===A.aw()}else s=!1
if(s){s=q.fy
s.toString
a.sr9(0,s)
q.ch=a
a.b=q.fx
a.H(0)
s=q.cy.b
s.toString
r=q.fy
r.toString
s.r3(a,r)
a.j_()}else{A.Ib(a)
s=q.ch
if(s instanceof A.hj)s.b=null
q.ch=null
s=$.a11
r=q.fy
s.push(new A.iS(new A.a2(r.c-r.a,r.d-r.b),new A.QP(q)))}},
IX(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=a0.c-a0.a,a=a0.d-a0.b
for(s=b+1,r=a+1,q=b*a,p=q>1,o=null,n=1/0,m=0;m<$.i7.length;++m){l=$.i7[m]
k=self.window.devicePixelRatio
if(k===0)k=1
if(l.y!==k)continue
k=l.a
j=k.c-k.a
k=k.d-k.b
i=j*k
h=c.dy
g=self.window.devicePixelRatio
if(l.r>=B.d.cv(s*(g===0?1:g))+2){g=self.window.devicePixelRatio
f=l.w>=B.d.cv(r*(g===0?1:g))+2&&l.ay===h}else f=!1
e=i<n
if(f&&e)if(!(e&&p&&i/q>4)){if(j===b&&k===a){o=l
break}n=i
o=l}}if(o!=null){B.b.u($.i7,o)
o.sr9(0,a0)
o.b=c.fx
return o}d=A.aaR(a0,c.cy.b.d,c.dy)
d.b=c.fx
return d},
w3(){A.k(this.d.style,"transform","translate("+A.f(this.CW)+"px, "+A.f(this.cx)+"px)")},
dh(){this.w3()
this.lT(null)},
aA(){this.pr(null)
this.fr=!0
this.vu()},
aX(a,b){var s,r,q=this
q.vy(0,b)
q.fx=b.fx
if(b!==q)b.fx=null
if(q.CW!==b.CW||q.cx!==b.cx)q.w3()
q.pr(b)
if(q.cy===b.cy){s=q.ch
r=s instanceof A.hj&&q.dy!==s.ay
if(q.fr||r)q.lT(b)
else q.ch=b.ch}else q.lT(b)},
ho(){var s=this
s.vx()
s.pr(s)
if(s.fr)s.lT(s)},
fl(){A.Ib(this.ch)
this.ch=null
this.vv()}}
A.QP.prototype={
$0(){var s,r=this.a,q=r.fy
q.toString
s=r.ch=r.IX(q)
s.b=r.fx
q=r.d
q.toString
A.a3q(q)
r.d.append(s.c)
s.H(0)
q=r.cy.b
q.toString
r=r.fy
r.toString
q.r3(s,r)
s.j_()},
$S:0}
A.RA.prototype={
r3(a,b){var s,r,q,p,o,n,m,l,k,j
try{m=this.b
m.toString
m=A.a8n(b,m)
l=this.c
k=l.length
if(m){s=k
for(r=0;r<s;++r)l[r].az(a)}else{q=k
for(p=0;p<q;++p){o=l[p]
if(o instanceof A.p4)if(o.Rd(b))continue
o.az(a)}}}catch(j){n=A.ae(j)
if(!J.e(n.name,"NS_ERROR_FAILURE"))throw j}},
bC(a,b){var s,r,q=this,p=b.a
if(p.w!=null)q.d.c=!0
q.e=!0
s=A.I9(b)
b.b=!0
r=new A.zy(a,p)
p=q.a
if(s!==0)p.ij(a.bA(s),r)
else p.ij(a,r)
q.c.push(r)},
by(a,b){var s,r,q,p,o,n,m,l,k=this,j=b.a
if(j.w!=null||!a.as)k.d.c=!0
k.e=!0
s=A.I9(b)
r=a.a
q=a.c
p=Math.min(r,q)
o=a.b
n=a.d
m=Math.min(o,n)
q=Math.max(r,q)
n=Math.max(o,n)
b.b=!0
l=new A.zx(a,j)
k.a.jp(p-s,m-s,q+s,n+s,l)
k.c.push(l)},
dS(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=new A.D(a4.a,a4.b,a4.c,a4.d),b=a3.a,a=a3.b,a0=a3.c,a1=a3.d,a2=new A.D(b,a,a0,a1)
if(a2.k(0,c)||!a2.d5(c).k(0,c))return
s=a3.lC()
r=a4.lC()
q=A.ld(s.e,s.f)
p=A.ld(s.r,s.w)
o=A.ld(s.z,s.Q)
n=A.ld(s.x,s.y)
m=A.ld(r.e,r.f)
l=A.ld(r.r,r.w)
k=A.ld(r.z,r.Q)
j=A.ld(r.x,r.y)
if(m>q||l>p||k>o||j>n)return
d.e=d.d.c=!0
i=A.I9(a5)
a5.b=!0
h=new A.zs(a3,a4,a5.a)
g=A.dR()
g.sAO(B.cY)
g.eb(a3)
g.eb(a4)
g.h2(0)
h.x=g
f=Math.min(b,a0)
e=Math.max(b,a0)
d.a.jp(f-i,Math.min(a,a1)-i,e+i,Math.max(a,a1)+i,h)
d.c.push(h)},
c0(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b.a.w==null){t.n.a(a)
s=a.a.uJ()
if(s!=null){j.bC(s,b)
return}r=a.a
q=r.ax?r.x0():null
if(q!=null){j.by(q,b)
return}}t.n.a(a)
if(a.a.w!==0){j.e=j.d.c=!0
p=a.cG(0)
o=A.I9(b)
if(o!==0)p=p.bA(o)
r=a.a
n=new A.mt(r.f,r.r)
n.e=r.e
n.w=r.w
n.c=r.c
n.d=r.d
n.x=r.x
n.z=r.z
n.y=r.y
m=r.Q
n.Q=m
if(!m){n.a=r.a
n.b=r.b
n.as=r.as}n.cx=r.cx
n.at=r.at
n.ax=r.ax
n.ay=r.ay
n.ch=r.ch
n.CW=r.CW
l=new A.mQ(n,B.ak)
l.wy(a)
b.b=!0
k=new A.zw(l,b.a)
j.a.ij(p,k)
l.b=a.b
j.c.push(k)}},
dT(a,b){var s,r,q,p,o=this
t.sk.a(a)
if(!a.f)return
o.e=!0
s=o.d
s.c=!0
s.b=!0
r=new A.zv(a,b)
q=a.gdf().Q
s=b.a
p=b.b
o.a.jp(s+q.a,p+q.b,s+q.c,p+q.d,r)
o.c.push(r)}}
A.ce.prototype={}
A.p4.prototype={
Rd(a){var s=this
if(s.a)return!0
return s.e<a.b||s.c>a.d||s.d<a.a||s.b>a.c}}
A.qu.prototype={
az(a){a.bf(0)},
h(a){var s=this.aY(0)
return s}}
A.zA.prototype={
az(a){a.aV(0)},
h(a){var s=this.aY(0)
return s}}
A.zD.prototype={
az(a){a.a4(0,this.a,this.b)},
h(a){var s=this.aY(0)
return s}}
A.zB.prototype={
az(a){a.cp(0,this.a,this.b)},
h(a){var s=this.aY(0)
return s}}
A.zC.prototype={
az(a){a.a1(0,this.a)},
h(a){var s=this.aY(0)
return s}}
A.zq.prototype={
az(a){a.hI(this.f,this.r)},
h(a){var s=this.aY(0)
return s}}
A.zp.prototype={
az(a){a.hG(this.f)},
h(a){var s=this.aY(0)
return s}}
A.zo.prototype={
az(a){a.ef(0,this.f)},
h(a){var s=this.aY(0)
return s}}
A.zu.prototype={
az(a){a.eP(this.f)},
h(a){var s=this.aY(0)
return s}}
A.zy.prototype={
az(a){a.bC(this.f,this.r)},
h(a){var s=this.aY(0)
return s}}
A.zx.prototype={
az(a){a.by(this.f,this.r)},
h(a){var s=this.aY(0)
return s}}
A.zs.prototype={
az(a){var s=this.w
if(s.b==null)s.b=B.a8
a.c0(this.x,s)},
h(a){var s=this.aY(0)
return s}}
A.zr.prototype={
az(a){a.dl(this.f,this.r,this.w)},
h(a){var s=this.aY(0)
return s}}
A.zw.prototype={
az(a){a.c0(this.f,this.r)},
h(a){var s=this.aY(0)
return s}}
A.zz.prototype={
az(a){var s=this
a.eQ(s.f,s.r,s.w,s.x)},
h(a){var s=this.aY(0)
return s}}
A.zt.prototype={
az(a){var s=this
a.eO(s.f,s.r,s.w,s.x)},
h(a){var s=this.aY(0)
return s}}
A.zv.prototype={
az(a){a.dT(this.f,this.r)},
h(a){var s=this.aY(0)
return s}}
A.YS.prototype={
hI(a,b){var s,r,q,p,o=this,n=a.a,m=a.b,l=a.c,k=a.d
if(!o.x){s=$.a3I()
s[0]=n
s[1]=m
s[2]=l
s[3]=k
A.a3w(o.y,s)
n=s[0]
m=s[1]
l=s[2]
k=s[3]}if(!o.z){o.Q=n
o.as=m
o.at=l
o.ax=k
o.z=!0
r=k
q=l
p=m
s=n}else{s=o.Q
if(n>s){o.Q=n
s=n}p=o.as
if(m>p){o.as=m
p=m}q=o.at
if(l<q){o.at=l
q=l}r=o.ax
if(k<r){o.ax=k
r=k}}if(s>=q||p>=r)b.a=!0
else{b.b=s
b.c=p
b.d=q
b.e=r}},
ij(a,b){this.jp(a.a,a.b,a.c,a.d,b)},
jp(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this
if(a===c||b===d){e.a=!0
return}if(!j.x){s=$.a3I()
s[0]=a
s[1]=b
s[2]=c
s[3]=d
A.a3w(j.y,s)
r=s[0]
q=s[1]
p=s[2]
o=s[3]}else{o=d
p=c
q=b
r=a}if(j.z){n=j.at
if(r>=n){e.a=!0
return}m=j.Q
if(p<=m){e.a=!0
return}l=j.ax
if(q>=l){e.a=!0
return}k=j.as
if(o<=k){e.a=!0
return}if(r<m)r=m
if(p>n)p=n
if(q<k)q=k
if(o>l)o=l}e.b=r
e.c=q
e.d=p
e.e=o
if(j.b){j.c=Math.min(Math.min(j.c,r),p)
j.e=Math.max(Math.max(j.e,r),p)
j.d=Math.min(Math.min(j.d,q),o)
j.f=Math.max(Math.max(j.f,q),o)}else{j.c=Math.min(r,p)
j.e=Math.max(r,p)
j.d=Math.min(q,o)
j.f=Math.max(q,o)}j.b=!0},
uO(){var s=this,r=s.y,q=new A.be(new Float32Array(16))
q.aw(r)
s.r.push(q)
r=s.z?new A.D(s.Q,s.as,s.at,s.ax):null
s.w.push(r)},
OG(){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.b)return B.x
s=i.a
r=s.a
if(isNaN(r))r=-1/0
q=s.c
if(isNaN(q))q=1/0
p=s.b
if(isNaN(p))p=-1/0
o=s.d
if(isNaN(o))o=1/0
s=i.c
n=i.e
m=Math.min(s,n)
l=Math.max(s,n)
n=i.d
s=i.f
k=Math.min(n,s)
j=Math.max(n,s)
if(l<r||j<p)return B.x
return new A.D(Math.max(m,r),Math.max(k,p),Math.min(l,q),Math.min(j,o))},
h(a){var s=this.aY(0)
return s}}
A.RY.prototype={}
A.mR.prototype={
n(){}}
A.qC.prototype={
ew(){var s,r=self.window.innerWidth
r.toString
s=self.window.innerHeight
s.toString
this.w=new A.D(0,0,r,s)
this.r=null},
gl5(){var s=this.CW
return s==null?this.CW=A.cK():s},
bp(a){return this.n3("flt-scene")},
dh(){}}
A.Vq.prototype={
Mn(a){var s,r=a.a.a
if(r!=null)r.c=B.Cd
r=this.a
s=B.b.gI(r)
s.x.push(a)
a.e=s
r.push(a)
return a},
iF(a){return this.Mn(a,t.f6)},
u_(a,b,c){var s,r
t.BM.a(c)
s=A.a([],t.g)
r=new A.e6(c!=null&&c.c===B.L?c:null)
$.hh.push(r)
return this.iF(new A.qA(a,b,s,r,B.a9))},
Cc(a,b){var s,r,q
if(this.a.length===1)s=A.cK().a
else s=A.Io(a)
t.aR.a(b)
r=A.a([],t.g)
q=new A.e6(b!=null&&b.c===B.L?b:null)
$.hh.push(q)
return this.iF(new A.qD(s,r,q,B.a9))},
Ca(a,b,c){var s,r
t.f0.a(c)
s=A.a([],t.g)
r=new A.e6(c!=null&&c.c===B.L?c:null)
$.hh.push(r)
return this.iF(new A.qz(b,a,null,s,r,B.a9))},
C9(a,b,c){var s,r
t.gx.a(c)
s=A.a([],t.g)
r=new A.e6(c!=null&&c.c===B.L?c:null)
$.hh.push(r)
return this.iF(new A.zJ(a,b,null,s,r,B.a9))},
C7(a,b,c){var s,r
t.rk.a(c)
s=A.a([],t.g)
r=new A.e6(c!=null&&c.c===B.L?c:null)
$.hh.push(r)
return this.iF(new A.qy(a,b,s,r,B.a9))},
Cb(a,b,c){var s,r
t.Fl.a(c)
s=A.a([],t.g)
r=new A.e6(c!=null&&c.c===B.L?c:null)
$.hh.push(r)
return this.iF(new A.qB(a,b,s,r,B.a9))},
zx(a){var s
t.f6.a(a)
if(a.c===B.L)a.c=B.bc
else a.o4()
s=B.b.gI(this.a)
s.x.push(a)
a.e=s},
dv(){this.a.pop()},
zv(a,b){if(!$.a68){$.a68=!0
$.bu().$1("The performance overlay isn't supported on the web")}},
zw(a,b,c,d){var s,r
t.l9.a(b)
s=b.b.b
r=new A.e6(null)
$.hh.push(r)
r=new A.zM(a.a,a.b,b,s,new A.wB(t.om),r,B.a9)
s=B.b.gI(this.a)
s.x.push(r)
r.e=s},
v1(a){},
uU(a){},
uT(a){},
aA(){A.a81()
A.a82()
A.a1b("preroll_frame",new A.Vs(this))
return A.a1b("apply_frame",new A.Vt(this))}}
A.Vs.prototype={
$0(){for(var s=this.a.a;s.length>1;)s.pop()
t.kF.a(B.b.gF(s)).lg(new A.Rf())},
$S:0}
A.Vt.prototype={
$0(){var s,r,q=t.kF,p=this.a.a
if($.Vr==null)q.a(B.b.gF(p)).aA()
else{s=q.a(B.b.gF(p))
r=$.Vr
r.toString
s.aX(0,r)}A.ahL(q.a(B.b.gF(p)))
$.Vr=q.a(B.b.gF(p))
return new A.mR(q.a(B.b.gF(p)).d)},
$S:87}
A.a0o.prototype={
$2(a,b){var s,r=a.a,q=r.b*r.a
r=b.a
s=r.b*r.a
return J.IF(s,q)},
$S:88}
A.kr.prototype={
h(a){return"PersistedSurfaceState."+this.b}}
A.cs.prototype={
o4(){this.c=B.a9},
gdP(){return this.d},
aA(){var s,r=this,q=r.bp(0)
r.d=q
s=$.by()
if(s===B.w)A.k(q.style,"z-index","0")
r.dh()
r.c=B.L},
mM(a){this.d=a.d
a.d=null
a.c=B.pL},
aX(a,b){this.mM(b)
this.c=B.L},
ho(){if(this.c===B.bc)$.a3r.push(this)},
fl(){this.d.remove()
this.d=null
this.c=B.pL},
n(){},
n3(a){var s=A.aL(self.document,a)
A.k(s.style,"position","absolute")
return s},
gl5(){return null},
ew(){var s=this
s.f=s.e.f
s.r=s.w=null},
lg(a){this.ew()},
h(a){var s=this.aY(0)
return s}}
A.zL.prototype={}
A.cN.prototype={
lg(a){var s,r,q
this.vw(a)
s=this.x
r=s.length
for(q=0;q<r;++q)s[q].lg(a)},
ew(){var s=this
s.f=s.e.f
s.r=s.w=null},
aA(){var s,r,q,p,o,n
this.vu()
s=this.x
r=s.length
q=this.gdP()
for(p=0;p<r;++p){o=s[p]
if(o.c===B.bc)o.ho()
else if(o instanceof A.cN&&o.a.a!=null){n=o.a.a
n.toString
o.aX(0,n)}else o.aA()
q.toString
n=o.d
n.toString
q.append(n)
o.b=p}},
tp(a){return 1},
aX(a,b){var s,r=this
r.vy(0,b)
if(b.x.length===0)r.NQ(b)
else{s=r.x.length
if(s===1)r.NC(b)
else if(s===0)A.zK(b)
else r.NB(b)}},
NQ(a){var s,r,q,p=this.gdP(),o=this.x,n=o.length
for(s=0;s<n;++s){r=o[s]
if(r.c===B.bc)r.ho()
else if(r instanceof A.cN&&r.a.a!=null){q=r.a.a
q.toString
r.aX(0,q)}else r.aA()
r.b=s
p.toString
q=r.d
q.toString
p.append(q)}},
NC(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.x[0]
g.b=0
if(g.c===B.bc){if(!J.e(g.d.parentElement,h.gdP())){s=h.gdP()
s.toString
r=g.d
r.toString
s.append(r)}g.ho()
A.zK(a)
return}if(g instanceof A.cN&&g.a.a!=null){q=g.a.a
if(!J.e(q.d.parentElement,h.gdP())){s=h.gdP()
s.toString
r=q.d
r.toString
s.append(r)}g.aX(0,q)
A.zK(a)
return}for(s=a.x,p=null,o=2,n=0;n<s.length;++n){m=s[n]
if(m.c===B.L){l=g instanceof A.bG?A.cF(g):null
r=A.b7(l==null?A.aC(g):l)
l=m instanceof A.bG?A.cF(m):null
r=r===A.b7(l==null?A.aC(m):l)}else r=!1
if(!r)continue
k=g.tp(m)
if(k<o){o=k
p=m}}if(p!=null){g.aX(0,p)
if(!J.e(g.d.parentElement,h.gdP())){r=h.gdP()
r.toString
j=g.d
j.toString
r.append(j)}}else{g.aA()
r=h.gdP()
r.toString
j=g.d
j.toString
r.append(j)}for(n=0;n<s.length;++n){i=s[n]
if(i!==p&&i.c===B.L)i.fl()}},
NB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.gdP(),e=g.Lm(a)
for(s=g.x,r=t.t,q=null,p=null,o=!1,n=0;n<s.length;++n){m=s[n]
if(m.c===B.bc){l=!J.e(m.d.parentElement,f)
m.ho()
k=m}else if(m instanceof A.cN&&m.a.a!=null){j=m.a.a
l=!J.e(j.d.parentElement,f)
m.aX(0,j)
k=j}else{k=e.j(0,m)
if(k!=null){l=!J.e(k.d.parentElement,f)
m.aX(0,k)}else{m.aA()
l=!0}}i=k!=null&&!l?k.b:-1
if(!o&&i!==n){q=A.a([],r)
p=A.a([],r)
for(h=0;h<n;++h){q.push(h)
p.push(h)}o=!0}if(o&&i!==-1){q.push(n)
p.push(i)}m.b=n}if(o){p.toString
g.L2(q,p)}A.zK(a)},
L2(a,b){var s,r,q,p,o,n,m=A.a8b(b)
for(s=m.length,r=0;r<s;++r)m[r]=a[m[r]]
q=this.gdP()
for(s=this.x,r=s.length-1,p=null;r>=0;--r,p=n){a.toString
o=B.b.eX(a,r)!==-1&&B.b.A(m,r)
n=s[r].d
n.toString
if(!o)if(p==null)q.append(n)
else q.insertBefore(n,p)}},
Lm(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.x,c=d.length,b=a1.x,a=b.length,a0=A.a([],t.g)
for(s=0;s<c;++s){r=d[s]
if(r.c===B.a9&&r.a.a==null)a0.push(r)}q=A.a([],t.rK)
for(s=0;s<a;++s){r=b[s]
if(r.c===B.L)q.push(r)}p=a0.length
o=q.length
if(p===0||o===0)return B.BG
n=A.a([],t.fi)
for(m=0;m<p;++m){l=a0[m]
for(k=0;k<o;++k){j=q[k]
if(j!=null){if(j.c===B.L){i=l instanceof A.bG?A.cF(l):null
d=A.b7(i==null?A.aC(l):i)
i=j instanceof A.bG?A.cF(j):null
d=d===A.b7(i==null?A.aC(j):i)}else d=!1
d=!d}else d=!0
if(d)continue
n.push(new A.jq(l,k,l.tp(j)))}}B.b.e3(n,new A.QO())
h=A.x(t.gx,t.nx)
for(s=0;s<n.length;++s){g=n[s]
d=g.b
f=q[d]
b=g.a
e=h.j(0,b)==null
if(f!=null&&e){q[d]=null
h.l(0,b,f)}}return h},
ho(){var s,r,q
this.vx()
s=this.x
r=s.length
for(q=0;q<r;++q)s[q].ho()},
o4(){var s,r,q
this.Fe()
s=this.x
r=s.length
for(q=0;q<r;++q)s[q].o4()},
fl(){this.vv()
A.zK(this)}}
A.QO.prototype={
$2(a,b){return B.d.aq(a.c,b.c)},
$S:91}
A.jq.prototype={
h(a){var s=this.aY(0)
return s}}
A.Rf.prototype={}
A.qD.prototype={
gBG(){var s=this.cx
return s==null?this.cx=new A.be(this.CW):s},
ew(){var s=this,r=s.e.f
r.toString
s.f=r.nF(s.gBG())
s.r=null},
gl5(){var s=this.cy
return s==null?this.cy=A.acZ(this.gBG()):s},
bp(a){var s=A.aL(self.document,"flt-transform")
A.cg(s,"position","absolute")
A.cg(s,"transform-origin","0 0 0")
return s},
dh(){A.k(this.d.style,"transform",A.es(this.CW))},
aX(a,b){var s,r,q,p,o=this
o.it(0,b)
s=b.CW
r=o.CW
if(s===r){o.cx=b.cx
o.cy=b.cy
return}p=0
while(!0){if(!(p<16)){q=!1
break}if(r[p]!==s[p]){q=!0
break}++p}if(q)A.k(o.d.style,"transform",A.es(r))
else{o.cx=b.cx
o.cy=b.cy}},
$iC1:1}
A.yf.prototype={
gkS(){return 1},
go0(){return 0},
f9(){var s=0,r=A.Y(t.r),q,p=this,o,n,m
var $async$f9=A.Z(function(a,b){if(a===1)return A.V(b,r)
while(true)switch(s){case 0:n=new A.ab($.a9,t.zc)
m=new A.aS(n,t.AN)
if($.aa4()){o=A.aL(self.document,"img")
o.src=p.a
o.decoding="async"
A.fa(o.decode(),t.z).aD(new A.NY(p,o,m),t.P).h0(new A.NZ(p,m))}else p.wF(m)
q=n
s=1
break
case 1:return A.W(q,r)}})
return A.X($async$f9,r)},
wF(a){var s,r={},q=A.aL(self.document,"img"),p=A.bT("errorListener")
r.a=null
p.b=A.a4(new A.NW(r,q,p,a))
A.bv(q,"error",p.aK(),null)
s=A.a4(new A.NX(r,this,q,p,a))
r.a=s
A.bv(q,"load",s,null)
q.src=this.a},
$idM:1}
A.NY.prototype={
$1(a){var s,r=this.b,q=r.naturalWidth,p=r.naturalHeight
if(q===0)if(p===0){s=$.by()
if(s!==B.az)s=s===B.dB
else s=!0}else s=!1
else s=!1
if(s){q=300
p=300}this.c.bW(0,new A.rq(new A.pv(r,q,p)))},
$S:2}
A.NZ.prototype={
$1(a){this.a.wF(this.b)},
$S:2}
A.NW.prototype={
$1(a){var s=this,r=s.a.a
if(r!=null)A.d8(s.b,"load",r,null)
A.d8(s.b,"error",s.c.aK(),null)
s.d.hJ(a)},
$S:1}
A.NX.prototype={
$1(a){var s=this,r=s.c,q=s.a.a
q.toString
A.d8(r,"load",q,null)
A.d8(r,"error",s.d.aK(),null)
s.e.bW(0,new A.rq(new A.pv(r,r.naturalWidth,r.naturalHeight)))},
$S:1}
A.pu.prototype={}
A.rq.prototype={
ghQ(a){return B.v},
$ipp:1,
ger(a){return this.a}}
A.pv.prototype={
n(){},
c_(a){return this},
Bs(a){return a===this},
Oy(){var s=this.a
if(this.b)return s.cloneNode(!0)
else{this.b=!0
A.k(s.style,"position","absolute")
return s}},
h(a){return"["+this.d+"\xd7"+this.e+"]"},
gaE(a){return this.d},
gaS(a){return this.e}}
A.jS.prototype={
h(a){return"DebugEngineInitializationState."+this.b}}
A.a0K.prototype={
$0(){A.a7X()},
$S:0}
A.a0L.prototype={
$2(a,b){var s,r
for(s=$.he.length,r=0;r<$.he.length;$.he.length===s||(0,A.E)($.he),++r)$.he[r].$0()
return A.cH(A.aej("OK"),t.jx)},
$S:93}
A.a0M.prototype={
$0(){var s=this.a
if(!s.a){s.a=!0
A.y(self.window,"requestAnimationFrame",[A.a4(new A.a0J(s))])}},
$S:0}
A.a0J.prototype={
$1(a){var s,r,q,p
A.aie()
this.a.a=!1
s=B.d.cT(1000*a)
A.aic()
r=$.ao()
q=r.w
if(q!=null){p=A.cc(s,0)
A.Ik(q,r.x,p)}q=r.y
if(q!=null)A.jx(q,r.z)},
$S:46}
A.a_j.prototype={
$1(a){var s=a==null?null:new A.Kt(a)
$.lc=!0
$.I6=s},
$S:48}
A.a_k.prototype={
$0(){self._flutter_web_set_location_strategy=null},
$S:0}
A.MX.prototype={}
A.Oy.prototype={}
A.MW.prototype={}
A.Sj.prototype={}
A.MV.prototype={}
A.fR.prototype={}
A.P0.prototype={
GS(a){var s=this
s.b=A.a4(new A.P1(s))
A.bv(self.window,"keydown",s.b,null)
s.c=A.a4(new A.P2(s))
A.bv(self.window,"keyup",s.c,null)
$.he.push(new A.P3(s))},
n(){var s,r,q=this
A.d8(self.window,"keydown",q.b,null)
A.d8(self.window,"keyup",q.c,null)
for(s=q.a,r=A.kg(s,s.r);r.p();)s.j(0,r.d).b4(0)
s.H(0)
$.a22=q.c=q.b=null},
xa(a){var s,r,q,p,o=this,n=self.window.KeyboardEvent
n.toString
if(!(a instanceof n))return
n=a.code
n.toString
s=a.key
s.toString
if(!(s==="Meta"||s==="Shift"||s==="Alt"||s==="Control")&&o.e){s=o.a
r=s.j(0,n)
if(r!=null)r.b4(0)
if(a.type==="keydown")r=a.ctrlKey||a.shiftKey||a.altKey||a.metaKey
else r=!1
if(r)s.l(0,n,A.c_(B.k9,new A.Pk(o,n,a)))
else s.u(0,n)}q=a.getModifierState("Shift")?1:0
if(a.getModifierState("Alt")||a.getModifierState("AltGraph"))q|=2
if(a.getModifierState("Control"))q|=4
if(a.getModifierState("Meta"))q|=8
o.d=q
if(a.type==="keydown")if(a.key==="CapsLock"){n=q|32
o.d=n}else if(a.code==="NumLock"){n=q|16
o.d=n}else if(a.key==="ScrollLock"){n=q|64
o.d=n}else n=q
else n=q
p=A.aQ(["type",a.type,"keymap","web","code",a.code,"key",a.key,"location",a.location,"metaState",n,"keyCode",a.keyCode],t.N,t.z)
$.ao().es("flutter/keyevent",B.z.b6(p),new A.Pl(a))}}
A.P1.prototype={
$1(a){this.a.xa(a)},
$S:1}
A.P2.prototype={
$1(a){this.a.xa(a)},
$S:1}
A.P3.prototype={
$0(){this.a.n()},
$S:0}
A.Pk.prototype={
$0(){var s,r,q=this.a
q.a.u(0,this.b)
s=this.c
r=A.aQ(["type","keyup","keymap","web","code",s.code,"key",s.key,"location",s.location,"metaState",q.d,"keyCode",s.keyCode],t.N,t.z)
$.ao().es("flutter/keyevent",B.z.b6(r),A.agD())},
$S:0}
A.Pl.prototype={
$1(a){if(a==null)return
if(A.nQ(J.b0(t.a.a(B.z.dj(a)),"handled")))this.a.preventDefault()},
$S:9}
A.a_J.prototype={
$1(a){return a.a.altKey},
$S:11}
A.a_K.prototype={
$1(a){return a.a.altKey},
$S:11}
A.a_L.prototype={
$1(a){return a.a.ctrlKey},
$S:11}
A.a_M.prototype={
$1(a){return a.a.ctrlKey},
$S:11}
A.a_N.prototype={
$1(a){return a.a.shiftKey},
$S:11}
A.a_O.prototype={
$1(a){return a.a.shiftKey},
$S:11}
A.a_P.prototype={
$1(a){return a.a.metaKey},
$S:11}
A.a_Q.prototype={
$1(a){return a.a.metaKey},
$S:11}
A.yz.prototype={
vN(a,b,c){var s=A.a4(new A.P4(c))
this.c.l(0,b,s)
A.bv(self.window,b,s,!0)},
LL(a){var s={}
s.a=null
$.ao().Ra(a,new A.P5(s))
s=s.a
s.toString
return s},
N1(){var s,r,q=this
q.vN(0,"keydown",A.a4(new A.P6(q)))
q.vN(0,"keyup",A.a4(new A.P7(q)))
s=$.cS()
r=t.S
q.b=new A.P8(q.gLK(),s===B.aj,A.x(r,r),A.x(r,t.Q))}}
A.P4.prototype={
$1(a){var s=$.cV
if((s==null?$.cV=A.iv():s).Cg(a))return this.a.$1(a)
return null},
$S:59}
A.P5.prototype={
$1(a){this.a.a=a},
$S:15}
A.P6.prototype={
$1(a){var s=this.a.b
s===$&&A.h()
return s.ha(new A.hu(a))},
$S:1}
A.P7.prototype={
$1(a){var s=this.a.b
s===$&&A.h()
return s.ha(new A.hu(a))},
$S:1}
A.hu.prototype={}
A.P8.prototype={
yp(a,b,c){var s,r={}
r.a=!1
s=t.H
A.a1Q(a,s).aD(new A.Pe(r,this,c,b),s)
return new A.Pf(r)},
Ne(a,b,c){var s,r,q,p=this
if(!p.b)return
s=p.yp(B.k9,new A.Pg(c,a,b),new A.Ph(p,a))
r=p.f
q=r.u(0,a)
if(q!=null)q.$0()
r.l(0,a,s)},
K0(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=a.a,e=f.timeStamp
e.toString
s=B.d.cT(e)
r=A.cc(B.d.cT((e-s)*1000),s)
e=f.key
e.toString
q=f.code
q.toString
p=B.BA.j(0,q)
if(p==null)p=B.c.gq(q)+98784247808
q=B.c.a2(e,0)
if(!(q>=97&&q<=122))q=q>=65&&q<=90
else q=!0
o=!(q&&e.length>1)
if(o)n=e
else n=g
m=new A.Pa(a,n,e,p).$0()
if(f.type!=="keydown")if(h.b){e=f.code
e.toString
e=e==="CapsLock"
l=e}else l=!1
else l=!0
if(h.b){e=f.code
e.toString
e=e==="CapsLock"}else e=!1
if(e){h.yp(B.v,new A.Pb(r,p,m),new A.Pc(h,p))
k=B.cp}else if(l){e=h.e
if(e.j(0,p)!=null){q=f.repeat
if(q===!0)k=B.yg
else{h.c.$1(new A.ea(r,B.b8,p,m,g,!0))
e.u(0,p)
k=B.cp}}else k=B.cp}else{if(h.e.j(0,p)==null){f.preventDefault()
return}k=B.b8}e=h.e
j=e.j(0,p)
switch(k.a){case 0:i=m
break
case 1:i=g
break
case 2:i=j
break
default:i=g}q=i==null
if(q)e.u(0,p)
else e.l(0,p,i)
$.a9J().P(0,new A.Pd(h,m,a,r))
if(o)if(!q)h.Ne(p,m,r)
else{e=h.f.u(0,p)
if(e!=null)e.$0()}e=j==null?m:j
q=k===B.b8?g:n
if(h.c.$1(new A.ea(r,k,p,e,q,!1)))f.preventDefault()},
ha(a){var s=this,r={}
r.a=!1
s.c=new A.Pi(r,s)
try{s.K0(a)}finally{if(!r.a)s.c.$1(B.yf)
s.c=null}}}
A.Pe.prototype={
$1(a){var s=this
if(!s.a.a&&!s.b.d){s.c.$0()
s.b.a.$1(s.d.$0())}},
$S:14}
A.Pf.prototype={
$0(){this.a.a=!0},
$S:0}
A.Pg.prototype={
$0(){return new A.ea(new A.aV(this.a.a+2e6),B.b8,this.b,this.c,null,!0)},
$S:47}
A.Ph.prototype={
$0(){this.a.e.u(0,this.b)},
$S:0}
A.Pa.prototype={
$0(){var s,r,q,p=this,o=p.a.a,n=o.key
n.toString
if(B.px.U(0,n)){n=o.key
n.toString
n=B.px.j(0,n)
s=n==null?null:n[o.location]
s.toString
return s}n=p.b
if(n!=null){s=B.c.a2(n,0)&65535
if(n.length===2)s+=B.c.a2(n,1)<<16>>>0
return s>=65&&s<=90?s+97-65:s}n=p.c
if(n==="Dead"){n=o.altKey
r=o.ctrlKey
q=o.shiftKey
o=o.metaKey
n=n?1073741824:0
r=r?268435456:0
q=q?536870912:0
o=o?2147483648:0
return p.d+(n+r+q+o)+98784247808}o=B.BK.j(0,n)
return o==null?B.c.gq(n)+98784247808:o},
$S:27}
A.Pb.prototype={
$0(){return new A.ea(this.a,B.b8,this.b,this.c,null,!0)},
$S:47}
A.Pc.prototype={
$0(){this.a.e.u(0,this.b)},
$S:0}
A.Pd.prototype={
$2(a,b){var s,r,q=this
if(q.b===a)return
s=q.a
r=s.e
if(r.OL(0,a)&&!b.$1(q.c))r.Su(r,new A.P9(s,a,q.d))},
$S:112}
A.P9.prototype={
$2(a,b){var s=this.b
if(b!==s)return!1
this.a.c.$1(new A.ea(this.c,B.b8,a,s,null,!0))
return!0},
$S:113}
A.Pi.prototype={
$1(a){this.a.a=!0
return this.b.a.$1(a)},
$S:35}
A.PV.prototype={}
A.Jv.prototype={
gNv(){var s=this.a
s===$&&A.h()
return s},
n(){var s=this
if(s.c||s.ghr()==null)return
s.c=!0
s.Nw()},
kL(){var s=0,r=A.Y(t.H),q=this
var $async$kL=A.Z(function(a,b){if(a===1)return A.V(b,r)
while(true)switch(s){case 0:s=q.ghr()!=null?2:3
break
case 2:s=4
return A.a3(q.f5(),$async$kL)
case 4:s=5
return A.a3(q.ghr().jo(0,-1),$async$kL)
case 5:case 3:return A.W(null,r)}})
return A.X($async$kL,r)},
gfj(){var s=this.ghr()
s=s==null?null:s.uH()
return s==null?"/":s},
gb5(){var s=this.ghr()
return s==null?null:s.om(0)},
Nw(){return this.gNv().$0()}}
A.qb.prototype={
GT(a){var s,r=this,q=r.d
if(q==null)return
r.a=q.mI(r.gtL(r))
if(!r.q7(r.gb5())){s=t.z
q.hn(0,A.aQ(["serialCount",0,"state",r.gb5()],s,s),"flutter",r.gfj())}r.e=r.gpy()},
gpy(){if(this.q7(this.gb5())){var s=this.gb5()
s.toString
return A.dL(J.b0(t.G.a(s),"serialCount"))}return 0},
q7(a){return t.G.b(a)&&J.b0(a,"serialCount")!=null},
lG(a,b,c){var s,r,q=this.d
if(q!=null){s=t.z
r=this.e
if(b){r===$&&A.h()
s=A.aQ(["serialCount",r,"state",c],s,s)
a.toString
q.hn(0,s,"flutter",a)}else{r===$&&A.h();++r
this.e=r
s=A.aQ(["serialCount",r,"state",c],s,s)
a.toString
q.u0(0,s,"flutter",a)}}},
v2(a){return this.lG(a,!1,null)},
tM(a,b){var s,r,q,p,o=this
if(!o.q7(A.i9(b.state))){s=o.d
s.toString
r=A.i9(b.state)
q=o.e
q===$&&A.h()
p=t.z
s.hn(0,A.aQ(["serialCount",q+1,"state",r],p,p),"flutter",o.gfj())}o.e=o.gpy()
s=$.ao()
r=o.gfj()
q=A.i9(b.state)
q=q==null?null:J.b0(q,"state")
p=t.z
s.es("flutter/navigation",B.T.ej(new A.ec("pushRouteInformation",A.aQ(["location",r,"state",q],p,p))),new A.Q4())},
f5(){var s=0,r=A.Y(t.H),q,p=this,o,n,m
var $async$f5=A.Z(function(a,b){if(a===1)return A.V(b,r)
while(true)switch(s){case 0:p.n()
if(p.b||p.d==null){s=1
break}p.b=!0
o=p.gpy()
s=o>0?3:4
break
case 3:s=5
return A.a3(p.d.jo(0,-o),$async$f5)
case 5:case 4:n=p.gb5()
n.toString
t.G.a(n)
m=p.d
m.toString
m.hn(0,J.b0(n,"state"),"flutter",p.gfj())
case 1:return A.W(q,r)}})
return A.X($async$f5,r)},
ghr(){return this.d}}
A.Q4.prototype={
$1(a){},
$S:9}
A.rp.prototype={
GX(a){var s,r=this,q=r.d
if(q==null)return
r.a=q.mI(r.gtL(r))
s=r.gfj()
if(!A.a2o(A.i9(self.window.history.state))){q.hn(0,A.aQ(["origin",!0,"state",r.gb5()],t.N,t.z),"origin","")
r.qB(q,s,!1)}},
lG(a,b,c){var s=this.d
if(s!=null)this.qB(s,a,!0)},
v2(a){return this.lG(a,!1,null)},
tM(a,b){var s,r=this,q="flutter/navigation"
if(A.a5Y(A.i9(b.state))){s=r.d
s.toString
r.N2(s)
$.ao().es(q,B.T.ej(B.BW),new A.TB())}else if(A.a2o(A.i9(b.state))){s=r.f
s.toString
r.f=null
$.ao().es(q,B.T.ej(new A.ec("pushRoute",s)),new A.TC())}else{r.f=r.gfj()
r.d.jo(0,-1)}},
qB(a,b,c){var s
if(b==null)b=this.gfj()
s=this.e
if(c)a.hn(0,s,"flutter",b)
else a.u0(0,s,"flutter",b)},
N2(a){return this.qB(a,null,!1)},
f5(){var s=0,r=A.Y(t.H),q,p=this,o,n
var $async$f5=A.Z(function(a,b){if(a===1)return A.V(b,r)
while(true)switch(s){case 0:p.n()
if(p.b||p.d==null){s=1
break}p.b=!0
o=p.d
s=3
return A.a3(o.jo(0,-1),$async$f5)
case 3:n=p.gb5()
n.toString
o.hn(0,J.b0(t.G.a(n),"state"),"flutter",p.gfj())
case 1:return A.W(q,r)}})
return A.X($async$f5,r)},
ghr(){return this.d}}
A.TB.prototype={
$1(a){},
$S:9}
A.TC.prototype={
$1(a){},
$S:9}
A.OV.prototype={}
A.WB.prototype={}
A.NO.prototype={
mI(a){var s=A.a4(a)
A.bv(self.window,"popstate",s,null)
return new A.NQ(this,s)},
uH(){var s=self.window.location.hash
if(s.length===0||s==="#")return"/"
return B.c.dE(s,1)},
om(a){return A.i9(self.window.history.state)},
C4(a){var s,r
if(a.length===0){s=self.window.location.pathname
s.toString
r=self.window.location.search
r.toString
r=s+r
s=r}else s="#"+a
return s},
u0(a,b,c,d){var s=this.C4(d),r=self.window.history,q=[]
q.push(A.nX(b))
q.push(c)
q.push(s)
A.y(r,"pushState",q)},
hn(a,b,c,d){var s=this.C4(d),r=self.window.history,q=[]
if(t.G.b(b)||t.tY.b(b))q.push(A.nX(b))
else q.push(b)
q.push(c)
q.push(s)
A.y(r,"replaceState",q)},
jo(a,b){self.window.history.go(b)
return this.NS()},
NS(){var s=new A.ab($.a9,t.D),r=A.bT("unsubscribe")
r.b=this.mI(new A.NP(r,new A.aS(s,t.h)))
return s}}
A.NQ.prototype={
$0(){A.d8(self.window,"popstate",this.b,null)
return null},
$S:0}
A.NP.prototype={
$1(a){this.a.aK().$0()
this.b.dQ(0)},
$S:1}
A.Kt.prototype={
mI(a){return A.y(this.a,"addPopStateListener",[A.a4(a)])},
uH(){return this.a.getPath()},
om(a){return this.a.getState()},
u0(a,b,c,d){return A.y(this.a,"pushState",[b,c,d])},
hn(a,b,c,d){return A.y(this.a,"replaceState",[b,c,d])},
jo(a,b){return this.a.go(b)}}
A.QY.prototype={}
A.Jw.prototype={}
A.xB.prototype={
mQ(a){var s
this.b=a
this.c=!0
s=A.a([],t.gO)
return this.a=new A.RA(new A.YS(a,A.a([],t.l6),A.a([],t.AQ),A.cK()),s,new A.RY())},
gBw(){return this.c},
nf(){var s,r=this
if(!r.c)r.mQ(B.ix)
r.c=!1
s=r.a
s.b=s.a.OG()
s.f=!0
s=r.a
r.b===$&&A.h()
return new A.xA(s)}}
A.xA.prototype={
n(){this.a=!0}}
A.yd.prototype={
gxO(){var s,r=this,q=r.c
if(q===$){s=A.a4(r.gLI())
r.c!==$&&A.b5()
r.c=s
q=s}return q},
LJ(a){var s,r,q,p=a.matches
p.toString
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.E)(s),++q)s[q].$1(p)}}
A.xC.prototype={
n(){var s,r,q=this,p="removeListener"
A.y(q.id,p,[q.k1])
q.k1=null
s=q.fx
if(s!=null)s.disconnect()
q.fx=null
s=$.a1h()
r=s.a
B.b.u(r,q.gz8())
if(r.length===0)A.y(s.b,p,[s.gxO()])},
t8(){var s=this.f
if(s!=null)A.jx(s,this.r)},
Ra(a,b){var s=this.at
if(s!=null)A.jx(new A.Mx(b,s,a),this.ax)
else b.$1(!1)},
es(a,b,c){var s,r,q,p,o,n,m,l,k,j="Invalid arguments for 'resize' method sent to dev.flutter/channel-buffers (arguments must be a two-element list, channel name and new capacity)",i="Invalid arguments for 'overflow' method sent to dev.flutter/channel-buffers (arguments must be a two-element list, channel name and flag state)"
if(a==="dev.flutter/channel-buffers")try{s=$.ID()
r=A.c2(b.buffer,b.byteOffset,b.byteLength)
if(r[0]===7){q=r[1]
if(q>=254)A.U(A.cd("Unrecognized message sent to dev.flutter/channel-buffers (method name too long)"))
p=2+q
o=B.C.cz(0,B.A.b1(r,2,p))
switch(o){case"resize":if(r[p]!==12)A.U(A.cd(j))
n=p+1
if(r[n]<2)A.U(A.cd(j));++n
if(r[n]!==7)A.U(A.cd("Invalid arguments for 'resize' method sent to dev.flutter/channel-buffers (first argument must be a string)"));++n
m=r[n]
if(m>=254)A.U(A.cd("Invalid arguments for 'resize' method sent to dev.flutter/channel-buffers (channel name must be less than 254 characters long)"));++n
p=n+m
l=B.C.cz(0,B.A.b1(r,n,p))
if(r[p]!==3)A.U(A.cd("Invalid arguments for 'resize' method sent to dev.flutter/channel-buffers (second argument must be an integer in the range 0 to 2147483647)"))
s.Cs(0,l,b.getUint32(p+1,B.B===$.cn()))
break
case"overflow":if(r[p]!==12)A.U(A.cd(i))
n=p+1
if(r[n]<2)A.U(A.cd(i));++n
if(r[n]!==7)A.U(A.cd("Invalid arguments for 'overflow' method sent to dev.flutter/channel-buffers (first argument must be a string)"));++n
m=r[n]
if(m>=254)A.U(A.cd("Invalid arguments for 'overflow' method sent to dev.flutter/channel-buffers (channel name must be less than 254 characters long)"));++n
s=n+m
B.C.cz(0,B.A.b1(r,n,s))
s=r[s]
if(s!==1&&s!==2)A.U(A.cd("Invalid arguments for 'overflow' method sent to dev.flutter/channel-buffers (second argument must be a boolean)"))
break
default:A.U(A.cd("Unrecognized method '"+o+"' sent to dev.flutter/channel-buffers"))}}else{k=A.a(B.C.cz(0,r).split("\r"),t.s)
if(k.length===3&&J.e(k[0],"resize"))s.Cs(0,k[1],A.et(k[2],null))
else A.U(A.cd("Unrecognized message "+A.f(k)+" sent to dev.flutter/channel-buffers."))}}finally{c.$1(null)}else $.ID().Sa(a,b,c)},
MV(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this
switch(a){case"flutter/skia":s=B.T.eg(b)
switch(s.a){case"Skia.setResourceCacheMaxBytes":if($.aP()){r=A.dL(s.b)
i.gnY().toString
q=A.je().a
q.w=r
q.yL()}i.da(c,B.z.b6([A.a([!0],t.sj)]))
break}return
case"flutter/assets":p=B.C.cz(0,A.c2(b.buffer,0,null))
$.a_m.bY(0,p).dA(new A.Mq(i,c),new A.Mr(i,c),t.P)
return
case"flutter/platform":s=B.T.eg(b)
switch(s.a){case"SystemNavigator.pop":i.d.j(0,0).gmR().kL().aD(new A.Ms(i,c),t.P)
return
case"HapticFeedback.vibrate":q=i.Jd(A.c7(s.b))
o=self.window.navigator
if("vibrate" in o)o.vibrate(q)
i.da(c,B.z.b6([!0]))
return
case"SystemChrome.setApplicationSwitcherDescription":n=t.a.a(s.b)
q=J.aB(n)
m=A.c7(q.j(n,"label"))
if(m==null)m=""
l=A.nR(q.j(n,"primaryColor"))
if(l==null)l=4278190080
self.document.title=m
k=self.document.querySelector("#flutterweb-theme")
if(k==null){k=A.aL(self.document,"meta")
k.id="flutterweb-theme"
k.name="theme-color"
self.document.head.append(k)}q=A.bP(new A.S(l>>>0))
q.toString
k.content=q
i.da(c,B.z.b6([!0]))
return
case"SystemChrome.setPreferredOrientations":n=t.j.a(s.b)
$.f9.DC(n).aD(new A.Mt(i,c),t.P)
return
case"SystemSound.play":i.da(c,B.z.b6([!0]))
return
case"Clipboard.setData":q=self.window.navigator.clipboard!=null?new A.wt():new A.xH()
new A.wu(q,A.a5u()).Dy(s,c)
return
case"Clipboard.getData":q=self.window.navigator.clipboard!=null?new A.wt():new A.xH()
new A.wu(q,A.a5u()).D1(c)
return}break
case"flutter/service_worker":q=self.window
o=self.document.createEvent("Event")
j=A.a(["flutter-first-frame"],t.f)
j.push(!0)
j.push(!0)
A.y(o,"initEvent",j)
q.dispatchEvent(o)
return
case"flutter/textinput":q=$.a3X()
q.gkl(q).QG(b,c)
return
case"flutter/mousecursor":s=B.aZ.eg(b)
n=t.G.a(s.b)
switch(s.a){case"activateSystemCursor":$.a2c.toString
q=A.c7(J.b0(n,"kind"))
o=$.f9.y
o.toString
q=B.BH.j(0,q)
A.cg(o,"cursor",q==null?"default":q)
break}return
case"flutter/web_test_e2e":i.da(c,B.z.b6([A.agR(B.T,b)]))
return
case"flutter/platform_views":q=i.cy
if(q==null)q=i.cy=new A.R1($.a3V(),new A.Mu())
c.toString
q.Qo(b,c)
return
case"flutter/accessibility":$.aaa().Qg(B.ap,b)
i.da(c,B.ap.b6(!0))
return
case"flutter/navigation":i.d.j(0,0).rY(b).aD(new A.Mv(i,c),t.P)
i.rx="/"
return}i.da(c,null)},
Jd(a){switch(a){case"HapticFeedbackType.lightImpact":return 10
case"HapticFeedbackType.mediumImpact":return 20
case"HapticFeedbackType.heavyImpact":return 30
case"HapticFeedbackType.selectionClick":return 10
default:return 50}},
fb(){var s=$.a8q
if(s==null)throw A.d(A.cd("scheduleFrameCallback must be initialized first."))
s.$0()},
Sw(a,b){if($.aP()){A.a81()
A.a82()
t.Dk.a(a)
this.gnY().Pm(a.a)}else{t.q9.a(a)
$.f9.zz(a.a)}A.aid()},
H5(){var s,r,q,p=t.f,o=A.Ig("MutationObserver",A.a([A.a4(new A.Mp(this))],p))
o.toString
t.e.a(o)
this.fx=o
s=self.document.documentElement
s.toString
r=A.a(["style"],t.s)
q=A.x(t.N,t.z)
q.l(0,"attributes",!0)
q.l(0,"attributeFilter",r)
A.y(o,"observe",A.a([s,A.nX(q)],p))},
zb(a){var s=this,r=s.a
if(r.d!==a){s.a=r.OU(a)
A.jx(null,null)
A.jx(s.k2,s.k3)}},
Ny(a){var s=this.a,r=s.a
if((r.a&32)!==0!==a){this.a=s.A5(r.OR(a))
A.jx(null,null)}},
H4(){var s,r=this,q=r.id
r.zb(q.matches?B.H:B.O)
s=A.a4(new A.Mo(r))
r.k1=s
A.y(q,"addListener",[s])},
grr(){var s=this.rx
return s==null?this.rx=this.d.j(0,0).gmR().gfj():s},
gnY(){var s=this.ry
if(s===$)s=this.ry=$.aP()?new A.Rq(new A.Kh(),A.a([],t.bZ)):null
return s},
da(a,b){A.a1Q(B.v,t.H).aD(new A.My(a,b),t.P)}}
A.Mx.prototype={
$0(){return this.a.$1(this.b.$1(this.c))},
$S:0}
A.Mw.prototype={
$1(a){this.a.o7(this.b,a)},
$S:9}
A.Mq.prototype={
$1(a){this.a.da(this.b,a)},
$S:117}
A.Mr.prototype={
$1(a){$.bu().$1("Error while trying to load an asset: "+A.f(a))
this.a.da(this.b,null)},
$S:2}
A.Ms.prototype={
$1(a){this.a.da(this.b,B.z.b6([!0]))},
$S:14}
A.Mt.prototype={
$1(a){this.a.da(this.b,B.z.b6([a]))},
$S:42}
A.Mu.prototype={
$1(a){$.f9.y.append(a)},
$S:1}
A.Mv.prototype={
$1(a){var s=this.b
if(a)this.a.da(s,B.z.b6([!0]))
else if(s!=null)s.$1(null)},
$S:42}
A.Mp.prototype={
$2(a,b){var s,r,q,p,o,n,m
for(s=J.al(a),r=t.e,q=this.a;s.p();){p=r.a(s.gB(s))
if(p.type==="attributes"&&p.attributeName==="style"){o=self.document.documentElement
o.toString
n=A.aiG(o)
m=(n==null?16:n)/16
o=q.a
if(o.e!==m){q.a=o.rg(m)
A.jx(null,null)
A.jx(q.fy,q.go)}}}},
$S:118}
A.Mo.prototype={
$1(a){var s=a.matches
s.toString
s=s?B.H:B.O
this.a.zb(s)},
$S:1}
A.My.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(this.b)},
$S:14}
A.a0O.prototype={
$0(){this.a.$2(this.b,this.c)},
$S:0}
A.a0P.prototype={
$0(){var s=this
s.a.$3(s.b,s.c,s.d)},
$S:0}
A.R_.prototype={
Sx(a,b,c){this.d.l(0,b,a)
return this.b.aQ(0,b,new A.R0(this,"flt-pv-slot-"+b,a,b,c))},
MS(a){var s,r,q,p="setAttribute"
if(a==null)return
s=$.by()
if(s!==B.w){a.remove()
return}r="tombstone-"+A.f(a.getAttribute("slot"))
q=A.aL(self.document,"slot")
A.k(q.style,"display","none")
A.y(q,p,["name",r])
$.f9.z.eK(0,q)
A.y(a,p,["slot",r])
a.remove()
q.remove()}}
A.R0.prototype={
$0(){var s,r,q,p=this,o=A.aL(self.document,"flt-platform-view")
A.y(o,"setAttribute",["slot",p.b])
s=p.c
r=p.a.a.j(0,s)
r.toString
q=A.bT("content")
q.b=t.vk.a(r).$1(p.d)
r=q.aK()
if(r.style.getPropertyValue("height").length===0){$.bu().$1("Height of Platform View type: ["+s+"] may not be set. Defaulting to `height: 100%`.\nSet `style.height` to any appropriate value to stop this message.")
A.k(r.style,"height","100%")}if(r.style.getPropertyValue("width").length===0){$.bu().$1("Width of Platform View type: ["+s+"] may not be set. Defaulting to `width: 100%`.\nSet `style.width` to any appropriate value to stop this message.")
A.k(r.style,"width","100%")}o.append(q.aK())
return o},
$S:38}
A.R1.prototype={
Im(a,b){var s=t.G.a(a.b),r=J.aB(s),q=A.dL(r.j(s,"id")),p=A.bO(r.j(s,"viewType"))
r=this.b
if(!r.a.U(0,p)){b.$1(B.aZ.hR("unregistered_view_type","If you are the author of the PlatformView, make sure `registerViewFactory` is invoked.","A HtmlElementView widget is trying to create a platform view with an unregistered type: <"+p+">."))
return}if(r.b.U(0,q)){b.$1(B.aZ.hR("recreating_view","view id: "+q,"trying to create an already created view"))
return}this.c.$1(r.Sx(p,q,s))
b.$1(B.aZ.kI(null))},
Qo(a,b){var s,r=B.aZ.eg(a)
switch(r.a){case"create":this.Im(r,b)
return
case"dispose":s=this.b
s.MS(s.b.u(0,A.dL(r.b)))
b.$1(B.aZ.kI(null))
return}b.$1(null)}}
A.SE.prototype={
Tg(){A.bv(self.document,"touchstart",A.a4(new A.SF()),null)}}
A.SF.prototype={
$1(a){},
$S:1}
A.zW.prototype={
Ic(){var s,r=this
if("PointerEvent" in self.window){s=new A.YU(A.x(t.S,t.DW),A.a([],t.xU),r.a,r.gqm(),r.c)
s.jw()
return s}if("TouchEvent" in self.window){s=new A.ZQ(A.aM(t.S),A.a([],t.xU),r.a,r.gqm(),r.c)
s.jw()
return s}if("MouseEvent" in self.window){s=new A.YF(new A.kX(),A.a([],t.xU),r.a,r.gqm(),r.c)
s.jw()
return s}throw A.d(A.M("This browser does not support pointer, touch, or mouse events."))},
LM(a){var s=A.a(a.slice(0),A.ad(a)),r=$.ao()
A.Ik(r.Q,r.as,new A.qG(s))}}
A.Rc.prototype={
h(a){return"pointers:"+("PointerEvent" in self.window)+", touch:"+("TouchEvent" in self.window)+", mouse:"+("MouseEvent" in self.window)}}
A.tJ.prototype={}
A.Yj.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.Yi.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.WZ.prototype={
qZ(a,b,c,d,e){this.a.push(A.aft(e,c,new A.X_(d),b))},
O3(a,b,c,d){return this.qZ(a,b,c,d,!0)}}
A.X_.prototype={
$1(a){var s=$.cV
if((s==null?$.cV=A.iv():s).Cg(a))this.a.$1(a)},
$S:59}
A.Hm.prototype={
vX(a){this.a.push(A.afu("wheel",new A.a_4(a),this.b))},
xi(a){var s,r,q,p,o,n,m,l,k,j=a.deltaX,i=a.deltaY
switch(a.deltaMode){case 1:s=$.a77
if(s==null){r=A.aL(self.document,"div")
s=r.style
A.k(s,"font-size","initial")
A.k(s,"display","none")
self.document.body.append(r)
s=A.a1K(self.window,r).getPropertyValue("font-size")
if(B.c.A(s,"px"))q=A.a5E(A.a3u(s,"px",""))
else q=null
r.remove()
s=$.a77=q==null?16:q/4}j*=s
i*=s
break
case 2:s=$.bQ()
j*=s.ghl().a
i*=s.ghl().b
break
case 0:default:break}p=A.a([],t.I)
s=a.timeStamp
s.toString
s=A.nc(s)
o=a.clientX
n=$.bQ()
m=n.w
if(m==null)m=A.aw()
l=a.clientY
n=n.w
if(n==null)n=A.aw()
k=a.buttons
k.toString
this.d.ON(p,k,B.bg,-1,B.bh,o*m,l*n,1,1,0,j,i,B.Cm,s)
this.c.$1(p)
if(a.getModifierState("Control")){s=$.cS()
if(s!==B.aj)s=s!==B.V
else s=!1}else s=!1
if(s)return
a.preventDefault()}}
A.a_4.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.h9.prototype={
h(a){return A.z(this).h(0)+"(change: "+this.a.h(0)+", buttons: "+this.b+")"}}
A.kX.prototype={
uL(a,b){var s
if(this.a!==0)return this.oo(b)
s=(b===0&&a>-1?A.ahQ(a):b)&1073741823
this.a=s
return new A.h9(B.r5,s)},
oo(a){var s=a&1073741823,r=this.a
if(r===0&&s!==0)return new A.h9(B.bg,r)
this.a=s
return new A.h9(s===0?B.bg:B.c1,s)},
lB(a){if(this.a!==0&&(a&1073741823)===0){this.a=0
return new A.h9(B.iw,0)}return null},
uM(a){if((a&1073741823)===0){this.a=0
return new A.h9(B.bg,0)}return null},
uN(a){var s
if(this.a===0)return null
s=this.a=(a==null?0:a)&1073741823
if(s===0)return new A.h9(B.iw,s)
else return new A.h9(B.c1,s)}}
A.YU.prototype={
pI(a){return this.e.aQ(0,a,new A.YW())},
yc(a){if(a.pointerType==="touch")this.e.u(0,a.pointerId)},
vU(a,b,c,d){this.qZ(0,a,b,new A.YV(c),d)},
lR(a,b,c){return this.vU(a,b,c,!0)},
jw(){var s=this,r=s.b
s.lR(r,"pointerdown",new A.YX(s))
s.lR(self.window,"pointermove",new A.YY(s))
s.vU(r,"pointerleave",new A.YZ(s),!1)
s.lR(self.window,"pointerup",new A.Z_(s))
s.lR(r,"pointercancel",new A.Z0(s))
s.vX(new A.Z1(s))},
cZ(a,b,c){var s,r,q,p,o,n,m,l,k=c.pointerType
k.toString
s=this.y_(k)
k=c.tiltX
k.toString
r=c.tiltY
r.toString
k=Math.abs(k)>Math.abs(r)?c.tiltX:c.tiltY
k.toString
r=c.timeStamp
r.toString
q=A.nc(r)
r=c.pressure
p=this.iA(c)
o=c.clientX
n=$.bQ()
m=n.w
if(m==null)m=A.aw()
l=c.clientY
n=n.w
if(n==null)n=A.aw()
if(r==null)r=0
this.d.OM(a,b.b,b.a,p,s,o*m,l*n,r,1,0,B.bi,k/180*3.141592653589793,q)},
IL(a){var s,r
if("getCoalescedEvents" in a){s=J.ch(a.getCoalescedEvents(),t.e)
r=new A.b8(s.a,s.$ti.i("b8<1,b>"))
if(!r.gK(r))return r}return A.a([a],t.J)},
y_(a){switch(a){case"mouse":return B.bh
case"pen":return B.Ck
case"touch":return B.d_
default:return B.Cl}},
iA(a){var s=a.pointerType
s.toString
if(this.y_(s)===B.bh)s=-1
else{s=a.pointerId
s.toString}return s}}
A.YW.prototype={
$0(){return new A.kX()},
$S:132}
A.YV.prototype={
$1(a){this.a.$1(a)},
$S:1}
A.YX.prototype={
$1(a){var s,r,q=this.a,p=q.iA(a),o=A.a([],t.I),n=q.pI(p),m=a.buttons
m.toString
s=n.lB(m)
if(s!=null)q.cZ(o,s,a)
m=a.button
r=a.buttons
r.toString
q.cZ(o,n.uL(m,r),a)
q.c.$1(o)},
$S:3}
A.YY.prototype={
$1(a){var s,r,q,p,o=this.a,n=o.pI(o.iA(a)),m=A.a([],t.I)
for(s=J.al(o.IL(a));s.p();){r=s.gB(s)
q=r.buttons
q.toString
p=n.lB(q)
if(p!=null)o.cZ(m,p,r)
q=r.buttons
q.toString
o.cZ(m,n.oo(q),r)}o.c.$1(m)},
$S:3}
A.YZ.prototype={
$1(a){var s,r=this.a,q=r.pI(r.iA(a)),p=A.a([],t.I),o=a.buttons
o.toString
s=q.uM(o)
if(s!=null){r.cZ(p,s,a)
r.c.$1(p)}},
$S:3}
A.Z_.prototype={
$1(a){var s,r,q=this.a,p=q.iA(a),o=q.e
if(o.U(0,p)){s=A.a([],t.I)
o=o.j(0,p)
o.toString
r=o.uN(a.buttons)
q.yc(a)
if(r!=null){q.cZ(s,r,a)
q.c.$1(s)}}},
$S:3}
A.Z0.prototype={
$1(a){var s,r=this.a,q=r.iA(a),p=r.e
if(p.U(0,q)){s=A.a([],t.I)
p=p.j(0,q)
p.toString
p.a=0
r.yc(a)
r.cZ(s,new A.h9(B.iu,0),a)
r.c.$1(s)}},
$S:3}
A.Z1.prototype={
$1(a){this.a.xi(a)},
$S:1}
A.ZQ.prototype={
lS(a,b,c){this.O3(0,a,b,new A.ZR(c))},
jw(){var s=this,r=s.b
s.lS(r,"touchstart",new A.ZS(s))
s.lS(r,"touchmove",new A.ZT(s))
s.lS(r,"touchend",new A.ZU(s))
s.lS(r,"touchcancel",new A.ZV(s))},
lY(a,b,c,d,e){var s,r,q,p,o,n=e.identifier
n.toString
s=e.clientX
r=$.bQ()
q=r.w
if(q==null)q=A.aw()
p=e.clientY
r=r.w
if(r==null)r=A.aw()
o=c?1:0
this.d.A3(b,o,a,n,B.d_,s*q,p*r,1,1,0,B.bi,d)}}
A.ZR.prototype={
$1(a){this.a.$1(a)},
$S:1}
A.ZS.prototype={
$1(a){var s,r,q,p,o,n,m,l=a.timeStamp
l.toString
s=A.nc(l)
r=A.a([],t.I)
for(l=A.iu(a),l=new A.b8(l.a,A.r(l).i("b8<1,b>")),l=new A.cz(l,l.gm(l)),q=this.a,p=q.e,o=A.r(l).c;l.p();){n=l.d
if(n==null)n=o.a(n)
m=n.identifier
m.toString
if(!p.A(0,m)){m=n.identifier
m.toString
p.C(0,m)
q.lY(B.r5,r,!0,s,n)}}q.c.$1(r)},
$S:3}
A.ZT.prototype={
$1(a){var s,r,q,p,o,n,m,l
a.preventDefault()
s=a.timeStamp
s.toString
r=A.nc(s)
q=A.a([],t.I)
for(s=A.iu(a),s=new A.b8(s.a,A.r(s).i("b8<1,b>")),s=new A.cz(s,s.gm(s)),p=this.a,o=p.e,n=A.r(s).c;s.p();){m=s.d
if(m==null)m=n.a(m)
l=m.identifier
l.toString
if(o.A(0,l))p.lY(B.c1,q,!0,r,m)}p.c.$1(q)},
$S:3}
A.ZU.prototype={
$1(a){var s,r,q,p,o,n,m,l
a.preventDefault()
s=a.timeStamp
s.toString
r=A.nc(s)
q=A.a([],t.I)
for(s=A.iu(a),s=new A.b8(s.a,A.r(s).i("b8<1,b>")),s=new A.cz(s,s.gm(s)),p=this.a,o=p.e,n=A.r(s).c;s.p();){m=s.d
if(m==null)m=n.a(m)
l=m.identifier
l.toString
if(o.A(0,l)){l=m.identifier
l.toString
o.u(0,l)
p.lY(B.iw,q,!1,r,m)}}p.c.$1(q)},
$S:3}
A.ZV.prototype={
$1(a){var s,r,q,p,o,n,m,l=a.timeStamp
l.toString
s=A.nc(l)
r=A.a([],t.I)
for(l=A.iu(a),l=new A.b8(l.a,A.r(l).i("b8<1,b>")),l=new A.cz(l,l.gm(l)),q=this.a,p=q.e,o=A.r(l).c;l.p();){n=l.d
if(n==null)n=o.a(n)
m=n.identifier
m.toString
if(p.A(0,m)){m=n.identifier
m.toString
p.u(0,m)
q.lY(B.iu,r,!1,s,n)}}q.c.$1(r)},
$S:3}
A.YF.prototype={
vQ(a,b,c,d){this.qZ(0,a,b,new A.YG(c),d)},
p_(a,b,c){return this.vQ(a,b,c,!0)},
jw(){var s=this,r=s.b
s.p_(r,"mousedown",new A.YH(s))
s.p_(self.window,"mousemove",new A.YI(s))
s.vQ(r,"mouseleave",new A.YJ(s),!1)
s.p_(self.window,"mouseup",new A.YK(s))
s.vX(new A.YL(s))},
cZ(a,b,c){var s,r,q,p,o=c.timeStamp
o.toString
o=A.nc(o)
s=c.clientX
r=$.bQ()
q=r.w
if(q==null)q=A.aw()
p=c.clientY
r=r.w
if(r==null)r=A.aw()
this.d.A3(a,b.b,b.a,-1,B.bh,s*q,p*r,1,1,0,B.bi,o)}}
A.YG.prototype={
$1(a){this.a.$1(a)},
$S:1}
A.YH.prototype={
$1(a){var s,r,q=A.a([],t.I),p=this.a,o=p.e,n=a.buttons
n.toString
s=o.lB(n)
if(s!=null)p.cZ(q,s,a)
n=a.button
r=a.buttons
r.toString
p.cZ(q,o.uL(n,r),a)
p.c.$1(q)},
$S:3}
A.YI.prototype={
$1(a){var s,r=A.a([],t.I),q=this.a,p=q.e,o=a.buttons
o.toString
s=p.lB(o)
if(s!=null)q.cZ(r,s,a)
o=a.buttons
o.toString
q.cZ(r,p.oo(o),a)
q.c.$1(r)},
$S:3}
A.YJ.prototype={
$1(a){var s,r=A.a([],t.I),q=this.a,p=a.buttons
p.toString
s=q.e.uM(p)
if(s!=null){q.cZ(r,s,a)
q.c.$1(r)}},
$S:3}
A.YK.prototype={
$1(a){var s=A.a([],t.I),r=this.a,q=r.e.uN(a.buttons)
if(q!=null){r.cZ(s,q,a)
r.c.$1(s)}},
$S:3}
A.YL.prototype={
$1(a){this.a.xi(a)},
$S:1}
A.nH.prototype={}
A.R2.prototype={
m1(a,b,c){return this.a.aQ(0,a,new A.R3(b,c))},
hB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q=this.a.j(0,c)
q.toString
s=q.b
r=q.c
q.b=i
q.c=j
q=q.a
if(q==null)q=0
return A.a5A(a,b,c,d,e,f,!1,h,i-s,j-r,i,j,k,q,l,m,n,o,p,a0,a1,a2,a3,a4,a5,!1,a6,a7)},
qf(a,b,c){var s=this.a.j(0,a)
s.toString
return s.b!==b||s.c!==c},
fU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3,a4,a5,a6){var s,r,q=this.a.j(0,c)
q.toString
s=q.b
r=q.c
q.b=i
q.c=j
q=q.a
if(q==null)q=0
return A.a5A(a,b,c,d,e,f,!1,h,i-s,j-r,i,j,k,q,l,m,n,o,p,a0,a1,a2,a3,B.bi,a4,!0,a5,a6)},
re(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var s,r,q,p=this
if(m===B.bi)switch(c.a){case 1:p.m1(d,f,g)
a.push(p.hB(b,c,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,m,0,n,o))
break
case 3:s=p.a.U(0,d)
p.m1(d,f,g)
if(!s)a.push(p.fU(b,B.iv,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,0,n,o))
a.push(p.hB(b,c,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,m,0,n,o))
p.b=b
break
case 4:s=p.a.U(0,d)
p.m1(d,f,g).a=$.a6F=$.a6F+1
if(!s)a.push(p.fU(b,B.iv,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,0,n,o))
if(p.qf(d,f,g))a.push(p.fU(0,B.bg,d,0,0,e,!1,0,f,g,0,0,i,j,0,0,0,0,k,l,0,n,o))
a.push(p.hB(b,c,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,m,0,n,o))
p.b=b
break
case 5:a.push(p.hB(b,c,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,m,0,n,o))
p.b=b
break
case 6:case 0:r=p.a
q=r.j(0,d)
q.toString
if(c===B.iu){f=q.b
g=q.c}if(p.qf(d,f,g))a.push(p.fU(p.b,B.c1,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,0,n,o))
a.push(p.hB(b,c,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,m,0,n,o))
if(e===B.d_){a.push(p.fU(0,B.Cj,d,0,0,e,!1,0,f,g,0,0,i,j,0,0,0,0,k,l,0,n,o))
r.u(0,d)}break
case 2:r=p.a
q=r.j(0,d)
q.toString
a.push(p.hB(b,c,d,0,0,e,!1,0,q.b,q.c,0,h,i,j,0,0,0,0,k,l,m,0,n,o))
r.u(0,d)
break
case 7:case 8:case 9:break}else switch(m.a){case 1:s=p.a.U(0,d)
p.m1(d,f,g)
if(!s)a.push(p.fU(b,B.iv,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,0,n,o))
if(p.qf(d,f,g))if(b!==0)a.push(p.fU(b,B.c1,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,0,n,o))
else a.push(p.fU(b,B.bg,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,0,n,o))
a.push(p.hB(b,c,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,m,0,n,o))
break
case 0:break
case 2:break}},
ON(a,b,c,d,e,f,g,h,i,j,k,l,m,n){return this.re(a,b,c,d,e,f,g,h,i,j,k,l,m,0,n)},
A3(a,b,c,d,e,f,g,h,i,j,k,l){return this.re(a,b,c,d,e,f,g,h,i,j,0,0,k,0,l)},
OM(a,b,c,d,e,f,g,h,i,j,k,l,m){return this.re(a,b,c,d,e,f,g,h,i,j,0,0,k,l,m)}}
A.R3.prototype={
$0(){return new A.nH(this.a,this.b)},
$S:140}
A.a2j.prototype={}
A.OU.prototype={}
A.Oh.prototype={}
A.Oi.prototype={}
A.Ky.prototype={}
A.Kx.prototype={}
A.WF.prototype={}
A.Os.prototype={}
A.Or.prototype={}
A.IL.prototype={
GL(){$.he.push(new A.IM(this))},
gpE(){var s,r=this.c
if(r==null){s=A.aL(self.document,"label")
A.y(s,"setAttribute",["id","accessibility-element"])
r=s.style
A.k(r,"position","fixed")
A.k(r,"overflow","hidden")
A.k(r,"transform","translate(-99999px, -99999px)")
A.k(r,"width","1px")
A.k(r,"height","1px")
this.c=s
r=s}return r},
Qg(a,b){var s=this,r=t.G,q=A.c7(J.b0(r.a(J.b0(r.a(a.dj(b)),"data")),"message"))
if(q!=null&&q.length!==0){A.y(s.gpE(),"setAttribute",["aria-live","polite"])
s.gpE().textContent=q
r=self.document.body
r.toString
r.append(s.gpE())
s.a=A.c_(B.xo,new A.IN(s))}}}
A.IM.prototype={
$0(){var s=this.a.a
if(s!=null)s.b4(0)},
$S:0}
A.IN.prototype={
$0(){this.a.c.remove()},
$S:0}
A.td.prototype={
h(a){return"_CheckableKind."+this.b}}
A.lC.prototype={
fE(a){var s,r,q="setAttribute",p=this.b
if((p.k3&1)!==0){switch(this.c.a){case 0:p.dC("checkbox",!0)
break
case 1:p.dC("radio",!0)
break
case 2:p.dC("switch",!0)
break}if(p.AE()===B.dV){s=p.k2
A.y(s,q,["aria-disabled","true"])
A.y(s,q,["disabled","true"])}else this.y9()
r=p.a
r=(r&2)!==0||(r&131072)!==0?"true":"false"
A.y(p.k2,q,["aria-checked",r])}},
n(){var s=this
switch(s.c.a){case 0:s.b.dC("checkbox",!1)
break
case 1:s.b.dC("radio",!1)
break
case 2:s.b.dC("switch",!1)
break}s.y9()},
y9(){var s=this.b.k2
s.removeAttribute("aria-disabled")
s.removeAttribute("disabled")}}
A.m1.prototype={
fE(a){var s,r,q=this,p=q.b
if(p.gBy()){s=p.dy
s=s!=null&&!B.bX.gK(s)}else s=!1
if(s){if(q.c==null){q.c=A.aL(self.document,"flt-semantics-img")
s=p.dy
if(s!=null&&!B.bX.gK(s)){s=q.c.style
A.k(s,"position","absolute")
A.k(s,"top","0")
A.k(s,"left","0")
r=p.y
A.k(s,"width",A.f(r.c-r.a)+"px")
r=p.y
A.k(s,"height",A.f(r.d-r.b)+"px")}A.k(q.c.style,"font-size","6px")
s=q.c
s.toString
p.k2.append(s)}p=q.c
p.toString
A.y(p,"setAttribute",["role","img"])
q.ys(q.c)}else if(p.gBy()){p.dC("img",!0)
q.ys(p.k2)
q.pf()}else{q.pf()
q.wk()}},
ys(a){var s=this.b.z
if(s!=null&&s.length!==0){a.toString
s.toString
A.y(a,"setAttribute",["aria-label",s])}},
pf(){var s=this.c
if(s!=null){s.remove()
this.c=null}},
wk(){var s=this.b
s.dC("img",!1)
s.k2.removeAttribute("aria-label")},
n(){this.pf()
this.wk()}}
A.m4.prototype={
GR(a){var s=this,r=s.c
a.k2.append(r)
r.type="range"
A.y(r,"setAttribute",["role","slider"])
A.bv(r,"change",A.a4(new A.Ow(s,a)),null)
r=new A.Ox(s)
s.e=r
a.k1.Q.push(r)},
fE(a){var s=this
switch(s.b.k1.y.a){case 1:s.IA()
s.Nz()
break
case 0:s.wI()
break}},
IA(){var s=this.c,r=s.disabled
r.toString
if(!r)return
s.disabled=!1},
Nz(){var s,r,q,p,o,n,m,l=this,k="setAttribute"
if(!l.f){s=l.b.k3
r=(s&4096)!==0||(s&8192)!==0||(s&16384)!==0}else r=!0
if(!r)return
l.f=!1
q=""+l.d
s=l.c
s.value=q
A.y(s,k,["aria-valuenow",q])
p=l.b
o=p.ax
o.toString
A.y(s,k,["aria-valuetext",o])
n=p.ch.length!==0?""+(l.d+1):q
s.max=n
A.y(s,k,["aria-valuemax",n])
m=p.cx.length!==0?""+(l.d-1):q
s.min=m
A.y(s,k,["aria-valuemin",m])},
wI(){var s=this.c,r=s.disabled
r.toString
if(r)return
s.disabled=!0},
n(){var s=this
B.b.u(s.b.k1.Q,s.e)
s.e=null
s.wI()
s.c.remove()}}
A.Ow.prototype={
$1(a){var s,r=this.a,q=r.c,p=q.disabled
p.toString
if(p)return
r.f=!0
q=q.value
q.toString
s=A.et(q,null)
q=r.d
if(s>q){r.d=q+1
r=$.ao()
A.jy(r.p3,r.p4,this.b.id,B.rn,null)}else if(s<q){r.d=q-1
r=$.ao()
A.jy(r.p3,r.p4,this.b.id,B.rj,null)}},
$S:1}
A.Ox.prototype={
$1(a){this.a.fE(0)},
$S:78}
A.me.prototype={
fE(a){var s,r,q=this,p=q.b,o=p.ax,n=o!=null&&o.length!==0,m=p.z,l=m!=null&&m.length!==0,k=p.fy,j=k!=null&&k.length!==0
if(n){s=p.b
s.toString
r=!((s&64)!==0||(s&128)!==0)}else r=!1
s=!l
if(s&&!r&&!j){q.wj()
return}if(j){k=""+A.f(k)
if(!s||r)k+="\n"}else k=""
if(l){m=k+A.f(m)
if(r)m+=" "}else m=k
o=r?m+A.f(o):m
m=p.k2
o=o.charCodeAt(0)==0?o:o
A.y(m,"setAttribute",["aria-label",o])
if((p.a&512)!==0)p.dC("heading",!0)
if(q.c==null){q.c=A.aL(self.document,"flt-semantics-value")
k=p.dy
if(k!=null&&!B.bX.gK(k)){k=q.c.style
A.k(k,"position","absolute")
A.k(k,"top","0")
A.k(k,"left","0")
s=p.y
A.k(k,"width",A.f(s.c-s.a)+"px")
p=p.y
A.k(k,"height",A.f(p.d-p.b)+"px")}p=q.c.style
k=$.d1
A.k(p,"font-size",(k==null?$.d1=new A.eF(self.window.flutterConfiguration):k).gAj()?"12px":"6px")
p=q.c
p.toString
m.append(p)}p=q.c
p.toString
p.textContent=o},
wj(){var s=this.c
if(s!=null){s.remove()
this.c=null}s=this.b
s.k2.removeAttribute("aria-label")
s.dC("heading",!1)},
n(){this.wj()}}
A.mi.prototype={
fE(a){var s=this.b,r=s.z
r=r!=null&&r.length!==0
s=s.k2
if(r)A.y(s,"setAttribute",["aria-live","polite"])
else s.removeAttribute("aria-live")},
n(){this.b.k2.removeAttribute("aria-live")}}
A.mF.prototype={
Mq(){var s,r,q,p,o=this,n=null
if(o.gwL()!==o.e){s=o.b
if(!s.k1.DG("scroll"))return
r=o.gwL()
q=o.e
o.xK()
s.Ch()
p=s.id
if(r>q){s=s.b
s.toString
if((s&32)!==0||(s&16)!==0){s=$.ao()
A.jy(s.p3,s.p4,p,B.rk,n)}else{s=$.ao()
A.jy(s.p3,s.p4,p,B.rm,n)}}else{s=s.b
s.toString
if((s&32)!==0||(s&16)!==0){s=$.ao()
A.jy(s.p3,s.p4,p,B.rl,n)}else{s=$.ao()
A.jy(s.p3,s.p4,p,B.ro,n)}}}},
fE(a){var s,r,q,p=this
if(p.d==null){s=p.b
r=s.k2
A.k(r.style,"touch-action","none")
p.wX()
s=s.k1
s.d.push(new A.T_(p))
q=new A.T0(p)
p.c=q
s.Q.push(q)
q=A.a4(new A.T1(p))
p.d=q
A.bv(r,"scroll",q,null)}},
gwL(){var s=this.b,r=s.b
r.toString
r=(r&32)!==0||(r&16)!==0
s=s.k2
if(r)return J.IJ(s.scrollTop)
else return J.IJ(s.scrollLeft)},
xK(){var s=this.b,r=s.k2,q=s.b
q.toString
if((q&32)!==0||(q&16)!==0){r.scrollTop=10
s.p3=this.e=J.IJ(r.scrollTop)
s.p4=0}else{r.scrollLeft=10
q=J.IJ(r.scrollLeft)
this.e=q
s.p3=0
s.p4=q}},
wX(){var s="overflow-y",r="overflow-x",q=this.b,p=q.k2
switch(q.k1.y.a){case 1:q=q.b
q.toString
if((q&32)!==0||(q&16)!==0)A.k(p.style,s,"scroll")
else A.k(p.style,r,"scroll")
break
case 0:q=q.b
q.toString
if((q&32)!==0||(q&16)!==0)A.k(p.style,s,"hidden")
else A.k(p.style,r,"hidden")
break}},
n(){var s=this,r=s.b,q=r.k2,p=q.style
p.removeProperty("overflowY")
p.removeProperty("overflowX")
p.removeProperty("touch-action")
p=s.d
if(p!=null)A.d8(q,"scroll",p,null)
B.b.u(r.k1.Q,s.c)
s.c=null}}
A.T_.prototype={
$0(){this.a.xK()},
$S:0}
A.T0.prototype={
$1(a){this.a.wX()},
$S:78}
A.T1.prototype={
$1(a){this.a.Mq()},
$S:1}
A.lR.prototype={
h(a){var s=A.a([],t.s),r=this.a
if((r&1)!==0)s.push("accessibleNavigation")
if((r&2)!==0)s.push("invertColors")
if((r&4)!==0)s.push("disableAnimations")
if((r&8)!==0)s.push("boldText")
if((r&16)!==0)s.push("reduceMotion")
if((r&32)!==0)s.push("highContrast")
if((r&64)!==0)s.push("onOffSwitchLabels")
return"AccessibilityFeatures"+A.f(s)},
k(a,b){if(b==null)return!1
if(J.N(b)!==A.z(this))return!1
return b instanceof A.lR&&b.a===this.a},
gq(a){return B.f.gq(this.a)},
A9(a,b){var s=(a==null?(this.a&1)!==0:a)?1:0,r=this.a
s=(r&2)!==0?s|2:s&4294967293
s=(r&4)!==0?s|4:s&4294967291
s=(r&8)!==0?s|8:s&4294967287
s=(r&16)!==0?s|16:s&4294967279
s=(b==null?(r&32)!==0:b)?s|32:s&4294967263
return new A.lR((r&64)!==0?s|64:s&4294967231)},
OR(a){return this.A9(null,a)},
OQ(a){return this.A9(a,null)}}
A.Mf.prototype={
sQO(a){var s=this.a
this.a=a?s|32:s&4294967263},
aA(){return new A.lR(this.a)}}
A.Ts.prototype={}
A.B8.prototype={}
A.eW.prototype={
h(a){return"Role."+this.b}}
A.a06.prototype={
$1(a){return A.acx(a)},
$S:144}
A.a07.prototype={
$1(a){return new A.mF(a)},
$S:146}
A.a08.prototype={
$1(a){return new A.me(a)},
$S:148}
A.a09.prototype={
$1(a){return new A.mW(a)},
$S:149}
A.a0a.prototype={
$1(a){var s,r,q="setAttribute",p=new A.n_(a),o=(a.a&524288)!==0?A.aL(self.document,"textarea"):A.aL(self.document,"input")
p.c=o
o.spellcheck=!1
A.y(o,q,["autocorrect","off"])
A.y(o,q,["autocomplete","off"])
A.y(o,q,["data-semantics-role","text-field"])
s=o.style
A.k(s,"position","absolute")
A.k(s,"top","0")
A.k(s,"left","0")
r=a.y
A.k(s,"width",A.f(r.c-r.a)+"px")
r=a.y
A.k(s,"height",A.f(r.d-r.b)+"px")
a.k2.append(o)
o=$.by()
switch(o.a){case 0:case 5:case 3:case 4:case 2:case 6:p.xp()
break
case 1:p.KX()
break}return p},
$S:154}
A.a0b.prototype={
$1(a){return new A.lC(A.age(a),a)},
$S:158}
A.a0c.prototype={
$1(a){return new A.m1(a)},
$S:161}
A.a0d.prototype={
$1(a){return new A.mi(a)},
$S:162}
A.dT.prototype={}
A.c5.prototype={
uG(){var s,r=this
if(r.k4==null){s=A.aL(self.document,"flt-semantics-container")
r.k4=s
s=s.style
A.k(s,"position","absolute")
A.k(s,"pointer-events","none")
s=r.k4
s.toString
r.k2.append(s)}return r.k4},
gBy(){var s,r=this.a
if((r&16384)!==0){s=this.b
s.toString
r=(s&1)===0&&(r&8)===0}else r=!1
return r},
AE(){var s=this.a
if((s&64)!==0)if((s&128)!==0)return B.xy
else return B.dV
else return B.xx},
T6(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.fr
if(a3==null||a3.length===0){s=a2.p1
if(s==null||s.length===0){a2.p1=null
return}r=s.length
for(s=a2.k1,q=s.a,p=0;p<r;++p){o=q.j(0,a2.p1[p].id)
s.c.push(o)}a2.k4.remove()
a2.p1=a2.k4=null
return}s=a2.dy
s.toString
n=a3.length
m=a2.uG()
l=A.a([],t.b3)
for(q=a2.k1,k=q.a,p=0;p<n;++p){j=k.j(0,s[p])
j.toString
l.push(j)}if(n>1)for(p=0;p<n;++p){s=k.j(0,a3[p]).k2.style
s.setProperty("z-index",""+(n-p),"")}i=a2.p1
if(i==null||i.length===0){for(s=l.length,h=0;h<l.length;l.length===s||(0,A.E)(l),++h){g=l[h]
m.append(g.k2)
g.ok=a2
q.b.l(0,g.id,a2)}a2.p1=l
return}f=i.length
s=t.t
e=A.a([],s)
d=Math.min(f,n)
c=0
while(!0){if(!(c<d&&i[c]===l[c]))break
e.push(c);++c}if(f===l.length&&c===n)return
for(;c<n;){for(b=0;b<f;++b)if(i[b]===l[c]){e.push(b)
break}++c}a=A.a8b(e)
a0=A.a([],s)
for(s=a.length,p=0;p<s;++p)a0.push(i[e[a[p]]].id)
for(p=0;p<f;++p)if(!B.b.A(e,p)){o=k.j(0,i[p].id)
q.c.push(o)}for(p=n-1,a1=null;p>=0;--p){g=l[p]
s=g.id
if(!B.b.A(a0,s)){k=g.k2
if(a1==null)m.append(k)
else m.insertBefore(k,a1)
g.ok=a2
q.b.l(0,s,a2)}a1=g.k2}a2.p1=l},
dC(a,b){var s
if(b)A.y(this.k2,"setAttribute",["role",a])
else{s=this.k2
if(s.getAttribute("role")===a)s.removeAttribute("role")}},
fW(a,b){var s=this.p2,r=s.j(0,a)
if(b){if(r==null){r=$.a9R().j(0,a).$1(this)
s.l(0,a,r)}r.fE(0)}else if(r!=null){r.n()
s.u(0,a)}},
Ch(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.k2,g=h.style,f=i.y
A.k(g,"width",A.f(f.c-f.a)+"px")
f=i.y
A.k(g,"height",A.f(f.d-f.b)+"px")
g=i.dy
s=g!=null&&!B.bX.gK(g)?i.uG():null
g=i.y
r=g.b===0&&g.a===0
q=i.dx
g=q==null
p=g||A.a1c(q)===B.t4
if(r&&p&&i.p3===0&&i.p4===0){A.Tl(h)
if(s!=null)A.Tl(s)
return}o=A.bT("effectiveTransform")
if(!r)if(g){g=i.y
n=g.a
m=g.b
g=A.cK()
g.im(n,m,0)
o.b=g
l=n===0&&m===0}else{g=new A.be(new Float32Array(16))
g.aw(new A.be(q))
f=i.y
g.ul(0,f.a,f.b,0)
o.b=g
l=J.aaq(o.aK())}else if(!p){o.b=new A.be(q)
l=!1}else l=!0
if(!l){h=h.style
A.k(h,"transform-origin","0 0 0")
A.k(h,"transform",A.es(o.aK().a))}else A.Tl(h)
if(s!=null)if(!r||i.p3!==0||i.p4!==0){h=i.y
g=h.a
f=i.p4
h=h.b
k=i.p3
j=s.style
A.k(j,"top",A.f(-h+k)+"px")
A.k(j,"left",A.f(-g+f)+"px")}else A.Tl(s)},
h(a){var s=this.aY(0)
return s}}
A.IO.prototype={
h(a){return"AccessibilityMode."+this.b}}
A.k4.prototype={
h(a){return"GestureMode."+this.b}}
A.Mz.prototype={
GP(){$.he.push(new A.MA(this))},
IP(){var s,r,q,p,o,n,m,l=this
for(s=l.c,r=s.length,q=l.a,p=0;p<s.length;s.length===r||(0,A.E)(s),++p){o=s[p]
n=l.b
m=o.id
if(n.j(0,m)==null){q.u(0,m)
o.ok=null
o.k2.remove()}}l.c=A.a([],t.aZ)
l.b=A.x(t.lo,t.n_)
s=l.d
r=s.length
if(r!==0){for(p=0;p<s.length;s.length===r||(0,A.E)(s),++p)s[p].$0()
l.d=A.a([],t.bZ)}},
soq(a){var s,r,q
if(this.w)return
s=$.ao()
r=s.a
s.a=r.A5(r.a.OQ(!0))
this.w=!0
s=$.ao()
r=this.w
q=s.a
if(r!==q.c){s.a=q.OV(r)
r=s.p1
if(r!=null)A.jx(r,s.p2)}},
Jc(){var s=this,r=s.z
if(r==null){r=s.z=new A.o3(s.f)
r.d=new A.MB(s)}return r},
Cg(a){var s,r=this
if(B.b.A(B.zo,a.type)){s=r.Jc()
s.toString
s.srn(J.fc(r.f.$0(),B.kb))
if(r.y!==B.kg){r.y=B.kg
r.xL()}}return r.r.a.DI(a)},
xL(){var s,r
for(s=this.Q,r=0;r<s.length;++r)s[r].$1(this.y)},
DG(a){if(B.b.A(B.zq,a))return this.y===B.b6
return!1},
T8(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
if(!f.w){f.r.a.n()
f.soq(!0)}for(s=a.a,r=s.length,q=f.a,p=t.e,o=t.zB,n=t.Dw,m=t.f,l=0;k=s.length,l<k;s.length===r||(0,A.E)(s),++l){j=s[l]
k=j.a
i=q.j(0,k)
if(i==null){h=self.document
g=A.a(["flt-semantics"],m)
h=p.a(h.createElement.apply(h,g))
i=new A.c5(k,f,h,A.x(o,n))
g=h.style
g.setProperty("position","absolute","")
h.setAttribute.apply(h,["id","flt-semantic-node-"+k])
if(k===0){g=$.d1
g=(g==null?$.d1=new A.eF(self.window.flutterConfiguration):g).a
g=g==null?null:g.debugShowSemanticsNodes
g=g!==!0}else g=!1
if(g){g=h.style
g.setProperty("filter","opacity(0%)","")
g=h.style
g.setProperty("color","rgba(0,0,0,0)","")}g=$.d1
g=(g==null?$.d1=new A.eF(self.window.flutterConfiguration):g).a
g=g==null?null:g.debugShowSemanticsNodes
if(g===!0){h=h.style
h.setProperty("outline","1px solid green","")}q.l(0,k,i)}k=j.b
if(i.a!==k){i.a=k
i.k3=(i.k3|1)>>>0}k=j.cx
if(i.ax!==k){i.ax=k
i.k3=(i.k3|4096)>>>0}k=j.cy
if(i.ay!==k){i.ay=k
i.k3=(i.k3|4096)>>>0}k=j.ax
if(i.z!==k){i.z=k
i.k3=(i.k3|1024)>>>0}k=j.ay
if(i.Q!==k){i.Q=k
i.k3=(i.k3|1024)>>>0}k=j.at
if(!J.e(i.y,k)){i.y=k
i.k3=(i.k3|512)>>>0}k=j.go
if(i.dx!==k){i.dx=k
i.k3=(i.k3|65536)>>>0}k=j.z
if(i.r!==k){i.r=k
i.k3=(i.k3|64)>>>0}k=i.b
h=j.c
if(k!==h){i.b=h
i.k3=(i.k3|2)>>>0
k=h}h=j.f
if(i.c!==h){i.c=h
i.k3=(i.k3|4)>>>0}h=j.r
if(i.d!==h){i.d=h
i.k3=(i.k3|8)>>>0}h=j.x
if(i.e!==h){i.e=h
i.k3=(i.k3|16)>>>0}h=j.y
if(i.f!==h){i.f=h
i.k3=(i.k3|32)>>>0}h=j.Q
if(i.w!==h){i.w=h
i.k3=(i.k3|128)>>>0}h=j.as
if(i.x!==h){i.x=h
i.k3=(i.k3|256)>>>0}h=j.ch
if(i.as!==h){i.as=h
i.k3=(i.k3|2048)>>>0}h=j.CW
if(i.at!==h){i.at=h
i.k3=(i.k3|2048)>>>0}h=j.db
if(i.ch!==h){i.ch=h
i.k3=(i.k3|8192)>>>0}h=j.dx
if(i.CW!==h){i.CW=h
i.k3=(i.k3|8192)>>>0}h=j.dy
if(i.cx!==h){i.cx=h
i.k3=(i.k3|16384)>>>0}h=j.fr
if(i.cy!==h){i.cy=h
i.k3=(i.k3|16384)>>>0}h=i.fy
g=j.fx
if(h!==g){i.fy=g
i.k3=(i.k3|4194304)>>>0
h=g}g=j.fy
if(i.db!=g){i.db=g
i.k3=(i.k3|32768)>>>0}g=j.k1
if(i.fr!==g){i.fr=g
i.k3=(i.k3|1048576)>>>0}g=j.id
if(i.dy!==g){i.dy=g
i.k3=(i.k3|524288)>>>0}g=j.k2
if(i.fx!==g){i.fx=g
i.k3=(i.k3|2097152)>>>0}g=j.w
if(i.go!==g){i.go=g
i.k3=(i.k3|8388608)>>>0}g=i.z
if(!(g!=null&&g.length!==0)){g=i.ax
if(!(g!=null&&g.length!==0))h=h!=null&&h.length!==0
else h=!0}else h=!0
if(h){h=i.a
if((h&16)===0){if((h&16384)!==0){k.toString
k=(k&1)===0&&(h&8)===0}else k=!1
k=!k}else k=!1}else k=!1
i.fW(B.r8,k)
i.fW(B.ra,(i.a&16)!==0)
k=i.b
k.toString
i.fW(B.r9,((k&1)!==0||(i.a&8)!==0)&&(i.a&16)===0)
k=i.b
k.toString
i.fW(B.r6,(k&64)!==0||(k&128)!==0)
k=i.b
k.toString
i.fW(B.r7,(k&32)!==0||(k&16)!==0||(k&4)!==0||(k&8)!==0)
k=i.a
i.fW(B.rb,(k&1)!==0||(k&65536)!==0)
k=i.a
if((k&16384)!==0){h=i.b
h.toString
k=(h&1)===0&&(k&8)===0}else k=!1
i.fW(B.rc,k)
k=i.a
i.fW(B.rd,(k&32768)!==0&&(k&8192)===0)
k=i.k3
if((k&512)!==0||(k&65536)!==0||(k&64)!==0)i.Ch()
k=i.dy
k=!(k!=null&&!B.bX.gK(k))&&i.go===-1
h=i.k2
if(k){k=h.style
k.setProperty("pointer-events","all","")}else{k=h.style
k.setProperty("pointer-events","none","")}}for(l=0;l<s.length;s.length===k||(0,A.E)(s),++l){i=q.j(0,s[l].a)
i.T6()
i.k3=0}if(f.e==null){s=q.j(0,0).k2
f.e=s
$.f9.r.append(s)}f.IP()}}
A.MA.prototype={
$0(){var s=this.a.e
if(s!=null)s.remove()},
$S:0}
A.MC.prototype={
$0(){return new A.dg(Date.now(),!1)},
$S:55}
A.MB.prototype={
$0(){var s=this.a
if(s.y===B.b6)return
s.y=B.b6
s.xL()},
$S:0}
A.p9.prototype={
h(a){return"EnabledState."+this.b}}
A.Th.prototype={}
A.Td.prototype={
DI(a){if(!this.gBz())return!0
else return this.ob(a)}}
A.KE.prototype={
gBz(){return this.a!=null},
ob(a){var s
if(this.a==null)return!0
s=$.cV
if((s==null?$.cV=A.iv():s).w)return!0
if(!J.e_(B.Dd.a,a.type))return!0
if(!J.e(a.target,this.a))return!0
s=$.cV;(s==null?$.cV=A.iv():s).soq(!0)
this.n()
return!1},
C3(){var s,r="setAttribute",q=this.a=A.aL(self.document,"flt-semantics-placeholder")
A.bv(q,"click",A.a4(new A.KF(this)),!0)
A.y(q,r,["role","button"])
A.y(q,r,["aria-live","polite"])
A.y(q,r,["tabindex","0"])
A.y(q,r,["aria-label","Enable accessibility"])
s=q.style
A.k(s,"position","absolute")
A.k(s,"left","-1px")
A.k(s,"top","-1px")
A.k(s,"width","1px")
A.k(s,"height","1px")
return q},
n(){var s=this.a
if(s!=null)s.remove()
this.a=null}}
A.KF.prototype={
$1(a){this.a.ob(a)},
$S:1}
A.PO.prototype={
gBz(){return this.b!=null},
ob(a){var s,r,q,p,o,n,m,l,k,j=this
if(j.b==null)return!0
if(j.d){s=$.by()
if(s!==B.w||a.type==="touchend"||a.type==="pointerup"||a.type==="click")j.n()
return!0}s=$.cV
if((s==null?$.cV=A.iv():s).w)return!0
if(++j.c>=20)return j.d=!0
if(!J.e_(B.Dc.a,a.type))return!0
if(j.a!=null)return!1
r=A.bT("activationPoint")
switch(a.type){case"click":r.sc3(new A.p_(a.offsetX,a.offsetY))
break
case"touchstart":case"touchend":s=A.iu(a)
s=s.gF(s)
r.sc3(new A.p_(s.clientX,s.clientY))
break
case"pointerdown":case"pointerup":r.sc3(new A.p_(a.clientX,a.clientY))
break
default:return!0}s=j.b.getBoundingClientRect()
q=s.left
p=s.right
o=s.left
n=s.top
m=s.bottom
s=s.top
l=r.aK().a-(q+(p-o)/2)
k=r.aK().b-(n+(m-s)/2)
if(l*l+k*k<1&&!0){j.d=!0
j.a=A.c_(B.cl,new A.PQ(j))
return!1}return!0},
C3(){var s,r="setAttribute",q=this.b=A.aL(self.document,"flt-semantics-placeholder")
A.bv(q,"click",A.a4(new A.PP(this)),!0)
A.y(q,r,["role","button"])
A.y(q,r,["aria-label","Enable accessibility"])
s=q.style
A.k(s,"position","absolute")
A.k(s,"left","0")
A.k(s,"top","0")
A.k(s,"right","0")
A.k(s,"bottom","0")
return q},
n(){var s=this.b
if(s!=null)s.remove()
this.a=this.b=null}}
A.PQ.prototype={
$0(){this.a.n()
var s=$.cV;(s==null?$.cV=A.iv():s).soq(!0)},
$S:0}
A.PP.prototype={
$1(a){this.a.ob(a)},
$S:1}
A.mW.prototype={
fE(a){var s,r=this,q=r.b,p=q.k2
p.tabIndex=0
q.dC("button",(q.a&8)!==0)
if(q.AE()===B.dV&&(q.a&8)!==0){A.y(p,"setAttribute",["aria-disabled","true"])
r.qE()}else{p.removeAttribute("aria-disabled")
s=q.b
s.toString
if((s&1)!==0&&(q.a&16)===0){if(r.c==null){s=A.a4(new A.VG(r))
r.c=s
A.bv(p,"click",s,null)}}else r.qE()}if((q.k3&1)!==0&&(q.a&32)!==0)p.focus()},
qE(){var s=this.c
if(s==null)return
A.d8(this.b.k2,"click",s,null)
this.c=null},
n(){this.qE()
this.b.dC("button",!1)}}
A.VG.prototype={
$1(a){var s,r=this.a.b
if(r.k1.y!==B.b6)return
s=$.ao()
A.jy(s.p3,s.p4,r.id,B.d3,null)},
$S:1}
A.Tr.prototype={
rI(a,b,c,d){this.CW=b
this.x=d
this.y=c},
NZ(a){var s,r,q=this,p=q.ch
if(p===a)return
else if(p!=null)q.eN(0)
q.ch=a
p=a.c
p===$&&A.h()
q.c=p
q.yM()
p=q.CW
p.toString
s=q.x
s.toString
r=q.y
r.toString
q.EC(0,p,r,s)},
eN(a){var s,r,q,p,o,n=this
if(!n.b)return
n.b=!1
n.w=n.r=null
for(s=n.z,r=t.f,q=0;q<s.length;++q){p=s[q]
o=p.b
p=A.a([p.a,p.c],r)
o.removeEventListener.apply(o,p)}B.b.H(s)
n.e=null
s=n.c
if(s!=null)s.blur()
n.cx=n.ch=n.c=null},
kc(){var s,r,q=this,p=q.d
p===$&&A.h()
p=p.w
if(p!=null)B.b.E(q.z,p.ke())
p=q.z
s=q.c
s.toString
r=q.gkU()
p.push(A.bB(s,"input",A.a4(r)))
s=q.c
s.toString
p.push(A.bB(s,"keydown",A.a4(q.gl9())))
p.push(A.bB(self.document,"selectionchange",A.a4(r)))
q.tZ()},
j4(a,b,c){this.b=!0
this.d=a
this.r4(a)},
ev(){this.d===$&&A.h()
this.c.focus()},
nu(){},
ur(a){},
us(a){this.cx=a
this.yM()},
yM(){var s=this.cx
if(s==null||this.c==null)return
s.toString
this.ED(s)}}
A.n_.prototype={
xp(){var s=this.c
s===$&&A.h()
A.bv(s,"focus",A.a4(new A.VL(this)),null)},
KX(){var s={},r=$.cS()
if(r===B.aj){this.xp()
return}s.a=s.b=null
r=this.c
r===$&&A.h()
A.bv(r,"touchstart",A.a4(new A.VM(s)),!0)
A.bv(r,"touchend",A.a4(new A.VN(s,this)),!0)},
fE(a){var s,r,q=this,p=q.b,o=p.z,n=o!=null&&o.length!==0,m=q.c
if(n){m===$&&A.h()
o.toString
A.y(m,"setAttribute",["aria-label",o])}else{m===$&&A.h()
m.removeAttribute("aria-label")}o=q.c
o===$&&A.h()
n=o.style
m=p.y
A.k(n,"width",A.f(m.c-m.a)+"px")
m=p.y
A.k(n,"height",A.f(m.d-m.b)+"px")
m=p.ax
s=A.xs(p.c,null,null,p.d,m)
if((p.a&32)!==0){if(!q.d){q.d=!0
$.rk.NZ(q)
r=!0}else r=!1
if(!J.e(self.document.activeElement,o))r=!0
$.rk.ou(s)}else{if(q.d){n=$.rk
if(n.ch===q)n.eN(0)
n=self.window.HTMLInputElement
n.toString
if(o instanceof n)o.value=s.a
else{n=self.window.HTMLTextAreaElement
n.toString
if(o instanceof n)o.value=s.a
else A.U(A.M("Unsupported DOM element type"))}if(q.d&&J.e(self.document.activeElement,o))o.blur()
q.d=!1}r=!1}if(r)p.k1.d.push(new A.VO(q))},
n(){var s=this.c
s===$&&A.h()
s.remove()
s=$.rk
if(s.ch===this)s.eN(0)}}
A.VL.prototype={
$1(a){var s,r=this.a.b
if(r.k1.y!==B.b6)return
s=$.ao()
A.jy(s.p3,s.p4,r.id,B.d3,null)},
$S:1}
A.VM.prototype={
$1(a){var s=A.iu(a),r=this.a
r.b=s.gI(s).clientX
s=A.iu(a)
r.a=s.gI(s).clientY},
$S:1}
A.VN.prototype={
$1(a){var s,r,q=this.a
if(q.b!=null){s=A.iu(a)
s=s.gI(s).clientX
r=A.iu(a)
r=r.gI(r).clientY
if(s*s+r*r<324){s=$.ao()
A.jy(s.p3,s.p4,this.b.b.id,B.d3,null)}}q.a=q.b=null},
$S:1}
A.VO.prototype={
$0(){var s=self.document.activeElement,r=this.a.c
r===$&&A.h()
if(!J.e(s,r))r.focus()},
$S:0}
A.hc.prototype={
gm(a){return this.b},
j(a,b){if(b>=this.b)throw A.d(A.bC(b,this,null,null,null))
return this.a[b]},
l(a,b,c){if(b>=this.b)throw A.d(A.bC(b,this,null,null,null))
this.a[b]=c},
sm(a,b){var s,r,q,p=this,o=p.b
if(b<o)for(s=p.a,r=b;r<o;++r)s[r]=0
else{o=p.a.length
if(b>o){if(o===0)q=new Uint8Array(b)
else q=p.pu(b)
B.A.cd(q,0,p.b,p.a)
p.a=q}}p.b=b},
c8(a,b){var s=this,r=s.b
if(r===s.a.length)s.vL(r)
s.a[s.b++]=b},
C(a,b){var s=this,r=s.b
if(r===s.a.length)s.vL(r)
s.a[s.b++]=b},
mG(a,b,c,d){A.cO(c,"start")
if(d!=null&&c>d)throw A.d(A.bf(d,c,null,"end",null))
this.H1(b,c,d)},
E(a,b){return this.mG(a,b,0,null)},
H1(a,b,c){var s,r,q,p=this
if(A.r(p).i("w<hc.E>").b(a))c=c==null?a.length:c
if(c!=null){p.L3(p.b,a,b,c)
return}for(s=J.al(a),r=0;s.p();){q=s.gB(s)
if(r>=b)p.c8(0,q);++r}if(r<b)throw A.d(A.a8("Too few elements"))},
L3(a,b,c,d){var s,r,q,p=this,o=J.aB(b)
if(c>o.gm(b)||d>o.gm(b))throw A.d(A.a8("Too few elements"))
s=d-c
r=p.b+s
p.ID(r)
o=p.a
q=a+s
B.A.aF(o,q,p.b+s,o,a)
B.A.aF(p.a,a,q,b,c)
p.b=r},
ID(a){var s,r=this
if(a<=r.a.length)return
s=r.pu(a)
B.A.cd(s,0,r.b,r.a)
r.a=s},
pu(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
vL(a){var s=this.pu(null)
B.A.cd(s,0,a,this.a)
this.a=s},
aF(a,b,c,d,e){var s=this.b
if(c>s)throw A.d(A.bf(c,0,s,null,null))
s=this.a
if(A.r(this).i("hc<hc.E>").b(d))B.A.aF(s,b,c,d.a,e)
else B.A.aF(s,b,c,d,e)},
cd(a,b,c,d){return this.aF(a,b,c,d,0)}}
A.Eb.prototype={}
A.C5.prototype={}
A.ec.prototype={
h(a){return A.z(this).h(0)+"("+this.a+", "+A.f(this.b)+")"}}
A.OI.prototype={
b6(a){return A.hE(B.b_.d1(B.ao.rJ(a)).buffer,0,null)},
dj(a){if(a==null)return a
return B.ao.cz(0,B.bo.d1(A.c2(a.buffer,0,null)))}}
A.OK.prototype={
ej(a){return B.z.b6(A.aQ(["method",a.a,"args",a.b],t.N,t.z))},
eg(a){var s,r,q,p=null,o=B.z.dj(a)
if(!t.G.b(o))throw A.d(A.bK("Expected method call Map, got "+A.f(o),p,p))
s=J.aB(o)
r=s.j(o,"method")
q=s.j(o,"args")
if(typeof r=="string")return new A.ec(r,q)
throw A.d(A.bK("Invalid method call: "+A.f(o),p,p))}}
A.Vb.prototype={
b6(a){var s=A.a2D()
this.c4(0,s,!0)
return s.h4()},
dj(a){var s,r
if(a==null)return null
s=new A.A7(a)
r=this.dX(0,s)
if(s.b<a.byteLength)throw A.d(B.X)
return r},
c4(a,b,c){var s,r,q,p,o=this
if(c==null)b.b.c8(0,0)
else if(A.ju(c)){s=c?1:2
b.b.c8(0,s)}else if(typeof c=="number"){s=b.b
s.c8(0,6)
b.fN(8)
b.c.setFloat64(0,c,B.B===$.cn())
s.E(0,b.d)}else if(A.lb(c)){s=-2147483648<=c&&c<=2147483647
r=b.b
q=b.c
if(s){r.c8(0,3)
q.setInt32(0,c,B.B===$.cn())
r.mG(0,b.d,0,4)}else{r.c8(0,4)
B.cW.uZ(q,0,c,$.cn())}}else if(typeof c=="string"){s=b.b
s.c8(0,7)
p=B.b_.d1(c)
o.cU(b,p.length)
s.E(0,p)}else if(t.uo.b(c)){s=b.b
s.c8(0,8)
o.cU(b,c.length)
s.E(0,c)}else if(t.fO.b(c)){s=b.b
s.c8(0,9)
r=c.length
o.cU(b,r)
b.fN(4)
s.E(0,A.c2(c.buffer,c.byteOffset,4*r))}else if(t.cE.b(c)){s=b.b
s.c8(0,11)
r=c.length
o.cU(b,r)
b.fN(8)
s.E(0,A.c2(c.buffer,c.byteOffset,8*r))}else if(t.j.b(c)){b.b.c8(0,12)
s=J.aB(c)
o.cU(b,s.gm(c))
for(s=s.gL(c);s.p();)o.c4(0,b,s.gB(s))}else if(t.G.b(c)){b.b.c8(0,13)
s=J.aB(c)
o.cU(b,s.gm(c))
s.P(c,new A.Ve(o,b))}else throw A.d(A.ig(c,null,null))},
dX(a,b){if(b.b>=b.a.byteLength)throw A.d(B.X)
return this.fB(b.ig(0),b)},
fB(a,b){var s,r,q,p,o,n,m,l,k=this
switch(a){case 0:s=null
break
case 1:s=!0
break
case 2:s=!1
break
case 3:r=b.a.getInt32(b.b,B.B===$.cn())
b.b+=4
s=r
break
case 4:s=b.oi(0)
break
case 5:q=k.cn(b)
s=A.et(B.bo.d1(b.ih(q)),16)
break
case 6:b.fN(8)
r=b.a.getFloat64(b.b,B.B===$.cn())
b.b+=8
s=r
break
case 7:q=k.cn(b)
s=B.bo.d1(b.ih(q))
break
case 8:s=b.ih(k.cn(b))
break
case 9:q=k.cn(b)
b.fN(4)
p=b.a
o=A.a5n(p.buffer,p.byteOffset+b.b,q)
b.b=b.b+4*q
s=o
break
case 10:s=b.oj(k.cn(b))
break
case 11:q=k.cn(b)
b.fN(8)
p=b.a
o=A.a5l(p.buffer,p.byteOffset+b.b,q)
b.b=b.b+8*q
s=o
break
case 12:q=k.cn(b)
s=[]
for(p=b.a,n=0;n<q;++n){m=b.b
if(m>=p.byteLength)A.U(B.X)
b.b=m+1
s.push(k.fB(p.getUint8(m),b))}break
case 13:q=k.cn(b)
p=t.z
s=A.x(p,p)
for(p=b.a,n=0;n<q;++n){m=b.b
if(m>=p.byteLength)A.U(B.X)
b.b=m+1
m=k.fB(p.getUint8(m),b)
l=b.b
if(l>=p.byteLength)A.U(B.X)
b.b=l+1
s.l(0,m,k.fB(p.getUint8(l),b))}break
default:throw A.d(B.X)}return s},
cU(a,b){var s,r,q
if(b<254)a.b.c8(0,b)
else{s=a.b
r=a.c
q=a.d
if(b<=65535){s.c8(0,254)
r.setUint16(0,b,B.B===$.cn())
s.mG(0,q,0,2)}else{s.c8(0,255)
r.setUint32(0,b,B.B===$.cn())
s.mG(0,q,0,4)}}},
cn(a){var s=a.ig(0)
switch(s){case 254:s=a.a.getUint16(a.b,B.B===$.cn())
a.b+=2
return s
case 255:s=a.a.getUint32(a.b,B.B===$.cn())
a.b+=4
return s
default:return s}}}
A.Ve.prototype={
$2(a,b){var s=this.a,r=this.b
s.c4(0,r,a)
s.c4(0,r,b)},
$S:75}
A.Vf.prototype={
eg(a){var s,r,q
a.toString
s=new A.A7(a)
r=B.ap.dX(0,s)
q=B.ap.dX(0,s)
if(typeof r=="string"&&s.b>=a.byteLength)return new A.ec(r,q)
else throw A.d(B.kf)},
kI(a){var s=A.a2D()
s.b.c8(0,0)
B.ap.c4(0,s,a)
return s.h4()},
hR(a,b,c){var s=A.a2D()
s.b.c8(0,1)
B.ap.c4(0,s,a)
B.ap.c4(0,s,c)
B.ap.c4(0,s,b)
return s.h4()}}
A.WJ.prototype={
fN(a){var s,r,q=this.b,p=B.f.e0(q.b,a)
if(p!==0)for(s=a-p,r=0;r<s;++r)q.c8(0,0)},
h4(){var s,r
this.a=!0
s=this.b
r=s.a
return A.hE(r.buffer,0,s.b*r.BYTES_PER_ELEMENT)}}
A.A7.prototype={
ig(a){return this.a.getUint8(this.b++)},
oi(a){B.cW.uE(this.a,this.b,$.cn())},
ih(a){var s=this.a,r=A.c2(s.buffer,s.byteOffset+this.b,a)
this.b+=a
return r},
oj(a){var s
this.fN(8)
s=this.a
B.pG.zI(s.buffer,s.byteOffset+this.b,a)},
fN(a){var s=this.b,r=B.f.e0(s,a)
if(r!==0)this.b=s+(a-r)}}
A.Vu.prototype={}
A.AR.prototype={}
A.AT.prototype={}
A.SC.prototype={}
A.Sq.prototype={}
A.Sr.prototype={}
A.AS.prototype={}
A.SB.prototype={}
A.Sx.prototype={}
A.Sm.prototype={}
A.Sy.prototype={}
A.Sl.prototype={}
A.St.prototype={}
A.Sv.prototype={}
A.Ss.prototype={}
A.Sw.prototype={}
A.Su.prototype={}
A.Sp.prototype={}
A.Sn.prototype={}
A.So.prototype={}
A.SA.prototype={}
A.Sz.prototype={}
A.vT.prototype={
gaE(a){return this.gdf().c},
gaS(a){return this.gdf().d},
gtk(){var s=this.gdf().e
s=s==null?null:s.a.f
return s==null?0:s},
gBH(){return this.gdf().r},
gfZ(a){return this.gdf().w},
gBc(a){return this.gdf().x},
gAr(){this.gdf()
return!1},
gdf(){var s,r,q=this,p=q.w
if(p===$){s=A.jT(A.vf(null,null),"2d",null)
s.toString
t.e.a(s)
r=A.a([],t.dB)
q.w!==$&&A.b5()
p=q.w=new A.rM(q,s,r,B.x)}return p},
i2(a){var s=this
a=new A.kp(Math.floor(a.a))
if(a.k(0,s.r))return
A.bT("stopwatch")
s.gdf().nT(a)
s.f=!0
s.r=a
s.y=null},
ST(){var s,r=this.y
if(r==null){s=this.y=this.Id()
return s}return r.cloneNode(!0)},
Id(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=A.aL(self.document,"flt-paragraph"),b5=b4.style
A.k(b5,"position","absolute")
A.k(b5,"white-space","pre")
b5=t.e
s=t.f
r=t.dB
q=b3
p=0
while(!0){o=b2.w
if(o===$){n=self.window.document
m=A.a(["canvas"],s)
l=b5.a(n.createElement.apply(n,m))
n=l.getContext.apply(l,["2d"])
n.toString
b5.a(n)
m=A.a([],r)
b2.w!==$&&A.b5()
k=b2.w=new A.rM(b2,n,m,B.x)
j=k
o=j}else j=o
if(!(p<o.z.length))break
if(j===$){n=self.window.document
m=A.a(["canvas"],s)
l=b5.a(n.createElement.apply(n,m))
n=l.getContext.apply(l,["2d"])
n.toString
b5.a(n)
m=A.a([],r)
b2.w!==$&&A.b5()
o=b2.w=new A.rM(b2,n,m,B.x)}else o=j
i=o.z[p]
h=i.r
g=new A.bZ("")
for(n=""+"underline ",f=0;f<h.length;f=e){e=f+1
d=h[f]
if(d instanceof A.dF){m=self.document
c=A.a(["flt-span"],s)
q=b5.a(m.createElement.apply(m,c))
m=d.w.a
c=q.style
b=m.cy
a=b==null
a0=a?b3:b.gac(b)
if(a0==null)a0=m.a
if((a?b3:b.gc6(b))===B.D){c.setProperty("color","transparent","")
a1=a?b3:b.gfJ()
if(a1!=null&&a1>0)a2=a1
else{b=$.bQ().w
if(b==null){b=self.window.devicePixelRatio
if(b===0)b=1}a2=1/b}b=A.bP(a0)
c.setProperty("-webkit-text-stroke",A.f(a2)+"px "+A.f(b),"")}else if(a0!=null){b=A.bP(a0)
b.toString
c.setProperty("color",b,"")}b=m.cx
a3=b==null?b3:b.gac(b)
if(a3!=null){b=A.bP(a3)
b.toString
c.setProperty("background-color",b,"")}a4=m.at
if(a4!=null){b=B.d.cN(a4)
c.setProperty("font-size",""+b+"px","")}b=m.f
if(b!=null){b=A.a80(b)
b.toString
c.setProperty("font-weight",b,"")}b=A.a0n(m.y)
b.toString
c.setProperty("font-family",b,"")
b=m.ax
if(b!=null)c.setProperty("letter-spacing",A.f(b)+"px","")
b=m.ay
if(b!=null)c.setProperty("word-spacing",A.f(b)+"px","")
b=m.b
a=b!=null
a5=a&&!0
a6=m.db
if(a6!=null){a7=A.ahi(a6)
c.setProperty("text-shadow",a7,"")}if(a5)if(a){a=m.d
b=b.a
a7=(b|1)===b?n:""
if((b|2)===b)a7+="overline "
b=(b|4)===b?a7+"line-through ":a7
if(a!=null)b+=A.f(A.ags(a))
a8=b.length===0?b3:b.charCodeAt(0)==0?b:b
if(a8!=null){b=$.by()
if(b===B.w){b=q.style
b.setProperty("-webkit-text-decoration",a8,"")}else c.setProperty("text-decoration",a8,"")
a9=m.c
if(a9!=null){m=A.bP(a9)
m.toString
c.setProperty("text-decoration-color",m,"")}}}m=d.a.a
c=d.b
b=d.t6(i,m,c.a,!0)
a=b.a
a7=b.b
b0=q.style
b0.setProperty("position","absolute","")
b0.setProperty("top",A.f(a7)+"px","")
b0.setProperty("left",A.f(a)+"px","")
b0.setProperty("width",A.f(b.c-a)+"px","")
b0.setProperty("line-height",A.f(b.d-a7)+"px","")
m=B.c.X(d.r.a.c,m,c.b)
q.append(self.document.createTextNode(m))
b4.append(q)
g.a+=m}else{if(!(d instanceof A.qE))throw A.d(A.c1("Unknown box type: "+A.z(d).h(0)))
q=b3}}b1=i.b
if(b1!=null){n=q==null?b4:q
n.append(self.document.createTextNode(b1))}++p}return b4},
lv(){return this.gdf().lv()},
uA(a,b,c,d){return this.gdf().D_(a,b,c,d)},
ly(a){return this.gdf().ly(a)}}
A.xP.prototype={$ia5t:1}
A.mP.prototype={
SD(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a
if(a==null){s=b.gpl(b)
r=b.gpz()
q=b.gpA()
p=b.gpB()
o=b.gpC()
n=b.gpW(b)
m=b.gpU(b)
l=b.gqF()
k=b.gpQ(b)
j=b.gpR()
i=b.gpS()
h=b.gpV()
g=b.gpT(b)
f=b.gqc(b)
e=b.gqU(b)
d=b.goY(b)
c=b.gqe()
e=b.a=A.a4K(b.gpb(b),s,r,q,p,o,k,j,i,g,m,h,n,b.gm3(),d,f,c,b.gqC(),l,e)
return e}return a}}
A.vW.prototype={
gpl(a){var s=this.c.a
if(s==null)if(this.gm3()==null){s=this.b
s=s.gpl(s)}else s=null
return s},
gpz(){var s=this.c.b
return s==null?this.b.gpz():s},
gpA(){var s=this.c.c
return s==null?this.b.gpA():s},
gpB(){var s=this.c.d
return s==null?this.b.gpB():s},
gpC(){var s=this.c.e
return s==null?this.b.gpC():s},
gpW(a){var s=this.c.f
if(s==null){s=this.b
s=s.gpW(s)}return s},
gpU(a){var s=this.b
s=s.gpU(s)
return s},
gqF(){var s=this.c.w
return s==null?this.b.gqF():s},
gpR(){var s=this.c.z
return s==null?this.b.gpR():s},
gpS(){var s=this.b.gpS()
return s},
gpV(){var s=this.b.gpV()
return s},
gpT(a){var s=this.c.at
if(s==null){s=this.b
s=s.gpT(s)}return s},
gqc(a){var s=this.c.ax
if(s==null){s=this.b
s=s.gqc(s)}return s},
gqU(a){var s=this.c.ay
if(s==null){s=this.b
s=s.gqU(s)}return s},
goY(a){var s=this.c.ch
if(s==null){s=this.b
s=s.goY(s)}return s},
gqe(){var s=this.c.CW
return s==null?this.b.gqe():s},
gpb(a){var s=this.c.cx
if(s==null){s=this.b
s=s.gpb(s)}return s},
gm3(){var s=this.c.cy
return s==null?this.b.gm3():s},
gqC(){var s=this.c.db
return s==null?this.b.gqC():s},
gpQ(a){var s=this.c
if(s.x)s=s.y
else{s=this.b
s=s.gpQ(s)}return s}}
A.AJ.prototype={
gpz(){return null},
gpA(){return null},
gpB(){return null},
gpC(){return null},
gpW(a){return this.b.c},
gpU(a){return this.b.d},
gqF(){return null},
gpQ(a){var s=this.b.f
return s==null?"sans-serif":s},
gpR(){return null},
gpS(){return null},
gpV(){return null},
gpT(a){var s=this.b.r
return s==null?14:s},
gqc(a){return null},
gqU(a){return null},
goY(a){return this.b.w},
gqe(){return this.b.Q},
gpb(a){return null},
gm3(){return null},
gqC(){return null},
gpl(){return B.wW}}
A.JK.prototype={
gwE(){var s=this.d,r=s.length
return r===0?this.e:s[r-1]},
gC_(){return this.r},
nX(a){this.d.push(new A.vW(this.gwE(),t.vK.a(a)))},
dv(){var s=this.d
if(s.length!==0)s.pop()},
kg(a){var s,r=this,q=r.gwE().SD(),p=r.a,o=p.a,n=o+a
p.a=n
p=r.w
if(p){s=q.b
if(s!=null){p=s.a
p=B.e.a!==p}else p=!1
if(p){r.w=!1
p=!1}else p=!0}if(p)p=!0
p
r.c.push(new A.xP(q,o.length,n.length))},
aA(){var s=this,r=s.a.a
return new A.vT(s.c,s.b,r.charCodeAt(0)==0?r:r,s.w)}}
A.Nc.prototype={
fC(a){return this.Sp(a)},
Sp(a6){var s=0,r=A.Y(t.H),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$fC=A.Z(function(a7,a8){if(a7===1){o=a8
s=p}while(true)switch(s){case 0:a4=null
p=4
s=7
return A.a3(a6.bY(0,"FontManifest.json"),$async$fC)
case 7:a4=a8
p=2
s=6
break
case 4:p=3
a5=o
k=A.ae(a5)
if(k instanceof A.lu){m=k
if(m.b===404){$.bu().$1("Font manifest does not exist at `"+m.a+"` \u2013 ignoring.")
s=1
break}else throw a5}else throw a5
s=6
break
case 3:s=2
break
case 6:j=t.jS.a(B.ao.cz(0,B.C.cz(0,A.c2(a4.buffer,0,null))))
if(j==null)throw A.d(A.oi(u.g))
if($.a3W())n.a=A.acr()
else n.a=new A.Fu(A.a([],t.iJ))
for(k=t.a,i=J.ch(j,k),i=new A.cz(i,i.gm(i)),h=t.N,g=t.j,f=A.r(i).c;i.p();){e=i.d
if(e==null)e=f.a(e)
d=J.aB(e)
c=A.c7(d.j(e,"family"))
e=J.ch(g.a(d.j(e,"fonts")),k)
for(e=new A.cz(e,e.gm(e)),d=A.r(e).c;e.p();){b=e.d
if(b==null)b=d.a(b)
a=J.aB(b)
a0=A.bO(a.j(b,"asset"))
a1=A.x(h,h)
for(a2=J.al(a.gaN(b));a2.p();){a3=a2.gB(a2)
if(a3!=="asset")a1.l(0,a3,A.f(a.j(b,a3)))}b=n.a
b.toString
c.toString
b.Cj(c,"url("+a6.og(a0)+")",a1)}}case 1:return A.W(q,r)
case 2:return A.V(o,r)}})
return A.X($async$fC,r)},
el(){var s=0,r=A.Y(t.H),q=this,p
var $async$el=A.Z(function(a,b){if(a===1)return A.V(b,r)
while(true)switch(s){case 0:p=q.a
s=2
return A.a3(p==null?null:A.lW(p.a,t.H),$async$el)
case 2:p=q.b
s=3
return A.a3(p==null?null:A.lW(p.a,t.H),$async$el)
case 3:return A.W(null,r)}})
return A.X($async$el,r)}}
A.y1.prototype={
Cj(a,b,c){var s=$.a8K().b
if(s.test(a)||$.a8J().DY(a)!==a)this.xB("'"+a+"'",b,c)
this.xB(a,b,c)},
xB(a,b,c){var s,r,q,p,o
try{q=A.a([a,b],t.f)
q.push(A.nX(c))
q=A.Ig("FontFace",q)
q.toString
p=t.e
s=p.a(q)
this.a.push(A.fa(s.load(),p).dA(new A.Ng(s),new A.Nh(a),t.H))}catch(o){r=A.ae(o)
$.bu().$1('Error while loading font family "'+a+'":\n'+A.f(r))}}}
A.Ng.prototype={
$1(a){self.document.fonts.add(this.a)},
$S:3}
A.Nh.prototype={
$1(a){$.bu().$1('Error while trying to load font family "'+this.a+'":\n'+A.f(a))},
$S:2}
A.Fu.prototype={
Cj(a,b,c){var s,r,q,p,o,n,m,l,k,j="style",i="font-family",h="font-style",g="weight",f="font-weight",e=A.aL(self.document,"p")
A.k(e.style,"position","absolute")
A.k(e.style,"visibility","hidden")
A.k(e.style,"font-size","72px")
s=$.by()
r=s===B.dB?"Times New Roman":"sans-serif"
A.k(e.style,i,r)
if(c.j(0,j)!=null){s=e.style
q=c.j(0,j)
q.toString
A.k(s,h,q)}if(c.j(0,g)!=null){s=e.style
q=c.j(0,g)
q.toString
A.k(s,f,q)}e.textContent="giItT1WQy@!-/#"
self.document.body.append(e)
p=A.dL(e.offsetWidth)
s="'"+a
A.k(e.style,i,s+"', "+r)
q=new A.ab($.a9,t.D)
o=A.bT("_fontLoadStart")
n=t.N
m=A.x(n,t.dR)
m.l(0,i,s+"'")
m.l(0,"src",b)
if(c.j(0,j)!=null)m.l(0,h,c.j(0,j))
if(c.j(0,g)!=null)m.l(0,f,c.j(0,g))
s=m.$ti.i("aF<1>")
l=A.ki(new A.aF(m,s),new A.Z3(m),s.i("n.E"),n).b0(0," ")
k=A.abR(null)
k.type="text/css"
k.innerHtml="@font-face { "+l+" }"
self.document.head.append(k)
if(B.c.A(a.toLowerCase(),"icon")){e.remove()
return}o.b=new A.dg(Date.now(),!1)
new A.Z2(e,p,new A.aS(q,t.h),o,a).$0()
this.a.push(q)}}
A.Z2.prototype={
$0(){var s=this,r=s.a
if(A.dL(r.offsetWidth)!==s.b){r.remove()
s.c.dQ(0)}else if(A.cc(0,Date.now()-s.d.aK().a).a>2e6){s.c.dQ(0)
throw A.d(A.cd("Timed out trying to load font: "+s.e))}else A.c_(B.ka,s)},
$S:0}
A.Z3.prototype={
$1(a){return a+": "+A.f(this.a.j(0,a))+";"},
$S:70}
A.rM.prototype={
nT(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=a6.a,a8=a7.a,a9=a8.length,b0=a6.c=b1.a
a6.d=0
a6.e=null
a6.r=a6.f=0
a6.y=!1
s=a6.z
B.b.H(s)
if(a9===0)return
r=new A.V4(a7,a6.b)
q=A.a23(a7,r,0,0,b0,B.km)
for(p=a7.b,o=p.e,n=p.z,m=n!=null,l=o==null,k=0;!0;){if(k===a9){if(q.a.length!==0||q.x.d!==B.aF){q.PG()
s.push(q.aA())}break}j=a8[k]
r.siT(j)
i=q.AR()
h=i.a
g=q.CZ(h)
if(q.y+g<=b0){q.kM(i)
if(h.d===B.bG){s.push(q.aA())
q=q.nG()}}else if((m&&l||s.length+1===o)&&m){q.AT(i,!0,n)
s.push(q.zM(n))
break}else if(!q.at){q.Q0(i,!1)
s.push(q.aA())
q=q.nG()}else{q.SH()
f=B.b.gI(q.a).a
for(;j!==f;){--k
j=a8[k]}s.push(q.aA())
q=q.nG()}if(q.x.a>=j.c){q.ri();++k}if(s.length===o)break}for(o=s.length,e=1/0,d=-1/0,c=0;c<o;++c){b=s[c]
n=b.a
a6.d=a6.d+n.e
if(a6.w===-1){m=n.w
a6.w=m
a6.x=m*1.1662499904632568}m=a6.e
a=m==null?null:m.a.f
if(a==null)a=0
m=n.f
if(a<m)a6.e=b
a0=n.r
if(a0<e)e=a0
a1=a0+m
if(a1>d)d=a1}a6.Q=new A.D(e,0,d,a6.d)
if(o!==0){a2=B.b.gI(s)
a3=isFinite(a6.c)&&p.a===B.iT
for(p=s.length,c=0;c<s.length;s.length===p||(0,A.E)(s),++c){b=s[c]
a6.Mf(b,a3&&!b.k(0,a2))}}q=A.a23(a7,r,0,0,b0,B.km)
for(k=0;k<a9;){j=a8[k]
r.siT(j)
i=q.AR()
q.kM(i)
a4=i.a.d===B.bG&&!0
if(q.x.a>=j.c)++k
a5=B.b.gI(q.a).d
if(a6.f<a5)a6.f=a5
a7=a6.r
b0=q.z
if(a7<b0)a6.r=b0
if(a4)q=q.nG()}},
Mf(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=b?this.Hy(a):0
for(s=this.a.b.b,r=a.a.f,q=0,p=0;o=h.length,q<o;){n=h[q]
m=s==null
l=m?B.m:s
if(n.f===l){n.c!==$&&A.fb()
n.c=p
n.d!==$&&A.fb()
n.d=r
if(n instanceof A.dF&&n.y&&!n.z)n.Q+=g
p+=n.gaE(n);++q
continue}k=q+1
j=q
while(!0){if(k<o){l=h[k]
i=m?B.m:s
i=l.f!==i
l=i}else l=!1
if(!l)break
n=h[k]
j=n instanceof A.dF&&n.y?j:k;++k}k=j+1
p+=this.Mg(a,q,j,g,p)
q=k}},
Mg(a,b,c,d,e){var s,r,q,p,o=a.r
for(s=a.a.f,r=c,q=0;r>=b;--r){p=o[r]
p.c!==$&&A.fb()
p.c=e+q
p.d!==$&&A.fb()
p.d=s
if(p instanceof A.dF&&p.y&&!p.z)p.Q+=d
q+=p.gaE(p)}return q},
Hy(a){var s=this.c,r=a.w-a.x
if(r>0)return(s-a.a.f)/r
return 0},
lv(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.a([],t.l)
for(s=this.z,r=s.length,q=0;q<s.length;s.length===r||(0,A.E)(s),++q){p=s[q]
for(o=p.r,n=o.length,m=p.a,l=m.w,k=l-m.b,j=m.r,m=m.e,i=k+m,h=0;h<o.length;o.length===n||(0,A.E)(o),++h){g=o[h]
if(g instanceof A.qE){f=g.e
e=f===B.m
d=g.c
if(e)d===$&&A.h()
else{c=g.d
c===$&&A.h()
d===$&&A.h()
d=c-(d+g.gaE(g))}c=g.c
if(e){c===$&&A.h()
e=c+g.gaE(g)}else{e=g.d
e===$&&A.h()
c===$&&A.h()
c=e-c
e=c}c=g.r
switch(c.gdg()){case B.ir:b=k
break
case B.it:b=k+B.d.V(m,c.gaS(c))/2
break
case B.is:b=B.d.V(i,c.gaS(c))
break
case B.ip:b=B.d.V(l,c.gaS(c))
break
case B.iq:b=l
break
case B.io:b=B.d.V(l,c.gTy())
break
default:b=null}a.push(new A.kL(j+d,b,j+e,B.d.S(b,c.gaS(c)),f))}}}return a},
D_(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
if(a>=b||a<0||b<0)return A.a([],t.l)
s=this.a.c.length
if(a>s||b>s)return A.a([],t.l)
r=A.a([],t.l)
for(q=this.z,p=q.length,o=0;o<q.length;q.length===p||(0,A.E)(q),++o){n=q[o]
if(a<n.d&&n.c<b)for(m=n.r,l=m.length,k=0;k<m.length;m.length===l||(0,A.E)(m),++k){j=m[k]
if(j instanceof A.dF&&a<j.b.a&&j.a.a<b)r.push(j.t6(n,a,b,!1))}}return r},
ly(a){var s,r,q,p,o,n,m=this.IW(a.b),l=a.a,k=m.a.r
if(l<=k)return new A.fX(m.c,B.aw)
if(l>=k+m.f)return new A.fX(m.e,B.c7)
s=l-k
for(l=m.r,k=l.length,r=0;r<l.length;l.length===k||(0,A.E)(l),++r){q=l[r]
p=q.e===B.m
o=q.c
if(p)o===$&&A.h()
else{n=q.d
n===$&&A.h()
o===$&&A.h()
o=n-(o+q.gaE(q))}if(o<=s){o=q.c
if(p){o===$&&A.h()
p=o+q.gaE(q)}else{p=q.d
p===$&&A.h()
o===$&&A.h()
o=p-o
p=o}p=s<=p}else p=!1
if(p)return q.Da(s)}return new A.fX(m.c,B.aw)},
IW(a){var s,r,q,p,o
for(s=this.z,r=s.length,q=0;q<r;++q){p=s[q]
o=p.a.e
if(a<=o)return p
a-=o}return B.b.gI(s)}}
A.qO.prototype={
ghh(a){var s,r=this,q=r.c
if(r.e===B.m)q===$&&A.h()
else{s=r.d
s===$&&A.h()
q===$&&A.h()
q=s-(q+r.gaE(r))}return q},
go5(a){var s,r=this,q=r.c
if(r.e===B.m){q===$&&A.h()
q+=r.gaE(r)}else{s=r.d
s===$&&A.h()
q===$&&A.h()
q=s-q}return q}}
A.qE.prototype={}
A.dF.prototype={
gaE(a){return this.Q},
t6(a,b,c,d){var s,r,q,p,o,n=this,m=a.a,l=m.w-n.at,k=n.a.a
if(b<=k)s=0
else{r=n.r
r.siT(n.w)
s=r.fR(k,b)}k=n.b.b
if(c>=k)q=0
else{r=n.r
r.siT(n.w)
q=r.fR(c,k)}k=n.x
if(k===B.m){p=n.ghh(n)+s
o=n.go5(n)-q}else{p=n.ghh(n)+q
o=n.go5(n)-s}if(d&&n.z)if(n.e===B.m)o=p
else p=o
m=m.r
return new A.kL(m+p,l,m+o,l+n.as,k)},
Da(a){var s,r,q,p,o=this,n=o.r
n.siT(o.w)
a=o.x!==B.m?o.go5(o)-a:a-o.ghh(o)
s=o.a.a
r=o.b.b
q=n.rW(s,r,!0,a)
if(q===r)return new A.fX(q,B.c7)
p=q+1
if(a-n.fR(s,q)<n.fR(s,p)-a)return new A.fX(q,B.aw)
else return new A.fX(p,B.c7)}}
A.yG.prototype={}
A.Pq.prototype={
sek(a,b){if(b.d!==B.au)this.at=!0
this.x=b},
gO9(){var s=this.c-this.y,r=this.d.b
switch(r.a.a){case 2:return s/2
case 1:return s
case 4:r=r.b
return(r==null?B.m:r)===B.S?s:0
case 5:r=r.b
return(r==null?B.m:r)===B.S?0:s
default:return 0}},
CZ(a){var s=this,r=s.x.a,q=a.c
if(r===q)return 0
return s.z-s.y+s.e.fR(r,q)},
gL9(){var s=this.b
if(s.length===0)return!1
return B.b.gI(s) instanceof A.qE},
gpx(){var s=this.ay
if(s===$){s=this.d.b.b
s=this.ay=s==null?B.m:s}return s},
gwD(){var s=this.ch
if(s===$){s=this.d.b.b
s=this.ch=s==null?B.m:s}return s},
kM(a){var s=this,r=s.Q,q=s.e,p=q.d
s.Q=Math.max(r,p.gfZ(p))
p=s.as
r=q.d
r=r.gaS(r)
q=q.d
s.as=Math.max(p,r-q.gfZ(q))
r=a.c
if(!r){q=a.b
q=s.gpx()!==q||s.gwD()!==q}else q=!0
if(q)s.ri()
q=a.b
p=q==null
s.ay=p?s.gpx():q
s.ch=p?B.m:q
s.vV(s.pw(a.a))
if(r)s.Ab(!0)},
PG(){var s,r,q,p,o=this
if(o.x.d===B.aF)return
s=o.d.c.length
r=new A.cx(s,s,s,B.aF)
s=o.e
if(s.e!=null){q=o.Q
p=s.d
o.Q=Math.max(q,p.gfZ(p))
p=o.as
q=s.d
q=q.gaS(q)
s=s.d
o.as=Math.max(p,q-s.gfZ(s))
o.vV(o.pw(r))}else o.sek(0,r)},
pw(a){var s,r=this.x,q=this.e,p=q.e
p.toString
s=r.a
return new A.yG(p,r,a,q.fR(s,a.c),q.fR(s,a.b))},
vV(a){var s,r,q=this
q.a.push(a)
s=a.d
if(s!==0){r=q.y
q.y=r+(q.z-r+s)}q.z=q.z+a.e
q.sek(0,a.c)},
y0(){var s,r,q,p,o=this,n=o.a,m=n.pop()
if(n.length===0){o.z=o.y=0
o.sek(0,o.f)}else{o.z=o.z-m.e
o.sek(0,B.b.gI(n).c)
s=m.d
if(s!==0){o.y-=s
r=n.length-1
q=0
while(!0){s=r>=0
if(!(s&&n[r].d===0))break
q+=n[r].e;--r}if(s){n=n[r]
q+=n.e-n.d}o.y-=q}}if(o.gwC().a>m.b.a){p=o.b.pop()
o.CW=o.CW-p.gaE(p)
if(p instanceof A.dF&&p.y)--o.ax}return m},
AT(a,b,c){var s,r,q,p,o,n=this
if(c==null){s=n.z
r=a.a.c
q=n.e.rW(n.x.a,r,b,n.c-s)
if(q===r)n.kM(a)
else n.kM(new A.is(new A.cx(q,q,q,B.au),a.b,a.c))
return}s=n.e
p=n.c-A.a3m(s.b,c,0,c.length,null)
o=n.pw(a.a)
r=n.a
while(!0){if(!(r.length!==0&&n.z>p))break
o=n.y0()}s.siT(o.a)
q=s.rW(o.b.a,o.c.a,b,p-n.z)
s=n.b
while(!0){if(!(s.length!==0&&B.b.gI(s).b.a>q))break
s.pop()}n.CW=n.z
n.kM(new A.is(new A.cx(q,q,q,B.au),a.b,a.c))},
Q0(a,b){return this.AT(a,b,null)},
SH(){for(;this.x.d===B.au;)this.y0()},
gwC(){var s=this.b
if(s.length===0)return this.f
return B.b.gI(s).b},
Ab(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.gwC(),h=j.x
if(i.a===h.a)return
s=j.e
r=j.z
q=j.CW
p=j.d.b.b
if(p==null)p=B.m
o=j.gpx()
n=j.gwD()
m=s.e
m.toString
l=s.d
l=l.gaS(l)
k=s.d
j.b.push(new A.dF(s,m,n,a,r-q,l,k.gfZ(k),i,h,p,o))
if(a)++j.ax
j.CW=j.z},
ri(){return this.Ab(!1)},
zM(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.ri()
s=a==null?0:A.a3m(i.e.b,a,0,a.length,null)
r=i.f.a
q=i.x
p=Math.max(r,q.b)
if(q.d!==B.aF&&i.gL9())o=!1
else{q=i.x.d
o=q===B.bG||q===B.aF}i.Ml()
q=i.x
n=i.y
m=i.z
l=i.gO9()
k=i.Q
j=i.as
return new A.qw(new A.xz(o,k,j,k,k+j,n+s,l,i.w+k,i.r),a,r,q.a,p,m+s,i.b,i.ax,i.cx)},
aA(){return this.zM(null)},
Ml(){var s,r,q,p
this.cx=0
for(s=this.b,r=s.length-1,q=0;r>=0;--r){p=s[r]
if(!(p instanceof A.dF&&p.y))break
p.z=!0;++q
this.cx=q}},
AR(){var s,r=this,q=r.cy,p=r.d.c
if(q==null||r.x.a>=q.a){s=r.e.e.c
q=r.cy=A.aiE(p,r.x.a,s)}return A.aig(p,r.x,q)},
nG(){var s=this,r=s.x
return A.a23(s.d,s.e,s.w+(s.Q+s.as),s.r+1,s.c,r)}}
A.V4.prototype={
siT(a){var s,r,q,p,o,n,m=this
if(a===m.e)return
m.e=a
s=a.a
r=s.dy
if(r===$){q=s.gAC()
p=s.at
if(p==null)p=14
s.dy!==$&&A.b5()
r=s.dy=new A.rL(q,p,s.ch,null,null)}o=$.a63.j(0,r)
if(o==null){o=new A.BJ(r,$.a8V(),new A.VI(A.aL(self.document,"flt-paragraph")))
$.a63.l(0,r,o)}m.d=o
n=s.gAh()
if(m.c!==n){m.c=n
m.b.font=n}},
rW(a,b,c,d){var s,r,q,p
this.e.toString
if(d<=0)return c?a:a+1
s=b
r=a
do{q=B.f.bF(r+s,2)
p=this.fR(a,q)
if(p<d)r=q
else{r=p>d?r:q
s=q}}while(s-r>1)
return r===a&&!c?r+1:r},
fR(a,b){return A.a3m(this.b,this.a.c,a,b,this.e.a.ax)}}
A.aU.prototype={
h(a){return"LineCharProperty."+this.b}}
A.mg.prototype={
h(a){return"LineBreakType."+this.b}}
A.cx.prototype={
gq(a){var s=this
return A.L(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.N(b)!==A.z(s))return!1
return b instanceof A.cx&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
h(a){var s=this.aY(0)
return s}}
A.AP.prototype={
n(){this.a.remove()}}
A.W6.prototype={
aO(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this.a.gdf().z,g=h.length
if(g===0)return
for(s=t.wE,r=0;r<h.length;h.length===g||(0,A.E)(h),++r){q=h[r]
p=q.r
if(p.length===0)continue
o=B.b.gI(p)
for(n=p.length,m=0;m<p.length;p.length===n||(0,A.E)(p),++m){l=p[m]
if(!(l===o&&l instanceof A.dF&&l.y))if(l instanceof A.dF){k=s.a(l.w.a.cx)
if(k!=null){j=l.t6(q,l.a.a,l.b.a,!0)
i=new A.D(j.a,j.b,j.c,j.d).c5(b)
k.b=!0
a.bC(i,k.a)}}this.LY(a,b,q,l)}}},
LY(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null
if(a3 instanceof A.dF){s=a3.w.a
r=s.cy
q=r==null
if(!q){t.k.a(r)
p=r}else{o=$.aP()?A.bA():new A.bh(new A.bo())
n=s.a
n.toString
o.sac(0,n)
t.k.a(o)
p=o}o=s.gAh()
if(o!==a0.e){n=a0.d
n.gaa(n).font=o
a0.e=o}o=p.b=!0
n=p.a
m=a0.d
m.gbQ().io(n,a)
n=a2.a
l=a1.a+n.r
k=l+a3.ghh(a3)
j=a1.b+n.w
if(!a3.y){i=B.c.X(this.a.c,a3.a.a,a3.b.b)
h=s.ax
if(h!=null?h===0:o){o=q?a:r.gc6(r)
a0.rG(i,k,j,s.db,o)}else{g=i.length
for(s=s.db,f=k,e=0;e<g;++e){d=i[e]
o=B.d.hp(f)
a0.rG(d,o,j,s,q?a:r.gc6(r))
c=m.d
if(c==null){m.pv()
o=m.d
o.toString
c=o}o=c.measureText(d).width
o.toString
f+=h+o}}}b=a2.b
if(b!=null&&a3===B.b.gI(a2.r)){s=a3.go5(a3)
q=q?a:r.gc6(r)
a0.Pn(b,l+s,j,q)}m.gbQ().jk()}}}
A.xz.prototype={
gq(a){var s=this
return A.L(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.N(b)!==A.z(s))return!1
return b instanceof A.xz&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x},
h(a){var s=this.aY(0)
return s}}
A.qw.prototype={
gq(a){var s=this
return A.L(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,null,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.N(b)!==A.z(s))return!1
return b instanceof A.qw&&b.a.k(0,s.a)&&b.b==s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x&&!0}}
A.pb.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.N(b)!==A.z(s))return!1
return b instanceof A.pb&&b.a===s.a&&b.b==s.b&&b.c==s.c&&b.e==s.e&&b.f==s.f&&b.r==s.r&&b.w==s.w&&J.e(b.x,s.x)&&b.z==s.z&&J.e(b.Q,s.Q)},
gq(a){var s=this
return A.L(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.z,s.Q,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a){var s=this.aY(0)
return s}}
A.pc.prototype={
gAC(){var s=this.y
if(s.length===0)return"sans-serif"
return s},
gAh(){var s,r,q,p=this,o=p.dx
if(o==null){o=p.f
s=p.at
r=p.gAC()
q=""+"normal "
o=(o!=null?q+A.f(A.a80(o)):q+"normal")+" "
o=s!=null?o+B.d.cN(s):o+"14"
r=o+"px "+A.f(A.a0n(r))
r=p.dx=r.charCodeAt(0)==0?r:r
o=r}return o},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.N(b)!==A.z(s))return!1
return b instanceof A.pc&&J.e(b.a,s.a)&&J.e(b.b,s.b)&&J.e(b.c,s.c)&&b.d==s.d&&b.f==s.f&&b.w==s.w&&b.y===s.y&&b.at==s.at&&b.ax==s.ax&&b.ay==s.ay&&b.ch==s.ch&&J.e(b.CW,s.CW)&&b.cx==s.cx&&b.cy==s.cy&&A.Il(b.db,s.db)&&A.Il(b.z,s.z)},
gq(a){var s=this
return A.L(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.y,s.z,s.at,s.ax,s.ay,s.ch,s.CW,s.cx,s.cy,s.db,B.a,B.a)},
h(a){var s=this.aY(0)
return s}}
A.rL.prototype={
k(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.rL&&b.gq(b)===this.gq(this)},
gq(a){var s,r=this,q=r.f
if(q===$){s=A.L(r.a,r.b,r.c,null,null,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
r.f!==$&&A.b5()
r.f=s
q=s}return q}}
A.VI.prototype={}
A.BJ.prototype={
gfZ(a){var s,r,q,p,o,n,m,l,k=this,j=k.f
if(j===$){j=k.c
if(j===$){s=A.aL(self.document,"div")
j=k.d
if(j===$){r=A.aL(self.document,"div")
q=r.style
A.k(q,"visibility","hidden")
A.k(q,"position","absolute")
A.k(q,"top","0")
A.k(q,"left","0")
A.k(q,"display","flex")
A.k(q,"flex-direction","row")
A.k(q,"align-items","baseline")
A.k(q,"margin","0")
A.k(q,"border","0")
A.k(q,"padding","0")
q=k.e
p=k.a
o=q.a
n=o.style
A.k(n,"font-size",""+B.d.cN(p.b)+"px")
m=A.a0n(p.a)
m.toString
A.k(n,"font-family",m)
l=p.c
if(l!=null)A.k(n,"line-height",B.d.h(l))
q.b=null
A.k(o.style,"white-space","pre")
q.b=null
o.textContent=" "
r.append(o)
q.b=null
k.b.a.append(r)
k.d!==$&&A.b5()
k.d=r
j=r}j.append(s)
k.c!==$&&A.b5()
k.c=s
j=s}j=j.getBoundingClientRect().bottom
k.f!==$&&A.b5()
k.f=j}return j},
gaS(a){var s,r,q,p=this,o=p.r
if(o===$){s=p.e
r=s.b
s=r==null?s.b=s.a.getBoundingClientRect():r
q=s.height
s=$.by()
if(s===B.az&&!0)++q
p.r!==$&&A.b5()
o=p.r=q}return o}}
A.is.prototype={}
A.te.prototype={
h(a){return"_ComparisonResult."+this.b}}
A.bE.prototype={
OD(a){if(a<this.a)return B.IU
if(a>this.b)return B.IT
return B.IS}}
A.kR.prototype={
PK(a,b,c){var s=A.a0D(b,c)
return s==null?this.b:this.ni(s)},
ni(a){var s,r,q,p,o=this
if(a==null)return o.b
s=o.c
r=s.j(0,a)
if(r!=null)return r
q=o.Hn(a)
p=q===-1?o.b:o.a[q].c
s.l(0,a,p)
return p},
Hn(a){var s,r,q=this.a,p=q.length
for(s=0;s<p;){r=s+B.f.e8(p-s,1)
switch(q[r].OD(a).a){case 1:s=r+1
break
case 2:p=r
break
case 0:return r}}return-1}}
A.Ju.prototype={}
A.wx.prototype={
gwq(){var s,r=this,q=r.eT$
if(q===$){s=A.a4(r.gJJ())
r.eT$!==$&&A.b5()
r.eT$=s
q=s}return q},
gwr(){var s,r=this,q=r.h6$
if(q===$){s=A.a4(r.gJL())
r.h6$!==$&&A.b5()
r.h6$=s
q=s}return q},
gwp(){var s,r=this,q=r.h7$
if(q===$){s=A.a4(r.gJH())
r.h7$!==$&&A.b5()
r.h7$=s
q=s}return q},
mH(a){A.bv(a,"compositionstart",this.gwq(),null)
A.bv(a,"compositionupdate",this.gwr(),null)
A.bv(a,"compositionend",this.gwp(),null)},
JK(a){this.eU$=null},
JM(a){var s=self.window.CompositionEvent
s.toString
if(a instanceof s)this.eU$=a.data},
JI(a){this.eU$=null},
Pd(a){var s,r,q
if(this.eU$==null||a.a==null)return a
s=a.b
r=this.eU$.length
q=s-r
if(q<0)return a
return A.xs(s,q,q+r,a.c,a.a)}}
A.Mn.prototype={
rk(){return A.aL(self.document,"input")},
zZ(a){var s
if(this.geY()==null)return
s=$.cS()
if(s!==B.V)s=s===B.eD||this.geY()==="none"
else s=!0
if(s){s=this.geY()
s.toString
A.y(a,"setAttribute",["inputmode",s])}}}
A.Qj.prototype={
geY(){return"none"}}
A.W0.prototype={
geY(){return null}}
A.Qs.prototype={
geY(){return"numeric"}}
A.Kw.prototype={
geY(){return"decimal"}}
A.QR.prototype={
geY(){return"tel"}}
A.Me.prototype={
geY(){return"email"}}
A.WA.prototype={
geY(){return"url"}}
A.Q7.prototype={
geY(){return null},
rk(){return A.aL(self.document,"textarea")}}
A.mY.prototype={
h(a){return"TextCapitalization."+this.b}}
A.rJ.prototype={
uS(a){var s,r,q="sentences",p="setAttribute"
switch(this.a.a){case 0:s=$.by()
r=s===B.w?q:"words"
break
case 2:r="characters"
break
case 1:r=q
break
case 3:default:r="off"
break}s=self.window.HTMLInputElement
s.toString
if(a instanceof s)A.y(a,p,["autocapitalize",r])
else{s=self.window.HTMLTextAreaElement
s.toString
if(a instanceof s)A.y(a,p,["autocapitalize",r])}}}
A.Mg.prototype={
ke(){var s=this.b,r=A.a([],t.i)
new A.aF(s,A.r(s).i("aF<1>")).P(0,new A.Mh(this,r))
return r}}
A.Mj.prototype={
$1(a){a.preventDefault()},
$S:1}
A.Mh.prototype={
$1(a){var s=this.a,r=s.b.j(0,a)
r.toString
this.b.push(A.bB(r,"input",A.a4(new A.Mi(s,a,r))))},
$S:169}
A.Mi.prototype={
$1(a){var s,r=this.a.c,q=this.b
if(r.j(0,q)==null)throw A.d(A.a8("AutofillInfo must have a valid uniqueIdentifier."))
else{r=r.j(0,q)
r.toString
s=A.a4G(this.c)
$.ao().es("flutter/textinput",B.T.ej(new A.ec("TextInputClient.updateEditingStateWithTag",[0,A.aQ([r.b,s.CB()],t.dR,t.z)])),A.I8())}},
$S:1}
A.vB.prototype={
zH(a,b){var s=this.d,r=this.e,q=self.window.HTMLInputElement
q.toString
if(a instanceof q){if(r!=null)a.placeholder=r
q=s==null
if(!q){a.name=s
a.id=s
if(B.c.A(s,"password"))a.type="password"
else a.type="text"}q=q?"on":s
a.autocomplete=q}else{q=self.window.HTMLTextAreaElement
q.toString
if(a instanceof q){if(r!=null)a.placeholder=r
q=s==null
if(!q){a.name=s
a.id=s}A.y(a,"setAttribute",["autocomplete",q?"on":s])}}},
cu(a){return this.zH(a,!1)}}
A.mZ.prototype={}
A.lP.prototype={
CB(){var s=this
return A.aQ(["text",s.a,"selectionBase",s.b,"selectionExtent",s.c,"composingBase",s.d,"composingExtent",s.e],t.N,t.z)},
gq(a){var s=this
return A.L(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(A.z(s)!==J.N(b))return!1
return b instanceof A.lP&&b.a==s.a&&b.b===s.b&&b.c===s.c&&b.d==s.d&&b.e==s.e},
h(a){var s=this.aY(0)
return s},
cu(a){var s=this,r="setSelectionRange",q=self.window.HTMLInputElement
q.toString
if(a instanceof q){a.toString
a.value=s.a
q=A.a([s.b,s.c],t.f)
A.y(a,r,q)}else{q=self.window.HTMLTextAreaElement
q.toString
if(a instanceof q){a.toString
a.value=s.a
q=A.a([s.b,s.c],t.f)
A.y(a,r,q)}else{q=a==null?null:A.abP(a)
throw A.d(A.M("Unsupported DOM element type: <"+A.f(q)+"> ("+J.N(a).h(0)+")"))}}}}
A.OA.prototype={}
A.ya.prototype={
ev(){var s,r=this,q=r.w
if(q!=null){s=r.c
s.toString
q.cu(s)}q=r.d
q===$&&A.h()
if(q.w!=null){r.lf()
q=r.e
if(q!=null)q.cu(r.c)
r.gAS().focus()
r.c.focus()}}}
A.SD.prototype={
ev(){var s,r=this,q=r.w
if(q!=null){s=r.c
s.toString
q.cu(s)}q=r.d
q===$&&A.h()
if(q.w!=null){r.lf()
r.gAS().focus()
r.c.focus()
q=r.e
if(q!=null){s=r.c
s.toString
q.cu(s)}}},
nu(){if(this.w!=null)this.ev()
this.c.focus()}}
A.oR.prototype={
gei(){var s=null,r=this.f
if(r==null){r=this.e.a
r.toString
r=this.f=new A.mZ(r,"",-1,-1,s,s,s,s)}return r},
gAS(){var s=this.d
s===$&&A.h()
s=s.w
return s==null?null:s.a},
j4(a,b,c){var s,r,q,p=this,o="transparent",n="none"
p.c=a.a.rk()
p.r4(a)
s=p.c
s.classList.add("flt-text-editing")
r=s.style
A.k(r,"white-space","pre-wrap")
A.k(r,"align-content","center")
A.k(r,"position","absolute")
A.k(r,"top","0")
A.k(r,"left","0")
A.k(r,"padding","0")
A.k(r,"opacity","1")
A.k(r,"color",o)
A.k(r,"background-color",o)
A.k(r,"background",o)
A.k(r,"outline",n)
A.k(r,"border",n)
A.k(r,"resize",n)
A.k(r,"text-shadow",o)
A.k(r,"overflow","hidden")
A.k(r,"transform-origin","0 0 0")
q=$.by()
if(q!==B.ac)if(q!==B.aY)q=q===B.w
else q=!0
else q=!0
if(q)s.classList.add("transparentTextEditing")
A.k(r,"caret-color",o)
s=p.r
if(s!=null){r=p.c
r.toString
s.cu(r)}s=p.d
s===$&&A.h()
if(s.w==null){s=$.f9.z
s.toString
r=p.c
r.toString
s.eK(0,r)
p.Q=!1}p.nu()
p.b=!0
p.x=c
p.y=b},
r4(a){var s,r,q,p=this,o="setAttribute"
p.d=a
s=p.c
if(a.c){s.toString
A.y(s,o,["readonly","readonly"])}else s.removeAttribute("readonly")
if(a.d){s=p.c
s.toString
A.y(s,o,["type","password"])}if(a.a===B.jx){s=p.c
s.toString
A.y(s,o,["inputmode","none"])}r=a.r
s=p.c
if(r!=null){s.toString
r.zH(s,!0)}else{s.toString
A.y(s,o,["autocomplete","off"])}q=a.e?"on":"off"
s=p.c
s.toString
A.y(s,o,["autocorrect",q])},
nu(){this.ev()},
kc(){var s,r,q=this,p=q.d
p===$&&A.h()
p=p.w
if(p!=null)B.b.E(q.z,p.ke())
p=q.z
s=q.c
s.toString
r=q.gkU()
p.push(A.bB(s,"input",A.a4(r)))
s=q.c
s.toString
p.push(A.bB(s,"keydown",A.a4(q.gl9())))
p.push(A.bB(self.document,"selectionchange",A.a4(r)))
r=q.c
r.toString
A.bv(r,"beforeinput",A.a4(q.gnn()),null)
r=q.c
r.toString
q.mH(r)
r=q.c
r.toString
p.push(A.bB(r,"blur",A.a4(new A.KA(q))))
q.tZ()},
ur(a){this.w=a
if(this.b)this.ev()},
us(a){var s
this.r=a
if(this.b){s=this.c
s.toString
a.cu(s)}},
eN(a){var s,r,q,p,o,n=this,m=null
n.b=!1
n.w=n.r=n.f=n.e=null
for(s=n.z,r=t.f,q=0;q<s.length;++q){p=s[q]
o=p.b
p=A.a([p.a,p.c],r)
o.removeEventListener.apply(o,p)}B.b.H(s)
s=n.c
s.toString
A.d8(s,"compositionstart",n.gwq(),m)
A.d8(s,"compositionupdate",n.gwr(),m)
A.d8(s,"compositionend",n.gwp(),m)
if(n.Q){s=n.d
s===$&&A.h()
s=s.w
s=(s==null?m:s.a)!=null}else s=!1
r=n.c
if(s){r.blur()
s=n.c
s.toString
A.Ia(s,!0)
s=n.d
s===$&&A.h()
s=s.w
if(s!=null){r=s.d
s=s.a
$.vg.l(0,r,s)
A.Ia(s,!0)}}else r.remove()
n.c=null},
ou(a){var s
this.e=a
if(this.b)s=!(a.b>=0&&a.c>=0)
else s=!0
if(s)return
a.cu(this.c)},
ev(){this.c.focus()},
lf(){var s,r=this.d
r===$&&A.h()
r=r.w
r.toString
s=this.c
s.toString
r=r.a
r.append(s)
$.f9.z.eK(0,r)
this.Q=!0},
AY(a){var s,r,q=this,p=q.c
p.toString
s=q.Pd(A.a4G(p))
p=q.d
p===$&&A.h()
if(p.f){q.gei().r=s.d
q.gei().w=s.e
r=A.aeM(s,q.e,q.gei())}else r=null
if(!s.k(0,q.e)){q.e=s
q.f=r
q.x.$2(s,r)
q.f=null}},
Q4(a){var s=this,r=A.c7(a.data),q=A.c7(a.inputType)
if(q!=null)if(B.c.A(q,"delete")){s.gei().b=""
s.gei().d=s.e.c}else if(q==="insertLineBreak"){s.gei().b="\n"
s.gei().c=s.e.c
s.gei().d=s.e.c}else if(r!=null){s.gei().b=r
s.gei().c=s.e.c
s.gei().d=s.e.c}},
RI(a){var s,r=self.window.KeyboardEvent
r.toString
if(a instanceof r)if(a.keyCode===13){r=this.y
r.toString
s=this.d
s===$&&A.h()
r.$1(s.b)}},
rI(a,b,c,d){var s,r=this
r.j4(b,c,d)
r.kc()
s=r.e
if(s!=null)r.ou(s)
r.c.focus()},
tZ(){var s=this,r=s.z,q=s.c
q.toString
r.push(A.bB(q,"mousedown",A.a4(new A.KB())))
q=s.c
q.toString
r.push(A.bB(q,"mouseup",A.a4(new A.KC())))
q=s.c
q.toString
r.push(A.bB(q,"mousemove",A.a4(new A.KD())))}}
A.KA.prototype={
$1(a){this.a.c.focus()},
$S:1}
A.KB.prototype={
$1(a){a.preventDefault()},
$S:1}
A.KC.prototype={
$1(a){a.preventDefault()},
$S:1}
A.KD.prototype={
$1(a){a.preventDefault()},
$S:1}
A.O7.prototype={
j4(a,b,c){var s,r=this
r.oM(a,b,c)
s=r.c
s.toString
a.a.zZ(s)
s=r.d
s===$&&A.h()
if(s.w!=null)r.lf()
s=r.c
s.toString
a.x.uS(s)},
nu(){A.k(this.c.style,"transform","translate(-9999px, -9999px)")
this.p1=!1},
kc(){var s,r,q,p=this,o=p.d
o===$&&A.h()
o=o.w
if(o!=null)B.b.E(p.z,o.ke())
o=p.z
s=p.c
s.toString
r=p.gkU()
o.push(A.bB(s,"input",A.a4(r)))
s=p.c
s.toString
o.push(A.bB(s,"keydown",A.a4(p.gl9())))
o.push(A.bB(self.document,"selectionchange",A.a4(r)))
r=p.c
r.toString
A.bv(r,"beforeinput",A.a4(p.gnn()),null)
r=p.c
r.toString
p.mH(r)
r=p.c
r.toString
o.push(A.bB(r,"focus",A.a4(new A.Oa(p))))
p.Ha()
q=new A.rB()
$.Iu()
q.vd(0)
r=p.c
r.toString
o.push(A.bB(r,"blur",A.a4(new A.Ob(p,q))))},
ur(a){var s=this
s.w=a
if(s.b&&s.p1)s.ev()},
eN(a){var s
this.EB(0)
s=this.ok
if(s!=null)s.b4(0)
this.ok=null},
Ha(){var s=this.c
s.toString
this.z.push(A.bB(s,"click",A.a4(new A.O8(this))))},
yq(){var s=this.ok
if(s!=null)s.b4(0)
this.ok=A.c_(B.b4,new A.O9(this))},
ev(){var s,r
this.c.focus()
s=this.w
if(s!=null){r=this.c
r.toString
s.cu(r)}}}
A.Oa.prototype={
$1(a){this.a.yq()},
$S:1}
A.Ob.prototype={
$1(a){var s=A.cc(this.b.gAD(),0).a<2e5,r=self.document.hasFocus()&&s,q=this.a
if(r)q.c.focus()
else q.a.ot()},
$S:1}
A.O8.prototype={
$1(a){var s=this.a
if(s.p1){A.k(s.c.style,"transform","translate(-9999px, -9999px)")
s.p1=!1
s.yq()}},
$S:1}
A.O9.prototype={
$0(){var s=this.a
s.p1=!0
s.ev()},
$S:0}
A.IV.prototype={
j4(a,b,c){var s,r,q=this
q.oM(a,b,c)
s=q.c
s.toString
a.a.zZ(s)
s=q.d
s===$&&A.h()
if(s.w!=null)q.lf()
else{s=$.f9.z
s.toString
r=q.c
r.toString
s.eK(0,r)}s=q.c
s.toString
a.x.uS(s)},
kc(){var s,r,q=this,p=q.d
p===$&&A.h()
p=p.w
if(p!=null)B.b.E(q.z,p.ke())
p=q.z
s=q.c
s.toString
r=q.gkU()
p.push(A.bB(s,"input",A.a4(r)))
s=q.c
s.toString
p.push(A.bB(s,"keydown",A.a4(q.gl9())))
p.push(A.bB(self.document,"selectionchange",A.a4(r)))
r=q.c
r.toString
A.bv(r,"beforeinput",A.a4(q.gnn()),null)
r=q.c
r.toString
q.mH(r)
r=q.c
r.toString
p.push(A.bB(r,"blur",A.a4(new A.IW(q))))},
ev(){var s,r
this.c.focus()
s=this.w
if(s!=null){r=this.c
r.toString
s.cu(r)}}}
A.IW.prototype={
$1(a){var s=this.a
if(self.document.hasFocus())s.c.focus()
else s.a.ot()},
$S:1}
A.ML.prototype={
j4(a,b,c){var s
this.oM(a,b,c)
s=this.d
s===$&&A.h()
if(s.w!=null)this.lf()},
kc(){var s,r,q=this,p=q.d
p===$&&A.h()
p=p.w
if(p!=null)B.b.E(q.z,p.ke())
p=q.z
s=q.c
s.toString
r=q.gkU()
p.push(A.bB(s,"input",A.a4(r)))
s=q.c
s.toString
p.push(A.bB(s,"keydown",A.a4(q.gl9())))
s=q.c
s.toString
A.bv(s,"beforeinput",A.a4(q.gnn()),null)
s=q.c
s.toString
q.mH(s)
s=q.c
s.toString
p.push(A.bB(s,"keyup",A.a4(new A.MN(q))))
s=q.c
s.toString
p.push(A.bB(s,"select",A.a4(r)))
r=q.c
r.toString
p.push(A.bB(r,"blur",A.a4(new A.MO(q))))
q.tZ()},
Mh(){A.c_(B.v,new A.MM(this))},
ev(){var s,r,q=this
q.c.focus()
s=q.w
if(s!=null){r=q.c
r.toString
s.cu(r)}s=q.e
if(s!=null){r=q.c
r.toString
s.cu(r)}}}
A.MN.prototype={
$1(a){this.a.AY(a)},
$S:1}
A.MO.prototype={
$1(a){this.a.Mh()},
$S:1}
A.MM.prototype={
$0(){this.a.c.focus()},
$S:0}
A.VQ.prototype={}
A.VV.prototype={
cS(a){var s=a.b
if(s!=null&&s!==this.a&&a.c){a.c=!1
a.gfc().eN(0)}a.b=this.a
a.d=this.b}}
A.W1.prototype={
cS(a){var s=a.gfc(),r=a.d
r.toString
s.r4(r)}}
A.VX.prototype={
cS(a){a.gfc().ou(this.a)}}
A.W_.prototype={
cS(a){if(!a.c)a.Nd()}}
A.VW.prototype={
cS(a){a.gfc().ur(this.a)}}
A.VZ.prototype={
cS(a){a.gfc().us(this.a)}}
A.VP.prototype={
cS(a){if(a.c){a.c=!1
a.gfc().eN(0)}}}
A.VS.prototype={
cS(a){if(a.c){a.c=!1
a.gfc().eN(0)}}}
A.VY.prototype={
cS(a){}}
A.VU.prototype={
cS(a){}}
A.VT.prototype={
cS(a){}}
A.VR.prototype={
cS(a){a.ot()
if(this.a)A.aiN()
A.ahF()}}
A.a18.prototype={
$2(a,b){var s=J.ch(b.getElementsByClassName("submitBtn"),t.e)
s.gF(s).click()},
$S:172}
A.VJ.prototype={
QG(a,b){var s,r,q,p,o,n,m,l,k=B.T.eg(a)
switch(k.a){case"TextInput.setClient":s=k.b
r=J.aB(s)
q=new A.VV(A.dL(r.j(s,0)),A.a4Z(t.a.a(r.j(s,1))))
break
case"TextInput.updateConfig":this.a.d=A.a4Z(t.a.a(k.b))
q=B.uM
break
case"TextInput.setEditingState":q=new A.VX(A.a4H(t.a.a(k.b)))
break
case"TextInput.show":q=B.uK
break
case"TextInput.setEditableSizeAndTransform":s=t.a.a(k.b)
r=J.aB(s)
p=A.fB(t.j.a(r.j(s,"transform")),!0,t.pR)
q=new A.VW(new A.M7(A.a_l(r.j(s,"width")),A.a_l(r.j(s,"height")),new Float32Array(A.v7(p))))
break
case"TextInput.setStyle":s=t.a.a(k.b)
r=J.aB(s)
o=A.dL(r.j(s,"textAlignIndex"))
n=A.dL(r.j(s,"textDirectionIndex"))
m=A.nR(r.j(s,"fontWeightIndex"))
l=m!=null?A.a8_(m):"normal"
q=new A.VZ(new A.M8(A.ag6(r.j(s,"fontSize")),l,A.c7(r.j(s,"fontFamily")),B.zI[o],B.kv[n]))
break
case"TextInput.clearClient":q=B.uF
break
case"TextInput.hide":q=B.uG
break
case"TextInput.requestAutofill":q=B.uH
break
case"TextInput.finishAutofillContext":q=new A.VR(A.nQ(k.b))
break
case"TextInput.setMarkedTextRect":q=B.uJ
break
case"TextInput.setCaretRect":q=B.uI
break
default:$.ao().da(b,null)
return}q.cS(this.a)
new A.VK(b).$0()}}
A.VK.prototype={
$0(){$.ao().da(this.a,B.z.b6([!0]))},
$S:0}
A.O4.prototype={
gkl(a){var s=this.a
if(s===$){s!==$&&A.b5()
s=this.a=new A.VJ(this)}return s},
gfc(){var s,r,q,p,o=this,n=null,m=o.f
if(m===$){s=$.cV
if((s==null?$.cV=A.iv():s).w){s=A.aei(o)
r=s}else{s=$.by()
if(s===B.w){q=$.cS()
q=q===B.V}else q=!1
if(q)p=new A.O7(o,A.a([],t.i),$,$,$,n)
else if(s===B.w)p=new A.SD(o,A.a([],t.i),$,$,$,n)
else{if(s===B.ac){q=$.cS()
q=q===B.eD}else q=!1
if(q)p=new A.IV(o,A.a([],t.i),$,$,$,n)
else p=s===B.az?new A.ML(o,A.a([],t.i),$,$,$,n):A.acv(o)}r=p}o.f!==$&&A.b5()
m=o.f=r}return m},
Nd(){var s,r,q=this
q.c=!0
s=q.gfc()
r=q.d
r.toString
s.rI(0,r,new A.O5(q),new A.O6(q))},
ot(){var s,r=this
if(r.c){r.c=!1
r.gfc().eN(0)
r.gkl(r)
s=r.b
$.ao().es("flutter/textinput",B.T.ej(new A.ec("TextInputClient.onConnectionClosed",[s])),A.I8())}}}
A.O6.prototype={
$2(a,b){var s,r,q="flutter/textinput",p=this.a
if(p.d.f){p.gkl(p)
p=p.b
s=t.N
r=t.z
$.ao().es(q,B.T.ej(new A.ec("TextInputClient.updateEditingStateWithDeltas",[p,A.aQ(["deltas",A.a([A.aQ(["oldText",b.a,"deltaText",b.b,"deltaStart",b.c,"deltaEnd",b.d,"selectionBase",b.e,"selectionExtent",b.f,"composingBase",b.r,"composingExtent",b.w],s,r)],t.cs)],s,r)])),A.I8())}else{p.gkl(p)
p=p.b
$.ao().es(q,B.T.ej(new A.ec("TextInputClient.updateEditingState",[p,a.CB()])),A.I8())}},
$S:174}
A.O5.prototype={
$1(a){var s=this.a
s.gkl(s)
s=s.b
$.ao().es("flutter/textinput",B.T.ej(new A.ec("TextInputClient.performAction",[s,a])),A.I8())},
$S:83}
A.M8.prototype={
cu(a){var s=this,r=a.style,q=A.aj_(s.d,s.e)
q.toString
A.k(r,"text-align",q)
A.k(r,"font",s.b+" "+A.f(s.a)+"px "+A.f(A.a0n(s.c)))}}
A.M7.prototype={
cu(a){var s=A.es(this.c),r=a.style
A.k(r,"width",A.f(this.a)+"px")
A.k(r,"height",A.f(this.b)+"px")
A.k(r,"transform",s)}}
A.rW.prototype={
h(a){return"TransformKind."+this.b}}
A.a0m.prototype={
$1(a){return"0x"+B.c.jb(B.f.hq(a,16),2,"0")},
$S:64}
A.be.prototype={
aw(a){var s=a.a,r=this.a
r[15]=s[15]
r[14]=s[14]
r[13]=s[13]
r[12]=s[12]
r[11]=s[11]
r[10]=s[10]
r[9]=s[9]
r[8]=s[8]
r[7]=s[7]
r[6]=s[6]
r[5]=s[5]
r[4]=s[4]
r[3]=s[3]
r[2]=s[2]
r[1]=s[1]
r[0]=s[0]},
j(a,b){return this.a[b]},
ul(a,b,a0,a1){var s=this.a,r=s[0],q=s[4],p=s[8],o=s[12],n=s[1],m=s[5],l=s[9],k=s[13],j=s[2],i=s[6],h=s[10],g=s[14],f=s[3],e=s[7],d=s[11],c=s[15]
s[12]=r*b+q*a0+p*a1+o
s[13]=n*b+m*a0+l*a1+k
s[14]=j*b+i*a0+h*a1+g
s[15]=f*b+e*a0+d*a1+c},
a4(a,b,c){return this.ul(a,b,c,0)},
ht(a,b,c,d){var s=c==null?b:c,r=d==null?b:d,q=this.a
q[15]=q[15]
q[0]=q[0]*b
q[1]=q[1]*b
q[2]=q[2]*b
q[3]=q[3]*b
q[4]=q[4]*s
q[5]=q[5]*s
q[6]=q[6]*s
q[7]=q[7]*s
q[8]=q[8]*r
q[9]=q[9]*r
q[10]=q[10]*r
q[11]=q[11]*r
q[12]=q[12]
q[13]=q[13]
q[14]=q[14]},
ah(a,b){return this.ht(a,b,null,null)},
cp(a,b,c){return this.ht(a,b,c,null)},
fA(a){var s=a.a,r=this.a,q=r[0],p=s[0],o=r[4],n=s[1],m=r[8],l=s[2],k=r[12],j=r[1],i=r[5],h=r[9],g=r[13],f=r[2],e=r[6],d=r[10],c=r[14],b=1/(r[3]*p+r[7]*n+r[11]*l+r[15])
s[0]=(q*p+o*n+m*l+k)*b
s[1]=(j*p+i*n+h*l+g)*b
s[2]=(f*p+e*n+d*l+c)*b
return a},
l3(a){var s=this.a
return s[0]===1&&s[1]===0&&s[2]===0&&s[3]===0&&s[4]===0&&s[5]===1&&s[6]===0&&s[7]===0&&s[8]===0&&s[9]===0&&s[10]===1&&s[11]===0&&s[12]===0&&s[13]===0&&s[14]===0&&s[15]===1},
im(a,b,c){var s=this.a
s[14]=c
s[13]=b
s[12]=a},
hL(b5){var s,r,q,p,o=b5.a,n=o[0],m=o[1],l=o[2],k=o[3],j=o[4],i=o[5],h=o[6],g=o[7],f=o[8],e=o[9],d=o[10],c=o[11],b=o[12],a=o[13],a0=o[14],a1=o[15],a2=n*i-m*j,a3=n*h-l*j,a4=n*g-k*j,a5=m*h-l*i,a6=m*g-k*i,a7=l*g-k*h,a8=f*a-e*b,a9=f*a0-d*b,b0=f*a1-c*b,b1=e*a0-d*a,b2=e*a1-c*a,b3=d*a1-c*a0,b4=a2*b3-a3*b2+a4*b1+a5*b0-a6*a9+a7*a8
if(b4===0){this.aw(b5)
return 0}s=1/b4
r=this.a
r[0]=(i*b3-h*b2+g*b1)*s
r[1]=(-m*b3+l*b2-k*b1)*s
r[2]=(a*a7-a0*a6+a1*a5)*s
r[3]=(-e*a7+d*a6-c*a5)*s
q=-j
r[4]=(q*b3+h*b0-g*a9)*s
r[5]=(n*b3-l*b0+k*a9)*s
p=-b
r[6]=(p*a7+a0*a4-a1*a3)*s
r[7]=(f*a7-d*a4+c*a3)*s
r[8]=(j*b2-i*b0+g*a8)*s
r[9]=(-n*b2+m*b0-k*a8)*s
r[10]=(b*a6-a*a4+a1*a2)*s
r[11]=(-f*a6+e*a4-c*a2)*s
r[12]=(q*b1+i*a9-h*a8)*s
r[13]=(n*b1-m*a9+l*a8)*s
r[14]=(p*a5+a*a3-a0*a2)*s
r[15]=(f*a5-e*a3+d*a2)*s
return b4},
cc(b5,b6){var s=this.a,r=s[15],q=s[0],p=s[4],o=s[8],n=s[12],m=s[1],l=s[5],k=s[9],j=s[13],i=s[2],h=s[6],g=s[10],f=s[14],e=s[3],d=s[7],c=s[11],b=b6.a,a=b[15],a0=b[0],a1=b[4],a2=b[8],a3=b[12],a4=b[1],a5=b[5],a6=b[9],a7=b[13],a8=b[2],a9=b[6],b0=b[10],b1=b[14],b2=b[3],b3=b[7],b4=b[11]
s[0]=q*a0+p*a4+o*a8+n*b2
s[4]=q*a1+p*a5+o*a9+n*b3
s[8]=q*a2+p*a6+o*b0+n*b4
s[12]=q*a3+p*a7+o*b1+n*a
s[1]=m*a0+l*a4+k*a8+j*b2
s[5]=m*a1+l*a5+k*a9+j*b3
s[9]=m*a2+l*a6+k*b0+j*b4
s[13]=m*a3+l*a7+k*b1+j*a
s[2]=i*a0+h*a4+g*a8+f*b2
s[6]=i*a1+h*a5+g*a9+f*b3
s[10]=i*a2+h*a6+g*b0+f*b4
s[14]=i*a3+h*a7+g*b1+f*a
s[3]=e*a0+d*a4+c*a8+r*b2
s[7]=e*a1+d*a5+c*a9+r*b3
s[11]=e*a2+d*a6+c*b0+r*b4
s[15]=e*a3+d*a7+c*b1+r*a},
nF(a){var s=new A.be(new Float32Array(16))
s.aw(this)
s.cc(0,a)
return s},
CD(a){var s=a[0],r=a[1],q=this.a
a[0]=q[0]*s+q[4]*r+q[12]
a[1]=q[1]*s+q[5]*r+q[13]},
h(a){var s=this.aY(0)
return s}}
A.n7.prototype={
e1(a,b,c){var s=this.a
s[0]=a
s[1]=b
s[2]=c},
j(a,b){return this.a[b]},
gm(a){var s=this.a,r=s[0],q=s[1]
s=s[2]
return Math.sqrt(r*r+q*q+s*s)}}
A.xy.prototype={
GO(a,b){var s=this,r=s.b,q=s.a
r.d.l(0,q,s)
r.e.l(0,q,B.jE)
if($.lc)s.c=A.a0p($.I6)
$.he.push(new A.Ml(s))},
gmR(){var s,r=this.c
if(r==null){if($.lc)s=$.I6
else s=B.dL
$.lc=!0
r=this.c=A.a0p(s)}return r},
ka(){var s=0,r=A.Y(t.H),q,p=this,o,n,m
var $async$ka=A.Z(function(a,b){if(a===1)return A.V(b,r)
while(true)switch(s){case 0:m=p.c
if(m==null){if($.lc)o=$.I6
else o=B.dL
$.lc=!0
m=p.c=A.a0p(o)}if(m instanceof A.rp){s=1
break}n=m.ghr()
m=p.c
s=3
return A.a3(m==null?null:m.f5(),$async$ka)
case 3:p.c=A.a5X(n)
case 1:return A.W(q,r)}})
return A.X($async$ka,r)},
mF(){var s=0,r=A.Y(t.H),q,p=this,o,n,m
var $async$mF=A.Z(function(a,b){if(a===1)return A.V(b,r)
while(true)switch(s){case 0:m=p.c
if(m==null){if($.lc)o=$.I6
else o=B.dL
$.lc=!0
m=p.c=A.a0p(o)}if(m instanceof A.qb){s=1
break}n=m.ghr()
m=p.c
s=3
return A.a3(m==null?null:m.f5(),$async$mF)
case 3:p.c=A.a5i(n)
case 1:return A.W(q,r)}})
return A.X($async$mF,r)},
kb(a){return this.NT(a)},
NT(a){var s=0,r=A.Y(t.y),q,p=2,o,n=[],m=this,l,k,j
var $async$kb=A.Z(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:k=m.d
j=new A.aS(new A.ab($.a9,t.D),t.h)
m.d=j.a
s=3
return A.a3(k,$async$kb)
case 3:l=!1
p=4
s=7
return A.a3(a.$0(),$async$kb)
case 7:l=c
n.push(6)
s=5
break
case 4:n=[2]
case 5:p=2
J.aak(j)
s=n.pop()
break
case 6:q=l
s=1
break
case 1:return A.W(q,r)
case 2:return A.V(o,r)}})
return A.X($async$kb,r)},
rY(a){return this.Qm(a)},
Qm(a){var s=0,r=A.Y(t.y),q,p=this
var $async$rY=A.Z(function(b,c){if(b===1)return A.V(c,r)
while(true)switch(s){case 0:q=p.kb(new A.Mm(p,a))
s=1
break
case 1:return A.W(q,r)}})
return A.X($async$rY,r)},
gib(){var s=this.b.e.j(0,this.a)
return s==null?B.jE:s},
ghl(){if(this.f==null)this.zX()
var s=this.f
s.toString
return s},
zX(){var s,r,q,p,o=this,n=self.window
n=n.visualViewport
if(n!=null){s=$.cS()
if(s===B.V){n=self.document.documentElement.clientWidth
s=self.document.documentElement.clientHeight
r=o.w
q=n*(r==null?A.aw():r)
n=o.w
p=s*(n==null?A.aw():n)}else{s=n.width
s.toString
r=o.w
q=s*(r==null?A.aw():r)
n=n.height
n.toString
s=o.w
p=n*(s==null?A.aw():s)}}else{n=self.window.innerWidth
n.toString
s=o.w
q=n*(s==null?A.aw():s)
n=self.window.innerHeight
n.toString
s=o.w
p=n*(s==null?A.aw():s)}o.f=new A.a2(q,p)},
zW(a){var s,r,q=this,p=self.window.visualViewport
if(p!=null){s=$.cS()
if(s===B.V&&!a){p=self.document.documentElement.clientHeight
s=q.w
r=p*(s==null?A.aw():s)}else{p=p.height
p.toString
s=q.w
r=p*(s==null?A.aw():s)}}else{p=self.window.innerHeight
p.toString
s=q.w
r=p*(s==null?A.aw():s)}q.e=new A.Cm(0,0,0,q.f.b-r)},
Rj(){var s,r,q,p,o=this
if(self.window.visualViewport!=null){s=self.window.visualViewport.height
s.toString
r=o.w
q=s*(r==null?A.aw():r)
s=self.window.visualViewport.width
s.toString
r=o.w
p=s*(r==null?A.aw():r)}else{s=self.window.innerHeight
s.toString
r=o.w
q=s*(r==null?A.aw():r)
s=self.window.innerWidth
s.toString
r=o.w
p=s*(r==null?A.aw():r)}s=o.f
if(s!=null){r=s.b
if(r!==q&&s.a!==p){s=s.a
if(!(r>s&&q<p))s=s>r&&p<q
else s=!0
if(s)return!0}}return!1}}
A.Ml.prototype={
$0(){var s=this.a.c
if(s!=null)s.n()},
$S:0}
A.Mm.prototype={
$0(){var s=0,r=A.Y(t.y),q,p=this,o,n,m,l,k,j
var $async$$0=A.Z(function(a,b){if(a===1)return A.V(b,r)
while(true)switch(s){case 0:k=B.T.eg(p.b)
j=t.nV.a(k.b)
case 3:switch(k.a){case"selectMultiEntryHistory":s=5
break
case"selectSingleEntryHistory":s=6
break
case"routeUpdated":s=7
break
case"routeInformationUpdated":s=8
break
default:s=4
break}break
case 5:s=9
return A.a3(p.a.mF(),$async$$0)
case 9:q=!0
s=1
break
case 6:s=10
return A.a3(p.a.ka(),$async$$0)
case 10:q=!0
s=1
break
case 7:o=p.a
s=11
return A.a3(o.ka(),$async$$0)
case 11:o=o.gmR()
j.toString
o.v2(A.c7(J.b0(j,"routeName")))
q=!0
s=1
break
case 8:o=p.a.gmR()
j.toString
n=J.aB(j)
m=A.c7(n.j(j,"location"))
l=n.j(j,"state")
n=A.v5(n.j(j,"replace"))
o.lG(m,n===!0,l)
q=!0
s=1
break
case 4:q=!1
s=1
break
case 1:return A.W(q,r)}})
return A.X($async$$0,r)},
$S:184}
A.xD.prototype={}
A.Cm.prototype={}
A.Dn.prototype={}
A.Dw.prototype={}
A.EZ.prototype={
mM(a){this.vt(a)
this.d3$=a.d3$
a.d3$=null},
fl(){this.oQ()
this.d3$=null}}
A.F_.prototype={
mM(a){this.vt(a)
this.d3$=a.d3$
a.d3$=null},
fl(){this.oQ()
this.d3$=null}}
A.HA.prototype={}
A.HF.prototype={}
A.a2_.prototype={}
J.m7.prototype={
k(a,b){return a===b},
gq(a){return A.fQ(a)},
h(a){return"Instance of '"+A.A_(a)+"'"},
G(a,b){throw A.d(A.a5p(a,b.gBJ(),b.gC2(),b.gBL()))},
gbZ(a){return A.z(a)}}
J.pE.prototype={
h(a){return String(a)},
on(a,b){return b||a},
GK(a,b){return a},
gq(a){return a?519018:218159},
gbZ(a){return B.Il},
$iA:1}
J.pG.prototype={
k(a,b){return null==b},
h(a){return"null"},
gq(a){return 0},
gbZ(a){return B.I5},
G(a,b){return this.ES(a,b)},
$iav:1}
J.b.prototype={}
J.j.prototype={
gq(a){return 0},
gbZ(a){return B.I2},
h(a){return String(a)},
$ij7:1,
$ifV:1,
$ija:1,
$ij9:1,
$ij8:1,
$ijb:1,
$ijc:1,
$imL:1,
$ifR:1,
gnb(a){return a.displayWidth},
gna(a){return a.displayHeight},
ghQ(a){return a.duration}}
J.zS.prototype={}
J.h1.prototype={}
J.fw.prototype={
h(a){var s=a[$.Is()]
if(s==null)return this.F1(a)
return"JavaScript function for "+A.f(J.de(s))},
$ik3:1}
J.t.prototype={
mS(a,b){return new A.b8(a,A.ad(a).i("@<1>").a_(b).i("b8<1,2>"))},
C(a,b){if(!!a.fixed$length)A.U(A.M("add"))
a.push(b)},
ex(a,b){if(!!a.fixed$length)A.U(A.M("removeAt"))
if(b<0||b>=a.length)throw A.d(A.Rp(b,null))
return a.splice(b,1)[0]},
t5(a,b,c){if(!!a.fixed$length)A.U(A.M("insert"))
if(b<0||b>a.length)throw A.d(A.Rp(b,null))
a.splice(b,0,c)},
Bg(a,b,c){var s,r
if(!!a.fixed$length)A.U(A.M("insertAll"))
A.a5I(b,0,a.length,"index")
if(!t.W.b(c))c=J.aaD(c)
s=J.b4(c)
a.length=a.length+s
r=b+s
this.aF(a,r,a.length,a,b)
this.cd(a,b,r,c)},
f3(a){if(!!a.fixed$length)A.U(A.M("removeLast"))
if(a.length===0)throw A.d(A.lk(a,-1))
return a.pop()},
u(a,b){var s
if(!!a.fixed$length)A.U(A.M("remove"))
for(s=0;s<a.length;++s)if(J.e(a[s],b)){a.splice(s,1)
return!0}return!1},
qq(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.d(A.b9(a))}q=p.length
if(q===o)return
this.sm(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
E(a,b){var s
if(!!a.fixed$length)A.U(A.M("addAll"))
if(Array.isArray(b)){this.H3(a,b)
return}for(s=J.al(b);s.p();)a.push(s.gB(s))},
H3(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.d(A.b9(a))
for(s=0;s<r;++s)a.push(b[s])},
H(a){if(!!a.fixed$length)A.U(A.M("clear"))
a.length=0},
P(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw A.d(A.b9(a))}},
fu(a,b,c){return new A.ay(a,b,A.ad(a).i("@<1>").a_(c).i("ay<1,2>"))},
b0(a,b){var s,r=A.bd(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.f(a[s])
return r.join(b)},
td(a){return this.b0(a,"")},
f4(a,b){return A.dV(a,0,A.dc(b,"count",t.S),A.ad(a).c)},
e2(a,b){return A.dV(a,b,null,A.ad(a).c)},
PY(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.d(A.b9(a))}return s},
PZ(a,b,c){return this.PY(a,b,c,t.z)},
nl(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.d(A.b9(a))}throw A.d(A.bs())},
PP(a,b){return this.nl(a,b,null)},
j9(a,b,c){var s,r,q=a.length
for(s=q-1;s>=0;--s){r=a[s]
if(b.$1(r))return r
if(q!==a.length)throw A.d(A.b9(a))}if(c!=null)return c.$0()
throw A.d(A.bs())},
Ro(a,b){return this.j9(a,b,null)},
a6(a,b){return a[b]},
b1(a,b,c){if(b<0||b>a.length)throw A.d(A.bf(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.d(A.bf(c,b,a.length,"end",null))
if(b===c)return A.a([],A.ad(a))
return A.a(a.slice(b,c),A.ad(a))},
c7(a,b){return this.b1(a,b,null)},
lz(a,b,c){A.d9(b,c,a.length)
return A.dV(a,b,c,A.ad(a).c)},
gF(a){if(a.length>0)return a[0]
throw A.d(A.bs())},
gI(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.bs())},
ghu(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.d(A.bs())
throw A.d(A.acD())},
aF(a,b,c,d,e){var s,r,q,p,o
if(!!a.immutable$list)A.U(A.M("setRange"))
A.d9(b,c,a.length)
s=c-b
if(s===0)return
A.cO(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.IK(d,e).bT(0,!1)
q=0}p=J.aB(r)
if(q+s>p.gm(r))throw A.d(A.a50())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.j(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.j(r,q+o)},
cd(a,b,c,d){return this.aF(a,b,c,d,0)},
h_(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.d(A.b9(a))}return!1},
AM(a,b