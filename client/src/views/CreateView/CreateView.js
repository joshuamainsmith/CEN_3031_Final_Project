import React from 'react';
import './CreateView.css';
import { Form, Row, Col, FormGroup, Button, Label, Input } from 'reactstrap';

function CreateView() {
	
	return (
		<Form className="container">
			<Row form>
				<Col md={4}>
					<FormGroup>
						<Label for="careerTitle">Title</Label>
						<Input type="career" name="email" id="exampleEmail" placeholder="Enter a career" value={this.state.title}/>
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

			<Label for="education">Education</Label>
			<Form>
				<FormGroup check inline>
					<Label check>
						<Input type="checkbox" /> None
					</Label>
				</FormGroup>

				<FormGroup check inline>
					<Label check>
						<Input type="checkbox" /> High School
					</Label>
				</FormGroup>

				<FormGroup check inline>
					<Label check>
						<Input type="checkbox" /> Bachelors
					</Label>
				</FormGroup>

				<FormGroup check inline>
					<Label check>
						<Input type="checkbox" /> Masters
					</Label>
				</FormGroup>

				<FormGroup check inline>
					<Label check>
						<Input type="checkbox" /> Doctorate
					</Label>
				</FormGroup>

				<FormGroup check>
					<Label check>
						<Input type="checkbox" /> Other
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

			<Button color="primary" size="lg" active>
				Save
			</Button>

			<Button color="secondary" size="lg" active>
				Cancel
			</Button>
		</Form>
	);
}

const SaveCareerFields = props => {

	const [ careerTitle, setCareerTitle ] = useState(props.match.params.title);
	const [ careerEntryWage, setCareerEntryWage ] = useState(props.match.params.title);
	const [ careerMeanWage, setCareerMeanWage ] = useState(props.match.params.title);
	const [ careerMedianWage, setCareerMedianWage ] = useState(props.match.params.title);	

	useEffect(() => {
		const saveCareer = async () => {
			const response = await fetch('http://localhost:5000/api/careers/' + careerId);

			const responseData = await response.json();

			setLoadedCareer(responseData);
			setCareerId(careerId);
		};

		fetchCareers();
	}, []);

	return <CareerShow career={loadedCareer} />;
};

export default CreateView;
