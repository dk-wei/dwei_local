import csv
from pprint import pprint

processed = []

with open('names.csv', 'r') as csv_file:   # 创建一个file的环境
    csv_reader = csv.reader(csv_file)

    # #print(csv_reader)    # read 之后是一个generator
    
    # with open('new_names.csv', 'w') as new_file:
    #     csv_writer = csv.writer(new_file, delimiter='-')

    #     for line in csv_reader:   # 每次都是一个row
    #        pprint(line)
    #        # print(line[0])
    #        csv_writer.writerow(line)  # 每次按照line写入


    #csv_reader = csv.DictReader(csv_file)
    for line in csv_reader:

        #print(line)
        #print(line['last_name'])
        #print(line)
        processed.append(line[2])
    
print(processed)