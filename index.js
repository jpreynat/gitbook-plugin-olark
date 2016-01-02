var swig = require('swig');
var _ = require('lodash');
var path = require('path');
var classHtmlAttribute = /class=['"](.+)['"]/;
var tpl = swig.compileFile(path.resolve(path.dirname(module.filename), 'olark.html'));


function displayCode(_page) {

  // var nodes = marked.lexer(_page.content);
  // var page = _page;
  // var revealCount = 1;
  // var revealNodes = _.filter(nodes, function(n) {
  //   if (n.type !== 'html') return false;
  //   var text = n.text.substring(0, n.text.indexOf(">")),
  //       classAttr = classHtmlAttribute.exec(text);
  //   return classAttr && classAttr[1] === 'reveal';
  // });

  // _.each(revealNodes, function(n) {
  //   var body = marked.lexer(n.text.substring(n.text.indexOf('>') + 1, n.text.lastIndexOf('<')));
  //   var reveals = [], revealNodes = [], revealTitle = body[0].text;
  //   for (var i = 0; i < body.length; i++) {
  //     if (body[i].type !== 'hr') {
  //       revealNodes.push(body[i]);
  //     }
  //     if (body[i].type === 'hr' || i === body.length - 1) {
  //       revealNodes = _.toArray(revealNodes);
  //       revealNodes.links = {};
  //       reveals.push({
  //         title: revealTitle,
  //         id: _page.progress.current.level + "-" + revealCount + "-" + reveals.length,
  //         content: marked.parser(revealNodes)
  //       });

  //       if (i !== body.length - 1) {
  //         revealTitle = body[++i].text;
  //         revealNodes = [body[i]];
  //       }
  //     }
  //   }
  //   page.content = page.content.replace(n.text, tpl({ reveals: reveals }));
  //   revealCount++;
  // });
  // return page;


    var config = this.options.pluginsConfig.olark || {};
    
    if (!config.site_id) {
     throw "Need to option 'site_id' for Olark plugin";
    }
    
    if (!config.configuration) {
     config.configuration = 'auto';
    }

    if(typeof config.configuration === 'object' && config.configuration !== null) {
     configuration = JSON.stringify(config.configuration);
    }
    else if (['auto', 'none'].indexOf(config.configuration) != -1) {
     configuration = "'" + config.configuration + "'";
    }

  return tpl({
    site_id: config.site_id
  });

}

module.exports = {
    book: {
        assets: "./book",
        js: [
            "plugin.js"
        ],
        html: {
            "body:end": displayCode
  
            // return "<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){"
            // + "(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),"
            // + "m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)"
            // + "})(window,document,'script','//www.google-analytics.com/analytics.js','ga');"
            // + "ga('create', '"+config.site_id+"', "+configuration+");"
            // + "ga('send', 'pageview');</script>";

        }
    }
};
