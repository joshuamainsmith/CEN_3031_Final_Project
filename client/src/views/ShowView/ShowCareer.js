import React, { useState, useEffect, useContext } from 'react';
import { Row, Col, Button, ModalHeader, ModalBody, ModalFooter, Modal } from 'reactstrap';
import { AuthContext } from '../../Context/AuthContext'
import './ShowCareer.css';
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
import CardIcon from "../../components/Card/CardIcon.js";
import Danger from "../../components/Typography/Danger.js";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
// import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import InfoIcon from '@material-ui/icons/Info';
import SchoolIcon from '@material-ui/icons/School';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ListIcon from '@material-ui/icons/List';
import SweetAlert from "react-bootstrap-sweetalert";

import styles from "../../assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";
import alertStyles from "../../assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";

const useStyles = makeStyles(styles);
const useAlertStyles = makeStyles(alertStyles);

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function CareerShow(props) {
	const {user} = useContext(AuthContext);

	const listSubjects = props.career.important_subjects.map((item) => <li key={item}>{capitalize(item)}</li>);
	const listKeywords = props.career.keywords.map((item) => <li key={item}>{capitalize(item)}</li>);
	const [alert, setAlert] = React.useState(null);

	const classes = useStyles();
	const alertClasses = useAlertStyles();

	const hideAlert = () => {
    setAlert(null);
  };

	const basicInfo = (name, msg) => {
    setAlert(
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" }}
        title={name}
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={alertClasses.button + " " + alertClasses.info}
      >
				<small>{msg}</small>
			</SweetAlert>
    );
  };

	const adminButtons = () => {
		return (
			<>
				{
					user.role === "admin" ?
					<Row>
						<Col md={12}>
							<Button color="danger" className="float-right" name="delete" onClick={toggle}>
								Delete
							</Button>
							<Modal isOpen={modal} toggle={toggle} className={props.className}>
								<ModalHeader toggle={toggle}>Confirm Deletion of {props.career.name}</ModalHeader>
								<ModalBody>Are you sure you want to delete?</ModalBody>
								<ModalFooter>
									<Button color="primary" onClick={handleDelete}>
										Confirm
									</Button>{' '}
									<Button color="secondary" onClick={toggle}>
										Cancel
									</Button>
								</ModalFooter>
							</Modal>

							<a href="/careers" id="cancel" name="cancel" className="btn btn-secondary float-left">
								Cancel
							</a>
							<a href={`/career/${props.career._id}/edit`} id="edit" name="edit">
								<Button color="warning" className="float-right" name="edit">
									Edit
								</Button>
							</a>
						</Col>
					</Row> : null
				}
			</>
		)
	}

	async function handleDelete() {
		try {
			fetch(`/api/careers/${props.career._id}`, { method: 'delete' });

			props.history.push('/careers/');
		} catch (error) {
			console.error(error);
		}
	}

	const [ modal, setModal ] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div>
			{alert}
			<GridContainer>
				<GridItem xs={12}>
					<Card product className={classes.cardCategory}>
						<CardHeader className={classes.cardCategory}>
							<Heading title={props.career.name}/>
							<h5>{props.career.type}</h5>
							<p>{props.career.description}</p>
						</CardHeader>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={4} md={4} lg={4}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <MonetizationOnIcon />
              </CardIcon>
							<p className={classes.cardCategory}>Entry Wage</p>
              <h3 className={classes.cardTitle}>{props.career.salary_ranges.entry ? "$" + props.career.salary_ranges.entry : "N/A"}</h3>
            </CardHeader>
            <CardFooter stats onClick={() => basicInfo('Entry Wage', 'The entry wage is the typical wage that employees receive when they are first starting in a profession. It is determined by adding together all of the wages of employees with 1-2 years of experience in a specific job or industry and dividing that total by the number of employees in that category.')}>
              <div className={classes.stats}>
								<InfoIcon />
                More Info
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <MonetizationOnIcon />
              </CardIcon>
							<p className={classes.cardCategory}>Mean Wage</p>
              <h3 className={classes.cardTitle}>{props.career.salary_ranges.entry ? "$" + props.career.salary_ranges.mean : "N/A"}</h3>
            </CardHeader>
            <CardFooter stats onClick={() => basicInfo('Mean Wage', 'The mean wage is the average wage that employees receive for the same work performed during a given period of time. It is determined by adding together all of the wages of employees in a specific job or industry and dividing that total by the number of employees.')}>
							<div className={alertClasses.center}>
              	<div className={classes.stats}>
									<InfoIcon />
									More Info
								</div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
				<GridItem xs={12} sm={4} md={4} lg={4}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <MonetizationOnIcon />
              </CardIcon>
							<p className={classes.cardCategory}>Median Wage</p>
              <h3 className={classes.cardTitle}>{props.career.salary_ranges.entry ? "$" + props.career.salary_ranges.median : "N/A"}</h3>
            </CardHeader>
            <CardFooter stats onClick={() => basicInfo('Median Wage', 'Median wage is the limit between the amount earned by 50 percent of workers who are the lowest paid and 50 percent of workers who are the highest paid in a particular job or industry occupation.')}>
              <div className={classes.stats}>
								<InfoIcon />
                More Info
              </div>
            </CardFooter>
          </Card>
        </GridItem>


				<GridItem xs={12} sm={12} md={12} lg={12}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <SchoolIcon />
              </CardIcon>
							<p className={classes.cardCategory}>Education</p>
              <h3 className={classes.cardTitle}>{props.career.salary_ranges.entry ? "$" + props.career.salary_ranges.median : "N/A"}</h3>
            </CardHeader>
            <CardFooter stats onClick={() => basicInfo('Median Wage', 'Median wage is the limit between the amount earned by 50 percent of workers who are the lowest paid and 50 percent of workers who are the highest paid in a particular job or industry occupation.')}>
              <div className={classes.stats}>
								<InfoIcon />
                More Info
              </div>
            </CardFooter>
          </Card>
        </GridItem>


				<GridItem xs={12} sm={12} md={12} lg={12}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <SchoolIcon />
              </CardIcon>
							<p className={classes.cardCategory}>Important Subjects</p>
              <h3 className={classes.cardTitle}>{props.career.salary_ranges.entry ? "$" + props.career.salary_ranges.median : "N/A"}</h3>
            </CardHeader>
            <CardFooter stats onClick={() => basicInfo('Median Wage', 'Median wage is the limit between the amount earned by 50 percent of workers who are the lowest paid and 50 percent of workers who are the highest paid in a particular job or industry occupation.')}>
              <div className={classes.stats}>
								<InfoIcon />
                More Info
              </div>
            </CardFooter>
          </Card>
        </GridItem>

				<GridItem xs={12} sm={12} md={12} lg={12}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <ShowChartIcon />
              </CardIcon>
							<p className={classes.cardCategory}>Projection</p>
              <h3 className={classes.cardTitle}>{props.career.salary_ranges.entry ? "$" + props.career.salary_ranges.median : "N/A"}</h3>
            </CardHeader>
            <CardFooter stats onClick={() => basicInfo('Median Wage', 'Median wage is the limit between the amount earned by 50 percent of workers who are the lowest paid and 50 percent of workers who are the highest paid in a particular job or industry occupation.')}>
              <div className={classes.stats}>
								<InfoIcon />
                More Info
              </div>
            </CardFooter>
          </Card>
        </GridItem>

				<GridItem xs={12} sm={12} md={12} lg={12}>
          <Card>
            <CardHeader color="rose" stats icon>
              <CardIcon color="rose">
                <ListIcon />
              </CardIcon>
							<p className={classes.cardCategory}>Keywords</p>
              <h3 className={classes.cardTitle}>{props.career.salary_ranges.entry ? "$" + props.career.salary_ranges.median : "N/A"}</h3>
            </CardHeader>
            <CardFooter stats onClick={() => basicInfo('Median Wage', 'Median wage is the limit between the amount earned by 50 percent of workers who are the lowest paid and 50 percent of workers who are the highest paid in a particular job or industry occupation.')}>
              <div className={classes.stats}>
								<InfoIcon />
                More Info
              </div>
            </CardFooter>
          </Card>
        </GridItem>


				<Row>
					<Col md={4}>
						<h3>Education</h3>
						<p>{props.career.education}</p>
					</Col>

					<Col md={4}>
						<h3>Projection</h3>
						<ul>
							<li>{props.career.outlook}</li>
						</ul>
					</Col>
				</Row>

				<Row>
					<Col md={4}>
						<div>
							<h3>Important Subjects</h3>
							<ul>{listSubjects}</ul>
						</div>
					</Col>
					<Col md={4}>
						<div>
							<h3>Keywords:</h3>
							<ul>{listKeywords}</ul>
						</div>
					</Col>
				</Row>
				{ adminButtons() }
			</GridContainer>
		</div>
	);
}

const ShowCareer = (props) => {
	const [ careerId, setCareerId ] = useState(props.match.params.id);
	const [ loadedCareer, setLoadedCareer ] = useState({ salary_ranges: {}, important_subjects: [], keywords: [] });

	useEffect(() => {
		const fetchCareers = async () => {
			const response = await fetch('/api/careers/' + careerId);

			const responseData = await response.json();

			setLoadedCareer(responseData);
			setCareerId(careerId);
		};

		fetchCareers();
	}, []);

	return <CareerShow career={loadedCareer} history={props.history} />;
};

export default ShowCareer;
