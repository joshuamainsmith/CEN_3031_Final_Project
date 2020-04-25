import React, { useState } from 'react';
import './Celebs.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

import Angela from '../../assets/angela_bassett.jpg';
import Gerard from '../../assets/gerard_butler.jpg';
import Myron from '../../assets/myron_rolle.jpg';
import Ken from '../../assets/ken_jeong.jpg';
import John from '../../assets/John_Urschel.jpg';

const CelebsView = (props) => {
	return (
		<div className="card-container">
			<Card className="card">
				<CardImg className="celeb" top width="100%" src={Angela} alt="Card image cap" />
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card>
			<Card className="card">
				<CardImg className="celeb" top width="100%" src={Gerard} alt="Card image cap" />
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card>
			<Card className="card">
				<CardImg className="celeb" top width="100%" src={John} alt="Card image cap" />
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card>
			<Card className="card">
				<CardImg className="celeb" top width="100%" src={Ken} alt="Card image cap" />
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card>
			<Card className="card">
				<CardImg className="celeb" top width="100%" src={Myron} alt="Card image cap" />
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card>
			<Card className="card">
				<CardImg className="celeb" top width="100%" src={Gerard} alt="Card image cap" />
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card>
			<Card className="card">
				<CardImg className="celeb" top width="100%" src={Gerard} alt="Card image cap" />
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card>
			<Card className="card">
				<CardImg className="celeb" top width="100%" src={Gerard} alt="Card image cap" />
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card>
			<Card className="card">
				<CardImg className="celeb" top width="100%" src={Gerard} alt="Card image cap" />
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card>
		</div>
	);
};

export default CelebsView;
