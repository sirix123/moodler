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

const numLettersInGrid = 81 // number of letters in a 9x9 grid
const arrayLetters9x9 = []
let startPosition = 44
const letterGrid3x3 =
[
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

for (let i = 0; i < numLettersInGrid; i++) {
    arrayLetters9x9[i] = [letters[Math.floor(Math.random()*letters.length)]] // random letters for now...
}

Generate3x3Grid()
Populate3x3Grid()

// generate 3x3 and figure out the letters for each position based on array of 88 letters
//for each row in 3x3... create div, give attrib, for each letter in row, create button set ati, text =
// current location (top left to bottom right).. startpos -11, startpos -10.. etc (check the current index)
function Generate3x3Grid()
{
    letterGrid3x3.forEach((gridRow, gridRowIndex) =>
    {
        const rowElement = document.createElement('div')
        rowElement.setAttribute('id','gridRow-' + gridRowIndex)

        gridRow.forEach((_letter, rowindex) =>
        {
            const buttonElement = document.createElement('button')
            buttonElement.classList.add('tile')

            rowElement.append(buttonElement)
        })

        tileDisplay.append(rowElement)
    })
}

function Populate3x3Grid()
{
    let elements = document.getElementsByTagName('button');
    let buttonTextContent = ""
    let letterIndex = ""

    for (let i = 0; i < elements.length; i++)
    {
        elements.item(i).removeEventListener('click', () =>handleClick());
    }

    for (let i = 0; i < 9; i++)
    {
        if ( i === 0 )
        {
            buttonTextContent = arrayLetters9x9[startPosition - 11]
            letterIndex = (startPosition - 11).toString()

            elements.item(i).textContent = buttonTextContent + " " + letterIndex
            elements.item(i).setAttribute('tileIndex', letterIndex)

            elements.item(i).setAttribute('letterIndex', letterIndex)
            elements.item(i).setAttribute('buttonTextContent', buttonTextContent)

            elements.item(i).addEventListener('click', handleClick)
        }
        if ( i === 1 )
        {
            buttonTextContent = arrayLetters9x9[startPosition - 10]
            letterIndex = (startPosition - 10).toString()

            elements.item(i).textContent = buttonTextContent + " " + letterIndex
            elements.item(i).setAttribute('tileIndex', letterIndex)

            elements.item(i).setAttribute('letterIndex', letterIndex)
            elements.item(i).setAttribute('buttonTextContent', buttonTextContent)

            elements.item(i).addEventListener('click', handleClick)
        }
        if ( i === 2 )
        {
            buttonTextContent = arrayLetters9x9[startPosition - 9]
            letterIndex = (startPosition - 9).toString()

            elements.item(i).textContent = buttonTextContent + " " + letterIndex
            elements.item(i).setAttribute('tileIndex', letterIndex)

            elements.item(i).setAttribute('letterIndex', letterIndex)
            elements.item(i).setAttribute('buttonTextContent', buttonTextContent)

            elements.item(i).addEventListener('click', handleClick)
        }
        if ( i === 3 )
        {
            buttonTextContent = arrayLetters9x9[startPosition - 1]
            letterIndex = (startPosition - 1).toString()

            elements.item(i).textContent = buttonTextContent + " " + letterIndex
            elements.item(i).setAttribute('tileIndex', letterIndex)

            elements.item(i).setAttribute('letterIndex', letterIndex)
            elements.item(i).setAttribute('buttonTextContent', buttonTextContent)

            elements.item(i).addEventListener('click', handleClick)
        }
        if ( i === 4 )
        {
            buttonTextContent = arrayLetters9x9[startPosition]
            letterIndex = (startPosition).toString()

            elements.item(i).textContent = buttonTextContent + " " + letterIndex
            elements.item(i).setAttribute('tileIndex', letterIndex)

            elements.item(i).setAttribute('letterIndex', letterIndex)
            elements.item(i).setAttribute('buttonTextContent', buttonTextContent)

            elements.item(i).addEventListener('click', handleClick)
        }
        if ( i === 5 )
        {
            buttonTextContent = arrayLetters9x9[startPosition + 1]
            letterIndex = (startPosition + 1).toString()

            elements.item(i).textContent = buttonTextContent + " " + letterIndex
            elements.item(i).setAttribute('tileIndex', letterIndex)

            elements.item(i).setAttribute('letterIndex', letterIndex)
            elements.item(i).setAttribute('buttonTextContent', buttonTextContent)

            elements.item(i).addEventListener('click', handleClick)
        }
        if ( i === 6 )
        {
            buttonTextContent = arrayLetters9x9[startPosition + 9]
            letterIndex = (startPosition + 9).toString()

            elements.item(i).textContent = buttonTextContent + " " + letterIndex
            elements.item(i).setAttribute('tileIndex', letterIndex)

            elements.item(i).setAttribute('letterIndex', letterIndex)
            elements.item(i).setAttribute('buttonTextContent', buttonTextContent)

            elements.item(i).addEventListener('click', handleClick)
        }
        if ( i === 7 )
        {
            buttonTextContent = arrayLetters9x9[startPosition + 10]
            letterIndex = (startPosition + 10).toString()

            elements.item(i).textContent = buttonTextContent + " " + letterIndex
            elements.item(i).setAttribute('tileIndex', letterIndex)

            elements.item(i).setAttribute('letterIndex', letterIndex)
            elements.item(i).setAttribute('buttonTextContent', buttonTextContent)

            elements.item(i).addEventListener('click', handleClick)
        }
        if ( i === 8 )
        {
            buttonTextContent = arrayLetters9x9[startPosition + 11]
            letterIndex = (startPosition + 11).toString()

            elements.item(i).textContent = buttonTextContent + " " + letterIndex
            elements.item(i).setAttribute('tileIndex', letterIndex)

            elements.item(i).setAttribute('letterIndex', letterIndex)
            elements.item(i).setAttribute('buttonTextContent', buttonTextContent)

            elements.item(i).addEventListener('click', handleClick)
        }

    }
}

function handleClick(event)
{
    console.log('buttonTextContent: ' + event.currentTarget.getAttribute('buttonTextContent') + ' letterIndex: ' + event.currentTarget.getAttribute('letterIndex'))

    // record what letter
    let clickedLetter = event.currentTarget.getAttribute('buttonTextContent')

    // check if the player has made a word if 5 characters selected (check word against the word list)

    // populate message thing at the bottom with the letter

    // start a new line if word complete

    // highlight character green and flip

    startPosition = parseInt(event.currentTarget.getAttribute('letterIndex'))
    Populate3x3Grid()

    return undefined;
}

function recordWord()
{

}

function flipTileGreen()
{

}

function flipTileYellow()
{

}