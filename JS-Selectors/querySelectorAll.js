document.myQuerySelectorAll = function (selector) {
    let result = [];

    function traverse(node) {
        if (node.matches(selector)) {
            result.push(node);
        }
        let len = node.children.length;
        for (let idx = 0; idx < len; idx++) {
            traverse(node.children[idx]);
        }
    }


    traverse(document.body)
    return result;
}