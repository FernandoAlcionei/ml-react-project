(this["webpackJsonpml-react-project"]=this["webpackJsonpml-react-project"]||[]).push([[3],{241:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){},246:function(e,t,a){"use strict";a.r(t);var c=a(39),n=a(37),r=a(38),i=a(40),o=a(41),u=a(0),l=a.n(u),s=(a(241),a(65)),d=a(21),p=(a(242),function(e){var t=e.label,a=e.onClick,c=e.btnType,n=e.className,r=e.disable;return l.a.createElement("button",{"data-testid":"button-component",disabled:r,type:"button",className:Object(d.b)(["btn-component",c,n]),onClick:a},t)});p.defaultProps={className:"",btnType:"btn-primary",disable:!1};var m=p,b=(a(243),function(e){var t,a=e.product,c=e.buy;return l.a.createElement("div",{className:"product-component"},l.a.createElement("div",{className:"wrap-product-info"},l.a.createElement("div",{className:"wrap-product-img"},l.a.createElement("img",{className:"product-img",src:a.picture,alt:a.title})),l.a.createElement("div",{className:"product-info"},l.a.createElement("span",{className:"sold-quantity"},a.condition," - ",a.sold_quantity," vendidos"),l.a.createElement("h2",{className:"title"},a.title),l.a.createElement("div",{className:"price"},l.a.createElement("span",null,Object(d.a)(a.price.amount,a.price.currency)),l.a.createElement("span",{className:"decimals"},0===(t=a.price.decimals)?"00":t)),l.a.createElement(m,{className:"buy-btn",onClick:function(){return c()},label:"Comprar"}))),l.a.createElement("div",{className:"wrap-descriptions"},l.a.createElement("span",{className:"description-label"},"Descripci\xf3n del produto"),l.a.createElement("p",{className:"description"},a.description)))}),f=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).state={},c}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.getProductDetails,t=this.props,a=t.location,c=t.match.params.id;document.title=Object(d.c)("title",a),e(c)}},{key:"componentWillUnmount",value:function(){(0,this.props.clearReducer)()}},{key:"buy",value:function(){var e=this.props,t=e.product.id;(0,e.buyProduct)(t)}},{key:"renderProduct",value:function(){var e=this,t=this.props,a=t.loadingView,c=t.product;return!a&&c.id?l.a.createElement(b,{buy:function(){return e.buy()},product:c}):null}},{key:"render",value:function(){var e=this.props.loadingView;return l.a.createElement("div",{className:"product-view"},l.a.createElement(s.a,{show:e}),this.renderProduct())}}]),a}(u.Component),v=a(48),y=f;t.default=Object(c.b)((function(e){return{product:e.productDetailsReducer.product,loadingView:e.productDetailsReducer.loadingView}}),(function(e){return{clearReducer:function(){return e(Object(v.b)())},getProductDetails:function(t){return e(Object(v.e)(t))},buyProduct:function(t){return e(Object(v.d)(t))}}}))(y)}}]);
//# sourceMappingURL=3.12d406b2.chunk.js.map