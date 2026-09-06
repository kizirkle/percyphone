//imports
import Dropdown from 'react-bootstrap/Dropdown';

//Dropdown component. Used in navbar to create various dropdowns.
//Props:
//dropTitle: The title of the dropdown
//title1: The title of the first link
//link1: The link of the first link
//etc...
function Drop({dropTitle, dropArray, title1, link1, title2, link2, title3, link3, title4, link4, title5, link5}) {
  const drops = dropArray.map((drop) => {
    return <Dropdown.Item className="dropItem" key={drop.title} href={drop.link}>{drop.title}</Dropdown.Item>
  })
  
    return (
        <Dropdown>
            {/* Dropdown title button */}
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className="btn col-12 justify-content-center">
                {dropTitle}
            </Dropdown.Toggle>
            {/* Dropdown menu */}
            <Dropdown.Menu data-bs-theme="dark" className="drop">
                {drops}
            </Dropdown.Menu>
        </Dropdown>
  )
}

export default Drop;