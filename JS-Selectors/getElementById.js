document.findById = function (requiredId) {
    const root = this.body;

    function search(node) {
        let result = null;
        if (node.id === requiredId) {
            return node;
        }

        for (const element of node.children) {
            let res = search(element)
            if (res) {
                return res;
            }
        }
        return result;
    }

    return search(root);

}