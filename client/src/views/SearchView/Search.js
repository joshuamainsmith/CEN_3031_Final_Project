import React, { useState, useEffect } from 'react';
import './Search.css';
import { Link, useLocation } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Heading from "../../components/Heading/Heading.js";

import styles from "../../assets/jss/material-dashboard-pro-react/views/gridSystemStyle.js";

const useStyles = makeStyles(styles);

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function Search(props) {
	let query = useQuery();
	let median_wage, growth_rate;
	const [ loadedCareers, setLoadedCareers ] = useState([]);

	useEffect(() => {
		const fetchCareers = async () => {
			let uri;
			const keyword = query.get('keyword')

			if (keyword) {
				uri = '/api/careers?keyword=' + keyword
			} else {
				uri = '/api/careers'
			}
			const response = await fetch(uri);
			const responseData = await response.json();

			setLoadedCareers(responseData);
		};

		fetchCareers();
	}, []);

	function medianWage(career) {
		return (
			<div className="col-12">
				<p>Median Wage: ${career.salary_ranges.median.toLocaleString()}</p>
			</div>
		)
	}

	function growthRate(career) {
		return (
			<div className="col-12">
				<p>Growth Rate: {career.outlook}%</p>
			</div>
		)
	}

	const classes = useStyles();

	const careerList = loadedCareers.map((career) => {
		if (career.salary_ranges && career.salary_ranges.median) {
			median_wage = medianWage(career);
		}

		if (career.outlook) {
			growth_rate = growthRate(career);
		}

		return (
				<GridItem xs={12} sm={12}>
					<Card product className={classes.cardHover}>
						<CardHeader className={classes.cardHeaderHover}>
							<h3><Link to={"/career/" + career._id}>{career.name}</Link></h3>
						</CardHeader>
						<CardBody>
							<p>{career.description}</p>
						</CardBody>
						<CardFooter product>
							<div className={classes.price}>
								{medianWage}
							</div>
							<div className={classes.price}>
								{growthRate}
							</div>
						</CardFooter>
					</Card>
				</GridItem>
		);
	});

	return (
		<>
			<Heading title="Careers" textAlign="center" />
			<GridContainer>
				{careerList}
			</GridContainer>
		</>
	);
}

export default Search;
