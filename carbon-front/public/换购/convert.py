import csv
import json

data = []

with open("换购.csv") as csvFile:
  reader = csv.DictReader(csvFile)
  for row in reader:
    data.append({
      '_id': int(row['_id']),
      'title': row['title'].strip(),
      'price': {
        'credit': int(row['price_credit'])
      },
      'titleImage': f"/换购/{row['_id']}.jpg",
      'detail': {
        'detailImage': f"/换购/{row['_id']}-1.jpg",
        'brand': row['brand'].strip(),
        'description': row['detail_description'].strip(),
        'manufacturer': (row['detail_manufacturer']).strip(),
        'contents': row['detail_contents'].strip(),
        'additional': row['detail_additional'].strip()
      }
    })

print(json.dumps(data, ensure_ascii=False))