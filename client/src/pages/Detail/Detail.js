import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { TextArea, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
	state = {
		article: {},
		note: ""
	};
	// When this component mounts, grab the article with the _id of this.props.match.params.id
	// e.g. localhost:3000/articles/599dcb67f0f16317844583fc
	componentDidMount() {
		API.getArticle(this.props.match.params.id)
			.then(res => this.setState({ article: res.data }))
			.catch(err => console.log(err));
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			article: {
				_id: this.state.article._id,
				title: this.state.article.title,
				url: this.state.article.url,
				snippet: this.state.article.snippet,
				date: this.state.article.date,
				[name]: value
			}
		});
	};

	handleUpdate = event => {
		// event.preventDefault();
		API.updateArticle(this.state.article._id, this.state.article)
			.then(alert("Note has been saved!"))
			.catch(err => console.log(err));
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-12">
						<Jumbotron>
							<article>
								<h1>
									Title: {this.state.article.title}
								</h1>
								<h2>
									Posted Date: {this.state.article.date}
								</h2>
								<h3>Snippet:</h3>
								<h4>
									{this.state.article.snippet}
								</h4>
							</article>
						</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col size="md-10 md-offset-1">
						<TextArea
							value={this.state.article.note}
							onChange={this.handleInputChange}
							name="note"
							placeholder="Note (Optional)"
						/>
						<FormBtn
							onClick={this.handleUpdate}
						>
							Save Note
              </FormBtn>
					</Col>
				</Row>
				<Row>
					<Col size="md-2">
						<Link to="/">← Back to Articles</Link>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Detail;
