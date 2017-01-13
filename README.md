#  Xtag Library
Convert custom strings to links.

## Installing
```bash
	bower install xtag
```

## How use
In your Html insert some these Xtags
Example:
```html
	<div class="xtags-example">
	   <span>[phone="(11) 2222-3333"]</span>
	   <span>[site="https://github.com/lucasbrigida"]</span>
	   <span>[twitter="@lucas_brigida"]</span>
	   <span>[facebook="@lucas.brigida"]</span>
	   <span>[instagram="@lucasbrigida"]</span>
	   <span>[your-social="@lucasbrigida"]</span>
	</div>

	<script>
	    jQuery(function(){
	        new Xtag()
	            .phone('.xtags-example span')
	            .social('.xtags-example span', 'twitter')
	            .social('.xtags-example span', 'instagram')
	            .social('.xtags-example span', 'facebook')
	            .site('.xtags-example span')
	            .social('.xtags-example span', 'your-social', 'http://yoursocial.com/');
	    });
	</script>
```

## Demo
["See Demo"](https://rawgit.com/lucasbrigida/xtag/develop/demo/xtag.html)