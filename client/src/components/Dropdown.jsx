//imports
import Dropdown from 'react-bootstrap/Dropdown';

//Dropdown component. Used in navbar to create various dropdowns.
//Props:
//dropTitle: The title of the dropdown
//title1: The title of the first link
//link1: The link of the first link
//etc...
function Drop({dropTitle,title1, link1, title2, link2, title3, link3, title4, link4, title5, link5}) {
  
  
    return (
        <Dropdown>
            {/* Dropdown title button */}
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className="btn col-12 justify-content-center">
                {dropTitle}
            </Dropdown.Toggle>
            {/* Dropdown menu */}
            <Dropdown.Menu data-bs-theme="dark">
                {/* Check if links exist, and if not then dont include the item */}
                {link1 && title1 ? (
                <Dropdown.Item href={link1}>{title1}</Dropdown.Item>
                ) : null}
                {link2 && title2 ? (
                <Dropdown.Item href={link2}>{title2}</Dropdown.Item>
                ) : null}
                {link3 && title3 ? (
                <Dropdown.Item href={link3}>{title3}</Dropdown.Item>
                ) : null}
                {link4 && title4 ? (
                <Dropdown.Item href={link4}>{title4}</Dropdown.Item>
                ) : null}
                {link5 && title5 ? (
                <Dropdown.Item href={link5}>{title5}</Dropdown.Item>
                ) : null}
            </Dropdown.Menu>
        </Dropdown>
  )
}

export default Drop;