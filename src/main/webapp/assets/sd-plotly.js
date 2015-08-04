(function(){
    var plotly = function(converter) {
        return [
            {
              type    : 'lang',
              regex   : '\\{\\{plot\\-(\\d+)\\}\\}',
              replace : function(match, idplot) {
                  return '<div class="plot" id="fresnault/' + idplot + '"></div>';
              }
            }
        ];
    };

    // Client-side export
    if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.plotly = plotly; }
    // Server-side export
    if (typeof module !== 'undefined') module.exports = plotly;
}());