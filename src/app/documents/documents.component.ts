import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"
	documents: Document[] = [
		{
			title: "My First Doc",
			description: "adsdasd das das",
			file_url: "http://google.com",
			updated_at: "11/11/16",
			image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"
		},
		{
			title: "My Second Doc",
			description: "adsdasd das das",
			file_url: "http://google.com",
			updated_at: "11/11/16",
			image_url: "https://cdn.pixabay.com/photo/2015/01/21/14/14/freelancer-606762_960_720.jpg"
		},
		{
			title: "My Last Doc",
			description: "adsdasd das das",
			file_url: "http://google.com",
			updated_at: "11/11/16",
			image_url: "http://maxpixel.freegreatpicture.com/static/photo/1x/Workplace-Apple-Freelancer-Imac-Ipad-Computer-606761.jpg"
		}
	]
}