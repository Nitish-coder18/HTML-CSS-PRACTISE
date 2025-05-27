/* now we assign the class using function method not class method we use it because it is easy to understand and apply */

// this is my first way to apply function method 
import './paragraph.css'

/*
function Paragraph() {
    return <p className='
      para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consectetur laudantium accusantium iusto expedita asperiores illo ipsam fugiat quo ducimus!</p>;
} 
*/


// try to short the same function using arrow methods

const Paragraph = () => {
    return <p className='
      para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consectetur laudantium accusantium iusto expedita asperiores illo ipsam fugiat quo ducimus!</p>;
}

export default Paragraph;