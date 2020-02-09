import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import SearchForm from './components/SearchForm';
import CharacterList from './components/CharacterList';
import { Navbar, Nav } from 'react-bootstrap';

// import {
// 	Collapse,
// 	Navbar,
// 	NavbarToggler,
// 	Nav,
// 	NavItem,
// 	NavLink
// } from 'reactstrap';

export default function App(props) {
	// const [collapsed, setCollapsed] = useState(true);
	// const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<main>
			<div class='p-3 mb-5 bg-danger rounded'>
				<Header />
				<Navbar variant='dark'>
					<Nav className='mr-auto'>
						<Nav.Link href='/'>
							<div class='card-header'>
								<h4>
									Home <div class='card bg-danger mb-1'></div>
								</h4>
							</div>
						</Nav.Link>
						<Nav.Link href='/characters'>
							<div class='card-header'>
								<h4>
									Characters <div class='card bg-danger mb-1'></div>
								</h4>
							</div>
						</Nav.Link>
						<Nav.Link href='/search'>
							<div class='card-header'>
								<h4>
									Search <div class='card bg-danger mb-1'></div>
								</h4>
							</div>
						</Nav.Link>
					</Nav>
				</Navbar>
			</div>

			{/* 
			<Nav justify variant="tabs" defaultActiveKey="/">
				<Nav.Item>
					<Nav.Link href="/">Home</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href='/characters'>Characters</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href='/search'> Character Search </Nav.Link>
				</Nav.Item>
			</Nav>
 */}

			{/* <Navbar color='' light>
				<NavbarToggler onClick={toggleNavbar} />
				<Collapse isOpen={!collapsed} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink href='/'> Home </NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/characters'> Characters </NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/search'> Character Search </NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar> */}
			<Route exact path='/'>
				<WelcomePage />{' '}
			</Route>
			<Route path='/characters'>
				<CharacterList />{' '}
			</Route>
			<Route path='/search'>
				<SearchForm />{' '}
			</Route>
		</main>
	);
}
