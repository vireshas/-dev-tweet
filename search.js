const TwitterPackage = require('twitter');

let secret = require("./secret");
let client = new TwitterPackage(secret);
let count = 0;

const params = {screen_name: 'WeekendInvestng', count: 200};
const fetch = (max_id) => {
	params.max_id = max_id;
	client.get(
        'statuses/user_timeline', 
	    params, 
	    function(error, tweets, response) {
  			if (!error) {
				max_id = null
    			tweets.map(t => {
					console.log(t.text + "\n")
					console.log(t.created_at)
					console.log("----------------")
                    max_id = t.id
				})
				count += tweets.length

				if (max_id == null) return

				//console.log("MAXID " + max_id + " total " + count)
				fetch(max_id)
  			}
	  	}
    );
}

fetch()
