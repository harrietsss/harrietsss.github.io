function addEvent(elem, type, handler) {
            elem.addEventListener(type, handler, false);
        }

        function qs(selector) {
            return document.querySelector(selector);
        }

        function qsa(selectors) {
            return document.querySelectorAll(selectors);
        }

        var mockData = ['内容1', '内容2', '内容3', '内容4', '内容5'];

        addEvent(qs('.items-more-btn'), 'click', function() {
            renderList(mockData);
        });

        var itemTpl = qs('#item-tpl').innerHTML;
        var itemsDOM = qs('.items');

        /**
         * 渲染数据
         * @param  {[type]} data [description]
         * @return {[type]}      [description]
         */
        function renderList(data) {
            var data = data.map(function(val, index) {
                return {
                    index: index + 1,
                    content: val
                };
            });

            var html = '';
            var fragment = document.createDocumentFragment();

            data.forEach(function(item) {
                var divTemp = document.createElement('div');

                // 模板替换
                divTemp.innerHTML = itemTpl.replace(/{{(\w+)}}/g, function(input, match) {
                    return match ? item[match] || '' : '';
                });

                fragment.appendChild(divTemp.firstElementChild);
            });

            // 渲染
            itemsDOM.appendChild(fragment);
        }
