# tutorial: https://medium.com/@sharan.aadarsh/sending-notification-to-slack-using-python-8b71d4f622f3
# slack incoming webhooks: https://gm-fin.slack.com/services/B03RR589VUK

import json
import sys
import random
import requests
if __name__ == '__main__':
    #url = "<Webhook_URL>"
    slack_incoming_webhook_url = "https://hooks.slack.com/services/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"

    with open('msg_builder.json', 'r') as myfile:
        data=myfile.read()

    slack_data = json.loads(data)

    byte_length = str(sys.getsizeof(slack_data))
    headers = {'Content-Type': "application/json", 'Content-Length': byte_length}
    response = requests.post(slack_incoming_webhook_url, data=json.dumps(slack_data), headers=headers)
    
    if response.status_code != 200:
        raise Exception(response.status_code, response.text)