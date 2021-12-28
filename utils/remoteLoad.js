export default function remoteLoad(url, hasCallback) {
    return createScript(url);
    /**
      * 创建script
      * @params url
      * returns {Promise}
    **/
    function createScript(url) {
        var scriptElement = document.createElement('script');
        document.body.appendChild(scriptElement);
        var promise = new Promise((resolve, reject) => {
            scriptElement.addEventListener('load', e => {
                removeScript(scriptElement);
                if (!hasCallback) {
                    resolve(e);
                }
            }, false);

            scriptElement.addEventListener('error', e => {
                removeScript(scriptElement);
                reject(e)
            }, false);

            if (hasCallback) {
                window._calllback_ = function () {
                    resolve();
                    window._calllback_ = null;
                }
            }
        })

        if (hasCallback) {
            url += '&callback=_callback_'
        }

        scriptElement.src = url;

        return promise;
    }

    /**
     * 移除script标签
     * @param scriptElement script dom 
    **/
   function removeScript(scriptElement){
       document.body.removeChild(scriptElement);
   }
}