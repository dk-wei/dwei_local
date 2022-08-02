import smtplib
from email.message import EmailMessage
import pathlib
import os
from datetime import date
import yaml

today_date = str(date.today())
path = os.path.abspath("../output/"+today_date)

attachment_files = list(pathlib.Path(path).glob('*'))

# give gmail credential
credentials = yaml.load(open('../credentials/credentials.yml'), 
                        Loader=yaml.FullLoader)

# access values from dictionary
gmail_credentials = credentials['gmail_credential']

SENDER_EMAIL = gmail_credentials['jtsai_user_name']
APP_PASSWORD = gmail_credentials['jtsai_password']

#RECIEVER_EMAIL = ["dwei@grubmarket.com"]
RECIEVER_EMAIL = ["dwei@grubmarket.com", "jtsai@grubmarket.com"]
#RECIEVER_EMAIL = ["cs@grubmarket.com", "jtsai@grubmarket.com"]

#def send_mail_with_excel(recipient_email, subject, content, excel_file):
msg = EmailMessage()
msg['Subject'] = 'GrubMarket Transit Label ' + today_date
msg['From'] = SENDER_EMAIL
msg['To'] = RECIEVER_EMAIL
msg.set_content("Hello team, please find today's transit labels in the attachment")

# add attachment
for attachement_path in attachment_files:
    #print(str(attachement_path))
    attachement_name = str(attachement_path).split('/')[-1]

    with open(attachement_path, 'rb') as f:
        file_data = f.read()
    #msg.add_attachment(file_data, maintype="application", subtype="xlsx", filename=attachement)
    msg.add_attachment(file_data, maintype="image", subtype="jpeg", filename=attachement_name)
    
# send email
with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
    smtp.login(SENDER_EMAIL, APP_PASSWORD)
    smtp.send_message(msg)
            
print('Email sent!')
