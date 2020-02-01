import React from 'react';

import {
	Card,
	CardBody,
	CardHeader,
	CardImg,
	CardText,
	Col,
	Row
} from 'reactstrap';

export default function CharacterCard(props) {
	return (
		<Card className='cardsCardsCards'>
			<CardBody>
				<CardHeader>
					<CardHeader>
						<Card></Card>
					</CardHeader>
					<div class=' p-3 d-flex justify-content-center'>
						<CardHeader>
							<Col>
								<Row>
									<Col>
										<Row>
											<Card>
												<CardBody>
													<CardHeader>
														<Card>
															<CardHeader>
																<h2>{props.name}</h2>{' '}
																<Card>
																	<CardHeader>
																		<CardText>Status: {props.status}</CardText>
																	</CardHeader>
																</Card>
															</CardHeader>
														</Card>

														<Card>
															<CardHeader>
																<CardBody>
																	<CardImg src={props.img} />
																</CardBody>
															</CardHeader>
														</Card>
														<Card>
															<CardHeader>Species: {props.species}</CardHeader>
															<CardHeader>Origin: {props.origin}</CardHeader>
															<CardHeader>
																Location: {props.location}
															</CardHeader>
														</Card>
													</CardHeader>
												</CardBody>
											</Card>
										</Row>
									</Col>
								</Row>
							</Col>
						</CardHeader>
					</div>
					<CardHeader>
						<Card></Card>
					</CardHeader>
				</CardHeader>
			</CardBody>
		</Card>
	);
}
// <-- ^^ y u do dis? ^^ --> //
