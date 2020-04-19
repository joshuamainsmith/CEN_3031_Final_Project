import React from 'react';
import { Button } from 'reactstrap';
import './Home.css';
import { Link } from 'react-router-dom';

import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Heading from "../../components/Heading/Heading.js";
import styles from "../../assets/jss/material-dashboard-pro-react/views/gridSystemStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);


function Home() {
	const classes = useStyles();
	return (
		<GridContainer>
			<GridItem xs={12} sm={12}>
				<Card product className={classes.cardHover}>
					<CardHeader className={classes.cardHeaderHover}>
						<Heading title="Career Finder" textAlign="center" />
					</CardHeader>
					<CardBody className="text-center">
						<h4>We are here to help you find you a career that fits you.</h4>
						<h5><a
							href="/careers"
							class="btn btn-info btn-large btn-fill btn-round"
							>Discover your future</a
						></h5>
					</CardBody>
				</Card>
			</GridItem>
		</GridContainer>


	);
}

export default Home;
