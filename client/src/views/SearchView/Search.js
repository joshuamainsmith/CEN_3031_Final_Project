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

function Page(props) {
	return <button onClick={() => props.setIndex(props.pageNumber)}> {props.pageNumber} </button>;
}

function Search(props) {
	let query = useQuery();
	let median_wage, growth_rate;
		const [ loadedCareers, setLoadedCareers ] = useState([]);

	const [ index, setIndex ] = useState(1);
	//const [ careerID ] = useState(props.match.params.id);
	// Create a limit, 10
	const limit = 3;
	useEffect(() => {
		const fetchCareers = async () => {
			let uri;
			const keyword = query.get('keyword');

			if (keyword) {
				uri = '/api/careers?keyword=' + keyword;
			} else {
				uri = '/api/careers';
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
		);
	}

	function growthRate(career) {
		return (
			<div className="col-12">
				<p>Growth Rate: {career.outlook}%</p>
			</div>
		);
	}

	const totalPages = Math.ceil(loadedCareers.length / limit);
	//
	const renderedPages = [];
	for (let i = 1; i <= totalPages; i++) {
		renderedPages.push(<Page setIndex={setIndex} pageNumber={i} />);
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
		<div className="container">
			<Heading title="Careers" textAlign="center" />
			<GridContainer>
				{careerList}
			</GridContainer>
		</div>
	);
}

export default Search;
