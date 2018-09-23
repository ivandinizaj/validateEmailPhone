(function(window, document) {

var app = {
	forms 	: document.forms[0],
	submit 	: document.querySelector('.btn-submit'),
	clsValid : 'valid',
	clsError : 'error',

	init : function(){
		this.submit.addEventListener( 'click', this.onsubmit, false );
		this.forms.email.addEventListener( 'change', this.check, false );
		this.forms.email.addEventListener( 'keypress', this.check, false );
		this.forms.phone.addEventListener( 'change', this.check, false );
		this.forms.phone.addEventListener( 'keypress', this.check, false );
		
	},

	hasClass: function(ele, cls) {
		return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)')) ? true : false ;
	},

	addClass: function(ele, cls) {
		if (!app.hasClass(ele,cls)){
				ele.className += ele.className == '' ? cls : ' '+cls;
		}
	},

	removeClass: function(ele, cls) {
		if (app.hasClass(ele,cls)) {
	      var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
	      ele.className=ele.className.replace(reg,'');
	      return true;
	    }
	    return false;
	},

	checkEmail: function (email) {

		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

		if (!reg.test(email)) 
			return false;

		return true;
	},

	checkPhone: function (phone) {
		
		var reg = /^\([1-9]{2}\)[2-9][0-9]{7,8}$/;

		if (!reg.test(phone)) 
			return false;

		return true;
	},

	changeClass : function(ele, newCls){
		app.removeClass(ele, app.clsValid);
		app.removeClass(ele, app.clsError);
		app.addClass(ele, newCls);
	},

	check : function(event){

		var email = app.checkEmail( app.forms.email.value );
		var phone = app.checkPhone( app.forms.phone.value );

		if(!email)
			app.changeClass(app.forms.email, app.clsError);
		else
			app.changeClass(app.forms.email, app.clsValid);

		if(!phone)
			app.changeClass(app.forms.phone, app.clsError);
		else
			app.changeClass(app.forms.phone, app.clsValid);

		if( email && phone)
			app.submit.removeAttribute('disabled');
		else
			app.submit.setAttribute('disabled', 'disabled');
		


		return false;
	},

	clean : function(){

		app.forms.email.value = '';
		app.forms.phone.value = '';

		app.removeClass(app.forms.email, app.clsValid);
		app.removeClass(app.forms.email, app.clsError);

		app.removeClass(app.forms.phone, app.clsValid);
		app.removeClass(app.forms.phone, app.clsError);
	}

};

app.init();

})(window, document);