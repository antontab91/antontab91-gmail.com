// const listItem = document.querySelector('.list-item');
// const list = document.querySelector('.list');

// function handleItemClick() {
//     console.log('list item click');
// }

// listItem.onclick = handleItemClick();

// // onclick vs addEventListener
// // 1. add and remove listener
// // 2. handle event on bubbling or capturing
// // 3. multiple handlers for same element for same event

// function handleListClick() {
//     console.log('list click');
// }

// list.addEventListener('click', handleListClick);

// ---------------------------------------------------------------------

const listItems = document.querySelectorAll('.list-item');
const list = document.querySelector('.list');


function handleClick(event) {


    // console.log('click');
    // console.log(event.target.textContent);
    const isListItem = Boolean(event.target.closest('.list-item'));
    if (isListItem) {
        console.log(event.target.textContent);
    }
}

list.addEventListener('click', handleClick);

listItems.forEach(elem => {
    elem.addEventListener('click', handleClick);
});