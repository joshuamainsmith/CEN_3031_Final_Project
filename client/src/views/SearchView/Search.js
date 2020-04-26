import React, { useState, useEffect } from 'react';
import './Search.css';
import { Link, useLocation } from 'react-router-dom';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
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
	return (
		      <PaginationItem active={props.pageNumber === props.index}>
        <PaginationLink onClick={() => props.setIndex(props.pageNumber)} href="#">
					{props.pageNumber}
        </PaginationLink>
      </PaginationItem>
	);

}


function Search() {
	let query = useQuery();
	let median_wage, growth_rate;
		
	const [ loadedCareers, setLoadedCareers ] = useState([]);

	const [ index, setIndex ] = useState(1);
	//const [ careerID ] = useState(props.match.params.id);

	const limit = 10;

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

	const setPage = (index) => {
		if(index < 1 || index > totalPages) {
			return null;
		} else {
			setIndex(index);
		}
	}

	const totalPages = Math.ceil(loadedCareers.length / limit);
	//console.log('Current index: ', index, ' Total Pages: ', totalPages);
	const renderedPages = [];
	

	if(index > totalPages - 5){
		for(let i = totalPages - 5; i <= totalPages; i++){
			renderedPages.push(<Page key={i} setIndex={setIndex} pageNumber={i} index={index} />);
		}
	} else {
		for (let i = index; i <= index + 5; i++) {
			renderedPages.push(<Page key={i} setIndex={setIndex} pageNumber={i} index={index} />);
		}
	}

	const classes = useStyles();

	const careerList = loadedCareers.slice(index * limit - limit, limit * index).map((career) => {
		if (career.salary_ranges && career.salary_ranges.median) {
			median_wage = medianWage(career);
		}

		if (career.outlook) {
			growth_rate = growthRate(career);
		}

		return (
				<GridItem key={career.name} xs={12} sm={12}>
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
				
				    <Pagination aria-label="Page navigation example" className="text-center">
    <PaginationItem>
        <PaginationLink onClick={() => setIndex(1)} first href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={ () => setPage(index - 1)} previous href="#" />
      </PaginationItem>
      {renderedPages}
      <PaginationItem>
        <PaginationLink onClick={ () => setPage(index + 1)} next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => setIndex(totalPages)} last href="#" />
      </PaginationItem>
    </Pagination>
			</GridContainer>
		</div>
	);
}

export default Search;
