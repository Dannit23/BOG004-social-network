export default () => {
    const viewWall = `
    <form id="wall">
    <p>En construcción...</p>
    </form>
    `;
    const divElem = document.createElement('div');
    divElem.innerHTML = viewWall;
    return divElem; 
}