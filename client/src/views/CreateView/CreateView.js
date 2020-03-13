import React, { useState } from 'react';
import './CreateView.css';
import { Form, Row, Col, FormGroup, Button, Label, Input } from 'reactstrap';

function CreateView() {
	const [ values, setValues ] = useState({ title: '', type: '' });

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSave = async (e) => {
		e.preventDefault();
		//alert(values.title);
		let data = { name: values.title, type: values.type };
		const response = await fetch('http://localhost:5000/api/careers/', {
			method: 'POST',
			mode: 'no-cors',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: JSON.stringify(data)
		});
	};

	return (
		<Form className="container">
			<Row form>
				<Col md={4}>
					<FormGroup>
						<Label for="careerTitle">Title</Label>
						<Input
							type="text"
							name="title"
							id="careerName"
							value={values.title}
							onChange={handleInputChange}
							placeholder="Enter a career"
						/>
					</FormGroup>
				</Col>
				<Col md={4}>
					<FormGroup>
						<Label for="careerType">Type</Label>
						<Input
							type="text"
							name="type"
							id="careerType"
							value={values.type}
							onChange={handleInputChange}
							placeholder="Enter a career"
						/>
					</FormGroup>
				</Col>

				<Col md={2}>
					<FormGroup>
						<Label for="entryWage">Wage Entry: </Label>
						<Input
							type="password"
							name="wageEntry"
							id="entryWage"
							placeholder="Enter the starting wage $"
						/>
					</FormGroup>
				</Col>
				<Col md={2}>
					<FormGroup>
						<Label for="meanWage">Mean: </Label>
						<Input type="password" name="wageEntry" id="entryWage" placeholder="Enter the Mean wage $" />
					</FormGroup>
				</Col>
				<Col md={2}>
					<FormGroup>
						<Label for="medianWage">Median: </Label>
						<Input type="password" name="wageEntry" id="entryWage" placeholder="Enter the median wage $" />
					</FormGroup>
				</Col>
			</Row>

			<FormGroup row className="career-description">
				<Label for="exampleText" sm={2} className="career-text">
					Career Description
				</Label>
				<Col sm={10}>
					<Input type="textarea" name="text" id="exampleText" />
				</Col>
			</FormGroup>

			<FormGroup row className="keywords">
				<Label for="exampleText" sm={2} className="keywords-text">
					Keywords
				</Label>
				<Col sm={10}>
					<Input type="textarea" name="text" id="exampleText" placeholder="comma sperated values" />
				</Col>
			</FormGroup>

			<FormGroup row className="subjects">
				<Label for="exampleText" sm={2} className="subjects-text">
					Subjects
				</Label>
				<Col sm={10}>
					<Input type="textarea" name="text" id="exampleText" placeholder="comma sperated values" />
				</Col>
			</FormGroup>

			<Label for="education">Education</Label>
			<Form>
				<FormGroup check inline>
					<Label check>
						<Input type="radio" name="radio1" /> None
					</Label>
				</FormGroup>

				<FormGroup check inline>
					<Label check>
						<Input type="radio" name="radio1" /> High School
					</Label>
				</FormGroup>

				<FormGroup check inline>
					<Label check>
						<Input type="radio" name="radio1" /> Bachelors
					</Label>
				</FormGroup>

				<FormGroup check inline>
					<Label check>
						<Input type="radio" name="radio1" /> Masters
					</Label>
				</FormGroup>

				<FormGroup check inline>
					<Label check>
						<Input type="radio" name="radio1" /> Doctorate
					</Label>
				</FormGroup>

				<FormGroup check>
					<Label check>
						<Input type="radio" name="radio1" /> Other
					</Label>

					<Label for="otherCareer" />
					<Col md={3}>
						<Input type="otherEducation" name="email" id="exampleEmail" placeholder="Other Education" />
					</Col>
				</FormGroup>
			</Form>

			<Row form>
				<Col md={2}>
					<FormGroup>
						<Label for="careerTitle">Percentage</Label>
						<Input type="career" name="email" id="exampleEmail" placeholder="Enter a percentage" />
					</FormGroup>
				</Col>
				<Col md={2}>
					<FormGroup>
						<Label for="entryWage">Base Year Estimate</Label>
						<Input type="password" name="wageEntry" id="entryWage" placeholder="Base Year Estimate $" />
					</FormGroup>
				</Col>
				<Col md={2}>
					<FormGroup>
						<Label for="meanWage">Projected Year Estimate </Label>
						<Input
							type="password"
							name="wageEntry"
							id="entryWage"
							placeholder="Projected year estimate $"
						/>
					</FormGroup>
				</Col>
			</Row>

			<Button color="primary" size="lg" active onClick={handleSave}>
				Save
			</Button>

			<Button color="secondary" size="lg" active>
				Cancel
			</Button>
		</Form>
	);
}

export default CreateView;
