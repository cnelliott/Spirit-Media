module.exports = (text, event, id) => {
	if (text.includes('foo')) {
		return {
			text: 'FOOBAR'
		}
	} // if cat

	if (text.includes('list')) {
		return {
			"attachment": {
				"type": "template",
				"payload": {
					"template_type": "button",
					"text": "What do you want to do next?",
					"buttons": [{
							"type": "web_url",
							"url": "https://www.addictions-store.com",
							"title": "Show Website"
						}, ] // buttons
				} // payload
			} // attachment
		};
	} // if list

	if (text.includes('location')) {
		return {
				"text": "Please share your location:",
				"quick_replies": [{
					"content_type": "location",
				}]
		} //location
	}


}