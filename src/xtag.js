/******************************************************************************************************
 |
 |  Xtag Library
 |  @author: Lucas Pereira Brigida
 |  @description: Convert custom strings to links.
 |  
 |  How use: In your Html insert some these Xtags
 |  Example:
 |      <div class="xtags-example">
 |          <span>[phone="(11) 2222-3333"]</span>
 |          <span>[site="https://github.com/lucasbrigida"]</span>
 |          <span>[twitter="@lucas_brigida"]</span>
 |          <span>[facebook="@lucas.brigida"]</span>
 |          <span>[instagram="@lucasbrigida"]</span>
 |          <span>[your-social="@lucasbrigida"]</span>
 |      </div>
 |
 |       <script>
 |           jQuery(function(){
 |               new Xtag()
 |                   .phone('.xtags-example span')
 |                   .social('.xtags-example span', 'twitter')
 |                   .social('.xtags-example span', 'instagram')
 |                   .social('.xtags-example span', 'facebook')
 |                   .site('.xtags-example span')
 |                   .social('.xtags-example span', 'your-social', 'http://yoursocial.com/');
 |           });
 |       </script>
 |      
 ******************************************************************************************************/

function Xtag() {
    /* Phone */
    var _xPhone = function(index, obj) {
        var tagValue = jQuery(obj).text();
        var tagPrettyValue = tagValue.replace('[phone=\"', '').replace('\"]', '');
        var tagRawValue = tagPrettyValue;
        tagRawValue = tagRawValue.split('(').join('');
        tagRawValue = tagRawValue.split(')').join('');
        tagRawValue = tagRawValue.split(' ').join('');
        tagRawValue = tagRawValue.split('-').join('');
        var tagRegexp = /^\(?[1-9]{2}\)?\s?\d{4,5}(\-|\s)?\d{4}$/gm;
        var tagTemplate = '<a href="tel:' + tagRawValue + '" target="_blank">' + tagPrettyValue + '</a>';
        if (tagRegexp.test(tagRawValue) === true) jQuery(obj).html(tagTemplate);
    };

    var phone = function(selector) {
        var tagSelector = jQuery(selector + ':contains("phone")');
        tagSelector.each(_xPhone);
        return this;
    };


    /* Site */
    var _xSite = function(index, obj) {
        var tag = jQuery(obj).attr('xtag-site');
        var siteUrl = jQuery(obj).attr('xtag-site-url');
        var tagValue = jQuery(obj).text();
        var tagPrettyValue = tagValue.replace('[' + tag + '=\"', '').replace('\"]', '');
        var tagRawValue = tagPrettyValue.replace('@', '');

        if (siteUrl === '_self') siteUrl = ''; // For personal sites
        
        var tagTemplate = '<a href="' + siteUrl + tagRawValue + '" target="_blank">' + tagPrettyValue + '</a>';
        jQuery(obj).html(tagTemplate);
    };

    var url = function(selector, siteName, siteNetworkDomain) {
        var tagSelector = jQuery(selector + ':contains("' + siteName + '")');
        var siteNetworkUrl = siteNetworkDomain || ('http://' + siteName + '.com/');
        tagSelector.attr('xtag-site', siteName);
        tagSelector.attr('xtag-site-url', siteNetworkUrl);
        tagSelector.each(_xSite);
        return this;
    }

    /* Social Networks */
    var social = url;

    /* Site */
    var site = function (selector) {
        url(selector, 'site', '_self');
        return this;
    };

    return {
        phone: phone,
        site: site,
        social: social
    };
}