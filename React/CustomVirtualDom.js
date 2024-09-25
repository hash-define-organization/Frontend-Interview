const makeComponent = (tag) => (attributes, children) => {
    // key === id
    if (!attributes || !attributes.id) {
        throw new Error("Component needs an id");
    }
    // return jsx
    return {
        tag,
        attributes,
        children,
    }
}


const div = makeComponent('div');
const p = makeComponent('p');
const h1 = makeComponent('h1');

// app.js
{/* <div>
   <div>
    <h1>

    </h1>
    <p>

    </p>
    </div> 
</div> */}
const app = props => (
    div({ id: 'main' }, [
        div({ id: 'header' }, [
            h1({ id: 'title' }, `hello ${props.names}`),
            p({ id: 'static' }, "Static Content"),
        ])
    ])
)

const setAttributes = (element, attributes) => {
    return Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]))
}

// ReactDOM.render() 
const renderer = ({ tag, children = "", attributes = {} }) => {
    const el = document.createElement(tag);
    setAttributes(el, attributes);

    if (typeof children === 'string') {
        el.innerText = children;
    } else {
        children.map(renderer).forEach((ele) => el.appendChild(ele));
    }

    return el;
}



const areObjectsDiffernt = (a, b) => {
    const allKeys = Array.from(new Set([...Object.keys(a), ...Object.keys(b)]))
    return allKeys.some(node => a[node] !== b[node]);
}

const areNodesDifferent = (a, b) => {
    if (!a || !b || (a.tag !== b.tag)) return true;

    const typeA = typeof a.children;
    const typeB = typeof b.children;

    if (typeA !== typeB) {
        return true;
    }

    if (areObjectsDiffernt(a, b)) {
        return true;
    }

    if (typeA === 'string' && a.children !== b.children) {
        return true;
    }

    return false;

    // return typeA !== typeB 
    //   || areObjectsDiffernt(a, b) 
    //   || typeA === 'string' && a.children !== b.children;
}


const diffAndReRender = (prevNode, currNode) => {
    if (areNodesDifferent(prevNode, currNode)) {
        // patching 
        const nodeId = currNode.attributes.id;
        prevNode.children = currNode;
        // patch
        return document
        .querySelector(`#${nodeId}`)
        .replaceWith(renderer(currNode));
    } else {
        currNode.children.forEach((currChildNode, idx) => {
            diffAndReRender(prevNode.children[idx], currChildNode)
        })
    }

}

let names = "Hi define Clubs";

const virtualDomTree = app({ names: names  }); 
const root = document.getElementById('root'); 
root.appendChild(renderer(virtualDomTree));


setInterval(() => {
    names = (names === "Hi define Clubs") ? "Hi define team" : "Hi define Clubs";
    // new virtual dom tree
    const newVirtualDomTree = app({ names }) // re-render
    diffAndReRender(virtualDomTree, newVirtualDomTree);
}, 1000)


