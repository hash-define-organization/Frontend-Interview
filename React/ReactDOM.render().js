const dom = {
    type: 'div',
    props: { id: 'hello', style: { color: 'red' } },
    children: [{ type: 'h1', children: 'HELLO' }],
};

const entry = document.getElementById('root');

const render = (entry, domObj) => {
    console.log(entry)
    const helper = (obj) => {
        const { type, props, children } = obj;
        const el = document.createElement(type);
        if (props) {
            for (let property in props) {
                el[property] = props[property];  // 1
            }
        }

        if (typeof children === 'string') {
            el.innerText = children;
        } else {

            const fragment = document.createDocumentFragment();  // node 
            for (let child of children) {
                fragment.appendChild(helper(child));
            }

            el.appendChild(fragment);

        }
        return el;
    }

    const generatedDom = helper(domObj);
    entry.appendChild(generatedDom);
}

render(entry, dom);
