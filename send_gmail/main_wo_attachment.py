from email import message
import smtplib
from email.message import EmailMessage
import pathlib
import os
from datetime import date
import yaml

from email import encoders
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart

today_date = str(date.today())
path = os.path.abspath("../output/"+today_date)

#attachment_files = list(pathlib.Path(path).glob('*'))

# give gmail credential
credentials = yaml.load(open('../credentials/credentials.yml'), 
                        Loader=yaml.FullLoader)

# access values from dictionary
gmail_credentials = credentials['gmail_credential']

#SENDER_EMAIL = gmail_credentials['jtsai_user_name']
#APP_PASSWORD = gmail_credentials['jtsai_password']

SENDER_EMAIL = gmail_credentials['jtsai_user_name']
APP_PASSWORD = gmail_credentials['jtsai_password']

RECIEVER_EMAIL = ["dwei@grubmarket.com"]
#RECIEVER_EMAIL = ["dwei@grubmarket.com", "jtsai@grubmarket.com"]
#RECIEVER_EMAIL = ["cs@grubmarket.com", "jtsai@grubmarket.com"]

#def send_mail_with_excel(recipient_email, subject, content, excel_file):


msg = EmailMessage()
#msg = MIMEMultipart('alternative')

# msg.add_header("From", "coderzcolumn07@gmail.com")
# msg.add_header("To", "sunny.2309@yahoo.in, mail2sunny.2309@gmail.com")
# msg.add_header("Subject", "Welcome to CoderzColumn")

msg['Subject'] = 'Test Email' +' '+ today_date
msg['From'] = SENDER_EMAIL
msg['To'] = ', '.join(RECIEVER_EMAIL)



##################### Set Mail Body #####################
body = '''
Hi,

This is a test email sent from Python.

Best,
Dave
'''
#########################################################

msg.set_content(body)

# with open('mail_body.txt', 'r') as f:
#     message = f.read()

# msg_text = MIMEText(message, 'plain')
# msg.attach(msg_text)

# add attachment
# for attachement_path in attachment_files:
#     #print(str(attachement_path))
#     attachement_name = str(attachement_path).split('/')[-1]

#     with open(attachement_path, 'rb') as f:
#         file_data = f.read()
#     #msg.add_attachment(file_data, maintype="application", subtype="xlsx", filename=attachement)
#     msg.add_attachment(file_data, maintype="image", subtype="jpeg", filename=attachement_name)
    
# send email

# ### Attach JPEG Image.
#     with open("dr_apj_kalam.jpeg", mode="rb") as fp:
#         img_content = fp.read()
#         message.add_attachment(img_content, maintype="image", subtype="jpeg", filename="kalam.jpeg")

#     ### Attach PDF Image.
#     with open("Deploying a Django Application to Google App Engine.pdf", mode="rb") as fp:
#         pdf_content = fp.read()
#         message.add_attachment(pdf_content, maintype="application", subtype="pdf", filename="doc.pdf")

#     ### Attach Zip Image.
#     with open("docs.zip", mode="rb") as fp:
#         zip_content = fp.read()
#         message.add_attachment(zip_content, maintype="application", subtype="zip", filename="docs.zip")


# send email
with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
    smtp.login(SENDER_EMAIL, APP_PASSWORD)
    smtp.send_message(msg)
            

print('Email sent!')
