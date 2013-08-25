requirejs.config({
	urlArgs: "noCache=" +  (new Date()).getTime(),
    //urlArgs: "version=1.0.0",
    baseUrl: '',
    paths: {},
    shim: {},
    locale: localStorage.getItem('locale') || 'en-us'

});

requirejs(['js/app']);
