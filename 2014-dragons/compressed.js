L=300,k=a.width,q=a.height,r=Math,s=r.cos,t=r.sin,v=r.random,w=0,x=r.PI,y=[],z=[];function B(){a.width=k;for(j=0;7>j;j++)y[j]||(y[j]=C()),y[j]();w++;requestAnimationFrame(B)}
function C(){var l=j,h=.1+l*l/49,m=v()*k/h,n=q/h,A=3+5*v(),p=x,u=p,d=[];return function(){if(-L>m||m>k/h+L||-L>n||n>q/h+L){var b=k/h/2-m,e=q/h/2-n;p=u=r.atan(b/e)+(0>e?x:0)}else u+=.1*v()-.05,p-=.1*(p-u);m+=t(p)*A;n+=s(p)*A;for(i=0;70>i;i++)if(i){w||(d[i]={x:m,y:n});var e=d[i-1],b=d[i].x-e.x,e=d[i].y-e.y,g=r.sqrt(b*b+e*e),f=r.atan(e/b)+x/2+(0>b?x:0),g=4<g?.5:2<g?(g-2)/4:0;d[i].x-=b*g;d[i].y-=e*g;d[i].a=s(f);d[i].b=t(f);if(20==i)var l=f}else d[i]={x:m,y:n,a:0,b:0};c.moveTo(d[0].x,d[0].y);
for(i=0;154>i;i+=2)77>i?(b=i,e=1):(b=152-i,e=-1),f=z[b],g=d[z[b+1]],56<=b?(f=56-b,f=t(f/3+.1*w)*f*e,f=20-b/4+f,g=d[2*b-83]):13<b&&(f=4+(f-4)*(t((-f/2+w)/25*A/4)+2)*2,g.a=s(l),g.b=t(l)),c.lineTo((g.x+f*e*g.a)*h,(g.y+f*e*g.b)*h);c.fill()}}'! ((&(&*$($,&.)/-.0,4%3"7$;(@/EAA<?:<9;;88573729/7,6(8&;'.split("").map(function(l,h){z[h]=l.charCodeAt(0)-32});B();