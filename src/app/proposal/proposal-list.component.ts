import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html',
	styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15, 'Crezard Company', 'http://crezard.com', 'Angular 2 & Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')
	proposalTwo: Proposal = new Proposal(13, 'Something Company', 'http://something.com', 'Angular 2 & Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')
	proposalThree: Proposal = new Proposal(17, 'Boring Company', 'http://boring.com', 'Angular 2 & Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')

	proposals: Proposal[] = [
		this.proposalOne, 
		this.proposalTwo, 
		this.proposalThree
	]
}