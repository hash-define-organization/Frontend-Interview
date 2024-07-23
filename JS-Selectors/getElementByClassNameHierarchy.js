document.getByClassnameHierarchy = function (classNames) {
    const root = this.body;
    const result = [];
    const classes = classNames.split('>');
    helper(root, classes, 0, result);
    return result;
}


function helper(element, classes, index, result) {
    const target = classes[index];
    if (index === classes.length - 1 && element.classList.contains(target)) {
        result.push(element);
        return;
    }

    for (let child of element.children) {
        if (element.classList.contains(target)) {
            helper(child, classes, index + 1, result)
        } else {
            helper(child, classes, 0, result)
        }
    }


}