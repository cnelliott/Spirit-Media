module.exports = (text, event) => {
	if (text.includes('foo')) {
		return {
			text: 'FOOBAR'
		}
	} // if foo

	if (text.includes('About your page')) {
		return{
  "setting_type":"greeting",
  "greeting":{
    "text":"Hi {{recipient_first_name}}, welcome to this bot. Sending the Holy Spirit through media to help the world."
  	}
  }
}

	if (text.includes('list')) {
		return {
			"attachment": {
				"type": "template",
				"payload": {
					"template_type": "button",
					"text": "What do you want to do next?",
					"buttons": [{
							"type": "web_url",
							"url": "http://www.cathedraloftheholyspirit.com",
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