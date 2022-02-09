const tileDisplay = document.querySelector('.tile-container')

const letters = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
]

const letterGrid = [
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '']
]

// call the GET API to grab the 9x9 grid



// create the grid
letterGrid.forEach((gridRow, gridRowIndex) =>
{
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id', 'gridRow-' + gridRowIndex)

    gridRow.forEach((_letter, letterIndex) =>
    {
        const buttonElement = document.createElement('button')
        buttonElement.setAttribute('id', 'gridRow-' + gridRowIndex + '-tile-' + letterIndex)
        buttonElement.classList.add('tile')

        buttonElement.textContent = letters[Math.floor(Math.random()*letters.length)] // fill with random letters for now

        buttonElement.addEventListener('click', () => handleClick(_letter))
        rowElement.append(buttonElement)
    })

    tileDisplay.append(rowElement)
})

function handleClick(_letter) {
    // record what letter
    // generate the next 3x3 grid

    return undefined;
}