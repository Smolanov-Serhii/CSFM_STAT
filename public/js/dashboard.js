$(document).ready(function(){$(".lang-current").click(function(){$(this).toggleClass("active"),$(".dashboard__nav-items").toggleClass("opacity"),$(".lang-list").slideToggle("easing")}),jQuery("img.svg").each(function(){var e=jQuery(this),a=e.attr("id"),n=e.attr("class"),t=e.attr("src");jQuery.get(t,function(t){t=jQuery(t).find("svg");void 0!==a&&(t=t.attr("id",a)),!(t=(t=void 0!==n?t.attr("class",n+" replaced-svg"):t).removeAttr("xmlns:a")).attr("viewBox")&&t.attr("height")&&t.attr("width")&&t.attr("viewBox","0 0 "+t.attr("height")+" "+t.attr("width")),e.replaceWith(t)},"xml")}),$(document).ready(function(){var t=new Date;t.setDate(t.getDate()),$("#Date").html(t.getDate()+" "+["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"][t.getMonth()]+" "+t.getFullYear()),setInterval(function(){var t=(new Date).getSeconds();$("#sec").html((t<10?"0":"")+t)},1e3),setInterval(function(){var t=(new Date).getMinutes();$("#min").html((t<10?"0":"")+t)},1e3),setInterval(function(){var t=(new Date).getHours();$("#hours").html((t<10?"0":"")+t)},1e3)})});