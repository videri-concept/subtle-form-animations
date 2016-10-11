$(document).ready(function(){
	window.console.log("Mae govannen mellon!");

	if( $('.floating-labels').length > 0 ) moveLabel();

	function moveLabel() {
		var inputFields = $('.floating-labels .flexi-label').next();
		inputFields.each(function(){
			var singleInput = $(this);
			//check if user is filling one of the form fields 
			checkVal(singleInput);
			singleInput.on('change keyup', function(){
				checkVal(singleInput);	
			});
		});
	}

	//check inputs have value
	function checkVal(inputField) {
		( inputField.val() === '' ) ? inputField.prev('.flexi-label').removeClass('flexing') : inputField.prev('.flexi-label').addClass('flexing');
	}

	$('.btn-submit').on('click', function(e){
		$(this).addClass('success');
		$('.form-outer').addClass('success');
		e.preventDefault();
	});

	//if search form has focus perform x
	$('.search-form').focus(function() {
		$('.search-icon').addClass('expand');
		$('.search-btn').addClass('expand');
	});

	//if search form loses focus perform x
	$('.search-form').blur(function() {
		$('.search-icon').removeClass('expand');
		$('.search-btn').removeClass('expand');
	});

});


