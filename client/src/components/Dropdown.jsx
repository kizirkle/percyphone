import Dropdown from 'react-bootstrap/Dropdown';

export default function Drop({dropTitle,title1, link1, title2, link2, title3, link3, title4, link4, title5, link5}) {
  return (
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className="btn col-12 justify-content-center">
                {dropTitle}
            </Dropdown.Toggle>
            <Dropdown.Menu data-bs-theme="dark">
                <Dropdown.Item href={link4}>{title4}</Dropdown.Item>
                <Dropdown.Item href={link1}>{title1}</Dropdown.Item>
                <Dropdown.Item href={link2}>{title2}</Dropdown.Item>
                <Dropdown.Item href={link3}>{title3}</Dropdown.Item>
                <Dropdown.Item href={link5}>{title5}</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
  )
}