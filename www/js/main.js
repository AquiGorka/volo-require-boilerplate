requirejs.config({
	baseUrl: '',
    paths: {},
    shim: {},
    locale: localStorage.getItem('locale') || 'en-us'
});
requirejs(['js/app']);
