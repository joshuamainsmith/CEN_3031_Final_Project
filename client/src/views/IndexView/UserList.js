import React, { useState, useEffect } from 'react';
//import { Row, Col, Label, Container } from 'reactstrap';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
//import Dvr from "@material-ui/icons/Dvr";
//import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
//import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
//import Check from "@material-ui/icons/Check";
//import Remove from "@material-ui/icons/Remove";
//import Add from "@material-ui/icons/Add";
//import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardHeader from "../../components/Card/CardHeader.js";

import { dataTable } from "../../variables/general.js";

import { cardTitle } from "../../assets/jss/material-dashboard-pro-react.js";

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};
const useStyles = makeStyles(styles);

const UserList = (props) => {
	const [ loadedUsers, setLoadedUsers ] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			const response = await fetch('/api/users/');
			const responseData = await response.json();
			console.log(responseData);

			setLoadedUsers(responseData);
		};

		fetchUsers();
	}, []);

	async function handleDelete(userId) {

		try {
			// Delete off the backend
			const response = await fetch(`/api/users/${userId}`, { method: 'delete' });
			// Delete off the frontend
			const index = loadedUsers.findIndex((user) => user._id === userId);

			const updatedUsers = [...loadedUsers];
			updatedUsers.splice(index, 1);
			setLoadedUsers(updatedUsers);
		} catch (error) {
			console.error(error);
		}
	}
	const [checked, setChecked] = React.useState([]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();

	function fillButtons(userId) {
		return [
			<Button color="success" className={classes.actionButtons} href={'/user/' + userId + '/edit'} >
				<Edit className={classes.icon}/>
			</Button>,
			<Button onClick={() => handleDelete(userId)} className={classes.actionButtons} color="danger">
				<Close className={classes.icon}/>
			</Button>
		]
	}

	const userList = loadedUsers.map((user) => {
		return (
			[user.username, user.role, fillButtons(user._id)]
		);
	});
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Users</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHead={[
                "User Name",
                "Role",
                "Actions"
              ]}
              tableData={userList}
              customCellClasses={[classes.left, classes.right, classes.right]}
              customClassesForCells={[0, 1, 2]}
              customHeadCellClasses={[
                classes.left,
                classes.right,
                classes.right
              ]}
              customHeadClassesForCells={[0, 1, 2]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
	);
};

export default UserList;
