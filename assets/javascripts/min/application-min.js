jQuery(document).ready(function($){function e(){var e=$(".floating-labels .flexi-label").next();e.each(function(){var e=$(this);n(e),e.on("change keyup",function(){n(e)})})}function n(e){""===e.val()?e.prev(".flexi-label").removeClass("flexing"):e.prev(".flexi-label").addClass("flexing")}$(".floating-labels").length>0&&e()}),$(document).ready(function(){window.console.log("Mae govannen mellon!"),$(".btn-submit").on("click",function(e){$(this).addClass("success"),$(".form-outer").addClass("success"),e.preventDefault()}),$(".search-form").focus(function(){$(".search-icon").addClass("expand"),$(".search-btn").addClass("expand")}),$(".search-form").blur(function(){$(".search-icon").removeClass("expand"),$(".search-btn").removeClass("expand")})});