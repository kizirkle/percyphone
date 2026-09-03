import Dropdown from 'react-bootstrap/Dropdown';

export default function Drop({dropTitle,title1, link1, title2, link2, title3, link3}) {
  return (
    <>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            {dropTitle}
        </Dropdown.Toggle>
            <Dropdown.Menu data-bs-theme="dark">
                <Dropdown.Item href={link1}>{title1}</Dropdown.Item>
                <Dropdown.Item href={link2}>{title2}</Dropdown.Item>
                <Dropdown.Item href={link3}>{title3}</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </>
  )
}