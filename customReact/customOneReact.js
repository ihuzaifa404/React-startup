// function customRender(customReact,container) {
//     const domElement=document.createElement(customReact.type)
//     domElement.innerHTML=customReact.children
//     domElement.setAttribute('href',customReact.props.href)
//     domElement.setAttribute('target',customReact.props.target)
//     container.appendChild(domElement)
// }




function customRender(customReact,container) {
    const domElement=document.createElement(customReact.type)
    domElement.innerHTML=customReact.children;
    for (const prop in customReact.props) {
        if (prop =='children') continue;
        domElement.setAttribute(prop,customReact.props[prop])
    }
    container.appendChild(domElement)
}
const customReact={
    type:'a',
    props:{
        href:"http://google.com",
        target:"_blank"
    },
    children:"Click Me to check Google"
}
const createRoot=document.querySelector('.root')
customRender(customReact, createRoot)