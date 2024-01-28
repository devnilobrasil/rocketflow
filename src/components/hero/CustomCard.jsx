import Card from "react-bootstrap/Card";
import PropTypes from 'prop-types'

const CustomCard = ({ title, imageSrc, description, link }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <a href={link}>
                <Card.Img variant="top" src={imageSrc} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </a>
        </Card>
    )
}

CustomCard.propTypes = {
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default CustomCard;